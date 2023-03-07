<template>
  <div class="board">
    <div
      class="square"
      v-for="(square, index) in 30"
      :key="index"
      v-html="currentLetter"
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
    <div class="key" @click="keyPress('BACK')">BACK</div>
    <div class="key disabled" @click="keyPress('ENTER')">ENTER</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      squares: Array(30).fill(""),
      position: 0,
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      currentLetter: "",
    };
  },
  methods: {
    keyPress(letter) {
      console.log("key pressed: " + letter);
      this.currentLetter = letter;
      if (this.position < 30) {
        this.squares, this.position, this.currentLetter;
        this.position++;
      }

      if (
        this.position === 5 ||
        this.position === 10 ||
        this.position === 15 ||
        this.position === 20 ||
        this.position === 25
      ) {
        this.$el.querySelectorAll(".key").forEach((key) => {
          if (key.innerText === "ENTER") {
            key.classList.remove("disabled");
          } else {
            key.classList.add("disabled");
          }
        });
      }
    },
  },
};
</script>
<style></style>
