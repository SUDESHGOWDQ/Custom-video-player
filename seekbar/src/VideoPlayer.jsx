// VideoPlayer.js
import React, { useRef, useState } from 'react';
import Controls from './Controls';
import video from './assets/videoss.mp4'

const VideoPlayer = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);

    const togglePlayPause = () => {
        if (videoRef.current.paused || videoRef.current.ended) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleVolumeChange = (e) => {
        setVolume(e.target.value);
        videoRef.current.volume = e.target.value;
    };

    const toggleFullScreen = () => {
        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        } else if (videoRef.current.mozRequestFullScreen) {
            videoRef.current.mozRequestFullScreen();
        } else if (videoRef.current.webkitRequestFullscreen) {
            videoRef.current.webkitRequestFullscreen();
        }
    };

    return (
        <div className="video-player">
            <video
                ref={videoRef}
                className="video"
                // Remove controls attribute
                onEnded={() => setIsPlaying(false)}
            >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Controls
                isPlaying={isPlaying}
                onPlayPause={togglePlayPause}
                onVolumeChange={handleVolumeChange}
                volume={volume}
                onFullScreen={toggleFullScreen}
            />
        </div>
    );
};

export default VideoPlayer;
