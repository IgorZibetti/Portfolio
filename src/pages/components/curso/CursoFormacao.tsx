import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'

import Image from 'next/image';
import { useState } from 'react';


const CompCurso = () => {
  const [click, setClick] = useState(false)
  const [tera, setTera] = useState(false)
  const [rock, setRock] = useState(false)
  const [udemy, setUdemy] = useState(false)

  const handletera = () => {
    setTera(!tera);
  }
  const handlerock = () => {
    setRock(!rock);
  }

  const handleudemy = () => {
    setUdemy(!udemy);
  }

  const handleClick = () => {
    setClick(!click);
  }


  return (
    <>
      <h2 id='cursos' className="text-2xl mb-24 flex justify-center">
        Cursos e Formção
      </h2>
      <div className="flex justify-center items-center h-[75vh]">
        <Image
          className="mt-[1400px] opacity-80 -z-50"
          alt="image"
          fill
          src="/fundoCurso.jpg"
        />
        <div className='lg:grid grid-cols-2 gap-44'>
          <div className="
            flex 
            items-center 
            md:w-[60vh] sm:h-44
            flex-col 
            bg-zinc-100
            rounded
            shadow-2xl
            mb-5
            "
          >
            <p className="mb-1 font-bold m-2">TERA</p>
            <p className='mb-1 font-black text-red-500'>FULL STACK DEVELOPMENT</p>
            <span>Grade curricular</span>
            {!tera ? <AiFillCaretDown
              className='cursor-pointer'
              onClick={handletera}
            /> : <AiFillCaretUp className='cursor-pointer' onClick={handletera} />}
            {tera && (<> <p className=' font-bold m-2'>HTML, CSS, JavaScript, REACT, Bootstrap, GIT e github, Typescript </p> <p className='font-bold'>MongoDB, SQL, PHP, Python</p> </> )}

          </div>
          <div className="
            flex 
            items-center 
            md:w-[60vh] sm:h-44
            flex-col 
            bg-zinc-100
            rounded
            shadow-2xl
            mb-5
            "
          >
            <p className="mb-1 font-bold m-2">ROCKETSEAT</p>
            <p className='mb-1 font-black text-red-500'>IGNITE</p>
            <span>Grade curricular</span>
            {!rock ? <AiFillCaretDown
              className='cursor-pointer'
              onClick={handlerock}
            /> : <AiFillCaretUp className='cursor-pointer' onClick={handlerock} />}
            {rock && (<p className='m-2 px-2 p-2 font-bold'>Especializacao em React, Node e React Native</p>)}
          </div>
          <div className="
            flex 
            items-center 
            md:w-[60vh] sm:h-44
            flex-col 
            bg-zinc-100
            rounded
            shadow-2xl
            mb-5
            "
          >
            <p className="mb-1 font-bold m-2">UDEMY</p>
            <p className='mb-1 font-black text-red-500'>PYTHON</p>
            <span>Grade curricular</span>
            {!udemy ? <AiFillCaretDown
              className='cursor-pointer'
              onClick={handleudemy}
            /> : <AiFillCaretUp  className='cursor-pointer'onClick={handleudemy} />}
            {udemy && (<p className='m-2 px-2 p-2 font-bold'>HTML, Python, JavaScript, CSS, DJANGO, PostgreSQL</p>)}
          </div>
          <div className="
            flex 
            items-center 
            md:w-[60vh] sm:h-44
            flex-col 
            bg-zinc-100
            rounded
            shadow-2xl
            "
          >
            <p className="mb-1 font-bold m-2">EBAC</p>
            <p className='mb-1 font-black text-red-500'>FULL STACK DEVELOPMENT PYTHON</p>
            <span>Grade curricular</span>


            {!click ? <AiFillCaretDown
              className='cursor-pointer'
              onClick={handleClick}
            /> : <AiFillCaretUp  className='cursor-pointer'onClick={handleClick} />}
            {click && (<p className='m-2 px-2 p-2 font-bold'>HTML, Python, JavaScript, CSS, DJANGO, PostgreSQL</p>)}
          </div>
        </div>
      </div>
    </>

  );
}

export default CompCurso;