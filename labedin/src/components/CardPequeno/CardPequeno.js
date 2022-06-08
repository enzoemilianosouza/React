import React from "react";
import Styled from "styled-components";
function CardPequeno(props) {
  const CardContainer = Styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    padding: 20px 160px 10px 150px;
    margin-bottom: 10px;
    justify-content: flex-start;
  `;

  const LineContainer = Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: 10px;
  `;

  const CardImage = Styled.img`
    width: 30px;
    margin-right: 10px;
  `;

  return (
    <CardContainer>
      <LineContainer>
        <CardImage src="https://i.pinimg.com/originals/bb/18/bd/bb18bdbbef437b2d50518db5a8292c94.png" />
        <p>{props.email}</p>
      </LineContainer>
      <LineContainer>
        <CardImage src="" />
        <p>{props.adress}</p>
      </LineContainer>
    </CardContainer>
  );
}

export default CardPequeno;
