import { Button } from "@/components/ui/button";
import { toast, Toaster } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
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

  const handleAdd = () => {
    toast("Product has been added");
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm({
      ...form,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://ecommerce-backend-tqgh.onrender.com/api/v1/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
      if (response.ok) {
        toast.success("Product added successfully");
      } else {
        toast.error("Failed to add product");
      }
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Products</Button>
      </DialogTrigger>

      <DialogContent className="w-full max-w-[95vw] sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <h2 className="text-2xl font-bold mb-4">Add Product</h2>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product Name */}
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

          {/* Price */}
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

          {/* Description */}
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

          {/* Stock */}
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

          {/* Limit */}
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

          {/* Category */}
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

          {/* Image */}
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
            onClick={handleAdd}
          >
            Add Product
          </button>
        </form>
        <Toaster position="top-right" richColors />
      </DialogContent>
    </Dialog>
  );
}
