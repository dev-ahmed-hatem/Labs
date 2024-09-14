import React, { useEffect, useState } from "react";
import Products from "./components/Products";
import { Link, useNavigate } from "react-router-dom";
import MouseTracker from "./components/MouseTracker";
import WidthTracker from "./components/WidthTracker";
import Comments from "./components/Comments";

const Main = () => {
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser) {
            setUserData(storedUser);
        } else {
            navigate("/login");
        }
    }, []);
    return (
        <div className="py-8 px-6">
            <div className="font-bold text-xl mb-4 flex justify-end">
                <div>
                    Welcome:{" "}
                    <span className="text-blue-600 ms-2">
                        {userData?.username}
                    </span>{" "}
                    ,
                </div>
                <Link to={"/logout"} className="ms-6 text-red-600">
                    {" "}
                    Logout
                </Link>
            </div>
            <Products />
            <hr className="my-10" />
            <MouseTracker />
            <WidthTracker />
            <hr className="my-10" />
            <Comments />
        </div>
    );
};

export default Main;
