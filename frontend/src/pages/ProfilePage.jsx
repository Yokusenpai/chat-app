import React, { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore.js';

const ProfilePage = () => {
  const { authUser, updateProfile, isUpdatingProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };
  return (
    <div className="h-screen">
      <div className=" card border-primary/40 card-border bg-slate-900/40 m-24 w-4/5  card-lg shadow-md items-center text-center">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Profile</h2>
          <p>Your profile info</p>

          {/* avatar here */}
          <div className="avatar avatar-online m-4">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
              <img src={selectedImg || authUser.profilePic || '/avatar.svg'} />
            </div>

            <label
              htmlFor="avatar-upload"
              className={`hover:scale-105 absolute bottom-0 right-0 cursor-pointer transition-all duration-200 ${
                isUpdatingProfile ? 'animate-pulse pointer-events-none' : ''
              }`}>
              {/* Camera here */}
              <div className="absolute bottom-0 right-0 p-1 bg-blue-500 rounded-full shadow-lg cursor-pointer">
                <svg
                  xmlns="www.w3.org"
                  className="h-4 w-4 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M22 4h-4l-2-2H8L6 4H2c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-2 14H4V6h4.01l1.49-1.5L12 6l2.5-1.5L15.99 6H20v12zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                </svg>
              </div>
              <input
                type="file"
                id="avatar-upload"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={isUpdatingProfile}
              />
            </label>
            {/* Camera here */}
          </div>
          {/* avtar here */}
          <p className="text-sm text-zinc-400">
            {isUpdatingProfile
              ? 'Uploading...'
              : 'Camera to update profile photo'}
          </p>

          <div className="divider"></div>
          {/* user info */}
          <div>
            <div className="m-4">
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-100">
                Name
              </label>
              <p>{authUser?.fullName}</p>
            </div>
            <div className="m-4">
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-100">
                Email address
              </label>
              <p>{authUser?.email}</p>
            </div>
          </div>

          {/* user info */}
          <div className="divider"></div>
          <div className="divider">
            <div className="m-2">
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-100">
                Member since
              </label>
              <p>{authUser?.createdAt?.split('T')[0]}</p>
            </div>
            <div className="m-2">
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-100">
                Account Status
              </label>
              <span className="text-green-500">Active</span>
            </div>
          </div>
          {/* user info */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
