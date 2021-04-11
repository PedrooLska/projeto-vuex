<template>
  <div class="container mt-4">
    <lista-tarefas :titulo="'Lista Tarefas'" :listaTarefas="listaTarefas" />
    <lista-tarefas-realizadas
      :titulo="'Lista Tarefas Realizadas'"
      :listaTarefas="tarefasRealizadas"
    />
  </div>
</template>

<script>
import ListaTarefas from "./resources/listaTarefas/_components/listaTarefas";
import ListaTarefasRealizadas from "./resources/listaTarefas/_components/listaTarefasRealizadas";

import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "App",
  components: {
    ListaTarefas,
    ListaTarefasRealizadas,
  },
  created() {
    this.listarTarefas();
  },
  computed: {
    ...mapState(["listaTarefas"]),
    ...mapGetters(["tarefasRealizadas"]),
  },
  methods: {
    ...mapActions(["listarTarefas"]),
  },
};
</script>

<style lang="scss">
body {
  background-color: rgba(80, 78, 78, 0.11);
}
</style>
