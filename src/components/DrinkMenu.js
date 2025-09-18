import React from 'react';
import '../styles.css';

const drinkMenuData = {
  pivo: [
    { name: 'Velkopopovický kozel 11', size: '0,5 l', price: '44 Kč', allergens: 'ječný slad' },
    { name: 'Bernard 11', size: '0,5 l', price: '46 Kč', allergens: 'ječný slad' },
    { name: 'Plzeňský prazdroj 12', size: '0,5 l', price: '59 Kč', allergens: '1,3,7' },
  ],
  vínoSekt: [
    { name: 'Bílé', size: '0,2 l', price: '52 Kč', allergens: 'oxid siřičitý' },
    { name: 'Červené', size: '0,2 l', price: '52 Kč', allergens: 'oxid siřičitý' },
    { name: 'Sekt', size: '0,7 l', price: '52 Kč', allergens: 'oxid siřičitý' },
  ],
  nealko: [
    { name: 'Voda z kohoutku (karafa)', size: '0,5 l', price: '0 Kč' },
    { name: 'Natura jemně perlivá', size: '0,33 l', price: '35 Kč' },
    { name: 'Natura neperlivá', size: '0,33 l', price: '35 Kč' },
    { name: 'Coca Cola', size: '0,33 l', price: '45 Kč' },
    { name: 'Coca Cola light', size: '0,33 l', price: '45 Kč' },
    { name: 'Fanta', size: '0,33 l', price: '45 Kč' },
    { name: 'Sprite', size: '0,33 l', price: '45 Kč' },
    { name: 'Tonic Kinley', size: '0,25 l', price: '40 Kč' },
    { name: 'Cappy (dle nabídky)', size: '0,2 l', price: '35 Kč' },
    { name: 'Malinovka', size: '0,33 l', price: '35 Kč' },
    { name: 'Revona', size: '0,33 l', price: '35 Kč' },
    { name: 'Oranžáda', size: '0,33 l', price: '35 Kč' },
    { name: 'Točená Swift cola', size: '0,1 l', price: '10 Kč' },
    { name: 'Bio džusy', size: '0,2 l', price: '45 Kč' },
    { name: 'Energetický nápoj', size: '0,25 l', price: '65 Kč' },
  ],
  tepléNápoje: [
    { name: 'Čaj (dle nabídky)', size: '1 ks', price: '35 Kč' },
    { name: 'Horký punč', size: '0,2 l', price: '55 Kč' },
    { name: 'Horká griotka', size: '0,04 l', price: '50 Kč' },
    { name: 'Grog', size: '0,04 l', price: '50 Kč' },
    { name: 'Svařák', size: '0,2 l', price: '55 Kč' },
    { name: 'Horká čokoláda', size: '1 ks', price: '50 Kč', allergens: 'mléko' },
  ],
  destiláty: [
    { name: 'Božkov Vodka', size: '4 cl', price: '45 Kč' },
    { name: 'Finlandia', size: '4 cl', price: '60 Kč' },
    { name: 'Absolut Vodka', size: '4 cl', price: '65 Kč' },
    { name: 'Berentzen', size: '4 cl', price: '55 Kč' },
    { name: 'Jim Beam', size: '4 cl', price: '70 Kč' },
    { name: 'Tullamore Dew', size: '4 cl', price: '80 Kč' },
    { name: 'Jack Daniel´s (možno i medový, skořice)', size: '4 cl', price: '85 Kč' },
    { name: 'Captian Morgan', size: '4 cl', price: '60 Kč' },
    { name: 'Bacardi', size: '4 cl', price: '60 Kč' },
    { name: 'Božkov Tuzemský (dle nabídky)', size: '4 cl', price: '45 Kč' },
    { name: 'Metaxa 5*', size: '4 cl', price: '75 Kč' },
    { name: 'Fernet Stock', size: '4 cl', price: '50 Kč' },
    { name: 'Fernet Stock Citrus', size: '4 cl', price: '50 Kč' },
    { name: 'Božkov Peprmint', size: '4 cl', price: '45 Kč' },
    { name: 'Božkov Griotte', size: '4 cl', price: '45 Kč' },
    { name: 'Becherovka', size: '4 cl', price: '50 Kč' },
    { name: 'Slivovice (dle nabídky)', size: '4 cl', price: '70 Kč' },
    { name: 'Hruškovice Williams', size: '4 cl', price: '70 Kč' },
    { name: 'Rum třtinový', size: '4 cl', price: '55 Kč' },
    { name: 'Rum třtinový víceletý (dle nabídky)', size: '4 cl', price: '80 Kč' },
    { name: 'Jägermeister', size: '4 cl', price: '75 Kč' },
    { name: 'Beefeater Gin', size: '4 cl', price: '65 Kč' },
    { name: 'Cinzano', size: '10 cl', price: '55 Kč' },
    { name: 'Tequilla (dle nabídky)', size: '4 cl', price: '70 Kč' },
    { name: 'Vaječný likér', size: '4 cl', price: '40 Kč', allergens: 'mléko, vejce' },
  ],
  káva: [
    { name: 'Espresso', size: '', price: '40 Kč' },
    { name: 'Instantní', size: '', price: '35 Kč' },
    { name: 'Turecká', size: '', price: '35 Kč' },
    { name: 'Latte macchiato', size: '', price: '50 Kč', allergens: 'mléko' },
    { name: 'Cappuccino', size: '', price: '45 Kč', allergens: 'mléko' },
    { name: 'Alžírská', size: '', price: '60 Kč', allergens: 'mléko, vejce' },
    { name: 'Vídeňská', size: '', price: '55 Kč', allergens: 'mléko' },
    { name: 'Smetana do kávy', size: '', price: '5 Kč' },
  ],
  ostatní: [
    { name: 'Mandle', size: '100 g', price: '40 Kč' },
    { name: 'Archivní vína (dle naší nabídky)', size: '0,7 l', price: '300 Kč' },
    { name: 'Arašídy', size: '100 g', price: '35 Kč' },
    { name: 'Brambůrky (Bohemia)', size: '75 g', price: '30 Kč' },
  ],
};

