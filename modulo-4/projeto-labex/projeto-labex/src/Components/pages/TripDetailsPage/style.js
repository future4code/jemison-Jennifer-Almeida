import styled from 'styled-components'
import galaxy from './../../../img/galaxy.jpg'


export const Container = styled.div`
*{
    margin: 0;
    padding: 0;
}
background-image:url(${galaxy});
height: 4em;
background-size: cover;
background-repeat: no-repeat;
`

export const Title = styled.div`
padding: 6px;
text-align: center;
color: #ffffff;
align-items: center;

img{
    margin-top: 40px;
    margin-bottom: 10px;
    height: 90px;
    border-radius: 50px;
}
`
export const ContainerTrip = styled.div`
display: flex;
flex-direction: column;
text-align: center;
`

export const Trips = styled.div`
display: flex;
flex-direction: column;
`
export const TripInfo = styled.div`
display: flex;
justify-content: center;
margin: 5px;

p{
color: black;
margin-right: 5px;
}

span{
    color: red;
}
`

export const ButtonBack = styled.button`
text-align: center;
margin-left:580px;
padding: 2px;
width: 90px;
margin-top: 20px;
margin-bottom: 20px;
background-color: #81d4fa;
color: #00600f;
cursor: pointer;
border-radius: 3px;

`
export const TripCandidates = styled.div`
display: flex;
justify-content: center;
margin: 5px;

p{
color: black;
margin-right: 5px;
}

span{
    color: red ;
}
`
export const ButtonSubmit = styled.div`
display: flex;
justify-content: center;
margin-bottom: 30px;
margin-top: 30px;

button{
    width: 120px;
    margin-left: 18px;
    cursor: pointer;
}

`