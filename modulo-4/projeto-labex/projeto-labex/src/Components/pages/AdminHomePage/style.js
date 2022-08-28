import styled from "styled-components";

export const Container = styled.div`
*{
    margin: 0;
    padding: 0;
}

height: 100vh;
width: 100vw;

`
export const Header = styled.div`
background-color: #000051;
height: 2em;
width: 100vw;

`

export const Title = styled.div `
display: flex;
justify-content: center;
background-color: #f1f8e9 ;



h1{
    color: #000;
    font-size: xx-large;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: #000051;
    padding: 5px;
    margin-top: 20px;
}

img{
    width: 65px;
    margin-top: 18px;
    margin-left: 5px;
    padding: 5px;
}
`

export const ContainerTrips = styled.div`
background-color:#f1f8e9 ;
display: flex;
justify-content: center;
`

export const Trips = styled.div`
height: 6px;
padding: 45px;
cursor: pointer;
`
export const TripsId = styled.span`
padding: 2px;
font-size: x-large;
font-family: cursive;
`
export const Footer = styled.div`
background-color: #000028;
height: 1em;
width: 100vw;
`

export const ControlButtons = styled.div`
display: flex;
justify-content: space-around;
background-color:#f1f8e9;
padding:6px;
height: 20px;

button{
height: 20px;
border-radius: 4px;
width: 120px;
color: #000028 ;
background-color: #c5cae9;
}
`