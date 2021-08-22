# Icon

## Description

The component provides a icon. Now the icons are drawn for the size 24 by 24 px.

## Connection

```vue
<template>
  <Icon name="close" />
  <Icon name="bar" />
  <Icon name="search" />
  <Icon name="left" />
  <Icon name="right" />
  <Icon name="down" />
  <Icon name="up" />
</template>
```

## Render

<div class="docs-icon-test__wrapper"><div class="docs-icon-test"><Icon name="close" /><span class="docs-icon-test__text">close</span></div></div>
<div class="docs-icon-test__wrapper"><div class="docs-icon-test"><Icon name="bar" /><span class="docs-icon-test__text">bar</span></div></div>
<div class="docs-icon-test__wrapper"><div class="docs-icon-test"><Icon name="search" /><span class="docs-icon-test__text">search</span></div></div>
<div class="docs-icon-test__wrapper"><div class="docs-icon-test"><Icon name="left" /><span class="docs-icon-test__text">left</span></div></div>
<div class="docs-icon-test__wrapper"><div class="docs-icon-test"><Icon name="right" /><span class="docs-icon-test__text">right</span></div></div>
<div class="docs-icon-test__wrapper"><div class="docs-icon-test"><Icon name="down" /><span class="docs-icon-test__text">down</span></div></div>
<div class="docs-icon-test__wrapper"><div class="docs-icon-test"><Icon name="up" /><span class="docs-icon-test__text">up</span></div></div>

## API

### Props
| **Name** | **Type** | **Description** | **Default** |
| :------- | :------- | :-------------- | ----------: |
| **name** | String | Icon name | **required** |
| **fill** | String: HEX-color, `'currentColor'` | Icon color | `'currentColor'` |

## Source code

<code class="nowrap">@/src/components/Icon/Icon.vue</code>

<<< @/src/components/Icon/Icon.vue

<code class="nowrap">@/src/components/Icon/Close.vue</code>

<<< @/src/components/Icon/Close.vue
