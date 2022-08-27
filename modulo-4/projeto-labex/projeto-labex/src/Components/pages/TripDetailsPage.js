import { useNavigate, useParams } from 'react-router-dom';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { BASE_URL } from './constants/constants';
import useRequestDataTrips from './../../hooks/useRequestDataTrips'


function TripDetails() {

  useProtectedPage()

  const params = useParams()

  const navigate = useNavigate();
  const goToAdmPage = () => {
    navigate("/admin/trips/list")
  }



  const [data, isLoading] = useRequestDataTrips(`${BASE_URL}trip/${params.id}`)
  console.log(data)


  const myCandidates = data && data.trip.candidates && data.trip.candidates.map((candidate) => {
    return (
      <div key={candidate.id}>
        <div>
          <p>Nome: </p> <span>{candidate.name}</span>
        </div>
        <div>
          <p>Profissão: </p> <span>{candidate.profession}</span>
        </div>
        <div>
          <p>Idade: </p> <span>{candidate.age}</span>
        </div>
        <div>
          <p>País: </p> <span>{candidate.country}</span>
        </div>
        <div>
          <p>Descrição: </p> <span>{candidate.applicationText}</span>
        </div>
        <button>Aprovar</button>
        <button>Reprovar</button>
      </div>
    )
  })

  const trip = data && data.trip &&
    (
      <div>
        <div key={data.trip.id}>
          <div>
            <p>Nome: </p><span>{data.trip.name}</span>
          </div>
          <div>
            <p>Planeta: </p><span>{data.trip.planet}</span>
          </div>
          <div>
            <p>Data: </p><span>{data.trip.date}</span>
          </div>
          <button onClick={goToAdmPage}>Voltar</button>
        </div>
        {myCandidates}
      </div>
    )

  return (
    <div>
      <div>
        <h1>{data && data.trip && data.trip.name}</h1>
      </div>
      <div>
        {isLoading && <p>"Carregando as próximas viagens..."</p>}
        {!isLoading && trip}
      </div>
    </div >
  );
}

export default TripDetails;

 //<button onClick={goToAdmPage}>Voltar</button>
// {data&&data.trip.length===0&&<h3>"Ocorreu um erro durante a requisição!"</h3>}
//{data&&data.trip&&data?allMyTrips:<p>"Não existem candidatos pendentes"</p>}

//{!isLoadingTrip && errorTrip && <h5>Ocorreu um erro!</h5>}
        //  {!isLoadingTrip && data && travelList}
