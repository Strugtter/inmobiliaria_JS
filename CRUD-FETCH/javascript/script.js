import getDataFetch from "../helpers/getData.js"
import deleteDataFetch from "../helpers/deleteData.js";
import { btnFilter } from "../modules/selectToFilter.js";
import { printCardProperties } from "../modules/printCardPropiedades.js";
import postDataFetch from "../helpers/postData.js";


export const urlPropiedades = 'http://localhost:3000/propiedades';
const urlFavoritos = 'http://localhost:3000/favoritos';
const containerProperties = document.getElementById("contenedorProperties");
console.log(containerProperties);

export let properties = [];

// Read data base 

document.addEventListener('DOMContentLoaded', async () => {
    sessionStorage.removeItem("editProperty");
    sessionStorage.removeItem("idClick");

    try {

        properties = await getDataFetch(urlPropiedades);
        // console.log(properties);
        if (containerProperties != null || containerProperties != undefined) {
            printCardProperties(containerProperties, properties);
            // ejecute function for filter 
            btnFilter(properties, containerProperties);
        }
    } catch (error) {
        console.log(error);
        alert(error);
    };
});




document.addEventListener("click", async (event) => {

    // Dirigir al detalle del propiedad.
    const { target } = event;
    if (target.classList.contains('card_img')) {
        sessionStorage.setItem("idClick", JSON.stringify(target.id));
        window.location.href = "../pages/propertiesDetails.html";
    }

    // Eliminar property
    if (target.classList.contains("card_delete")) {

        Swal.fire({
            title: 'Esta seguro de eliminar?',
            text: "Tu quieres revertir esto!",
            icon: 'Advertencia',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Eliminado!',
                    'Se ha eliminado.',
                    'success'
                );
                const idPropertyDelete = parseInt(target.name);
                const urlDelete = `${urlPropiedades}/${idPropertyDelete}`;
                console.log(urlDelete);
                try {
                    await deleteDataFetch(urlDelete);
                    properties = await getDataFetch(urlPropiedades);
                    printCardProperties(containerProperties, properties);

                } catch (error) {
                    console.log('No se pudo eliminar hay un error' + error);
                }

            }
        })
    }
    console.log(target.classList.contains("card_edit"));
    // Function edit property
    if (target.classList.contains("card_edit")) {
        sessionStorage.setItem("editProperty", JSON.stringify(target.name));
        location.href = "../pages/addProperty.html"
    }

    //Add favorite
    if (target.classList.contains("card__favorite")) {
        const idFavorito = target.name;
        console.log(idFavorito);
        const urlPropertyFavorite = `${urlFavoritos}?id=${idFavorito}`;
        console.log(urlPropertyFavorite);
        const Favorite = await getDataFetch(urlPropertyFavorite);
        console.log(Favorite);
        const favoriteProperty = await getDataFetch(`${urlPropiedades}/${idFavorito}`);
        console.log(favoriteProperty);
        if (Favorite.length === 0 && Object.entries(favoriteProperty).length) {

            await postDataFetch(urlFavoritos, favoriteProperty);
            const data = await getDataFetch(urlFavoritos);
        }

    }


});

// Fecha del main 
let calendar = new Date();
let day = new Array(7);
day[0] = "Domingo";
day[1] = "Lunes";
day[2] = "Martes";
day[3] = "Miercoles";
day[4] = "Jueves";
day[5] = "Viernes";
day[6] = "Sabado";

let nameday = day[calendar.getDay()];
let fecha = calendar.getDate();
let mes = calendar.getMonth() + 1;
let ano = calendar.getFullYear();
export let fechaAll = `${nameday} ${fecha}/${mes}/${ano}`


const containerDate = document.getElementById("date");
containerDate.innerHTML = fechaAll;









