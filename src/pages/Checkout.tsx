
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronRight, CreditCard, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { toast } from "sonner";
import { Link } from 'react-router-dom';

// Sample cart items
const cartItems = [
  {
    id: 1,
    title: 'PHP & MySQL',
    author: 'John Smith',
    price: 39.99,
    quantity: 1,
    coverImage: '/lovable-uploads/cf1ca58a-eb8a-4f22-994a-63f0a1a2cd90.png',
  },
  {
    id: 2,
    title: 'JavaScript Essentials',
    author: 'Sarah Johnson',
    price: 29.99,
    quantity: 2,
    coverImage: 'https://placehold.co/200x280/edf6f9/118ab2?text=JavaScript',
  }
];

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [orderComplete, setOrderComplete] = useState(false);
  
  // Calculate order summary
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 4.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;
  
  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentStep === 1) {
      setCurrentStep(2);
      window.scrollTo(0, 0);
    } else {
      // Process payment
      setTimeout(() => {
        setOrderComplete(true);
        toast.success("Payment successful! Your order has been placed.");
        window.scrollTo(0, 0);
      }, 1500);
    }
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
            <Link to="/cart" className="hover:text-book-primary">Cart</Link>
            <ChevronRight size={12} />
            <span className="text-book-primary">Checkout</span>
          </div>
          
          <h1 className="text-center text-3xl font-bold text-book-secondary mb-8">Checkout</h1>
          
          {orderComplete ? (
            <div className="mx-auto max-w-md rounded-lg border bg-white p-8 text-center shadow-sm">
              <div className="mb-4 flex justify-center">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-book-secondary">Thank You for Your Order!</h2>
              <p className="mb-6 text-muted-foreground">
                Your order has been placed successfully. You will receive an email confirmation shortly.
              </p>
              <div className="mb-8 rounded-md bg-gray-50 p-4">
                <div className="text-sm text-muted-foreground">Order Reference:</div>
                <div className="font-medium">#ORD-{Math.floor(100000 + Math.random() * 900000)}</div>
              </div>
              <div className="flex flex-col gap-3">
                <Link to="/catalogue">
                  <Button className="w-full bg-book-primary hover:bg-book-secondary">
                    Continue Shopping
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="outline" className="w-full">
                    Return to Home
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="md:col-span-2">
                <div className="mb-6 flex items-center justify-between">
                  <div className={`flex-1 border-t-2 ${currentStep >= 1 ? 'border-book-primary' : 'border-gray-200'}`}></div>
                  <div className={`mx-4 flex h-8 w-8 items-center justify-center rounded-full ${currentStep >= 1 ? 'bg-book-primary text-white' : 'bg-gray-200 text-gray-400'}`}>
                    1
                  </div>
                  <div className={`flex-1 border-t-2 ${currentStep >= 2 ? 'border-book-primary' : 'border-gray-200'}`}></div>
                  <div className={`mx-4 flex h-8 w-8 items-center justify-center rounded-full ${currentStep >= 2 ? 'bg-book-primary text-white' : 'bg-gray-200 text-gray-400'}`}>
                    2
                  </div>
                  <div className={`flex-1 border-t-2 ${currentStep >= 3 ? 'border-book-primary' : 'border-gray-200'}`}></div>
                </div>
                
                <div className="mb-2 flex justify-between text-sm">
                  <div className={`text-center ${currentStep >= 1 ? 'text-book-primary font-medium' : 'text-muted-foreground'}`}>
                    Delivery
                  </div>
                  <div className={`text-center ${currentStep >= 2 ? 'text-book-primary font-medium' : 'text-muted-foreground'}`}>
                    Payment
                  </div>
                  <div className={`text-center ${currentStep >= 3 ? 'text-book-primary font-medium' : 'text-muted-foreground'}`}>
                    Confirmation
                  </div>
                </div>
                
                <form onSubmit={handleSubmitPayment} className="mt-8">
                  {currentStep === 1 && (
                    <div className="bg-white rounded-lg border shadow-sm p-6">
                      <h2 className="text-xl font-medium text-book-secondary mb-6">Delivery Information</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" required />
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" required />
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" required />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State/Province</Label>
                          <Input id="state" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zipCode">ZIP/Postal Code</Label>
                          <Input id="zipCode" required />
                        </div>
                      </div>
                      
                      <div className="mt-8 flex justify-end">
                        <Button type="submit" className="bg-book-primary hover:bg-book-secondary">
                          Continue to Payment
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {currentStep === 2 && (
                    <div className="bg-white rounded-lg border shadow-sm p-6">
                      <h2 className="text-xl font-medium text-book-secondary mb-6">Payment Method</h2>
                      
                      <RadioGroup 
                        value={paymentMethod} 
                        onValueChange={setPaymentMethod}
                        className="mb-6"
                      >
                        <div className="flex items-center space-x-2 p-2 border rounded mb-2 hover:bg-gray-50">
                          <RadioGroupItem value="creditCard" id="creditCard" />
                          <Label htmlFor="creditCard" className="flex-1 cursor-pointer">Credit Card</Label>
                          <CreditCard className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="flex items-center space-x-2 p-2 border rounded mb-2 hover:bg-gray-50">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal" className="flex-1 cursor-pointer">PayPal</Label>
                          <img src="https://placehold.co/80x20/edf6f9/118ab2?text=PayPal" alt="PayPal" className="h-5" />
                        </div>
                        <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
                          <RadioGroupItem value="applePay" id="applePay" />
                          <Label htmlFor="applePay" className="flex-1 cursor-pointer">Apple Pay</Label>
                          <img src="https://placehold.co/80x20/edf6f9/118ab2?text=Apple+Pay" alt="Apple Pay" className="h-5" />
                        </div>
                      </RadioGroup>
                      
                      {paymentMethod === "creditCard" && (
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="cardName">Name on Card</Label>
                            <Input id="cardName" required />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input id="cardNumber" placeholder="XXXX XXXX XXXX XXXX" required />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="expiry">Expiration Date</Label>
                              <Input id="expiry" placeholder="MM/YY" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cvv">CVV</Label>
                              <Input id="cvv" placeholder="XXX" required />
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className="mt-8 flex justify-between">
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={() => setCurrentStep(1)}
                        >
                          Back to Delivery
                        </Button>
                        <Button type="submit" className="bg-book-primary hover:bg-book-secondary">
                          Place Order
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
              
              {/* Order Summary */}
              <div>
                <div className="bg-white rounded-lg border shadow-sm p-6 sticky top-20">
                  <h2 className="text-xl font-medium text-book-secondary mb-4">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <div className="h-16 w-12 flex-shrink-0 overflow-hidden rounded">
                          <img 
                            src={item.coverImage} 
                            alt={item.title} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="line-clamp-1 text-sm font-medium">{item.title}</h3>
                          <p className="text-xs text-muted-foreground">{item.author}</p>
                          <div className="flex justify-between mt-1">
                            <span className="text-xs text-muted-foreground">Qty: {item.quantity}</span>
                            <span className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span className="text-lg text-book-secondary">${total.toFixed(2)}</span>
                  </div>
                  
                  <div className="mt-6 text-xs text-muted-foreground">
                    <p>By placing an order, you agree to our Terms of Service and Privacy Policy.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
