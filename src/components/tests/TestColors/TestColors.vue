<template>
  <ul class="colors">
    <li class="colors__1">cat</li>
    <li class="colors__2">dog</li>
    <li class="colors__3">bird</li>
    <li class="colors__4">wood</li>
    <li class="colors__5">stone</li>
    <li class="colors__6">sea</li>
  </ul>
</template>

<script>
export default {
  name: 'TestColors',
};
</script>

<style lang="stylus" scoped>
@import "~/src/stylus/_stylebase.styl";

.colors
  padding 0
  display grid
  grid-template-columns 1fr 1fr 1fr

  +$gadgets()
    display block

  > li
    @extend $flex--center // ~/src/stylus/utils/_placeholders.styl
    height 200px
    color #ffffff // very bad - not palette color !!!
    $text("olga")

    +$gadgets()
      height 120px
      $text("anna")

  &__1
    background $colors.cat

  &__2
    background $colors.dog

  &__3
    background $colors.bird

  &__4
    background $colors.wood

  &__5
    background $colors.stone

  &__6
    background $colors.sea
</style>
