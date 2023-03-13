<template>
  <div class="endScreen">
    <h1>You {{ result }}</h1>

    <p>The word was: word</p>
    <button class="play-again-btn" @click="restartGame">Play again</button>
  </div>
</template>
<script>
export default {
  props: {
    result: String,
  },
  methods: {
    restartGame() {
      this.$emit("restart");
    },
  },
};
</script>
<style></style>
