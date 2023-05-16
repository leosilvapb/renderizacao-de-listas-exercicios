import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal
} from "./styled";
import bin from "../../assets/bin.png";
import { ListaFinalizada } from "../ListaFinalizada";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [novaLista, setNovaLista] = useState([])

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((item) => item !== tarefa);
    const listaCompleta = lista.filter((item) => item === tarefa);
    console.log("lista Filtrada:", listaFiltrada)
    console.log("lista completa:", listaCompleta)
    setLista(listaFiltrada)
    setNovaLista([...novaLista, listaCompleta])
  };

  const enviarComEnter = (event) => {
    if (event.key === "Enter") {
      event.preventDefault()
      adicionaTarefa()
    }
  }

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          onKeyDown={enviarComEnter}
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal />
      <ListaContainer>
        <ul>
          {novaLista.map((tarefa, index) => {
            return <ListaFinalizada index={index} tarefa={tarefa}
            />
          })}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
