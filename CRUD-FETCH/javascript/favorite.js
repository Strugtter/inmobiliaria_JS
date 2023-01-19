import getDataFetch from "../helpers/getData.js";
//import { printCardProperties } from "../modules/printCardPropiedades.js";
import { printCardFavorite } from "../modules/printCardFavorite.js";
import { fechaAll } from "./script.js";
import deleteDataFetch from "../helpers/deleteData.js";

const container = document.getElementById("contenedor");
const urlFavoritos = 'http://localhost:3000/favoritos';

document.addEventListener('DOMContentLoaded', async () => {
    const favoritos = await getDataFetch(urlFavoritos);
    printCardFavorite(container,favoritos);

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


document.addEventListener("click", async (event) => {
    console.log("click");
    // Dirigir al detalle del propiedad.
    const { target } = event;
    if (target.classList.contains('card_img')) {
        sessionStorage.setItem("idClick", JSON.stringify(target.id));
        window.location.href = "../pages/propertiesDetails.html";
    }

    // Eliminar property
    if (target.classList.contains("card__favorite")) {

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
                const urlDeleteFavorito = `${urlFavoritos}/${idPropertyDelete}`;
                console.log(urlDeleteFavorito);

                try {
                    await deleteDataFetch(urlDeleteFavorito);
                    let propertiesFavorite = await getDataFetch(urlFavoritos);
                    printCardFavorite(container, propertiesFavorite);

                } catch (error) {
                    console.log('No se pudo eliminar hay un error' + error);
                }

            }
        })
    }
});
