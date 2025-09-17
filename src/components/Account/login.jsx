import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

function Login({ onSwitch }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [msg, setmsg] = useState(false);
    const [msgType, setMsgType] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        if (email == "" || password == "") {
            setmsg("Please enter Details completely!")
            setMsgType("error");
            return;
        }
        else {
            let getDetails = JSON.parse(localStorage.getItem("user") || "[]");

            const user = getDetails.find(
                (curr) => curr.email === email && curr.password === password
            );

            if (user) {
                setmsg("Login Successfully!");
                setMsgType("success");
                setTimeout(() => {
                    navigate("/Home");
                }, 1000);
            } else {
                setmsg("Login failed!");
                setMsgType("error");
            }
        }

    }




    const handleInput = (e) => {

        const val = e.target.value
        const name = e.target.name

        if ("email" === name) {
            setEmail(val)
        }
        if ("password" === name) {
            setpassword(val)
        }

    }


    return (
        <>

            <div className="flex my-40 items-center justify-center">
                <div className="mx-auto bg-white/80 md:w-[450px] w-96 shadow-2xl rounded-lg">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <p className="text-4xl font-semibold text-center pt-10 pb-10 ">Login</p>
                        </div>

                        <div className="flex flex-col mx-10">
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your Email"
                                className="border border-gray-400 h-10 w-full px-4 my-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                onChange={handleInput}
                                value={email}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your Password"
                                className="border border-gray-400 h-10 w-full px-4 mt-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                onChange={handleInput}
                                value={password}

                            />

                            <p className="mt-2 text-sm">
                                Dont't Have an account?{" "}
                                <span
                                    onClick={onSwitch}
                                    className="underline text-blue-700 font-semibold cursor-pointer">
                                    Sign Up
                                </span>
                            </p>
                        </div>


                        {msg && (
                            <p
                                className={`text-center pt-4 font-bold ${msgType === "success" ? "text-green-600" : "text-red-500"
                                    }`}
                            >
                                {msg}
                            </p>
                        )}                        <div className="text-center">
                            <button className="bg-green-600 hover:bg-green-700 transition text-white rounded-md h-12 w-40 text-lg font-semibold my-10">
                                Login
                            </button>
                        </div>
                    </form>
                </div>

                {/* <div className="flex justify-center my-10 md:my-0">
                    <img
                        src="remote3.png"
                        alt="Sign Up Visual"
                        className="max-w-full h-auto object-contain w-80 sm:w-96 lg:w-[500px]"
                    />
                </div> */}
            </div>
        </>
    )
}
export default Login