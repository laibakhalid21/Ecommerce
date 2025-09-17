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

  function handleChange(event) {
  const name = event.target.name;   
  const value = event.target.value;  

  const updatedForm = {
    ...form,     
    [name]: value 
  };
  setForm(updatedForm);


  if (errors[name]) {
    const updatedErrors = { ...errors }; 
    updatedErrors[name] = "";           
    setErrors(updatedErrors);           
  }
}


  const validateForm = () => {
    const newErrors = {};
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

  const billingFields = [
    { name: "email", placeholder: "Email Address*", required: true, col: "w-full", type: "email" },
    { name: "firstName", placeholder: "First Name*", required: true, col: "w-1/2" },
    { name: "lastName", placeholder: "Last Name*", required: true, col: "w-1/2" },
    { name: "country", placeholder: "Country", col: "w-full" },
    { name: "address", placeholder: "House Number and Street Name*", required: true, col: "w-full" },
    { name: "city", placeholder: "Town/City*", required: true, col: "w-1/3" },
    { name: "state", placeholder: "State", col: "w-1/3" },
    { name: "zip", placeholder: "Zip Code*", required: true, type: "number", col: "w-1/3" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <h1 className="text-5xl text-blue-950 font-bold">Order Details</h1>

        {message && (
          <div
            className={`p-3 rounded-lg text-sm ${msgType === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
              }`}
          >
            {message}
          </div>
        )}

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">Contact & Billing Details</h2>

          <div className="flex flex-wrap gap-3">
            {billingFields.map((field) => (
              <div key={field.name} className={field.col}>
                <input
                  type={field.type || "text"}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={form[field.name]}
                  onChange={handleChange}
                  className={`w-full border rounded-lg p-2 ${errors[field.name] ? "border-red-500" : ""
                    }`}
                />
                {errors[field.name] && (
                  <p className="text-red-500 text-sm">{errors[field.name]}</p>
                )}
              </div>
            ))}
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
