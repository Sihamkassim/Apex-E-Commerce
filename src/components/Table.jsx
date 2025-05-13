import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

const url ="https://ecommerce-backend-tqgh.onrender.com/api/v1/products";

export function TableDemo() {
      const [data, setData] = useState([]);
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const result = await response.json();
          console.log(result.data.products);
          setData(result.data.products);
        } catch (e) {
          console.error(e.message);
        }
      };
      useEffect(() => {
        fetchData();
      }, []);
    
  return (
    <Table className="mx-50">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[80px]">Image</TableHead>
          <TableHead> Product Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="text-center">Stock</TableHead>
          <TableHead className="text-center">Limit</TableHead>
          <TableHead className="text-center"> Category</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((table, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">
              <img src={table.images} alt="" />
            </TableCell>
            <TableCell>{table.name}</TableCell>
            <TableCell>{table.price} Birr</TableCell>
            <TableCell className="text-center">{table.stock}</TableCell>
            <TableCell className="text-center">{table.lowStockAlert}</TableCell>
            <TableCell className="text-center">
              {table.category.name}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
}
