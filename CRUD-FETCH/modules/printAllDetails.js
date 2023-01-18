
export const printAllDetails = (container, arrayProperties) => {
    container.innerHTML = "";

    arrayProperties.forEach((properties) => {
        const article = document.createElement("article");
        article.classList.add("main_card_all");
        article.innerHTML = `
        <article>
        <figure class= "card_image">
        <img src=${properties.urlImage} alt="${properties.name}" class="card_img">
        </figure>
        </article>
        <article class ="information">
            <h4 class="card_information">Name: ${properties.name}</h4> 
            <h4 class="card_information">Location: ${properties.location}</h4>  
            <h4 class="card_information"> ${properties.information}</h4>          
            <h4 class="card_information">Owner: ${properties.owner}</h4>
            <h4 class="card_information">Ubication: ${properties.ubication}</h4>
            <h4 class="card_information">Area total: ${properties.areaTotal}</h4>
            <h4 class="card_information">Number rooms: ${properties.numberRooms}</h4>
            <h4 class="card_information">Type: ${properties.type}</h4>
            <h4 class="card_information">Contract: ${properties.contract}</h4>
            <h4 class="card_information">Price: ${properties.price}</h4>
            <h4 class="card_information">Parking: ${properties.parking}</h4>
            <h4 class="card_information">Description: ${properties.description}</h4>
            <article class ="button_emoticons">   
                <button class ="card_delete" name='${properties.id}'> ✖ </button>
                <button class ="card_edit" name='${properties.id}'> ✏ </button>
                <button class="card__favorite" name='${properties.id}'>❤</button>
            </article>
        </article>
        `;
        container.appendChild(article);
    });
};
