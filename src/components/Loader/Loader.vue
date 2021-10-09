<template>
  <div class="spinner" :class="`spinner--${sizeGood}`">
    <div v-for="(item, index) in parts" :key="`item${index}`" />
  </div>
</template>

<script>
export default {
  name: 'Loader',

  props: {
    size: {
      type: Number,
      required: false,
      default: 72,
    },
  },

  data() {
    return {
      sizeGood: null,
      parts: null,
    };
  },

  created() {
    if (![72, 48, 32, 24, 20, 16].includes(this.size)) this.sizeGood = 72;
    else this.sizeGood = this.size;

    this.parts =
      this.sizeGood === 72
        ? 24
        : this.sizeGood === 48
        ? 18
        : this.sizeGood === 32
        ? 12
        : this.sizeGood === 24
        ? 12
        : 8;
  },
};
</script>

<style lang="stylus" scoped>
@import "~/src/stylus/_stylebase.styl";

@keyframes spinner
  0%
    opacity 1

  100%
    opacity 0

$spinner($size, $parts, $time)
  width $size
  height $size

  div
    transform-origin ($size / 2) ($size / 2)
    animation spinner $time linear infinite

    for $item in (1..$parts)
      &:nth-child({$item})
        transform rotate((360 / $parts) * ($item - 1) * 1deg)
        animation-delay (-1 * $time) + (($time / $parts) * $item * 1s)

.spinner
  $time = 2.4s

  position relative

  div:after
    content " "
    display block
    position absolute
    border-radius 50%
    background: $colors.primary

  &--72
    $size = 72px
    $parts = 24

    div:after
      top 5px
      left 16px
      width 6px
      height 6px

    $spinner($size, $parts, $time)

  &--48
    $size = 48px
    $parts = 18

    div:after
      top 2px
      left 16px
      width 5px
      height 5px

    $spinner($size, $parts, $time)

  &--32
    $size = 32px
    $parts = 12

    div:after
      top 2px
      left 20px
      width 4px
      height 4px

    $spinner($size, $parts, $time)

  &--24
    $size = 24px
    $parts = 12

    div:after
      top 2px
      left 16px
      width 3px
      height 3px

    $spinner($size, $parts, $time)

  &--20
    $size = 20px
    $parts = 8

    div:after
      top 2px
      left 8px
      width 3px
      height 3px

    $spinner($size, $parts, $time)


  &--16
    $size = 16px
    $parts = 8

    div:after
      top 1px
      left 8px
      width 3px
      height 3px

    $spinner($size, $parts, $time)
</style>
