import { motion } from "framer-motion"
import { fadeIn } from "./variants"

const Players = ( { name, team, nationality, jerseyNumber, age, imageUrl } ) => {
return (
    <div className="card flex justify-center items-center w-[33.3%] gap-5 bg-base-100 shadow-xl">
            <motion.img 
            variants={fadeIn('down', 0.7)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount:0.7}}
            src={imageUrl} alt="players" className="w-[300px] h-[300px] rounded-full cursor-pointer"/>
        <div 
        className="card-body items-center cursor-pointer">
            <motion.h2 
            variants={fadeIn('left', 0.7)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount:0.7}}
            className="card-title uppercase font-bold text-2xl text-fuchsia-700"><span className="text-blue-700">Name:</span> {name}
            </motion.h2>

            <motion.p 
            variants={fadeIn('right', 0.6)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount:0.7}}
            className="uppercase font-bold text-2xl text-fuchsia-600"><span className="text-blue-600">Team:</span> {team}
            </motion.p>

            <motion.p 
            variants={fadeIn('left', 0.5)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount:0.7}}
            className="uppercase font-bold text-2xl text-fuchsia-500"><span className="text-blue-500">Nationality: </span>  {nationality}
            </motion.p>

            <motion.p 
            variants={fadeIn('right', 0.4)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount:0.7}}
            className="uppercase font-bold text-2xl text-fuchsia-400"><span className="text-blue-400">Jerser Number: </span> {jerseyNumber}
            </motion.p>

            <motion.p 
            variants={fadeIn('left', 0.3)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount:0.7}}
            className="uppercase font-bold text-2xl text-fuchsia-300"><span className="text-blue-300"> Age: {age} </span>
            </motion.p>
        </div>
    </div>
  )
}

export default Players