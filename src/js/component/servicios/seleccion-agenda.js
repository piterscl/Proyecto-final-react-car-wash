import React from "react";
import Dates from "../../component/datepicker/datepicker";
import { Link } from "react-router-dom";
import "../../../styles/servicios.scss";

const handleChange = e => {
	let datos = state;
	datos[e.target.name] = e.target.value;
	setState(datos);
};

const handleSubmit = e => {
	e.preventDefault();
	saveServices(state);
};

export const SelecAgenda = () => {
	return (
		<>
			<hr />
			<h2 id="marg" className="titulos-interiores">
				Selecciona fecha y hora
			</h2>
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
		</>
	);
};

export default SelecAgenda;
