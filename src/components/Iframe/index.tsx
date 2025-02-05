// components/VideoIframe.tsx
import React from 'react';

interface VideoIframeProps {
  videoUrl: string;
}

const VideoIframe: React.FC<VideoIframeProps> = ({ videoUrl }) => {
  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
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
