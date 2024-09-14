import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const usernameRef = useRef();

    const handleSignUp = (e) => {
        e.preventDefault();
        const newUser = { username, password };
        localStorage.setItem("user", JSON.stringify(newUser));
        alert("Sign up successful!");
        navigate("/");
    };

    useEffect(() => {
        if (usernameRef.current) {
            usernameRef.current.focus();
        }
    }, [usernameRef]);

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center max-w-xs">
            <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
            <form
                onSubmit={handleSignUp}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                    >
                        Username
                    </label>
                    <input
                        ref={usernameRef}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="username"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sign Up
                    </button>
                    <Link
                        className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800"
                        to="/"
                    >
                        Login
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
