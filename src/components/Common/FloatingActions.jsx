import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
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
} from "@/components/ui/sheets";
import { useToast } from "@/hooks/use-toast";
import { useMediaQuery } from "@/lib/utils";
import { Heart, ShoppingCart, Truck, X } from "lucide-react";
import { useState } from "react";
import useCartStore from "../../store/useStore";
import LogoImage from "../assets/icons/Logo.png";

export default function FloatingActions() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { cart, wishlist, addToCart, removeFromCart, removeFromWishlist } = useCartStore();
  const { toast } = useToast();
  const [isExpanded, setIsExpanded] = useState(false);

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
          {/* Table Header */}
          <div className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-3 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-500 border-b">
            <span>Image</span>
            <span>Product</span>
            <span>Price</span>
            <span></span>
          </div>
          
          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {wishlist.map((item) => (
              <div key={item._id} className="group grid grid-cols-[auto_1fr_auto_auto] items-center gap-3 px-3 py-2 hover:bg-gray-50 transition-colors">
                {/* Product Image */}
                <div className="h-12 w-12 rounded-md bg-white border flex items-center justify-center overflow-hidden">
                  <img 
                    src={item.images} 
                    alt={item.name} 
                    className="h-10 w-10 object-contain"
                  />
                </div>
                
                {/* Product Name */}
                <div className="min-w-0 pr-2">
                  <h4 className="font-medium text-sm truncate">{item.name}</h4>
                </div>
                
                {/* Price */}
                <div className="font-semibold text-sm">
                  ${item.price}
                </div>
                
                {/* Actions */}
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
          
          {/* Table Footer */}
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

  // Desktop Layout with FAB
  if (isDesktop) {
    return (
      <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">
        {/* Expanded Options */}
        <div className={`flex flex-col gap-3 transition-all duration-300 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
          {/* Shipping Tracking Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                size="icon" 
                className="rounded-full shadow-lg bg-white hover:bg-gray-100 border border-gray-200"
                onClick={() => setIsExpanded(false)}
              >
                <Truck className="h-5 w-5 text-black" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader className="flex justify-between items-center">
                <SheetTitle>Track Orders</SheetTitle>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <X className="w-4 h-4" />
                  </Button>
                </SheetTrigger>
              </SheetHeader>
              <div className="mt-4">
                <p>Track your recent orders here.</p>
                <div className="mt-4 p-4 border rounded-md">
                  <p className="text-sm text-gray-500">No active shipments</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Cart Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                size="icon" 
                className="rounded-full shadow-lg bg-white hover:bg-gray-100 border border-gray-200"
                onClick={() => setIsExpanded(false)}
              >
                <ShoppingCart className="h-5 w-5 text-black" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader className="flex justify-between items-center">
                <SheetTitle>Your Cart</SheetTitle>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <X className="w-4 h-4" />
                  </Button>
                </SheetTrigger>
              </SheetHeader>
              {cartContent}
            </SheetContent>
          </Sheet>

          {/* Wishlist Drawer */}
          <Drawer>
            <DrawerTrigger asChild>
              <Button 
                size="icon" 
                className="rounded-full shadow-lg bg-white hover:bg-gray-100 border border-gray-200"
                onClick={() => setIsExpanded(false)}
              >
                <Heart className="h-5 w-5 text-black" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="flex justify-between items-center">
                <DrawerTitle>Your Wishlist</DrawerTitle>
                <DrawerClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="w-4 h-4" />
                  </Button>
                </DrawerClose>
              </DrawerHeader>
              {wishlistContent}
            </DrawerContent>
          </Drawer>
        </div>

        {/* Main FAB Button */}
        <Button 
          size="icon" 
          className={`rounded-full shadow-lg h-10 w-10 transition-all duration-300 ${isExpanded ? 'bg-gray-100 hover:bg-gray-200' : 'bg-white hover:bg-gray-50'} border border-gray-200 p-1.5`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <X className="h-5 w-5 text-black" />
          ) : (
            <img src={LogoImage} alt="Logo" className="w-full h-full object-contain" />
          )}
        </Button>
      </div>
    );
  }

  // Mobile Layout with FAB
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">
      {/* Expanded Options */}
      <div className={`flex flex-col gap-3 transition-all duration-300 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        {/* Shipping Tracking Drawer */}
        <Drawer>
          <DrawerTrigger asChild>
            <Button 
              size="icon" 
              className="rounded-full shadow-lg bg-white hover:bg-gray-100 border border-gray-200"
              onClick={() => setIsExpanded(false)}
            >
              <Truck className="h-5 w-5 text-black" />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="flex justify-between items-center">
              <DrawerTitle>Track Orders</DrawerTitle>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="w-4 h-4" />
                </Button>
              </DrawerClose>
            </DrawerHeader>
            <div className="p-4">
              <p>Track your recent orders here.</p>
              <div className="mt-4 p-4 border rounded-md">
                <p className="text-sm text-gray-500">No active shipments</p>
              </div>
            </div>
          </DrawerContent>
        </Drawer>

        {/* Cart Sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              size="icon" 
              className="rounded-full shadow-lg bg-white hover:bg-gray-100 border border-gray-200"
              onClick={() => setIsExpanded(false)}
            >
              <ShoppingCart className="h-5 w-5 text-black" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetHeader className="flex justify-between items-center">
              <SheetTitle>Your Cart</SheetTitle>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <X className="w-4 h-4" />
                </Button>
              </SheetTrigger>
            </SheetHeader>
            {cartContent}
          </SheetContent>
        </Sheet>

        {/* Wishlist Drawer */}
        <Drawer>
          <DrawerTrigger asChild>
            <Button 
              size="icon" 
              className="rounded-full shadow-lg bg-white hover:bg-gray-100 border border-gray-200"
              onClick={() => setIsExpanded(false)}
            >
              <Heart className="h-5 w-5 text-black" />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="flex justify-between items-center">
              <DrawerTitle>Your Wishlist</DrawerTitle>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="w-4 h-4" />
                </Button>
              </DrawerClose>
            </DrawerHeader>
            {wishlistContent}
          </DrawerContent>
        </Drawer>
      </div>

      {/* Main FAB Button */}
      <Button 
        size="icon" 
        className={`rounded-full shadow-lg h-10 w-10 transition-all duration-300 ${isExpanded ? 'bg-gray-100 hover:bg-gray-200' : 'bg-white hover:bg-gray-50'} border border-gray-200 p-1.5`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <X className="h-5 w-5 text-black" />
        ) : (
          <img src={LogoImage} alt="Logo" className="w-full h-full object-contain" />
        )}
      </Button>
    </div>
  );
}
