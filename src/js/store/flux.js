const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			services: [],
			checkout: [],
			profile: [],
			extras: [],
			horarios: []
		},
		actions: {
			getservices: () => {
				fetch("http://localhost:5000/API/Servicios", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					},
					body: "{}"
				})
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({
							services: data.results
						});
					})
					.catch(error => console.log(error));
			},
			getprofile: () => {
				fetch("http://localhost:5000/API/Profile/", {
					method: "GET",
					headers: {
						Authorization: "Bearer <JWT>"
					}
				})
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({
							profile: data.results
						});
					})
					.catch(error => console.log(error));
			},
			getcheckout_profile: () => {
				fetch("http://localhost:5000/API/Profile/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					},
					body: "{}"
				})
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({
							checkout: data.results
						});
					})
					.catch(error => console.log(error));
			},
			getcheckout: () => {
				fetch("http://localhost:5000/API/Checkout/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					},
					body: "{}"
				})
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({
							checkout: data.results
						});
					})
					.catch(error => console.log(error));
			},
			getextras: () => {
				fetch("http://localhost:5000/API/Extras/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({
							extras: data.results
						});
					})
					.catch(error => console.log(error));
			},
			gethorarios: () => {
				fetch("http://localhost:5000/horarios", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					},
					body: "{}"
				})
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({
							horarios: data.results
						});
					})
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
