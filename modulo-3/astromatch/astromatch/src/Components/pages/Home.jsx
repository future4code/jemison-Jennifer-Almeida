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
  }, [])

 const handleLike = () => {
  postChoosePerson(true)
 }

 const handleDeslike = () => {
  postChoosePerson(false)
 }
// POST Choose Person

const headers ={
  headers:{
    ContentType: 'application/json' 
  }
}  

function postChoosePerson(choice) {
  const body = {
    id: profile.id,
    choice: choice
   }

  axios
    .post(`${baseUrl} + /choose-person`, body, headers)
    .then((response) => {
      if(response.data.isMatch) alert('Deu match!')
      getProfileToChoose()
    })
    .catch((err) => {
      console.log("Deu ruim!")
    })
}

  return (
    <div className="Principal">
      <Card
        photo={profile && profile.photo}
        name={profile && profile.name}
        age={profile && profile.age}
        bio={profile && profile.bio}
        handleLike={handleLike}
        handleDeslike={handleDeslike}
        handleTrocaTela = {handleTrocaTela}
      />

    </div>
  );
}

export default Home;
