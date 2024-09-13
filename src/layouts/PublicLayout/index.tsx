import { Link } from "react-router-dom";

export default function PublicLayout() {
  return (
    <main>
      <header className="fixed bg-white top-0 z-50 left-0 right-0 bottom-0 h-[84px] px-8 py-4 border-b  border-[#EAEAEA] shadow-md flex items-center justify-between">
        <Link to="/character">
        <p className="flex items-center gap-4 font-semibold text-red-500 text-2xl" >
          Rick and Morty
        </p>
        </Link>
      </header>
    </main>
  );
}
