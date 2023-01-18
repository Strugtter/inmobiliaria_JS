import { printAllDetails } from "./printAllDetails.js";

export const printDetails = (idClick, properties, container) => {
            let propertyFound = properties.find(property => parseInt(property.id) === idClick);
            console.log(propertyFound);
            let arraypropertyFound = [];
            arraypropertyFound.push(propertyFound);
      //      printCardProperties(container, arraypropertyFound);
            printAllDetails(container, arraypropertyFound);
    };


