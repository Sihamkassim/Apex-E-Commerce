import { Toaster } from "@/components/ui/toaster";
import FloatingActions from '../Common/FloatingActions';
import Footer from './Footer';
import Navbar from './Navbar';
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Toaster />
      <FloatingActions />
      <Footer />
    </>
  );
};

export default Layout;
