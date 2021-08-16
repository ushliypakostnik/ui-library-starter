<template>
  <div>
    <div>Тест глобального использования компонент</div>

    <div>Тест реактивности: {{ test }}</div>

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
  }
};
</script>
