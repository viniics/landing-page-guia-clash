import GlitchText from "./GlitchText";
import TrueFocus from "./TrueFocus";


export default function FinalSection() {
  return (
    <>
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
      <br></br>
      <p className="text-grey">
        Economize seu tempo!
        <br></br>
        O que um jogador normal aprende em anos, você aprenderá em dias —
        <br></br>
        por um preço extremamente acessível.
      </p>

      <GlitchText
        speed={3}
        enableShadows={true}
        enableOnHover={true}
        className="custom-class"
      >
        R$ 17.99
      </GlitchText>

      <p className="read-the-docs mt-6">Parcelado em 2x.</p>

      <div className="mt-10 flex justify-center">
        <a
          href="https://pay.hotmart.com/N102765722H"
          target="_blank"
          className="px-10 py-4 text-lg font-bold text-white rounded-full 
               bg-gradient-to-r hover:text-white from-cyan-500 via-blue-500 to-indigo-600
               shadow-lg shadow-indigo-900/40 hover:scale-105 
               hover:shadow-indigo-800/60 transition-all duration-300
               font-[Montserrat]"
        >
          EU QUERO
        </a>
      </div>
    </>
  );
}
