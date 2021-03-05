import React, { useState } from "react";
import servicioImg1 from "../../img/estandar.jpg";
import servicioImg2 from "../../img/pro.jpg";
import servicioImg3 from "../../img/premium.jpg";
import "../../styles/servicios.scss";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import Basico from "../component/collapsibles/Basico";
import Pro from "../component/collapsibles/Pro";
import Premium from "../component/collapsibles/Premium";
import Dates from "../component/datepicker/datepicker";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import format from "date-fns/format";

export const Servicios = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.getextras();
	});

	const handleChange = e => {
		let datos = state;
		datos[e.target.name] = e.target.value;
		setState(datos);
	};

	const handleSubmit = e => {
		e.preventDefault();
		saveServices(state);
	};

	const saveServices = () => {
		fetch("http://localhost:5000/API/Checkout", {
			method: "POST",
			body: JSON.stringify(form),
			headers: { "content-type": "application/json" }
		}).then(resp => resp.json());
		history.push("/Checkout");
	};
	return (
		<div className="contenedor-principal">
			<div className="container">
				<div className="main-servicios">
					<h2 id="black-font" className="titulos-interiores">
						Selecciona tu servicio
					</h2>
					<p className="parrafo-intro">Elige el tipo de servicio que deseas para tu auto.</p>
					<div className="card-deck">
						<div className="card">
							<img className="card-img-top" src={servicioImg1} alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title titulos-interiores titulos-servicios">
									<Basico />
								</h5>
							</div>
						</div>
						<div className="card">
							<img className="card-img-top" src={servicioImg2} alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title titulos-interiores titulos-servicios">
									<Pro />
								</h5>
							</div>
						</div>
						<div className="card">
							<img className="card-img-top" src={servicioImg3} alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title titulos-interiores titulos-servicios">
									<Premium />
								</h5>
							</div>
						</div>
					</div>
					<hr />
					<h2 id="black-font" className="titulos-interiores">
						Selecciona servicios adicionales
					</h2>
					<p className="parrafo-intro">Selecciona los servicios adicionales que deseas agregar</p>
					<div className="form-check">
						<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label
							id="black-font"
							className="form-check-label"
							htmlFor="defaultCheck1"
							onChange={handleChange}>
							Detergente premium
						</label>
						<label id="black-font" className="precio-extra" onChange={handleChange}>
							$5.000
						</label>
					</div>
					<hr />
					<div className="form-check">
						<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label
							id="black-font"
							className="form-check-label"
							htmlFor="defaultCheck1"
							onChange={handleChange}>
							Silicona premium
						</label>
						<label id="black-font" className="precio-extra" onChange={handleChange}>
							$5.000
						</label>
					</div>
					<hr />
					<div className="form-check">
						<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label
							id="black-font"
							className="form-check-label"
							htmlFor="defaultCheck1"
							onChange={handleChange}>
							Lavado motor
						</label>
						<label id="black-font" className="precio-extra" onChange={handleChange}>
							$10.000
						</label>
					</div>
					<hr />
					<div className="form-check">
						<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label
							id="black-font"
							className="form-check-label"
							htmlFor="defaultCheck1"
							onChange={handleChange}>
							Limpiador llantas
						</label>
						<label id="black-font" className="precio-extra" onChange={handleChange}>
							$6.000
						</label>
					</div>
					<hr />
					<div className="form-check">
						<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label
							id="black-font"
							className="form-check-label"
							htmlFor="defaultCheck1"
							onChange={handleChange}>
							Cera aerosol
						</label>
						<label id="black-font" className="precio-extra" onChange={handleChange}>
							$4.000
						</label>
					</div>
					<hr />
					<hr />
					<h2 className="titulos-interiores">Selecciona fecha y hora</h2>
					<p className="parrafo-intro">Selecciona el día y la hora que lavaremos tu vehiculo</p>
					<div className="row agenda">
						<div className="col-6">
							<i id="calendar" className="fas fa-calendar-alt" />
							<Dates onChange={(handleChange, date => setStartDate(date))} />
						</div>
						<div className="col-6">
							<a id="hr" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
								11:00 <i className="far fa-clock" />
							</a>
							<a id="hr" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
								13:00 <i className="far fa-clock" />
							</a>
							<a id="hr" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
								14:00 <i className="far fa-clock" />
							</a>
							<a id="hr" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
								15:00 <i className="far fa-clock" />
							</a>
							<a id="hr" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
								16:00 <i className="far fa-clock" />
							</a>
							<a id="hr" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
								17:00 <i className="far fa-clock" />
							</a>
							<a id="hr" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
								18:00 <i className="far fa-clock" />
							</a>
						</div>
					</div>
					<button id="checkout" type="submit" className="btn btn-dark" onSubmit={handleSubmit}>
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
};

Servicios.propTypes = {
	match: PropTypes.object
};
