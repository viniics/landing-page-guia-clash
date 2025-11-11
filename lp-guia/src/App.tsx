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
      <br></br>
      <p className="read-the-docs">
        Sem enrolação. Filtramos o que realmente funciona e entregamos o método certo para evoluir no Clash.
      </p>
    </>
  )
}

export default App
