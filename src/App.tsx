
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import Wishlist from "./pages/Wishlist";
import NotFound from "./pages/NotFound";
import Catalogue from "./pages/Catalogue";
import BookDetails from "./pages/BookDetails";
import Checkout from "./pages/Checkout";
import AboutUs from "./pages/AboutUs";
import Authors from "./pages/Authors";
import Categories from "./pages/Categories";
import NewReleases from "./pages/NewReleases";
import Login from "./pages/Login";
import Register from "./pages/Register";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/new-releases" element={<NewReleases />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
