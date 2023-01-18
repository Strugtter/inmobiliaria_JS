export const printCardProperties = (container, arrayProperties) => {
    container.innerHTML = "";

    arrayProperties.forEach((properties) => {
        const article = document.createElement("article");
        article.classList.add("main_card");
        article.innerHTML = `
            <figure class= "card_image">
            <img id=${properties.id} src=${properties.urlImage} alt="${properties.name}" class="card_img">
            </figure>
            <article class ="information">
                <h4 class="card_location"> ${properties.location}</h4>  
                <h4 class="card_information"> ${properties.information}</h4>
                <article class ="img_card_owner" id=${properties.id}>
                    <button class ="button_img_card_owner" name=''>
                    <figure class= "button_card_image">
                    <img src=${properties.urlImageOwner}  class="button_card_img">
                    </figure>
                    </button>
                    <h4 class="card_owner"> ${properties.owner}</h4>
                </article>
                <h4 class="card_information"> ${properties.ubication}</h4>
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
