import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const AdminLogin = props => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	const { username, password, error } = store;

	const { handleChange, handleSubmit } = actions;

	useEffect(() => {
		if (store.isAuth) history.push("/Profile");
	}, []);

	return (
		<>
			<div className="contenedor-principal">
				<div className="container">
					<div className="row modal-registro">
						<div className="col-6 columna-img" />
						<div className="col mr-auto columna-form">
							<h3 className="titulos-interiores">Ingreso Adminsitrador</h3>
							<div className="parrafo-intro">
								Usa tus datos de administrador para ingresar al gestor de contenidos de Black Star Car
								Wash
							</div>
							<form onSubmit={e => handleSubmit(e, history)} method="post">
								<div className="form-group">
									<input
										type="text"
										name="username"
										className="form-control"
										placeholder="Nombre de Usuario"
										value={username}
										onChange={handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="password"
										name="password"
										className="form-control"
										id="exampleInputPassword"
										placeholder="Contraseña"
										value={password}
										onChange={handleChange}
									/>
								</div>
								<button type="submit" className="btn btn-dark">
									Ingresar
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
