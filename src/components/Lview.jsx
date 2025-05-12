import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function LastView() {
     const url = "https://ecommerce-backend-tqgh.onrender.com/api/v1/products";
      
     
        const [data, setData] = useState([]);
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const result = await response.json();
            console.log(result.data.products);
            setData(result.data.products);
          } catch (e) {
            console.error(e.message);
          }
        };
        useEffect(() => {
          fetchData();
        }, ['']);
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full flex max-w-fit"
    >
      <CarouselContent>
        {data.map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                {/* <CardContent className="flex aspect-square items-center justify-center p-6"> */}
                <>
                  {_.price < 19.00 ? (
                    <span className="absolute top-2 right-2 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded">
                      Recommended
                    </span>
                  ) : (
                    ""
                  )}
                  <img
                      src={_.images}
                      alt={_.name}
                      className="  w-full object-contain  "
                    />
                 
                 
                  <h2 className="text-lg px-3 py-3 font-semibold line-clamp-1">
                    {_.name}
                  </h2>
                  {/* <img src={merchandise.review} alt="rating" className="h-4 mb-1" /> */}
                  <p className="text-gray-500 px-3  text-xs mb-2">
                    {_.stock} Left in Stock
                  </p>
                  <p className="text-black px-3 font-bold mt-2">${_.price}</p>
                  <Link to={`/products/${_.name}`}>
                    <button className="w-full mt-4 pt-3  bg-black text-white py-2 my-2 rounded-lg hover:bg-gray-800 transition">
                      View Details
                    </button>
                  </Link>
                </>
                {/* </CardContent> */}
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
export default LastView