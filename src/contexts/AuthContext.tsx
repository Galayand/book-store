
import React, { createContext, useContext, useState, useEffect } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user in localStorage on initial load
    const storedUser = localStorage.getItem('user');
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // In a real app, this would call an API endpoint
    // For now, just simulate a successful login with mock data
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Create mock user data
    const mockUser = {
      id: '1',
      name: email.split('@')[0], // Use part of email as name for demo
      email,
    };
    
    // Store user data in localStorage for persistence
    localStorage.setItem('user', JSON.stringify(mockUser));
    
    // Update state
    setUser(mockUser);
  };

  const register = async (name: string, email: string, password: string) => {
    // In a real app, this would call an API endpoint
    // For now, just simulate a successful registration
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Registration is successful but doesn't auto-login
    // User would need to login manually after registration
    
    return;
  };

  const logout = () => {
    // Remove user data from localStorage
    localStorage.removeItem('user');
    
    // Clear user state
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};
