import React, { useState } from "react";
import "../../styles/registro.scss";

export const Registro = props => {
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
		/* let formData = new FormData();
		formData.append("username", state.username);
		formData.append("apellido", state.apellido);
		formData.append("password", state.password);
		formData.append("email", state.email);
		formData.append("phone", state.phone);
		console.log(FormData); */
		saveUSer(state);
	};

	const saveUSer = form => {
		fetch("http://localhost:5000/Registro", {
			method: "POST",
			body: JSON.stringify(form),
			headers: { "content-type": "application/json" }
		})
			.then(resp => resp.json())
			.then(data => console.log(data));
	};

	return (
		<div className="contenedor-principal">
			<div className="container">
				<div className="row modal-registro">
					<div className="col-6 columna-img" />
					<div className="col mr-auto columna-form">
						<h3 className="titulos-interiores">Registrarse</h3>
						<div className="parrafo-intro">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
							<button type="submit" className="btn btn-gold">
								Registrarme
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
