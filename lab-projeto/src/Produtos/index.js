import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import React from "react";
import styled from "styled-components";

const DivProdutos = styled.div`
  display: flex;
  padding: 0%;
  align-items: center;
  justify-content: space-evenly;
`;

export class Produtos extends React.Component {
  state = {
    Produtos: [
      {
        id: 1,
        name: "Foguete 2000",
        value: 280000.0,
        imageUrl:
          "https://static.todamateria.com.br/upload/ap/ol/apollo11decolando-cke.jpg",
      },
      {
        id: 2,
        name: "Tie Fighter",
        value: 1300000.0,
        imageUrl:
          "https://static.todamateria.com.br/upload/ap/ol/apollo11decolando-cke.jpg",
      },
      {
        id: 3,
        name: "Blue Origin",
        value: 9005000.0,
        imageUrl:
          "https://static.todamateria.com.br/upload/ap/ol/apollo11decolando-cke.jpg",
      },
    ],
  };

  _mostrarProduto = () => {
    return this.state.Produtos.map((produto) => {
      return (
        <Card sx={{ maxWidth: 245 }}>
          <CardActionArea>
            <CardMedia component="img" src={produto.imageUrl} alt="" />
            <CardContent>
              {produto.id}
              <h2>{produto.name}</h2>
              <h3>{produto.value}</h3>
              <Button>Adicionar</Button>
            </CardContent>
          </CardActionArea>
        </Card>
      );
    });
  };
  get mostrarProduto() {
    return this._mostrarProduto;
  }
  set mostrarProduto(value) {
    this._mostrarProduto = value;
  }

  render() {
    return <DivProdutos>{this.mostrarProduto()}</DivProdutos>;
  }
}
