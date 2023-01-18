import { printCardProperties } from "./printCardPropiedades.js";

export const btnFilter = (arrayProperties, container) => {

    const buttonFilterType = document.getElementById("buscar");
    buttonFilterType.addEventListener("click", () => {
        const selectType = document.getElementById("type-select");
        const selectUbication = document.getElementById("ubication-select");
        let filterUbication = arrayProperties.filter(property => property.ubication === selectUbication.value)
        let filterType = arrayProperties.filter(property => property.contract === selectType.value)
        const search = document.getElementById('buscarProperties');
        console.log(typeof search.value);
        let filterSearch=[];
        if (search.value){
        filterSearch = arrayProperties.filter(property => property.type.toLowerCase().trim().includes(search.value.toLowerCase().trim()))
        console.log(filterSearch);
        }
        let filter = [...filterUbication, ...filterType, ...filterSearch]
        //Delete , properties that comply two filter.
        let setFilter = new Set(filter);
        let arrayFilter = [...setFilter]
        console.log(filter);
        console.log(setFilter);
        printCardProperties(container, arrayFilter);
        
     //   return filter, buscar la forma de acerlo con el return...
    });
}

