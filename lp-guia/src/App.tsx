import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TrueFocus from './components/TrueFocus'
import TopMarquee from './components/TopMarquee'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TopMarquee />
       <TrueFocus
          sentence="FOQUE NO IMPORTANTE"
          manualMode={false}
          blurAmount={5}
          borderColor="cyan"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
