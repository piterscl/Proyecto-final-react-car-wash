import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.scss";

export const Footer = () => (
	<footer className="site-footer">
		<div className="container">
			<div className="row">
				<div className="col-sm-12 col-md-9">
					<h6>Black Star Car Wash</h6>
					<p className="text-justify">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of
						type and scrambled it to make a type specimen book.
					</p>
				</div>
				<div className="col-xs-6 col-md-3">
					<h6>Links</h6>
					<ul className="footer-links">
						<li>
							<Link to="/">
								<a>Inicio</a>
							</Link>
						</li>
						<li>
							<Link to="/Registro">
								<a>Registro</a>
							</Link>
						</li>
						<li>
							<Link to="/Soporte">
								<a>Contacto y Soporte</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<hr />
		</div>
		<div className="container">
			<div className="row">
				<div className="col-md-8 col-sm-6 col-xs-12">
					<p className="copyright-text">
						Copyright &copy; 2021 Todos los derechos reservados por
						<a href="#"> Black Star Car Wash</a>.
					</p>
				</div>

				<div className="col-md-4 col-sm-6 col-xs-12">
					<ul className="social-icons">
						<li>
							<a className="facebook" href="#">
								<i className="fab fa-facebook-f" />
							</a>
						</li>
						<li>
							<a className="twitter" href="#">
								<i className="fab fa-twitter" />
							</a>
						</li>
						<li>
							<a className="linkedin" href="#">
								<i className="fab fa-linkedin" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
);
