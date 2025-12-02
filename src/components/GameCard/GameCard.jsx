// import React, { use } from 'react';
// import { CiStar } from "react-icons/ci";
// import { AuthContext } from '../../contexts/AuthContext/AuthContext';
// import { Link } from 'react-router';

// const GameCard = ({ title, rating, category, developer, image , id}) => {

//     const user = use(AuthContext);

//     return (
//         <div>
//             <div className=" bg-[#e0dcfa]  overflow-hidden shadow-2xl border-4 border-black transform transition-all duration-300 hover:scale-[1.02]  space-mono">
//                 <div className="relative h-48 bg-white">
//                     <img
//                         src={image}
//                         alt={title}
//                         className="w-full h-full object-cover p-1"
//                     />

//                     <div className=" absolute top-3 right-3 bg-[#FFC107] text-gray-900 font-extrabold text-sm px-3 py-1 rounded-md border-2 border-black
//               shadow-[2px_2px_0px_rgba(0,0,0,0.5)] flex items-center gap-1">
//                         <span><CiStar /></span>
//                         <span>{rating}</span>
//                     </div>
//                 </div>

//                 <div className="p-6">

//                     <div className="mb-4 border-b-2 border-[#aac5da] pb-3">
//                         <h1 className="text-xl font-black text-black uppercase tracking-widest leading-tight">
//                             {title}
//                         </h1>
//                         <p className="text-sm text-black mt-1 font-semibold">
//                             {category} | Developed By {developer}
//                         </p>
//                     </div>

//                     {user ? <Link to={`/gamedetails/${id}`}><a href={""} className="w-full inline-block text-center font-extrabold text-lg bg-[#6652e4] text-white py-3 px-6 rounded-lg uppercase transition-all duration-100 ease-in-out hover:bg-[#644eef]]"

//                     >
//                         GAME DETAILS
//                     </a></Link> : <Link to='/login'><a href={""} className="w-full inline-block text-center font-extrabold text-lg bg-[#6652e4] text-white py-3 px-6 rounded-lg uppercase transition-all duration-100 ease-in-out
//               hover:bg-[#644eef]]"

//                     >
//                         GAME DETAILS
//                     </a></Link>}



//                 </div>
//             </div>
//         </div>

//     );
// };

// export default GameCard;

import React, { use } from 'react';
import { CiStar } from "react-icons/ci";
import { FaGamepad } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { Link } from 'react-router';

const GameCard = ({ title, rating, category, developer, image, id, description }) => {
    const user = use(AuthContext);

    const truncatedDescription = description 
        ? description.length > 40 
            ? description.substring(0, 80) + '...' 
            : description
        : 'Experience classic retro gaming at its finest. Jump into action-packed gameplay!';

    return (
        <div className="bg-white border-4 border-black overflow-hidden transform transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0px_black] space-mono flex flex-col h-full">
            <div className="relative h-48 bg-gray-200 overflow-hidden border-b-4 border-black">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />

                <div className="absolute top-3 right-3 bg-[#FFC107] text-black font-bold text-sm px-3 py-1 border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] flex items-center gap-1">
                    <CiStar className="text-lg" />
                    <span>{rating}</span>
                </div>

             
                <div className="absolute top-3 left-3 bg-[#FF6B35] text-white font-bold text-xs px-3 py-1 border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] uppercase">
                    {category}
                </div>
            </div>

          
            <div className="p-4 flex flex-col grow">
                <h3 className="text-lg font-bold text-black uppercase mb-2 line-clamp-2 min-h-14">
                    {title}
                </h3>

                
                <div className="flex items-center gap-2 mb-3 text-xs text-gray-600">
                    <FaGamepad className="text-[#FF6B35]" />
                    <span className="font-semibold">BY {developer}</span>
                </div>

                <p className="text-sm text-gray-600 mb-4 grow line-clamp-3">
                    {truncatedDescription}
                </p>


                <div className="flex items-center gap-2 mb-4">
                    <div className="flex-1 h-0.5 bg-black"></div>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 bg-[#FF6B35] border border-black"></div>
                        <div className="w-2 h-2 bg-[#FFC107] border border-black"></div>
                        <div className="w-2 h-2 bg-[#00D9FF] border border-black"></div>
                    </div>
                    <div className="flex-1 h-0.5 bg-black"></div>
                </div>


                {user ? (
                    <Link to={`/gamedetails/${id}`} className="w-full">
                        <button className="w-full font-bold text-sm bg-black text-white py-3 px-6 border-4 border-black uppercase transition-all duration-200 hover:bg-[#FF6B35] hover:border-[#FF6B35] active:translate-y-1">
                            SEE MORE →
                        </button>
                    </Link>
                ) : (
                    <Link to='/login' className="w-full">
                        <button className="w-full font-bold text-sm bg-black text-white py-3 px-6 border-4 border-black uppercase transition-all duration-200 hover:bg-[#FF6B35] hover:border-[#FF6B35] active:translate-y-1">
                            LOGIN TO VIEW →
                        </button>
                    </Link>
                )}
            </div>

        
            <div className="h-2 bg-linear-to-r from-[#FF6B35] via-[#FFC107] to-[#00D9FF]"></div>
        </div>
    );
};

export default GameCard;