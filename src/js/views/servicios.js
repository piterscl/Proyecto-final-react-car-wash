import React, { useState } from "react";
import "../../styles/servicios.scss";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ServSelec from "../component/servicios/seleccion-servicio";
import ServExtra from "../component/servicios/servicios-extra";
import SelecAgenda from "../component/servicios/seleccion-agenda";

export const Servicios = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.getextras();
	});

	const handleChange = e => {
		let datos = state;
		datos[e.target.name] = e.target.value;
		setState(datos);
	};

	const handleSubmit = e => {
		e.preventDefault();
		saveServices(state);
	};

	const saveServices = () => {
		fetch("http://localhost:5000/API/Checkout", {
			method: "POST",
			body: JSON.stringify(form),
			headers: { "content-type": "application/json" }
		}).then(resp => resp.json());
		history.push("/Checkout");
	};
	return (
		<div className="contenedor-principal">
			<div className="container">
				<div className="main-servicios">
					<ServSelec />
					<ServExtra />
					<SelecAgenda />
				</div>
			</div>
		</div>
	);
};

Servicios.propTypes = {
	match: PropTypes.object
};
