import React from "react";
import styled from "styled-components";
import { Filtros } from "./Filtros";
import { HomeApp } from "./HomeApp";
import { Produtos } from "./Produtos";

const StyledDivApp = styled.div`
  margin-bottom: auto;
  background-color: aqua;
  margin-top: 10%;
  align-items: center;
  justify-content: center;
`;
const StyledFiltro = styled.div`
  margin-top: 5%;
`;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputPesquisa: "" };
  }
  onChangeInputPesquisa(event) {
    this.setState({ inputPesquisa: event.target.value });
  }
  render() {
    return (
      <>
        <HomeApp />
        <StyledFiltro>
          <Filtros />
        </StyledFiltro>
        <StyledDivApp>
          <Produtos />
        </StyledDivApp>
      </>
    );
  }
}

export default App;
