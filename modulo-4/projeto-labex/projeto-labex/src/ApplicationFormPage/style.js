import styled from "styled-components"

export const Container = styled.div`
*{
    margin: 0;
    padding: 0;
}

`

export const Title = styled.div`
font-size: large;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
color: #12005e;
margin-top: 20px;
text-align: center;
img{
    height: 90px;
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 5px;
}
`

export const Form = styled.form`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding:5px;
margin-top: 30px;

input{
    width: 300px;
    padding: 3px;
    margin-bottom: 20px;
    text-align: center;
    cursor: pointer;
}
`

export const Buttons = styled.div`
display: flex;
justify-content: center;
padding: 2px;


button{
    width:120px;
    margin-left: 15px;
    align-items: center;
    cursor: pointer;

}

`