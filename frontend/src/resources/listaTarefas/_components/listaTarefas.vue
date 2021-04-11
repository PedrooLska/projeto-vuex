<template>
  <ul class="list-group">
    <li class="list-group-item d-flex justify-content-between">
      {{ tarefa.id }} - {{ tarefa.nome }}

      <div>
        <a href="#" @click="alterarStatusTarefa({ tarefa: tarefa })"
          ><i class="fas fa-check-square text-secondary fa-lg mr-5"></i
        ></a>

        <i class="fas fa-edit text-info fa-lg mr-3"></i>

        <a href="#" @click="deletarTarefa({ tarefa: tarefa })"
          ><i class="fas fa-trash-alt text-danger fa-lg"></i>
        </a>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapActions } from "vuex";
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
  methods: {
    ...mapActions(["alterarStatusTarefa", "deletarTarefa"]),
  },
};
</script>
