import React from "react";
import Collapsible from "react-collapsible";
import "../../../styles/contacto.scss";

const Faq1 = () => {
	return (
		<Collapsible trigger="Preguntas Frecuentes">
			<div className="mb-3">
				<p> ¿Como lavan el automovil?</p>
				<p> ¿El lavado raya mi auto?</p>
				<p> ¿Puede lavar el automovil en subterraneos?</p>
				<p> ¿Cuanto tiempo demora en lavar el automovil?</p>
				<p> ¿Cuales son las formas de pago?</p>
				<p> ¿En que zona tienen Cobertura?</p>
			</div>
		</Collapsible>
	);
};

export default Faq1;
