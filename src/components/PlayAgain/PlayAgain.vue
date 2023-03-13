<template>
  <div class="endScreen">
    <h1 v-if="result === 'lost'">You lost</h1>
    <h1 v-if="result === 'won'">You won!</h1>
    <p>The word was: {{ word }}</p>
    <button class="play-again-btn" @click="restartGame">Play again</button>
  </div>
</template>
<script>
export default {
  props: {
    result: String,
    word: String,
  },
  methods: {
    restartGame() {
      this.$emit("restart");
    },
  },
};
</script>
<style></style>
