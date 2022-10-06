import styled from 'styled-components'
import galaxy from './../../../img/galaxy1.jpg'


export const Container = styled.div`
background-image: url(${galaxy});
background-size: cover;
background-repeat: no-repeat;
display: flex;
justify-content:center;
align-items: center;
text-align: center;
background-color: #546e7a;
width: 100vw;
height:100vh;
*{margin: 0;
padding:0;
}
`


export const Header = styled.div`
display: flex;
text-align: center;
align-items: center;
width: 30vw;
height: 30vh;
justify-content: center;
`

export const Section = styled.div`
display: flex;
flex-direction: column;
justify-content: center;


`

export const SectionTitle = styled.div`
display: flex;
justify-content: center;
margin-left: 10px;
margin-bottom:60px;
padding: 5px;
font-size: xx-large;
color: white ;
font-family: Verdana, Geneva, Tahoma, sans-serif;
`

export const ControlButtons = styled.div`
display: flex;
justify-content: space-around;
margin-left: 70px;

button{
  background-color: white;
  margin-right: 50px;
  padding: 3px;
  width: 140px;
  height: 25px;
  border-radius: 4px;
  cursor: pointer;
}
`