
import React, { Component } from "react"; 
import "../../styles/index.scss";



export const Carousel = () => (
    <div className="carousel">
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" />
      <ol className="carousel-indicators">
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://gretaproject.com/projects/23_black-star-car-wash/05.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://gretaproject.com/projects/23_black-star-car-wash/05.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://gretaproject.com/projects/23_black-star-car-wash/05.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span className="agenda" className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="agenda" className="visually-hidden">Previous</span >
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span className="agenda" className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="agenda" className="visually-hidden">Next</span >
      </a>
    </div>
);