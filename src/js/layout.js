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
import { Checkout } from "./views/Checkout";
import { AdminLogin } from "./views/login-admin";
import { AdminDashboard } from "./views/admin-dashboard";
import { AdminUsers } from "./views/admin-users";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<Navbar />
							<Home />
							<Footer />
						</Route>
						<Route exact path="/Registro">
							<Navbar />
							<Registro />
							<Footer />
						</Route>
						<Route exact path="/Contacto-soporte">
							<Navbar />
							<Contacto />
							<Footer />
						</Route>
						<Route exact path="/Servicios">
							<Navbar />
							<Servicios />
							<Footer />
						</Route>
						<Route exact path="/Login">
							<Navbar />
							<Login />
							<Footer />
						</Route>
						<Route exact path="/Profile">
							<Navbar />
							<Profile />
							<Footer />
						</Route>
						<Route exact path="/Checkout">
							<Navbar />
							<Checkout />
							<Footer />
						</Route>
						<Route exact path="/admin-login">
							<AdminLogin />
						</Route>
						<Route exact path="/admin-dashboard/resumen">
							<AdminDashboard />
						</Route>
						<Route exact path="/admin-dashboard/usuarios">
							<AdminUsers />
						</Route>
						<Route>
							<Navbar />
							<h1>Not found!</h1>
							<Footer />
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
