import React from "react";
import servicioImg1 from "../../../img/estandar.jpg";
import servicioImg2 from "../../../img/pro.jpg";
import servicioImg3 from "../../../img/premium.jpg";
import Basico from "../collapsibles/Basico";
import Pro from "../collapsibles/Pro";
import Premium from "../collapsibles/Premium";

export const ServSelec = () => {
	return (
		<>
			<h2 id="black-font" className="titulos-interiores">
				Selecciona tu servicio
			</h2>
			<p className="parrafo-intro">Elige el tipo de servicio que deseas para tu auto.</p>
			<div className="card-deck">
				<div className="card">
					{<img className="card-img-top" src={servicioImg1} alt="Card image cap" />}
					<div className="card-body">
						<h5 className="card-title titulos-interiores titulos-servicios">
							<Basico />
						</h5>
					</div>
				</div>
				<div className="card">
					{<img className="card-img-top" src={servicioImg2} alt="Card image cap" />}
					<div className="card-body">
						<h5 className="card-title titulos-interiores titulos-servicios">
							<Pro />
						</h5>
					</div>
				</div>
				<div className="card">
					{<img className="card-img-top" src={servicioImg3} alt="Card image cap" />}
					<div className="card-body">
						<h5 className="card-title titulos-interiores titulos-servicios">
							<Premium />
						</h5>
					</div>
				</div>
			</div>
		</>
	);
};

export default ServSelec;
