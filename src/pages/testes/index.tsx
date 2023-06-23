import { motion } from "framer-motion";

const Testes = () => {
    return ( 
        <div className=" flex justify-center items-center h-screen">
            <motion.div
            className="w-[200px] h-[200px] bg-blue-500"
           whileHover={{ scale: 1.3 }}
            
            />
        </div>
     );
}
 
export default Testes;