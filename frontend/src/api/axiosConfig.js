import axios from "axios";

const axiosConfig = createInstance("http://localhost:3001/");

function createInstance(baseURL) {
	return axios.create({
		baseURL,
		headers: {
			"Content-Type": "application/json"
		}
	});
}

export default axiosConfig;
