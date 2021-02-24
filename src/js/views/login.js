import React, { useState } from "react";
import "../../styles/index.scss";

export const Login = () => (
	<div className="contenedor-principal">
		<div className="container">
			<div className="row modal-registro">
				<div className="col-6 columna-img" />
				<div className="col mr-auto columna-form">
					<h3 className="titulos-interiores">Ingresar</h3>
					<div className="parrafo-intro">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					</div>
					<form>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								id="exampleInputName1"
								aria-describedby="namelHelp"
								placeholder="Nombre de Usuario"
							/>
						</div>
						<div className="form-group">
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword"
								placeholder="Contraseña"
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
