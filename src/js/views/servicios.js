import React, { useState } from "react";
import servicioImg1 from "../../img/estandar.jpg";
import servicioImg2 from "../../img/pro.jpg";
import servicioImg3 from "../../img/premium.jpg";
import "../../styles/index.scss";
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
import format from "date-fns/format";

export const Servicios = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

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
		fetch("http://localhost:5000/API/Profile/<int:id>/Checkout/<int:id>", {
			method: "POST",
			body: JSON.stringify(),
			headers: { "content-type": "application/json" }
		}).then(resp => resp.json());
	};
	return (
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
					<h2 className="titulos-interiores">Selecciona servicios adicionales</h2>
					<p className="parrafo-intro">Selecciona los servicios adicionales que deseas agregar</p>
					<div className="form-check">
						<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label className="form-check-label" htmlFor="defaultCheck1" onChange={handleChange}>
							{store.extras[params.theid].nombre_extra}
						</label>
						<span className="precio-extra" onChange={handleChange}>
							{store.extras[params.theid].valor_extra}
						</span>
					</div>
					<hr />
					<div className="form-check">
						<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label className="form-check-label" htmlFor="defaultCheck1" onChange={handleChange}>
							{store.extras[params.theid].nombre_extra}
						</label>
						<span className="precio-extra" onChange={handleChange}>
							{store.extras[params.theid].valor_extra}
						</span>
					</div>
					<hr />
					<div className="form-check">
						<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label className="form-check-label" htmlFor="defaultCheck1" onChange={handleChange}>
							{store.extras[params.theid].nombre_extra}
						</label>
						<span className="precio-extra" onChange={handleChange}>
							{store.extras[params.theid].valor_extra}
						</span>
					</div>
					<hr />
					<div className="form-check">
						<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label className="form-check-label" htmlFor="defaultCheck1" onChange={handleChange}>
							{store.extras[params.theid]}
						</label>
						<span className="precio-extra" onChange={handleChange}>
							{store.extras[params.theid].valor_extra}
						</span>
					</div>
					<hr />
					<div className="form-check">
						<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label className="form-check-label" htmlFor="defaultCheck1" onChange={handleChange}>
							{store.extras[params.theid].nombre_extra}
						</label>
						<span className="precio-extra" onChange={handleChange}>
							{store.extras[params.theid].valor_extra}
						</span>
					</div>
					<hr />
					<h2 className="titulos-interiores">Selecciona fecha y hora</h2>
					<p className="parrafo-intro">Selecciona el día y la hora que lavaremos tu vehiculo</p>
					<div className="row agenda">
						<div className="col-6">
							<i className="fas fa-calendar-alt" />
							<Dates onChange={(handleChange, date => setStartDate(date))} />
						</div>
						<div className="col-6">
							<a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
								{store.horarios[params.theid].horas} <i className="far fa-clock" />
							</a>
							<a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
								{store.horarios[params.theid].horas} <i className="far fa-clock" />
							</a>
							<a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
								{store.horarios[params.theid].horas} <i className="far fa-clock" />
							</a>
							<a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
								{store.horarios[params.theid].horas} <i className="far fa-clock" />
							</a>
						</div>
					</div>
					<button id="checkout" type="submit" className="btn btn-gold" onSubmit={handleSubmit}>
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
