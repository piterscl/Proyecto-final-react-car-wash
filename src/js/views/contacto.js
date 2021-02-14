import React, { useState } from "react";
import contactoImg from "../../img/bg-registro-2.jpg";
import "../../styles/index.scss";

export const Contacto = () => (
	<div className="contenedor-principal">
		<div className="container">
			<div className="row modal-servicio">
				<div className="col-6">
					<h2 className="titulos-interiores">¿Necesitas ayuda?</h2>
					<p className="parrafo-intro">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					</p>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of
						type and scrambled it to make a type specimen book. It has survived not only five centuries, but
						also the leap into electronic typesetting, remaining essentially unchanged.
					</p>
					<div className="contact-number">
						<i className="fab fa-whatsapp" /> +569 5555 55 55
					</div>
					<div className="col mr-auto">
						<div id="accordion">
							<div className="card faq-card">
								<div className="card-header header-soporte" id="headingOne">
									<h5 className="mb-0">
										<button
											className="btn btn-link faq"
											data-toggle="collapse"
											data-target="#collapseOne"
											aria-expanded="true"
											aria-controls="collapseOne">
											F.A.Q #1 <i className="fas fa-angle-down rotate-icon" />
										</button>
									</h5>
								</div>

								<div
									id="collapseOne"
									className="collapse show"
									aria-labelledby="headingOne"
									data-parent="#accordion">
									<div className="card-body">Anim pariatur cliche reprehenderit.</div>
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
											F.A.Q #2 <i className="fas fa-angle-down rotate-icon" />
										</button>
									</h5>
								</div>
								<div
									id="collapseTwo"
									className="collapse"
									aria-labelledby="headingTwo"
									data-parent="#accordion">
									<div className="card-body">Anim pariatur cliche reprehenderit.</div>
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
											F.A.Q #3 <i className="fas fa-angle-down rotate-icon" />
										</button>
									</h5>
								</div>
								<div
									id="collapseThree"
									className="collapse"
									aria-labelledby="headingThree"
									data-parent="#accordion">
									<div className="card-body">Anim pariatur cliche reprehenderit.</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
