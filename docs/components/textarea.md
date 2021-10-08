# Textarea

## Description

The component provides a simple textarea control.

## Connection

```vue
<template>
  <section>
    <Textarea :value.sync="textarea1" placeholder="Textarea placeholder text" />

    <Textarea
      :value.sync="textarea2"
      placeholder="Textarea placeholder text"
      error="Error text error text error text error text error text error text error text error text error text error text error text error text error text error text error text error text"
    />

    <Textarea
      disabled
      :value.sync="textarea3"
      placeholder="Textarea placeholder text"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      textarea1: '',
      textarea2: '',
      textarea3: '',
    };
  },
};
</script>
```

## Render

<Textarea :value="''" placeholder="Textarea placeholder text" />

<Textarea :value="''" placeholder="Textarea placeholder text" error="Error text error text error text error text error text error text error text error text error text error text error text error text error text" />

<Textarea :value="''" placeholder="Textarea placeholder text" disabled />

## Styles

<code class="nowrap">~/src/stylus/utils/\_variables.styl</code>

```stylus
$inputs = {
  height--textarea: 200px,

  padding: 16px,

  background--default: rgba($colors.primary, $opacites.pop),
  background--error: rgba($colors.bird, $opacites.pop),
}
```

<code class="nowrap">~/src/stylus/utils/\_placeholders.styl</code>

```stylus
// Forms

$input__background($background)
  background $background

  &:hover
    background lighten($background, $effects.amount)

  &:active,
  &:focus
    background darken($background, $effects.amount)

$input
  // ...

  &__wrapper
    // ...

    &--disabled
      // ...
  
    &--error
      // ...

  &__error
    // ...
```

## API

[controls.js](/components/controls)

[inputs.js](/components/inputs)

## Source code

<code class="nowrap">@/src/components/Textarea/Textarea.vue</code>

<<< @/src/components/Textarea/Textarea.vue
