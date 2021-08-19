# Colors

Абстрагируйте все цвета из гайдлайна в короткие имена-маркеры.

<code class="code--path">~/src/stylus/utils/_variables.styl</code>

```stylus
// Palette
//////////////////////////////////////////////////////
$colors = {
  cat: #515bd4,
  dog: #ffffff,
  bird: #fd5f00,
  wood: #fed564,
  stone: #8bc24c,
  sea: #13334c,
}
// Dependencies colors
$colors["text"] = $colors.sea
$colors["placeholder"] = rgba($colors.sea, 0.6)
$colors["primary"] = $colors.cat
$colors["secondary"] = $colors.stone
```

В любом месте кода препроцессора или секции стилей SFC (при условии импорта стилевой базы) библиотеки или дочерних проектов вы можете передавать правильные цвета:

```stylus
.selector
  color $colors.primary
```

Легко поддерживать тестовый компонент наглядно демонстрируюший палитру:

<TestColors />

<code class="code--path">@/src/components/tests/TestColors/TestColors.vue</code>

<<< @/src/components/tests/TestColors/TestColors.vue
