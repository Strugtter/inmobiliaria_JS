import { printCardProperties } from "./printCardPropiedades.js";
import { printAllDetails } from "./printAllDetails.js";

export const printDetails = (idClick, properties, container) => {

            let propertyFound = properties.find(property => property.id === idClick);
            let arraypropertyFound = [];
            arraypropertyFound.push(propertyFound);
      //      printCardProperties(container, arraypropertyFound);
            printAllDetails(container, arraypropertyFound)

    };


