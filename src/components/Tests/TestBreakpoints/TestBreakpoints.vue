<template>
  <div>
    <div>Responsive Stylus mixins test:</div>
    <div class="visible--desktop">The block is visible only on desktops</div>
    <div class="visible--tablet">The block is visible only on tables</div>
    <div class="visible--mobile">The block is visible only on mobiles</div>
    <br />
    <div>Resize javasript mixin test:</div>
    <div v-if="isDesktop">The block is present in the DOM only on desktops</div>
    <div v-if="isTablet">The block is present in the DOM only on tablets</div>
    <div v-if="isMobile">The block is present in the DOM only on mobiles</div>
  </div>
</template>

<script>
import resize from '../../../../src/mixins/resize.js';

export default {
  name: 'TestBreakpoints',

  mixins: [resize],
};
</script>

<style lang="stylus" scoped>
@import "~/src/stylus/_stylebase.styl";

.visible
  &--desktop,
  &--tablet,
  &--mobile
    display none

  &--desktop
    +$desktop()
      display block

  &--tablet
    +$tablet()
      display block

  &--mobile
    +$mobile()
      display block
</style>
