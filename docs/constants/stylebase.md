# _stylebase.styl

Глобальный медиатор стилей собирает некомпилируемые <code class="nowrap">/utils</code>, комплируемые <code class="nowrap">/core</code> сущности и необходимые глобально кастомизации используемых сторонних модулей <code class="nowrap">/libs</code> (но, те которые позволяют это сделать без <code class="nowrap">scoped</code> - стоит разместить в SFC-обертках).

<code class="nowrap">@/src/stylus/_stylebase.styl</code> библиотеки:

<<< @/src/stylus/_stylebase.styl 

Теперь можно использовать всю эту кухню на компонентах:

```vue
<style lang="stylus" scoped>
@import "~/src/stylus/_stylebase.styl";

...
</style>
```

Это можно назвать «глобальными стилями-невидимками», что-то такое - они, с одной стороны - участвуют в правильном оформлении везде, но, при этом, «их не видно». Мы предоставляем глобальные константы гайдлайна и всю прочую мощь препроцессора всем компонентным системам - библиотеке и всем ее «читателям».

### Mixins and placeholders

UI Library Starter дает надежду на то, что в вашей разметке код будет полностью оптимальный и консистентный. Это способно сделать даже крупную систему из нескольких проектов базирующихся на одном визуальном языке - и полностью управляемой, и, в тоже время - гибкой.

::: danger
Не копируйте код кусками по компонентам - оптимизируйте очевидно одинаковые наборы в миксинах и плейсхолдерах!
:::

<code class="nowrap">@/src/stylus/utils/_placeholders.styl</code>

<<< @/src/stylus/utils/_placeholders.styl

Или вы можете делать примеси без параметров для того чтобы - забегая вперед (см. раздел Breakpoints) - такой же пассаж стал доступен внутри медиа-миксинов:

<code class="nowrap">@/src/stylus/utils/_mixins.styl</code>

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
