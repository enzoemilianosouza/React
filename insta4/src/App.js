import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const InputButton = styled.div`
  height: 40px;
  display: flex;
  padding-left: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

// abaixo os 3 posts estão em um array, que será mapeado para um array de componentes Post.
class App extends React.Component {
  state = {
    pessoas: [
      {
        nome: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nome: "Enzo",
        fotoUsuario:
          "https://i.picsum.photos/id/114/200/300.jpg?hmac=RsaHLtW_cVJ2g7oCf2cW_kkIsaHv3QPZgv81ZYH5-aA",
        fotoPost:
          "https://i.picsum.photos/id/116/200/200.jpg?hmac=l2LJ3qOoccUXmVmIcUqVK6Xjr3cIyS-Be89ySMCyTQQ",
      },
      {
        nome: "Alice",
        fotoUsuario:
          "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
        fotoPost:
          "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
      },
      {
        valorInputPessoa: "",
        valorInputPost: "",
        valorInputFoto: "",
      },
    ],
  };

  // criei a função para adicionar perfil

  adicionarPefil = () => {
    const novoPerfil = {
      nome: this.state.valorInputPessoa,
      post: this.state.valorInputPost,
      foto: this.state.valorInputFoto,
    };

    // aqui eu digo que o novo perfil + perfil existente é = novos perfis.
    const novosPerfis = [novoPerfil, ...this.state.pessoas];
    // uso setState pra informar ao React sobre a mudança;
    this.setState({ pessoas: novosPerfis });
    console.log("adicionado");
  };

  onChangePessoa = (event) => {
    this.setState({ valorInputPessoa: event.target.value });
  };

  onChangeFoto = (event) => {
    this.setState({ valorInputFoto: event.target.value });
  };

  onChangePost = (event) => {
    this.setState({ valorInputPost: event.target.value });
  };

  render() {
    // mapeando o array para um componente
    const listaComponentePost = this.state.pessoas.map((pessoa) => {
      return (
        <Post
          nomeUsuario={pessoa.nome}
          fotoUsuario={pessoa.fotoUsuario}
          fotoPost={pessoa.fotoPost}
        />
      );
    });
    return (
      <MainContainer>
        {/* chamando o componente */}
        {listaComponentePost}
        {/* input e as propriedades abaixo para cada evento */}
        <InputButton>
          {" "}
          <input
            value={this.state.valorInputPessoa}
            onChange={this.onChangeInputPessoa}
            placeholder={"Nome"}
          />
          <input
            value={this.state.valorInputPost}
            onChange={this.onChangeInputPost}
            placeholder={"Post"}
          />
          <input
            value={this.state.valorInputFoto}
            onChange={this.onChangeInputFoto}
            placeholder={"Foto"}
          />
          <br />
          <button onClick={this.adicionarPefil}>adicionar Perfil</button>
        </InputButton>
      </MainContainer>
    );
  }
}

export default App;
