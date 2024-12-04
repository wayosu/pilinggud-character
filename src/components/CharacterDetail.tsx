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
  character: CharacterProps | null;
}

const CharacterDetail: React.FC<Props> = ({ character }) => {
  if (!character) {
    return (
      <div className="w-full flex flex-col gap-1 justify-center items-center h-full">
        <h1 className="text-4xl font-bold text-yellow-300">Character not found</h1>
        <p>Please select a character</p>
      </div>
    );
  }

  return (
    <motion.div key={character.id} className="w-full" initial={{ opacity: 0}} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.6 }}>
      <div className="flex flex-col lg:flex-row items-start gap-6">
        <div className="w-full lg:w-2/3">
          <h1 className="text-4xl font-bold text-white mb-1 lg:hidden">{character.name}</h1>
          <p className="text-sm mb-2 lg:hidden">{character.position}</p>
          <div className="flex justify-center lg:justify-start -mt-5 lg:-mt-7">
            <img
              src={character.avatarPng}
              alt={character.name}
              className="max-w-[200px] h-full rounded-lg mb-4"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-xl font-bold text-yellow-300 mb-1">Statistics</h2>
              <ul>
                {Object.entries(character.stats).map(([key, value]) => (
                  <li key={key} className="text-sm">
                    {key}: {value}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-yellow-300 mb-1">Skills</h2>
              <p className="text-sm">
                <strong>Unique Skill:</strong> {character.uniqueSkill}
              </p>
              <p className="text-sm mb-2">{character.uniqueSkillDescription}</p>
              <p className="text-sm">
                <strong>Passive Skill:</strong> {character.pasifSkill}
              </p>
              <p className="text-sm">{character.pasifSkillDescription}</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-4xl font-bold text-white mb-1 hidden lg:block">{character.name}</h1>
          <p className="text-sm mb-2 hidden lg:block">{character.position}</p>
          <blockquote className="italic text-yellow-300 mb-4">{character.quote}</blockquote>
          <p className="text-sm text-justify mb-4">{character.backgroundStory}</p>
          <div className="mb-4">
            <h2 className="text-xl font-bold text-yellow-300 mb-1">Strengths</h2>
            <ul className="list-disc pl-4">
              {character.strengths.map((strength, index) => (
                <li key={index} className="text-sm">
                  {strength}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-yellow-300 mb-1">Weaknesses</h2>
            <ul className="list-disc pl-4">
              {character.weaknesses.map((weekness, index) => (
                <li key={index} className="text-sm">
                  {weekness}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CharacterDetail;
