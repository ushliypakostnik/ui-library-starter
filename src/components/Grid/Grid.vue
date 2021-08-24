<template>
  <div class="grid" :class="`grid--${name}`">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Grid',

  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
// Common
$grids-common
  display grid

  +$desktop()
    grid-gap: $grids.gutter--desktop

  +$tablet()
    grid-gap $grids.gutter--tablet

  +$mobile()
    grid-gap $grids.gutter--mobile

.grid
  @extend $grids-common

  &--rhythm-for-two
    grid-template-columns repeat(2, 1fr)

    +$mobile()
      grid-template-columns repeat(1, 1fr)

  &--rhythm-for-three
    grid-template-columns repeat(3, 1fr)

    +$mobile()
      grid-template-columns repeat(1, 1fr)

  &--rhythm-for-four
    grid-template-columns repeat(4, 1fr)

    +$mobile()
      grid-template-columns repeat(1, 1fr)

  &--rhythm-for-six
    grid-template-columns repeat(6, 1fr)

    +$mobile()
      grid-template-columns repeat(1, 1fr)

  &--rhythm-for-eight
    grid-template-columns repeat(8, 1fr)

    +$mobile()
      grid-template-columns repeat(1, 1fr)

  &--rhythm-for-twelve
    grid-template-columns repeat(12, 1fr)

    +$mobile()
      grid-template-columns repeat(1, 1fr)
</style>
