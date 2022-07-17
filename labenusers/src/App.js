import React from "react";
import TelaCadastro from "./Components/TelaCadastro";
import TelaUsuario from "./Components/TelaUsuario";

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro",
  };

  escolherTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista} />;
      case "lista":
        return <TelaUsuario irParaCadastro={this.irParaCadastro} />;
      default:
        <div> Erro! Página não encontrada</div>;
    }
  };

  irParaCadastro = () => {
    this.setState({ telaAtual: "cadastro" });
  };

  irParaLista = () => {
    this.setState({ telaAtual: "lista" });
  };

  render() {
    return <div>{this.escolherTela()}</div>;
  }
}
