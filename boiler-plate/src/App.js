import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [
      {
        id: Date.now(),
        texto: "tarefa one",
        completa: false,
      },
      {
        id: Date.now(),
        texto: "tarefa two",
        completa: true,
      },
    ],
    inputValue: "",
    filtro: "pendentes",
  };

  // salva no localStorage > dispara no CompDidUpdate
  saveInLocalStorage = () => {
    const newTarefa = this.state.tarefas;
    const tarefaString = JSON.stringify(newTarefa);
    window.localStorage.setItem("tarefa", tarefaString);
  };

  getFromLocalStorage = () => {
    // pega do localStorage => disparado no compDidMount
    const tarefaString = window.localStorage.getItem("tarefas");
    // se existir tarefas
    if (tarefaString) {
      const newTarefa = JSON.parse(tarefaString);
      this.setState({ tarefas: newTarefa });
    }
  };

  // executado toda vez que o estado ou props do comp muda
  componentDidUpdate() {
    this.saveInLocalStorage();
  }
  // executado uma vez qndo o componente aparece na tela.
  componentDidMount() {
    this.getFromLocalStorage();
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };

    const novaListaTarefa = [...this.state.tarefas, novaTarefa];
    this.setState({ tarefas: novaListaTarefa });
  };

  selectTarefa = (id) => {
    const novaListaTarefa = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa,
        };
        return novaTarefa;
      } else {
        return tarefa;
      }
    });

    this.setState({ tarefas: novaListaTarefa });
  };

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
