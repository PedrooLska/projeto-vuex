<template>
  <div>
    <h2>{{ titulo }}</h2>

    {{ listaTarefas }}
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
