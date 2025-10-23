import React, { use } from "react";
// import { useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { Link } from "react-router";

const MyProfile = () => {
    const { user } = use(AuthContext);

    return (
        <div className="flex flex-col items-center mt-20 space-y-6 border-4 border-black p-10">
            <img
                src={user?.photoURL || "https://i.ibb.co.com/B2gsXb00/retro-game-2.jpg"}
                alt="Profile"
                className="w-32 h-32  border-4 border-black"
            />
            <h2 className="text-xl font-bold">Name: {user?.displayName}</h2>
            <p className="text-gray-700 font-semibold text-xl">Email: {user?.email}</p>

            <Link to='/updateprofile'>
                <button
                    className="mt-4 py-2 px-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded shadow transition"
                >
                    Update Information
                </button>
            </Link>
        </div>
    );
};

export default MyProfile;
