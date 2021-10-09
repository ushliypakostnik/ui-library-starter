# Loader

## Description

A component provides a spinner element.

## Connection

```vue
<template>
  <Loader />
</template>
```

## Render

<div class="test-block">
  <Loader :size="16" />
</div>

<div class="test-block">
  <Loader :size="20" />
</div>

<div class="test-block">
  <Loader :size="24" />
</div>

<div class="test-block">
  <Loader :size="32" />
</div>

<div class="test-block">
  <Loader :size="48" />
</div>

<div class="test-block">
  <Loader />
</div>

## API

### Props
| **Name** | **Type** | **Description** | **Default** |
| :------- | :------- | :-------------- | ----------: |
| **size** | Number: `16`, `20`, `24`, `32`, `48`, `72` | Spinner size |  `72` |

## Source code

<code class="nowrap">@/src/components/Loader/Loader.vue</code>

<<< @/src/components/Loader/Loader.vue
