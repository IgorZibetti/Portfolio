import { FaReact } from "react-icons/fa";
import { SiCss3, SiHtml5, SiJavascript, SiPython } from "react-icons/si"
import SobreMin from "./Techs";
import Image from 'next/image';
import { AiFillFilePdf, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

const MainHome = () => {
  return (
    <>
      <Image
        className="-z-50 opacity-20"
        alt="image"
        fill
        src="/background.jpg" />
      <div data-aos="fade-up" className="grid lg:flex justify-around items-center h-[100vh] shadow-2xl
               w-full">
        <div className="flex flex-col">
          <span data-aos="fade-up" className="flex font-normal text-zinc-800 text-xl gap-5 lg:text-xl 2xl:text-5xl">Olá, meu nome é Igor
            <Link target="_blank" href='https://github.com/IgorZibetti' ><motion.div whileHover={{ scale: 1.2}}><AiFillGithub /></motion.div></Link >
            <Link target="_blank" href='https://www.linkedin.com/in/IgorZibetti/' ><motion.div whileHover={{ scale: 1.2}}><AiFillLinkedin /></motion.div></Link >
            <Link target="_blank" href='https://drive.google.com/file/d/1JLjM_bQBd5YTxSLI-baDvy85TF7XsMh0/view?usp=drive_link' ><motion.div whileHover={{ scale: 1.2}}><AiFillFilePdf /></motion.div></Link >
          </span>
          <h1 data-aos="fade-up" className="font-black flex text-xl md:text-1xl 2xl:text-6xl">
            {`<Desenvolvedor Front-End `}
            <p className="font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500">{`React/>`}</p>
          </h1>

          <Link href="/#projetos" scroll={true} className="flex justify-center items-center mt-3 hover:bg-zinc-100 bg-zinc-200 rounded transition shadow-xl hover:shadow-blue-400 p-1 font-black">PROJETOS</Link>
        </div>


      </div>
      <SobreMin />
    </>
  );
}

export default MainHome;