# Grid

## Description

A component provides a grids by names.

## Connection

```vue
<template>
  <Grid name="rithm-for-two">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </Grid>
</template>
```

## Render

<div class="test-block">
  <div class="test-name">rhythm-for-two</div>
  <Grid class="place" name="rhythm-for-two">
    <div class="block">1</div>
    <div class="block">2</div>
    <div class="block">3</div>
    <div class="block">4</div>
  </Grid>
</div>

<div class="test-block">
  <div class="test-name">rhythm-for-three</div>
  <Grid class="place" name="rhythm-for-three">
    <div class="block">1</div>
    <div class="block">2</div>
    <div class="block">3</div>
  </Grid>
</div>

<div class="test-block">
  <div class="test-name">rhythm-for-four</div>
  <Grid class="place" name="rhythm-for-four">
    <div class="block">1</div>
    <div class="block">2</div>
    <div class="block">3</div>
    <div class="block">4</div>
  </Grid>
</div>

<div class="test-block">
  <div class="test-name">rhythm-for-six</div>
  <Grid class="place" name="rhythm-for-six">
    <div class="block">1</div>
    <div class="block">2</div>
    <div class="block">3</div>
    <div class="block">4</div>
    <div class="block">5</div>
    <div class="block">6</div>
  </Grid>
</div>

<div class="test-block">
  <div class="test-name">rhythm-for-eight</div>
  <Grid class="place" name="rhythm-for-eight">
    <div class="block">1</div>
    <div class="block">2</div>
    <div class="block">3</div>
    <div class="block">4</div>
    <div class="block">5</div>
    <div class="block">6</div>
    <div class="block">7</div>
    <div class="block">8</div>
  </Grid>
</div>

<div class="test-block">
  <div class="test-name">rhythm-for-twelve</div>
  <Grid class="place" name="rhythm-for-twelve">
    <div class="block block--small">1</div>
    <div class="block block--small">2</div>
    <div class="block block--small">3</div>
    <div class="block block--small">4</div>
    <div class="block block--small">5</div>
    <div class="block block--small">6</div>
    <div class="block block--small">7</div>
    <div class="block block--small">8</div>
    <div class="block block--small">9</div>
    <div class="block block--small">10</div>
    <div class="block block--small">11</div>
    <div class="block block--small">12</div>
  </Grid>
</div>

## Styles

<code class="nowrap">~/src/stylus/utils/_variables.styl</code>

```stylus
$grids = {
  gutter--desktop: 40px,
  gutter--tablet: 32px,
  gutter--mobile: 24px,
}
```

## API

### Props
| **Name** | **Type** | **Description** | **Default** |
| :------- | :------- | :-------------- | ----------: |
| **name** | String | Name of grid | **required** |

## Source code

<code class="nowrap">@/src/components/Grid/Grid.vue</code>

<<< @/src/components/Grid/Grid.vue
