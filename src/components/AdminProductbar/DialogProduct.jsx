import { Button } from "@/components/ui/button"
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

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Products</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] h-[800px] ">
        <DialogHeader className="max-auto">
          <DialogTitle>Add Products</DialogTitle>
          <DialogDescription>
            Add your Products here. Click Add when you're done.
          </DialogDescription>
        </DialogHeader>
          
    <h2 class="text-2xl font-bold text-center text-gray-800">Add New Product</h2>

    <div>
      <label for="productName" class="block mb-1 font-medium text-gray-700">Product Name</label>
      <input type="text" id="productName" name="productName" required
             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    </div>

    <div>
      <label for="category" class="block mb-1 font-medium text-gray-700">Category</label>
      <select  name="category" required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="">Select Category </option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Books">Books</option>
        <option value="Home">Automotive</option>
      </select>
    </div>

    <div>
      <label for="stock" class="block mb-1 font-medium text-gray-700">Stock</label>
      <input type="number"  name="stock" min="0" required
             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    </div>

    <div>
      <label for="price" className="block mb-1 font-medium text-gray-700">Price ($)</label>
      <input type="number"  name="price" step="0.01" min="0" required
             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    </div>

    
        <DialogFooter>
          <Button  type="submit">Add</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
