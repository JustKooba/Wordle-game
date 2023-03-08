<template>
  <div class="board">
    <div
      class="square"
      v-for="(square, index) in 30"
      :key="index"
      v-html="squares[index]"
    ></div>
  </div>
  <div class="keyboard">
    <button
      class="key"
      v-for="letter in alphabet"
      :key="letter"
      @click="keyPress(letter)"
      :disabled="buttonsDisabled"
    >
      {{ letter }}
    </button>
    <div class="key" @click="funcKeys">BACK</div>
    <div class="key disabled">ENTER</div>
  </div>
</template>
<script>
import words from "../dataComponents/words.json";
const wordList = words.map((word) => word.toUpperCase());
export default {
  data() {
    return {
      squares: Array(30).fill(""),
      position: 0,
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      buttonsDisabled: false,
      wordList: wordList,
      Word: "",
    };
  },
  methods: {
    keyPress(letter) {
      console.log("key pressed: " + letter);
      console.log("position: " + this.position);
      if (this.position < 30) {
        this.squares[this.position] = letter;
        this.position++;
        this.currentLetter = this.squares[this.position];
      }

      if (
        this.position === 5 ||
        this.position === 10 ||
        this.position === 15 ||
        this.position === 20 ||
        this.position === 25
      ) {
        this.buttonsDisabled = true;
        this.checkWord();
      }
    },

    checkWord() {
      this.Word = this.squares.slice(0, 5).join("");
      console.log(this.Word);

      if (this.wordList.includes(this.Word.trim().toUpperCase())) {
        console.log("Word is in the list");
      } else {
        console.log("Word is not in the list");
      }

      setTimeout(() => {
        this.buttonsDisabled = false;
      }, 1000);
    },

    funcKeys() {
      if (event.target.innerText == "BACK") {
        this.position--;
        this.squares[this.position] = "";
      }
    },
  },
};
</script>
<style></style>
