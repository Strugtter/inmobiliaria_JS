import getDataFetch from "../helpers/getData.js"
import deleteDataFetch from "../helpers/deleteData.js";
import { btnFilter } from "../modules/selectToFilter.js";
import { printCardProperties } from "../modules/printCardPropiedades.js";


export const urlPropiedades = 'http://localhost:3000/propiedades';
const containerProperties = document.getElementById("contenedorProperties");
console.log(containerProperties);

export let properties = [];

// Read data base 

document.addEventListener('DOMContentLoaded', async () => {
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




document.addEventListener("click",  (event) => {

    // Dirigir al detalle del propiedad.
    const { target } = event;
    if (target.classList.contains('card_img')) {
        sessionStorage.setItem('idClick', JSON.stringify(target.id));
        window.location.href = "../pages/propertiesDetails.html";
    }

    // Eliminar property
    if(target.classList.contains("card_delete")){

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
});
