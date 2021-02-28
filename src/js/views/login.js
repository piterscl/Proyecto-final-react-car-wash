import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.scss";
import PropTypes from "prop-types";

export const Login = props => {
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
							<h3 className="titulos-interiores">Ingresar</h3>
							<div className="parrafo-intro">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
										placeholder="Password"
										value={password}
										onChange={handleChange}
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
		</>
	);
};
