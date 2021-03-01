import { id } from "date-fns/locale";
import { useStore } from "react-redux";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiURL: "http://localhost:5000",
			username: "",
			password: "",
			error: null,
			isAuth: false,
			currentUser: null,
			id: "",
			profile: null,
			extras: []
		},
		actions: {
			getextras: () => {
				fetch("http://localhost:5000/API/Extras")
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({
							extras: data.results
						});
					})
					.catch(error => console.log(error));
			},
			isAuthenticated: () => {
				console.log("verificando usuario");
				if (sessionStorage.getItem("isAuth")) {
					setStore({
						isAuth: JSON.parse(sessionStorage.getItem("isAuth")),
						currentUser: JSON.parse(sessionStorage.getItem("currentUser"))
					});
				}
			},
			handleChange: e => {
				setStore({
					[e.target.name]: e.target.value
				});
			},
			handleSubmit: async (e, history) => {
				e.preventDefault();
				try {
					const { apiURL, username, password } = getStore();
					const data = { username: username, password: password, id: id };
					//console.log(data);
					const resp = await fetch(`${apiURL}/API/Login`, {
						method: "POST",
						body: JSON.stringify(data),
						headers: {
							"Content-Type": "application/json"
						}
					});
					const infoUser = await resp.json();
					if (infoUser.msg) {
						setStore({
							password: "",
							error: infoUser.msg
						});
					} else {
						setStore({
							username: "",
							password: "",
							error: null,
							currentUser: infoUser,
							id: "",
							/* id: currentUser.id, */
							isAuth: true
						});
						sessionStorage.setItem("isAuth", true);
						sessionStorage.setItem("currentUser", JSON.stringify(infoUser));
						getActions().getProfile();
						history.push("/Profile/");
					}
				} catch (error) {
					setStore({
						error: error.message
					});
				}
			},
			getProfile: () => {
				const { apiURL, currentUser } = getStore();
				fetch(`${apiURL}/API/Profile`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + currentUser?.access_token
					}
				})
					.then(resp => resp.json())
					.then(data => {
						console.log(data);
						setStore({
							profile: data
						});
					})
					.catch(error => console.log(error));
			}
		}
	};
};
export default getState;
