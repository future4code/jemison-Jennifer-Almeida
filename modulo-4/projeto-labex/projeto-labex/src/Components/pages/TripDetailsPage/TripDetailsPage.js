import { useNavigate, useParams } from 'react-router-dom';
import { useProtectedPage } from './../../../hooks/useProtectedPage'
import { BASE_URL } from './../constants/constants'
import useRequestDataTrips from './../../../hooks/useRequestDataTrips'
import nave from './../../../img/nave.jpg'
import axios from 'axios';
import {Title, Container, ContainerTrip,Trips, TripInfo, ButtonBack, TripCandidates, ButtonSubmit  } from './style'


function TripDetails() {

  useProtectedPage()

  const params = useParams()

  const navigate = useNavigate();
  const goToAdmPage = () => {
    navigate("/admin/trips/list")
  }



  const [data, isLoading] = useRequestDataTrips(`${BASE_URL}trip/${params.id}`)
  console.log(data)

  const dell = () => {
    const token = localStorage.getItem("token")
    axios.delete(`${BASE_URL}trips/${params.id}`, {
      headers: {
        auth: token
      }
    }).then((res) => alert("Sua viagem foi deletada com sucesso!"))
      .catch((error) => console.log("Deu ruim!"))
  }


  const myCandidates = data && data.trip.candidates && data.trip.candidates.map((candidate) => {
    return (
      <div key={candidate.id}>
        <TripCandidates>
          <p>Nome: </p> <span>{candidate.name}</span>
        </TripCandidates>
        <TripCandidates>
          <p>Profissão: </p> <span>{candidate.profession}</span>
        </TripCandidates>
        <TripCandidates>
          <p>Idade: </p> <span>{candidate.age}</span>
        </TripCandidates>
        <TripCandidates>
          <p>País: </p> <span>{candidate.country}</span>
        </TripCandidates>
        <TripCandidates>
          <p>Descrição: </p> <span>{candidate.applicationText}</span>
        </TripCandidates>
        <ButtonSubmit>
        <button>Aprovar</button>
        <button onClick={dell}>Reprovar</button>
        </ButtonSubmit>
      </div>
    )
  })

  const trip = data && data.trip &&
    (
      <ContainerTrip >
        <Trips key={data.trip.id}>
          <TripInfo >
            <p>Nome: </p><span>{data.trip.name}</span>
          </TripInfo >
          <TripInfo>
            <p>Planeta: </p><span>{data.trip.planet}</span>
          </TripInfo>
          <TripInfo>
            <p>Data: </p><span>{data.trip.date}</span>
          </TripInfo>
          <ButtonBack onClick={goToAdmPage}>Voltar</ButtonBack>
        </Trips>
        {myCandidates}
      </ContainerTrip >
    )

  return (
    <Container>
      <Title>
        <h1>{data && data.trip && data.trip.name}</h1><img src={nave}></img>
      </Title>
      <div>
        {isLoading && <p>"Carregando as próximas viagens..."</p>}
        {!isLoading && trip}
      </div>
    </Container >
  );
}

export default TripDetails;

