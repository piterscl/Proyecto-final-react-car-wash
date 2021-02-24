import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../img/logo-1.png";
import "../../styles/index.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<Link to="/">
					<a className="navbar-brand" href="#">
						<img src={logoImg} width="120vw" height="60vh" alt="" />
					</a>
				</Link>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link to="/">
								<a className="nav-link">Inicio</a>
							</Link>
						</li>
						<li className="nav-item4">
							<Link to="/Servicios">
								<a className="nav-link" aria-current="page">
									Servicios <i className="fas fa-shopping-cart" />
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/Contacto-soporte">
								<a className="nav-link">Contacto y Soporte</a>
							</Link>
						</li>
						<li className="nav-item active">
							<Link to="/Registro">
								<a className="nav-link">
									Registro
									<span className="sr-only">(current)</span>
								</a>
							</Link>
						</li>
						<li className="nav-item active">
							<Link to="/Login">
								<a className="nav-link">
									Log in <span className="sr-only">(current)</span>
								</a>
							</Link>
						</li>
						<Link to="/Profile">
							<a className="nav-link" aria-current="page">
								<i className="far fa-user-circle" />
							</a>
						</Link>
					</ul>
				</div>
			</div>
		</nav>
	);
};
