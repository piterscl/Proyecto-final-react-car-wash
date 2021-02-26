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
				fetch("https://localhost:5000/API/Servicios")
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({
							services: data.results
						});
					})
					.catch(error => console.log(error));
			},
			getprofile: () => {
				fetch("https://localhost:5000/API/Profile")
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({
							profile: data.results
						});
					})
					.catch(error => console.log(error));
			},
			getcheckout: () => {
				fetch("http://localhost:5000/API/Profile/<int:id>/Checkout/<int:id>")
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({
							checkout: data.results
						});
					})
					.catch(error => console.log(error));
			},
			getextras: () => {
				fetch("https://localhost:5000/API/Extras/<int:id>")
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({
							extras: data.results
						});
					})
					.catch(error => console.log(error));
			},
			gethorarios: () => {
				fetch("https://localhost:5000/horarios")
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
