// import React, { use } from "react";
// // import { useNavigate } from "react-router";
// import { AuthContext } from "../../contexts/AuthContext/AuthContext";
// import { Link } from "react-router";

// const MyProfile = () => {
//     const { user } = use(AuthContext);

//     return (
//         <>
//             <title>User Profile - Gamehub</title>
//             <div className="flex flex-col md:flex-row mt-20 gap-5 border-4 border-black p-10 space-mono">
//                 <img
//                     src={user?.photoURL || "https://i.ibb.co.com/chgmm5K6/retro-game-9.jpg"}
//                     alt="Profile"
//                     className="w-44 h-44  border-4 border-black"
//                 />
//                 <div>
//                     <h2 className="text-xl ">Name: {user?.displayName}</h2>
//                     <p className="text-gray-700  text-xl">Email: {user?.email}</p>

//                     <Link to='/updateprofile'>
//                         <button
//                             className="mt-4 py-2 px-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded shadow transition"
//                         >
//                             Update Information
//                         </button>
//                     </Link>
//                 </div>
//             </div>



//         </>
//     );
// };

// export default MyProfile;


import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { Link } from "react-router";

const MyProfile = () => {
    const { user } = use(AuthContext);

    return (
        <>
            <title>User Profile - Gamehub</title>

            <div className="min-h-screen bg-white py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold space-mono mb-2">
                            MY PROFILE
                        </h1>
                        <div className="flex items-center gap-2 justify-center">
                            <p className="text-orange-400 text-2xl"> | </p>
                            <p className="text-gray-600 space-mono">Manage your account</p>
                        </div>
                    </div>

                    {/* Profile Card */}
                    <div className="border-4 border-black bg-white shadow-[8px_8px_0px_rgba(0,0,0,1)] p-8 md:p-12">
                        
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            
                            {/* Profile Picture */}
                            <div className="flex-shrink-0">
                                <div className="relative">
                                    <img
                                        src={user?.photoURL || "https://i.ibb.co.com/chgmm5K6/retro-game-9.jpg"}
                                        alt="Profile"
                                        className="w-40 h-40 md:w-48 md:h-48 object-cover border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                                    />
                                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-orange-400 border-4 border-black flex items-center justify-center text-2xl">
                                        🎮
                                    </div>
                                </div>
                            </div>

                            {/* Profile Info */}
                            <div className="flex-grow space-y-6">
                                
                                {/* Name */}
                                <div className="border-2 border-black p-4 bg-white">
                                    <label className="text-xs font-bold space-mono text-gray-500 mb-1 block uppercase tracking-wider">
                                        Player Name
                                    </label>
                                    <p className="text-xl font-bold space-mono">
                                        {user?.displayName || "Anonymous Gamer"}
                                    </p>
                                </div>

                                {/* Email */}
                                <div className="border-2 border-black p-4 bg-white">
                                    <label className="text-xs font-bold space-mono text-gray-500 mb-1 block uppercase tracking-wider">
                                        Email Address
                                    </label>
                                    <p className="text-xl font-bold space-mono break-all">
                                        {user?.email}
                                    </p>
                                </div>

                                {/* Account Status */}
                                <div className="border-2 border-black p-4 bg-orange-400">
                                    <label className="text-xs font-bold space-mono text-black mb-1 block uppercase tracking-wider">
                                        Account Status
                                    </label>
                                    <p className="text-lg font-bold space-mono flex items-center gap-2">
                                        <span className="text-2xl">✓</span> Active Player
                                    </p>
                                </div>

                                {/* Update Button */}
                                <Link to='/updateprofile'>
                                    <button
                                        className="w-full md:w-auto px-8 py-4 bg-black text-white font-bold border-4 border-black 
                                               hover:translate-x-[-4px] hover:translate-y-[-4px] 
                                               hover:shadow-[4px_4px_0px_black] transition-all space-mono uppercase tracking-wider"
                                    >
                                        Update Profile →
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section (Optional) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        
                        <div className="border-4 border-black p-6 bg-white text-center hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] transition-all">
                            <div className="text-4xl mb-2">🏆</div>
                            <p className="text-2xl font-bold space-mono mb-1">0</p>
                            <p className="text-sm text-gray-600 space-mono">Games Played</p>
                        </div>

                        <div className="border-4 border-black p-6 bg-orange-400 text-center hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] transition-all">
                            <div className="text-4xl mb-2">⭐</div>
                            <p className="text-2xl font-bold space-mono mb-1">0</p>
                            <p className="text-sm text-gray-900 space-mono">Favorites</p>
                        </div>

                        <div className="border-4 border-black p-6 bg-[#00D9FF] text-center hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] transition-all">
                            <div className="text-4xl mb-2">💬</div>
                            <p className="text-2xl font-bold space-mono mb-1">0</p>
                            <p className="text-sm text-gray-900 space-mono">Reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyProfile;