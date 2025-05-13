import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

// Import product images
import desktopImg from "@/components/assets/product/desktop.png";
import headsetImg from "@/components/assets/product/headset.png";
import laptopImg from "@/components/assets/product/laptop.png";
import phoneStandImg from "@/components/assets/product/phone stand.png";
import powerBankImg from "@/components/assets/product/powerBank.png";

import iron from "../components/assets/product/iron.png";
import laptop from "../components/assets/product/laptop.png";
import pan from "../components/assets/product/pan.png";

import shoe from "../components/assets/product/shoe.png";
import shoeB from "../components/assets/product/shoeB.png";
import shoeBW from "../components/assets/product/shoeBW.png";
import shoeW from "../components/assets/product/shoeW.png";
import shoeWb from "../components/assets/product/shoeWB.png";

export function CarouselPlugin() {
  // Local product images array
  const productImages = [
    { image: laptopImg },
    { image: headsetImg },
    { image: phoneStandImg },
    { image: powerBankImg },
    { image: desktopImg },
    { image: shoeWb},
    { image: shoeW},
    { image: shoeBW},
    { image: shoeB},
    { image: shoe},
    { image: iron },
    { image: laptop },
    { image: pan },
  ];

  // Create autoplay plugin with 2 second interval (2000ms)
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
    >
      <CarouselContent>
        {productImages.map((product, index) => (
          <CarouselItem key={index}>
            <img 
              src={product.image} 
              alt="Product image" 
              className="w-full h-48 object-contain"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

