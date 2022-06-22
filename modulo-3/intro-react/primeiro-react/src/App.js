import logoLabenu from './img/logoLabenu.png'
import './App.css';

function App() {
  let titulo = 'Olá! Eu sou a Labenu!'
  let subtitulo = 'Este é o meu primeiro site React'
  let mandarMensagem = () => {
    alert('Boa noite!')
  }
  return (
    <div className="App">

      <h1>{titulo}</h1>
      <img src={logoLabenu} className='Logo-Labenu' alt='Logo da Labenu' />
      <p>{subtitulo}</p>
      <button onClick={mandarMensagem}>Aperte este botão</button>
    </div>
  )
}

export default App;
