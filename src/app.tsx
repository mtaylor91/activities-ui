import { useState } from 'preact/hooks'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Activities</h1>
      <div class="container">
      </div>
    </>
  )
}
