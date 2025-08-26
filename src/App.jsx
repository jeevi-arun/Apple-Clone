import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Header/>
    <Hero/>
    <Footer></Footer>
    
   
      </>
  )
}

export default App
