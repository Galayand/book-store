
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, ChevronRight, ShoppingCart, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getWishlist, removeFromWishlist, clearWishlist, Book } from '@/services/wishlistService';
import { toast } from 'sonner';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load wishlist items from localStorage
    const items = getWishlist();
    setWishlistItems(items);
    setIsLoading(false);
  }, []);

  const handleRemoveItem = (bookId: number) => {
    if (removeFromWishlist(bookId)) {
      // Update the state to remove the book
      setWishlistItems(prevItems => prevItems.filter(item => item.id !== bookId));
    }
  };

  const handleClearWishlist = () => {
    clearWishlist();
    setWishlistItems([]);
  };

  const handleAddToCart = (book: Book) => {
    // This would be implemented with a cart service
    toast.success(`${book.title} added to cart!`);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 bg-gradient-to-b from-pink-50 to-white">
        {/* Breadcrumb */}
        <div className="container px-4 py-4">
          <div className="mb-4 flex items-center gap-1 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-book-primary">Home Library</Link>
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

          {/* Wishlist Content */}
          <div className="mt-8 mb-12">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-800">
                {isLoading ? 'Loading...' : `Books in Wishlist (${wishlistItems.length})`}
              </h3>
              
              {wishlistItems.length > 0 && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-red-500 border-red-500 hover:bg-red-50"
                  onClick={handleClearWishlist}
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Clear All
                </Button>
              )}
            </div>
            
            {!isLoading && wishlistItems.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <div className="mb-4">
                  <Heart className="h-16 w-16 mx-auto text-gray-300" />
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Your wishlist is empty</h3>
                <p className="text-gray-500 mb-6">Browse our collection and add books to your wishlist.</p>
                <Link to="/catalogue">
                  <Button className="bg-book-primary hover:bg-book-secondary">
                    Browse Books
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {isLoading ? (
                  <div className="p-8 text-center">
                    <p>Loading your wishlist...</p>
                  </div>
                ) : (
                  wishlistItems.map((item) => (
                    <div key={item.id} className="wishlist-item border-b border-gray-100 p-4 flex items-center gap-4">
                      <Link to={`/book/${item.id}`} className="block h-24 w-auto">
                        <img 
                          src={item.coverImage} 
                          alt={item.title} 
                          className="h-24 w-auto object-cover rounded shadow-sm"
                          onError={(e) => {
                            e.currentTarget.src = `https://placehold.co/100x140/edf6f9/118ab2?text=${encodeURIComponent(item.title)}`;
                          }}
                        />
                      </Link>
                      <div className="flex-1">
                        <Link to={`/book/${item.id}`} className="block">
                          <h4 className="font-medium text-gray-800 hover:text-book-primary">{item.title}</h4>
                        </Link>
                        <p className="text-sm text-gray-500">{item.author}</p>
                        <p className="text-xs text-gray-400">{item.language}</p>
                        {item.price && (
                          <p className="text-sm font-medium text-book-secondary mt-1">${item.price.toFixed(2)}</p>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button 
                          size="sm"
                          className="bg-book-primary hover:bg-book-secondary"
                          onClick={() => handleAddToCart(item)}
                        >
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          Add to Cart
                        </Button>
                        <Button 
                          size="sm"
                          variant="outline"
                          className="text-red-500 border-red-500 hover:bg-red-50"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Wishlist;
