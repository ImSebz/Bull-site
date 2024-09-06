import React from 'react';
import './video.css';

const Video = () => {
    return (
        <iframe
            className='video-bull'
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3cAPn0S61-o?si=vv2DoCdIyh2OfW9M"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen>

        </iframe>
    )
}

export default Video;
