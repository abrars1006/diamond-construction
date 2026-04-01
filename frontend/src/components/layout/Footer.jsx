import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-heading font-bold tracking-wider text-light">DIAMOND<span className="text-primary">.</span></span>
            </Link>
            <p className="text-light/60 text-sm leading-relaxed mb-6">
              Building your dreams with precision. We deliver high-quality construction and design services with an unwavering commitment to excellence.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <a key={index} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-light/80 hover:bg-primary hover:text-dark transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'About Us', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item === 'Home' ? '' : item.toLowerCase().replace(' ', '-')}`} className="text-light/60 hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              {['Residential Construction', 'Commercial Projects', 'Interior Design', 'Renovations'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-light/60 hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Contact Us</h4>
            <address className="not-italic flex flex-col gap-4 text-sm text-light/60">
              <p>📍 Ayya Saami Street,<br />Alandur, Chennai, Tamil Nadu</p>
              <p>📞 8946074703</p>
              <p>✉️ abdul@diamondconstruction.com</p>
            </address>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-light/40">
          <p>&copy; {new Date().getFullYear()} Diamond Construction. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-light transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-light transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
