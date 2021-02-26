import React, { useState } from "react";
import "../../styles/checkout.scss";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const Checkout = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="contenedor-principal">
			<div className="container" />
			<div className="row">
				<div className="col-sm-12">
					<span>{store.checkout[params.horarios]}</span>
					<span>{store.checkout[params.servicios]}</span>
					<span>{store.checkout[params.extras]}</span>
					<span>{store.checkout[params.users]}</span>
					<button id="btn" className="btn btn-dark">
						Terminado
					</button>
				</div>
			</div>
		</div>
	);
};

Checkout.propTypes = {
	match: PropTypes.object
};
