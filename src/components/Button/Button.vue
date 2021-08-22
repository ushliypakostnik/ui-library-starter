<template>
  <div class="button__wrapper" :class="wide && `button__wrapper--wide`">
    <button
      v-if="!link || link === ''"
      :type="type"
      class="button"
      :class="[
        `button--${skin}`,
        `button--${size}`,
        disabled && 'button--disabled',
        wide && 'button--wide',
      ]"
      :disabled="disabled"
      @click.prevent="click"
    >
      <div class="button__content">
        <slot name="icon" />
        <slot />
      </div>
    </button>

    <a
      v-else
      :href="link"
      :type="type"
      class="button"
      :class="[
        `button--${skin}`,
        `button--${size}`,
        disabled && `button--disabled`,
        wide && `button--wide`,
      ]"
      :disabled="disabled"
      @click.prevent="click"
    >
      <div class="button__content">
        <slot name="icon" />
        <slot />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Button',

  props: {
    link: {
      type: [String, null],
      required: false,
      default: null,
    },
    skin: {
      type: String,
      required: false,
      default: 'primary',
    },
    size: {
      type: String,
      required: false,
      default: 'normal',
    },
    type: {
      type: String,
      required: false,
      default: 'button',
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    wide: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="stylus" scoped>
a.button
  display inline-block

.button
  @extend $button

  &__wrapper
    display inline-block

    + .button__wrapper
      margin-left 8px

    &--wide
      display block

  &--primary
    background $buttons.background--primary
    color $buttons.color--primary

  &--primary:hover
    background lighten($buttons.background--primary, $effects.amount)

  &--primary:active
    background darken($buttons.background--primary, $effects.amount)

  &--secondary
    background $buttons.background--secondary
    color $buttons.color--secondary

  &--secondary:hover
    background lighten($buttons.background--secondary, $effects.amount)

  &--secondary:active
    background darken($buttons.background--secondary, $effects.amount)

  &--large
    height $buttons.height--large
    padding 10px 32px
    $text("alena")

  &--normal
    height $buttons.height--normal
    padding 6px 16px
    $text("natasha")

  &--small
    height $buttons.height--small
    padding 4px 8px
    $text("nina")
    $border-radius("dancing")

  &--large,
  &--normal
    $border-radius("swimming")

  &--wide
    width 100%

  &--disabled
    pointer-events none
    cursor default
    $opacity("psy")
</style>
