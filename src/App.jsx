
import random from "randomstring-ng"
import { Naslov } from "./Naslov"

function App() {
  
  return (
    <>
      
        <h2>
          {random.generate()}
        </h2>
        <Naslov/>
    </>
  )
}

export default App
