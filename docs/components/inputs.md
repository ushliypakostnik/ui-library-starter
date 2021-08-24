# inputs.js

## Description

Mixin additional functionality for inputs fields.

## API

### Props

| **Name** | **Type**     | **Description**       | **Default** |
| :------- | :----------- | :-------------------- | ----------: |
| **value** | String | Sync value | **required** |
| **placeholder** | [String, null] | placeholder | `null` |
| **disabled** | Boolean | Is input disabled | `false` |
| **error** | [String, null] | Is error, error message | `null` |
| **onFocus** | Function | Callback on focus | () => {} |
| **onBlur** | Function | Callback on blur | () => {} |

### Events

| **Name** | **Description** |
| :------- | :-------------- |
| **focus** | Emit on focus |
| **blur** | Emit on blur |
| **input** | Emit on input |

<code class="nowrap">@/src/mixins/inputs.js</code>

<<< @/src/mixins/inputs.js
