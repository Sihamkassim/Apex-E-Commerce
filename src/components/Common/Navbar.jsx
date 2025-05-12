import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";
import { useMediaQuery } from "@/lib/utils";
import { Heart, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import useCartStore from "../../store/useStore";
import group from "../assets/icons/group.png";
import logo from "../assets/icons/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);
  const { cart, wishlist, addToCart, removeFromCart, removeFromWishlist } = useCartStore();
  const { toast } = useToast();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest("nav")) {
        setMenuOpen(false);
        setAccountOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const cartContent = (
    <div className="mt-4">
      {cart.length > 0 ? (
        <div>
          <div className="space-y-4 max-h-[60vh] overflow-y-auto pb-2">
            {cart.map((item) => (
              <div key={item._id} className="flex items-start gap-3 border-b pb-3">
                <div className="h-16 w-16 rounded-md bg-gray-50 overflow-hidden flex-shrink-0">
                  <img 
                    src={item.images} 
                    alt={item.name} 
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm truncate">{item.name}</h4>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500">Qty: 1</span>
                    <button 
                      onClick={() => {
                        removeFromCart(item._id);
                        toast({
                          description: "Removed from cart",
                        });
                      }}
                      className="ml-auto text-xs text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-2">
                    <span className="font-semibold">${item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">Subtotal</span>
              <span className="font-medium">${cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">Shipping</span>
              <span className="font-medium">$5.00</span>
            </div>
            <div className="flex justify-between font-semibold mt-2 pt-2 border-t">
              <span>Total</span>
              <span>${(cart.reduce((total, item) => total + parseFloat(item.price), 0) + 5).toFixed(2)}</span>
            </div>
            <button className="w-full mt-4 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-6">
          <ShoppingCart className="h-10 w-10 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">Your cart is empty</p>
          <p className="text-xs text-gray-400 mt-1">Add items to your cart to checkout</p>
        </div>
      )}
    </div>
  );

  const wishlistContent = (
    <div className="mt-4">
      {wishlist.length > 0 ? (
        <div className="overflow-hidden rounded-md border border-gray-200">
          <div className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-3 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-500 border-b">
            <span>Image</span>
            <span>Product</span>
            <span>Price</span>
            <span></span>
          </div>
          
          <div className="divide-y divide-gray-100">
            {wishlist.map((item) => (
              <div key={item._id} className="group grid grid-cols-[auto_1fr_auto_auto] items-center gap-3 px-3 py-2 hover:bg-gray-50 transition-colors">
                <div className="h-12 w-12 rounded-md bg-white border flex items-center justify-center overflow-hidden">
                  <img 
                    src={item.images} 
                    alt={item.name} 
                    className="h-10 w-10 object-contain"
                  />
                </div>
                
                <div className="min-w-0 pr-2">
                  <h4 className="font-medium text-sm truncate">{item.name}</h4>
                </div>
                
                <div className="font-semibold text-sm">
                  ${item.price}
                </div>
                
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => {
                      addToCart(item);
                      removeFromWishlist(item._id);
                      toast({
                        description: "Added to cart",
                      });
                    }}
                    className="flex items-center justify-center h-7 w-7 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
                    title="Add to cart"
                  >
                    <ShoppingCart className="h-3.5 w-3.5" />
                  </button>
                  
                  <button 
                    onClick={() => {
                      removeFromWishlist(item._id);
                      toast({
                        description: "Removed from wishlist",
                      });
                    }}
                    className="flex items-center justify-center h-7 w-7 rounded-full bg-white border border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-200 transition-colors"
                    title="Remove from wishlist"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 px-3 py-2 border-t flex justify-between items-center">
            <span className="text-xs text-gray-500">{wishlist.length} item{wishlist.length > 1 ? 's' : ''}</span>
            <button 
              onClick={() => {
                wishlist.forEach(item => {
                  addToCart(item);
                  removeFromWishlist(item._id);
                });
                toast({
                  description: "All items added to cart",
                });
              }}
              className="text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              Add all to cart
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-8 px-4 bg-gray-50 rounded-md border border-dashed border-gray-200">
          <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-3">
            <Heart className="h-6 w-6 text-gray-300" />
          </div>
          <p className="font-medium text-gray-700 mb-1">Your wishlist is empty</p>
          <p className="text-xs text-gray-500 text-center">Items you save will appear here for easy access</p>
        </div>
      )}
    </div>
  );

  return (
    <nav className="sticky top-0 bg-white shadow-md z-20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="inline-flex items-center text-lg font-bold text-black-900 hover:text-red-700">
          <img src={logo} alt="Apex Logo" className="h-6 mr-2" />
          Apex
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "text-red-700 underline" : "text-gray-700 hover:text-red-700"}
          >
            Home
          </NavLink>
          <NavLink 
            to="/products" 
            className={({ isActive }) => isActive ? "text-red-700 underline" : "text-gray-700 hover:text-red-700"}
          >
            Shop
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "text-red-700 underline" : "text-gray-700 hover:text-red-700"}
          >
            About
          </NavLink>
        </div>

        {/* Icons - Same line for mobile and desktop */}
        <div className="flex items-center space-x-4">
          {/* Cart */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Your Cart ({cart.length})</SheetTitle>
              </SheetHeader>
              {cartContent}
            </SheetContent>
          </Sheet>

          {/* Wishlist */}
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Button>
            </DrawerTrigger>
            <DrawerContent className="w-full max-w-4xl mx-auto">
              <DrawerHeader>
                <DrawerTitle>Your Wishlist ({wishlist.length})</DrawerTitle>
              </DrawerHeader>
              <div className="px-4 mc-auto  pb-4">
                {wishlistContent}
              </div>
            </DrawerContent>
          </Drawer>

          {/* Account */}
          <div className="relative">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setAccountOpen(!accountOpen)}
            >
              <img src={group} alt="Account" className="h-5 w-5" />
            </Button>
            {accountOpen && (
              <div className="absolute right-0 top-12 bg-white p-2 shadow-md rounded-md z-10 w-40">
                {token ? (
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => {
                      logout();
                      window.location.href = "/";
                    }}
                  >
                    Logout
                  </Button>
                ) : (
                  <Link to="/login">
                    <Button variant="ghost" className="w-full justify-start">
                      Login
                    </Button>
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(!menuOpen);
            }}
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-white border-t transition-all duration-300 ease-in-out overflow-hidden ${
        menuOpen ? "max-h-48 py-3 opacity-100" : "max-h-0 py-0 opacity-0"
      }`}>
        <div className="px-4 space-y-3">
          <NavLink 
            to="/" 
            className="block w-full py-2 text-center text-gray-700 hover:text-red-700 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/products" 
            className="block w-full py-2 text-center text-gray-700 hover:text-red-700 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </NavLink>
          <NavLink 
            to="/about" 
            className="block w-full py-2 text-center text-gray-700 hover:text-red-700 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;