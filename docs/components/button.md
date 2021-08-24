# Button

## Description

The component provides a button.

## Connection

Use the <strong>.native</strong> modifier to call a method on a component.

```vue
<template>
  <section>
    <Button @click.native="click">>skin="primary"</Button>
    <Button skin="secondary">skin="secondary"</Button>
  
    <Button size="large">size="large"</Button>
    <Button size="small">size="small"</Button>
  
    <Button disabled>disabled</Button>
  
    <Button skin="secondary" wide>skin="secondary" wide</Button>
  </section>
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

<div class="buttons-test">
  <Button>skin="primary"</Button>
 
  <Button skin="secondary">skin="secondary"</Button>
  
  <Button size="large">size="large"</Button>
  
  <Button size="small">size="small"</Button>
  
  <Button disabled>disabled</Button>
  
  <div class="buttons-test__wide"><Button skin="secondary" wide>skin="secondary" wide</Button></div>
</div>


## Styles

<code class="nowrap">~/src/stylus/utils/_variables.styl</code>

```stylus
$buttons = {
  height--large: 48px,
  height--normal: 40px,
  height--small: 24px,

  background--primary: $colors.primary,
  background--secondary: $colors.secondary,

  color--primary: $colors.stone,
  color--secondary: $colors.stone,
}
```

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
