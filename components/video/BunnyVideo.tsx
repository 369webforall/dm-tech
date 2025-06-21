import React from "react";

const BunnyVideo = () => {
  return (
    <div className="relative pt-[56.25%]">
      <iframe
        src="https://iframe.mediadelivery.net/play/457914/3571637b-4768-4ec1-baba-7d8d95e70dd9?autoplay=false&loop=false&muted=false&preload=false&responsive=true"
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full border-0"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BunnyVideo;
