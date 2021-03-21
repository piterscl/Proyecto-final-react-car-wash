import React, { useState } from "react";
import logoImg from "../../img/logo-1.png";
import "../../styles/dashboard.scss";
import { Link } from "react-router-dom";

export const AdminUsers = () => {
	return (
		<>
			<nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
				<a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
					<img id="nav-brand" src={logoImg} alt="brand" />
				</a>
				<ul className="navbar-nav px-3">
					<li className="nav-item text-nowrap">
						<a className="nav-link" href="#">
							Log out
						</a>
					</li>
				</ul>
			</nav>
			<div className="container-fluid">
				<div className="row">
					<nav className="col-md-2 d-none d-md-block bg-light sidebar-1">
						<div className="sidebar-sticky">
							<ul className="nav flex-column">
								<hr></hr>
								<li className="nav-item">
									<Link to="/admin-dashboard/resumen">
										<a className="nav-link">
											<i className="fa fa-shopping-cart" aria-hidden="true"></i>
											<span className="sr-only">(current)</span> Resumen{" "}
											<span className="sr-only">(current)</span>
										</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/admin-dashboard/usuarios">
										<a className="nav-link active">
											<i className="fa fa-user-circle" aria-hidden="true"></i>
											<span className="sr-only">(current)</span> Usuarios{" "}
											<span className="sr-only">(current)</span>
										</a>
									</Link>
								</li>
								<hr></hr>
								<li className="nav-item">
									<a className="nav-link" href="#">
										<i className="fa fa-plus-circle" aria-hidden="true"></i>
										<span className="sr-only">(current)</span> Servicios{" "}
										<span className="sr-only">(current)</span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										<i className="fa fa-toggle-on" aria-hidden="true"></i>
										<span className="sr-only">(current)</span> Extras{" "}
										<span className="sr-only">(current)</span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										<i className="fa fa-clock" aria-hidden="true"></i>
										<span className="sr-only">(current)</span> Horarios{" "}
										<span className="sr-only">(current)</span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										<i className="fa fa-calendar" aria-hidden="true"></i>
										<span className="sr-only">(current)</span> Fechas{" "}
										<span className="sr-only">(current)</span>
									</a>
								</li>
							</ul>
						</div>
					</nav>

					<main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4 col-main">
						<h2 className="titlesadmins">Resumen de transacciones</h2>
						<div className="table-responsive">
							<table className="table table-striped table-sm">
								<thead>
									<tr>
										<th>ID</th>
										<th>Nombre</th>
										<th>Apellido</th>
										<th>Email</th>
										<th>Teléfono</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>Juan</td>
										<td>Soto</td>
										<td>jsto@gmaiil.com</td>
										<td>319793151</td>
									</tr>
									<tr>
										<td>2</td>
										<td>Javiera</td>
										<td>Acosta</td>
										<td>jacosta@gmaiil.com</td>
										<td>585366063</td>
									</tr>
									<tr>
										<td>3</td>
										<td>Leonardo</td>
										<td>Calderon</td>
										<td>lcalderon@gmaiil.com</td>
										<td>170090519</td>
									</tr>
									<tr>
										<td>4</td>
										<td>Pablo</td>
										<td>Toledo</td>
										<td>ptoledo@gmaiil.com</td>
										<td>102060920</td>
									</tr>
									<tr>
										<td>5</td>
										<td>Vicente</td>
										<td>Gutierrez</td>
										<td>vgutierrez@gmaiil.com</td>
										<td>936084503</td>
									</tr>
									<tr>
										<td>6</td>
										<td>Nicolás</td>
										<td>Montes</td>
										<td>nmontes@gmaiil.com</td>
										<td>801985269</td>
									</tr>
									<tr>
										<td>7</td>
										<td>Camila</td>
										<td>Macias</td>
										<td>cmacias@gmaiil.com</td>
										<td>829116086</td>
									</tr>
									<tr>
										<td>8</td>
										<td>Santiago</td>
										<td>Grande</td>
										<td>sgrande@gmaiil.com</td>
										<td>374990343</td>
									</tr>
									<tr>
										<td>9</td>
										<td>Tomás</td>
										<td>Valle</td>
										<td>tvalle@gmaiil.com</td>
										<td>527432158</td>
									</tr>
									<tr>
										<td>10</td>
										<td>Testuser2</td>
										<td>test</td>
										<td>test@test.cl</td>
										<td>954628054</td>
									</tr>
								</tbody>
							</table>
						</div>
					</main>
				</div>
			</div>
		</>
	);
};
