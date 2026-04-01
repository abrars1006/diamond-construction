import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (d) =>
    d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

  return (
    <>
      {/* Internet Explorer 5/6 style toolbar */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          fontFamily: '"Tahoma", "Arial", sans-serif',
        }}
      >
        {/* Title Bar */}
        <div className="win-titlebar" style={{ fontSize: '11px', padding: '3px 6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {/* Diamond icon (pixel-style) */}
            <span style={{ fontSize: '12px' }}>♦</span>
            Diamond Construction — Microsoft Internet Explorer
          </div>
          <div style={{ display: 'flex', gap: '2px' }}>
            <span className="win-titlebar-btn">_</span>
            <span className="win-titlebar-btn">□</span>
            <span className="win-titlebar-btn" style={{ fontWeight: 'bold', color: '#c00000' }}>✕</span>
          </div>
        </div>

        {/* Menu bar */}
        <div className="win-menubar">
          {['File', 'Edit', 'View', 'Favorites', 'Tools', 'Help'].map((m) => (
            <a key={m} href="#" className="win-menuitem" onClick={(e) => e.preventDefault()}>
              {m}
            </a>
          ))}
        </div>

        {/* Toolbar row */}
        <div
          style={{
            background: '#d4d0c8',
            borderBottom: '1px solid #808080',
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          {/* Nav buttons */}
          {['◄ Back', '► Fwd', '✕ Stop', '↺ Refresh', '⌂ Home'].map((btn) => (
            <button
              key={btn}
              className="win-btn"
              style={{ padding: '2px 8px', minWidth: 'auto', fontSize: '11px' }}
            >
              {btn}
            </button>
          ))}
          <div
            style={{
              width: '1px',
              height: '22px',
              borderLeft: '1px solid #808080',
              borderRight: '1px solid #ffffff',
              margin: '0 4px',
            }}
          />
          {/* Address bar */}
          <span style={{ fontSize: '11px', fontFamily: 'Tahoma' }}>Address</span>
          <div
            className="win-address-bar"
            style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <span style={{ color: '#808080' }}>http://</span>
            <span>www.diamondconstruction.com/</span>
          </div>
          <button className="win-btn" style={{ padding: '2px 12px', fontSize: '11px' }}>
            Go
          </button>
        </div>

        {/* Navigation Links (IE Favorites / Tab style) */}
        <nav
          style={{
            background: '#d4d0c8',
            borderBottom: '2px solid #808080',
            padding: '2px 8px',
            display: 'flex',
            gap: '2px',
            flexWrap: 'wrap',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="win-menuitem"
              style={{
                background: location.pathname === link.path ? '#0a246a' : '#d4d0c8',
                color: location.pathname === link.path ? '#ffffff' : '#000000',
                padding: '2px 10px',
                textDecoration: 'none',
                fontSize: '11px',
                fontFamily: 'Tahoma',
                borderTop: '1px solid #ffffff',
                borderLeft: '1px solid #ffffff',
                borderRight: '1px solid #808080',
                borderBottom: location.pathname === link.path ? 'none' : '1px solid #808080',
              }}
            >
              {link.name}
            </Link>
          ))}
          <div style={{ flex: 1 }} />
          <Link
            to="/contact"
            className="win-btn"
            style={{
              fontSize: '11px',
              padding: '2px 10px',
              textDecoration: 'none',
              color: '#000',
              background: '#d4d0c8',
            }}
          >
            Get Quote
          </Link>
        </nav>

        {/* Under construction marquee ticker */}
        <div
          style={{
            background: '#000080',
            color: '#ffff00',
            fontSize: '11px',
            fontFamily: 'Tahoma',
            padding: '1px 0',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          <span className="win-marquee-text">
            ★ Welcome to Diamond Construction! ★ Building Excellence Since 2009 ★ 500+ Projects Completed ★ 15+ Years Experience ★ Call Us: 8946074703 ★ Email: abdul@diamondconstruction.com ★ Free Consultations Available! ★ Click Here to Schedule a Meeting ★
          </span>
        </div>
      </header>

      {/* Spacer to push content below fixed header */}
      <div style={{ height: '130px' }} />

      {/* Windows 2000 Taskbar */}
      <div className="win-taskbar">
        <button className="win-start-btn">
          <span style={{ fontSize: '12px' }}>⊞</span> Start
        </button>
        <div
          style={{
            width: '1px',
            height: '22px',
            borderLeft: '1px solid #808080',
            borderRight: '1px solid #ffffff',
          }}
        />
        <button
          className="win-btn"
          style={{ height: '22px', fontSize: '10px', padding: '0 8px', minWidth: 'auto' }}
        >
          ♦ Diamond Construction
        </button>
        <div style={{ flex: 1 }} />
        {/* System Tray */}
        <div
          className="win-statusbar-panel"
          style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '1px 8px' }}
        >
          <span style={{ fontSize: '10px' }}>🔊</span>
          <span style={{ fontSize: '10px' }}>🌐</span>
          <span style={{ fontSize: '10px', fontFamily: 'Tahoma' }}>{formatTime(time)}</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
