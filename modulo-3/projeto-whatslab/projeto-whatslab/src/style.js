import styled from "styled-components";

export const Container=styled.div`
  display:grid;
  grid-template-columns: "1fr 1fr 1fr";
  text-align: center;
  img{
    width: 130px;
    height: 130px;
  }
  
`;

export const AreaLaranja=styled.aside`
    background-color: orange;
`;

export const Cabecalho=styled.header`
  grid-column-start: 1;
  grid-column-end: 4;
  height: 10vh;
`;

export const AreaMensagem=styled.main`
  height: 80vh;
  margin: 20px;
  display: flex;
  align-items: flex-end;
  label{
    margin: 10px;

  }

  input{
      border-radius: 3px;
      border: solid darkgray 2px; 
      box-shadow:solid darkgray 2px; 
      padding: 1px;
  }
  button{
    margin-left: 10px;
    border-radius: 3px;
    border: solid darkgray 2px; 
    padding: 1px;
  }
  #mensagem{
    width: 400px;
    
  }
`;

export const Rodape=styled.footer`
  grid-column-start: 1;
  grid-column-end: 4;
  background-color: darkgray;
`;

export default styled;