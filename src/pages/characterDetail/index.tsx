import { useParams } from "react-router-dom";
import PublicLayout from "../../layouts/PublicLayout";
import { useCharacterById } from "../../features/characters/query";
import CharacterCard from "../../components/characterCard";
import MainLoader from "../../components/loader/main-loader";
import { useState } from "react";
export default function CharacterDetail() {
  const { character_id } = useParams();
  const { data, isLoading } = useCharacterById(Number(character_id));
  const [visibleCount, setVisibleCount] = useState(10);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };
  const handleCloseAll = () => {
    setVisibleCount(10);
  };
  return (
    <>
      <PublicLayout />
      <div className="p-12 mt-12 flex">
        {isLoading && <MainLoader />}
        {data && (
          <>
            <CharacterCard
              character={data}
              key={data.id}
              isMoreDetails={false}
            />
            <div className="pl-10">
              <p className="font-semibold text-black text-2xl">
                Character Episodes
              </p>
              {data.episode.slice(0, visibleCount).map((item, index) => (
                <li key={index}>{item.split("/")[5]}</li>
              ))}
              {visibleCount < data.episode.length && (
                <button onClick={handleShowMore} className="mt-4">
                  Show More
                </button>
              )}
              {visibleCount > 11 && (
                <button onClick={handleCloseAll} className="ml-4">
                  Close All
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
