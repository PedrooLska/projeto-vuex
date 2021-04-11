export default {
  tarefasRealizadas: (state) => {
    return state.listaTarefas.filter(
      (tarefa) => tarefa.tarefaRealizada === true
    );
  },
};
