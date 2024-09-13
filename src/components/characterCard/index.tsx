import { Link } from "react-router-dom";
import { ICharacterCard } from "./type";
import classNames from "classnames";
import { FC } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const CharacterCard: FC<ICharacterCard> = (props) => {
  const { character, isMoreDetails } = props;

  return (
    <div className="border shadow-md w-[377px] h-full">
      <img
        className="rounded-none"
        width={377}
        height={272}
        src={character.image}
        alt={character.name}
      />
      <div className="p-4">
        <p className="font-medium text-[#F22225]">{character.name}</p>
        <div className="flex items-center gap-4 pt-4">
          <Link
            className="bg-[#EAEAEA] text-gray-500 text-[10px] rounded-md px-2.5 py-[5px] transition hover:bg-[#F48023] hover:text-white"
            to="/"
          >
            {character.origin.name}
          </Link>
          <Link
            className="bg-[#EAEAEA] text-gray-400 text-[10px] rounded-md px-2.5 py-[5px] transition hover:bg-[#F48023] hover:text-white"
            to="/"
          >
            {character.location.name}
          </Link>
          <span
            className={classNames(
              "text-white text-[10px] rounded-md px-2.5 py-[5px] transition",
              {
                "bg-blue-500": character.gender == "Male",
                "bg-pink-500": character.gender == "Female",
              }
            )}
          >
            {character.gender}
          </span>
        </div>
        <p className="text-[#757B82] pt-2">{character.type}</p>
      </div>
      {isMoreDetails && (
        <Link
          to={`/character/${character.id}`}
          className="p-4 font-medium text-[#F22225] flex justify-center items-center bottom-0"
        >
          Show More Details <IoIosArrowRoundForward size={20} />
        </Link>
      )}
    </div>
  );
};

export default CharacterCard;
