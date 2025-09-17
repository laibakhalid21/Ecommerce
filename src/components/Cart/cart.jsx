import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../CartContext/cartContext";

function Cart() {
    const cart = useCartStore((state) => state.cart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const updateQty = useCartStore((state) => state.updateQty);
    const clearCart = useCartStore((state) => state.clearCart);
    const navigate = useNavigate();
    const [qty, setQty] = useState(1);
    const price = 1400;


    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const handleClick = () => {
        navigate('/Home')
    }
     if (cart.length === 0) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-xl font-semibold text-gray-600">Your Cart is empty.</p>
      </div>
    )
}

    return (
        <div>
            <div className="flex flex-col justify-center items-center my-10 px-4 md:px-10">
                <div className="place-self-start font-bold text-blue-950 text-2xl cursor-pointer hover:text-blue-800 my-10"
                    onClick={handleClick}
                >
                    {"<- "} Back to Home
                </div>
                <div className="flex gap-4 items-center mb-8">
                    <ShoppingCart size={50} className="text-blue-950" />
                    <h1 className="text-blue-950 font-bold text-5xl">Your Shopping Cart</h1>
                </div>

                <div className="hidden sm:block w-full max-w-6xl">
                    <table className="min-w-full border border-gray-400 text-center">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="border border-gray-400 px-4 py-2">Product</th>
                                <th className="border border-gray-400 px-4 py-2">Name</th>
                                <th className="border border-gray-400 px-4 py-2">Qty</th>
                                <th className="border border-gray-400 px-4 py-2">Price</th>
                                <th className="border border-gray-400 px-4 py-2">Total</th>
                                <th className="border border-gray-400 px-4 py-2">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id} className="bg-white">
                                    <td className="border border-gray-400 p-2">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-20 h-20 object-cover mx-auto"
                                        />
                                    </td>
                                    <td className="border text-xl border-gray-400 px-4 py-2">{item.title}</td>
                                    <td className="border border-gray-400 px-4 py-2">
                                        <div className="flex justify-center items-center gap-2">
                                            <button
                                                className="bg-red-500 text-white px-5 text-2xl py-1 rounded"
                                                onClick={() => updateQty(item.id, item.qty - 1)}
                                            >
                                                -
                                            </button>
                                            <span className="w-6 text-xl">{item.qty}</span>
                                            <button
                                                className="bg-blue-500 text-2xl text-white px-5 py-1 rounded"
                                                onClick={() => updateQty(item.id, item.qty + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td className="border border-gray-400 px-4 py-2">${item.price}</td>
                                    <td className="border border-gray-400 px-4 py-2">
                                        ${item.price * item.qty}
                                    </td>
                                    <td className="border border-gray-400 px-4 py-2">
                                        <button
                                            className="bg-red-500 text-white px-3 py-1 rounded"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


                <div className="sm:hidden w-full flex flex-col gap-4">
                    {cart.map((item) => (
                        <div key={item.id} className="bg-white border border-gray-400 rounded-lg p-4 shadow-sm flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
                                <button className="bg-red-500 text-white px-3 py-1 rounded"
                                    onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                            <div>
                                <p className="font-medium">Name: <span className="font-bold">{item.title}</span></p>
                                <p className="font-medium">Price: <span className="font-bold">${item.price}</span></p>
                                <p className="font-medium">Total: <span className="font-bold">${item.price * item.qty}</span></p>
                                <div className="flex justify-start items-center gap-2 mt-2">
                                    <button className="bg-red-500 text-white px-5 py-1 rounded"
                                        onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
                                    <span className="w-6 text-xl">{item.qty}</span>
                                    <button className="bg-blue-500 text-white px-5 py-1 rounded"
                                        onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>





                <div className="my-10">
                    <button className="h-14 w-60 text-2xl font-semibold bg-red-500 text-white rounded-xl"
                        onClick={clearCart}
                    >Clear Cart</button>
                </div>

                <div className="w-full  flex justify-center items-center my-20 ">
                    <div className="border border-gray-400 p-6 rounded-lg shadow-lg bg-gray-50">
                        <h1 className="text-blue-950 text-3xl font-semibold mb-4">
                            Cart Totals
                        </h1>
                        <div className="flex justify-between py-2">
                            <span className="font-medium">Subtotal</span>
                            <span className="font-bold">${subtotal}.00</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="font-medium">Tax</span>
                            <span className="font-bold">$5.00</span>
                        </div>
                        <div className="flex justify-between py-2 border-t border-gray-300 mt-2">
                            <span className="font-medium">Total</span>
                            <span className="font-bold">${subtotal + 5}.00</span>
                        </div>
                        <button className="mt-6 px-10  w-full h-14 text-center bg-green-500 text-white font-bold text-xl rounded-lg hover:bg-green-600 transition"
                        onClick={()=>navigate("/orders")}
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
