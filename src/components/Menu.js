import React from 'react';
import '../styles.css';

const menuData = {
  polévky: [
    { name: 'KRUPICOVÁ S VEJCI', size: '0,33l', price: '50 Kč', allergens: '1,3,6,9' },
    { name: 'DRŠŤKOVÁ', size: '', price: '60 Kč', allergens: '1,6' },
  ],
  pečivo: [
    { name: 'NAŠE RUČNĚ PLETENÁ HOUSKA, SEMILSKÝ ROHLÍK', size: '180 g', price: '8,- 6,- Kč', allergens: '1,3,7' },
  ],
  hlavníJídla: [
    { name: 'DUŠENÁ HOVĚZÍ LÍČKA NA ČERVENÉM VÍNĚ S KOŘENOVOU ZELENINOU, BRAMBOROVÁ KAŠE', size: '180 g', price: '188 Kč', allergens: '4,6,9' },
    { name: 'PLNĚNÝ BRAMBOROVÝ KNEDLÍK UZENÝM MASEM, DUŠENÉ ČERVENÉ ZELÍ, SMAŽENÁ CIBULKA', size: '250 g', price: '165 Kč', allergens: '1,3' },
    { name: 'ŠPAGETY S KUŘECÍM MASEM A KARI OMÁČKOU, SÝR', size: '250 g', price: '155 Kč', allergens: '1,7,3' },
    { name: 'KRŮTÍ STEAK S RESTOVANÝMI FAZOLKAMI, VAŘENÝ BRAMBOR, RUKOLA', size: '180 g', price: '185 Kč', allergens: '7,3,10' },
    { name: 'KUŘECÍ SMĚS PO ČÍNSKU, RÝŽE (HRANOLKY)', size: '180 g', price: '178 Kč', allergens: '3,6,10' },
    { name: 'SALÁTOVÝ TALÍŘ SE SMAŽENOU CUKETOU, PARMAZÁNEM A OPEČENOU BAGETOU', size: '180 g', price: '158 Kč', allergens: '1,7,3,10' },
    { name: 'STEAK Z VEPŘOVÉ KOTLETY S UZENÝM BŮČKEM A VOLSKÝM VOKEM, HRANOLKY', size: '180 g', price: '185 Kč', allergens: '3,1,6,10' },
    { name: 'STEAK Z HOVĚZÍHO ROŠTĚNCE(z býka) NA GRILU, AMERICKÝ BRAMBOR, TATARSKÁ OMÁČKA', size: '180 g', price: '245 Kč', allergens: '1,6' },
    { name: 'SMAŽENÝ VEPŘOVÝ NEBO KUŘECÍ ŘÍZEK, VAŘENÝ BRAMBOR, CITRON, OKURKA', size: '180 g', price: '205 Kč', allergens: '1,3,7' },
    { name: 'SMAŽENÝ SÝR (eidam), VAŘENÝ BRAMBOR, TATARSKÁ OMÁČKA', size: '125 g', price: '189 Kč', allergens: '1,3,7' },
    { name: 'SMAŽENÝ CAMEMBERT (HERMELÍN), VAŘENÝ BRAMBOR, TATARSKÁ OMÁČKA', size: '125g', price: '189 Kč', allergens: '1,3,7' },
    { name: 'HOVĚZÍ BURGER (chuck-roll,irské hovězí) S ČEDAREM A ČERSTVOU ZELENINOU, ,,NAŠE" BULKA, HRANOLKY, TATARSKÁ OMÁČKA (možno pálivé challapeňos)', size: '180 g', price: '205 Kč', allergens: '1,3,6,7,10' },
    { name: 'KUŘECÍ TRHANÉ MASO V,,NAŠÍ" BULCE, ČERSTVÁ ZELENINA, TATARSKÁ OMÁČKA, HRANOLKY(možno pálivé challapeňos)', size: '180 g', price: '185 Kč', allergens: '1,3,7,10' },
    { name: 'GRILOVANÝ CAMEMBERT NA ZELENINOVÉM SALÁTKU, 1/2 VAŘENÝCH BRAMBOR, BRUSINKY', size: '1 ks', price: '159 Kč', allergens: '7' },
    { name: 'SALÁT S ČERVENOU ŘEPOU A KOZÍM SÝREM, RUKOLOU, PŘELITÝ TEPLÝM MEDEM, PEČIVO', size: '250g', price: '189 Kč', allergens: '1,3,7' },
  ],
  saláty: [
    { name: 'ŠOPSKÝ SALÁT NEBO MÍCHANÝ SALÁT (dle vašeho výběru)', size: '150g', price: '79 Kč', allergens: '1,3' },
  ],
  dezerty: [
    { name: 'BANÁN SE STROUHANOU ČOKOLÁDOU, ŠLEHAČKA', size: '1 ks', price: '39 Kč', allergens: '1,3,7,10' },
    { name: 'PALAČINKA SE ZMRZLINOU, OVOCE, ŠLEHAČKA, STROUHANÁ ČOKOLÁDA', size: '1 ks', price: '99 Kč', allergens: '1,3,10' },
    { name: 'RAKVIČKA NEBO ČOKOLÁDOVÁ TRUBIČKA SE ŠLEHAČKOU A JEŠTĚ PODÁVÁME ŠTRŮDL KE KÁVĚ', size: '1 ks', price: '33 Kč', allergens: '1,10' },
  ],
};

const imageGalleryData = [
    { src: 'images/gallery-image1.jpg', alt: 'Pohled na interiér restaurace' },
    { src: 'images/gallery-image2.jpg', alt: 'Detail jídla' },
    { src: 'images/gallery-image3.jpg', alt: 'Čepování piva' },
    { src: 'images/gallery-image4.jpg', alt: 'Zahrádka restaurace' },
];

// In Menu.js and DrinkMenu.js
const MenuItem = ({ item }) => (
    <div className="menu-item">
        <div className="item-details">
            <h3 className="item-name">
                {item.name} {item.size && <span className="item-size">({item.size})</span>}
            </h3>
            <p className="item-description">Alergeny: {item.allergens}</p>
        </div>
        <span className="price">{item.price}</span>
    </div>
);

const Menu = () => {
    return (
        <div className="container">
            <section className="content-section">
                <h2>Denní menu: čtvrtek 18. září</h2>
                <h3>Polévky</h3>
                {menuData.polévky.map((item, index) => (
                    <MenuItem key={index} item={item} />
                ))}
                <h3>Pečivo</h3>
                {menuData.pečivo.map((item, index) => (
                    <MenuItem key={index} item={item} />
                ))}
                <h3>Hlavní jídla</h3>
                {menuData.hlavníJídla.map((item, index) => (
                    <MenuItem key={index} item={item} />
                ))}
                <h3>Saláty</h3>
                {menuData.saláty.map((item, index) => (
                    <MenuItem key={index} item={item} />
                ))}
                <h3>Dezert</h3>
                {menuData.dezerty.map((item, index) => (
                    <MenuItem key={index} item={item} />
                ))}
            </section>
            
            <section className="content-section">
                <h2>Galerie</h2>
                <div className="image-gallery">
                    {imageGalleryData.map((img, index) => (
                        <img key={index} src={img.src} alt={img.alt} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Menu;