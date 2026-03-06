import { NavLink } from "react-router-dom";

const navLinkBase =
  "cursor-pointer hover:text-orange-500 transition-colors";
const navLinkActive = "text-orange-600 font-semibold";

function Navbar() {
  return (
    <nav className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-4">
        <NavLink
          to="/"
          className="text-xl font-semibold tracking-wide text-orange-500"
        >
          LOGO
        </NavLink>

        <ul className="flex items-center gap-8 text-sm text-gray-700">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? navLinkActive : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rooms"
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? navLinkActive : ""}`
              }
            >
              Rooms & Amenities
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? navLinkActive : ""}`
              }
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? navLinkActive : ""}`
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? navLinkActive : ""}`
              }
            >
              About
            </NavLink>
          </li>
        </ul>

        <button className="rounded-md bg-orange-500 px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-600">
          Booking
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
