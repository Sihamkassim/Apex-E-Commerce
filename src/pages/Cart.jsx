// import { Link } from "react-router-dom";
// import ListOfProducts from "../constants/StaticProducts";


// const cartItems = [
//   ListOfProducts[0],
//   ListOfProducts[1],
//   ListOfProducts[5]
// ].filter(item => item); 

// const Cart = () => {
//   console.log("Cart Items:", cartItems); 

//   return (
//     <div className="p-4">
//       <Link
//         to="/products"
//         className="inline-block mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-black rounded transition"
//       >
//         Back to Products
//       </Link>
//       <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {cartItems.map((item, index) => (
//             <div key={index} className="border p-4 rounded shadow bg-white">
//               <img
//                 src={item.src}
//                 alt={item.name}
//                 className="w-full h-48 object-contain mb-2"
//               />
//               <h3 className="text-lg font-semibold">{item.name}</h3>
//               <p className="text-sm text-gray-600">{item.description}</p>
//               <p className="text-green-600 font-bold mt-2">${item.price}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
