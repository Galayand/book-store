
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-book-secondary text-white">
      <div className="container px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/authors" className="footer-link">Authors</Link></li>
              <li><Link to="/categories" className="footer-link">Categories</Link></li>
              <li><Link to="/new-releases" className="footer-link">New Releases</Link></li>
              <li><Link to="/about-us" className="footer-link">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/categories/programming" className="footer-link">Programming</Link></li>
              <li><Link to="/categories/databases" className="footer-link">Databases</Link></li>
              <li><Link to="/categories/web-development" className="footer-link">Web Development</Link></li>
              <li><Link to="/categories/mobile-apps" className="footer-link">Mobile Apps</Link></li>
              <li><Link to="/categories/design" className="footer-link">Design</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">About Library</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="footer-link">Terms of Service</Link></li>
              <li><Link to="/help" className="footer-link">Help Center</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Library</h3>
            <p className="mb-2 text-xs text-white/70">123 Book Street, Reading City</p>
            <p className="mb-4 text-xs text-white/70">contact@library.example.com</p>
            <p className="text-xs text-white/70">Open 24/7 for online services</p>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-4 text-center">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} Library. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
