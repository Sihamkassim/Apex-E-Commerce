
const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-red-600">
        &copy; {new Date().getFullYear()} Apex E-Commerce. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
