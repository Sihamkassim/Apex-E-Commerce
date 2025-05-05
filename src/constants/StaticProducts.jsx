import desktop from "../components/assets/product/desktop.png";
import headset from "../components/assets/product/headset.png";
import iron from "../components/assets/product/iron.png";
import laptop from "../components/assets/product/laptop.png";
import pan from "../components/assets/product/pan.png";
import powerbank from "../components/assets/product/powerbank.png";
import shoe from "../components/assets/product/shoe.png";
import shoeB from "../components/assets/product/shoeB.png";
import shoeBW from "../components/assets/product/shoeBW.png";
import shoeW from "../components/assets/product/shoeW.png";
import shoeWb from "../components/assets/product/shoeWB.png";
import star from "../components/assets/star.png";
import stars from "../components/assets/stars.png";
const ListOfProducts = [
 
  {
    id: 0,
    src: shoeW,
    name: "White AirForce 1’s, size 7-9",
    review: stars,
    price: "$112.55",
    stock: "21 left in stock",
    category: "Shoes",
    descriptions: "Stylish and durable white AirForce shoes suitable for everyday wear.",
  },
  {
    id: 1,
    src: shoeB,
    name: "Oxford shoe - Black- sam",
    review: star,
    price: "$300.45",
    stock: "not available in stock",
    category: "Shoes",
    descriptions: "Premium black Oxford shoes with a sharp finish, ideal for formal events.",
  },
  {
    id: 2,
    src: shoe,
    name: "Air Jordan 1’s",
    review: stars,
    price: "$220.55",
    stock: "50 pair left in stock",
    category: "Shoes",
    descriptions: "Iconic Air Jordan 1’s designed for performance and street style.",
  },
  {
    id: 3,
    src: shoeWb,
    name: "Jordan 4 - Military Blue",
    price: "$400",
    review: star,
    suggestion: true,
    stock: "10 pair left in stock",
    category: "Shoes",
    descriptions: "Limited edition Jordan 4s with a bold military blue theme.",
  },
  {
    id: 4,
    src: shoeBW,
    name: "New Balance - Runners-Men",
    review: stars,
    price: "$92.88",
    stock: "21 left in stock",
    suggestion: true,
    category: "Shoes",
    descriptions: "Comfortable New Balance runners perfect for jogging or daily use.",
  },
  {
    id: 5,
    name: "Instant Pot Duo Plus, 6-Quart Whisper",
    src: headset,
    review: stars,
    stock: "21 left in stock",
    price: "$31.88",
    suggestion: true,
    category: "Electronics",
    descriptions: "Multi-functional Instant Pot for fast, easy, and healthy cooking.",
  },
  {
    id: 6,
    name: "INIU Portable Charger",
    src: powerbank,
    price: "$18.90",
    review: stars,
    stock: "Not available in stock",
    suggestion: true,
    category: "Electronics",
    descriptions: "Compact and powerful portable charger to keep your devices running.",
  },
  {
    id: 7,
    name: "Philips Viva Collection SoupMaker",
    src: pan,
    price: "$8.90",
    review: star,
    stock: "19 left in stock",
    suggestion: true,
    descriptions: "Efficient soup maker for quick and delicious homemade soups.",
    category: "Household",
  },
  {
    id: 8,
    name: "Sunbeam Steammaster 1400 Watt Iron",
    src: iron,
    price: "$18.88",
    review: "stars",
    stock: "Re-stocked soon",
    suggestion: true,
    category: "Household",
    descriptions: "Steam iron with high wattage for smooth and crisp clothes.",
  },
  {
    id: 9,
    name: "VIZIO 32-inch HD Smart TV 720p LED",
    src: desktop,
    price: "$80.33",
    review: stars,
    stock: "Re-stocked soon",
    suggestion: true,
    category: "Electronics",
    descriptions: "Smart TV with stunning HD display and built-in streaming apps.",
  },
  {
    id: 10,
    src: laptop,
    name: "White AirForce 1’s, size 7-9",
    review: stars,
    price: "$112.55",
    stock: "21 left in stock",
    category: "electronics",
    descriptions: "Classic white AirForce sneakers with sleek design, perfect for casual wear.",
  },
];

  export default ListOfProducts ;

