import Header from "./Components/Header";
import ButtonMenu from "./Components/ButtonMenu";
import CardVideo from "./Components/CardVideo";
import Styled from "styled-components";

const App = () => {
  function alertVideo(props) {
    alert("O video está sendo reproduzido");
  }

  const Footer = Styled.footer`
    height: 10%;
     background-color: grey;
    margin: 0;
   padding: 0;
   display: flex;
   align-items: center;
  `;
  return (
    <body>
      <div className="tela-inteira">
        <Header />
        <main>
          <nav className="menu-vertical">
            <ul>
              <ButtonMenu texto={"Inicio"} />
              <ButtonMenu texto={"Em alta"} />
              <ButtonMenu texto={"Inscrições"} />
              <hr />
              <ButtonMenu texto={"Originais"} />
              <ButtonMenu texto={"Historico"} />
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo
              titulo={"Video 1"}
              link={"https://picsum.photos/400/400?a=1"}
              alertVideo={alertVideo}
            />
            <CardVideo
              titulo={"Video 2"}
              link={"https://picsum.photos/400/400?a=2"}
              alertVideo={alertVideo}
            />
            <CardVideo
              titulo={"Video 3"}
              link={"https://picsum.photos/400/400?a=3"}
              alertVideo={alertVideo}
            />
            <CardVideo
              titulo={"Video 4"}
              link={"https://picsum.photos/400/400?a=4"}
              alertVideo={alertVideo}
            />
          </section>
        </main>
        <Footer>
          <h4>Oi! eu moro no footer!</h4>
          <hr></hr>
          <p> Enzo Emiliano Programmer ® -</p>
        </Footer>
      </div>
    </body>
  );
};

export default App;
