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


const categoryMap = new Map([
  ["Electronics", 1],
  ["Clothing", 2],
  ["Books", 3],
  ["Home & Kitchen", 4],
  ["Beauty & Personal Care", 5],
  ["Sports & Outdoors", 6],
  ["Toys & Games", 7],
  ["Automotive", 8]
]);

const ListOfProducts = [
  // Electronics
  {
    name: "Laptop Pro",
    description: "Powerful laptop for professionals with 16GB RAM, 512GB SSD, and dedicated graphics card.",
    price: 1299.99,
    src: laptop,
    stock: 30,
    categoryId: categoryMap.get("Electronics"),
  },
  {
    name: "Smartphone X",
    description: "Latest smartphone with 6.7-inch OLED display and triple camera system.",
    price: 699.99,
    src: desktop,
    stock: 50,
    categoryId: categoryMap.get("Electronics"),
  },
  {
    name: "Wireless Earbuds Pro",
    description: "Premium earbuds with active noise cancellation and 24-hour battery life.",
    price: 199.99,
    src: headset,
    stock: 75,
    categoryId: categoryMap.get("Electronics"),
  },
  {
    name: "4K Smart TV",
    description: "55-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
    price: 599.99,
    src: desktop,
    stock: 25,
    categoryId: categoryMap.get("Electronics"),
  },
  {
    name: "INIU Portable Charger",
    description: "Compact and powerful portable charger to keep your devices running.",
    price: 18.90,
    src: powerbank,
    stock: 40,
    categoryId: categoryMap.get("Electronics"),
  },

  // Clothing
  {
    name: "Men's Casual T-Shirt",
    description: "Comfortable cotton t-shirt available in multiple colors.",
    price: 24.99,
    src: shoe,
    stock: 200,
    categoryId: categoryMap.get("Clothing"),
  },
  {
    name: "Women's Denim Jacket",
    description: "Stylish denim jacket with modern fit and comfortable lining.",
    price: 59.99,
    src: shoeB,
    stock: 45,
    categoryId: categoryMap.get("Clothing"),
  },
  {
    name: "White AirForce 1's",
    description: "Classic white sneakers with sleek design, perfect for casual wear.",
    price: 112.55,
    src: shoeW,
    stock: 21,
    categoryId: categoryMap.get("Clothing"),
  },
  {
    name: "Oxford Dress Shirt",
    description: "Premium cotton dress shirt with button-down collar.",
    price: 49.99,
    src: shoeBW,
    stock: 60,
    categoryId: categoryMap.get("Clothing"),
  },
  {
    name: "Yoga Pants",
    description: "Stretchy and comfortable yoga pants with moisture-wicking fabric.",
    price: 34.99,
    src: shoeWb,
    stock: 85,
    categoryId: categoryMap.get("Clothing"),
  },

  // Books
  {
    name: "JavaScript: The Definitive Guide",
    description: "Comprehensive guide to JavaScript programming language.",
    price: 39.99,
    src: laptop, // Using laptop as placeholder for book image
    stock: 35,
    categoryId: categoryMap.get("Books"),
  },
  {
    name: "The Psychology of Money",
    description: "Timeless lessons on wealth, greed, and happiness.",
    price: 14.99,
    src: desktop, // Using desktop as placeholder for book image
    stock: 50,
    categoryId: categoryMap.get("Books"),
  },
  {
    name: "Atomic Habits",
    description: "Proven framework for building good habits and breaking bad ones.",
    price: 16.99,
    src: headset, // Using headset as placeholder for book image
    stock: 65,
    categoryId: categoryMap.get("Books"),
  },
  {
    name: "The Silent Patient",
    description: "Psychological thriller about a woman who shoots her husband.",
    price: 12.99,
    src: powerbank, // Using powerbank as placeholder for book image
    stock: 40,
    categoryId: categoryMap.get("Books"),
  },
  {
    name: "The Hobbit",
    description: "Fantasy novel about the adventures of Bilbo Baggins.",
    price: 10.99,
    src: pan, // Using pan as placeholder for book image
    stock: 55,
    categoryId: categoryMap.get("Books"),
  },

  // Home & Kitchen
  {
    name: "Instant Pot Duo Plus",
    description: "Multi-functional pressure cooker for fast, easy, and healthy cooking.",
    price: 89.95,
    src: pan,
    stock: 30,
    categoryId: categoryMap.get("Home & Kitchen"),
  },
  {
    name: "Sunbeam Steammaster Iron",
    description: "Steam iron with high wattage for smooth and crisp clothes.",
    price: 18.88,
    src: iron,
    stock: 45,
    categoryId: categoryMap.get("Home & Kitchen"),
  },
  {
    name: "Non-Stick Cookware Set",
    description: "10-piece non-stick cookware set with glass lids.",
    price: 149.99,
    src: pan,
    stock: 15,
    categoryId: categoryMap.get("Home & Kitchen"),
  },
  {
    name: "Memory Foam Mattress",
    description: "12-inch gel memory foam mattress for pressure relief.",
    price: 399.99,
    src: laptop, // Using laptop as placeholder
    stock: 10,
    categoryId: categoryMap.get("Home & Kitchen"),
  },
  {
    name: "Robot Vacuum Cleaner",
    description: "Smart robot vacuum with mapping technology and app control.",
    price: 249.99,
    src: desktop, // Using desktop as placeholder
    stock: 8,
    categoryId: categoryMap.get("Home & Kitchen"),
  },

  // Beauty & Personal Care
  {
    name: "Electric Toothbrush",
    description: "Rechargeable electric toothbrush with multiple cleaning modes.",
    price: 79.99,
    src: headset, // Using headset as placeholder
    stock: 50,
    categoryId: categoryMap.get("Beauty & Personal Care"),
  },
  {
    name: "Hair Dryer",
    description: "Professional-grade hair dryer with multiple heat settings.",
    price: 59.99,
    src: powerbank, // Using powerbank as placeholder
    stock: 35,
    categoryId: categoryMap.get("Beauty & Personal Care"),
  },
  {
    name: "Skincare Set",
    description: "Complete skincare routine with cleanser, toner, and moisturizer.",
    price: 49.99,
    src: pan, // Using pan as placeholder
    stock: 60,
    categoryId: categoryMap.get("Beauty & Personal Care"),
  },
  {
    name: "Men's Grooming Kit",
    description: "All-in-one grooming kit with trimmer, scissors, and accessories.",
    price: 39.99,
    src: iron, // Using iron as placeholder
    stock: 45,
    categoryId: categoryMap.get("Beauty & Personal Care"),
  },
  {
    name: "Perfume",
    description: "Luxury fragrance with notes of jasmine and sandalwood.",
    price: 89.99,
    src: shoe, // Using shoe as placeholder
    stock: 30,
    categoryId: categoryMap.get("Beauty & Personal Care"),
  },

  // Sports & Outdoors
  {
    name: "Yoga Mat",
    description: "Non-slip yoga mat with carrying strap.",
    price: 29.99,
    src: shoeB, // Using shoeB as placeholder
    stock: 100,
    categoryId: categoryMap.get("Sports & Outdoors"),
  },
  {
    name: "Camping Tent",
    description: "4-person waterproof tent for outdoor adventures.",
    price: 129.99,
    src: shoeBW, // Using shoeBW as placeholder
    stock: 25,
    categoryId: categoryMap.get("Sports & Outdoors"),
  },
  {
    name: "Running Shoes",
    description: "Lightweight running shoes with responsive cushioning.",
    price: 89.99,
    src: shoeW, // Using shoeW as placeholder
    stock: 60,
    categoryId: categoryMap.get("Sports & Outdoors"),
  },
  {
    name: "Bicycle",
    description: "21-speed mountain bike with aluminum frame.",
    price: 299.99,
    src: shoeWb, // Using shoeWb as placeholder
    stock: 12,
    categoryId: categoryMap.get("Sports & Outdoors"),
  },
  {
    name: "Fitness Tracker",
    description: "Waterproof fitness tracker with heart rate monitoring.",
    price: 79.99,
    src: laptop, // Using laptop as placeholder
    stock: 45,
    categoryId: categoryMap.get("Sports & Outdoors"),
  },

  // Toys & Games
  {
    name: "LEGO Star Wars Millennium Falcon",
    description: "Iconic Star Wars spaceship building set with 1,329 pieces.",
    price: 159.99,
    src: desktop, // Using desktop as placeholder
    stock: 8,
    categoryId: categoryMap.get("Toys & Games"),
  },
  {
    name: "Board Game Collection",
    description: "Set of 5 popular board games for family game nights.",
    price: 59.99,
    src: headset, // Using headset as placeholder
    stock: 20,
    categoryId: categoryMap.get("Toys & Games"),
  },
  {
    name: "Remote Control Car",
    description: "High-speed remote control car with rechargeable battery.",
    price: 49.99,
    src: powerbank, // Using powerbank as placeholder
    stock: 35,
    categoryId: categoryMap.get("Toys & Games"),
  },
  {
    name: "Jigsaw Puzzle",
    description: "1000-piece jigsaw puzzle with scenic landscape.",
    price: 19.99,
    src: pan, // Using pan as placeholder
    stock: 50,
    categoryId: categoryMap.get("Toys & Games"),
  },
  {
    name: "Building Blocks Set",
    description: "Creative building blocks set with 500 pieces.",
    price: 39.99,
    src: iron, // Using iron as placeholder
    stock: 40,
    categoryId: categoryMap.get("Toys & Games"),
  },

  // Automotive
  {
    name: "Car Phone Mount",
    description: "Adjustable phone mount for dashboard or windshield.",
    price: 19.99,
    src: shoe, // Using shoe as placeholder
    stock: 100,
    categoryId: categoryMap.get("Automotive"),
  },
  {
    name: "Car Vacuum Cleaner",
    description: "Portable vacuum cleaner for car interiors.",
    price: 39.99,
    src: shoeB, // Using shoeB as placeholder
    stock: 60,
    categoryId: categoryMap.get("Automotive"),
  },
  {
    name: "Jump Starter",
    description: "Portable car jump starter with air compressor.",
    price: 89.99,
    src: shoeBW, // Using shoeBW as placeholder
    stock: 25,
    categoryId: categoryMap.get("Automotive"),
  },
  {
    name: "Car Wax",
    description: "Premium car wax for long-lasting shine and protection.",
    price: 24.99,
    src: shoeW, // Using shoeW as placeholder
    stock: 80,
    categoryId: categoryMap.get("Automotive"),
  },
  {
    name: "Tire Pressure Gauge",
    description: "Digital tire pressure gauge with backlit display.",
    price: 14.99,
    src: shoeWb, // Using shoeWb as placeholder
    stock: 120,
    categoryId: categoryMap.get("Automotive"),
  }
];

export default ListOfProducts;