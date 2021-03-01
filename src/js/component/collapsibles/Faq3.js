import React from "react";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";

const Faq3 = () => {
	return (
		<Collapsible trigger="Nuestro Equipo">
			<li>
				<a href="https://github.com/AzaelContramaestre01"> Azael Contramestre</a>
			</li>
			<li>
				<a href="https://github.com/piterscl"> Pedro Antolin</a>
			</li>
			<li>
				<a href="https://github.com/MartinGO11"> Martin Gutierrez</a>
			</li>
		</Collapsible>
	);
};

export default Faq3;
