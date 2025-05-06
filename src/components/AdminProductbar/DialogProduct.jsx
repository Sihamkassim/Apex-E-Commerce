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
        <div className="grid pt-18">
          {" "}
          <div>
            <label htmlFor="product">Product Name: </label>
            <input type="text" className="border-black mx-2 w-80 h-18" />
          </div>
          <div>
            <label htmlFor="product">Category: </label>
            <input type="text" className="w-35 mx-2 mt-9 h-18" />
          </div>
          <div>
            <label htmlFor="product">Price: </label>
            <input type="text" className="w-35 mx-2 mt-9 h-18" />
          </div>
        </div>

        {/* <div className="grid gap-4 py-4 mx-auto"> */}
        {/* //   <div className="grid grid-cols-4 items-center gap-4">
        //     <Label htmlFor="name" className="text-right">
        //       Product
        //     </Label>
            
        //     <Input id="name" value="Pedro Duarte" className="col-span-3" />
        //   </div>
        //   <div className="grid grid-cols-4 items-center gap-4">
        //     <Label htmlFor="username" className="text-right">
        //       Username
        //     </Label>
        //     <Input id="username" value="@peduarte" className="col-span-3" />
        //   </div> */}
        {/* </div> */}
        <DialogFooter>
          <Button type="submit">Add</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
