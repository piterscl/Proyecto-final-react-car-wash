import React from "react";
import "../../../styles/video.scss";

export const Video = () => (
	<div className="container-fluid">
		<div id="upper-paralax" className="row">
			<div className="col-sm-6">
				<iframe
					className="yt"
					src="https://www.youtube.com/embed/HF9JfW-ayfA?autoplay=1"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			</div>
			<div className="col-sm-6">
				<h2>Servicios Extras</h2>
				<div className="form-check">
					<label className="form-check-label" htmlFor="defaultCheck1">
						Detergente premium
					</label>
					<span className="precio-extra">$5.000</span>
				</div>
				<hr />
				<div className="form-check">
					<label className="form-check-label" htmlFor="defaultCheck1">
						Silicona premium
					</label>
					<span className="precio-extra">$5.000</span>
				</div>
				<hr />
				<div className="form-check">
					<label className="form-check-label" htmlFor="defaultCheck1">
						Lavado motor
					</label>
					<span className="precio-extra">$10.000</span>
				</div>
				<hr />
				<div className="form-check">
					<label className="form-check-label" htmlFor="defaultCheck1">
						Limpiador llantas
					</label>
					<span className="precio-extra">$6.000</span>
				</div>
				<hr />
				<div className="form-check">
					<label className="form-check-label" htmlFor="defaultCheck1">
						Cera aerosol
					</label>
					<span className="precio-extra">$4.000</span>
				</div>
			</div>
		</div>
	</div>
);
