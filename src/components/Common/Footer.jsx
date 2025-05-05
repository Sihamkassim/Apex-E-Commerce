import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  return (

    <footer className="bg-neutral-200 py-1 mt-10">
      <div className="max-w-7xl text-center mx-auto px-4 text-black-600">
      <h2 className="text-2xl text-red-900 font-bold mb-4">Apex E-Commerce</h2>
      <p className="mb-4">Your one-stop shop for all your needs.</p>
      </div>
        

        <div className="flex justify-center space-x-4 mb-2">
          <a href="#" className="text-blue hover:text-gray-300">
          <BsFacebook />
          </a>
          <a href="#" className="text-blue hover:text-gray-300">
          <BsTwitterX />
          </a>
          <a href="#" className="text-pink hover:text-gray-300">
          <RiInstagramFill />
          </a>
        </div>
     
     
      <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm text-black-600">
        &copy; {new Date().getFullYear()} Apex E-Commerce. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
