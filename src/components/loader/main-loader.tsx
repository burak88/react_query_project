export default function MainLoader() {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full absolute bg-white bg-opacity-80 z-50">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      <p className="text-xl mt-4">Please Wait...</p>
    </div>
  );
}
