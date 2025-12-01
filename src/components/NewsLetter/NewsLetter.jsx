import React, { useState } from "react";
import { FaGamepad } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { toast } from 'react-toastify';

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();

        const email = e.target.email?.value;

        if (email.trim() === "") {
            toast.error(<div className="flex items-center gap-2">
                <MdErrorOutline />
                <span>Invalid email or password!</span>
            </div>);
            return;
        }

        toast(<div className="flex items-center gap-2">
            <FaGamepad className="text-orange-300" />
            <span>You will get your Knowledge!</span>
        </div>);

        setEmail("");
    };

    return (
        <section className=" text-black py-12 px-4 space-mono border-4 border-black mt-10 mb-10">
            <div className="max-w-md mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="mb-6">Grow Your Games Knowledge</p>

                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 justify-center">
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
                    <button
                        type="submit"
                        className="bg-orange-400 text-black font-bold px-6 py-3  hover:bg-orange-500 transition"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
