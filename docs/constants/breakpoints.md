# Breakpoints

```stylus
// ~/src/stylus/utils/_variables.styl:
// Breakpoints
//////////////////////////////////////////////////////

$breakpoints = {
  min: 320px,
  tablet: 768px,
  desktop: 1025px,
}
$breakpoints["mobile--max"] = $breakpoints.tablet - 1
$breakpoints["tablet--max"] = $breakpoints.desktop - 1
```
