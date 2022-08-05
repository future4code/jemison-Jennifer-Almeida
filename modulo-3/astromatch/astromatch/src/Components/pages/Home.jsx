import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from 'axios'


function Home({handleTrocaTela}) {
  const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno";

  const[profile, setProfile] = useState([])

  //Get Profile To Choose
  function getProfileToChoose() {
    axios
      .get(`${baseUrl} + /person`)
      .then((response) => {
        setProfile(response.data.profile)
      })
      .catch((err) => {
        console.log(err)
      })
  }
 
  useEffect(() => {
    getProfileToChoose()
    postChoosePerson()
  }, [])

 const handleLike = () => {
  getProfileToChoose(true)

 }

 const handleDeslike = () => {
  getProfileToChoose(false)
 }
// POST Choose Person

const headers ={
  headers:{
    ContentType: 'application/json' 
}
}

const body = {
 id: profile.id,
 choice: "choice"

}




function postChoosePerson() {
  axios
    .post(`${baseUrl} + /choose-person`, headers, body)
    .then((response) => {
      getProfileToChoose();
    })
    .catch((err) => {
      console.log(err)
    })
}

  return (
    <div className="Principal">
      <Card
        photo={profile.photo}
        name={profile.name}
        age={profile.age}
        bio={profile.bio}
        handleLike={handleLike}
        handleDeslike={handleDeslike}
        handleTrocaTela = {handleTrocaTela}
      />

    </div>
  );
}

export default Home;
