import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router';
import { auth } from '../../firebase/firebase.config';
import { toast } from 'react-toastify';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';


const Login = () => {

    // const [user, setUser] = useState({});

    const [show, setShow] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email?.value;
        const password = e.target.password?.value;

        console.log(email);
        console.log(password);


        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res);
                toast.success("Sign In Success")
            }).catch(e => {
                console.log(e);
                toast.error(e.message)

            })


        // const auth = getAuth(); 
        // signInWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
        //         setUser(userCredential.user);
        //         console.log('Login successful!');
        //     })
        //     .catch((error) => {
        //         console.error('Login failed:', error.message);
        //     });
    };

    // console.log(user);

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

                    <div className="w-full">
                        <input
                            name="password"
                            type={show ? "text" : "password"}
                            placeholder="Password"
                            className="w-full p-3 text-lg font-bold rounded-md outline-none 
                                       border-black border-2 bg-[#FFF8E1] text-[#444]"
                            required
                        />
                        <span
                            onClick={() => setShow(!show)}
                            className="absolute right-[8px] top-[36px] cursor-pointer z-50"
                        >
                            {show ? <FaEye /> : <IoEyeOff />}
                        </span>
                    </div>

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