import {createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle` 
 :root { 
     --ligth:#ffffff;
     --red: #7f0000;
     --black: #000000;
     --green: #18ffff;
 }
     h1,h2{
         font-family:'Montserrat',cursive;
         color:var(--red);
     }

     h3,h4{
        font-family: 'Montserrat',cursive;
        color:var(--black);
    }
     body{
        font-family:'Montserrat',cursive;
        background:var(--ligth);
        color: var(--black);
     }
 

 *{
     margin:0;
     padding:0;
     box-sizing: border-box;
     

 };
`

