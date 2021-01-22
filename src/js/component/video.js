import React, { Component } from "react";
import "../../styles/index.scss";

export const Video = () => (
  <div className="container-fluid">
    <div id="upper-paralax" className="row">
      <div className="col-sm-6">
        <iframe
          className="yt"
          width="900"
          height="480"
          src="https://www.youtube.com/embed/HF9JfW-ayfA?autoplay=1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <div className="col-sm-6">
        <h2 id="pitem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          deserunt, animi sit nam nobis, doloribus laboriosam quaerat possimus
          repellat sint facere consectetur at dolore doloremque. Eos dolor
          explicabo labore suscipit.
        </h2>
      </div>
    </div>
  </div>
);
