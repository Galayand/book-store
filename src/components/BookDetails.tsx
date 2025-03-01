
import React from 'react';
import { Star, Clock, BookOpen, ChevronRight, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BookDetailsProps {
  className?: string;
}

const BookDetails = ({ className }: BookDetailsProps) => {
  return (
    <div className={cn("w-full animate-fade-in", className)}>
      <div className="container px-4 py-6 md:px-6">
        {/* Breadcrumb */}
        <div className="mb-4 flex items-center gap-1 text-xs text-muted-foreground">
          <span>Home Library</span>
          <ChevronRight size={12} />
          <span>Programming Books</span>
          <ChevronRight size={12} />
          <span className="text-book-primary">PHP & MySQL</span>
        </div>

        {/* Main Title */}
        <h1 className="mb-6 text-center text-3xl font-bold text-book-secondary">PHP & MySQL</h1>

        {/* Main Content */}
        <div className="book-details-gradient rounded-xl p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Book Cover */}
            <div className="flex flex-col items-center">
              <div className="relative aspect-[3/4] w-48 overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02]">
                <img
                  src="/lovable-uploads/cf1ca58a-eb8a-4f22-994a-63f0a1a2cd90.png"
                  alt="PHP & MySQL Book Cover"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/300x400/edf6f9/118ab2?text=PHP+%26+MySQL';
                  }}
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3">
                  <span className="text-xs font-medium text-white">View Details</span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1">
                <Star className="h-4 w-4 fill-book-accent text-book-accent" />
                <Star className="h-4 w-4 fill-book-accent text-book-accent" />
                <Star className="h-4 w-4 fill-book-accent text-book-accent" />
                <Star className="h-4 w-4 fill-book-accent text-book-accent" />
                <Star className="h-4 w-4 text-muted" />
                <span className="ml-1 text-sm text-muted-foreground">(12)</span>
              </div>
            </div>

            {/* Book Details */}
            <div className="space-y-4 md:col-span-2">
              <h2 className="text-xl font-medium text-book-secondary">Book Details</h2>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <div className="book-detail-item">
                    <Info size={16} />
                    <span>Author:</span>
                    <span className="font-medium text-foreground">John Smith</span>
                  </div>
                  <div className="book-detail-item">
                    <BookOpen size={16} />
                    <span>Publisher:</span>
                    <span className="font-medium text-foreground">TechPress</span>
                  </div>
                  <div className="book-detail-item">
                    <Clock size={16} />
                    <span>Publication date:</span>
                    <span className="font-medium text-foreground">2022-06-15</span>
                  </div>
                </div>
                <div>
                  <div className="book-detail-item">
                    <BookOpen size={16} />
                    <span>Number of pages:</span>
                    <span className="font-medium text-foreground">320</span>
                  </div>
                  <div className="book-detail-item">
                    <Info size={16} />
                    <span>Language:</span>
                    <span className="font-medium text-foreground">English</span>
                  </div>
                  <div className="book-detail-item">
                    <Info size={16} />
                    <span>ISBN:</span>
                    <span className="font-medium text-foreground">978-1-23456-789-0</span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="mb-2 text-lg font-medium text-book-secondary">Description</h3>
                <div className="rounded-md bg-white p-4 text-sm text-muted-foreground shadow-sm">
                  <p className="mb-2">
                    This comprehensive guide to PHP & MySQL covers everything you need to know to build dynamic, database-driven websites. From basic syntax to advanced techniques, this book is perfect for beginners and intermediate developers alike.
                  </p>
                  <p>
                    Learn how to create secure, scalable web applications using the latest versions of PHP and MySQL. Includes practical examples, best practices, and troubleshooting tips.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Books */}
        <div className="mt-12 animate-slide-up">
          <h2 className="mb-6 text-xl font-medium text-book-secondary">Related Books</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {[1, 2, 3].map((index) => (
              <div key={index} className="related-book-card">
                <div className="aspect-[3/4] overflow-hidden rounded">
                  <img
                    src={`https://placehold.co/200x260/edf6f9/118ab2?text=Related+Book+${index}`}
                    alt={`Related Book ${index}`}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="mt-2 p-1">
                  <h3 className="line-clamp-1 font-medium text-book-secondary">Web Development</h3>
                  <p className="line-clamp-1 text-xs text-muted-foreground">Jane Developer</p>
                  <div className="mt-2 flex items-center gap-1">
                    <Star className="h-3 w-3 fill-book-accent text-book-accent" />
                    <Star className="h-3 w-3 fill-book-accent text-book-accent" />
                    <Star className="h-3 w-3 fill-book-accent text-book-accent" />
                    <Star className="h-3 w-3 fill-book-accent text-book-accent" />
                    <Star className="h-3 w-3 text-muted" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
