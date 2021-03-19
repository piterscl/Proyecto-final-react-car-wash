import React from "react";
import "../../../styles/carousel.scss";

export const Carousel = () => (
	<div className="carousel">
		<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" />
		<ol className="carousel-indicators">
			<li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" />
			<li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" />
			<li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" />
		</ol>
		<div className="carousel-inner">
			<div className="carousel-item active">
				<img
					id="tenno"
					src="https://gretaproject.com/projects/23_black-star-car-wash/05.jpg"
					className="d-block w-100"
					alt="..."
				/>
			</div>
			<div className="carousel-item">
				<img
					id="tenno"
					src="https://gretaproject.com/projects/23_black-star-car-wash/05.jpg"
					className="d-block w-100"
					alt="..."
				/>
			</div>
			<div className="carousel-item">
				<img
					id="tenno"
					src="https://gretaproject.com/projects/23_black-star-car-wash/05.jpg"
					className="d-block w-100"
					alt="..."
				/>
			</div>
		</div>
		<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev"></a>
		<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next"></a>
	</div>
);
