<template>
  <div
    class="input__wrapper"
    :class="{
      'input__wrapper--focus': control.length > 0 || isFocus,
      'input__wrapper--disabled': disabled,
      'input__wrapper--error': error && error.length > 0,
    }"
  >
    <input
      v-model="control"
      class="input__control"
      :placeholder="placeholder"
      :disabled="disabled"
      @focus="onFocusEvent"
      @blur="onBlurEvent"
      @input="onInputEvent"
    />

    <div v-if="error && error.length > 0" class="input__error">{{ error }}</div>
  </div>
</template>

<script>
import controls from '../../../src/mixins/controls.js';
import inputs from '../../../src/mixins/inputs.js';

export default {
  name: 'Input',

  mixins: [controls, inputs],
};
</script>

<style lang="stylus" scoped>
@import "~/src/stylus/_stylebase.styl";

.input
  &__wrapper
    @extend $input__wrapper

  &__control
    @extend $input
    height $inputs.height--input

  &__error
    @extend $input__error
    top $inputs.height--input
</style>
