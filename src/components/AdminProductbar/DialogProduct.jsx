import { Button } from "@/components/ui/button"
import { toast, Toaster } from "sonner"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";

export function DialogDemo() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    stock: "",
    limit: "",
    category: "",
    image: null,
  });
const handleAdd=()=>{toast("Product has been added");
}
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm({
      ...form,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", form);

  };
  fetch('https://ecommerce-backend-tqgh.onrender.com/api/v1/products',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(form)
  })
  .then(response=>console.log('success'))
  .then(form => form.category)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Products</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] h-[800px] ">
        <DialogHeader className="max-auto"></DialogHeader>
        <h2 className="text-2xl font-bold mb-6">Add Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Product Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Price</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
              rows="3"
            />
          </div>

          <div>
            <label className="block font-medium">Stock</label>
            <input
              type="number"
              name="stock"
              value={form.stock}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">Limit</label>
            <input
              type="number"
              name="limit"
              value={form.limit}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">Category</label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Product Image</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              accept="image/*"
              className="w-full mt-1"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
            onClick={handleAdd}
          >Add Products
          < Toaster/>
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
