# Others

<code class="nowrap">~/src/stylus/utils/_variables.styl</code>

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
  pop: 0.2,
  reggae: 0,
}

$effects = {
  duration: 0.1s,
}
```

Можно получить из этого миксины для более лаконичного синтаксиса <code class="nowrap">~/src/stylus/utils/_mixins.styl</code>:

```stylus
// Rounding
//////////////////////////////////////////////////////

$border-radius($name)
  if $name == "soccer"
    border-radius $border-radiuses.soccer // 0
  if $name == "dancing"
    border-radius $border-radiuses.dancing // 2px
  if $name == "swimming"
    border-radius $border-radiuses.swimming // 3px
  if $name == "shooting"
    border-radius $border-radiuses.shooting // 10px


// Opacity
//////////////////////////////////////////////////////

$opacity($name)
  if $name == "waltz"
    opacity $opacites.waltz // 1
  if $name == "funky"
    opacity $opacites.funky // 0.75
  if $name == "rock"
    opacity $opacites.rock // 0.66
  if $name == "psy"
    opacity $opacites.psy // 0.45
  if $name == "pop"
    opacity $opacites.pop // 0.2
  if $name == "reggae"
    opacity $opacites.reggae // 0
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

Единственные глобально компилируемые стилевые классы которые в строгой традиции разрешено использовать - для анимаций Vue. Вы можете добавлять их после соответсвующих <code class="nowrap">@keyframes</code> в специальном файле стилевой базы <code class="nowrap">~/src/stylus/core/_animation.styl</code>: 

<<< @/src/stylus/core/_animations.styl

Теперь в разметке:

```vue
<template>
  <transition name="fade">
    <div v-if="Boolean" />
  </transition>
</template>
```
