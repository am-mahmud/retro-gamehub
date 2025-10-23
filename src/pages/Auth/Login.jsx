// import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
// import { auth } from '../../firebase/firebase.config';
// import { toast } from 'react-toastify';
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { SlSocialGoogle } from "react-icons/sl";



const Login = () => {

    // const [user, setUser] = useState({});

    const { logInUser, logInWithGoogle, forgetPassword } = use(AuthContext);

    const [show, setShow] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email?.value;
        const password = e.target.password?.value;

        console.log(email);
        console.log(password);


        logInUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate(location.state || '/')

            })
            .catch(error => {
                console.log(error);

            })
    };

    const handleGoogleLogIn = () => {
        logInWithGoogle()
            .then()
            .catch(error => {
                console.log(error);

            })
    }

    const handleForgetPassword = () => {
        forgetPassword()
            .then()
            .catch(error => {
                console.log(error);

            })

    }




    return (

        <>


            <title>Login - GameHub</title>

            <div className="flex justify-center items-center min-h-screen p-4 space-mono">

                <div
                    className="w-full max-w-sm rounded-lg shadow-xl overflow-hidden 
                    bg-[#FFF8E1] border-black border-[3px]"
                >
                    <div className="h-8 flex justify-end items-center px-3 bg-[#FFD54F]" />

                    <form onSubmit={handleLogin} className="p-6 pt-10 flex flex-col items-center space-y-5">
                        <div className="w-full">
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 text-lg font-bold rounded-md outline-none 
                                       border-black border-2 bg-[#FFF8E1] text-[#444]"
                                required
                            />
                        </div>

                        <div className="relative w-full">
                            <input
                                name="password"
                                type={show ? "text" : "password"}
                                placeholder="xxxxxx"
                                className="w-full p-3 text-lg font-bold rounded-md outline-none 
                                       border-black border-2 bg-[#FFF8E1] text-[#444]"
                                required
                            />
                            <span
                                onClick={() => setShow(!show)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                            >
                                {show ? <GoEye /> : <GoEyeClosed />}
                            </span>
                        </div>

                        <div className="divider divider-neutral">Or</div>



                        <button onClick={handleGoogleLogIn}
                            type="submit"
                            className=" mt-4 py-2 px-6 text-base md:text-xl font-bold rounded-md cursor-pointer
                                   bg-[#FFC107] border-[#FFD54F] border-2 text-[#444]
                                   transition duration-150 hover:opacity-80 flex items-center gap-2 md:gap-4"
                        ><span><SlSocialGoogle /></span>
                            Login With Google
                        </button>



                        <Link to='/resetpassword' onClick={handleForgetPassword} className="text-[#444] underline text-sm">Forget password?</Link>


                        <button
                            type="submit"
                            className="w-36 mt-4 py-2 px-6 text-base md:text-xl font-bold rounded-md cursor-pointer
                                   bg-[#FFC107] border-[#FFD54F] border-2 text-[#444]
                                   transition duration-150 hover:opacity-80"
                        >
                            Enter
                        </button>
                    </form>

                    <p className="text-center pb-4 text-[#444] text-sm">
                        Don’t have an account? <Link to='/register' className="underline">Register</Link>
                    </p>
                </div>
            </div>

        </>

    );
};
export default Login;