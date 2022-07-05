
import styled from 'styled-components';


export const Header = styled.div`

 `;

export const DivPai = styled.div`
    background-color: #ffffff;
    height: 100vh;
 `;

export const Logo = styled.img`
display: block;
margin: 0 auto;
margin-top: 20px;
`;

export const ContainerCentral = styled.section `
display: flex;
justify-content: space-between;
margin-top: 10px;
`;

export const FaixasLaranjas = styled.span `

height: 80vh;
width: 8vw;
background-color: #ff8f00;
`;

export const Conteudo = styled.div `
display: flex;
align-items: flex-end;

`;

export const Remetente = styled.div `
display: flex;
padding: 30px;

input{
width: 160px;
border-radius: 3px;
box-shadow:  2px grey;
margin-left: 5px;
    
}
`;

export const Mensagem = styled.div `
display: flex;
padding: 30px;
margin-left:0;

input{
width: 300px;
border-radius: 3px;
box-shadow:  2px grey;
margin-left: 5px;
}
`;

export const BotaoEnviar = styled.div`

display: flex;
padding: 30px;
border-radius: 3px;
box-shadow:  2px grey;
margin-left: 5px;
`;

export const Footer = styled.div`
display: flex;
justify-content: center;
background-color: #9e9e9e;
width: 100%;
`;