# Link

## Description

The component provides a hypertext link.

## Connection

```vue
<template>
  <Link path="String(required)">Hypertext link</Link>
</template>
```

## API

### Props
| **Name** | **Type** | **Description** | **Default** |
| :------- | :------- | :-------------- | ----------: |
| **path** | String(required) | Link url | - |
| **target** | String | Target attr | `'_blank'` |

### Slots
| **Name** | **Description** |
| :------- | :-------------- |
| default | Link text |

## Render

<Link path="https://good-layout-book.netlify.app/">This is link!!!</Link>

## Source code

<code class="code--path">@/src/components/Link/Link.vue</code>

<<< @/src/components/Link/Link.vue
