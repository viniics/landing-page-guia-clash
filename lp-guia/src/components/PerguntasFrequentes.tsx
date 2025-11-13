import { CreditCardRefresh, File05, Heart, } from "@untitledui/icons";

export const PerguntasFrequentes = () => {
    const faqs = [
        {
            question: "Como funciona o 'Prazo de Garantia'?",
            answer:
                "A Hotmart garante 7 dias para pedir reembolso do produto, instantâneo e seguro.",
            icon: CreditCardRefresh,
        },
        {
            question: "Como acessar o produto?",
            answer: `Você receberá o acesso por e-mail.\nFaça login na sua conta Hotmart`,
            icon: File05,
        },
        {
            question: "Como faço para comprar?",
            answer:
                "Clique no botão “Comprar agora”.\nVocê será redirecionado para uma tela da Hotmart,a plataforma de vendas mais segura do mundo.",
            icon: Heart,
        },
    ];

    return (
        <section className="py-16 md:py-24 font-[Montserrat]">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h1 className="text-display-sm font-semibold text-white md:text-display-md">
                        Perguntas Frequentes
                    </h1>
                </div>

                <div className="mt-12 md:mt-16">
                    <dl className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                        {faqs.map((item) => (
                            <div key={item.question}>
                                <div className="flex max-w-sm flex-col items-center text-center">
                                    <item.icon className="text-purple-400 w-10 h-10 md:w-12 md:h-12" />

                                    <dt className="mt-4 text-lg font-semibold text-blue-700">
                                        {item.question}
                                    </dt>
                                    <dd className="mt-1 text-md text-tertiary whitespace-pre-line">
                                        {item.answer}
                                    </dd>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
            <p className="mt-3 text-xs md:text-sm text-tertiary">
                Caso tenha outras dúvidas, entre em contato no nosso{" "}
                <a
                    href="https://www.instagram.com/guiadoclashroyale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors duration-200"
                >
                    Instagram
                </a>
                .
            </p>
            
        </section>
    );
};
export default PerguntasFrequentes;