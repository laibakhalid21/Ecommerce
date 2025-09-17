import React, { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setMessage("Please enter a valid email");
      return;
    }
    setMessage("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <div className="bg-blue-950 text-white pt-12">
      <div className="max-w-[800px] mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="text-lg text-gray-300 mb-6">
          Subscribe & get 10% off your first order. Stay updated with the latest offers!
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 rounded-lg text-black focus:outline-none"
          />
          <button
            type="submit"
            className="bg-green-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-green-300 transition duration-200"
          >
            Subscribe
          </button>
        </form>

        {message && <p className="mt-4 text-sm">{message}</p>}
      </div>
    </div>
  );
}

export default Newsletter;
