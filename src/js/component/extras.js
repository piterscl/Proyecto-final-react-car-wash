import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/index.scss";

export const ExtraServicios = () => {
	function Extras() {
		const { store, actions } = useContext(Context);

		useEffect(() => {
			actions.getextras();
		}, []);
		return (
			<>
				{store.characters.map((elemento, index) => {
					return (
						<div key={index} className="contenedor-principal">
							<div className="container">
								<div className="main-servicios">
									<hr />
									<h2 className="titulos-interiores">Selecciona servicios adicionales</h2>
									<p className="parrafo-intro">
										Selecciona los servicios adicionales que deseas agregar
									</p>
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
											value=""
											id="defaultCheck1"
										/>
										<label
											className="form-check-label"
											htmlFor="defaultCheck1"
											onChange={handleChange}>
											{elemento.nombre_extra}
										</label>
									</div>
									<hr />
								</div>
							</div>
						</div>
					);
				})}
			</>
		);
	}
};

export default ExtraServicios;
