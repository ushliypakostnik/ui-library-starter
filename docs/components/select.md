# Select

## Description

Used a wrapper over a third party [vue-select](https://vue-select.org/) module.

## Connection

```vue
<template>
  <section>
    <Select
      :value.sync="select1"
      :data="selectMock"
      placeholder="Select placeholder text"
    />

    <Select
      :value.sync="select2"
      :data="selectMock"
      placeholder="Select placeholder text"
      error="Error text error text error text error text error text error text error text error text error text error text error text error text error text error text error text error text"
    />

    <Select
      disabled
      :value.sync="select3"
      :data="selectMock"
      placeholder="Select placeholder text"
    />
  </section>
</template>

<script>
const selectMock = ['Тест1', 'Тест2', 'Тест3', 'Тест4', 'Тест5'];

export default {
  data() {
    return {
      selectMock,
      select1: '',
      select2: '',
      select3: '',
    };
  },
};
</script>
```

## Render

<Select :value="''" :data="['Тест1', 'Тест2', 'Тест3', 'Тест4', 'Тест5']" placeholder="Select placeholder text" />

<Select :value="''" :data="['Тест1', 'Тест2', 'Тест3', 'Тест4', 'Тест5']" placeholder="Select placeholder text" error="Error text error text error text error text error text error text error text error text error text error text error text error text error text" />

<Select :value="''" :data="['Тест1', 'Тест2', 'Тест3', 'Тест4', 'Тест5']" placeholder="Select placeholder text" disabled />

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

<code class="nowrap">@/src/components/Select/Select.vue</code>

<<< @/src/components/Select/Select.vue
