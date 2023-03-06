<template>
  <div class="header">
    <img src="../../assets/twitter.svg" alt="twitter logo" />
    <h1>WORDLE</h1>
    <img
      src="../../assets/question.svg"
      alt="question mark"
      @click="htpToggle"
    />
  </div>
  <htp :style="{ display: htpDisplay }" />
</template>

<script>
import htp from "../howtoplay/htp.vue";
export default {
  name: "HeaderMain",
  components: {
    htp,
  },
  data() {
    return {
      htpDisplay: "none",
    };
  },
  methods: {
    htpToggle() {
      if (this.htpDisplay === "none") {
        this.htpDisplay = "block";
      } else {
        this.htpDisplay = "none";
      }
    },
  },
};
</script>

<style></style>
