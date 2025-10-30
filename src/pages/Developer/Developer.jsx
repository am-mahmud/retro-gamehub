import React from 'react';

import { RiUpload2Fill } from "react-icons/ri";

const Developer = () => {
    return (
        <div>
           
                <title>Developer - GameHub</title>
          

            <h1 className='text-3xl font-bold space-mono text-center mt-2'>Retro Game Developer?</h1>
            <div className='border-4 mt-4 mb-6 border-black min-h-screen flex items-center justify-center text-xl space-mono'>

                <button
                    type="submit"
                    className="py-4 px-6 text-base md:text-xl font-bold rounded-md cursor-pointer
                   bg-[#FFC107] border-[#FFD54F] border-2 text-[#444]
                   transition duration-150 hover:opacity-80 flex items-center gap-2 md:gap-4"
                >
                    <span><RiUpload2Fill /></span>
                    Upload Game
                </button>

            </div>



        </div>
    );
};

export default Developer;