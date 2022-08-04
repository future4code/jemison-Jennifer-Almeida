import {CardContainer, HeaderCard, ImagemCard, ControleButtons} from "./styles";
import React from "react";


function Card(props) {
  const {photo, name, age, bio, handleLike, handleDeslike} = props
  return (
    <div className="Principal">
      <CardContainer>
        <HeaderCard>
          <h1>AstroMatch</h1>
          <button type="button">Mudar de tela</button>
        </HeaderCard>
        <ImagemCard>
          <img src={photo} alt={name} />
          <h3>{name} {age}</h3>
          <h3>{bio}</h3>
        </ImagemCard>
        <ControleButtons>
          <button onClick={handleLike} type="text">Like</button>
          <button onClick={handleDeslike} type="text">Deslike</button>
        </ControleButtons>
      </CardContainer>
    </div>
  );
}

export default Card;
