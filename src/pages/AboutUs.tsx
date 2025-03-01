
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 bg-gradient-to-b from-pink-50 to-white">
        {/* Breadcrumb */}
        <div className="container px-4 py-4">
          <div className="mb-4 flex items-center gap-1 text-xs text-muted-foreground">
            <span>Home</span>
            <ChevronRight size={12} />
            <span className="text-book-primary">About Us</span>
          </div>
        
          {/* About Us Content */}
          <div className="my-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">About Our Bookstore</h1>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4 text-book-primary">Our Story</h2>
              <p className="mb-4 text-gray-700">
                Welcome to our bookstore, where passion for literature meets community. Established in 2010, 
                we've been dedicated to bringing the joy of reading to people of all ages and interests.
              </p>
              <p className="mb-4 text-gray-700">
                What started as a small corner shop has grown into a beloved community space where 
                book lovers gather to discover new worlds, share ideas, and connect through the 
                power of storytelling.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 mt-8 text-book-primary">Our Mission</h2>
              <p className="mb-4 text-gray-700">
                We believe that books have the power to transform lives, spark imagination, and foster 
                understanding. Our mission is to curate a diverse collection of books that represent 
                various voices, perspectives, and genres.
              </p>
              <p className="mb-4 text-gray-700">
                We strive to create a welcoming space both online and in our physical stores where 
                everyone can find books that speak to them, challenge them, and bring them joy.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 mt-8 text-book-primary">Our Team</h2>
              <p className="mb-4 text-gray-700">
                Our team consists of passionate readers, literary experts, and customer service 
                professionals who are committed to helping you find your next favorite book.
              </p>
              <p className="mb-4 text-gray-700">
                From our buyers who carefully select each title to our staff who provide personalized 
                recommendations, everyone at our bookstore shares a common love for books and a 
                dedication to serving our community.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 mt-8 text-book-primary">Visit Us</h2>
              <p className="mb-4 text-gray-700">
                We have multiple locations across the country where you can browse our shelves, 
                attend author events, join book clubs, and experience the joy of discovering 
                your next read in person.
              </p>
              <p className="text-gray-700">
                Our online store is open 24/7, offering the same curated selection and personalized 
                service that you'd find in our physical stores, delivered right to your doorstep.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 text-book-primary">Contact Us</h2>
              <p className="mb-4 text-gray-700">
                Have questions or feedback? We'd love to hear from you! Reach out to us through 
                the following channels:
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>Email: contact@bookstore.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Social Media: @BookstoreOfficial</li>
              </ul>
              <p className="text-gray-700">
                Our customer service team is available Monday through Friday, 9am to 6pm ET, 
                to assist you with any inquiries.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
