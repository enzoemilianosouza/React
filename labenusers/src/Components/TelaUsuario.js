import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardUsuario = styled.div`
  display: flex;
  border: 1px solid black;
  padding: 10px;
  margin: 15px;
  width: 20%;
  justify-content: space-between;
`;

const headers = {
  headers: {
    Authorization: "enzo-souza-maryam",
  },
};

export default class TelaUsuario extends React.Component {
  state = {
    listaUsuario: [],
  };

  componentDidMount() {
    this.pegarUsuario();
  }

  pegarUsuario = async () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    try {
      const response = await axios.get(url, headers);
      this.setState({ listaUsuario: response.data });
      console.log(response.data);
    } catch (error) {
      alert("Ocorreu um erro, tente novamente");
      console.log(error.response);
    }
  };

  deletarUsuario = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

    axios
      .delete(url, headers)
      .then((response) => {
        alert("Usuário deletado com sucesso");
        this.pegarUsuario();
      })
      .catch((erro) => {
        alert("Ocorreu um erro ao deletar");
        console.log(erro.response);
      });
  };

  render() {
    const listaMapeadaUsuarios = this.state.listaUsuario.map((usuario) => {
      return (
        <CardUsuario key={usuario.id}>
          {usuario.name}
          <button onClick={() => this.deletarUsuario(usuario.id)}>X</button>
        </CardUsuario>
      );
    });

    return (
      <div>
        <button onClick={this.props.irParaCadastro}> Ir para cadastro</button>
        {listaMapeadaUsuarios}
      </div>
    );
  }
}
