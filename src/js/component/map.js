import React, { Component } from "react";
import "../../styles/index.scss";

export const Map = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53286.10338595765!2d-70.60354760630561!3d-33.41329790112545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662ceb46835b925%3A0xcd3927b10fbcf564!2sAlto%20Las%20Condes!5e0!3m2!1sen!2scl!4v1610826533007!5m2!1sen!2scl"
          width="1811"
          height="400"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        />
      </div>
    </div>
  </div>
);
