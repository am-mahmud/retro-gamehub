import React, { useState } from 'react';
import { Link } from 'react-router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

    const [user, setUser] = useState({})

    const handleLogin = (e) => {

        e.preventDefault();
        const email = e.target.email?.value;
        const password = e.target.password?.value;


        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                setUser(userCredential.user);
                // const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                console.log(error);

            });

    };

    console.log(user);


    return (
        <div className="flex justify-center items-center min-h-screen p-4 space-mono">
            <div
                className={`w-full max-w-sm rounded-lg shadow-xl overflow-hidden 
                    bg-[#FFF8E1] 
                    border-black
                    border-[3px]`}
            >


                <div className={`h-8 flex justify-end items-center px-3 bg-[#FFD54F]`}>
                    {/* <span className={`text-2xl font-bold cursor-pointer text-[#444]`}>
                        &times;
                    </span> */}
                </div>

                {user ? "Logged In"  : (<form onSubmit={handleLogin} className="p-6 pt-10 flex flex-col items-center space-y-5">
                    <div className="w-full">
                        <input
                            type="text"
                            placeholder="Email"
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
                        className={`w-36 mt-4 py-2 px-6 text-xl font-bold rounded-md cursor-pointer
                        bg-[#FFC107] 
                        border-[#FFD54F] border-2 
                        text-[#444] 
                        transition duration-150 hover:opacity-80`}
                    >
                        Enter
                    </button>
                </form>)
                }
                <p className="text-center pb-4">
                    Don’t have an account? <Link to='/register' className="text-[#444] underline">Register</Link>
                </p>

            </div>
        </div>
    );
};

export default Login;