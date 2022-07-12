import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Anna from './img/anna-capa.png';
import annaPubli from './img/anna-post.jpeg';
import Neff from './img/nef-profile.webp';
import neffPubli from './img/neff-post.jpeg';
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
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
