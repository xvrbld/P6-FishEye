function photographerFactory(data) {
    const { id, name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        const link = document.createElement('a');
        link.href = `/photographer.html?id=${id}`;
        link.appendChild(img);
        const h2 = document.createElement( 'h2' );
        h2.setAttribute( 'class' , 'name');
        h2.textContent = name;
        const location = document.createElement ( 'span' );
        location.setAttribute( 'class' , 'city' );
        location.textContent = `${city}, ${country}` ;
        const taglineEl = document.createElement ( 'span' );
        taglineEl.setAttribute( 'class' , 'tagline' );
        taglineEl.textContent = tagline;
        const priceTag = document.createElement ( 'span' );
        priceTag.setAttribute( 'class' , 'price' );
        priceTag.textContent = `${price}€/jour`;
        article.appendChild(link);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(taglineEl);
        article.appendChild(priceTag);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}
