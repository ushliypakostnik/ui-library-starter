<template>
  <div class="grid" :class="`grid--${name}`">
    <slot />

    <template v-for="(slot, index) in items">
      <div :key="`slot${index}`">
        <slot :name="slot" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Grid',

  props: {
    name: {
      type: String,
      required: true,
    },
    slots: {
      type: [Number, null],
      required: false,
      default: null,
    },
  },

  computed: {
    items() {
      if (this.slots) {
        const items = [];
        for (let i = 1; i <= this.slots; i++) {
          items.push(`slot--${i}`);
        }
        return items;
      }
      return null;
    },
  },
};
</script>

<style lang="stylus" scoped>
@import "~/src/stylus/_stylebase.styl";

// Common
$grids-common
  display grid

  +$desktop()
    grid-gap: $grids.gutter--desktop

  +$tablet()
    grid-gap $grids.gutter--tablet

  +$mobile()
    grid-gap $grids.gutter--mobile

.grid
  @extend $grids-common

  &--rhythm-for-two
    grid-template-columns repeat(2, 1fr)

    +$mobile()
      grid-template-columns repeat(1, 1fr)

  &--rhythm-for-three
    grid-template-columns repeat(3, 1fr)

    +$mobile()
      grid-template-columns repeat(1, 1fr)

  &--rhythm-for-four
    grid-template-columns repeat(4, 1fr)

    +$mobile()
      grid-template-columns repeat(1, 1fr)

  &--rhythm-for-six
    grid-template-columns repeat(6, 1fr)

    +$mobile()
      grid-template-columns repeat(1, 1fr)

  &--rhythm-for-eight
    grid-template-columns repeat(8, 1fr)

    +$mobile()
      grid-template-columns repeat(1, 1fr)

  &--rhythm-for-twelve
    grid-template-columns repeat(12, 1fr)

    +$mobile()
      grid-template-columns repeat(1, 1fr)
</style>
