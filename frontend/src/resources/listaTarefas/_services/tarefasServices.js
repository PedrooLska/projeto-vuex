import axios from "axios";

const tarefasClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});

export default {
  getTarefas() {
    return tarefasClient.get("/listaTarefas");
  },
  getTarefa(id) {
    return tarefasClient(`/listaTarefas/${id}`);
  },
  postTarefa(tarefa) {
    return tarefasClient.post("/listaTarefas", tarefa);
  },
  putTarefa(tarefa) {
    return tarefasClient.put(`/listaTarefas/${tarefa.id}`, tarefa);
  },
  deleteTarefa(id) {
    return tarefasClient.delete(`/listaTarefas/${id}`);
  },
};