// In Menu.js and DrinkMenu.js
const DrinkMenuItem = ({ item }) => (
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

const DrinkMenu = () => {
  return (
    <div className="container">
      <section className="content-section">
        <h2>Nápojový lístek</h2>
        <div className="menu-category">
          <h3>Pivo (Točené)</h3>
          {drinkMenuData.pivo.map((item, index) => (
            <DrinkMenuItem key={index} item={item} />
          ))}
        </div>
        <div className="menu-category">
          <h3>Víno, sekt</h3>
          <p className="category-info">Rozlévané, dle nabídky, alergen oxid siřičitý</p>
          {drinkMenuData.vínoSekt.map((item, index) => (
            <DrinkMenuItem key={index} item={item} />
          ))}
        </div>
        <div className="menu-category">
          <h3>Nealkoholické Nápoje</h3>
          {drinkMenuData.nealko.map((item, index) => (
            <DrinkMenuItem key={index} item={item} />
          ))}
        </div>
        <div className="menu-category">
          <h3>Teplé nápoje</h3>
          {drinkMenuData.tepléNápoje.map((item, index) => (
            <DrinkMenuItem key={index} item={item} />
          ))}
        </div>
        <div className="menu-category">
          <h3>Destiláty (4 cl)</h3>
          {drinkMenuData.destiláty.map((item, index) => (
            <DrinkMenuItem key={index} item={item} />
          ))}
        </div>
        <div className="menu-category">
          <h3>Káva</h3>
          {drinkMenuData.káva.map((item, index) => (
            <DrinkMenuItem key={index} item={item} />
          ))}
        </div>
        <div className="menu-category">
          <h3>Ostatní</h3>
          {drinkMenuData.ostatní.map((item, index) => (
            <DrinkMenuItem key={index} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default DrinkMenu;