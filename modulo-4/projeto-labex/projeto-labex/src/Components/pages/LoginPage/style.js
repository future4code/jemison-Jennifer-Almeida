import styled from 'styled-components'
import astronauta from './../../../img/astronauta.jpg'

export const Container = styled.div`
background-image:url(${astronauta});
background-size: cover;
background-repeat: no-repeat;
height: 100vh;
display: flex;
*{margin: 0;
padding:0;
}
`

export const ControlForms = styled.div`
display: flex;
display: block;
height: 200px;
width: 600px;
margin-top: 200px;
margin-left: 100px;
padding: 10px;
`

export const TitleLogin = styled.div`
 display: flex;
 text-align: center;
 margin-top: 5px;
 margin-left: 270px;
 margin-bottom: 60px;
 color: white;
 font-size:x-large;
 font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
export const ContainerForm = styled.form`
display: flex;
display: block;
text-align: center;

label{
    color: white;
    padding: 2px;
    margin-left: 5px;
}

input{
    border-radius: 4px;
    height: 15px;
    text-decoration: none;
    padding: 2px;
    cursor: pointer;
    margin-left: 2px;
}
`
export const StyleButtons = styled.div`
display: flex;
justify-content: center;
margin-top: 80px;
padding: 5px;

button{
width: 80px;
cursor: pointer;
margin-left: 30px;
text-align: center;
padding: 1px;

}

`