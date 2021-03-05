import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/registro.scss";
import PropTypes from "prop-types";

export const Registro = props => {
	const history = useHistory();
	const [state, setState] = useState({
		username: null,
		apellido: null,
		password: null,
		email: null,
		phone: null
	});

	const handleChange = e => {
		let datos = state;
		datos[e.target.name] = e.target.value;
		setState(datos);
	};

	const handleSubmit = e => {
		e.preventDefault();
		saveUSer(state);
	};

	const saveUSer = form => {
		fetch("http://localhost:5000/API/Registro", {
			method: "POST",
			body: JSON.stringify(form),
			headers: { "content-type": "application/json" }
		}).then(resp => resp.json());
		history.push("/Login");
	};

	return (
		<div className="contenedor-principal">
			<div className="container">
				<div className="row modal-registro">
					<div className="col-6 columna-img" />
					<div className="col mr-auto columna-form">
						<h3 className="titulos-interiores">Registrarse</h3>
						<div className="parrafo-intro">
							Coloca tus datos para añadirte entre nuestra destacada clientela.
						</div>
						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									id="username"
									aria-describedby="namelHelp"
									placeholder="Nombre..."
									name="username"
									onChange={handleChange}
								/>
							</div>
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									id="apellido"
									placeholder="Apellido..."
									name="apellido"
									onChange={handleChange}
								/>
							</div>
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									id="password"
									placeholder="Contraseña..."
									name="password"
									onChange={handleChange}
								/>
							</div>
							<div className="form-group">
								<input
									type="email"
									className="form-control"
									id="email"
									placeholder="Email..."
									name="email"
									onChange={handleChange}
								/>
							</div>
							<div className="form-group">
								<input
									type="tel"
									className="form-control"
									id="phone"
									placeholder="Teléfono..."
									name="phone"
									onChange={handleChange}
								/>
							</div>
							<button type="submit" className="btn btn-dark">
								Registrarme
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

Registro.propTypes = {
	match: PropTypes.object
};
