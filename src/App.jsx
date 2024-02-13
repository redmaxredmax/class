import React from "react"
import { Card } from "./card"


function App() {
  const [state, setState] = React.useState(true)

    return (
        <div>
            {state ? <Card /> : ""}
            <button onClick={()=> setState(!state)}>show</button>
            <h1>salom</h1>
            <h1>salom</h1>
            <h1>salom</h1>

            <h1>salom</h1>
        </div>
    )
}

export default App
