import React, { useState } from "react";
import contactoImg from "../../img/bg-registro-2.jpg";
import "../../styles/index.scss";
import Faq1 from "../component/collapsibles/Faq1";
import Faq2 from "../component/collapsibles/Faq2";
import Faq3 from "../component/collapsibles/Faq3";

export const Contacto = () => (
	<div className="contenedor-principal">
		<div className="container">
			<div className="row modal-servicio">
				<div className="col-6">
					<h2 className="titulos-interiores">¿Necesitas ayuda?</h2>
					<p className="parrafo-intro">Haz click y busca tu duda!</p>
					<p>
						Hacemos todo lo posible para hacer la aplicación lo más user-friendly posible, en esta sección
						encontrarás las dudas frecuentes de nuestros usuarios,
					</p>
					<div className="contact-number">
						<i className="fab fa-whatsapp" /> +569 5555 55 55
					</div>
				</div>
				<div className="col mr-auto">
					<div id="accordion">
						<div className="card faq-card">
							<div className="card-header header-soporte" id="headingOne">
								<h5 className="mb-0">
									<button
										id="headingOne"
										className="btn btn-link faq1"
										data-toggle="collapse"
										data-target="#collapseOne"
										aria-expanded="true"
										aria-controls="collapseOne">
										<Faq1 />
									</button>
								</h5>
							</div>
						</div>
						<div className="card faq-card">
							<div className="card-header header-soporte" id="headingTwo">
								<h5 className="mb-0">
									<button
										className="btn btn-link collapsed faq"
										data-toggle="collapse"
										data-target="#collapseTwo"
										aria-expanded="false"
										aria-controls="collapseTwo">
										<Faq2 />
									</button>
								</h5>
							</div>
						</div>
						<div className="card faq-card">
							<div className="card-header header-soporte" id="headingThree">
								<h5 className="mb-0">
									<button
										className="btn btn-link collapsed faq"
										data-toggle="collapse"
										data-target="#collapseThree"
										aria-expanded="false"
										aria-controls="collapseThree">
										<Faq3 />
									</button>
								</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
