import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { FaHardHat, FaCity, FaCouch, FaHammer } from 'react-icons/fa';

import ServiceCard from '../components/ui/ServiceCard';
import ProjectCard from '../components/ui/ProjectCard';
import TestimonialSlider from '../components/ui/TestimonialSlider';

const heroBgUrl = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";
const founderImageUrl = "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1587&auto=format&fit=crop";

const servicesData = [
  { icon: FaHardHat, title: 'Residential Construction', description: 'Custom home building from the ground up, tailored to your lifestyle and aesthetic preferences.' },
  { icon: FaCity, title: 'Commercial Projects', description: 'Functional and visually striking commercial spaces designed for productivity and growth.' },
  { icon: FaCouch, title: 'Interior Design', description: 'Transforming interiors into luxurious, functional spaces with premium materials and finishes.' },
  { icon: FaHammer, title: 'Renovation', description: 'Breathing new life into existing structures with modern upgrades and careful restoration.' },
];

const projectsData = [
  { title: 'Diamond Heights', category: 'Commercial', imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2062&auto=format&fit=crop', description: 'A state-of-the-art skyscraper reshaping the city skyline with sustainable architecture.' },
  { title: 'Lakeside Villa', category: 'Residential', imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop', description: 'A massive 6-bedroom lakefront property with smart home integration.' },
  { title: 'Aura Boutique Hotel', category: 'Commercial', imageUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop', description: 'A luxury boutique hotel with premium interior design and ambient lighting.' },
  { title: 'Modern Minimalist Barn', category: 'Residential', imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop', description: 'Rustic appeal meets modern functionality in this newly renovated barn house.' },
];

const WinWindow = ({ title, icon = '♦', children, style = {} }) => (
  <div className="win-window" style={{ ...style }}>
    <div className="win-titlebar">
      <span>{icon} {title}</span>
      <div>
        <span className="win-titlebar-btn">_</span>
        <span className="win-titlebar-btn">□</span>
        <span className="win-titlebar-btn" style={{ fontWeight: 'bold', color: '#900' }}>✕</span>
      </div>
    </div>
    <div style={{ padding: '8px' }}>
      {children}
    </div>
  </div>
);

const Home = ({ openBookingModal }) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(87), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        fontFamily: '"Tahoma", "Arial", sans-serif',
        fontSize: '11px',
        background: '#008080',
        paddingBottom: '40px',
        minHeight: '100vh',
      }}
    >
      {/* ===== HERO — Main Window ===== */}
      <div style={{ padding: '8px' }}>
        <div className="win-window">
          <div className="win-titlebar">
            <span>♦ Diamond Construction — Welcome</span>
            <div>
              <span className="win-titlebar-btn">_</span>
              <span className="win-titlebar-btn">□</span>
              <span className="win-titlebar-btn" style={{ fontWeight: 'bold', color: '#900' }}>✕</span>
            </div>
          </div>

          {/* Hero image with IE-style banner */}
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <img
              src={heroBgUrl}
              alt="Diamond Construction — Building Excellence"
              style={{
                width: '100%',
                height: '320px',
                objectFit: 'cover',
                display: 'block',
                filter: 'brightness(0.6)',
              }}
            />
            {/* Overlay text — classic centered HTML table layout style */}
            <div
              style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '16px',
              }}
            >
              <p
                style={{
                  color: '#ffff00',
                  fontFamily: 'Tahoma',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  letterSpacing: '4px',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                  textShadow: '1px 1px 0 #000',
                }}
              >
                ★ Excellence in Construction ★
              </p>
              <h1
                style={{
                  color: '#ffffff',
                  fontFamily: '"Impact", "Arial Black", sans-serif',
                  fontSize: '48px',
                  fontWeight: 'bold',
                  textShadow: '2px 2px 0px #000000, 3px 3px 0px #DAA520',
                  lineHeight: '1.1',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                }}
              >
                Build Your <span style={{ color: '#DAA520' }}>Legacy</span>
              </h1>
              <p
                style={{
                  color: '#ffffff',
                  fontFamily: 'Tahoma',
                  fontSize: '13px',
                  maxWidth: '600px',
                  textShadow: '1px 1px 0 #000',
                  marginBottom: '16px',
                  lineHeight: '1.5',
                }}
              >
                Diamond Construction elevates the standard of building. We bring your most ambitious
                architectural visions to life with unmatched precision and transparency.
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Link
                  to="/contact"
                  className="win-btn-primary"
                  style={{ textDecoration: 'none', color: '#000', fontSize: '12px' }}
                >
                  ► Start Your Project
                </Link>
                <button
                  onClick={openBookingModal}
                  className="win-btn"
                  style={{ fontSize: '12px' }}
                >
                  ▶ Our Process
                </button>
              </div>
            </div>

            {/* Animated GIF construction sign (simulated) */}
            <div
              className="win-construction-banner"
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '4px 0',
              }}
            >
              🚧 &nbsp; THIS SITE IS BEST VIEWED IN INTERNET EXPLORER 5.5 AT 1024×768 RESOLUTION &nbsp; 🚧
            </div>
          </div>

          {/* Status bar */}
          <div className="win-statusbar">
            <div className="win-statusbar-panel">✓ Done</div>
            <div className="win-statusbar-panel">Internet zone</div>
            <div style={{ flex: 1 }} />
            <div className="win-statusbar-panel" style={{ minWidth: '80px' }}>
              <div className="win-progress" style={{ width: '80px' }}>
                <div className="win-progress-bar" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Quick Stats ===== */}
      <div style={{ padding: '0 8px 8px' }}>
        <WinWindow title="Site Statistics — Diamond Construction" icon="📊">
          <table className="win-table" style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Value</th>
                <th>Status</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                { metric: 'Years Experience', value: '15+', status: '✓ Active', notes: 'Est. 2009' },
                { metric: 'Projects Completed', value: '500+', status: '✓ Ongoing', notes: 'Residential & Commercial' },
                { metric: 'Client Satisfaction', value: '100%', status: '✓ Verified', notes: 'Zero disputes' },
                { metric: 'Industry Awards', value: '12+', status: '✓ Current', notes: 'Regional & National' },
              ].map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f0f0f0' }}>
                  <td style={{ fontWeight: 'bold', color: '#000080' }}>{row.metric}</td>
                  <td style={{ fontWeight: 'bold', color: '#DAA520', fontSize: '13px' }}>{row.value}</td>
                  <td style={{ color: '#008000' }}>{row.status}</td>
                  <td style={{ color: '#808080' }}>{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </WinWindow>
      </div>

      {/* ===== Services Section ===== */}
      <div style={{ padding: '0 8px 8px' }}>
        <WinWindow title="Our Services — Select a Category" icon="🔧">
          <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="win-heading">Specialized Services</span>
            <Link to="/services" className="win-link">
              View All Services &gt;&gt;
            </Link>
          </div>
          <hr className="win-divider" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '8px', marginTop: '8px' }}>
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </WinWindow>
      </div>

      {/* ===== About / Founder Section ===== */}
      <div style={{ padding: '0 8px 8px' }}>
        <WinWindow title="About the Founder — Abdul, CEO" icon="👤">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '12px', alignItems: 'start' }}>
            {/* Founder Image */}
            <div>
              <div className="win-inset" style={{ overflow: 'hidden', display: 'inline-block', width: '100%' }}>
                <img
                  src={founderImageUrl}
                  alt="Abdul — Founder & CEO"
                  style={{ width: '100%', display: 'block', maxHeight: '280px', objectFit: 'cover' }}
                />
              </div>
              <div
                className="win-window"
                style={{ marginTop: '8px', padding: '8px', textAlign: 'center' }}
              >
                <span
                  style={{
                    fontFamily: '"Impact", Arial',
                    fontSize: '28px',
                    color: '#DAA520',
                    display: 'block',
                    lineHeight: '1',
                  }}
                >
                  15+
                </span>
                <span style={{ fontSize: '10px', color: '#808080', textTransform: 'uppercase', letterSpacing: '2px' }}>
                  Years of Trust
                </span>
              </div>
            </div>

            {/* Founder Text */}
            <div>
              <span className="win-heading" style={{ display: 'block', marginBottom: '4px' }}>
                Driven by Quality, Defined by Results
              </span>
              <hr className="win-divider" />
              <p style={{ marginTop: '8px', lineHeight: '1.6', color: '#000' }}>
                Diamond Construction was founded by <strong>Abdul</strong> with a simple but powerful intention: to move beyond blueprints and build landmarks that stand as a legacy.
              </p>
              <p style={{ marginTop: '8px', lineHeight: '1.6', color: '#000' }}>
                Every brick we lay and every structure we design is a commitment to the highest standards of safety, aesthetics, and lasting durability. We don&apos;t just build homes; we build the future.
              </p>

              <table
                style={{
                  marginTop: '12px',
                  borderCollapse: 'collapse',
                  width: '100%',
                }}
              >
                <tbody>
                  {[
                    ['✓ Unmatched Quality', '✓ On-Time Delivery'],
                    ['✓ Transparent Pricing', '✓ Licensed & Insured'],
                  ].map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          style={{
                            padding: '4px 8px',
                            border: '1px solid #d4d0c8',
                            background: i % 2 === 0 ? '#f0f0f0' : '#ffffff',
                            color: '#000080',
                            fontWeight: 'bold',
                          }}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>

              <div style={{ marginTop: '16px', borderTop: '1px solid #d4d0c8', paddingTop: '8px' }}>
                <strong style={{ fontSize: '12px' }}>Abdul</strong>
                <br />
                <span style={{ color: '#DAA520', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>
                  Founder &amp; CEO
                </span>
              </div>

              <div style={{ marginTop: '12px', display: 'flex', gap: '8px' }}>
                <Link to="/about" className="win-btn" style={{ textDecoration: 'none', color: '#000' }}>
                  Learn More
                </Link>
                <button onClick={openBookingModal} className="win-btn-primary">
                  Schedule Meeting
                </button>
              </div>
            </div>
          </div>
        </WinWindow>
      </div>

      {/* ===== Projects Gallery ===== */}
      <div style={{ padding: '0 8px 8px' }}>
        <WinWindow title="Projects Gallery — Latest Masterpieces" icon="🏗️">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span className="win-heading">Featured Portfolio</span>
            <Link to="/projects" className="win-link">
              Explore Full Gallery &gt;&gt;
            </Link>
          </div>
          <hr className="win-divider" />

          {/* Explorer-style file view */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '8px', marginTop: '8px' }}>
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          <div className="win-statusbar" style={{ marginTop: '8px' }}>
            <div className="win-statusbar-panel">{projectsData.length} object(s)</div>
            <div className="win-statusbar-panel">4 files shown</div>
          </div>
        </WinWindow>
      </div>

      {/* ===== Testimonials ===== */}
      <div style={{ padding: '0 8px 8px' }}>
        <WinWindow title="Customer Reviews — Voices of Excellence" icon="💬">
          <div style={{ textAlign: 'center', marginBottom: '4px' }}>
            <span className="win-heading">What Our Clients Say</span>
          </div>
          <hr className="win-divider" />
          <TestimonialSlider />
        </WinWindow>
      </div>

      {/* ===== CTA Section ===== */}
      <div style={{ padding: '0 8px 8px' }}>
        <WinWindow title="Ready to Start? — Get a Free Consultation" icon="📞">
          {/* Dialog-style centered box */}
          <div
            className="win-inset"
            style={{ padding: '24px', textAlign: 'center', background: '#f0f0f0' }}
          >
            {/* Dialog icon */}
            <div style={{ fontSize: '40px', marginBottom: '8px' }}>🏗️</div>
            <h2
              style={{
                fontFamily: '"Impact", "Arial Black", sans-serif',
                fontSize: '22px',
                color: '#000080',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}
            >
              Ready to Start Your Next Masterpiece?
            </h2>
            <p style={{ color: '#000', maxWidth: '480px', margin: '0 auto 16px', lineHeight: '1.6' }}>
              Join the ranks of visionaries who chose Diamond Construction for their most ambitious projects. Contact us today for a <strong>FREE</strong> consultation.
            </p>
            <hr className="win-divider" style={{ maxWidth: '400px', margin: '0 auto 16px' }} />
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                to="/contact"
                className="win-btn-primary"
                style={{ textDecoration: 'none', color: '#000', fontSize: '12px', padding: '6px 20px' }}
              >
                Get Free Consultation
              </Link>
              <button
                onClick={openBookingModal}
                className="win-btn"
                style={{ fontSize: '12px', padding: '6px 20px' }}
              >
                Schedule A Meeting
              </button>
              <Link
                to="/contact"
                className="win-btn"
                style={{ textDecoration: 'none', color: '#000', fontSize: '12px', padding: '6px 20px' }}
              >
                Cancel
              </Link>
            </div>
          </div>

          {/* Footer notice */}
          <div
            style={{
              marginTop: '8px',
              background: '#ffffcc',
              border: '1px solid #DAA520',
              padding: '4px 8px',
              fontSize: '10px',
              color: '#000',
            }}
          >
            ⚠️ <strong>Note:</strong> This website is optimized for Internet Explorer 5.5+. Some features may not work in Netscape Navigator.
          </div>
        </WinWindow>
      </div>
    </div>
  );
};

export default Home;
