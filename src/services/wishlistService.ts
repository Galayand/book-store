
import { toast } from "sonner";

// Define a Book interface to use throughout the app
export interface Book {
  id: number;
  title: string;
  author: string;
  language: string;
  coverImage: string;
  price?: number;
  rating?: number;
  reviewCount?: number;
  inStock?: boolean;
}

/**
 * Gets the wishlist from localStorage
 */
export const getWishlist = (): Book[] => {
  const wishlist = localStorage.getItem('bookstore-wishlist');
  return wishlist ? JSON.parse(wishlist) : [];
};

/**
 * Adds a book to the wishlist
 */
export const addToWishlist = (book: Book): boolean => {
  const wishlist = getWishlist();
  
  // Check if book already exists in wishlist
  const exists = wishlist.some(item => item.id === book.id);
  
  if (exists) {
    toast.error("This book is already in your wishlist!");
    return false;
  }
  
  // Add book to wishlist
  const newWishlist = [...wishlist, book];
  localStorage.setItem('bookstore-wishlist', JSON.stringify(newWishlist));
  
  toast.success("Book added to your wishlist!");
  return true;
};

/**
 * Removes a book from the wishlist
 */
export const removeFromWishlist = (bookId: number): boolean => {
  const wishlist = getWishlist();
  
  // Filter out the book to remove
  const newWishlist = wishlist.filter(book => book.id !== bookId);
  
  // If no books were removed, return false
  if (newWishlist.length === wishlist.length) {
    return false;
  }
  
  localStorage.setItem('bookstore-wishlist', JSON.stringify(newWishlist));
  toast.success("Book removed from your wishlist!");
  return true;
};

/**
 * Checks if a book is in the wishlist
 */
export const isInWishlist = (bookId: number): boolean => {
  const wishlist = getWishlist();
  return wishlist.some(book => book.id === bookId);
};

/**
 * Clears the entire wishlist
 */
export const clearWishlist = (): void => {
  localStorage.removeItem('bookstore-wishlist');
  toast.success("Wishlist has been cleared!");
};
