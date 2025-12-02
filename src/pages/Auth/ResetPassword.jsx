import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { toast } from 'react-toastify';
import { MdErrorOutline, MdOutlinePassword } from "react-icons/md";
import { Link } from 'react-router';

const ResetPassword = () => {

    const { forgetPassword } = use(AuthContext);

    const handleReset = (e) => {
        e.preventDefault();
        const email = e.target.email.value;

        forgetPassword(email)
            .then(() => {
                toast.info(
                    <div className="flex items-center gap-2">
                        <MdOutlinePassword className="text-black" />
                        <span>Password reset link sent!</span>
                    </div>
                );
                e.target.reset();
            })
            .catch((error) => {
                console.error(error);
                toast.error(
                    <div className="flex items-center gap-2">
                        <MdErrorOutline />
                        <span>Failed to send reset link.</span>
                    </div>
                );
            });
    };

    return (
        <>
            <title>Reset Password - GameHub</title>

            <div className="flex justify-center items-center min-h-screen p-4 bg-white space-mono">
                <div className="w-full max-w-sm border-2 border-black p-4">
                    
                    <div className="text-center mb-8">
                        <h1 className="text-5xl font-black text-black tracking-tight mb-2">
                            GAMEHUB
                        </h1>
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-4 text-black uppercase tracking-wide">
                        Reset Password
                    </h2>

                    <p className="text-center text-sm text-gray-600 mb-8">
                        Enter your email to receive a password reset link
                    </p>

                    <form onSubmit={handleReset} className="space-y-4">
                      
                        <div>
                            <input
                                name="email"
                                type="email"
                                placeholder="EMAIL"
                                className="w-full px-5 py-4 text-sm font-semibold rounded-xl
                                       border-2 border-black bg-white text-black
                                       placeholder:text-gray-400 placeholder:text-xs placeholder:font-bold
                                       focus:outline-none focus:ring-2 focus:ring-black"
                                required
                            />
                        </div>

                    
                        <button
                            type="submit"
                            className="w-full py-4 text-sm font-bold rounded-xl
                                   bg-orange-400 text-white uppercase tracking-wider
                                   hover:bg-[#FF6B35] transition-colors"
                        >
                            Send Reset Link
                        </button>
                    </form>

                  
                    <div className="text-center mt-6">
                        <Link 
                            to='/login' 
                            className="text-gray-500 text-sm hover:text-black transition-colors inline-flex items-center gap-2"
                        >
                            ← Back to Login
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResetPassword;