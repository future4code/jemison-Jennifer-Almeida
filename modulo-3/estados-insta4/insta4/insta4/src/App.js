import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components'
import Post from './components/Post/Post';
/*import Anna from './img/anna-capa.png';
import annaPubli from './img/anna-post.jpeg';
import Neff from './img/nef-profile.webp';
import neffPubli from './img/neff-post.jpeg';*/
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {


  const [inputNome, setInputNome] = useState("")
  const [inputComentario, setInputComentario] = useState("")
  const [postMapeado, setpostMapeado] = useState([
    { nomeUsuario: "Paulinha", fotoUsuario: "https://picsum.photos/50/50", fotoPost: "https://picsum.photos/200/150" },
    { nomeUsuario: "Anna Delvey", fotoUsuario:"https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY", fotoPost: "https://picsum.photos/200/152" },
    { nomeUsuario: "Neff", fotoUsuario: "https://picsum.photos/50/56", fotoPost: "https://picsum.photos/50/28" }
  ])


  const listaPostMapeado = postMapeado.map((item, index) => {
    return (
      <Post key={index}
        nomeUsuario={item.nomeUsuario}
        fotoUsuario={item.fotoUsuario}
        fotoPost={item.fotoPost}
      />
    )
  })
  const handleInputNome = (e) => {
   setInputNome(e.target.value)
  }

  const handleInputComentario = (e) => {
    setInputComentario(e.target.value)
  }
const addComentario = (e) =>{
  e.preventDefault();
  const novoCometario = {nome:inputNome, cometario:inputComentario}
 const novaListaDeComentarios = [... postMapeado, novoCometario]
 setpostMapeado(novaListaDeComentarios)
}
  return (
    <MainContainer>
      {listaPostMapeado}
      <form>
        <label>Nome: </label>
        <input
          placeholder='Insira seu nome'
          value={inputNome}
          onChange={handleInputNome}
        />

        <label>Comentário: </label>
        <input
          placeholder='Insira seu comentário'
          value={inputComentario}
          onChange={handleInputComentario}
        />


        <button onClick={addComentario}>Adicionar </button>

      </form>
    </MainContainer>


    /*<MainContainer>
             <Post
             nomeUsuario={'paulinha'}
              fotoUsuario={'https://picsum.photos/50/50'}
              fotoPost={'https://picsum.photos/200/150'}
            />
             <Post
              nomeUsuario={'Anna Delvey'}
              fotoUsuario={Anna}
              fotoPost={annaPubli}
            />
            <Post
              nomeUsuario={'Neff'}
              fotoUsuario={Neff}
              fotoPost={neffPubli}
            />
          </MainContainer>*/

  return (
    <MainContainer>
      <Post
        nomeUsuario={'paulinha'}
        fotoUsuario={'https://picsum.photos/50/50'}
        fotoPost={'https://picsum.photos/200/150'}
      />
      <Post
        nomeUsuario={'Anna Delvey'}
        fotoUsuario={Anna}
        fotoPost={annaPubli}
      />
      <Post
        nomeUsuario={'Neff'}
        fotoUsuario={Neff}
        fotoPost={neffPubli}
      />
    </MainContainer>

  )

}


export default App;
