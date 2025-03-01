
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookDetails from '@/components/BookDetails';

const Index = () => {
  // Scroll to top on mount with smooth animation
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <BookDetails />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
