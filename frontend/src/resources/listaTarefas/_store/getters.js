export default {
  tarefas: (state) => {
    return state.listaTarefas.filter(
      (tarefa) => tarefa.tarefaRealizada !== true
    );
  },
  tarefasRealizadas: (state) => {
    return state.listaTarefas.filter(
      (tarefa) => tarefa.tarefaRealizada === true
    );
  },
};
