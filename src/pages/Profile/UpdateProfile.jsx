// src/pages/UpdateProfile.jsx
import React, { useState, useEffect, use } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { toast } from "react-toastify";

import { useNavigate } from "react-router";
import { FaGamepad } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";

const UpdateProfile = () => {
  const { user, updateUserProfile } = use(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhotoURLChange = (e) => {
    setPhotoURL(e.target.value);
  };


  const handleUpdate = (e) => {
    e.preventDefault();

    console.log("handle update clicked");

    updateUserProfile(name, photoURL)
      .then(() => {
        toast(<div className="flex items-center gap-2">
          <FaGamepad className="text-yellow-300" />
          <span>Profile updated successfully!</span>
        </div>);
        navigate("/profile");
      })
      .catch((error) => {
        console.error(error);
        toast(<div className="flex items-center gap-2">
          <MdErrorOutline />
          <span>Failed to update profile!</span>
        </div>);
      });
  };

  return (
    <>
      <title>Update Profile - GameHub</title>

      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="w-full max-w-sm rounded-lg shadow-xl overflow-hidden bg-[#FFF8E1] border-black border-[3px]">
          <div className="h-8 flex justify-end items-center px-3 bg-[#FFD54F]" />

          <h2 className="text-center font-bold text-xl mt-4 text-[#444]">
            Update Your Information
          </h2>

          <form
            onSubmit={handleUpdate}
            className="p-6 pt-4 flex flex-col items-center space-y-4"
          >
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
              className="w-full p-3 text-lg font-bold rounded-md outline-none border-black border-2 bg-[#FFF8E1] text-[#444]"
              required
            />
            <input
              type="text"
              value={photoURL}
              onChange={handlePhotoURLChange}
              placeholder="Enter your photo URL"
              className="w-full p-3 text-lg font-bold rounded-md outline-none border-black border-2 bg-[#FFF8E1] text-[#444]"
              required
            />

            <button
              type="submit"
              className="w-48 mt-2 py-2 px-6 text-base md:text-xl font-bold rounded-md cursor-pointer
                         bg-[#FFC107] border-[#FFD54F] border-2 text-[#444]
                         transition duration-150 hover:opacity-80"
            >
              Update Information
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
