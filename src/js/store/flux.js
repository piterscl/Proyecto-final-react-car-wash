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
				fetch("https://localhost:5000/Servicios")
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({
							services: data.results
						});
					})
					.catch(error => console.log(error));
			},
			getprofile: () => {
				fetch("https://localhost:5000/Profile")
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({
							profile: data.results
						});
					})
					.catch(error => console.log(error));
			},
			getcheckout: () => {
				fetch("https://localhost:5000/Checkout")
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({
							checkout: data.results
						});
					})
					.catch(error => console.log(error));
			},
			getextras: () => {
				fetch("https://localhost:5000/Extras")
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({
							checkout: data.results
						});
					})
					.catch(error => console.log(error));
			},
			gethorarios: () => {
				fetch("https://localhost:5000/Horarios")
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({
							checkout: data.results
						});
					})
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
