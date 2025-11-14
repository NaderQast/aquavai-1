import React, { useState } from "react";

const Home = () => {
  const [BgColor, setBgColor] = useState("bg-white");
  const handleImageUpload = () => {
    console.log("the Image Fuction is working");
  };
  const handleVideoUpload = () => {
    console.log("the Video Fuction is working");
  };
  const handleAudioUpload = () => {
    console.log("the Audio Fuction is working");
  };
  return (
    <div className={`text-center ${BgColor} min-h-screen w-full`}>
      <div>
        <button
          onClick={handleImageUpload}
          className="bg-blue-500 text-white  py-3 px-6 m-8  rounded-lg cursor-pointer"
        >
          Upload Image
        </button>
        <div className=" flex justify-center items-center m-12 ">
          <button
            onClick={handleVideoUpload}
            className="bg-blue-500 text-white  py-3 px-6 m-8 rounded-lg cursor-pointer"
          >
            Upload Video
          </button>
          <video controls>Your browser does not support the video tag.</video>
        </div>

        <button
          onClick={handleAudioUpload}
          className="bg-blue-500 text-white  py-3 px-6 m-8 rounded-lg cursor-pointer"
        >
          Upload Audio
        </button>
      </div>
      <div className="py-28">
        <button
          onClick={() => setBgColor("bg-red-500")}
          className="bg-red-800 text-white  py-3 px-12 mx-8 rounded-lg cursor-pointer"
        >
          Red Color
        </button>
        <button
          onClick={() => setBgColor("bg-green-500")}
          className="bg-green-800 text-white  py-3 px-12 mx-8 rounded-lg cursor-pointer"
        >
          Green Color
        </button>
        <button
          onClick={() => setBgColor("bg-gray-800")}
          className="bg-black text-white  py-3 px-12 mx-8 rounded-lg cursor-pointer"
        >
          Black Color
        </button>
      </div>
    </div>
  );
};

export default Home;
