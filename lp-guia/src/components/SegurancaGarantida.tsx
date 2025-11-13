import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PaidIcon from '@mui/icons-material/Paid';
import LockIcon from '@mui/icons-material/Lock';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export default function SegurancaGarantida() {
  const garantias = [
    {
      titulo: "Plataforma Segura",
      descricao:
        "Todas as transações são processadas pela Hotmart, a maior plataforma de vendas digitais do mundo.",
      icon: <HealthAndSafetyIcon className="text-green-400 mr-2" />,
    },
    {
      titulo: "Reembolso Garantido",
      descricao:
        "Se você não ficar satisfeito por qualquer motivo, pode pedir reembolso em até 7 dias sem burocracia.",
        icon: <PaidIcon className="text-green-400 mr-2"/>
    },
    {
      titulo: "Proteção de Dados",
      descricao:
        "Suas informações estão seguras e nunca serão compartilhadas com terceiros.",
        icon:<LockIcon className="text-green-400 mr-2"/>
    },
    {
      titulo: "Confiança Total",
      descricao:
        "Não precisamos aprovar nada: a Hotmart garante que sua compra é segura e transparente.",
        icon: <CheckBoxIcon className="text-green-400 mr-2"/>
    },
  ];

  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 bg-gradient-to-b from-blue-900 to-blue-800 text-white py-16 mt-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 font-[Montserrat]">
          SEGURANÇA GARANTIDA
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {garantias.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-blue-700/40 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <h3 className="flex items-center justify-center text-xl font-[Montserrat] mb-3 text-cyan-400">
                {item.icon}
                {item.titulo}
              </h3>
              <p className="text-gray-200">{item.descricao}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-gray-300">
          Tudo isso garante que sua compra do eBook seja totalmente segura e sem riscos.
        </p>

        <a
          href="https://pay.hotmart.com/N102765722H"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-10 py-3 text-lg font-semibold text-white font-[Montserrat] 
                     bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 
                     rounded-full shadow-lg hover:scale-105 hover:shadow-xl 
                     hover:from-cyan-400 hover:via-blue-400 hover:to-indigo-500 hover:text-white
                     transition-all duration-300"
        >
          COMPRE COM SEGURANÇA
        </a>
      </div>
    </section>
  );
}
