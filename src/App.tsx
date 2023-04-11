import './App.css'
import Footer from './Components/Footer'
import GamesContainer from './Components/GamesContainer'
import Genres from './Components/Genres'
import Header from './Components/Header'

function App() {
  

  return (
    <div className="App">
      <Header/>
      <Genres/>
      <GamesContainer/>
      <Footer/>
    </div>
  )
}

export default App
