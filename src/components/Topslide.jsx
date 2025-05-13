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

import star from "@/components/assets/star.png";

export function Topslide() {
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
                  {_.price < 15.0 ? (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full absolute">
                      Recommended
                    </span>
                  ) : (
                    ""
                  )}
                  <div className="w-full h-40 flex items-center justify-center overflow-hidden mb-4">
                    <img
                      src={_.images}
                      alt={_.name}
                      className="max-h-full object-contain"
                    />
                  </div>
                  <h3 className="text-sm font-medium mb-2 line-clamp-1">
                    {_.name}
                  </h3>
                  <img src={star} alt="rating" className="h-4 mb-1" />
                  <p className="text-gray-500 text-xs mb-2">{_.stock}</p>
                  <p className="text-lg font-bold text-black">
                    ${_.price}
                  </p>
                  {/* </CardContent> */}
                </>
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
export default Topslide;