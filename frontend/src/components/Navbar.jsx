import { useState, useEffect } from "react";
import logo from '../assets/agilelogo.png';
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // Dark mode toggle
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-10 h-10" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Courses</li>
          <li className="hover:text-blue-600 cursor-pointer">Free Courses</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="bg-blue-500 text-white px-3 py-1 rounded-lg"
          >
            {dark ? "Light" : "Dark"}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-3 text-center">
          <p>Home</p>
          <p>Courses</p>
          <p>Free Courses</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      )}
    </nav>
  )
}

export default Navbar
