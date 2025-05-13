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

export function CarouselSize() {
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
      // Get all products
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
        <p className="text-gray-500 text-sm">Unable to load categories</p>
      </div>
    );
  }

  // Create category groups from products
  const categories = [
    { name: "Electronics", path: "electronics" },
    { name: "Computers", path: "computers" },
    { name: "Accessories", path: "accessories" },
    { name: "Gadgets", path: "gadgets" },
    { name: "Smartphones", path: "smartphones" },
    { name: "Audio", path: "audio" },
    { name: "Gaming", path: "gaming" },
    { name: "Wearables", path: "wearables" }
  ];

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
        {categories.map((category, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/4">
            <Link to={`/products?category=${category.path}`} className="group block">
              <div className="relative overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm border border-gray-100 hover:border-gray-200 transition-all duration-300 h-full">
                <div className="relative p-2">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-gray-50/30 opacity-70 rounded-lg"></div>
                  <img
                    src={data[index % data.length]?.images || ""}
                    alt={category.name}
                    className="w-full h-32 object-contain relative z-10"
                  />
                </div>
                <div className="p-3 text-center bg-white/80 backdrop-blur-sm border-t border-gray-100">
                  <h3 className="text-sm font-medium group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
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
