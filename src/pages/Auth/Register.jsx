import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { GoEye, GoEyeClosed } from "react-icons/go";
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { FaGamepad, FaGoogle } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";

const Register = () => {
    const [show, setShow] = useState(false);
    const { createUser, logInWithGoogle } = use(AuthContext);
    const navigate = useNavigate();

    const handleGoogleLogIn = () => {
        logInWithGoogle()
            .then(() => {
                toast.success(<div className="flex items-center gap-2">
                    <FaGamepad className="text-[#FF6B35]" />
                    <span>Logged in with Google successfully!</span>
                </div>, {
                    className: "bg-blue-500 text-white font-semibold rounded-lg shadow-lg",
                    progressClassName: "bg-white",
                });
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                toast.error(<div className="flex items-center gap-2">
                    <MdErrorOutline />
                    <span>Google login failed!</span>
                </div>, {
                    className: "bg-red-500 text-white font-semibold rounded-lg shadow-lg",
                    progressClassName: "bg-white",
                });
            });
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email?.value;
        const password = e.target.password?.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(password)) {
            if (password.length < 6) {
                toast(<div className="flex items-center gap-2">
                    <MdErrorOutline />
                    <span>Password must be at least 6 characters long.</span>
                </div>);
            } 
            else if (!/[A-Z]/.test(password)) {
                toast(<div className="flex items-center gap-2">
                    <MdErrorOutline />
                    <span>Password must contain at least one uppercase letter.</span>
                </div>);
            } 
            else if (!/[a-z]/.test(password)) {
                toast(<div className="flex items-center gap-2">
                    <MdErrorOutline />
                    <span>Password must contain at least one lowercase letter.</span>
                </div>);
            }
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast(<div className="flex items-center gap-2">
                    <FaGamepad className="text-[#FF6B35]" />
                    <span>Welcome to Gamehub, gamer!</span>
                </div>);
                e.target.reset();
                navigate('/');
            })
            .catch(error => {
                toast(<div className="flex items-center gap-2">
                    <MdErrorOutline />
                    <span>Try Again.</span>
                </div>);
            });
    };

    return (
        <>
            <title>Register - GameHub</title>

            <div className="flex justify-center items-center min-h-screen p-4 bg-white dark:bg-gray-900 space-mono transition-colors">
                <div className="w-full max-w-sm border-2 border-black dark:border-cyan-400 p-4 bg-white dark:bg-gray-800 transition-colors">
                    
                    <div className="text-center mb-8">
                        <h1 className="text-5xl font-black text-black dark:text-white tracking-tight mb-2">
                            GAMEHUB
                        </h1>
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-8 text-black dark:text-white uppercase tracking-wide">
                        Create Account
                    </h2>

                    <form onSubmit={handleRegister} className="space-y-4">
                        
                      
                        <div>
                            <input
                                name="name"
                                type="text"
                                placeholder="FULL NAME"
                                className="w-full px-5 py-4 text-sm font-semibold rounded-xl
                                       border-2 border-black dark:border-cyan-400 
                                       bg-white dark:bg-gray-700 
                                       text-black dark:text-white
                                       placeholder:text-gray-400 dark:placeholder:text-gray-500 
                                       placeholder:text-xs placeholder:font-bold
                                       focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-cyan-400"
                                required
                            />
                        </div>

                     
                        <div>
                            <input
                                name="email"
                                type="email"
                                placeholder="EMAIL"
                                className="w-full px-5 py-4 text-sm font-semibold rounded-xl
                                       border-2 border-black dark:border-cyan-400 
                                       bg-white dark:bg-gray-700 
                                       text-black dark:text-white
                                       placeholder:text-gray-400 dark:placeholder:text-gray-500 
                                       placeholder:text-xs placeholder:font-bold
                                       focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-cyan-400"
                                required
                            />
                        </div>

                    
                        <div className="relative">
                            <input
                                name="password"
                                type={show ? "text" : "password"}
                                placeholder="PASSWORD"
                                className="w-full px-5 py-4 text-sm font-semibold rounded-xl
                                       border-2 border-black dark:border-cyan-400 
                                       bg-white dark:bg-gray-700 
                                       text-black dark:text-white
                                       placeholder:text-gray-400 dark:placeholder:text-gray-500 
                                       placeholder:text-xs placeholder:font-bold
                                       focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-cyan-400"
                                required
                            />
                            <span
                                onClick={() => setShow(!show)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                            >
                                {show ? <GoEye size={18} /> : <GoEyeClosed size={18} />}
                            </span>
                        </div>

                      
                        <button
                            type="submit"
                            className="w-full py-4 text-sm font-bold rounded-xl
                                   bg-orange-400 text-white uppercase tracking-wider
                                   hover:bg-[#FF6B35] transition-colors"
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="flex items-center my-6">
                        <div className="flex-1 h-px bg-orange-400 dark:bg-cyan-400"></div>
                        <span className="px-4 text-gray-500 dark:text-gray-400 text-sm font-medium">or</span>
                        <div className="flex-1 h-px bg-orange-400 dark:bg-cyan-400"></div>
                    </div>

                
                    <p className="text-center text-sm font-semibold text-black dark:text-white mb-4">
                        Sign Up Using
                    </p>

                  
                    <div className="flex justify-center gap-4 mb-8">
                        <button
                            onClick={handleGoogleLogIn}
                            type="button"
                            className="w-full h-14 flex items-center justify-center rounded-2xl
                                   bg-white dark:bg-gray-700 
                                   border-2 border-orange-400 dark:border-cyan-400 
                                   hover:border-black dark:hover:border-white
                                   transition-all hover:scale-105"
                        >
                            <FaGoogle className="text-xl text-black dark:text-white" />
                        </button>
                    </div>

                    
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                        Already have an account?{" "}
                        <Link to='/login' className="text-black dark:text-white font-bold hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Register;