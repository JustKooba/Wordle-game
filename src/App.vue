<template>
  <div>
    <header-main />
    <playfield />
  </div>
</template>

<script>
import HeaderMain from "./components/Header/Header.vue";
import Playfield from "./components/Playfield/Playfield.vue";
export default {
  components: {
    HeaderMain,
    Playfield,
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
