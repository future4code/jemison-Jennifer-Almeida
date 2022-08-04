import styled from "styled-components";

export const CardContainer = styled.div`
background-color: var(--ligth);
border: solid var(--black) 1px;
padding: 10px;
margin: 20px;
text-align: center;
color: var(--black);
width: 70vh;
height: 90vh;
img{
    max-width: 1000px;
}
`;

export const HeaderCard = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
padding: 2px;
 button{
     margin-left: 50px;
     text-align: end
     
 }
`;

export const ImagemCard = styled.div`
width: 65vh;
height: 70vh;
border-radius: 8px;
display: flex;
display: block;
justify-content: center;
align-items: center;
border: solid gray 1px;
box-shadow: solid gray 2px;
margin-top: 10px;
img{
    margin-top: 15px;
    height: 18em;
    box-shadow: solid gray 20px;
}
h3{
    text-align: start;
    margin-left: 10px;
    padding: 2px;
}
`;
export const ControleButtons = styled.div`
display: flex;
justify-content: space-around;
margin-top: 15px;
padding: 2px;

`;