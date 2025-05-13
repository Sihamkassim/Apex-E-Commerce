import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./components/Common/AdminLayout";
import Layout from "./components/Common/Layout";
import About from "./pages/About.jsx";
import AdminPanel from "./pages/Admin.jsx";
import AdminProduct from "./pages/AdminProduct";
import Home from "./pages/Home";
import Login from "./pages/Login.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Products from "./pages/Products.jsx";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import Register from "./pages/Register.jsx";
import PaymentForm from "./components/authentications/PaymentForm";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
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
          path="/products/:name"
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
        {/* <Route
          path="/LoginForm"
          element={
            <Layout>
              <LoginForm />
            </Layout>
          }
        /> */}

        <Route
          path="/PaymentForm"
          element={
            <Layout>
              <PaymentForm />
            </Layout>
          }
        />

        {/* Protected admin routes */}
        <Route element={<ProtectedRoute adminOnly />}>
          <Route
            path="/AdminPanel"
            element={
              <AdminLayout>
                <AdminPanel />
              </AdminLayout>
            }
          />
          <Route
            path="/AdminProduct"
            element={
              <AdminLayout>
                <AdminProduct />
              </AdminLayout>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
