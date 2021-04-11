<template>
  <ul class="list-group">
    <li class="list-group-item d-flex justify-content-between">
      {{ tarefa.id }} - {{ tarefa.nome }}

      <div>
        <i class="fas fa-check-square text-secondary fa-lg mr-5"></i>
        <i class="fas fa-edit text-info fa-lg mr-3"></i
        ><i class="fas fa-trash-alt text-danger fa-lg"></i>
      </div>
    </li>
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
