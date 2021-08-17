<template>
  <div>
    <div class="test--local">Component Styles Test</div>
    <div class="test--global">Global Styles Test</div>
    <Test2 />
  </div>
</template>

<script>
export default {
  name: 'Test',
};
</script>

<style lang="stylus" scoped>
@import "~/src/stylus/_stylebase.styl";

$var--local = #ff0000

.test
  &--local
    color $var--local

  &--global
    color $var--global
</style>
