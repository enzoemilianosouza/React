import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import ImagemButton from "./components/ImagemButton/ImagemButton";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQHHo4BZKPOVRQ/profile-displayphoto-shrink_800_800/0/1625865796146?e=1660176000&v=beta&t=cub5OEob6e4LMqo_r5dE4LJKZodBVPrnuI8GFSWtlCs"
          nome="Enzo Emiliano"
          descricao="Oi, eu sou o Enzo. Estudante da Labenu."
        />

        <ImagemButton imagem="" texto="Ver mais" />
      </div>

      <div>
        <CardPequeno email={"enzo@emiliano.com"} adress={"Rua dos Bobos, 0"} />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Formando desenvolvedores para o mercado de trabalho!"
        />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="NASA"
          descricao="Apontando defeitos."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
