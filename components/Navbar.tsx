export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white shadow-sm">
      <div className="text-xl font-semibold text-blue-700">
        Khyati <span className="text-sm text-gray-400">(UniRate)</span>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-sm">EN</button>
        <button className="text-sm">Login</button>
        <button className="bg-blue-700 text-white px-4 py-2 rounded-lg">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
