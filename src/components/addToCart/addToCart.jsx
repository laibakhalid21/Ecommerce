import React from "react";
import { useCartStore } from "../CartContext/cartContext";

function AddToCartBtn({ product, setmsg }) {

    const addToCart = useCartStore((state) => state.addToCart);

    const handleClick = (e, productId) => {
        e.preventDefault();
        e.stopPropagation();
        setmsg(`Product with id ${productId} has been added!`);
        setTimeout(() => setmsg(false), 3000);
    };
    const handleAdd = (product) => {
        addToCart(product);
    };
    return (
        <>
            <button
                className="bg-blue-950 h-10 w-full font-semibold transition duration-200 ease-in-out text-white rounded hover:bg-white hover:text-black border hover:border-black"
                onClick={(e) => {
                    handleClick(e,product.id);
                    handleAdd(product);
                }}
            >
                Add to Cart
            </button>
        </>
    )
}
export default AddToCartBtn;