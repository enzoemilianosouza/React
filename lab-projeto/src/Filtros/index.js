import { Search } from "@mui/icons-material";
import { Button, Select, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";

const DivSelect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
`;
const DivText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1%;
`;
export class Filtros extends React.Component {
  state = {
    valorMin: "",
    valorMax: "",
    pesquisaNome: "",
  };

  changeValorMin = (event) => {
    this.setState({ valorMin: event.target.value });
  };

  changeValorMax = (event) => {
    this.setState({ valorMax: event.target.value });
  };

  changePesquisaNome = (event) => {
    this.setState({ pesquisaNome: event.target.value });
  };

  imprimirInfo = () => {
    console.log(this.state.valorMax);
    console.log(this.state.valorMin);
    console.log(this.state.pesquisaNome);
  };

  render() {
    return (
      <>
        <DivSelect>
          <Select htmlFor="valorMin"></Select>
          <TextField
            name="valorMin"
            type="number"
            min="0"
            value={this.state.valorMin}
            onChange={this.changeValorMin}
          />
        </DivSelect>
        <DivText>
          <TextField
            label="pesquisa"
            value={this.state.pesquisaNome}
            onChange={this.changePesquisaNome}
          ></TextField>{" "}
          <Button startIcon={<Search />} onClick={this.imprimirInfo}>
            {this.props.texto}
          </Button>
        </DivText>
      </>
    );
  }
}
