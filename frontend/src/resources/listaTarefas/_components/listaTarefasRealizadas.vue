<template>
  <ul class="list-group">
    <li class="list-group-item">{{ tarefa.id }} - {{ tarefa.nome }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      default: () => "",
    },
    tarefa: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
