import React, { use } from "react";
// import { useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { Link } from "react-router";

const MyProfile = () => {
    const { user } = use(AuthContext);

    return (
        <>

            <div className="flex flex-col md:flex-row mt-20 gap-5 border-4 border-black p-10 space-mono">
                <img
                    src={user?.photoURL || "https://i.ibb.co.com/chgmm5K6/retro-game-9.jpg"}
                    alt="Profile"
                    className="w-44 h-44  border-4 border-black"
                />
                <div>
                    <h2 className="text-xl ">Name: {user?.displayName}</h2>
                    <p className="text-gray-700  text-xl">Email: {user?.email}</p>

                    <Link to='/updateprofile'>
                        <button
                            className="mt-4 py-2 px-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded shadow transition"
                        >
                            Update Information
                        </button>
                    </Link>
                </div>
            </div>



        </>
    );
};

export default MyProfile;
