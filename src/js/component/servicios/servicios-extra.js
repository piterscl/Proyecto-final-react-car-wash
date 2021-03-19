import React from "react";
import "../../../styles/servicios.scss";

const handleChange = e => {
	let datos = state;
	datos[e.target.name] = e.target.value;
	setState(datos);
};

export const ServExtra = () => {
	return (
		<>
			<h2 id="marg" className="titulos-interiores">
				Selecciona servicios adicionales
			</h2>
			<p className="parrafo-intro">Selecciona los servicios adicionales que deseas agregar</p>
			<div className="form-check">
				<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
				<label id="black-font" className="form-check-label" htmlFor="defaultCheck1" onChange={handleChange}>
					Detergente premium
				</label>
				<label id="black-font" className="precio-extra" onChange={handleChange}>
					$5.000
				</label>
			</div>
			<hr />
			<div className="form-check">
				<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
				<label id="black-font" className="form-check-label" htmlFor="defaultCheck2" onChange={handleChange}>
					Silicona premium
				</label>
				<label id="black-font" className="precio-extra" onChange={handleChange}>
					$5.000
				</label>
			</div>
			<hr />
			<div className="form-check">
				<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
				<label id="black-font" className="form-check-label" htmlFor="defaultCheck3" onChange={handleChange}>
					Lavado motor
				</label>
				<label id="black-font" className="precio-extra" onChange={handleChange}>
					$10.000
				</label>
			</div>
			<hr />
			<div className="form-check">
				<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
				<label id="black-font" className="form-check-label" htmlFor="defaultCheck4" onChange={handleChange}>
					Limpiador llantas
				</label>
				<label id="black-font" className="precio-extra" onChange={handleChange}>
					$6.000
				</label>
			</div>
			<hr />
			<div className="form-check">
				<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
				<label id="black-font" className="form-check-label" htmlFor="defaultCheck5" onChange={handleChange}>
					Cera aerosol
				</label>
				<label id="black-font" className="precio-extra" onChange={handleChange}>
					$4.000
				</label>
			</div>
		</>
	);
};

export default ServExtra;
