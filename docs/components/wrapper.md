# Wrapper

## Description

A component provides a standard content wrapper for use in most cases already in the assembly (and not inside the component). So, sometimes, the implementation of a design, for example - sliders with controls for gadgets, requires - "break the wrapper".

## Connection

```vue
<template>
  <section>
    <Wrapper>
      ...
    </Wrapper>
  
    <SomeSlider />
  
    <Wrapper>
      ...
    </Wrapper>
  </section>
</template>

<script>
export default {
  name: 'SomeView',
};
</script>
```

## Render

<div class="wrapper-test place">
  <Wrapper><div class="block">Content</div></Wrapper>
  <div class="block">Slider</div>
  <Wrapper><div class="block">Content</div></Wrapper>
</div>


## Styles

<code class="nowrap">~/src/stylus/utils/_variables.styl</code>

```stylus
$wrapper = {
  gutter--desktop: 40px,
  gutter--tablet: 32px,
  gutter--mobile: 24px,

  width--max: 1280px,
}
```

## Source code

<code class="nowrap">@/src/components/Wrapper/Wrapper.vue</code>

<<< @/src/components/Wrapper/Wrapper.vue
