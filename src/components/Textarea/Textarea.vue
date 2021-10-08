<template>
  <div
    class="textarea__wrapper"
    :class="{
      'textarea__wrapper--focus': control.length > 0 || isFocus,
      'textarea__wrapper--disabled': disabled,
      'textarea__wrapper--error': error && error.length > 0,
    }"
  >
    <textarea
      v-model="control"
      class="textarea__control"
      :placeholder="placeholder"
      :disabled="disabled"
      @focus="onFocusEvent"
      @blur="onBlurEvent"
      @input="onInputEvent"
    />

    <div v-if="error && error.length > 0" class="textarea__error">{{ error }}</div>
  </div>
</template>

<script>
import controls from '../../../src/mixins/controls.js';
import inputs from '../../../src/mixins/inputs.js';

export default {
  name: 'Textarea',

  mixins: [controls, inputs],
};
</script>

<style lang="stylus" scoped>
@import "~/src/stylus/_stylebase.styl";

.textarea
  &__wrapper
    @extend $input__wrapper

  &__control
    @extend $input
    height $inputs.height--textarea
    padding-top 10px
    resize none

  &__error
    @extend $input__error
    top $inputs.height--textarea
</style>
