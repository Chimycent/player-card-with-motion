import { useState } from 'react'
import PlayerList from './PlayerList'
import NavBar from './components/NavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <PlayerList/>
    </>
  )
}

export default App
