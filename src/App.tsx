// import { useState } from "react"
import { Suspense } from "react"
import Hero from "./component/Hero"
import Nav from "./component/Nav"
import Players from "./component/Players/Players"
import type { Tplayers } from "./component/Players/Tplayers"


  const playersFetch = async () : Promise<Tplayers[]> => {
       const response = await fetch('/data.json')
       const data = await response.json()
      return data
      }

function App() {
//  const [count, setCount] = useState(0)
const playersPromise = playersFetch()
       
  return (  
      
      <div>
      
      <Nav /> 
      <Hero />
      
      <Suspense fallback={<div>Loading...</div>}>
        <Players playersPromise={playersPromise} />
      </Suspense>


      
      </div>

  )
}

export default App
