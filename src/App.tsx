import { Routes,Route } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import GamesContainer from './Components/GamesContainer'
import Genres from './Components/Genres'
import Header from './Components/Header'
import GameDetail from './Pages/GameDetail'
import GenresPage from './Pages/GenresPage'
import Creators from './Pages/Creators'
import Platforms from './Pages/Platforms'
import Publishers from './Pages/Publishers'
import Stores from './Pages/Stores'
import Developers from './Pages/Developers'
import Home from './Pages/Home'
function App() {
  

  return (
    <div className="App">
      <Header/>
      
      
      <Routes>
        
      <Route  path='/' element={<Home/>}/>
        <Route  path='games/:gameId' element={<GameDetail/>}/>
        <Route  path='genre/:genreId' element={<GenresPage/>}/>
        <Route  path='/creators' element={<Creators/>}/>
        <Route  path='/platforms' element={<Platforms/>}/>
        <Route  path='/publishers' element={<Publishers/>}/>
        <Route  path='/stores' element={<Stores/>}/>
        <Route  path='/developers' element={<Developers/>}/>
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
