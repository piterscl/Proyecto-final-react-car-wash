import React, { useState } from "react";
import servicioImg1 from "../../img/estandar.jpg";
import servicioImg2 from "../../img/pro.jpg";
import servicioImg3 from "../../img/premium.jpg";
import "../../styles/index.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { Colapsible } from "../component/collapsibles/collapsible";
import format from "date-fns/format";

export const Servicios = () => (
	<div className="contenedor-principal">
		<div className="container">
			<div className="main-servicios">
				<h2 className="titulos-interiores">Selecciona tu servicio</h2>
				<p className="parrafo-intro">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				</p>
				<div className="card-deck">
					<div className="card">
						<img className="card-img-top" src={servicioImg1} alt="Card image cap" />
						<div className="card-body">
							<h5 className="card-title titulos-interiores titulos-servicios">
								<Colapsible />
							</h5>
						</div>
					</div>
					<div className="card">
						<img className="card-img-top" src={servicioImg2} alt="Card image cap" />
						<div className="card-body">
							<h5 className="card-title titulos-interiores titulos-servicios">Servicio Pro</h5>
						</div>
					</div>
					<div className="card">
						<img className="card-img-top" src={servicioImg3} alt="Card image cap" />
						<div className="card-body">
							<h5 className="card-title titulos-interiores titulos-servicios">Servicio Premium</h5>
						</div>
					</div>
				</div>
				<hr />
				<h2 className="titulos-interiores">Selecciona servicios adicionales</h2>
				<p className="parrafo-intro">Selecciona los servicios adicionales que deseas agregar</p>
				<div className="form-check">
					<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
					<label className="form-check-label" htmlFor="defaultCheck1">
						Detergente Premium
					</label>
					<span className="precio-extra">$5000</span>
				</div>
				<hr />
				<div className="form-check">
					<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
					<label className="form-check-label" htmlFor="defaultCheck1">
						Silicona Renovador
					</label>
					<span className="precio-extra">$ 5000</span>
				</div>
				<hr />
				<div className="form-check">
					<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
					<label className="form-check-label" htmlFor="defaultCheck1">
						Lavado de Motor
					</label>
					<span className="precio-extra">$ 10000</span>
				</div>
				<hr />
				<div className="form-check">
					<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
					<label className="form-check-label" htmlFor="defaultCheck1">
						Limpiador de Llantas
					</label>
					<span className="precio-extra">$ 6000</span>
				</div>
				<hr />
				<div className="form-check">
					<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
					<label className="form-check-label" htmlFor="defaultCheck1">
						Cera en Aerosol
					</label>
					<span className="precio-extra">$ 5000</span>
				</div>
				<hr />
				<h2 className="titulos-interiores">Selecciona fecha y hora</h2>
				<p className="parrafo-intro">Selecciona el día y la hora que lavaremos tu vehiculo</p>
				<div className="row agenda">
					<div className="col-6">
						<i className="fas fa-calendar-alt" />
						<DatePicker />
					</div>
					<div className="col-6">
						<a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
							10:00 <i className="far fa-clock" />
						</a>
						<a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
							11:00 <i className="far fa-clock" />
						</a>
						<a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
							12:00 <i className="far fa-clock" />
						</a>
						<a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
							13:00 <i className="far fa-clock" />
						</a>
					</div>
				</div>
				<button id="checkout" type="submit" className="btn btn-gold">
					<Link to="/checkout">
						<a className="checkout">
							Agendar
							<span className="sr-only">(current)</span>
						</a>
					</Link>
				</button>
			</div>
		</div>
	</div>
);
