"use client";

import CharacterCard from "../../components/characterCard";
import MainLoader from "../../components/loader/main-loader";
import { useAllCharacter } from "../../features/characters/query";
import PublicLayout from "../../layouts/PublicLayout";

export default function HomePage() {
  const { data, error, isLoading } = useAllCharacter();

  return (
    <>
      <PublicLayout />
      <div className="p-12 mt-16">
        {isLoading && <MainLoader />}
        {data && data.results && (
          <div className="grid grid-cols-3 gap-2">
            {data.results.map((item) => (
              <CharacterCard
                key={item.id}
                character={item}
                isMoreDetails={true}
              />
            ))}
          </div>
        )}
        {error && (
          <>
            <h1 className="text-red-400 font-semibold">Error!!</h1>
            <p className="text-black font-semibold text-xl">
              Please try again.
            </p>
          </>
        )}
      </div>
    </>
  );
}
