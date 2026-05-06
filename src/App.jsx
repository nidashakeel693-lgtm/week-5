import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Testimonial from './Testimonial/Testimonial'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Testimonial/>
    </>
  )
}

export default App
