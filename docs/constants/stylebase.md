# _stylebase.styl

Глобальный медиатор стилей собирает некомпилируемые <code>/utils</code>, комплируемые <code>/core</code> сущности и необходимые глобально кастомизации используемых сторонних модулей <code>/libs</code> (но, те которые позволяют это сделать без <code>scoped</code> - стоит разместить в SFC-обертках):

<code>@/src/stylus/_stylebase.styl</code> библиотеки:

<<< @/src/stylus/_stylebase.styl 

Теперь можно использовать всю эту кухню на компонентах:

```vue
<style lang="stylus" scoped>
@import "~/src/stylus/_stylebase.styl";

...
</style>
```

Организация стилей дочерних проектов может иметь подобную структуру, только первый импорт в основном файле - основного файла библиотеки и приехавших с ней шрифтов:

<code>@/src/stylus/_stylebase.styl</code> дочернего проекта:

```stylus
@import '~ui-library-starter/src/stylus/_stylebase.styl';

@font-face {
  font-family: 'Ubuntu';
  src: url('~ui-library-starter/src/static/fonts/Ubuntu/Ubuntu-Regular.eot');
  src: local('Ubuntu Regular'), local('Ubuntu-Regular'),
    url('~ui-library-starter/src/static/fonts/Ubuntu/Ubuntu-Regular.eot?#iefix') format('embedded-opentype'),
    url('~ui-library-starter/src/static/fonts/Ubuntu/Ubuntu-Regular.woff2') format('woff2'),
    url('~ui-library-starter/src/static/fonts/Ubuntu/Ubuntu-Regular.woff') format('woff'),
    url('~ui-library-starter/src/static/fonts/Ubuntu/Ubuntu-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Ubuntu';
  src: url('~ui-library-starter/src/static/fonts/Ubuntu/Ubuntu-Bold.eot');
  src: local('Ubuntu Bold'), local('Ubuntu-Bold'),
    url('~ui-library-starter/src/static/fonts/Ubuntu/Ubuntu-Bold.eot?#iefix') format('embedded-opentype'),
    url('~ui-library-starter/src/static/fonts/Ubuntu/Ubuntu-Bold.woff2') format('woff2'),
    url('~ui-library-starter/src/static/fonts/Ubuntu/Ubuntu-Bold.woff') format('woff'),
    url('~ui-library-starter/src/static/fonts/Ubuntu/Ubuntu-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: bold;
}
```

Да, это можно назвать «глобальными стилями-невидимками» или что-то такое. Мы предоставляем глобальные константы гайдлайна и всю прочую мощь препроцессора всем компонентным системам - библиотеке и всем ее «читателям». Мы предоставляем точную и лаконичную полноценную дизайн-систему - препроцессор и стилизуемые с его помощью компоненты дочерним проектам.

### Mixins and placeholders

UI Library Starter дает надежду на то, что даже в вашей разметке код будет полностью оптимальный и консистентный. Это способно сделать даже крупную систему из нескольких проектов базирующихся на одном визуальном языке - и полностью управляемой, и, в тоже время - гибкой.

::: warning
Не копируйте код кусками по компонентам - оптимизируйте очевидно одинаковые наборы в <code>@/src/stylus/utils/_placeholders.styl</code>:
:::

<<< @/src/stylus/utils/_placeholders.styl

Также вы можете делать примеси без параметров для того чтобы - забегая вперед (см. раздел Breakpoints) - такой же пассаж стал доступен внутри медиа-миксинов:

<code>@/src/stylus/utils/_mixins.styl</code>

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
