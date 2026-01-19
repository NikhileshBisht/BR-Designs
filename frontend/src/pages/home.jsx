import React, { useState, useRef, useEffect } from 'react';
import video1 from '../asserts/1.mp4';
import video2 from '../asserts/ok.mp4';
import video3 from '../asserts/3.mp4';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import './VideoPlayer.css';
import AboutUs from './homeCon';

function VideoPlayer() {
  const [isMuted, setIsMuted] = useState(false);
  const videoRef2 = useRef(null);

  useEffect(() => {
    if (videoRef2.current) {
      // Try to play with sound first
      videoRef2.current.play().catch(() => {
        // If blocked by browser policy, mute and play silently
        setIsMuted(true);
        if (videoRef2.current) {
          videoRef2.current.muted = true;
          videoRef2.current.play();
        }
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef2.current) {
      videoRef2.current.muted = !videoRef2.current.muted;
      setIsMuted(videoRef2.current.muted);
    }
  };

  return (
    <div className="home-container">
      <div className="video-section">
        {/* SIDE VIDEOS ALWAYS MUTED FOR BACKGROUND */}
        <video
          src={video1}
          autoPlay
          muted
          loop
          playsInline
          className="side-video left-video"
        />
        <div className="main-video-wrapper">
          <video
            ref={videoRef2}
            src={video2}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className="middle-video"
          />
          <button className="mute-btn" onClick={toggleMute}>
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
        </div>
        <video
          src={video3}
          autoPlay
          muted
          loop
          playsInline
          className="side-video right-video"
        />
      </div>
      <AboutUs />
    </div>
  );
}

export default VideoPlayer;
