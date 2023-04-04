import React, { useState, useRef } from 'react';
import videoSrc from "../assets/Images/virtualtour.mp4"
import uni from "../assets/Images/three.js webgl - shadow map - Google Chrome 2023-03-13 18-08-04.mp4"
import camp from "../assets/Images/camp.webp"
import campeat from "../assets/Images/Food-on-Campus.jpg"
import { FiPlay, FiPause } from "react-icons/fi"

const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (playing) {
      video.pause();
    } else {
      video.play();
    }
    setPlaying(!playing);
  }

  const videoRef1 = useRef(null);
  const [playing1, setPlaying1] = useState(false);

  const handlePlayPause1 = () => {
    const video1 = videoRef1.current;
    if (playing1) {
      video1.pause();
    } else {
      video1.play();
    }
    setPlaying1(!playing1);
  }

  const videoRef2 = useRef(null);
  const [playing2, setPlaying2] = useState(false);

  const handlePlayPause2 = () => {
    const video2 = videoRef2.current;
    if (playing2) {
      video2.pause();
    } else {
      video2.play();
    }
    setPlaying2(!playing2);
  }

  return (
    <div name="product" className='w-full bg-secondary'>
        <div className="w-full flex justify-center pt-5">
            <h1 className="py-2 mb-5 text-primary font-lato text-3xl font-bold flex justify-center border-b-4 border-other">PRODUCTS</h1>
        </div>
        {/* grid */}
      <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-10 p-5'>
      
          <div>
              <div className='relative '>
                  <video className='rounded' ref={videoRef} src={videoSrc}></video>
                  <button className='absolute bottom-5 left-10 bg-[#FF0000] px-5 py-3 rounded' onClick={handlePlayPause}>{playing ? <FiPause/> : <FiPlay/> }</button>
              </div>
              <div className='mt-3 bg-gray-200 p-4 rounded font-bold text-gray-700'>
                <h1 className='mb-2 text-[#FF79C6]'> Virtual School Tour </h1>
                <p className='text-xs'>
                Imagine being able to navigate your university with ease, even if it's your first time on campus. That's exactly what our Virtual School Tour offers. Our team created a 3D scene of the entire school and a simple, driveable car so that anyone can experience a tour of the campus virtually. You can explore and find the locations of buildings, classrooms, and other important areas on campus without ever leaving your room. Say goodbye to getting lost on campus, and hello to a seamless and immersive tour experience!
                </p>
              </div>
          </div>
          <div>
          <div className='relative '>
                  <video className='rounded' ref={videoRef1} src={uni}></video>
                  <button className='absolute bottom-5 left-10 bg-[#FF0000] px-5 py-3 rounded' onClick={handlePlayPause1}>{playing1 ? <FiPause/> : <FiPlay/> }</button>
              </div>
              <div className='mt-3 bg-gray-200 p-4 rounded font-bold text-gray-700'>
                <h1 className='mb-2 text-[#FF79C6]'> University Social </h1>
                <p className='text-xs'>
                Staying connected with your fellow university students has never been easier. Introducing University Social, the social media platform designed exclusively for university students. Our platform is the perfect way to stay up-to-date on trending events and activities happening around campus. You can create groups and connect with like-minded students, join clubs and societies, and engage in discussions with your peers. University Social makes it easy to build a vibrant community of friends and stay connected throughout your university journey.
                </p>
              </div>
          </div>
          <div>
          <div className=''>
                  <img className='rounded' src={camp}></img>
                  
              </div>
              <div className='mt-3 bg-gray-200 p-4 rounded font-bold text-gray-700'>
                <h1 className='mb-2 text-[#FF79C6]'> Campus Marketplace </h1>
                <p className='text-xs'>
                Imagine being able to navigate your university with ease, even if it's your first time on campus. That's exactly what our Virtual School Tour offers. Our team created a 3D scene of the entire school and a simple, driveable car so that anyone can experience a tour of the campus virtually. You can explore and find the locations of buildings, classrooms, and other important areas on campus without ever leaving your room. Say goodbye to getting lost on campus, and hello to a seamless and immersive tour experience!
                </p>
              </div>
          </div>
            {/* tap 1 */}
        <div>
          <div className=''>
            <img className='rounded' src={campeat}></img>
          </div>
          <div className='mt-3 bg-gray-200 p-4 rounded font-bold text-gray-700'>
            <h1 className='pb-2 text-[#FF79C6]'> Campus Eat </h1>
            <p className='text-xs'>
            We know that finding quality food options on campus can be a struggle. That's why we created Campus Eats, the ultimate solution to cut the line and get your food immediately. Our platform offers a hub for all the cafeterias on campus to display their food options, and for students to order and pay online. With Campus Eats, you can order your food from anywhere on campus and have it ready for pick-up when you arrive, or even have it delivered right to your dorm room. Say goodbye to long lines or hassling for change and hello to convenience with Campus Eats.
            </p>
          </div>
            </div>
        <div>

      </div>
      </div>
        
    </div>
  );
}

export default VideoPlayer;
