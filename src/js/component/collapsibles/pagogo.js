import React from "react";
import Collapsible from "react-collapsible";

export const Pagogo = () => {
	return (
		<Collapsible trigger="Servicio Basico">
			<p>This is the collapsible content. It can be any element or React component you like.</p>
			<p>It can even be another Collapsible component. Check out the next section!</p>
		</Collapsible>
	);
};

export default Pagogo;
