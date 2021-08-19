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
.link
  cursor pointer
  display inline
  color darken($colors.primary, 30%)
  text-decoration none !important

  &:hover
    border-bottom 2px solid darken($colors.primary, 30%)
</style>
