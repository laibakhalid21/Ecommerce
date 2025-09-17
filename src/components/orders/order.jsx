import React, { useState } from "react";
import { useCartStore } from "../CartContext/cartContext"; 

function Orders() {
  const cart = useCartStore((state) => state.cart);
   const clearCart = useCartStore((state) => state.clearCart);


  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    country: "United States (US)",
    address: "",
    city: "",
    state: "California",
    zip: "",
  });

  const [errors, setErrors] = useState({}); 
  const [message, setMessage] = useState(""); 
  const [msgType, setMsgType] = useState(""); 

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email";

    if (!form.firstName) newErrors.firstName = "First Name is required";
    if (!form.lastName) newErrors.lastName = "Last Name is required";
    if (!form.address) newErrors.address = "Address is required";
    if (!form.city) newErrors.city = "City is required";
    if (!form.zip) newErrors.zip = "Zip Code is required";

    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setMessage("Please fill in all required fields correctly.");
      setMsgType("error");
      return;
    }

    if (cart.length === 0) {
      setMessage("Your cart is empty!");
      setMsgType("error");
      return;
    }

    const orderDetails = {
      customer: form,
      items: cart,
      subtotal,
      total: subtotal,
    };
clearCart();
    setMessage("Order Placed Successfully!");
    setMsgType("success");

    setForm({
      email: "",
      firstName: "",
      lastName: "",
      country: "United States (US)",
      address: "",
      city: "",
      state: "California",
      zip: "",
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <h1 className="text-5xl text-blue-950 font-bold">Order Details</h1>

        {message && (
          <div
            className={`p-3 rounded-lg text-sm ${
              msgType === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className={`w-full border rounded-lg p-2 ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">Billing Details</h2>

          <div className="flex gap-3">
            <div className="w-1/2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                value={form.firstName}
                onChange={handleChange}
                className={`w-full border rounded-lg p-2 ${
                  errors.firstName ? "border-red-500" : ""
                }`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div className="w-1/2">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                value={form.lastName}
                onChange={handleChange}
                className={`w-full border rounded-lg p-2 ${
                  errors.lastName ? "border-red-500" : ""
                }`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
          </div>

          <input
            type="text"
            name="country"
            value={form.country}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />

          <input
            type="text"
            name="address"
            placeholder="House Number and Street Name*"
            value={form.address}
            onChange={handleChange}
            className={`w-full border rounded-lg p-2 ${
              errors.address ? "border-red-500" : ""
            }`}
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}

          <div className="flex gap-3">
            <div className="w-1/3">
              <input
                type="text"
                name="city"
                placeholder="Town/City*"
                value={form.city}
                onChange={handleChange}
                className={`w-full border rounded-lg p-2 ${
                  errors.city ? "border-red-500" : ""
                }`}
              />
              {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
            </div>

            <div className="w-1/3">
              <input
                type="text"
                name="state"
                value={form.state}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              />
            </div>

            <div className="w-1/3">
              <input
                type="number"
                name="zip"
                placeholder="Zip Code*"
                value={form.zip}
                onChange={handleChange}
                className={`w-full border rounded-lg p-2 ${
                  errors.zip ? "border-red-500" : ""
                }`}
              />
              {errors.zip && <p className="text-red-500 text-sm">{errors.zip}</p>}
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-6 shadow-md space-y-3">
        <h2 className="text-2xl font-semibold">Your Order</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex justify-between">
              <p>
                {item.title} x {item.qty}
              </p>
              <p>${(item.price * item.qty).toLocaleString()}</p>
            </div>
          ))
        )}

        <hr />
        <div className="flex justify-between font-semibold">
          <p>Subtotal</p>
          <p>${subtotal.toLocaleString()}</p>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <p>Total</p>
          <p>${subtotal.toLocaleString()}</p>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full font-bold mt-4 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Orders;
