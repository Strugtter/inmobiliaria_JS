// Capture form
import getDataFetch from "../helpers/getData.js";
import putDataFetch from "../helpers/putData.js";
import postDataFetch from "../helpers/postData.js"
import { fechaAll } from "./script.js";


const urlPropiedades = 'http://localhost:3000/propiedades';
const form = document.querySelector(".form");
// Capture inputs
const valuesForm = Object.values(form);


// Edit property

const editFormStr = sessionStorage.getItem("editProperty") ? JSON.parse(sessionStorage.getItem("editProperty")) : "";
const editForm = editFormStr ? parseInt(editFormStr) : null;

//MOdificar title
const title = document.querySelector(".title");
const buttonSubmit = valuesForm[valuesForm.length - 1];

buttonSubmit.innerHTML = editForm ? "Guardar cambios" : "Crear property";


document.addEventListener('DOMContentLoaded', async () => {
    let property = {};
    const url = editForm ? `${urlPropiedades}/${editForm}` : urlPropiedades;
    try {
        if (editForm) {
            //   const urlEdit = `${urlPropiedades}/${editForm}`;
            property = await getDataFetch(url);
            title.innerText = editForm ? `Update date of ${property.name}` : "Agregar nuevo personaje";
            valuesForm.forEach((valueInput) => {
                if (valueInput.id) {
                    valueInput.value = property[valueInput.id];
                };
            });
        }
        await submitForm(form, url)
    } catch (error) {
        console.log(error);
    }

})

// Listen event submit
const submitForm = async (form, url) => {
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const infoProperty = {};
        valuesForm.forEach(valueInput => {
            infoProperty[valueInput.id] = valueInput.value;
        });
        //space empty in form-error of edition property


        const labelsNodeList = document.querySelectorAll('label');
        console.log(labelsNodeList);
        const arryaLabel = [...labelsNodeList];
        console.log(arryaLabel);

        //  validSpaceForm(arryaLabel, infoProperty );  
        //Editar
        if (editForm) {
            await putDataFetch(url, infoProperty)
            Swal.fire(
                'Excelente!',
                'Se ha actualizado la propiedad.',
                'success'
              ).then(()=> {
                  window.location.href = "../index.html"
              })
        }
        //Crear
        if (!editForm) {
            await postDataFetch(url, infoProperty)
            Swal.fire(
                'Excelente!',
                'Se ha creado la propiedad.',
                'success'
              ).then(()=> {
                valuesForm.forEach((input)=>{
                    if(input.id){
                        input.value="";
                    }
                });
              });
        }



    });
};


// const validSpaceForm = (arryaLabel, propertyInfo) => {
//     const keyLabels = arryaLabel.map((key) => ({
//         labelName: key.innerHTML,
//         keyName: key.getAttribute("for"),
//     }));
//     console.log(keyLabels);
//     console.log(keyLabels[0].keyName);
//     console.log(typeof keyLabels[0].keyName);
//     console.log(propertyInfo);

//     let keyStr = "";
//     for (const key in propertyInfo) {
//         const propertyA = propertyInfo[key];
//         console.log(propertyA);
//         console.log(key);
//         console.log(typeof key);

//         if (!propertyA) {
//             let labelFound = keyLabels.find(label2 => label2.keyName === key);
//             console.log(labelFound);
//             keyStr += labelFound.labelName + ", ";
//         };
//     };
// };

// date 
const containerDate = document.getElementById("date");
containerDate.innerHTML = fechaAll;



