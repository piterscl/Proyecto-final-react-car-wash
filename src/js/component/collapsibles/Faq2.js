import React from "react";
import Collapsible from "react-collapsible";

const Faq2 = () => {
	return (
		<Collapsible trigger="Trabaja con Nosotros">
			<div className="mb-3">
				<label htmlFor="exampleFormControlInput1" className="form-label">
					Email address
				</label>
				<input
					type="email"
					className="form-control"
					id="exampleFormControlInput1"
					placeholder="name@example.com"></input>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleFormControlTextarea1" className="form-label">
					Cuentanos de ti!!
				</label>
				<textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
			</div>
		</Collapsible>
	);
};

export default Faq2;
