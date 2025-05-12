import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import { useEffect } from "react";

export function CarouselPlugin() {


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
  }, []);

  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: false })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {data.map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <div className='w-full items-stretch'>
                 
                  <img src={_.images} alt="" />
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/*  */}
    </Carousel>
  );
}

