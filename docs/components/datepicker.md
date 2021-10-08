# Datepicker

## Description

Component providing a classic datapicker with rotating qualities:

* Easy mode switching: single / band
* Range The mode is made "on one sheet"
* Mode of operation with weeks, months, quarterly periods and years

## Connection

```vue
<template>
  <Datepicker
    :range="true"
    :allowFrom="1405398400"
    :allowTo="1705398400"
    :yearsFuture="2"
    :yearsPast="4"
    panel="quarters"
    @select="dateSelect"
  />
</template>

<script>
export default {
  methods: {
    dateSelect(event) {
      console.log(event);
    },
  },
};
</script>
```

## API

### Props
| **Name** | **Type** | **Description** | **Default** |
| :------- | :------- | :-------------- | ----------: |
| **range** | Boolean | Widget mode: range / single. Default: range. | `true` |
| **locale** | String, | Locale. Currently, only the default Russian is supported. | `'ru'` |
| **past** | Boolean | Accessibility of the past. | `true` |
| **future** | Boolean | Availability of the future. | `true` |
| **panel** | String: `'days'`, `'weeks'`, `'months'`, `'quarters'`, `'years'` | Set the default bar for the range. | `null` |
| **showControls** | Boolean | Show control buttons (not used or customized). | `false` |
| **yearsCount** | Number | A complex parameter that determines how many years in the future and the past simultaneously from the current date should be shown. | `2` |
| **yearsPast** | Number | A parameter that determines how many years in the past from the current date to show. | `null` |
| **yearsFuture** | Number | A parameter that determines how many years in the future from the current date to show. | `null` |
| **allowFrom** | [Number, String] | The date in the past from which dates are available. | `null` |
| **allowTo** | [Number, String] | The date in the future, the end of which dates are available. | `null` |
| **unixtime** | Boolean | The format for receiving (allowFrom, allowTo) and displaying dates. Default: unixtime, can be ISO-8601. | `true` |
| **resetTitle** | String | Reset button text. | `null` |
| **submitTitle** | String | Submit button text. | `null` |
| **presets** | Array | List of available presets (not used or customized). | `['today', 'yesterday', 'last7days', 'last30days', 'last90days', 'last365days', 'custom']` |

### Events
| **Name** | **Description** |
| :------- | :-------------- |
| **@select** | The event is triggered when a range or date in a single is selected. |
| **@update** | The event is triggered when the submit button is clicked. |
| **@reset** | The event is triggered when the reset button is pressed. |

Return:
```javasript
// With @reset: to === from === null, with @select and @update for a single: to === from
{
  to: null,
  from: null,
  panel: 'quarters'
}
```

### Styles

```stylus
$width = 400px
$range-color = rgba($colors.bird, $opacites.psy)
```

## Render

<div class="test-block">
  <Datepicker
    :range="true"
    :allowFrom="1405398400"
    :allowTo="1705398400"
    :yearsFuture="2"
    :yearsPast="4"
    panel="quarters"
  />
</div>

## Source code

<code class="nowrap">@/src/components/Datepicker/Datepicker.vue</code>

<<< @/src/components/Datepicker/Datepicker.vue
