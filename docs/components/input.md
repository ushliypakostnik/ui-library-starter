# Input

## Description

The component provides a simple input control.

## Connection

```vue
<template>
  <section>
    <Input :value.sync="input1" placeholder="Input placeholder text" />

    <Input
      :value.sync="input2"
      placeholder="Input placeholder text"
      error="Error text error text error text error text error text error text error text error text error text error text error text error text error text error text error text error text"
    />

    <Input
      disabled
      :value.sync="input3"
      placeholder="Input placeholder text"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
    };
  },
};
</script>
```

## Render

<Input :value="''" placeholder="Input placeholder text" />

<Input :value="''" placeholder="Input placeholder text" error="Error text error text error text error text error text error text error text error text error text error text error text error text error text" />

<Input :value="''" placeholder="Input placeholder text" disabled />

## Styles

<code class="nowrap">~/src/stylus/utils/\_variables.styl</code>

```stylus
$inputs = {
  height--input: 40px,

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

<code class="nowrap">@/src/components/Input/Input.vue</code>

<<< @/src/components/Input/Input.vue
