import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router';
import { auth } from '../../firebase/firebase.config';



const Register = () => {

  const handleSignUp = (e) => {
    e.preventDefault();

    const email = e.target.email?.value;
    const password = e.target.password?.value;

    console.log("Sign up clicked", { email, password });

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      alert("Password must contain at least 8 characters, including uppercase, lowercase, number, and special character.");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // Signed up 
        console.log(res.user);
        
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;

        console.log(error);
        
        // ..
      });
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

        </div>


        <form onSubmit={handleSignUp} className="p-6 pt-10 flex flex-col items-center space-y-4">

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