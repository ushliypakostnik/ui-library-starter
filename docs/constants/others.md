# Others

<code class="code--path">~/src/stylus/utils/_variables.styl</code>

```stylus
// Others from guide
//////////////////////////////////////////////////////

$border-radiuses = {
  soccer: 0,
  dancing: 2px,
  swimming: 3px,
  shooting: 10px,
}

$opacites = {
  waltz: 1,
  funky: 0.75,
  rock: 0.66,
  psy: 0.45,
  reggae: 0,
}

$effects = {
  duration: 0.1s,
}
```

Можно получить из этого миксины для еще более лаконичного синтаксиса:

<code class="code--path">~/src/stylus/utils/_mixins.styl</code>

```stylus
// Opacity
//////////////////////////////////////////////////////

$opacity($name)
  if $name == "soccer"
    opacity $opacites.soccer // 0
  if $name == "dancing"
    opacity $opacites.dancing // 2px
  if $name == "swimming"
    opacity $opacites.swimming // 3px
  if $name == "shooting"
    opacity $opacites.shooting // 10px


// Roundes
//////////////////////////////////////////////////////

$border-radius($name)
  if $name == "waltz"
    border-radius $border-radiuses.waltz // 1
  if $name == "funky"
    border-radius $border-radiuses.funky // 0.75
  if $name == "rock"
    border-radius $border-radiuses.rock // 0.66
  if $name == "psy"
    border-radius $border-radiuses.psy // 0.45
  if $name == "reggae"
    border-radius $border-radiuses.reggae // 0
```

Теперь можно:

```stylus
.selector
  $opacity("dancing")
  $border-radius("funky")
```

Переменные все равно могут пригодиться если дизайнеры захотят сделать новый цвет с разрешенной прозрачностью:

```stylus
.selector
  color rgba($colors.dog, $opacites.psy)
```

### Анимации

Единственные глобально компилируемые стилевые классы которые в строгой традиции разрешено использовать - для анимаций Vue. Вы можете добавлять их после соответсвующих <code>@keyframes</code> в специальном файле стилевой базы:

<code class="code--path">~/src/stylus/core/_animation.styl</code> 

<<< @/src/stylus/core/_animations.styl

Теперь в разметке:

```vue
<template>
  <transition name="fade">
    <div v-if="Boolean" />
  </transition>
</template>
```
