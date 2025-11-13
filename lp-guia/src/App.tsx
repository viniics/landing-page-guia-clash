import './App.css'
import TopMarquee from './components/TopMarquee'
import BlurText from './components/BlurText'
import capaImg from './assets/CAPA MEGA VS PEKKA.png'
import ConteudoAbordado from './components/ConteudoAbordado'
import RotatingText from './components/RotatingText'
import kings from './assets/unnamed.webp'
import SegurancaGarantida from './components/SegurancaGarantida'
import FeedbackSection from './components/FeedbackSection'
import Footer from './components/Footer'
import BonusSection from './components/BonusSection'
import PerguntasFrequentes from './components/PerguntasFrequentes'
import FinalSection from './components/FinalSection'
import { Analytics } from '@vercel/analytics/react';

function App() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!')
  }

  return (
    <>
      <TopMarquee />
      <Analytics/>
      <main className="flex flex-col items-center text-center px-6 py-10">
        <div className='flex justify-center scale-90'>
          <BlurText
            text={"GUIA "}
            delay={25}
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-4xl"
          />
          <BlurText
            text={"DO "}
            delay={250}
            direction="bottom"
            onAnimationComplete={handleAnimationComplete}
            className="text-4xl"
          />
          <BlurText
            text={"CLASH"}
            delay={350}
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-4xl"
          />
        </div>


        <br></br>
        <img
          src={capaImg}
          alt="Capa Mega vs Pekka"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-lg mb-6"
        />
        <p className="text-base mb-4">
          Estratégias comprovadas para avançar no Clash Royale sem investir nada no jogo.<br /><br></br>
          Melhore suas habilidades e aprenda a criar decks próprios que irão te levar para a arena máxima.
        </p>
        <div className="flex justify-center mt-8">
          <a
            href="https://pay.hotmart.com/N102765722H"
            target="_blank"
            className="px-12 py-4 text-lg font-extrabold font-[Montserrat] text-white 
               rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-700 to-blue-600
               shadow-[0_0_20px_rgba(147,51,234,0.6)]
               hover:scale-110 hover:text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]
               transition-all duration-300 ease-out tracking-wide"
          >COMPRE AQUI
          </a>
        </div>
      </main>

      <ConteudoAbordado />
      <br></br><br></br>
      <RotatingText
        texts={['NOSSA', 'EQUIPE']}
        mainClassName="flex justify-center overflow-hidden rounded-lg px-2 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-2 font-[Montserrat] text-5xl font-bold text-white" staggerFrom={"last"}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
      />

      <br></br>
      <br></br>
      <div className="flex justify-center">
        <img
          src={kings}
          alt="Reis do Clash Royale"
          className="w-1/4 sm:max-w-sm md:max-w-md rounded-2xl shadow-lg mb-6 mx-auto"
        />
      </div>
      <p className="read-the-docs mt-6 text-white">Não somos teóricos. Somos 2 jogadores veteranos com mais de 9 anos de experiência cada. Desde 2016, estamos competindo e figurando no topo do ranking global.<br></br><br></br>
        Este eBook foi criado para ser um manual de FATOS, não de opiniões. Para garantir isso, cada estratégia, cada tática de posicionamento e cada dica de elixir que você vai ler foi rigorosamente testada, debatida e aprovada por nós dois.<br></br><br></br>
        O que ensinamos aqui não é SORTE. É o MÉTODO exato que usamos para dominar o jogo.</p>
      <br></br>
      <SegurancaGarantida />
      <BonusSection />
      <FeedbackSection />
      <br></br>
      <FinalSection />
      <div className="w-full border-t border-white/20 my-16" />
      <PerguntasFrequentes />
      <Footer></Footer>
    </>

  )
}

export default App
