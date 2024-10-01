import React from "react";
import "../styles/style.css";

const PreviewSki = () => {
  return (
    <section>
      <div className="container">
        <div className="sub-headline">
          <h3 className="sub-preview">
            Explore the Thrilling Ski Trails of Nozawa Onsen
          </h3>
        </div>
        <div className="container">
          <div className="sub-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/sAKSaZBX148?si=dqZNHIewzGlWAhCo"
              title="SKI VIDEO 1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/FtqliKoZ9_c?si=G8NXeIT6lp_Mj0yH"
              title="SKI VIDEO 2"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewSki;
