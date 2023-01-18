import getDataFetch from "../helpers/getData.js"
import { printDetails } from "../modules/printDetailsCardProperties.js";


const containerDetails = document.getElementById("detailsProperty");

let properties = [];

const url = 'http://localhost:3000/propiedades';
// Read data base 

document.addEventListener('DOMContentLoaded', async () => {
    try {
        properties = await getDataFetch(url);
        let idClickStr = JSON.parse(sessionStorage.getItem('idClick'));
        let idClick = parseInt(idClickStr);
        printDetails(idClick, properties, containerDetails);
    } catch (error) {
        console.log(error);
        alert(error);
    };
});


