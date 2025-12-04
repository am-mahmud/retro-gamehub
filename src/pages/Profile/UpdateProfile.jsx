import React, { useState, useEffect, use } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router";
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
          <FaGamepad className="text-[#FF6B35]" />
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

      <div className="flex justify-center items-center min-h-screen p-4 bg-white dark:bg-gray-900 space-mono">
        <div className="w-full max-w-md border-2 border-black p-4">
          
         
          <div className="text-center mb-8">
            <h1 className="text-5xl font-black text-black dark:text-white tracking-tight mb-2">
              GAMEHUB
            </h1>
          </div>

        
          <h2 className="text-2xl font-bold text-center mb-4 text-black dark:text-white uppercase tracking-wide">
            Update Profile
          </h2>

          <p className="text-center text-sm text-gray-600 mb-8">
            Edit your player information below
          </p>

          <form onSubmit={handleUpdate} className="space-y-6">
          
            {photoURL && (
              <div className="flex justify-center mb-4">
                <img
                  src={photoURL}
                  alt="Profile Preview"
                  className="w-24 h-24 object-cover border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                  onError={(e) => {
                    e.target.src = "https://i.ibb.co.com/chgmm5K6/retro-game-9.jpg";
                  }}
                />
              </div>
            )}

            
            <div>
              <label className="block text-black dark:text-white font-bold mb-2 text-xs uppercase tracking-wider">
                Player Name
              </label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="ENTER YOUR NAME"
                className="w-full px-5 py-4 text-sm font-semibold rounded-xl
                       border-2 border-black bg-white text-black
                       placeholder:text-gray-400 placeholder:text-xs placeholder:font-bold
                       focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            
            <div>
              <label className="block text-black dark:text-white font-bold mb-2 text-xs uppercase tracking-wider">
                Photo URL
              </label>
              <input
                type="url"
                value={photoURL}
                onChange={handlePhotoURLChange}
                placeholder="ENTER PHOTO URL"
                className="w-full px-5 py-4 text-sm font-semibold rounded-xl
                       border-2 border-black bg-white text-black
                       placeholder:text-gray-400 placeholder:text-xs placeholder:font-bold
                       focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
              <p className="text-xs text-gray-500 mt-2">
                Enter a valid image URL for your profile picture
              </p>
            </div>

            
            <button
              type="submit"
              className="w-full py-4 text-sm font-bold rounded-xl
                     bg-orange-400 text-white uppercase tracking-wider
                     hover:bg-[#FF6B35] transition-colors"
            >
              Save Changes
            </button>

          
            <Link to="/profile" className="block">
              <button
                type="button"
                className="w-full py-4 text-sm font-bold rounded-xl
                       bg-white text-black uppercase tracking-wider
                       border-2 border-black hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
            </Link>
          </form>

        
          <div className="text-center mt-6">
            <Link 
              to='/profile' 
              className="text-gray-500 text-sm hover:text-black transition-colors inline-flex items-center gap-2"
            >
              ← Back to Profile
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;