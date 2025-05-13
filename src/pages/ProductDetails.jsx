import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Heart, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import photo from "../components/assets/product/iron.png";
import useRelatedProducts from "../hooks/RelatedProduct";
import useCartStore from "../store/useStore";

const productsUrl = "https://ecommerce-backend-tqgh.onrender.com/api/v1/products";

const ProductDetail = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { toast } = useToast();
  const { addToCart, addToWishlist } = useCartStore();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(productsUrl);
      if (!response.ok) throw new Error("Failed to fetch products");
      const result = await response.json();
      setProducts(result.data.products);
    } catch (e) {
      console.error("Failed to fetch products:", e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchReviews = async (productId) => {
    if (!productId) return;

    try {
      const response = await fetch(
        `https://ecommerce-backend-tqgh.onrender.com/api/v1/reviews/product/${productId}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setReviews(result.data?.reviews || []);
    } catch (e) {
      console.error("Failed to fetch reviews:", e.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const found = products.find((item) => item.name.toString() === name);
      setProduct(found);
      if (found) fetchReviews(found._id);
    }
  }, [products, name]);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart({ ...product, quantity });
    toast({ description: "Item added to cart 🛒" });
  };

  const handleAddToWishlist = () => {
    if (!product) return;
    addToWishlist(product);
    toast({ description: "Item added to wishlist 💖" });
  };

  const handleBuyNow = () => {
    if (!product) return;
    
  };
  const navigate = useNavigate();
  const relatedProducts = useRelatedProducts(product);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-slate-600 border-t-2 border-b-2"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Product not found</p>
      </div>
    );
  }
 

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-lg transition text-sm sm:text-base"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-left"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Back to Products
        </Link>
      </div>

      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden flex flex-col md:flex-row gap-6 p-4 sm:p-6">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <img
            src={product.images || photo} 
            alt={product.name}
            className="w-full h-64 sm:h-96 object-contain mb-4 rounded-md bg-gray-100"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`px-2 py-0.5 text-xs rounded ${
                    product.stock > 0
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
                <span className="text-gray-500 text-xs">
                  SKU: {product._id?.substring(0, 8)}
                </span>
              </div>
              <p className="text-black font-bold text-2xl mb-4">
                ${product.price}
              </p>
            </div>
            <button
              className="h-10 w-10 rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-colors"
              onClick={handleAddToWishlist}
              aria-label="Add to Wishlist"
            >
              <Heart className="h-5 w-5 text-gray-700" />
            </button>
          </div>

          <div className="h-px bg-gray-200 my-4"></div>

          <p className="text-gray-700 text-sm sm:text-base mb-6">
            {product.description}
          </p>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <div className="flex items-center">
              <button
                className="h-8 w-8 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-50"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="h-8 w-16 border-y border-gray-300 text-center text-sm"
              />
              <button
                className="h-8 w-8 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-50"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-6">
            <button
              className="flex-1 px-6 py-3 bg-black text-white rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </button>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <button
                  className="flex-1 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] w-[90vw] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Complete Your Purchase</DialogTitle>
                  <DialogDescription>
                    Review your order details and proceed to checkout.
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-4 space-y-4">
                  {/* Order Summary */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-sm mb-2">Order Summary</h3>
                    <div className="flex items-center justify-between text-sm">
                      <span>Item:</span>
                      <span>{product?.name}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Quantity:</span>
                      <span>{quantity}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Price:</span>
                      <span>${product?.price}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Subtotal:</span>
                      <span>${(product?.price * quantity).toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Shipping:</span>
                      <span>$2.00</span>
                    </div>
                    <div className="h-px bg-gray-200 my-2"></div>
                    <div className="flex items-center justify-between font-medium">
                      <span>Total:</span>
                      <span>${((product?.price * quantity) + 2).toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                   <Link to={`/products/checkout/${product._id}`}>
                  <button
                    className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                    onClick={() => {
                      
                      for (let i = 0; i < quantity; i++) {
                        addToCart(product);
                      }
                      
                      setIsDialogOpen(false);
                      
                      
                      toast({
                        description: "Your order is being processed!",
                      });
                    }}
                  >
                    Proceed to Checkout
                  </button>
                  </Link>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-3">
          Customer Reviews
        </h3>
        {reviews.length > 0 ? (
          <div className="space-y-3">
            {reviews.map((review) => (
              <div key={review._id} className="border-b pb-3">
                <div className="flex items-center">
                  <span className="font-medium">
                    {review.user?.name || "Anonymous"}
                  </span>
                </div>
                <p className="text-gray-600 mt-1">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No reviews yet</p>
        )}
      </div>

      {/* Related Products */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {relatedProducts.length > 0 ? (
            relatedProducts.map((item) => (
              <div
                key={item._id}
                className="bg-[#F7F7F7] rounded-xl shadow-md p-3 sm:p-4 hover:shadow-lg transition-all relative"
              >
                <img
                  src={item.images}
                  alt={item.name}
                  className="w-full h-40 object-contain mb-3 rounded-md bg-white"
                />
                <h2 className="text-md font-semibold line-clamp-1">
                  {item.name}
                </h2>
                <p className="text-gray-500 text-xs mb-2">
                  {item.stock} Left in stock
                </p>
                <p className="text-black font-bold mt-2">${item.price}</p>
                <Link to={`/products/${item.name}`}>
                  <button className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                    View Details
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-lg">No related products available.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
