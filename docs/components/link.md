# Link

## Description

The component provides a hypertext link.

## Connection

```vue
<template>
  <Link path="String(required)">Hypertext link</Link>
</template>
```

## Render

<Link path="https://good-layout-book.netlify.app/">This is link!!!</Link>

## API

### Props
| **Name** | **Type** | **Description** | **Default** |
| :------- | :------- | :-------------- | ----------: |
| **path** | String| Link url | **required** |
| **target** | String | Target attr | `'_blank'` |

### Slots
| **Name** | **Description** |
| :------- | :-------------- |
| default | Link text |

## Source code

<code class="nowrap">@/src/components/Link/Link.vue</code>

<<< @/src/components/Link/Link.vue
