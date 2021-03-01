import React, { Component } from "react";
import "../../styles/video.scss";

export const Video = () => (
	<div className="container-fluid">
		<div id="upper-paralax" className="row">
			<div className="col-sm-6">
				<iframe
					className="yt"
					src="https://www.youtube.com/embed/HF9JfW-ayfA?autoplay=1"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			</div>
			<div className="col-sm-6">
				<spam id="pitem">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis deserunt, animi sit nam nobis,
					doloribus laboriosam quaerat possimus repellat sint facere consectetur at dolore doloremque. Eos
					dolor explicabo labore suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
					deserunt, animi sit nam nobis, doloribus laboriosam quaerat possimus repellat sint facere
					consectetur at dolore doloremque. Eos dolor explicabo labore suscipit.
				</spam>
			</div>
		</div>
	</div>
);
