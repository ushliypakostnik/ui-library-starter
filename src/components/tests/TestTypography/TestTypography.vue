<template>
  <ul class="typo">
    <li class="typo__1">elena</li>
    <li class="typo__2">olga</li>
    <li class="typo__3">anna</li>
    <li class="typo__4">maria</li>
    <li class="typo__5">katya</li>
    <li class="typo__6">alena</li>
    <li class="typo__7">natasha</li>
    <li class="typo__8">nina</li>
  </ul>
</template>

<script>
export default {
  name: 'TestTypography',
};
</script>

<style lang="stylus" scoped>
@import "~/src/stylus/_stylebase.styl";

.typo
  padding 0
  list-style none

  > li
    margin-bottom 30px

  &__1
    $text("elena")

  &__2
    $text("olga")

  &__3
    $text("anna")

  &__4
    $text("maria")

  &__5
    $text("katya")

  &__6
    $text("alena")

  &__7
    $text("natasha")

  &__8
    $text("nina")
</style>
