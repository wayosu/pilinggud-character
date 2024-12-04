import React from "react";
import dataCharacter from "../data/character-information.json";
import { motion } from "framer-motion";

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

interface Props {
  onCharacterSelect: (character: CharacterProps) => void;
  selectedCharacterId: number | null;
}

const Character: React.FC<Props> = ({ onCharacterSelect, selectedCharacterId }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold text-yellow-300 border-b-4 border-yellow-300 pb-4 uppercase tracking-wide">
        Characters
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {dataCharacter.map((character: CharacterProps) => {
          const isActive = character.id === selectedCharacterId;
          return (
            <motion.div
              key={character.id}
              onClick={() => onCharacterSelect(character)}
              className={`group relative rounded-2xl overflow-hidden bg-gradient-to-b 
                ${isActive ? "from-yellow-400 to-yellow-600 border-yellow-500" : "from-black to-gray-900 border-gray-700"}
                border-4 shadow-2xl cursor-pointer transition-transform duration-500`}
              whileHover={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <motion.img
                src={character.avatar}
                alt={character.name}
                className={`w-full h-auto object-cover transition-transform duration-500 
                  ${isActive ? "scale-100" : "scale-110"} group-hover:scale-100`}
              />
              <div className={`absolute inset-0 bg-gradient-to-b ${isActive ? "from-yellow-300/40 to-yellow-500/80 opacity-100" : "from-black/40 to-black/80"} 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                <h2 className="text-sm font-bold text-white">{character.name}</h2>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  );
};

export default Character;
