
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Book, ArrowRight, Star, BookOpen, Bookmark } from 'lucide-react';
import { toast } from "sonner";

const Index = () => {
  // Scroll to top on mount with smooth animation
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  // Featured books data
  const featuredBooks = [
    {
      id: 1,
      title: 'PHP & MySQL',
      author: 'John Smith',
      price: 45.99,
      discountedPrice: 39.99,
      rating: 4.5,
      reviewCount: 12,
      coverImage: '/lovable-uploads/cf1ca58a-eb8a-4f22-994a-63f0a1a2cd90.png',
      category: 'Programming',
    },
    {
      id: 2,
      title: 'JavaScript Essentials',
      author: 'Sarah Johnson',
      price: 39.99,
      discountedPrice: 34.99,
      rating: 4.2,
      reviewCount: 8,
      coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=JavaScript',
      category: 'Web Development',
    },
    {
      id: 3,
      title: 'React Fundamentals',
      author: 'David Lee',
      price: 49.99,
      discountedPrice: 44.99,
      rating: 4.8,
      reviewCount: 15,
      coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=React',
      category: 'Web Development',
    },
    {
      id: 4,
      title: 'Python Programming',
      author: 'Michael Chen',
      price: 42.99,
      discountedPrice: 37.99,
      rating: 4.6,
      reviewCount: 20,
      coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=Python',
      category: 'Programming',
    },
  ];

  // New releases data
  const newReleases = [
    {
      id: 5,
      title: 'Machine Learning Basics',
      author: 'Jennifer Kim',
      price: 54.99,
      coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=ML+Basics',
      category: 'Data Science',
    },
    {
      id: 6,
      title: 'Advanced CSS Techniques',
      author: 'Thomas Wilson',
      price: 38.99,
      coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=CSS',
      category: 'Web Design',
    },
    {
      id: 7,
      title: 'Cloud Computing',
      author: 'Robert Garcia',
      price: 47.99,
      coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=Cloud',
      category: 'Infrastructure',
    },
    {
      id: 8,
      title: 'UX/UI Design Principles',
      author: 'Emma Davis',
      price: 41.99,
      coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=UX/UI',
      category: 'Design',
    },
  ];

  // Popular categories
  const categories = [
    { id: 1, name: 'Programming', count: 24, icon: <Book size={24} /> },
    { id: 2, name: 'Database', count: 18, icon: <BookOpen size={24} /> },
    { id: 3, name: 'Web Development', count: 32, icon: <Bookmark size={24} /> },
    { id: 4, name: 'Mobile Development', count: 15, icon: <Book size={24} /> },
    { id: 5, name: 'Design', count: 20, icon: <BookOpen size={24} /> },
  ];

  const addToWishlist = (bookId: number) => {
    toast.success("Book added to wishlist!");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-book-light to-white py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 lg:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-book-secondary sm:text-4xl md:text-5xl">
                    Discover Your Next Favorite Book
                  </h1>
                  <p className="text-muted-foreground md:text-xl">
                    Explore our vast collection of technical books for developers, designers, and IT professionals.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link to="/catalogue">
                    <Button size="lg" className="bg-book-primary hover:bg-book-secondary">
                      Browse Books
                    </Button>
                  </Link>
                  <Link to="/about-us">
                    <Button variant="outline" size="lg">
                      About Us
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[300px]">
                  <div className="absolute left-0 top-0 h-[300px] w-[250px] rotate-[-15deg] transform rounded-lg bg-book-accent shadow-xl">
                    <img 
                      src="/lovable-uploads/cf1ca58a-eb8a-4f22-994a-63f0a1a2cd90.png" 
                      alt="Book cover" 
                      className="h-full w-full rounded-lg object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://placehold.co/250x300/edf6f9/118ab2?text=Technical+Books';
                      }}
                    />
                  </div>
                  <div className="absolute right-0 top-10 h-[300px] w-[250px] rotate-[7deg] transform rounded-lg bg-book-secondary shadow-xl">
                    <img 
                      src="https://placehold.co/250x300/edf6f9/118ab2?text=JavaScript" 
                      alt="Book cover" 
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Books */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div>
                <h2 className="text-2xl font-bold text-book-secondary">Featured Books</h2>
                <p className="text-muted-foreground">Handpicked recommendations for you</p>
              </div>
              <Link to="/catalogue" className="group inline-flex items-center text-sm font-medium text-book-primary">
                View all books 
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {featuredBooks.map((book) => (
                <div key={book.id} className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                  <Link to={`/book/${book.id}`} className="absolute inset-0 z-10"></Link>
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={book.coverImage}
                      alt={`${book.title} cover`}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/200x280/edf6f9/118ab2?text=${encodeURIComponent(book.title)}`;
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <div className="mb-2 text-xs font-medium text-book-accent">{book.category}</div>
                    <h3 className="line-clamp-1 text-base font-medium text-foreground">{book.title}</h3>
                    <p className="line-clamp-1 text-sm text-muted-foreground">{book.author}</p>
                    <div className="mt-2 flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star 
                          key={idx} 
                          className={`h-3 w-3 ${idx < Math.floor(book.rating) ? 'fill-book-accent text-book-accent' : 'text-muted'}`}
                        />
                      ))}
                      <span className="ml-1 text-xs text-muted-foreground">({book.reviewCount})</span>
                    </div>
                    <div className="mt-3 flex items-center">
                      <span className="text-lg font-bold text-book-secondary">${book.discountedPrice.toFixed(2)}</span>
                      {book.discountedPrice < book.price && (
                        <span className="ml-2 text-sm line-through text-muted-foreground">${book.price.toFixed(2)}</span>
                      )}
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button 
                        size="sm" 
                        className="relative z-20 w-full bg-book-primary hover:bg-book-secondary"
                        onClick={(e) => {
                          e.preventDefault();
                          toast.success(`${book.title} added to cart!`);
                        }}
                      >
                        Add to Cart
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="relative z-20"
                        onClick={(e) => {
                          e.preventDefault();
                          addToWishlist(book.id);
                        }}
                      >
                        <Bookmark className="h-4 w-4 text-book-accent" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-gradient-to-b from-white to-book-light py-12">
          <div className="container px-4 md:px-6">
            <h2 className="mb-8 text-center text-2xl font-bold text-book-secondary">Browse by Category</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {categories.map((category) => (
                <Link 
                  key={category.id} 
                  to={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex flex-col items-center justify-center rounded-lg bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-3 rounded-full bg-book-light p-3 text-book-secondary">
                    {category.icon}
                  </div>
                  <h3 className="font-medium">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">{category.count} books</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* New Releases */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div>
                <h2 className="text-2xl font-bold text-book-secondary">New Releases</h2>
                <p className="text-muted-foreground">The latest additions to our collection</p>
              </div>
              <Link to="/new-releases" className="group inline-flex items-center text-sm font-medium text-book-primary">
                View all new releases
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {newReleases.map((book) => (
                <div key={book.id} className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                  <Link to={`/book/${book.id}`} className="absolute inset-0 z-10"></Link>
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={book.coverImage}
                      alt={`${book.title} cover`}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <div className="mb-2 text-xs font-medium text-book-accent">{book.category}</div>
                    <h3 className="line-clamp-1 text-base font-medium text-foreground">{book.title}</h3>
                    <p className="line-clamp-1 text-sm text-muted-foreground">{book.author}</p>
                    <div className="mt-3 flex items-center">
                      <span className="text-lg font-bold text-book-secondary">${book.price.toFixed(2)}</span>
                    </div>
                    <Button 
                      size="sm" 
                      className="relative z-20 mt-4 w-full bg-book-primary hover:bg-book-secondary"
                      onClick={(e) => {
                        e.preventDefault();
                        toast.success(`${book.title} added to cart!`);
                      }}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-book-secondary py-12 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-2xl font-bold">Stay Updated</h2>
              <p className="mt-2 max-w-md text-white/90">
                Subscribe to our newsletter to receive updates on new books, special offers, and tech events.
              </p>
              <div className="mt-6 flex w-full max-w-md flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-md px-4 py-2 text-black"
                />
                <Button 
                  className="bg-book-accent hover:bg-book-accent/90"
                  onClick={() => toast.success("Thank you for subscribing!")}
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
