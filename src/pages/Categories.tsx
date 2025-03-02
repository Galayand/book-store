
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from "sonner";

const Categories = () => {
  // Sample categories with books
  const bookCategories = [
    {
      id: 1,
      name: 'Programming',
      description: 'Books about programming languages, frameworks, and development practices.',
      image: 'https://placehold.co/800x400/edf6f9/118ab2?text=Programming',
      books: [
        {
          id: 101,
          title: 'JavaScript: The Good Parts',
          author: 'Douglas Crockford',
          coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=JavaScript',
          price: 32.99,
          rating: 4.7,
        },
        {
          id: 102,
          title: 'Clean Code',
          author: 'Robert C. Martin',
          coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=Clean+Code',
          price: 38.95,
          rating: 4.8,
        },
        {
          id: 103,
          title: 'You Don\'t Know JS',
          author: 'Kyle Simpson',
          coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=YDKJS',
          price: 29.99,
          rating: 4.6,
        },
      ]
    },
    {
      id: 2,
      name: 'Web Development',
      description: 'Books focused on web technologies, HTML, CSS, and web application architecture.',
      image: 'https://placehold.co/800x400/edf6f9/118ab2?text=Web+Development',
      books: [
        {
          id: 201,
          title: 'Learning React',
          author: 'Alex Banks & Eve Porcello',
          coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=React',
          price: 42.99,
          rating: 4.5,
        },
        {
          id: 202,
          title: 'CSS Secrets',
          author: 'Lea Verou',
          coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=CSS',
          price: 33.95,
          rating: 4.9,
        },
        {
          id: 203,
          title: 'Full Stack Development',
          author: 'Chris Miller',
          coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=Full+Stack',
          price: 45.99,
          rating: 4.4,
        },
      ]
    },
    {
      id: 3,
      name: 'Database Management',
      description: 'Books about database design, SQL, NoSQL, and data modeling.',
      image: 'https://placehold.co/800x400/edf6f9/118ab2?text=Database',
      books: [
        {
          id: 301,
          title: 'SQL Performance Explained',
          author: 'Markus Winand',
          coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=SQL',
          price: 36.99,
          rating: 4.8,
        },
        {
          id: 302,
          title: 'NoSQL Distilled',
          author: 'Pramod J. Sadalage & Martin Fowler',
          coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=NoSQL',
          price: 34.95,
          rating: 4.6,
        },
        {
          id: 303,
          title: 'Database Design for Mere Mortals',
          author: 'Michael J. Hernandez',
          coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=DB+Design',
          price: 39.99,
          rating: 4.7,
        },
      ]
    },
    {
      id: 4,
      name: 'DevOps',
      description: 'Books on DevOps practices, CI/CD, containerization, and cloud infrastructure.',
      image: 'https://placehold.co/800x400/edf6f9/118ab2?text=DevOps',
      books: [
        {
          id: 401,
          title: 'The Phoenix Project',
          author: 'Gene Kim, Kevin Behr & George Spafford',
          coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=Phoenix',
          price: 29.99,
          rating: 4.9,
        },
        {
          id: 402,
          title: 'Docker in Practice',
          author: 'Ian Miell & Aidan Hobson Sayers',
          coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=Docker',
          price: 41.95,
          rating: 4.5,
        },
        {
          id: 403,
          title: 'Kubernetes: Up and Running',
          author: 'Brendan Burns, Joe Beda & Kelsey Hightower',
          coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=K8s',
          price: 47.99,
          rating: 4.8,
        },
      ]
    },
  ];

  const addToWishlist = (bookId: number) => {
    toast.success("Book added to wishlist!");
  };

  const addToCart = (bookId: number) => {
    toast.success("Book added to cart!");
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
            <span className="text-book-primary">Book Categories</span>
          </div>
          
          <h1 className="text-center text-3xl font-bold text-book-secondary mb-6">Browse by Category</h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
            Explore our vast collection of books across different categories. Find the perfect read for your interests and expand your knowledge.
          </p>
          
          <div className="space-y-16">
            {bookCategories.map((category) => (
              <div key={category.id} className="animate-fade-in">
                <div className="mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-book-secondary">{category.name}</h2>
                    <p className="text-muted-foreground mt-1">{category.description}</p>
                  </div>
                  <Link to={`/catalogue?category=${category.id}`} className="flex items-center text-book-primary hover:text-book-secondary transition-colors">
                    <span>View all books</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.books.map((book) => (
                    <div key={book.id} className="bg-white rounded-lg border shadow-sm overflow-hidden hover-scale">
                      <div className="flex h-full flex-col">
                        <Link to={`/book/${book.id}`} className="block">
                          <div className="aspect-[2/3] overflow-hidden">
                            <img 
                              src={book.coverImage} 
                              alt={book.title} 
                              className="h-full w-full object-cover transition-transform hover:scale-105"
                            />
                          </div>
                        </Link>
                        <div className="flex flex-col justify-between flex-grow p-4">
                          <div>
                            <Link to={`/book/${book.id}`} className="block">
                              <h3 className="font-medium text-book-secondary hover:text-book-primary transition-colors">{book.title}</h3>
                            </Link>
                            <p className="text-sm text-muted-foreground mt-1">{book.author}</p>
                            <div className="flex items-center mt-2">
                              <div className="flex">
                                {Array.from({ length: 5 }).map((_, idx) => (
                                  <svg
                                    key={idx}
                                    className={`h-4 w-4 ${idx < Math.floor(book.rating) ? 'text-book-accent fill-book-accent' : 'text-gray-300'}`}
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
                            <div className="flex gap-2">
                              <Button 
                                onClick={() => addToCart(book.id)} 
                                size="sm"
                                className="flex-1 bg-book-primary hover:bg-book-secondary"
                              >
                                Add to Cart
                              </Button>
                              <Button 
                                onClick={() => addToWishlist(book.id)} 
                                size="sm" 
                                variant="outline"
                                className="px-2"
                              >
                                <BookOpen className="h-4 w-4 text-book-accent" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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

export default Categories;
