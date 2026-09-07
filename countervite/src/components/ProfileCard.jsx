import React from 'react';

function ProfileCard({myname, btntext}) {

    console.log("props", myname);
    
  return (
    // Centered wrapper with a gray background
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      
      {/* The Card Container */}
      <div className="w-80 overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-transform duration-300 hover:scale-105">
        
        {/* Avatar Circle */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-indigo-100 text-3xl font-bold text-indigo-600">
          JD
        </div>

        {/* Text Section */}
        <div className="mt-4 text-center">
          <h1 className="text-xl font-bold text-gray-900">{myname}</h1>
          <p className="text-sm font-medium text-gray-500">Frontend Developer</p>
          <p className="mt-2 text-xs text-gray-400">Building fast apps with React and Vite.</p>
        </div>

        {/* Action Button */}
        <button className="mt-6 w-full rounded-xl bg-indigo-600 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 active:bg-indigo-800 transition-colors">
          {btntext}
        </button>

      </div>

    </div>
  );
}

export default ProfileCard
