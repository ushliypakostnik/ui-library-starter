<template>
  <div>
    <div>Component global usage test</div>

    <div>Reactivity: {{ test }}</div>

    <input v-model="test" />
  </div>
</template>

<script>
export default {
  name: 'Test2',

  data() {
    return {
      test: '',
    };
  },
};
</script>
