import React, { useState } from "react";
import Imgprofile from "../../img/user-v2.png";
import "../../styles/profile.scss";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const Profile = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="contenedor-principal">
			<div className="container">
				<div className="page-content page-container" id="page-content">
					<div className="padding">
						<div className="row container d-flex justify-content-center">
							<div className="col-xl-10 col-md-12">
								<div className="card user-card-full card-profile">
									<div className="row m-l-0 m-r-0">
										<div className="col-sm-6 bg-c-lite-green user-profile">
											<div className="card-block text-center text-white">
												<div className="m-b-25">
													{" "}
													<img
														src={Imgprofile}
														className="img-radius"
														alt="User-Profile-Image"
													/>{" "}
												</div>
												<h6 className="f-w-600">Perfil</h6>
												<p>Usuario</p>{" "}
												<i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
											</div>
										</div>
										<div className="col-sm-6">
											<div className="card-block">
												<h6 className="m-b-20 p-b-5 b-b-default f-w-600">Información</h6>
												<div className="row">
													<div className="col-sm-6">
														<p className="m-b-10 f-w-600">Email</p>
														<h6 className="text-muted f-w-400">
															{store.profile[params.email]}
														</h6>
													</div>
													<div className="col-sm-6">
														<p className="m-b-10 f-w-600">Teléfono</p>
														<h6 className="text-muted f-w-400">
															{store.profile[params.phone]}
														</h6>
													</div>
												</div>
												<h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
													Agendamiento
												</h6>
												<div className="row">
													<div className="col-sm-6">
														<p className="m-b-10 f-w-600">Servicios</p>
														<h6 className="text-muted f-w-400">Basico-Pro</h6>
													</div>
													<div className="col-sm-6">
														<p className="m-b-10 f-w-600">Fecha</p>
														<h6 className="text-muted f-w-400">
															{store.horarios[params.horariosid]}
														</h6>
													</div>
												</div>
												<ul className="social-link list-unstyled m-t-40 m-b-10">
													<li>
														<a
															href="#!"
															data-toggle="tooltip"
															data-placement="bottom"
															title=""
															data-original-title="facebook"
															data-abc="true">
															<i
																className="mdi mdi-facebook feather icon-facebook facebook"
																aria-hidden="true"
															/>
														</a>
													</li>
													<li>
														<a
															href="#!"
															data-toggle="tooltip"
															data-placement="bottom"
															title=""
															data-original-title="twitter"
															data-abc="true">
															<i
																className="mdi mdi-twitter feather icon-twitter twitter"
																aria-hidden="true"
															/>
														</a>
													</li>
													<li>
														<a
															href="#!"
															data-toggle="tooltip"
															data-placement="bottom"
															title=""
															data-original-title="instagram"
															data-abc="true">
															<i
																className="mdi mdi-instagram feather icon-instagram instagram"
																aria-hidden="true"
															/>
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Profile.propTypes = {
	match: PropTypes.object
};
