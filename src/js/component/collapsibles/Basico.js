import React from "react";
import Collapsible from "react-collapsible";

export const Basico = () => {
	return (
		<Collapsible trigger="Servicio Basico">
			<p>- Lavado de carrocería manual.</p>
			<p>- Limpieza de vidrios y espejos exterior.</p>
			<p>- Limpieza de plásticos exteriores.</p>
			<p>- Renovador de gomas en neumáticos.</p>
		</Collapsible>
	);
};

export default Basico;
