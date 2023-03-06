<template>
  <div class="board">
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
  </div>
  <div class="keyboard">
    <div class="key" @click="keyPress">A</div>
    <div class="key" @click="keyPress">B</div>
    <div class="key" @click="keyPress">C</div>
    <div class="key" @click="keyPress">D</div>
    <div class="key" @click="keyPress">E</div>
    <div class="key" @click="keyPress">F</div>
    <div class="key" @click="keyPress">G</div>
    <div class="key" @click="keyPress">H</div>
    <div class="key" @click="keyPress">I</div>
    <div class="key" @click="keyPress">J</div>
    <div class="key" @click="keyPress">K</div>
    <div class="key" @click="keyPress">L</div>
    <div class="key" @click="keyPress">M</div>
    <div class="key" @click="keyPress">N</div>
    <div class="key" @click="keyPress">O</div>
    <div class="key" @click="keyPress">P</div>
    <div class="key" @click="keyPress">Q</div>
    <div class="key" @click="keyPress">R</div>
    <div class="key" @click="keyPress">S</div>
    <div class="key" @click="keyPress">T</div>
    <div class="key" @click="keyPress">U</div>
    <div class="key" @click="keyPress">V</div>
    <div class="key" @click="keyPress">W</div>
    <div class="key" @click="keyPress">X</div>
    <div class="key" @click="keyPress">Y</div>
    <div class="key" @click="keyPress">Z</div>
    <div class="key">BACK</div>
    <div class="key">ENTER</div>
  </div>
</template>

<script>
export default {
  name: "Board",
  data() {
    return {
      key: "",
    };
  },
  methods: {
    keyPress() {
      this.key = event.target.innerText;
      console.log("key pressed: " + this.key);
    },
  },
};
</script>

<style></style>
