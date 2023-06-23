import { FaReact } from "react-icons/fa";
import { SiCss3, SiHtml5, SiJavascript, SiPython, SiTailwindcss } from "react-icons/si";



const SobreMin = () => {
  return (
    <>
      <div id="techs"
        data-aos="fade-down"
        className=" mt-[40px] flex justify-center
                items-center">
      </div>
      <h2 className=" flex justify-center  items-center text-2xl">Techs</h2>
      <div className=" md:flex  md:h-[33vh] justify-around gap-2 md:gap-6">

        <div className="
                flex 
                items-center 
                md:w-44 h-44
                flex-col 
                bg-zinc-100
                shadow-inner
                m-2
                shadow-orange-500
                "

        >
          <SiHtml5 data-aos="fade-up" size={45} className="mt-5" />
          <p className="mt-5">HTML</p>
        </div>
        <div className="
                flex
                 flex-col 
                 items-center
                  md:w-44 h-44 
                  bg-zinc-100
                  shadow-inner
                  m-2
                  shadow-blue-500
                  "

        >
          <FaReact data-aos="fade-up" size={45} className="mt-5" />
          <p className="mt-5">REACT</p>
        </div>
        <div className="
                flex 
                items-center
                flex-col 
                md:w-44 h-44 
                bg-zinc-100
                shadow-inner
                m-2
                shadow-yellow-500
                "

        >
          <SiJavascript data-aos="fade-up" size={45} className="mt-5" />
          <p className="mt-5">JAVASCRIPT</p>
        </div>

        <div className="
                flex 
                items-center
                flex-col 
                md:w-44 h-44 
                bg-zinc-100
                shadow-inner
                m-2
                shadow-sky-500
                "

        >
          <SiTailwindcss size={45} className="mt-5" />
          <p className="mt-5">TAILWINDCSS</p>
        </div>

        <div className="
                flex 
                items-center 
                flex-col 
                md:w-44 h-44 
                bg-zinc-100
                shadow-inner
                m-2
                shadow-green-500
                "

        >
          <SiPython data-aos="fade-up" size={45} className="mt-5" />
          <p className="mt-5">PYTHON</p>
        </div>

      </div>

    </>

  );
}

export default SobreMin;