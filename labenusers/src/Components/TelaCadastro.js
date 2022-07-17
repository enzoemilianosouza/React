import React from "react";
import axios from "axios";

const headers = {
  headers: {
    Authorization: "enzo-souza-maryam",
  },
};

export default class TelaCadastro extends React.Component {
  state = {
    valueNome: "",
    valueEmail: "",
  };

  handleInputNome = (event) => {
    this.setState({ valueNome: event.target.value });
  };

  handleInputEmail = (event) => {
    this.setState({ valueEmail: event.target.value });
  };

  criarUsuario = async () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const body = {
      name: this.state.valueNome,
      email: this.state.valueEmail,
    };

    axios
      .post(url, body, headers)
      .then((response) => {
        this.setState({ valueNome: "", valueEmail: "" });
        alert("cadastrado com sucesso");
        console.log(response);
        this.pegarUsuario();
      })
      .catch((erro) => {
        alert(erro.response.data.message);
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.props.irParaLista}>
          Ir para Lista de Usuários
        </button>
        <h2> Cadastro</h2>
        <input
          placeholder="Nome"
          onChange={this.handleInputNome}
          value={this.state.valueNome}
        ></input>
        <input
          placeholder="Email"
          value={this.state.valueEmail}
          onChange={this.handleInputEmail}
        ></input>
        <button onClick={this.criarUsuario}>Enviar Cadastro</button>
      </div>
    );
  }
}
