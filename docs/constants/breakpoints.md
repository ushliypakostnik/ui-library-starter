# Breakpoints

Переменные-брекпоинты лучше называть более интуитивно-понятно.

<code class="nowrap">~/src/stylus/utils/_variables.styl</code>

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
Основные точки перехода: в стилевой базе препроцессора в <code class="nowrap">px</code> и в константах скриптов библиотеки в <code class="nowrap">Number</code> - должны соответствовать друг-другу.
:::

<code class="nowrap">@/src/utils/сonstants.js</code>

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

Использование в любом блоке стилей SFC.

::: tip
В строгой традиции запрещается использование любых глобальных классов со стилями, за исключением анимаций для Vue и вынужденных кастомизаций действительно необходимых сторонних модулей где «классический ад с <code class="nowrap">!important</code>»))). Мы стараемся минимизировать количество зависимостей и «точечно» закрываем самые «дорогие», неподъемные по ресурсам проблемные места.
:::

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

<code class="nowrap">@/src/utils/screen-helper.js</code>

<<< @/src/utils/screen-helper.js

Для того чтобы компоненты могли всегда верно определять типоразмер устройства предоставлена общая функциональность обновляющая переменные в событии ресайза. Этот миксин может быть невероятно полезен и на этапе конечной сборки адаптивных видов - в дочерних проектах. 

<code class="nowrap">@/src/mixins/resize.js</code>

<<< @/src/mixins/resize.js

На любых компонентах или видах в библиотеке:

```vue
<template>
  <Component v-show="isDesktop" />
  
  <div v-if="isDesktop" />
</template>

<script>
import resize from '../../../src/mixins/resize.js';

export default {
  name: 'ComponentName',

  mixins: [resize],
};
</script>
```

В проектах:

```vue
<script>
import resize from 'ui-library-starter/src/mixins/resize.js';

export default {
  name: 'Test',

  mixins: [resize],
};
</script>
```

Test component:

<code class="nowrap hidden--gadgets">@/src/components/Tests/TestBreakpoints/TestBreakpoints.vue</code>

<TestBreakpoints />

<<< @/src/components/Tests/TestBreakpoints/TestBreakpoints.vue
