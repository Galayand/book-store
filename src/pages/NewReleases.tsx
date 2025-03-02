
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, ChevronRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from "sonner";

const NewReleases = () => {
  // Sample new release books
  const newReleases = [
    {
      id: 1,
      title: 'TypeScript 5.0 Deep Dive',
      author: 'Nathan Wright',
      coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=TypeScript',
      price: 49.99,
      releaseDate: 'May 15, 2023',
      description: 'A comprehensive guide to TypeScript 5.0, covering all new features and practical applications in modern web development.',
      category: 'Programming',
      rating: 4.8,
    },
    {
      id: 2,
      title: 'React 18 Patterns',
      author: 'Emma Richards',
      coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=React+18',
      price: 44.95,
      releaseDate: 'June 2, 2023',
      description: 'Learn the latest patterns and best practices for building scalable and performant applications with React 18.',
      category: 'Web Development',
      rating: 4.7,
    },
    {
      id: 3,
      title: 'Machine Learning Fundamentals',
      author: 'Dr. Alan Turing',
      coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=ML',
      price: 52.99,
      releaseDate: 'June 10, 2023',
      description: 'An accessible introduction to machine learning concepts with practical Python implementations and real-world use cases.',
      category: 'Data Science',
      rating: 4.9,
    },
    {
      id: 4,
      title: 'Cloud Native Architecture',
      author: 'Sarah Johnson',
      coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=Cloud',
      price: 47.50,
      releaseDate: 'June 18, 2023',
      description: 'A guide to designing and implementing cloud-native applications using microservices, containers, and serverless architecture.',
      category: 'DevOps',
      rating: 4.6,
    },
    {
      id: 5,
      title: 'Blockchain Development',
      author: 'Michael Chen',
      coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=Blockchain',
      price: 51.95,
      releaseDate: 'July 5, 2023',
      description: 'A complete guide to blockchain technology, smart contracts, and decentralized application development.',
      category: 'Blockchain',
      rating: 4.5,
    },
    {
      id: 6,
      title: 'Cybersecurity Essentials',
      author: 'David Miller',
      coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=Security',
      price: 46.99,
      releaseDate: 'July 12, 2023',
      description: 'A practical approach to implementing cybersecurity measures and protecting digital assets in modern organizations.',
      category: 'Security',
      rating: 4.8,
    },
    {
      id: 7,
      title: 'Advanced GraphQL',
      author: 'Jessica Lee',
      coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=GraphQL',
      price: 43.99,
      releaseDate: 'July 20, 2023',
      description: 'Take your GraphQL skills to the next level with advanced techniques for building efficient and scalable APIs.',
      category: 'Web Development',
      rating: 4.7,
    },
    {
      id: 8,
      title: 'UI/UX Principles',
      author: 'Alexandra Kim',
      coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=UI/UX',
      price: 39.95,
      releaseDate: 'July 28, 2023',
      description: 'A comprehensive guide to user interface and user experience design principles, with case studies and practical applications.',
      category: 'Design',
      rating: 4.9,
    },
  ];

  const addToWishlist = (bookId: number) => {
    toast.success("Book added to wishlist!");
  };

  const addToCart = (bookId: number) => {
    toast.success("Book added to cart!");
  };

  const preOrder = (bookId: number) => {
    toast.success("Pre-order successful! We'll notify you when the book is released.");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 bg-gradient-to-b from-book-light to-white pb-12">
        {/* Breadcrumb */}
        <div className="container px-4 py-4">
          <div className="mb-4 flex items-center gap-1 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-book-primary">Home</Link>
            <ChevronRight size={12} />
            <span className="text-book-primary">New Releases</span>
          </div>
          
          <h1 className="text-center text-3xl font-bold text-book-secondary mb-6">New & Upcoming Releases</h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
            Stay ahead of the curve with our latest and upcoming book releases. Be the first to explore cutting-edge topics and fresh perspectives.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newReleases.map((book) => (
              <div key={book.id} className="bg-white rounded-lg border shadow-sm overflow-hidden animate-fade-in hover-scale">
                <div className="flex h-full flex-col">
                  <Link to={`/book/${book.id}`} className="block">
                    <div className="aspect-[2/3] overflow-hidden relative">
                      <img 
                        src={book.coverImage} 
                        alt={book.title} 
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                      />
                      <div className="absolute top-2 right-2 bg-book-accent text-white text-xs font-semibold px-2 py-1 rounded">
                        New
                      </div>
                    </div>
                  </Link>
                  <div className="flex flex-col justify-between flex-grow p-4">
                    <div>
                      <div className="flex items-center text-xs text-muted-foreground mb-2">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>Released: {book.releaseDate}</span>
                      </div>
                      <Link to={`/book/${book.id}`} className="block">
                        <h3 className="font-medium text-book-secondary hover:text-book-primary transition-colors">{book.title}</h3>
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">{book.author}</p>
                      <p className="text-xs text-book-accent mt-1">Category: {book.category}</p>
                      <div className="mt-2 text-xs line-clamp-3 text-muted-foreground">
                        {book.description}
                      </div>
                      <div className="flex items-center mt-2">
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <svg
                              key={idx}
                              className={`h-3 w-3 ${idx < Math.floor(book.rating) ? 'text-book-accent fill-book-accent' : 'text-gray-300'}`}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-1 text-xs text-muted-foreground">({book.rating})</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="font-medium text-lg mb-2">${book.price.toFixed(2)}</div>
                      <div className="grid grid-cols-2 gap-2">
                        <Button 
                          onClick={() => book.releaseDate > new Date().toDateString() ? preOrder(book.id) : addToCart(book.id)} 
                          size="sm"
                          className="w-full bg-book-primary hover:bg-book-secondary text-xs"
                        >
                          {book.releaseDate > new Date().toDateString() ? 'Pre-order' : 'Add to Cart'}
                        </Button>
                        <Button 
                          onClick={() => addToWishlist(book.id)} 
                          size="sm" 
                          variant="outline"
                          className="w-full flex items-center justify-center gap-1 text-xs"
                        >
                          <BookOpen className="h-3 w-3 text-book-accent" />
                          <span>Wishlist</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewReleases;
