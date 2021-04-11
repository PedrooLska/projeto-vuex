import {
  LISTAR_TAREFAS,
  CRIAR_TAREFA,
  EDITAR_TAREFA,
  EXCLUIR_TAREFA,
} from "./mutation-types";

export default {
  [LISTAR_TAREFAS]: (state, { tarefas }) => {
    state.listaTarefas = tarefas;
  },
  [CRIAR_TAREFA]: (state, { tarefa }) => {
    state.listaTarefas.push(tarefa);
  },
  [EDITAR_TAREFA]: (state, { tarefa }) => {
    const indexTarefa = state.listaTarefas.findIndex(
      (tarefa) => tarefa.id === tarefa.id
    );
    state.listaTarefas.splice(indexTarefa, 1, tarefa);
  },
  [EXCLUIR_TAREFA]: (state, { tarefa }) => {
    const indexTarefa = state.listaTarefas.findIndex((t) => t.id === tarefa.id);
    state.listaTarefas.splice(indexTarefa, 1);
  },
};
