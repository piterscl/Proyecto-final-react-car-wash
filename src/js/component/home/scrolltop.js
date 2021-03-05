import React from "react";
import "../../../styles/home.scss";
import ScrollToTop from "react-scroll-to-top";

export const ToTop = () => {
	return (
		<div>
			<ScrollToTop smooth />
		</div>
	);
};

export default ToTop;
