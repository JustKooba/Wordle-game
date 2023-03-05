<template>
  <div>
    <header-main />
    <board />
  </div>
</template>

<script>
import HeaderMain from "./components/Header/Header.vue";
import board from "./components/board/Board.vue";
export default {
  components: {
    HeaderMain,
    board,
  },
};
</script>

<style>
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
