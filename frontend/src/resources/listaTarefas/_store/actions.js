import tarefasServices from "../_services/tarefasServices";

import * as types from "./mutation-types";

export default {
  listarTarefas: async ({ commit }) => {
    const response = await tarefasServices.getTarefas();
    commit(types.LISTAR_TAREFAS, { tarefas: response.data });
  },
  criarTarefa: ({ commit }, { tarefa }) => {
    return tarefasServices.postTarefa(tarefa).then((response) => {
      commit(types.CRIAR_TAREFA, { tarefa: response.data });
    });
  },
  editarTarefa: async ({ commit }, { tarefa }) => {
    const response = await tarefasServices.putTarefa(tarefa);
    commit(types.EDITAR_TAREFA, { tarefa: response.data });
  },
  deletarTarefa: async ({ commit }, { tarefa }) => {
    const response = tarefasServices.deleteTarefa(tarefa.id);
    commit(types.EXCLUIR_TAREFA, { tarefa: response.data });
  },
  alterarStatusTarefa: ({ dispatch }, payload) => {
    const tarefa = Object.assign({}, payload.tarefa);
    tarefa.tarefaRealizada = !tarefa.tarefaRealizada;
    dispatch("editarTarefa", { tarefa });
  },
};
