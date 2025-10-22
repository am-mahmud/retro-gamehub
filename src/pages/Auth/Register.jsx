import React from 'react';
import { Link } from 'react-router';

const Register = () => {

    const handleSignUp = (e) => {
        e.preventDefault();
        console.log('Sign Up attempt...');
        
    };

    return (
        <div className="flex justify-center items-center min-h-screen p-4">
    
      <div 
        className={`w-full max-w-sm rounded-lg shadow-xl overflow-hidden 
                    bg-[#FFF8E1] 
                    border-black
                    border-[3px]`} 
      >
        
        
        <div className={`h-8 flex justify-end items-center px-3 bg-[#FFD54F]`}>
         
          {/* <span className={`text-2xl cursor-pointer text-[#444]`}>
            &times;
          </span> */}
        </div>
        

        <form onSubmit={handleSignUp} className="p-6 pt-10 flex flex-col items-center space-y-4">
          
     
          {/* <div className="w-full">
            <input 
              type="text" 
              placeholder="username" 
              className={`w-full p-3 text-lg font-bold rounded-md outline-none 
                          border-black border-2 
                          bg-[#FFF8E1] text-[#444]`}
              required
            />
          </div> */}

          <div className="w-full">
            <input 
              type="email" 
              placeholder="email" 
              className={`w-full p-3 text-lg font-bold rounded-md outline-none 
                           border-black border-2 
                          bg-[#FFF8E1] text-[#444]`}
              required
            />
          </div>
          
     
          <div className="w-full">
            <input 
              type="password" 
              placeholder="xxxxxx" 
              className={`w-full p-3 text-lg font-bold rounded-md outline-none 
                          border-black border-2 
                          bg-[#FFF8E1] text-[#444]`}
              required
            />
          </div>

      
          {/* <div className="w-full">
            <input 
              type="password" 
              placeholder="xxxxxx" 
              className={`w-full p-3 text-lg font-bold rounded-md outline-none 
                          border-black border-2 
                          bg-[#FFF8E1] text-[#444]`}
              required
            />
          </div> */}

         
          <button 
            type="submit" 
            className={`w-48 mt-6 py-2 px-6 text-xl font-bold rounded-md cursor-pointer 
                        bg-[#FFC107] 
                        border-[#FFD54F] border-2 
                        text-[#444] 
                        transition duration-150 hover:opacity-80`}
          >
            Get In
          </button>

          <p className="text-center pb-4">
                    Already have an account? <Link to='/login' className="text-[#444] underline">Login</Link>
                </p>
          
        </form>
      </div>
    </div>
    );
};

export default Register;