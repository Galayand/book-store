
import React, { useState } from 'react';
import { Search, User, Menu, X, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link 
            to="/" 
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
          >
            <span className="text-book-primary">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="animate-fade-in"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </span>
            <span className="font-semibold text-book-secondary">Library</span>
          </Link>
        </div>

        <div className="hidden w-full max-w-sm px-4 md:flex">
          <div className="relative flex w-full items-center">
            <input
              type="search"
              placeholder="Search for books..."
              className="search-input"
            />
            <button className="search-button">
              <Search size={18} />
            </button>
          </div>
        </div>

        <nav className="hidden items-center gap-5 md:flex">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/authors" className="nav-link">Authors</Link>
          <Link to="/categories" className="nav-link">Categories</Link>
          <Link to="/new-releases" className="nav-link">New Releases</Link>
          <Link to="/about-us" className="nav-link">About Us</Link>
          <Link to="/wishlist" className="nav-link flex items-center gap-1">
            <Heart size={16} />
            <span>Wishlist</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link to="/login" className="text-sm text-muted-foreground hover:text-book-primary">
              Login
            </Link>
            <span className="text-border">|</span>
            <Link to="/register" className="text-sm text-muted-foreground hover:text-book-primary">
              Register
            </Link>
          </div>
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center justify-center rounded-full p-2 text-foreground transition-colors hover:bg-muted md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "absolute left-0 top-16 z-50 w-full border-b border-border bg-white p-4 shadow-md transition-all duration-300 md:hidden",
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
        )}
      >
        <div className="mb-4">
          <div className="relative flex w-full items-center">
            <input
              type="search"
              placeholder="Search for books..."
              className="search-input"
            />
            <button className="search-button">
              <Search size={18} />
            </button>
          </div>
        </div>
        <nav className="flex flex-col gap-2">
          <Link to="/" className="w-full rounded-md p-2 hover:bg-muted">Home</Link>
          <Link to="/authors" className="w-full rounded-md p-2 hover:bg-muted">Authors</Link>
          <Link to="/categories" className="w-full rounded-md p-2 hover:bg-muted">Categories</Link>
          <Link to="/new-releases" className="w-full rounded-md p-2 hover:bg-muted">New Releases</Link>
          <Link to="/about-us" className="w-full rounded-md p-2 hover:bg-muted">About Us</Link>
          <Link to="/wishlist" className="w-full rounded-md p-2 hover:bg-muted flex items-center gap-2">
            <Heart size={16} />
            <span>Wishlist</span>
          </Link>
          <div className="mt-2 flex items-center justify-between border-t border-border pt-2">
            <Link to="/login" className="text-sm text-book-primary">Login</Link>
            <Link to="/register" className="text-sm text-book-primary">Register</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
