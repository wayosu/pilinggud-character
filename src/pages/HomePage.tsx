import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="p-4 lg:p-12 mx-auto min-h-[100vh] w-full flex justify-center xl:w-[30vw]">
      <div className="w-full flex flex-col gap-4 my-auto">
        <motion.div className="px-4 bg-black/30 shadow-xl rounded-2xl backdrop-blur-md" initial={{ opacity: 0, backdropFilter: "blur(0px)" }} animate={{ opacity: 1, backdropFilter: "blur(10px)" }} transition={{ duration: 0.8 }}>
          <img 
            src="/all-char.png" 
            alt="all characters"
            className="w-full"
          />
        </motion.div>

        <motion.div className="p-4 text-center bg-black/30 shadow-xl rounded-2xl backdrop-blur-md" initial={{ opacity: 0, backdropFilter: "blur(0px)" }} animate={{ opacity: 1, backdropFilter: "blur(10px)" }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl font-bold text-yellow-300 mb-1">Pitchi no Nendaiki</h1>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic consequuntur atque repellat sequi ratione molestias laborum esse enim voluptatem vero veniam dolore obcaecati, expedita reiciendis.</p>
          <div className="flex flex-col justify-center">
            <Link to={"/characters"}>
              <button className="w-full mt-4 bg-yellow-300 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded duration-300 transition-all">All Characters</button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HomePage

