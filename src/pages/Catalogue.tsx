
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, Filter, BookOpen, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from "sonner";

const Catalogue = () => {
  const [filterVisible, setFilterVisible] = useState(false);

  // Sample categories
  const categories = [
    { id: 1, name: 'Programming', count: 24 },
    { id: 2, name: 'Database', count: 18 },
    { id: 3, name: 'Web Development', count: 32 },
    { id: 4, name: 'Mobile Development', count: 15 },
    { id: 5, name: 'Design', count: 20 },
  ];

  // Sample books data
  const books = [
    {
      id: 1,
      title: 'PHP & MySQL',
      author: 'John Smith',
      price: 45.99,
      rating: 4.5,
      reviewCount: 12,
      coverImage: '/lovable-uploads/cf1ca58a-eb8a-4f22-994a-63f0a1a2cd90.png',
      inStock: true,
    },
    {
      id: 2,
      title: 'JavaScript Essentials',
      author: 'Sarah Johnson',
      price: 39.99,
      rating: 4.2,
      reviewCount: 8,
      coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=JavaScript',
      inStock: true,
    },
    {
      id: 3,
      title: 'React Fundamentals',
      author: 'David Lee',
      price: 49.99,
      rating: 4.8,
      reviewCount: 15,
      coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=React',
      inStock: false,
    },
    {
      id: 4,
      title: 'Python Programming',
      author: 'Michael Chen',
      price: 42.99,
      rating: 4.6,
      reviewCount: 20,
      coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=Python',
      inStock: true,
    },
    {
      id: 5,
      title: 'Node.js Backend',
      author: 'Emily Adams',
      price: 44.99,
      rating: 4.3,
      reviewCount: 11,
      coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=Node.js',
      inStock: true,
    },
    {
      id: 6,
      title: 'CSS Mastery',
      author: 'Lisa Taylor',
      price: 38.99,
      rating: 4.1,
      reviewCount: 9,
      coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=CSS',
      inStock: true,
    },
  ];

  const addToWishlist = (bookId: number) => {
    toast.success("Book added to wishlist!");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 bg-gradient-to-b from-book-light to-white pb-12">
        {/* Breadcrumb */}
        <div className="container px-4 py-4">
          <div className="mb-4 flex items-center gap-1 text-xs text-muted-foreground">
            <span>Home Library</span>
            <ChevronRight size={12} />
            <span className="text-book-primary">Books Catalogue</span>
          </div>
          
          <h1 className="text-center text-3xl font-bold text-book-secondary mb-8">Our Books Collection</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters - Mobile */}
            <div className="lg:hidden mb-4">
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-between"
                onClick={() => setFilterVisible(!filterVisible)}
              >
                <span className="flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </span>
                <span>{filterVisible ? '−' : '+'}</span>
              </Button>
              
              {filterVisible && (
                <div className="mt-4 border rounded-md p-4 bg-white">
                  <h3 className="font-medium mb-2">Categories</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category.id} className="flex items-center justify-between">
                        <label className="flex items-center space-x-2 text-sm">
                          <input type="checkbox" className="rounded border-gray-300" />
                          <span>{category.name}</span>
                        </label>
                        <span className="text-xs text-muted-foreground">{category.count}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="font-medium mb-2">Price Range</h3>
                    <div className="flex items-center space-x-2">
                      <Input 
                        type="number" 
                        placeholder="Min" 
                        className="w-20 text-sm"
                      />
                      <span>to</span>
                      <Input 
                        type="number" 
                        placeholder="Max" 
                        className="w-20 text-sm"
                      />
                      <Button size="sm" variant="outline" className="text-xs">Apply</Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Filters - Desktop */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-20 bg-white rounded-md border p-4 shadow-sm">
                <h3 className="font-medium mb-4 text-book-secondary">Filters</h3>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Categories</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category.id} className="flex items-center justify-between">
                        <label className="flex items-center space-x-2 text-sm">
                          <input type="checkbox" className="rounded border-gray-300" />
                          <span>{category.name}</span>
                        </label>
                        <span className="text-xs text-muted-foreground">{category.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Price Range</h4>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <Input 
                        type="number" 
                        placeholder="Min" 
                        className="text-sm"
                      />
                      <Input 
                        type="number" 
                        placeholder="Max" 
                        className="text-sm"
                      />
                    </div>
                    <Button size="sm" className="w-full bg-book-primary hover:bg-book-secondary">Apply</Button>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Availability</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span>In Stock</span>
                    </label>
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span>Pre-order</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Book Grid */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <div className="text-sm text-muted-foreground">Showing {books.length} results</div>
                <select className="rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm">
                  <option>Sort by: Newest</option>
                  <option>Sort by: Price (Low to High)</option>
                  <option>Sort by: Price (High to Low)</option>
                  <option>Sort by: Popularity</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {books.map(book => (
                  <div key={book.id} className="bg-white rounded-md border shadow-sm overflow-hidden transition-transform hover:shadow-md hover:-translate-y-1">
                    <Link to={`/book/${book.id}`} className="block">
                      <div className="aspect-[2/3] overflow-hidden">
                        <img 
                          src={book.coverImage} 
                          alt={book.title} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </Link>
                    <div className="p-4">
                      <Link to={`/book/${book.id}`} className="block">
                        <h3 className="font-medium text-book-secondary hover:text-book-primary line-clamp-1">{book.title}</h3>
                      </Link>
                      <p className="text-sm text-muted-foreground">{book.author}</p>
                      <div className="flex items-center mt-1">
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <Star 
                              key={idx} 
                              className={`h-3 w-3 ${idx < Math.floor(book.rating) ? 'fill-book-accent text-book-accent' : 'text-muted'}`}
                            />
                          ))}
                        </div>
                        <span className="ml-1 text-xs text-muted-foreground">({book.reviewCount})</span>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="font-medium">${book.price.toFixed(2)}</span>
                        <span className={book.inStock ? 'text-green-600 text-xs' : 'text-red-500 text-xs'}>
                          {book.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <Button 
                          size="sm" 
                          className="flex-1 bg-book-primary hover:bg-book-secondary text-xs"
                          disabled={!book.inStock}
                        >
                          Add to Cart
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="px-2"
                          onClick={() => addToWishlist(book.id)}
                        >
                          <BookOpen className="h-4 w-4 text-book-accent" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-8 flex justify-center">
                <div className="flex space-x-1">
                  <Button variant="outline" size="sm" disabled className="px-2">
                    &lt;
                  </Button>
                  <Button variant="outline" size="sm" className="bg-book-primary text-white">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm" className="px-2">
                    &gt;
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Catalogue;
