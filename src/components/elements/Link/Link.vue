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
  cursor pointer
  display inline
  text-decoration none !important
  color $colors.primary

.link:hover
  text-decoration none !important
  border-bottom 2px solid $colors.primary
</style>
