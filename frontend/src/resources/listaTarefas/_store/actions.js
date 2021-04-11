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
  editarTarefa: ({ commit }, { tarefa }) => {
    return tarefasServices.editarTarefa(tarefa).then((response) => {
      commit(types.EDITAR_TAREFA, { tarefa: response.data });
    });
  },
  deletarTarefa: ({ commit }, { tarefa }) => {
    return tarefasServices.deleteTarefa(tarefa).then((response) => {
      commit(types.EXCLUIR_TAREFA, { tarefa: response.data });
    });
  },
};
