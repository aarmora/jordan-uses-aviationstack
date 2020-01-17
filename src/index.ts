import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

// https://aviationstack.com/documentation
(async () => {
	const baseUrl = `http://api.aviationstack.com/v1`;

	// See how many total we get
	// const axiosResponse = await axios.get(`${baseUrl}/flights?access_key=${process.env.apiKey}`);

	// console.log('response', axiosResponse.data.pagination.total);


	// Limit to 5 and offset by 50
	// const axiosResponse = await axios.get(`${baseUrl}/flights?access_key=${process.env.apiKey}&limit=5&offset=50`);

	// console.log('response', axiosResponse.data.data);


	// Get historical data (Basic plan or higher)
	// const axiosResponse = await axios.get(`${baseUrl}/flights?access_key=${process.env.apiKey}&flight_date=03-01-2020`);

	// console.log('response', axiosResponse.data.data);


	// Get cities information
	// const axiosResponse = await axios.get(`${baseUrl}/cities?access_key=${process.env.apiKey}`);

	// console.log('response', axiosResponse.data);

	// Get Boise airport information
	const axiosResponse = await axios.get(`${baseUrl}/airports?access_key=${process.env.apiKey}&search=boise`);

	console.log('response', axiosResponse.data)



	// Get airports Boise flies to
	// const axiosResponse = await axios.get(`${baseUrl}/flights?access_key=${process.env.apiKey}&dep_iata=boi`);

	// const airportsBoiseFliesTo: any[] = [];

	// for (let flight of axiosResponse.data.data) {
	// 	if (airportsBoiseFliesTo.indexOf(flight.arrival.airport) < 0) {
	// 		airportsBoiseFliesTo.push(flight.arrival.airport);
	// 	}
	// }

	// console.log('airports boise flies to', airportsBoiseFliesTo);
})();