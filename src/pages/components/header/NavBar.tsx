import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaReact } from 'react-icons/fa'



const NavBar = () => {
  return (
    <div className='flex justify-between shadow-lg items-center p-7 border-b-[1px]'>

      <div >
        <span className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-pink-600'>Igor.dev</span>
      </div>

      <div className='hidden lg:flex'>
        <ul className='flex gap-5 text-black font-black'>
          <motion.li whileHover={{scale: 1.1}}>
            <Link href="/">Home</Link>
          </motion.li>
          <motion.li whileHover={{scale: 1.1}}>
            <Link className=' ' href="/#techs" scroll={true}>Techs</Link>
          </motion.li>
          <motion.li whileHover={{scale: 1.1}}>
            <Link className='r' href="/#cursos">Formação</Link>
          </motion.li>
          <motion.li whileHover={{scale: 1.1}}>
            <Link className=' ' href="/#projetos" scroll={true}>Projetos</Link>
          </motion.li>
        </ul>
      </div>
    </div>);
}

export default NavBar;