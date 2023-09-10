import React from "react";

const VideoComponent = () => {
  return (
    <div className="yvid">
      <div className="yvidtxt">
        <h2>Heading on the Right</h2>
        {/* Add your content here */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
          lorem urna.
        </p>
        {/* Additional content can be added here */}
      </div>
      <div className="w-1/2 p-4">
        {/* YouTube video embed code */}
        <iframe
          src="https://www.youtube.com/embed/2GeMknXoGaA?si=JqbDrSlOSvZaVpvs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoComponent;
