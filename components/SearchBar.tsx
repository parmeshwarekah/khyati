export default function SearchBar() {
  return (
    <div className="flex justify-center mt-8">
      <div className="flex w-[600px] bg-white shadow-md rounded-xl overflow-hidden">
        <input
          className="flex-1 px-4 py-3 outline-none"
          placeholder="Search for businesses, institutions, professionals..."
        />
        <button className="bg-teal-500 px-5 text-white">
          QR
        </button>
      </div>
    </div>
  );
}
