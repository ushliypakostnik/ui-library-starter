# _stylebase.styl

Глобальный медиатор стилей собирает некомпилируемые <code>/utils</code>, комплируемые <code>/core</code> сущности и необходимые глобально кастомизации используемых сторонних модулей <code>/libs</code> (но, те которые позволяют это сделать без <code>scoped</code> - стоит разместить в SFC-обертках):

<code class="code--path">@/src/stylus/_stylebase.styl</code> библиотеки:

<<< @/src/stylus/_stylebase.styl 

Теперь можно использовать всю эту кухню на компонентах:

```vue
<style lang="stylus" scoped>
@import "~/src/stylus/_stylebase.styl";

...
</style>
```

Организация стилей дочерних проектов может или иметь подобную структуру или любую другую (например, если вы внедряете бибилиотеку в старый проект). Единственное требование: первый импорт в основном файле - основного файла библиотеки. Далее - подключение шрифтов и стилизация <code>:root</code> и <code>body</code>:

<code class="code--path">@/src/stylus/_stylebase.styl</code> дочернего проекта:

```stylus
// Import UI Library stylebase
@import '~ui-library-starter/src/stylus/_stylebase.styl';


// Import UI Library fonts

@font-face {
  font-family: $font-family;
  src: url('~ui-library-starter/src/static/fonts/Ubuntu/Ubuntu-Regular.eot');
  src: local('Ubuntu Regular'), local('Ubuntu-Regular'),
    url('~ui-library-starter/src/static/fonts/Ubuntu/Ubuntu-Regular.eot?#iefix') format('embedded-opentype'),
    url('~ui-library-starter/src/static/fonts/Ubuntu/Ubuntu-Regular.woff2') format('woff2'),
    url('~ui-library-starter/src/static/fonts/Ubuntu/Ubuntu-Regular.woff') format('woff'),
    url('~ui-library-starter/src/static/fonts/Ubuntu/Ubuntu-Regular.ttf') format('truetype');
  font-weight: $font-weight.regular;
  font-style: normal;
}

@font-face {
  font-family: $font-family;
  src: url('~ui-library-starter/src/static/fonts/Ubuntu/Ubuntu-Bold.eot');
  src: local('Ubuntu Bold'), local('Ubuntu-Bold'),
    url('~ui-library-starter/src/static/fonts/Ubuntu/Ubuntu-Bold.eot?#iefix') format('embedded-opentype'),
    url('~ui-library-starter/src/static/fonts/Ubuntu/Ubuntu-Bold.woff2') format('woff2'),
    url('~ui-library-starter/src/static/fonts/Ubuntu/Ubuntu-Bold.woff') format('woff'),
    url('~ui-library-starter/src/static/fonts/Ubuntu/Ubuntu-Bold.ttf') format('truetype');
  font-weight: $font-weight.bold;
  font-style: bold;
}


// Base normalize

:root
  scroll-behavior smooth

body
  font-family $font-family, sans-serif
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  text-rendering: optimizeSpeed
  color $colors.text
  overflow-x hidden
```

И последние - нужно подключить все это к главному шаблону, в исходном виде это выглядит так:

<code class="code--path">@/src/App.vue</code>

```vue
<template>
  <div id="app">
    <Test />
  </div>
</template>

<script>
import Test from './components/Test.vue';

export default {
  name: 'App',

  components: {
    Test,
  },
};
</script>

<style lang="stylus">
@import "~/src/stylus/_stylebase.styl";
</style>

```

Это можно назвать «глобальными стилями-невидимками», что-то такое - они, с одной стороны - участвуют в правильном оформлении везде, но, при этом, «их не видно». Мы предоставляем глобальные константы гайдлайна и всю прочую мощь препроцессора всем компонентным системам - библиотеке и всем ее «читателям».

### Mixins and placeholders

UI Library Starter дает надежду на то, что в вашей разметке код будет полностью оптимальный и консистентный. Это способно сделать даже крупную систему из нескольких проектов базирующихся на одном визуальном языке - и полностью управляемой, и, в тоже время - гибкой.

::: warning
Не копируйте код кусками по компонентам - оптимизируйте очевидно одинаковые наборы в миксинах и плейсхолдерах!
:::

<code class="code--path">@/src/stylus/utils/_placeholders.styl</code>

<<< @/src/stylus/utils/_placeholders.styl

Или вы можете делать примеси без параметров для того чтобы - забегая вперед (см. раздел Breakpoints) - такой же пассаж стал доступен внутри медиа-миксинов:

<code class="code--path">@/src/stylus/utils/_mixins.styl</code>

```stylus
// Utilities
//////////////////////////////////////////////////////
// Mixins without arguments duplicate placeholders,
// so it can be passed to media mixins

$flex--center()
  display flex
  align-items center
  justify-content center
```

Теперь:

```stylus
.selector
  +$tablet()
    $flex--center()
```
