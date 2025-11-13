import TiltedCard from "./TiltedCard";
import fdb1 from "../assets/depoimentos/1.png"
import fdb2 from "../assets/depoimentos/2.png"
import fdb3 from "../assets/depoimentos/2.png"

export default function FeedbackSection() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 bg-gradient-to-b from-blue-900 to-blue-800 text-white py-16 mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-[Montserrat]">
          DEPOIMENTOS DE QUEM TESTOU
        </h2>

        <p className="text-gray-300 mb-12 text-lg">
          Dezenas de jogadores já transformaram suas partidas com o nosso guia — confira depoimentos reais do nosso Instagram.
        </p>

        <div
          className="
            flex flex-col items-center justify-center gap-10
            sm:grid sm:grid-cols-2 sm:gap-8
            md:grid-cols-3
          "
        >
          <TiltedCard
            imageSrc={fdb1}
            altText="Feedback 2"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={2}
            scaleOnHover={1.05}

            showTooltip={false}
          />

          <TiltedCard
            imageSrc={fdb2}
            altText="Feedback 2"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={2}
            scaleOnHover={1.05}

            showTooltip={false}
          />

          <TiltedCard
            imageSrc={fdb3}
            altText="Feedback 3"
            captionText=""
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={2}
            scaleOnHover={1.05}
            showTooltip={false}
          />
        </div>
        <a
          href="https://pay.hotmart.com/N102765722H"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-12 px-10 py-3 text-lg font-semibold text-white font-[Montserrat] 
                     bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 
                     rounded-full shadow-lg hover:scale-105 hover:shadow-xl 
                     hover:from-cyan-400 hover:via-blue-400 hover:to-indigo-500 hover:text-white
                     transition-all duration-300"
        >JUNTE-SE AOS VENCEDORES
        </a>
      </div>
    </section>
  );
}
