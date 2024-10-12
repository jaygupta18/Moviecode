import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import Slider from './component/Slider'
import Production from './component/Production'
import GenreMovieList from './component/GenreMovieList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Slider/>
    <Production/>
   <GenreMovieList/>
    
    </>
  )
}

export default App
