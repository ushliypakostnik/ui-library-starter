<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    class="icon"
    :class="`icon--${name}`"
    :width="`${size}px`"
    :height="`${size}px`"
    :viewBox="viewBox"
    :aria-labelledby="name"
    role="presentation"
  >
    <title :id="name">{{ name }}</title>

    <g :fill="fill">
      <Close v-if="name === 'close'" />
      <Bar v-if="name === 'bar'" />
      <Search v-if="name === 'search'" />
      <Left v-if="name === 'left'" />
      <Right v-if="name === 'right'" />
      <Down v-if="name === 'down'" />
      <Up v-if="name === 'up'" />
    </g>
  </svg>
</template>

<script>
import Close from './Close';
import Bar from './Bar';
import Search from './Search';
import Left from './Left';
import Right from './Right';
import Down from './Down';
import Up from './Up';

export default {
  name: 'Icon',

  props: {
    name: {
      type: String,
      required: true,
    },
    fill: {
      type: String,
      required: false,
      default: 'currentColor',
    },
  },

  components: {
    Close,
    Bar,
    Search,
    Left,
    Right,
    Down,
    Up,
  },

  data() {
    return {
      size: null,
    };
  },

  created() {
    this.size = 24; // can be changed for some icons
  },

  computed: {
    viewBox() {
      return `0 0 ${this.size} ${this.size}`;
    },
  },
};
</script>

<style lang="stylus" scoped>
.icon
  color inherit
</style>
