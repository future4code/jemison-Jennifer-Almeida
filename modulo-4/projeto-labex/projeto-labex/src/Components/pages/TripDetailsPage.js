import axios from 'axios';
import { useEffect } from 'react'
import { BASE_URL } from './constants/constants';


function TripDetails() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get(`${BASE_URL}trip/NoIFVcOiSgTKTIPVZwXS`,
      {
        headers: {
          auth: token
        }
      }).then((response)=>{
        console.log(response.data)

      }).catch((error)=>{
        console.log("Deu ruim!", error.response)

      })
  },[])

  return (
    <div>
      <h1>Detalhes</h1>
    </div>
  );
}

export default TripDetails;
