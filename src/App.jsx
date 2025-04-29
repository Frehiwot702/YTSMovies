import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import MovieLists from './pages/MovieLists'
import Navigation from './components/Navigation'
import Herosection from './components/Herosection'

function App() {

  return (
    <div className='w-full'>
      <Navigation />
      <Herosection/>
      <MovieLists/>
    </div>
  )
}

export default App
