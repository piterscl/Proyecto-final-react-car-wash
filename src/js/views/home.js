import React from "react";
import { Map } from "../component/map";
import { Parallax } from "../component/parallax";
import { Video } from "../component/video";
import { Agenda } from "../component/agenda";
import { Carousel } from "../component/carousel";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import injectContext from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => (
	<div>
		<Carousel />
		<Video />
		<Parallax />
		<Agenda />
		<Map />
	</div>
);
