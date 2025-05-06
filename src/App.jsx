import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Common/Layout";
import About from "./pages/About.jsx";
import Home from "./pages/Home";
import Login from "./pages/Login.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Products from "./pages/Products.jsx";
import Register from "./pages/Register.jsx";
import AdminPanel from "./pages/Admin.jsx";
import AdminLayout from "./components/Common/AdminLayout";
import { AppSidebar } from "./components/Sidebar components/app-sidebar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
< HEAD
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/products" element={<Layout><Products /></Layout>} />
        <Route path="/products/:name" element={<Layout><ProductDetails /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
        <Route path="/about" element={<Layout>< About /></Layout>} />

        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/products"
          element={
            <Layout>
              <Products />
            </Layout>
          }
        />
        <Route
          path="/products/:id"
          element={
            <Layout>
              <ProductDetails />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/AdminPanel"
          element={
            <AdminLayout>
              <AdminPanel />
            </AdminLayout>
          }
        />
       

      </Routes>
    </BrowserRouter>
  );
}

export default App;
