import { useState } from "react";
import { motion } from "framer-motion";
import Character from "../components/Character"
import CharacterDetail from "../components/CharacterDetail"
import { Link } from "react-router-dom";

function CharacterPage() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  return (
    <div className="p-4 lg:p-12 mx-auto min-h-[100vh] flex flex-col lg:flex-row gap-4 w-full xl:w-[90vw] 2xl:w-[60vw]">
      <motion.div className="lg:w-1/2 flex flex-col justify-between p-6 text-center bg-black/30 shadow-xl rounded-2xl backdrop-blur-md" initial={{ opacity: 0, backdropFilter: "blur(0px)" }} animate={{ opacity: 1, backdropFilter: "blur(10px)" }} transition={{ duration: 0.8 }}>
        <Character onCharacterSelect={setSelectedCharacter} selectedCharacterId={selectedCharacter?.id} />
        <Link to={"/"}>
          <button className="w-full mt-4 bg-yellow-300 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded duration-300 transition-all">Back to Home</button>
        </Link>
      </motion.div>

      <motion.div className="lg:w-full p-6 bg-black/30 shadow-xl rounded-2xl backdrop-blur-md" initial={{ opacity: 0, backdropFilter: "blur(0px)" }} animate={{ opacity: 1, backdropFilter: "blur(10px)" }} transition={{ duration: 0.8 }}>
        <CharacterDetail character={selectedCharacter} />
      </motion.div>
    </div>
  )
}

export default CharacterPage

