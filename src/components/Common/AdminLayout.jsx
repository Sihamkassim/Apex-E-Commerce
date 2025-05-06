import AdminPanel from "@/pages/Admin";

const AdminLayout = ({ children }) => {
  return (
    <main>{children}</main> // No Navbar here
  );
};

export default AdminLayout;
