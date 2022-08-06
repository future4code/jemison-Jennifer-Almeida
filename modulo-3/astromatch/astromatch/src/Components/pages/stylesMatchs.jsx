import styled from "styled-components";

export const Container = styled.div`
background-color: var(--ligth);
border: solid var(--black) 1px;
padding: 10px;
margin: 20px;
text-align: center;
color: var(--black);
width: 70vh;
height: 95vh;
`
export const Header = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
padding: 2px;

img{
    height: 4em;
    
}
 button{
     margin-left: 50px;
     text-align: end;
     border-radius: 3em;
     padding: 1px;
     border: none;
     
 }
`;

export const DivButton = styled.div`
   display : flex;
  justify-content: center;
  
  button{
    border-radius: 5px;
    box-shadow: 2px gray;
     padding: 1px;
     width: 70px;
  }
`