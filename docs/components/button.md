# Button

## Description

The component provides a button.

## Connection

Use the <strong>.native</strong> modifier to call a method on a component.

```vue
<template>
  <Button @click.native="click">>primary</Button>
  <Button skin="secondary">secondary</Button>

  <Button size="large">large</Button>
  <Button skin="secondary" size="small">small</Button>

  <Button disabled>disabled</Button>

  <Button skin="secondary" wide>wide</Button>
</template>

<script>
export default {
  methods: {
    click() {},
  },
};
</script>
```

## Render

<Button :style="`margin-bottom: 10px`">primary</Button>

<Button :style="`margin-bottom: 10px`" skin="secondary">secondary</Button>

<Button :style="`margin-bottom: 10px`" size="large">large</Button>

<Button :style="`margin-bottom: 10px`" skin="secondary" size="small">small</Button>

<Button :style="`margin-bottom: 10px`" disabled>disabled</Button>

<div :style="`padding-top: 10px`"><Button skin="secondary" wide>wide</Button></div>

## API

### Props
| **Name** | **Type** | **Description** | **Default** |
| :------- | :------- | :-------------- | ----------: |
| **link** | String, null| Is button a link, url | null |
| **skin** | String: `'primary'`, `'secondary'` | Button colors | `'primary'` |
| **size** | String: `'normal'`, `'large'`, `'small'` | Button size | `'normal'` |
| **type** | String | type attr | `'button'` |
| **disabled** | Boolean | Is button disabled | `false` |
| **wide** | Boolean | Is button 100% width | `false` |

### Slots
| **Name** | **Description** |
| :------- | :-------------- |
| default | Link text |
| **icon** | Slot for icon |

## Source code

<code class="nowrap">@/src/components/Buttton/Button.vue</code>

<<< @/src/components/Button/Button.vue
