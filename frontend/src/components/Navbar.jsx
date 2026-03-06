function Navbar() {
  return (
    <nav className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-4">
        <h1 className="text-xl font-semibold tracking-wide text-orange-500">
          LOGO
        </h1>

        <ul className="flex items-center gap-8 text-sm text-gray-700">
          <li className="cursor-pointer hover:text-orange-500">Home</li>
          <li className="cursor-pointer hover:text-orange-500">
            Rooms & Amenities
          </li>
          <li className="cursor-pointer hover:text-orange-500">Gallery</li>
          <li className="cursor-pointer hover:text-orange-500">Blog</li>
          <li className="cursor-pointer hover:text-orange-500">About</li>
        </ul>

        <button className="rounded-md bg-orange-500 px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-600">
          Booking
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
