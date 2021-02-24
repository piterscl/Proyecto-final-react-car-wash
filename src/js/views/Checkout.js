import React, { useState } from "react";
import "../../styles/checkout.scss";

export const Checkout = () => (
	<div className="contenedor-principal">
		<div className="container" />
		<div className="row">
			<div className="col-sm-12">
				<button id="btn" className="btn btn-dark">
					Terminado
				</button>
			</div>
		</div>
	</div>
);

function myFunction() {
	let popup = document.getElementById("myPopup");
	popup.classList.toggle("show");
}
