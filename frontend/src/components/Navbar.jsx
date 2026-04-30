import { useState, useEffect } from "react";
import logo from '../assets/FOOTERLOGO.png';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link } from "react-router-dom";
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
    <nav className="nav-wrapper gradient-nav">
      <div className="container">
        <div className="nav-content" style={{ padding: '3px 1.5rem', height: '80px', position: 'relative' }}>
          {/* Logo */}
          <div style={{ position: 'relative', width: '150px', height: '100%' }}>
            <img src={logo} alt="AgileInfoTech Logo" className="logo" style={{ height: '110px', width: 'auto', objectFit: 'contain', position: 'absolute', top: '-14px', left: '-10px', zIndex: 100 }} />
          </div>

          {/* Right Section Wrapper */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginLeft: 'auto' }}>

            {/* Desktop Menu */}
            <ul className="nav-links" style={{ listStyle: 'none', margin: 0, padding: 0, alignItems: 'center', gap: '0.75rem' }}>
              <Link to="/"><li><span className="nav-pill">Home</span></li></Link>
              <Link to="/about"><li><span className="nav-pill">About</span></li></Link>
              <Link to="/services"><li><span className="nav-pill">Services</span></li></Link>
              <Link to="/portfolio"><li><span className="nav-pill">Portfolio</span></li></Link>
              <Link to="/career"><li><span className="nav-pill">Career</span></li></Link>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginLeft: '0.75rem' }}>
                <Link to="/contact"><span className="nav-pill">Contact</span></Link>
                {/* Dark Mode Toggle - Desktop */}
                <button
                  onClick={() => setDark(!dark)}
                  className="btn-icon"
                  aria-label="Toggle Dark Mode"
                >
                  {dark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </li>
            </ul>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>


              {/* Mobile Menu Button - Only visible on mobile */}
              <button
                className="mobile-menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/services" className="nav-link" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/portfolio" className="nav-link" onClick={() => setMenuOpen(false)}>Portfolio</Link>
        <Link to="/career" className="nav-link" onClick={() => setMenuOpen(false)}>Career</Link>
        <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
        <div style={{ marginTop: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
          <button onClick={() => setDark(!dark)} className="btn-icon" aria-label="Toggle Dark Mode" style={{ width: '100%', justifyContent: 'center', gap: '0.5rem', padding: '0.75rem' }}>
            {dark ? <Sun size={20} /> : <Moon size={20} />}
            <span>{dark ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
