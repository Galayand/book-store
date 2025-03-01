
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, Clock, BookOpen, ChevronRight, Heart, ShoppingCart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from "sonner";

// Sample book data (in a real app, this would come from an API)
const bookData = {
  id: 1,
  title: 'PHP & MySQL',
  author: 'John Smith',
  publisher: 'TechPress',
  publishDate: '2022-06-15',
  pages: 320,
  language: 'English',
  isbn: '978-1-23456-789-0',
  price: 45.99,
  discountedPrice: 39.99,
  rating: 4.5,
  reviewCount: 12,
  coverImage: '/lovable-uploads/cf1ca58a-eb8a-4f22-994a-63f0a1a2cd90.png',
  description: `This comprehensive guide to PHP & MySQL covers everything you need to know to build dynamic, database-driven websites. From basic syntax to advanced techniques, this book is perfect for beginners and intermediate developers alike.

Learn how to create secure, scalable web applications using the latest versions of PHP and MySQL. Includes practical examples, best practices, and troubleshooting tips.`,
  inStock: true,
  categories: ['Programming', 'Web Development', 'Databases'],
  relatedBooks: [
    {
      id: 2,
      title: 'JavaScript Essentials',
      author: 'Sarah Johnson',
      coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=JavaScript',
      rating: 4.2,
    },
    {
      id: 3,
      title: 'React Fundamentals',
      author: 'David Lee',
      coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=React',
      rating: 4.8,
    },
    {
      id: 4,
      title: 'Python Programming',
      author: 'Michael Chen',
      coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=Python',
      rating: 4.6,
    }
  ],
  reviews: [
    {
      id: 1,
      user: 'Alex Johnson',
      date: '2023-04-15',
      rating: 5,
      comment: 'This book is excellent for beginners. The explanations are clear and the examples are practical.',
    },
    {
      id: 2,
      user: 'Maria García',
      date: '2023-03-20',
      rating: 4,
      comment: 'Good content, but some of the examples could use more explanation. Overall a solid resource.',
    },
    {
      id: 3,
      user: 'Sam Wilson',
      date: '2023-02-05',
      rating: 5,
      comment: 'This book has been invaluable for my PHP & MySQL development journey. Highly recommended!',
    }
  ]
};

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, you would fetch the book data based on the ID
  // const book = fetchBookById(id);
  
  const book = bookData; // Using sample data for now
  
  const addToCart = () => {
    toast.success("Book added to your cart!");
  };
  
  const addToWishlist = () => {
    toast.success("Book added to your wishlist!");
  };
  
  const shareBook = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 bg-gradient-to-b from-book-light to-white pb-12">
        {/* Breadcrumb */}
        <div className="container px-4 py-4">
          <div className="mb-4 flex items-center gap-1 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-book-primary">Home Library</Link>
            <ChevronRight size={12} />
            <Link to="/catalogue" className="hover:text-book-primary">Programming Books</Link>
            <ChevronRight size={12} />
            <span className="text-book-primary">{book.title}</span>
          </div>
          
          {/* Book Details */}
          <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
            <div className="p-4 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Book Cover */}
                <div className="flex flex-col items-center">
                  <div className="relative aspect-[3/4] w-64 max-w-full overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02]">
                    <img
                      src={book.coverImage}
                      alt={`${book.title} Book Cover`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/300x400/edf6f9/118ab2?text=${encodeURIComponent(book.title)}`;
                      }}
                    />
                  </div>
                  <div className="mt-4 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star 
                        key={idx} 
                        className={`h-4 w-4 ${idx < Math.floor(book.rating) ? 'fill-book-accent text-book-accent' : 'text-muted'}`}
                      />
                    ))}
                    <span className="ml-1 text-sm text-muted-foreground">({book.reviewCount})</span>
                  </div>
                </div>

                {/* Book Details */}
                <div className="space-y-4 md:col-span-2">
                  <h1 className="text-2xl font-bold text-book-secondary">{book.title}</h1>
                  <p className="text-lg text-book-primary">By {book.author}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {book.categories.map((category, idx) => (
                      <span 
                        key={idx} 
                        className="inline-block rounded-full bg-book-light px-3 py-1 text-xs font-medium text-book-secondary"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <div className="book-detail-item">
                      <BookOpen size={16} />
                      <span>Publisher:</span>
                      <span className="font-medium text-foreground">{book.publisher}</span>
                    </div>
                    <div className="book-detail-item">
                      <Clock size={16} />
                      <span>Publication date:</span>
                      <span className="font-medium text-foreground">{book.publishDate}</span>
                    </div>
                    <div className="book-detail-item">
                      <BookOpen size={16} />
                      <span>Pages:</span>
                      <span className="font-medium text-foreground">{book.pages}</span>
                    </div>
                    <div className="book-detail-item">
                      <BookOpen size={16} />
                      <span>Language:</span>
                      <span className="font-medium text-foreground">{book.language}</span>
                    </div>
                    <div className="book-detail-item">
                      <BookOpen size={16} />
                      <span>ISBN:</span>
                      <span className="font-medium text-foreground">{book.isbn}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 my-4">
                    <span className="text-2xl font-bold text-book-secondary">${book.discountedPrice.toFixed(2)}</span>
                    {book.discountedPrice < book.price && (
                      <span className="text-lg line-through text-muted-foreground">${book.price.toFixed(2)}</span>
                    )}
                    {book.discountedPrice < book.price && (
                      <span className="rounded bg-book-accent px-2 py-1 text-xs font-medium text-white">
                        {Math.round((1 - book.discountedPrice / book.price) * 100)}% OFF
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      className="flex-1 bg-book-primary hover:bg-book-secondary"
                      onClick={addToCart}
                      disabled={!book.inStock}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-book-accent text-book-accent hover:bg-book-accent hover:text-white"
                      onClick={addToWishlist}
                    >
                      <Heart className="mr-2 h-4 w-4" />
                      Add to Wishlist
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={shareBook}
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {!book.inStock && (
                    <div className="mt-2 text-red-500">
                      Out of stock
                    </div>
                  )}
                </div>
              </div>
              
              {/* Tabs for Description, Details, Reviews */}
              <div className="mt-12">
                <Tabs defaultValue="description" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews ({book.reviews.length})</TabsTrigger>
                  </TabsList>
                  <TabsContent value="description" className="mt-4">
                    <div className="rounded-md bg-white p-4 text-sm text-muted-foreground">
                      {book.description.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-4 last:mb-0">{paragraph}</p>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="details" className="mt-4">
                    <div className="rounded-md bg-white p-4">
                      <table className="w-full text-sm">
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2 font-medium">Title</td>
                            <td className="py-2">{book.title}</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 font-medium">Author</td>
                            <td className="py-2">{book.author}</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 font-medium">Publisher</td>
                            <td className="py-2">{book.publisher}</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 font-medium">Publication Date</td>
                            <td className="py-2">{book.publishDate}</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 font-medium">Language</td>
                            <td className="py-2">{book.language}</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 font-medium">Pages</td>
                            <td className="py-2">{book.pages}</td>
                          </tr>
                          <tr>
                            <td className="py-2 font-medium">ISBN</td>
                            <td className="py-2">{book.isbn}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                  <TabsContent value="reviews" className="mt-4">
                    <div className="rounded-md bg-white">
                      {book.reviews.map((review) => (
                        <div key={review.id} className="border-b p-4 last:border-b-0">
                          <div className="flex items-center justify-between">
                            <div className="font-medium">{review.user}</div>
                            <div className="text-xs text-muted-foreground">{review.date}</div>
                          </div>
                          <div className="mt-1 flex">
                            {Array.from({ length: 5 }).map((_, idx) => (
                              <Star 
                                key={idx} 
                                className={`h-3 w-3 ${idx < review.rating ? 'fill-book-accent text-book-accent' : 'text-muted'}`}
                              />
                            ))}
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
          
          {/* Related Books */}
          <div className="mt-12">
            <h2 className="mb-6 text-xl font-medium text-book-secondary">Related Books</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {book.relatedBooks.map((relatedBook) => (
                <Link 
                  key={relatedBook.id} 
                  to={`/book/${relatedBook.id}`} 
                  className="related-book-card"
                >
                  <div className="aspect-[3/4] overflow-hidden rounded">
                    <img
                      src={relatedBook.coverImage}
                      alt={`${relatedBook.title} cover`}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-2 p-1">
                    <h3 className="line-clamp-1 font-medium text-book-secondary">{relatedBook.title}</h3>
                    <p className="line-clamp-1 text-xs text-muted-foreground">{relatedBook.author}</p>
                    <div className="mt-2 flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star 
                          key={idx} 
                          className={`h-3 w-3 ${idx < Math.floor(relatedBook.rating) ? 'fill-book-accent text-book-accent' : 'text-muted'}`}
                        />
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookDetails;
