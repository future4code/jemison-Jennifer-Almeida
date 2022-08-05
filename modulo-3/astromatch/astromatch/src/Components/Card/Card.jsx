import {CardContainer, HeaderCard, ImagemCard, ControleButtons} from "./styles";
import React from "react";
import  like from '../../img/like.png';
import  dislike from '../../img/dislike.png';
import logo from '../../img/logo.jpeg';

function Card(props) {
  const {photo, name, age, bio, handleLike, handleDeslike, handleTrocaTela} = props
  return (
    <div className="Principal">
      <CardContainer>
        <HeaderCard>
          <h1>AstroMatch</h1>
          <button onClick={() => handleTrocaTela("TelaMatch")}><img src={logo}/></button>
        </HeaderCard>
        <ImagemCard>
          <img src={photo} alt={name} />
          <h3>{name} {age}</h3>
          <h3>{bio}</h3>
        </ImagemCard>
        <ControleButtons>
          <button onClick={handleLike} type="button"><img src={like}/></button>
          <button onClick={handleDeslike} type="button"><img src={dislike}/></button>
        </ControleButtons>
      </CardContainer>
    </div>
  );
}

export default Card;
