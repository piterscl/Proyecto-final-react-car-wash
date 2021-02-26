import React, { useState } from "react";
import "../../styles/index.scss";
import PropTypes from "prop-types";

async function loginUser() {
	return fetch("http://localhost:5000/API/Login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify()
	})
		.then(response => {
			if (response.lenght > 0) {
				var respuesta = response[0];
				var objetojson = JSON.parse(body);

				alert(`Bienvenido`);
				window.location.href = "/profile";
			} else {
				alert(`El Usuario o la contraseña no son correctos`);
				window.location.href = "/profile";
			}
		})
		.catch(err => {
			window.location.href = "/profile";
			console.error(err);
		});
}

export function Login() {
	const [username, setUserName] = useState();
	const [password, setPassword] = useState();

	const handleSubmit = async e => {
		e.preventDefault();
		const token = await loginUser({
			username,
			password
		});
	};

	return (
		<div className="contenedor-principal">
			<div className="container">
				<div className="row modal-registro">
					<div className="col-6 columna-img" />
					<div className="col mr-auto columna-form">
						<h3 className="titulos-interiores">Ingresar</h3>
						<div className="parrafo-intro">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						</div>
						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									id="exampleInputName1"
									aria-describedby="namelHelp"
									placeholder="Nombre de Usuario"
									value={username}
									onChange={e => setUserName(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<input
									type="password"
									className="form-control"
									id="exampleInputPassword"
									placeholder="Contraseña"
									value={password}
									onChange={e => setPassword(e.target.value)}
								/>
							</div>
							<button type="submit" className="btn btn-gold">
								Ingresar
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

Login.propTypes = {
	setToken: PropTypes.func.isRequired
};
