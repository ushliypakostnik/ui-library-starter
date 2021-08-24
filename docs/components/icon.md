# Icon

## Description

The component provides a icon. Now the all icons are drawn for the size 24 by 24 px.

In order to reliably control the icons of the library, add all the icons through this component and reflect in the documentation.

## Connection

```vue
<template>
  <section>
    <Icon name="close" />
    <Icon name="bar" />
    <Icon name="search" />
    <Icon name="left" />
    <Icon name="right" />
    <Icon name="down" />
    <Icon name="up" />
  </section>
</template>
```

## Render

<div class="icons-test">
  <div>
    <div class="icon-test">
      <Icon name="close" />
      <span class="icon-test__text">close</span>
    </div>
  </div>
  
  <div>
    <div class="icon-test">
      <Icon name="bar" />
      <span class="icon-test__text">bar</span>
    </div>
  </div>
  
  <div>
    <div class="icon-test">
      <Icon name="search" />
      <span class="icon-test__text">search</span>
    </div>
  </div>
  
  <div>
    <div class="icon-test">
      <Icon name="left" />
      <span class="icon-test__text">left</span>
    </div>
  </div>
  
  <div>
    <div class="icon-test">
      <Icon name="right" />
      <span class="icon-test__text">right</span>
    </div>
  </div>
  
  <div>
    <div class="icon-test">
      <Icon name="down" />
      <span class="icon-test__text">down</span>
    </div>
  </div>
  
  <div>
    <div class="icon-test">
      <Icon name="up" />
      <span class="icon-test__text">up</span>
    </div>
  </div>
</div>

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
