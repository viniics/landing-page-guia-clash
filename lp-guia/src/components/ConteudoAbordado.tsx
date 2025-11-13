import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import HandymanIcon from '@mui/icons-material/Handyman';
import GamepadIcon from '@mui/icons-material/Gamepad';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ExtensionIcon from '@mui/icons-material/Extension';

export default function ConteudoAbordado() {
  const conteudos = [
    {
      titulo: "Estratégias Avançadas",
      descricao: "Como evoluir suas cartas de uma forma mais rápida e eficiente.",
      icon: <ExtensionIcon className="text-green-400 mr-2" />,
    },
    {
      titulo: "Criação de Decks",
      descricao: "Monte decks equilibrados sem abandonar as cartas que você mais gosta.",
      icon: <HandymanIcon className="text-green-400 mr-2" />,
    },
    {
      titulo: "Leitura de Partidas",
      descricao: "Técnicas de ataque e defesa para cada tipo de deck do jogo.",
      icon: <GamepadIcon className="text-green-400 mr-2" />,
    },
    {
      titulo: "Evolução Constante",
      descricao: "Dicas práticas para subir troféus rápido sem travar em arenas.",
      icon: <KeyboardDoubleArrowUpIcon className="text-green-400 mr-2" />,
    },
    {
      titulo: "Mecânicas Dentro da Partida",
      descricao: "Obtenha vantagens com o controle de elixir e posicionamento avançado.",
      icon: <LocalFireDepartmentIcon className="text-green-400 mr-2" />,
    },
    {
      titulo: "Controle sua mente",
      descricao: "Mentalidade e constância para alcançar os 10.000 troféus.",
      icon: <PsychologyIcon className="text-green-400 mr-2" />,
    },
  ];

  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 bg-gradient-to-b from-blue-900 to-blue-800 text-white py-16 mt-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 font-[Montserrat]">
          CONTEÚDO ABORDADO
        </h2>

        <div className="inline-grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {conteudos.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-blue-700/40 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
            >
              <h3 className="flex items-center justify-center text-xl font-[Montserrat] mb-3 text-cyan-400">
                {item.icon}
                {item.titulo}
              </h3>
              <p className="text-gray-200">{item.descricao}</p>
            </div>
          ))}
        </div>

        <p className="text-center mt-8">
          Tudo isso sem precisar mudar seu deck ou investir 1 centavo no jogo.
        </p>
      </div>
    </section>
  );
}
