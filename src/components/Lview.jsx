import * as React from "react";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function LastView() {
  const url = "https://ecommerce-backend-tqgh.onrender.com/api/v1/products";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      // Get all products for the "Last Viewed" section
      setData(result.data.products);
    } catch (e) {
      console.error("Error fetching products:", e.message);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-40 bg-gray-100 animate-pulse rounded-lg"></div>
        ))}
      </div>
    );
  }

  if (error || data.length === 0) {
    return (
      <div className="w-full p-3 text-center bg-gray-50 rounded-lg">
        <p className="text-gray-500 text-sm">Unable to load products</p>
      </div>
    );
  }

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        slidesToScroll: 1
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {data.map((product, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/4">
            <Link to={`/products/${product.name}`} className="group block">
              <div className="relative overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm border border-gray-100 hover:border-gray-200 transition-all duration-300 h-full">
                <div className="relative p-2">
                  {product.price < 19.00 && (
                    <span className="absolute top-1 right-1 z-20 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs px-1.5 py-0.5 rounded-sm shadow-sm">
                      Sale
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 to-white/30 opacity-70 rounded-lg"></div>
                  <img
                    src={product.images}
                    alt={product.name}
                    className="w-full h-32 object-contain relative z-10"
                  />
                </div>
                <div className="p-3 bg-white/80 backdrop-blur-sm border-t border-gray-100">
                  <h3 className="text-xs font-medium line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-black font-bold text-sm">${product.price}</p>
                    <span className="text-xs text-gray-500">{product.stock} left</span>
                  </div>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-4 bg-white/80 hover:bg-white shadow-sm" />
      <CarouselNext className="-right-4 bg-white/80 hover:bg-white shadow-sm" />
    </Carousel>
  );
}

export default LastView;