import React, { useState } from "react";
import "../../styles/checkout.scss";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";
/* import { Modalbtn } from "../component/modalbtn"; */
/* import { Modal } from "bootstrap"; */

export const Checkout = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<div className="container-fluid cont-table">
				<div className="container cont-table">
					<h6 className="title-chekout">Finalizar Agendamiento</h6>
					<table className="table table-dark">
						<thead>
							<tr>
								<th scope="col">Usuario</th>
								<th scope="col">Servicio</th>
								<th scope="col">Extra</th>
								<th scope="col">Fecha</th>
								<th scope="col">Hora</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>Test User</th>
								<td>Servicio Estándar</td>
								<td>Detergente premium</td>
								<td>12-05-2021</td>
								<td>11:00</td>
							</tr>
						</tbody>
					</table>
					<Button variant="primary" onClick={handleShow}>
						Finalizar
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Proceso finalizado</Modal.Title>
						</Modal.Header>
						<Modal.Body>Tu servicio ha sido agendado con éxito</Modal.Body>
						<Modal.Footer>
							<Link to="/">
								<Button variant="secondary" onClick={handleClose}>
									Cerrar
								</Button>
							</Link>
						</Modal.Footer>
					</Modal>
				</div>
			</div>
		</>
	);
};

Checkout.propTypes = {
	match: PropTypes.object
};
