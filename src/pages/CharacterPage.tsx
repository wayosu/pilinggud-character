import { useState } from "react";
import { motion } from "framer-motion";
import Character from "../components/Character"
import CharacterDetail from "../components/CharacterDetail"
import { Link } from "react-router-dom";

interface CharacterProps {
  id: number;
  backgroundStory: string;
  name: string;
  avatar: string;
  avatarPng: string;
  quote: string;
  color: string;
  position: string;
  stats: {
    speed: number;
    passing: number;
    dribbling: number;
    shooting: number;
    defense: number;
    stamina: number;
  };
  uniqueSkill: string;
  uniqueSkillDescription: string;
  pasifSkill: string;
  pasifSkillDescription: string;
  strengths: string[];
  weaknesses: string[];
}

function CharacterPage() {
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterProps | null>(null);
  return (
    <div className="p-4 lg:p-12 mx-auto min-h-[100vh] flex flex-col lg:flex-row gap-4 w-full xl:w-[90vw] 2xl:w-[60vw]">
      <motion.div className="lg:w-1/2 flex flex-col justify-between p-6 text-center bg-black/30 shadow-xl rounded-2xl backdrop-blur-md" initial={{ opacity: 0, backdropFilter: "blur(0px)" }} animate={{ opacity: 1, backdropFilter: "blur(10px)" }} transition={{ duration: 0.8 }}>
        <Character
          onCharacterSelect={(character: CharacterProps) => setSelectedCharacter(character)}
          selectedCharacterId={selectedCharacter?.id ?? null}
        />
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

