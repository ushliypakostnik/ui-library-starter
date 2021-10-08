<template>
  <div
    class="select__wrapper"
    :class="{
      'select__wrapper--focus': control.length > 0 || isFocus,
      'select__wrapper--disabled': disabled,
      'select__wrapper--error': error && error.length > 0,
    }"
  >
    <v-select
      ref="select"
      v-model="control"
      :options="data"
      :placeholder="placeholder"
      :clearable="false"
      @search:focus="onFocusEvent"
      @search:blur="onBlurEvent"
      @input="onInputEvent"
    >
      <template #open-indicator>
        <Icon name="down" fill="#8bc24c" />
      </template>
    </v-select>

    <div v-if="error && error.length > 0" class="select__error">{{ error }}</div>
  </div>
</template>

<script>
import Icon from '../Icon/Icon';

import controls from '../../../src/mixins/controls.js';
import inputs from '../../../src/mixins/inputs.js';

export default {
  name: 'Select',

  mixins: [controls, inputs],

  components: {
    Icon,
  },

  props: {
    data: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: [String, null],
      required: false,
      default: null,
    },
  },

  /* Для открытого дропдауна по умолчанию
  mounted() {
    this.$refs.select.open = true;
  }, */
};
</script>

<style lang="stylus">
@import "~/src/stylus/_stylebase.styl";

.vs
  &__dropdown-toggle
    @extend $input
    display flex
    align-items center
    width 100%
    height $inputs.height--input
    padding-bottom 0
    cursor pointer !important

  &__selected-options
    padding 0
    height $inputs.height--input

  &__selected
    display block
    border none
    padding 0
    margin 0
    color $colors.text
    height $inputs.height--input
    $text("alena")
    line-height $inputs.height--input

  &__search
    width 100%
    height $inputs.height--input
    color $colors.titanic
    $text("alena")

    &,
    &:focus
      border none
      padding 0
      margin 0

  &__actions
    padding 0

  &__dropdown-menu
    @extend $shadow
    border none
    padding 0
    margin-top 1px
    list-style none
    $border-radius("shooting")

  &__dropdown-option
    position relative
    height $inputs.height--input
    padding 0 $inputs.padding
    display flex
    align-items center
    color $colors.text
    background transparent
    $text("alena")
    $opacity("waltz")

    &:before
      content ""
      display block
      position absolute
      left 0
      top 0
      right 0
      width 4px
      height 100%
      background transparent

    &:hover
      color $colors.text
      background rgba($colors.primary, $opacites.pop)
      $opacity("waltz")

    &--selected
      color $colors.text
      background transparent
      $opacity("waltz")

      &:before
        background $colors.primary

  &--open
    .vs__selected
      opacity $opacites.waltz !important

    .vs__actions
      transition transform $effects.duration
      transform rotate(180deg) translateX(-1 * $inputs.padding) !important

  &--searching
    .vs__dropdown-menu
      padding 10px 20px

.select
  &__wrapper
    @extend $input__wrapper

    .vs__actions
      @extend $flex--center
      transform translateX($inputs.padding)
      width $inputs.height--input
      height $inputs.height--input

  &__error
    @extend $input__error
    top $inputs.height--input
</style>
