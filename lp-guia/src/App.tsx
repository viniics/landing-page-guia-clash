import './App.css'
import TrueFocus from './components/TrueFocus'
import TopMarquee from './components/TopMarquee'
import BlurText from './components/BlurText'
import capaImg from './assets/CAPA MEGA VS PEKKA.png'
import ConteudoAbordado from './components/ConteudoAbordado'

function App() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!')
  }

  return (
    <>
      <TopMarquee />

      <main className="flex flex-col items-center text-center px-6 py-10">
        <BlurText
          text="GUIA DO CLASH"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-3xl mb-8"
        />

        <br></br>
        <img
          src={capaImg}
          alt="Capa Mega vs Pekka"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-lg mb-6"
        />
        <p className="text-base mb-4">
          Estratégias comprovadas para avançar no Clash Royale sem investir nada no jogo.<br />
          Melhore suas habilidades e aprenda a criar decks próprios que irão te levar para a arena máxima.
        </p>

        <a
          href="https://pay.hotmart.com/N102765722H"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-8 py-3 text-lg font-semibold text-white font-[Montserrat] hover:text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          COMPRE AGORA
        </a>
      </main>

      <ConteudoAbordado />

      <TrueFocus
        sentence="FOQUE NO IMPORTANTE"
        manualMode={false}
        blurAmount={5}
        borderColor="cyan"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />

      <p className="read-the-docs mt-6">
        Sem enrolação. Filtramos o que realmente funciona e entregamos o método certo para evoluir no Clash.
      </p>
    </>
  )
}

export default App
