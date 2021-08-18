# Colors

Абстрагируйте все цвета из гайдлайна в короткие имена-маркеры.

<code>~/src/stylus/utils/_variables.styl</code>

```stylus
// Palette
//////////////////////////////////////////////////////
$colors = {
  cat: #515bd4,
  dog: #dd2a7b,
  bird: #fd5f00,
  wood: #feda77,
  stone: #8bc24c,
  sea: #13334c,
}
// Dependencies colors
$colors["text"] = $colors.sea
$colors["placeholder"] = rgba($colors.sea, 0.6)
```

В любом месте кода препроцессора или секции стилей SFC (при условии импорта стилевой базы) библиотеки или дочерних проектов вы можете передавать правильные цвета.

```stylus
.selector
  color $colors.cat
```

Легко поддерживать тестовый компонент наглядно демонстрируюший палитру:

<TestColors />

<code>@/src/components/tests/TestColors/TestColors.vue</code>

<<< @/src/components/tests/TestColors/TestColors.vue
