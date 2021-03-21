import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../img/logo-1.png";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<nav id="mainnavbar" className="navbar navbar-expand-lg navbar-dark bg-dark principalnav">
			<div id="navcon" className="container">
				<p className="navbar-brand" href="#">
					<img id="nav-brand" src={logoImg} alt="brand" />
				</p>

				<div className="" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link to="/">
								<p className="nav-link">Inicio</p>
							</Link>
						</li>
						<li className="nav-item4">
							<Link to="/Servicios">
								<p className="nav-link" aria-current="page">
									Servicios <i className="fas fa-shopping-cart" />
								</p>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/Contacto-soporte">
								<p className="nav-link">Contacto y Soporte</p>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/Registro">
								<p className="nav-link">
									Registro
									<span className="sr-only">(current)</span>
								</p>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/Login">
								<p className="nav-link">
									Log in <span className="sr-only">(current)</span>
								</p>
							</Link>
						</li>
						<Link to="/Profile">
							<p className="nav-link" aria-current="page">
								<i className="far fa-user-circle" />
							</p>
						</Link>
					</ul>
				</div>
			</div>
		</nav>
	);
};
