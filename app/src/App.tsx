import { useState } from "react"
import "./App.css"
import VideoCard from "./components/VideoCard"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <VideoCard
        title="Random"
        thumbnail="https://cdn.gro.care/a387d54789f4_1683524902456.jpeg"
        creator="Pari Dixit"
        avatar="https://cdn.gro.care/d75e3e709c9e_1682692230505.webp"
      />
    </>
  )
}

export default App
