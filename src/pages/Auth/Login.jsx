// import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { use, useState } from 'react';
import { Link } from 'react-router';
// import { auth } from '../../firebase/firebase.config';
// import { toast } from 'react-toastify';
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { AuthContext } from '../../contexts/AuthContext/AuthContext';


const Login = () => {

    // const [user, setUser] = useState({});

    const { logInUser } = use(AuthContext);

    const [show, setShow] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email?.value;
        const password = e.target.password?.value;

        console.log(email);
        console.log(password);


        logInUser(email, password)
            .then(result => {
                console.log(result.user);

            })
            .catch(error => {
                console.log(error);

            })


        // signInWithEmailAndPassword(auth, email, password)
        //     .then(res => {
        //         console.log(res);
        //         toast.success("Sign In Success")
        //     }).catch(e => {
        //         console.log(e);
        //         toast.error(e.message)

        //     })

    };



    return (
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


                    <Link to='/resetpassword' className="text-[#444] underline">Forget password?</Link>


                    <button
                        type="submit"
                        className="w-36 mt-4 py-2 px-6 text-xl font-bold rounded-md cursor-pointer
                                   bg-[#FFC107] border-[#FFD54F] border-2 text-[#444]
                                   transition duration-150 hover:opacity-80"
                    >
                        Enter
                    </button>
                </form>

                <p className="text-center pb-4">
                    Don’t have an account? <Link to='/register' className="text-[#444] underline">Register</Link>
                </p>
            </div>
        </div>
    );
};
export default Login;