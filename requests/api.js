import axios from 'axios';

const url = axios.create({
	baseURL: 'http://192.168.29.209:3000/',
});

export const getAllCities = (input, limit = 10) => {
	let result = url
		.get(`auto-complete?limit=${limit}&query=${input}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return error;
		});

	return result;
};


export const getAllHotelListPage = (input, limit = 10) => {
    console.log(input)
	let result = url
		.get(`/hotels?limit=${limit}&query=${input}%20Area`) 
		.then((response) => {
            console.log(response.data)
			return response.data;
		})
		.catch((error) => {
			return error;
		});

	return result;
};
