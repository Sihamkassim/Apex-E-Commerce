import { Toaster } from "@/components/ui/toaster";
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Toaster />
      {/* Footer is not sticky */}
      <Footer />
    </>
  );
};

export default Layout;
