import React, { useState } from "react";
import Registroimg1 from "../../img/auto-registro.jpg";
import Registroimg2 from "../../img/bg-registro-2.jpg";
import Registroimg3 from "../../img/bg-registro.jpg";
import "../../styles/index.scss";

export const Registro = () => (
	<div className="contenedor-principal">
		<div className="container">
			<div className="row modal-registro">
				<div className="col-6 columna-img" />
				<div className="col mr-auto columna-form">
					<h3 className="titulos-interiores">Registrarse</h3>
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
								placeholder="Nombre..."
							/>
						</div>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								id="exampleInputApellido"
								placeholder="Apellido..."
							/>
						</div>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								id="exampleInputContraseña"
								placeholder="Contraseña..."
							/>
						</div>
						<div className="form-group">
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								placeholder="Email..."
							/>
						</div>
						<div className="form-group">
							<input
								type="tel"
								className="form-control"
								id="exampleInputTel1"
								placeholder="Teléfono..."
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
