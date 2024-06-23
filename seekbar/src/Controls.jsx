// Controls.js
import React from 'react';

const Controls = ({ isPlaying, onPlayPause, onVolumeChange, volume, onFullScreen }) => {
    return (
        <div className="controls" >
            <button onClick={onPlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
            <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={onVolumeChange}
            />
            <button onClick={onFullScreen}>Fullscreen</button>
        </div>
    );
};

export default Controls;
