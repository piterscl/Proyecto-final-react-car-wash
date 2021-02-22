import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Registro } from "./views/registro";
import { Contacto } from "./views/contacto";
import { Servicios } from "./views/servicios";
import { Login } from "./views/login";
import { Profile } from "./views/profile";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/Registro">
							<Registro />
						</Route>
						<Route exact path="/Contacto-soporte">
							<Contacto />
						</Route>
						<Route exact path="/Servicios">
							<Servicios />
						</Route>
						<Route exact path="/Login">
							<Login />
						</Route>
						<Route exact path="/Profile">
							<Profile />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
