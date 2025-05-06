import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Common/Layout';
import About from './pages/About.jsx';
import Home from './pages/Home';
import Login from './pages/Login.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Products from './pages/Products.jsx';
import Register from './pages/Register.jsx';

function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/products" element={<Layout><Products /></Layout>} />
        <Route path="/products/:name" element={<Layout><ProductDetails /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
        <Route path="/about" element={<Layout>< About /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
