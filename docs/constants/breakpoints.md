# Breakpoints

Переменные-брекпоинты лучше называть более интуитивно-понятно.

<code>~/src/stylus/utils/_variables.styl</code>

```stylus
// Breakpoints
//////////////////////////////////////////////////////

$breakpoints = {
  tablet: 768px,
  desktop: 1025px,
}
$breakpoints["mobile--max"] = $breakpoints.tablet - 1
$breakpoints["tablet--max"] = $breakpoints.desktop - 1
```

::: warning
Основные точки перехода: в стилевой базе препроцессора в <code>px</code> и в констанстах скриптов библиотеки в <code>Number</code> - должны соответствовать друг-другу.
:::

<code>@/src/utils/сonstants.js</code>

```js
// Design constants
//////////////////////////////////////////////////////

export const DESIGN = {
  BREAKPOINTS: {
    tablet: 768,
    desktop: 1025,
  },
};
```

В препроцессоре - мощнейшее, очень удобное средство - построенные на брекпоинтах примеси принимающие контент:

```stylus
// Media
//////////////////////////////////////////////////////

$no-gadgets()
  @media only screen and (max-width $breakpoints.desktop--max)
    {block}

$desktop()
  @media only screen and (min-width $breakpoints.desktop)
    {block}

$gadgets()
  @media only screen and (max-width $breakpoints.tablet--max)
    {block}

$tablet()
  @media only screen and (min-width $breakpoints.tablet) and (max-width $breakpoints.tablet--max)
    {block}

$not-mobile()
  @media only screen and (min-width $breakpoints.tablet)
    {block}

$mobile()
  @media only screen and (max-width $breakpoints.mobile--max)
    {block}
```

Использование в любом месте библиотеки препроцессоре или блоке стилей SFC:

```stylus
.selector
  +$desktop()
    // styles only for desktops

  +$tablet()
    // styles only for tablet

  +$mobile()
    // styles only for mobile
```


Точки перехода скриптов обрабатываются специальным модулем-помощником для экрана через matchMedia:

<code>@/src/utils/screen-helper.js</code>

<<< @/src/utils/screen-helper.js

<code>@/src/utils/screen-helper.js</code>

Для того чтобы компоненты могли всегда верно определять типоразмер устройства предоставлена общая функциональность обновлящая переменные в событии ресайза. Этот миксин может быть невероятно полезен и на сборке конечной сборки ваших адаптивных видов. 

<code>@/src/mixins/resize.js</code>

<<< @/src/mixins/resize.js

На любых компонентах или видах:

```vue
<template>
  <Component v-show="isDesktop" />
  
  <div v-if="isDesktop" />
</template>

<script>
import resize from '../../../../src/mixins/resize.js';

export default {
  name: 'ComponentName',

  mixins: [resize],
};
</script>
```

Тестовый компонент:

<TestBreakpoints />

<<< @/src/components/tests/TestBreakpoints/TestBreakpoints.vue
