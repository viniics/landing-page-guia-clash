import React from "react"
import BlurText from "./BlurText"
import GradientText from "./GradientText"
import SpotlightCard from "./SpotlightCard"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import ReviewsIcon from "@mui/icons-material/Reviews"
import CachedIcon from "@mui/icons-material/Cached"

interface BonusSectionProps {
  onAnimationComplete?: () => void
}

const BonusSection: React.FC<BonusSectionProps> = ({ onAnimationComplete }) => {
  return (
    <section className="flex flex-col items-center text-center px-6 py-10">
      {/* Título BÔNUS */}
      <div className="flex justify-center">
        <BlurText
          text="BÔNUS"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={onAnimationComplete}
          className="text-9xl mb-8 text-center"
        />
      </div>

      {/* Subtítulo */}
      <GradientText
        colors={["#9640ffff", "#4079ff", "#9640ffff", "#4079ff", "#9640ffff"]}
        animationSpeed={3}
        showBorder={false}
        className="font-[Montserrat] text-2xl font-bold text-center"
      >
        AO ADQUIRIR O EBOOK<br />GANHE TOTALMENTE GRÁTIS
      </GradientText>

      {/* Cards */}
      <div className="flex flex-col items-center space-y-6 mt-6">
        <SpotlightCard
          className="w-full max-w-lg flex flex-col items-center text-center"
          spotlightColor="rgba(64, 121, 255, 1)"
        >
          <WhatsAppIcon className="mb-2" />
          <h3 className="font-[Montserrat] font-bold">ACESSO À COMUNIDADE EXCLUSIVA NO WHATSAPP</h3>
          <p className="text-xs text-center">
            Compartilhe conhecimentos, experiências e dicas do jogo.<br /><br />
            Tire suas dúvidas rapidamente conosco.
          </p>
        </SpotlightCard>

        <SpotlightCard
          className="w-full max-w-lg flex flex-col items-center text-center"
          spotlightColor="rgba(54, 2, 66, 1)"
        >
          <ReviewsIcon className="mb-2" />
          <h3 className="font-[Montserrat] font-bold">ANÁLISE DE PARTIDAS</h3>
          <p className="text-xs text-center">
            Envie sua partida e receba feedback de todas suas jogadas.
          </p>
        </SpotlightCard>

        <SpotlightCard
          className="w-full max-w-lg flex flex-col items-center text-center"
          spotlightColor="rgba(64, 255, 236, 1)"
        >
          <CachedIcon className="mb-2" />
          <h3 className="font-[Montserrat] font-bold">ATUALIZAÇÕES GRATUITAS DO EBOOK</h3>
          <p className="text-xs text-center">
            Pague uma vez, tenha o material atualizado PARA SEMPRE.<br /><br />
            Desfrute de um conteúdo atualizado a cada atualização.
          </p>
        </SpotlightCard>
      </div>
    </section>
  )
}

export default BonusSection
