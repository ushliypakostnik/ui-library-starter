<template>
  <a :href="path" :target="target" class="link">
    <slot />
  </a>
</template>

<script>
export default {
  name: 'Link',

  props: {
    path: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      required: false,
      default: '_blank',
    },
  },
};
</script>

<style lang="stylus" scoped>
@import "~/src/stylus/_stylebase.styl";

.link
  color $colors.primary
  border-bottom 2px solid transparent
  transition border $effects.duration
  text-decoration none

  &:hover
    border-bottom 2px solid $colors.primary
    text-decoration none
</style>
