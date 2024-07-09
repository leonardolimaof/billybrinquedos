// components/VideoIframe.tsx
import React from 'react';

interface VideoIframeProps {
  videoUrl: string;
}

const VideoIframe: React.FC<VideoIframeProps> = ({ videoUrl }) => {
  return (
    <div className="video-iframe-container">
      <iframe
        width="100%"
        height="500px"
        src={videoUrl}
        title="Video de Depoimentos"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoIframe;
