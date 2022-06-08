import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  render() {
    return (
      <>
        <MainContainer>
          <Post
            nomeUsuario={"paulinha"}
            fotoUsuario={"https://picsum.photos/50/50"}
            fotoPost={"https://picsum.photos/200/150"}
          />
        </MainContainer>
        <MainContainer>
          <Post
            nomeUsuario={"enzo"}
            fotoUsuario={
              "https://i.picsum.photos/id/114/200/300.jpg?hmac=RsaHLtW_cVJ2g7oCf2cW_kkIsaHv3QPZgv81ZYH5-aA"
            }
            fotoPost={
              "https://i.picsum.photos/id/116/200/200.jpg?hmac=l2LJ3qOoccUXmVmIcUqVK6Xjr3cIyS-Be89ySMCyTQQ"
            }
          />
        </MainContainer>
        <MainContainer>
          <Post
            nomeUsuario={"alice"}
            fotoUsuario={
              "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
            }
            fotoPost={
              "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
            }
          />
        </MainContainer>
      </>
    );
  }
}

export default App;
