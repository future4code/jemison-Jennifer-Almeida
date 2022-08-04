import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from 'axios'


function Home() {
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
  getProfileToChoose()

 }

 const handleDeslike = () => {
  getProfileToChoose()
 }
// POST Choose Person
function postChoosePerson() {
  axios
    .post(`${baseUrl} + /choose-person`)
    .then((response) => {
      alert('Itls
      s a Match!');
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
      />

    </div>
  );
}

export default Home;
