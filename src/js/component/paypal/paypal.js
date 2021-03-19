import React from "react";
import { PayPalButton } from "react-paypal-button-v2";

export const PayPal = () => ({
	render() {
		return (
			<PayPalButton
				amount="0.01"
				onSuccess={(details, data) => {
					alert("Transaction completed by " + details.payer.name.given_name);

					return fetch("/paypal-transaction-complete", {
						method: "post",
						body: JSON.stringify({
							orderID: data.orderID
						})
					});
				}}
			/>
		);
	}
});
