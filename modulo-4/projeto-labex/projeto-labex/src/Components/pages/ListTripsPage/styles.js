import styled from 'styled-components'
import galaxy from './../../../img/galaxy.jpg'


export const Container = styled.div`
*{

    margin: 0;
    padding: 0;
}
`
export const Header = styled.div`
background-image: url(${galaxy});
height: 6em;
background-size: cover;
background-repeat: no-repeat;
`

export const Borderbox = styled.div `
display: flex;
background-color: #f5f5f5;
padding: 15px;
min-height: 83vh;
border: solid 20px #120F2A ;
display: block

`
export const Title = styled.div `
text-align: center;
margin-bottom: 10px;
color: #120F2A ;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`
export const Trip = styled.div`
background-color: white;
padding: 3px;
margin-top: 10px;
margin-bottom: 8px;
border: solid  2px black;
border-radius: 5px;

`
export const ControlTrips = styled.div`
display: flex;
text-align: center;
`

export const Buttons = styled.div `
display: flex;
justify-content: center;
padding: 5px;
margin-top: 5px;

button{
    padding: 2px;
    margin-left: 20px;
    margin-top: 5px;
    width: 90px;
    border-radius:5px;
    text-align: center;
    cursor: pointer;
}

`