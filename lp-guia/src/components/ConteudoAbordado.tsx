export default function ConteudoAbordado() {
  const conteudos = [
    {
      titulo: "✅ Estratégias Avançadas",
      descricao: "Como evoluir suas cartas de uma forma mais rápida e eficiente.",
    },
    {
      titulo: "🏗️ Criação de Decks",
      descricao: "Monte decks equilibrados sem abandonar as cartas que você mais gosta.",
    },
    {
      titulo: "⚔️ Leitura de Partidas",
      descricao: "Técnicas de ataque e defesa para cada tipo de deck do jogo.",
    },
    {
      titulo: "🔥 Evolução Constante",
      descricao: "Dicas práticas para subir troféus rápido sem travar em arenas.",
    },
    {
      titulo: "🏹 Mecânicas Dentro da Partida",
      descricao: "Obtenha vantagens com o controle de elixir e posicionamento avançado.",
    },
    {
      titulo: "🧠 Controle sua mente",
      descricao: "Mentalidade e constância para alcançar os 10.000 troféus.",
    },
  ];

  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 mt-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 font-[Montserrat]">
          CONTEÚDO ABORDADO
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {conteudos.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-700/40 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-[Montserrat] mb-3 text-cyan-400">
                {item.titulo}
              </h3>
              <p className="text-gray-200">{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
      <br></br><br></br><p>Tudo isso sem precisar mudar seu estilo de jogo ou investir 1 centavo no jogo.</p>
    </section>
  );
}
