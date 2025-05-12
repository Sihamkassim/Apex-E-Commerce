import { TbPlayerTrackNext } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";

function Blog() {
  return (
    <>
      <div className="bg-[#EDEDED] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col md:flex-row">
          <div className="p-6 md:w-1/2 flex flex-col justify-center">
            <span className="text-sm font-medium text-gray-500 mb-2">FASHION</span>
            <h2 className="text-xl font-semibold mb-3">Comfy style for her..✨</h2>
            <p className="text-gray-600 mb-4">
              Shop from Apex and buy fashion including shoes, clothes, handbags and
              much more 😊
            </p>
            <a 
              href="/products" 
              className="inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors group"
            >
              Explore
              <FaArrowRight className="ml-2 text-xs group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="md:w-1/2 overflow-hidden">
            <img
              src="./src/components/assets/product/Pexels Photo by EVG Kowalievska.png"
              alt="Fashion Blog"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#EDEDED] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col md:flex-row">
          <div className="p-6 md:w-1/2 flex flex-col justify-center">
            <span className="text-sm font-medium text-gray-500 mb-2">ACCESSORIES</span>
            <h2 className="text-xl font-semibold mb-3">Style essentials you'll love</h2>
            <p className="text-gray-600 mb-4">
              Discover our curated collection of accessories to complete your look
            </p>
            <a 
              href="/products" 
              className="inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors group"
            >
              Explore
              <FaArrowRight className="ml-2 text-xs group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="md:w-1/2 overflow-hidden">
            <img
              src="./src/components/assets/product/Pexels P chloe.png"
              alt="Accessories Blog"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
