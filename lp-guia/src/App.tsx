import './App.css'
import TrueFocus from './components/TrueFocus'
import TopMarquee from './components/TopMarquee'
import BlurText from './components/BlurText'
import capaImg from './assets/CAPA MEGA VS PEKKA.png'
import ConteudoAbordado from './components/ConteudoAbordado'
import RotatingText from './components/RotatingText'
import kings from './assets/unnamed.webp'
import SegurancaGarantida from './components/SegurancaGarantida'
import GlitchText from './components/GlitchText'
import GradientText from './components/GradientText'
import SpotlightCard from './components/SpotlightCard'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ReviewsIcon from '@mui/icons-material/Reviews';
import CachedIcon from '@mui/icons-material/Cached';

function App() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!')
  }

  return (
    <>
      <TopMarquee />

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
      </main>

      <ConteudoAbordado />
      <br></br><br></br><br></br><br></br><br></br>
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
      <SegurancaGarantida></SegurancaGarantida>
      <br></br>


      <div className="flex justify-center">
        <BlurText
          text="BÔNUS"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-9xl mb-8 text-center"
        />
      </div>

      <GradientText
        colors={["#9640ffff", "#4079ff", "#9640ffff", "#4079ff", "#9640ffff"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class font-[Montserrat] text-2xl font-bold text-center"
      >
        AO ADQUIRIR O EBOOK<br />GANHE TOTALMENTE GRÁTIS
      </GradientText>

      <div className="flex flex-col items-center space-y-6 mt-6">
        <SpotlightCard className="w-full max-w-lg custom-spotlight-card flex flex-col items-center text-center" spotlightColor='rgba(64, 121, 255, 1)'>
          <WhatsAppIcon className="mb-2" />
          <h3 className="font-[Montserrat] font-bold text-center">ACESSO À COMUNIDADE EXCLUSIVA NO WHATSAPP</h3>
          <p className="text-xs text-center">
            Compartilhe conhecimentos, experiências e dicas do jogo.<br /><br></br>
            Tire suas dúvidas rapidamente conosco.
          </p>
        </SpotlightCard>

        <SpotlightCard className="w-full max-w-lg custom-spotlight-card flex flex-col items-center text-center" spotlightColor='rgba(54, 2, 66, 1)'>
          <ReviewsIcon className="mb-2" />
          <h3 className="font-[Montserrat] font-bold text-center">ANÁLISE DE PARTIDAS</h3>
          <p className="text-xs text-center">Envie sua partida e receba feedback de todas suas jogadas.</p>
        </SpotlightCard>

        <SpotlightCard className="w-full max-w-lg custom-spotlight-card flex flex-col items-center text-center" spotlightColor='rgba(64, 255, 236, 1)'>
          <CachedIcon className="mb-2" />
          <h3 className="font-[Montserrat] font-bold text-center">ATUALIZAÇÕES GRATUITAS DO EBOOK</h3>
          <p className="text-xs text-center">
            Pague uma vez, tenha o material atualizado PARA SEMPRE.<br /><br></br>
            Desfrute de um conteúdo atualizado a cada atualização.
          </p>
        </SpotlightCard>
      </div>

      <SegurancaGarantida></SegurancaGarantida>
      <br></br><br></br><br></br>
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
      <p className='text-grey'>Economize anos de conhecimento pagando apenas </p>
      <GlitchText
        speed={3}
        enableShadows={true}
        enableOnHover={true}
        className='custom-class'
      >R$ 17.99
      </GlitchText>
      <p className="read-the-docs mt-6">
        Parcelado em 2x.
      </p>
    </>
  )
}

export default App
