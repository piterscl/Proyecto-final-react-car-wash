import React, { useState } from "react";
import logoImg from "../../img/logo-1.png";
import "../../styles/dashboard.scss";
import { Link } from "react-router-dom";

export const AdminDashboard = () => {
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
										<a className="nav-link active">
											<i className="fa fa-shopping-cart" aria-hidden="true"></i>
											<span className="sr-only">(current)</span> Resumen{" "}
											<span className="sr-only">(current)</span>
										</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/admin-dashboard/usuarios">
										<a className="nav-link">
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
										<th>Nombre Cliente</th>
										<th>Servicio</th>
										<th>Fecha</th>
										<th>Hora</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>Juan</td>
										<td>Servicio pro</td>
										<td>06-12-2021</td>
										<td>13:00</td>
									</tr>
									<tr>
										<td>2</td>
										<td>Javiera</td>
										<td>Servicio básico</td>
										<td>01-09-2021</td>
										<td>15:00</td>
									</tr>
									<tr>
										<td>3</td>
										<td>Leonardo</td>
										<td>Servicio premium</td>
										<td>06-10-2021</td>
										<td>18:00</td>
									</tr>
									<tr>
										<td>4</td>
										<td>Pablo</td>
										<td>Servicio premium</td>
										<td>04-08-2021</td>
										<td>16:00</td>
									</tr>
									<tr>
										<td>5</td>
										<td>Vicente</td>
										<td>Servicio básico</td>
										<td>21-11-2021</td>
										<td>16:00</td>
									</tr>
									<tr>
										<td>6</td>
										<td>Nicolás</td>
										<td>Servicio básico</td>
										<td>06-29-2021</td>
										<td>11:00</td>
									</tr>
									<tr>
										<td>7</td>
										<td>Camila</td>
										<td>Servicio pro</td>
										<td>12-01-2021</td>
										<td>13:00</td>
									</tr>
									<tr>
										<td>8</td>
										<td>Santiago</td>
										<td>Servicio premium</td>
										<td>02-02-2021</td>
										<td>18:00</td>
									</tr>
									<tr>
										<td>9</td>
										<td>Tomás</td>
										<td>Servicio báscio</td>
										<td>07-22-2021</td>
										<td>15:00</td>
									</tr>
									<tr>
										<td>10</td>
										<td>Testuser2</td>
										<td>Servicio pro</td>
										<td>06-05-2021</td>
										<td>11:00</td>
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
