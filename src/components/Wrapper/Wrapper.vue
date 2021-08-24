<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Wrapper',
};
</script>

<style lang="stylus" scoped>
.wrapper
  width 100%
  max-width $wrapper.width--max
  margin 0 auto

  +$desktop()
    padding 0 $wrapper.gutter--desktop

  +$tablet()
    padding 0 $wrapper.gutter--tablet

  +$mobile()
    padding 0 $wrapper.gutter--mobile
</style>
