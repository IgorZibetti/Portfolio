import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';


import React, { useState, useEffect, useRef } from 'react';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    content: {
        title: string;
        description: string;
        videoSrc: string;
        link: string;
    } | null;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, onClose]);

    return (
        <>
            {isOpen && content && (
                <>
                <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
                    <div className="2xl:w-[1100px] 2xl:h-[640px] p-2 shadow-2xl" ref={modalRef}>
                        <div className='flex justify-between p-2'>
                            <h1 className='font-black text-2xl'>{content.title}</h1>
                        </div>
                        <div className='fixed justify-center items-center flex flex-col '>
                            <iframe  src={content.videoSrc} width="560" height="315"  allow="autoplay"></iframe>
                            <pre className='bg-zinc-200  text-sm tracking-tight p-4'>{content.description}</pre>
                            <div className='flex justify-around items-center w-full'>
                            <button className='w-full p-2 bg-black text-white hover:bg-sky-700 font-black text-2xl' onClick={onClose}>
                                FECHAR
                            </button>
                            <div className='w-1'></div>
                            <Link target="_blank" href={content.link} className='flex w-full justify-center items-center p-2 bg-black text-white hover:bg-sky-700 font-black text-2xl'>
                                CODIGO
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            )}
        </>
    );
};

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<{ title: string; description: string } | null>(null);

    const openModal = (item: { title: string; description: string }) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const itemList = [
        {
            title: 'Jogo da Memoria',
            img: '/Screenshot_2.png',
            link:'https://github.com/IgorZibetti/Jogo-Da-Memoria',
            videoSrc: 'https://streamable.com/e/uiizo0?autoplay=1',
            description: `
Tecnologias utilizadas:
• React: Biblioteca JavaScript para construção de interfaces de usuário.Foi utilizada para criar os componentes e gerenciar o estado do jogo.
• CSS: Utilizado para estilizar os componentes e fornecer uma aparência visual ao jogo.
• JavaScript: Linguagem de programação usada para implementar a lógica do jogo, como embaralhar as cartas, 
 verificar correspondências e calcular a pontuação.

    Descrição do jogo:
O jogo da memória consiste em um tabuleiro com várias cartas viradas para baixo. O jogador precisa 
 encontrar pares de cartas correspondentes, virando-as uma de cada vez. Se as cartas forem iguais, 
 elas permanecem viradas para cima. Caso contrário, as cartas são viradas de volta. 
O objetivo é encontrar todos os pares com o menor número de tentativas.
`


        },
        {

            title: 'NLW Ignite - ReactJS Rocketseat',
            link: 'https://github.com/IgorZibetti/ignite-react',
            img: '/react-rock.png',
            videoSrc: 'https://streamable.com/e/ztphcb?autoplay=1&controls=1',
            description: ` 
Tecnologias utilizadas:
• React: React é uma biblioteca JavaScript amplamente utilizada para construir interfaces de usuário interativas.
Com sua abordagem baseada em componentes reutilizáveis

• TailwindCSS: TailwindCSS é um framework de CSS altamente configurável e de baixo nível. 
Ele oferece uma abordagem única para a criação de estilos, permitindo aos desenvolvedores construir rapidamente interfaces personalizadas.

• MongoDB: MongoDB é um banco de dados NoSQL orientado a documentos, projetado para armazenar e recuperar dados de forma eficiente. 
No contexto da plataforma de ensino, o MongoDB pode ser usado para armazenar informações relacionadas aos cursos, usuários, vídeos e outros
 recursos disponíveis. 
Sua flexibilidade e escalabilidade tornam o MongoDB uma escolha popular para aplicativos web modernos.

Uma plataforma de ensino é um ambiente virtual projetado para oferecer recursos e ferramentas educacionais aos usuários,
 proporcionando uma experiência de aprendizado interativa e completa.
            `
        },
        {
            title: 'ToDo-List Simples',
            link: 'https://github.com/IgorZibetti/Todo-list-simples',
            img: '/Todo-list-simples.png',
            videoSrc: 'https://streamable.com/e/69um51?controls=1',
            description: `
O ToDo List em React é uma aplicação desenvolvida com o objetivo de permitir aos usuários gerenciar suas tarefas de forma eficiente.
Com a utilização do React, essa aplicação oferece uma experiência interativa e em tempo real, tornando o processo de gerenciamento de tarefas
 mais prático e intuitivo.

Uma das vantagens do React para o desenvolvimento do ToDo List é sua abordagem baseada em componentes reutilizáveis. Com o React,
 é possível criar componentes individuais para diferentes partes da aplicação, como a lista de tarefas, o formulário de adição de tarefas e os
 itens individuais da lista. 
Essa modularidade facilita o desenvolvimento, a manutenção e a escalabilidade da aplicação, permitindo que cada componente seja gerenciado
 de forma isolada.      
            `
        },
    ];
    return (
        <>
        <div id='projetos' className='md:mt-[400px] 2xl:mt-[150px]'>
            <Image
                className="md:mt-[2050px] -z-50 opacity-100"
                alt="image"
                fill
                src="/background.jpg" />
            <h1 className='flex mb-[50px] font-black text-2xl justify-center items-center'>Projetos</h1>
            <div className='md:flex gap-5 grid justify-around items-center mb-[150px]'>

                {itemList.map((item, index) => (

                        
                    <motion.div  whileHover={{ scale: 1.2 }} key={item.title} className='relative cursor-pointer' onClick={() => openModal(item)}>
                        <Image
                            width={450} height={350}
                            className='h-[350px] shadow-lg  shadow-emerald-500 transition-opacity duration-300'
                            src={item.img} alt="" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                            <h2 className="text-white text-xl font-bold">{item.title}</h2>
                        </div>
                    </motion.div>
                    
                    


                ))}
                <Modal isOpen={isModalOpen} onClose={closeModal} content={null}  />
            </div>
                </div>
        </>
    );
};

export default App;
