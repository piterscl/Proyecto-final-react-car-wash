import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/agenda_cards.scss";
import domiImg from "../../img/domi.jpg";
import starImg from "../../img/star.jpg";
import cwImg from "../../img/car-wash.jpg";

export const Agenda = () => (
	<div className="container-fluid">
		<div className="container">
			<div className="row">
				<div className="col-sm-4">
					<div className="card" style={{ width: "15vw" }}>
						<img id="img-card" src={starImg} className="card-img-top" alt="..." />
						<div className="card-body">
							<p className="card-text">
								<Link to="/Servicios">
									<a id="hyper">Agenda tus servicios.</a>
								</Link>
							</p>
						</div>
					</div>
				</div>
				<div className="col-sm-4">
					<div className="card" style={{ width: "15vw" }}>
						<img id="img-card" src={cwImg} className=" card-img-top" alt="..." />
						<div className="card-body">
							<p className=" card-text">
								<Link to="/Registro">
									<a id="hyper">Registrate.</a>
								</Link>
							</p>
						</div>
					</div>
				</div>
				<div className="col-sm-4">
					<div className="card" style={{ width: "15vw" }}>
						<img id="img-card" src={domiImg} className="card-img-top" alt="..." />
						<div className="card-body">
							<p className="card-text">
								<Link to="/Servicios">
									<a id="hyper">Lavado a Domicilio.</a>
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
