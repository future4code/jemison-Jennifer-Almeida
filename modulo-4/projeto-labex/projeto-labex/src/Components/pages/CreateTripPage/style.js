import styled from 'styled-components'
import planets from './../../../img/planets.jpg'

export const Container = styled.div`
*{
    margin: 0;
    padding: 0;

}
background-image: url(${planets});
background-repeat:no-repeat;
background-size:cover;
width: 100vw;
height: 100vh;
`

export const Title = styled.div`
text-align: center;
color: #ffffff;
font-size: x-large;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
padding: 30px;
`
export const ControlForms = styled.div`
`
export const Form = styled.div`
display: block;
text-align: center;
`
export const FormsContainer =styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 5px;
margin-top: 40px;

input{
    width: 400px;
    border-radius: 5px;
    text-align: center;
    height: 20px;
    
}
select{
    width: 400px;
    margin: 5px;
}

`
export const ControlButton = styled.div`
display: flex;
justify-content: center;
height: 20px;


button{
height: 20px;
border-radius: 4px;
width: 120px;
color: #000028 ;
margin-right: 20px;
margin-left: 20px;
text-align: center;
cursor: pointer;
margin-top: 20px;

}
`