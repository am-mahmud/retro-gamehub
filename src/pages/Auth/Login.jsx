import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { GoEye, GoEyeClosed } from "react-icons/go";
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { FaGamepad, FaGoogle, FaApple } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";


const Login = () => {
    const { logInUser, logInWithGoogle } = use(AuthContext);
    const [show, setShow] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email?.value;
        const password = e.target.password?.value;

        logInUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                toast(<div className="flex items-center gap-2">
                    <FaGamepad className="text-[#FF6B35]" />
                    <span>Welcome back, gamer!</span>
                </div>);
                navigate(location.state || '/');
            })
            .catch(error => {
                console.error(error);
                toast(<div className="flex items-center gap-2">
                    <MdErrorOutline />
                    <span>Invalid email or password!</span>
                </div>);
            });
    };

    const handleGoogleLogIn = () => {
        logInWithGoogle()
            .then(() => {
                toast(<div className="flex items-center gap-2">
                    <FaGamepad className="text-[#FF6B35]" />
                    <span>Logged in with Google successfully!</span>
                </div>);
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                toast(<div className="flex items-center gap-2">
                    <MdErrorOutline />
                    <span>Google login failed!</span>
                </div>);
            });
    }

    return (
        <>
            <title>Login - GameHub</title>

            <div className="flex justify-center items-center min-h-screen p-4 bg-white space-mono dark:bg-gray-900 transition-colors">
                <div className="w-full max-w-sm border-2 border-black dark:border-cyan-400 p-4 bg-white dark:bg-gray-800 transition-colors">
               
                    <div className="text-center mb-8">
                        <h1 className="text-5xl font-black text-black dark:text-white tracking-tight mb-2">
                            GAMEHUB
                        </h1>
                       
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-8 text-black dark:text-white uppercase tracking-wide">
                        Welcome Back
                    </h2>

                    <form onSubmit={handleLogin} className="space-y-4">
                      
                        <div>
                            <input
                                name="email"
                                type="email"
                                placeholder="USERNAME"
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
                                       border-2 border-black bg-white text-black
                                       placeholder:text-gray-400 placeholder:text-xs placeholder:font-bold
                                       focus:outline-none focus:ring-2 focus:ring-black"
                                required
                            />
                            <span
                                onClick={() => setShow(!show)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 hover:text-black"
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
                            Login
                        </button>

                  
                        <div className="text-center">
                            <Link 
                                to='/resetpassword' 
                                className="text-gray-500 text-xs hover:text-black transition-colors"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                    </form>

                  
                    <div className="flex items-center my-6">
                        <div className="flex-1 h-px bg-orange-400"></div>
                        <span className="px-4 text-gray-500 text-sm font-medium">or</span>
                        <div className="flex-1 h-px bg-orange-400"></div>
                    </div>

                    <p className="text-center text-sm font-semibold text-black mb-4">
                        Login Using
                    </p>

                    <div className="flex justify-center gap-4 mb-8">
                        <button
                            onClick={handleGoogleLogIn}
                            type="button"
                            className="w-full h-14 flex items-center justify-center rounded-2xl
                                   bg-white border-2 border-orange-400 hover:border-black
                                   transition-all hover:scale-105"
                        >
                            <FaGoogle className="text-xl text-black" />
                        </button>

                    </div>

                   
                    <p className="text-center text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Link to='/register' className="text-black font-bold hover:underline">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;