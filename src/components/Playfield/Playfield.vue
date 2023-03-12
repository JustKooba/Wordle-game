<template>
  <div class="content" :style="{ display: boardDisp }">
    <div class="board">
      <div
        class="square"
        v-for="(square, index) in 30"
        :key="index"
        :class="{ yellow: squares.includes(this.duplicatedLetters) }"
        v-html="squares[index]"
        ref="sqr"
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
      <button class="key" @click="funcKeys" :disabled="funcKeysDisabled">
        BACK
      </button>

      <button class="key" @click="funcKeys" :disabled="funcKeysDisabled">
        ENTER
      </button>
    </div>
  </div>
  <PlayAgain :style="{ display: playAgainDisp }" />
</template>
<script>
import words from "../dataComponents/words.json";
import PlayAgain from "../PlayAgain/PlayAgain.vue";
import "./style.scss";

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
      funcKeysDisabled: false,
      letters: "",
      randomWord: "",
      playAgainDisp: "none",
      boardDisp: "grid",
      duplicatedLetters: [],
    };
  },

  components: {
    PlayAgain,
  },
  methods: {
    keyPress(letter) {
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
        console.log("buttons disabled");
      } else {
        this.buttonsDisabled = false;
        console.log("buttons enabled");
      }

      if (
        this.position === 6 ||
        this.position === 11 ||
        this.position === 16 ||
        this.position === 21 ||
        this.position === 26
      ) {
        this.funcKeysDisabled = true;
      } else {
        this.funcKeysDisabled = false;
      }

      if (this.position >= 25) {
        this.buttonsDisabled = true;
      }
    },

    checkWord() {
      this.Word = this.squares.slice(this.position - 5, this.position).join("");
      this.letters = this.squares.slice(this.position - 5, this.position);
      if (this.Word.length < 5) {
        return;
      }

      for (let i = 0; i < this.wordArr.length; i++) {
        for (let j = 0; j < this.letters.length; j++) {
          if (this.wordArr[i] == this.letters[j]) {
            this.duplicatedLetters.push(this.letters[j]);
            console.log(this.duplicatedLetters);
          }
        }
      }

      console.log(this.duplicatedLetters);
      console.log(this.Word);
      console.log(this.letters);

      for (let i = 0; i < this.letters.length; i++) {
        if (
          !this.squares
            .slice(this.position - 5, this.position)
            .includes(this.letters[i])
        ) {
          console.log("Letters not found in word");
          return;
        }
        if (this.randomWord.includes(this.letters[i])) {
          console.log("Letters found in word");
        }
      }
      for (let g = 0; g < this.$refs.sqr.length; g++) {
        if (this.duplicatedLetters.includes(this.squares[g])) {
          this.$refs.sqr[g].classList.add("yellow");
        }
      }

      if (this.Word == this.randomWord) {
        console.log("Word is correct");
        this.playAgainDisp = "flex";
        this.boardDisp = "none";
      } else {
        console.log("Word is incorrect");
      }

      this.buttonsDisabled = false;
    },

    funcKeys() {
      if (event.target.innerText == "BACK") {
        this.position--;
        this.squares[this.position] = "";
        this.buttonsDisabled = false;
        this.funcKeysEnabled = false;
        console.log(this.position);
      } else if (event.target.innerText == "ENTER") {
        this.checkWord();
      }
    },
    randomizeWord() {
      this.randomWord = this.wordList[Math.floor(Math.random() * 1000)];
      this.wordArr = this.randomWord.split("");
      console.log(this.wordArr);
      console.log(this.randomWord);
    },
    isDuplicated(letter) {
      return this.duplicatedLetters.includes(letter);
    },
  },
  beforeMount() {
    this.randomizeWord();
  },
};
</script>
<style></style>
