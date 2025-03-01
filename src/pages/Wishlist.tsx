
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Search, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  // Sample wishlist data
  const wishlistItems = [
    {
      id: 1,
      title: "قلب إذا تاخر إذا انصرف",
      author: "جمال صبري - مكتبة جرير",
      language: "عربي",
      coverImage: "https://placehold.co/100x140/edf6f9/118ab2?text=Arabic+Book"
    },
    {
      id: 2,
      title: "PHP & MySQL",
      author: "John Smith - TechPress",
      language: "English",
      coverImage: "/lovable-uploads/cf1ca58a-eb8a-4f22-994a-63f0a1a2cd90.png"
    },
    {
      id: 3,
      title: "قصص للأطفال",
      author: "سارة أحمد - دار النشر العربية",
      language: "عربي",
      coverImage: "https://placehold.co/100x140/edf6f9/118ab2?text=Children+Book"
    },
    {
      id: 4,
      title: "Learning Time",
      author: "Emily Johnson - Education Press",
      language: "English",
      coverImage: "https://placehold.co/100x140/edf6f9/118ab2?text=Learning+Time"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 bg-gradient-to-b from-pink-50 to-white">
        {/* Breadcrumb */}
        <div className="container px-4 py-4">
          <div className="mb-4 flex items-center gap-1 text-xs text-muted-foreground">
            <span>Home Library</span>
            <ChevronRight size={12} />
            <span className="text-book-primary">My Wishlist</span>
          </div>
        
          {/* Wishlist Header */}
          <div className="my-6 flex flex-col items-center justify-center">
            <div className="wishlist-icon-container mb-4">
              <img 
                src="/lovable-uploads/5234065b-2304-4a46-868d-a4bfca9ac779.png" 
                alt="Wishlist Icons" 
                className="h-20 w-auto"
              />
            </div>
            <h1 className="text-2xl font-bold text-red-500 mb-1">FAVORITE</h1>
            <div className="flex items-center justify-center mb-2">
              <Heart className="h-6 w-6 text-gray-700 fill-gray-700" />
            </div>
            <h2 className="text-xl font-medium text-gray-800">My Wishlist</h2>
          </div>

          {/* Recently Added Section */}
          <div className="mt-8 mb-12">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-800">Recently added</h3>
              <span className="text-sm text-muted-foreground">4 items</span>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {wishlistItems.map((item) => (
                <div key={item.id} className="wishlist-item border-b border-gray-100 p-4 flex items-center gap-4">
                  <img 
                    src={item.coverImage} 
                    alt={item.title} 
                    className="h-24 w-auto object-cover rounded shadow-sm"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.author}</p>
                    <p className="text-xs text-gray-400">{item.language}</p>
                  </div>
                  <button className="wishlist-remove-btn">
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <div className="bg-gray-900 text-white py-6">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="quick-links">
              <h3 className="text-sm font-medium mb-3">QUICK LINKS</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="footer-link">Homepage</Link></li>
                <li><Link to="/categories" className="footer-link">Categories</Link></li>
                <li><Link to="/new-releases" className="footer-link">New Releases</Link></li>
                <li><Link to="/authors" className="footer-link">Authors</Link></li>
                <li><Link to="/about-us" className="footer-link">About Us</Link></li>
              </ul>
            </div>
            
            <div className="library">
              <h3 className="text-sm font-medium mb-3">LIBRARY</h3>
              <p className="text-xs text-white/70 mb-4">
                Our online library offers the latest books in various formats to enhance your reading experience.
              </p>
            </div>
            
            <div className="social">
              {/* Social links would go here */}
            </div>
          </div>
          
          <div className="mt-8 pt-4 border-t border-white/10 text-center">
            <p className="text-xs text-white/50">
              © 2023 Online Library. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Wishlist;
