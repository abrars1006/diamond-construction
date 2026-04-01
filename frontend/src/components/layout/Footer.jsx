import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      style={{
        fontFamily: '"Tahoma", "Arial", sans-serif',
        fontSize: '11px',
        marginBottom: '38px', /* above taskbar */
      }}
    >
      {/* Windows-style footer window */}
      <div
        style={{
          background: '#d4d0c8',
          borderTop: '2px solid #ffffff',
          borderLeft: '2px solid #ffffff',
          borderRight: '2px solid #808080',
          borderBottom: '2px solid #808080',
          margin: '0 8px 8px',
          boxShadow: '1px 1px 0 #000',
        }}
      >
        {/* Titlebar */}
        <div
          style={{
            background: 'linear-gradient(to right, #0a246a, #a6caf0)',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '11px',
            padding: '3px 6px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span>♦</span> Diamond Construction — Footer Information
        </div>

        {/* Content grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '8px',
            padding: '8px',
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                borderBottom: '1px solid #808080',
                paddingBottom: '4px',
                marginBottom: '6px',
                fontWeight: 'bold',
                color: '#000080',
                fontSize: '12px',
              }}
            >
              ♦ DIAMOND<span style={{ color: '#DAA520' }}>.</span>
            </div>
            <p style={{ color: '#444', lineHeight: '1.6', marginBottom: '8px' }}>
              Building your dreams with precision. High-quality construction &amp; design services.
            </p>
            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="win-btn"
                  style={{ minWidth: 'auto', padding: '2px 6px', fontSize: '10px', textDecoration: 'none', color: '#000' }}
                  onClick={(e) => e.preventDefault()}
                >
                  <Icon size={10} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div
              style={{
                borderBottom: '1px solid #808080',
                paddingBottom: '4px',
                marginBottom: '6px',
                fontWeight: 'bold',
                color: '#000080',
              }}
            >
              Quick Links
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {['Home', 'About Us', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item === 'Home' ? '' : item.toLowerCase().replace(' ', '-')}`}
                    style={{ color: '#0000ee', textDecoration: 'underline', fontSize: '11px' }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div
              style={{
                borderBottom: '1px solid #808080',
                paddingBottom: '4px',
                marginBottom: '6px',
                fontWeight: 'bold',
                color: '#000080',
              }}
            >
              Services
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {['Residential Construction', 'Commercial Projects', 'Interior Design', 'Renovations'].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    style={{ color: '#0000ee', textDecoration: 'underline', fontSize: '11px' }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                borderBottom: '1px solid #808080',
                paddingBottom: '4px',
                marginBottom: '6px',
                fontWeight: 'bold',
                color: '#000080',
              }}
            >
              Contact Us
            </div>
            <address
              style={{
                fontStyle: 'normal',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                color: '#000',
                fontSize: '11px',
              }}
            >
              <p>📍 Ayya Saami Street,<br />Alandur, Chennai, Tamil Nadu</p>
              <p>📞 <a href="tel:8946074703" style={{ color: '#0000ee', textDecoration: 'underline' }}>8946074703</a></p>
              <p>✉️ <a href="mailto:abdul@diamondconstruction.com" style={{ color: '#0000ee', textDecoration: 'underline' }}>abdul@diamondconstruction.com</a></p>
            </address>
          </div>
        </div>

        {/* Status bar / copyright */}
        <div
          style={{
            background: '#d4d0c8',
            borderTop: '1px solid #808080',
            padding: '3px 8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '4px',
          }}
        >
          <div
            style={{
              borderTop: '1px solid #808080',
              borderLeft: '1px solid #808080',
              borderRight: '1px solid #ffffff',
              borderBottom: '1px solid #ffffff',
              padding: '1px 6px',
              fontSize: '10px',
              color: '#000',
            }}
          >
            &copy; {new Date().getFullYear()} Diamond Construction. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Link to="#" style={{ color: '#0000ee', textDecoration: 'underline', fontSize: '10px' }}>
              Privacy Policy
            </Link>
            <Link to="#" style={{ color: '#0000ee', textDecoration: 'underline', fontSize: '10px' }}>
              Terms of Service
            </Link>
          </div>
          {/* IE Compatibility badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '10px',
              color: '#808080',
            }}
          >
            <span>🌐</span> Best viewed in IE 5.5 @ 1024×768
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
