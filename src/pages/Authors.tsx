
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Define a type for our author data
type Author = {
  id: number;
  name: string;
  bio: string;
  booksCount: number;
  image: string;
};

const Authors = () => {
  // Sample authors data
  const authors: Author[] = [
    {
      id: 1,
      name: "Jane Austen",
      bio: "English novelist known primarily for her six major novels, which interpret, critique and comment upon the British landed gentry at the end of the 18th century.",
      booksCount: 6,
      image: "https://placehold.co/200x200/edf6f9/118ab2?text=Jane+Austen"
    },
    {
      id: 2,
      name: "Charles Dickens",
      bio: "English writer and social critic who created some of the world's best-known fictional characters and is regarded by many as the greatest novelist of the Victorian era.",
      booksCount: 15,
      image: "https://placehold.co/200x200/edf6f9/118ab2?text=Charles+Dickens"
    },
    {
      id: 3,
      name: "Gabriel García Márquez",
      bio: "Colombian novelist, short-story writer, screenwriter and journalist, known affectionately as Gabo throughout Latin America.",
      booksCount: 8,
      image: "https://placehold.co/200x200/edf6f9/118ab2?text=Gabriel+García+Márquez"
    },
    {
      id: 4,
      name: "Agatha Christie",
      bio: "English writer known for her 66 detective novels and 14 short story collections, particularly those revolving around fictional detectives Hercule Poirot and Miss Marple.",
      booksCount: 66,
      image: "https://placehold.co/200x200/edf6f9/118ab2?text=Agatha+Christie"
    },
    {
      id: 5,
      name: "Naguib Mahfouz",
      bio: "Egyptian writer who won the 1988 Nobel Prize for Literature. He is regarded as one of the first contemporary writers of Arabic literature.",
      booksCount: 34,
      image: "https://placehold.co/200x200/edf6f9/118ab2?text=Naguib+Mahfouz"
    },
    {
      id: 6,
      name: "Toni Morrison",
      bio: "American novelist and professor. She was awarded the Nobel Prize in Literature in 1993 and received the Presidential Medal of Freedom in 2012.",
      booksCount: 11,
      image: "https://placehold.co/200x200/edf6f9/118ab2?text=Toni+Morrison"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 bg-gradient-to-b from-pink-50 to-white">
        {/* Breadcrumb */}
        <div className="container px-4 py-4">
          <div className="mb-4 flex items-center gap-1 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-book-primary">Home</Link>
            <ChevronRight size={12} />
            <span className="text-book-primary">Authors</span>
          </div>
        
          {/* Authors Header */}
          <div className="my-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Featured Authors</h1>
            <p className="text-gray-600">Discover the brilliant minds behind your favorite books</p>
          </div>
          
          {/* Authors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {authors.map((author) => (
              <div key={author.id} className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:shadow-md hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={author.image} 
                      alt={author.name} 
                      className="h-16 w-16 rounded-full object-cover border-2 border-book-primary/20"
                    />
                    <div>
                      <h3 className="font-bold text-gray-800">{author.name}</h3>
                      <p className="text-sm text-book-primary">{author.booksCount} books</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{author.bio}</p>
                  <Link 
                    to={`/authors/${author.id}`} 
                    className="text-book-primary text-sm font-medium hover:underline"
                  >
                    View all books →
                  </Link>
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

export default Authors;
