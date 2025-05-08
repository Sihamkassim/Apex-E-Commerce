import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import star from "../components/assets/star.png";

import useRelatedProducts from "../hooks/RelatedProduct";
const productsUrl =
  "https://ecommerce-backend-tqgh.onrender.com/api/v1/products";
const ProductDetail = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

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
    } finally {
      false;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const found = products.find((item) => item.name.toString() === name);
      setProduct(found);
      if (found) {
        fetchReviews(found._id);
      }
    }
  }, [products, name]);
  const handleAddToCart = () => {
    toast({
      description: "Item added to cart 🛒",
    });
  };

  const relatedProducts = useRelatedProducts(product);

  if (!product)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-slate-600 border-t-2 border-b-2"></div>
      </div>
    );

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <Link
          to="/products"
          className="inline-block mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-black rounded transition text-sm sm:text-base"
        >
          Back to Products
        </Link>
      </div>

      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden flex flex-col md:flex-row gap-6 p-4 sm:p-6">
        <div className="w-full md:w-1/2">
          <img
            src={product.images}
            alt={product.name}
            className="w-full h-64 sm:h-96 object-contain mb-4 rounded-md bg-gray-100"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-xl sm:text-2xl font-bold mb-2">{product.name}</h1>
          <img src={star} alt="rating" className="h-4 mb-1" />
          <p className="text-gray-600 text-xs sm:text-sm mb-2">{product.stock}</p>
          <p className="text-black font-bold text-lg mb-4">${product.price}</p>
          <p className="text-gray-700 text-sm sm:text-base mb-6">{product.description}</p>

          <div className="mb-6">
            <h3 className="text-base sm:text-lg font-semibold mb-3">Customer Reviews</h3>
            {reviews.length > 0 ? (
              <div className="space-y-3">
                {reviews.map((review) => (
                  <div key={review._id} className="border-b pb-3">
                    <div className="flex items-center">
                      <span className="font-medium">
                        {review.user?.name || "Anonymous"}
                      </span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-yellow-500">
                        {"⭐️".repeat(review.rating)}
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

          <div className="flex space-x-4 mt-4">
          <button
              className="w-full sm:w-52 bg-black text-white py-2 rounded hover:bg-gray-800 transition text-sm sm:text-base"
              onClick={handleAddToCart}
            >
              Add to Cart 🛒
            </button>
            <button className="w-52 bg-white text-black py-2 rounded border hover:bg-black hover:text-white transition">
              <Sheet>
                <SheetTrigger>Buy Now</SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle> Let's Proceed payment </SheetTitle>
                    <SheetDescription>
                      We are glad That you are buying from us
                    </SheetDescription>
                  </SheetHeader>
                 
                </SheetContent>
              </Sheet>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Related Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 w-full">
          {Array.isArray(relatedProducts) &&
            relatedProducts.map((item) => (
              <div
                key={item.name}
                className="hover:scale-105 rounded-xl border border-gray-200 shadow-md p-4 hover:shadow-lg transition-all relative"
              >
                <img
                  src={item.images}
                  alt={item.name}
                  className="w-full h-48 object-contain mb-3 rounded-md bg-gray-50"
                />
                <h3 className="text-lg sm:text-lg font-semibold line-clamp-2">
                  {item.name}
                </h3>
                <p>${item.price}</p>
                <Link to={`/products/${item.name}`}>
                  <button className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
