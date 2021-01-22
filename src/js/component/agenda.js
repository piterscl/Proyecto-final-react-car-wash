import React, { Component } from "react";
import "../../styles/index.scss";
import domiImg from "../../img/domi.jpg";
import starImg from "../../img/star.jpg";
import cwImg from "../../img/car-wash.jpg";

export const Agenda = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-9">
        <span className="agenda">
          <a href="">AGENDA TU SERVICIOS</a>
        </span>
      </div>
      <div className="col-sm-3">
        <span className="agenda">
          <a href="">REGISTRATE</a>
        </span>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-9">
            <span className="agenda">
              <a href="">LAVADO A DOMICILIO</a>
            </span>
          </div>
          <div className="col-sm-3">
            <span className="agenda">made BY 4GEEKS ALUMNI</span>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div id="thanks" className="d-flex justify-content-center">
                  GRACIAS POR ELEGIR BLACK CAR WASH
                </div>
                <span className="agenda" />
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="card" style="width: 18rem;">
                      <img
                        id="img-card"
                        src={starImg}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <p className="card-text">
                          <Link to="/Servicios">
                            <a id="hyper">Agenda tus servicios.</a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card" style="width: 18rem;">
                      <img
                        id="img-card"
                        src={cwImg}
                        className=" card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <p className=" card-text">
                          <Link to="/Registro">
                            <a id="hyper">Registrate.</a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card" style="width: 18rem;">
                      <img
                        id="img-card"
                        src={domiImg}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <p className="card-text">
                          <Link to="/Servicios">
                            <a id="hyper">Lavado a Domicilio.</a>
                          </Link>
                        </p>
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
  </div>
);
