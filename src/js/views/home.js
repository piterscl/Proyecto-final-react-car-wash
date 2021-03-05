import React from "react";
import { Map } from "../component/home/map";
import { Parallax } from "../component/home/parallax";
import { Video } from "../component/home/video";
import { Agenda } from "../component/home/agenda";
import { Carousel } from "../component/home/carousel";
import { ToTop } from "../component/home/scrolltop";
import "../../styles/home.scss";

export const Home = () => (
	<div>
		<Carousel />
		<Video />
		<Parallax />
		<Agenda />
		<Map />
		<ToTop />
	</div>
);
