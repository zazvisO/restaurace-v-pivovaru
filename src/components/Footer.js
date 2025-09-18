import React from 'react';
import '../styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <h2>Kontakt a umístění</h2>
        <p>
          <strong>Adresa:</strong> Název ulice 123, 123 45 Město
        </p>
        <p>
          <strong>Telefon:</strong> 777 611 601
        </p>
        <p>
          <strong>Otevírací doba:</strong> Po-Ne: 11:00 - 22:00
        </p>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.684534571978!2d14.779261077180295!3d50.59029967156976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470877a56191c9bd%3A0xc0f16e45f1b13b1!2sPivovar%20a%20Restaurace%20v%20Pivovaru!5e0!3m2!1scs!2scz!4v1701198642231!5m2!1scs!2scz"
            width="100%"
            height="400px"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa restaurace">
          </iframe>
        </div>
      </div>
      <p>© 2024 Restaurace v Pivovaru</p>
    </footer>
  );
};

export default Footer;