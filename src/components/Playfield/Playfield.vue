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
    <div
      class="key"
      v-for="letter in alphabet"
      :key="letter"
      @click="keyPress(letter)"
    >
      {{ letter }}
    </div>
    <div class="key" @click="funcKeys">BACK</div>
    <div class="key disabled">ENTER</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      squares: Array(30).fill(""),
      position: 0,
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    };
  },
  methods: {
    keyPress(letter) {
      console.log("key pressed: " + letter);
      if (this.position < 30) {
        this.squares[this.position] = letter;
        this.position++;
        this.currentLetter = this.squares[this.position];
      }
    },
    funcKeys() {
      if (event.target.innerText == "BACK") {
        this.squares[this.position] = "";
        this.position--;
      }
    },
  },
};
</script>
<style></style>
