import getDataFetch from "../helpers/getData.js";
import { printCardProperties } from "../modules/printCardPropiedades.js";
import { fechaAll } from "./script.js";

const container = document.getElementById("contenedor");
const urlFavoritos = 'http://localhost:3000/favoritos';

document.addEventListener('DOMContentLoaded', async () => {
    const favoritos = await getDataFetch(urlFavoritos);
    printCardProperties(container,favoritos);

})

document.addEventListener("click",  (event) => {
    
    // Dirigir al detalle del propiedad.
    const { target } = event;
    if (target.classList.contains('logo_main_menu_favorite')) {        
     window.location.href = "../index.html";
    }
})

// date 

const containerDate = document.getElementById("date");
containerDate.innerHTML = fechaAll;
