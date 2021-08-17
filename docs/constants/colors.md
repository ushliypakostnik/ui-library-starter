# Colors

```stylus
// ~/src/stylus/utils/_variables.styl:
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

## Render

<TestColors />

## Source code

<<< @/src/components/tests/TestColors/TestColors.vue
