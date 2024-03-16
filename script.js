const portfolioData = [
    // Video
    { image: 'img/Video/breezeblocks.png', title: 'Breezeblocks', art: 'Music Video' },
    { image: 'img/Video/isolated.png', title: 'Isolated', art: 'Short Film' },
    { image: 'img/Video/kissOfDeath.png', title: 'Kiss of Death', art: 'Short Film' },
    { image: 'img/Video/straubsphoto.png', title: 'Straubsphoto', art: 'Promo Video' },

    //Audio

    //Graphic Design

    //Code
    
];

// Funktion zum Erstellen und Einfügen von Portfolio-Karten
function createPortfolioCards(data) {
    const portfolioSection = document.getElementById('portfolio');

    data.forEach(item => {
        // Card
        const card = document.createElement('div');
        card.classList.add('portfolio-card');

        // Bild hinzufügen
        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.title;
        card.appendChild(image);

        // Überschrift hinzufügen
        const title = document.createElement('h3');
        title.textContent = item.title;
        card.appendChild(title);

         // Art hinzufügen
         const art = document.createElement('h4');
         art.textContent = item.art;
         card.appendChild(art);

        // Karte zur Portfolio-Sektion hinzufügen
        portfolioSection.appendChild(card);
    });
}

// Portfolio-Karten erstellen und einfügen
createPortfolioCards(portfolioData);