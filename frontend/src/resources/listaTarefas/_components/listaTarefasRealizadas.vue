<template>
  <div>
    <h2>{{ titulo }}</h2>
    <h2>{{ listaTarefas }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      default: () => "",
    },
    listaTarefas: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
