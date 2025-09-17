import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

function Sign({ onSwitch }) {
    const navigate = useNavigate();
    const userDetail = {
        name: "",
        email: "",
        password: ""
    }
    const [data, setData] = useState(userDetail);
    const [error, seterror] = useState(false);






    const handleinput = (e) => {
        const val = e.target.value
        const name = e.target.name
        setData({ ...data, [name]: val })
    }
    console.log(data)

    const HandleSubmit = (e) => {
        e.preventDefault();
        if (data.name == "" || data.email == "" || data.password == "") {
            seterror({ msg: "Please enter Details completely!", type: "failed" })


        } else {
            seterror({ msg: "Signup Successfully", type: "success" })
            setTimeout(() => {
                onSwitch()
            }, 2000);
        }
        const getData = JSON.parse(localStorage.getItem("user") || "[]")
        let arr = []
        arr = [...getData]
        arr.push(data);

        localStorage.setItem("user", JSON.stringify(arr));

    }



    return (
        <>

            <div className="flex my-40 items-center justify-center">
                <div className="mx-auto bg-white/80 md:w-[450px] w-96 shadow-2xl rounded-lg">
                    <form onSubmit={HandleSubmit}>
                        <div>
                            <p className="text-4xl font-semibold text-center pt-10 pb-10 ">Sign Up</p>
                        </div>

                        <div className="flex flex-col mx-10">
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your Name"
                                className="border border-gray-400 h-10 w-full px-4 my-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                onChange={handleinput}
                                value={data.name}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your Email"
                                className="border border-gray-400 h-10 w-full px-4 my-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                onChange={handleinput}
                                value={data.email}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your Password"
                                className="border border-gray-400 h-10 w-full px-4 mt-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                onChange={handleinput}
                                value={data.password}
                            />

                            <p className="mt-2 text-sm">
                                Already Have an account?{" "}
                                <span
                                    onClick={onSwitch}
                                    className="underline text-blue-700 font-semibold cursor-pointer">
                                    Login
                                </span>
                            </p>
                        </div>


                        {error && (
                            <p
                                className={`font-bold text-center pt-5 ${error.type === "success" ? "text-green-600" : "text-red-600"
                                    }`}
                            >
                                {error.msg}
                            </p>
                        )}


                        <div className="text-center">
                            <button className="bg-green-600 hover:bg-green-700 transition text-white rounded-md h-12 w-40 text-lg font-semibold my-10">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>

                {/* <div className="flex justify-center my-10 md:my-0">
          <img
            src="remote2.png"
            alt="Sign Up Visual"
            className="max-w-full h-auto object-contain w-80 sm:w-96 lg:w-[500px]"
          />
        </div> */}
            </div>

        </>
    );
}

export default Sign;
