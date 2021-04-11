<template>
  <div class="container mt-4">
    <h1>Tarefas</h1>
    <lista-tarefas
      :titulo="'Lista Tarefas'"
      v-for="tarefa in listaTarefas"
      :key="'Tarefas' + tarefa.id"
      :tarefa="tarefa"
    />

    <h2 class="mt-5">Tarefas Realizadas</h2>
    <lista-tarefas-realizadas
      :titulo="'Lista Tarefas Realizadas'"
      v-for="tarefa in tarefasRealizadas"
      :key="'Tarefas Realizadas' + tarefa.id"
      :tarefa="tarefa"
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
