import { type NextPage } from "next";

import AOS from 'aos';
import NavBar from "./components/header/NavBar";
import MainHome from "./components/main/Main";
import { useEffect } from "react";
import 'aos/dist/aos.css'
import CompProjetos from "./components/curso/CursoFormacao";
import ProjetoComponente from "./components/projeto/Projeto";


const Home: NextPage = () => {
  useEffect(()=> {
    AOS.init({duration: 1500});
  }, [])
  return (
    <div className='scroll-smooth'>
      <NavBar/>
      <MainHome/>
      <CompProjetos/>
      <ProjetoComponente/>
      </div>
  );
};

export default Home;
