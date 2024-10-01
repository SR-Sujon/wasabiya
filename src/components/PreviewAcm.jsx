import React from "react";
import "../styles/style.css";
const PreviewAcm = () => {
  return (
    <section>
      <div className="container">
        <div className="sub-headline">
          <h3 className="sub-preview">
            Dive into the Birds Eye View of Nozawa Onsen and Hakuba Village
          </h3>
        </div>
        <div className="container">
          <div className="sub-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/AckqWh9hgSA?si=pcWYzEWdGR_c5zWU"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/vM220pspGFA?si=yy8CUlOPlNPrd7Uv"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewAcm;
