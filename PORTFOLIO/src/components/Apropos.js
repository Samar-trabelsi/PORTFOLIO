import React from 'react';
import apropos from '../assets/images/apropos.jpg';

const Apropos = () => {
  return (
    <section id="apropos">
      <div className="apropos-container">
        <h2>Présentation</h2>
        <div className="apropos-content">
          <img src={apropos} alt="Image Présentation" className="apropos-image" />
          <p>
          En tant que développeur web, je suis également passionné par le design et l'art. J'aime explorer ces domaines pour créer des projets qui allient fonctionnalité et esthétique.
           Ma curiosité pour l'art et le design me permet de voir le développement web sous un angle créatif, ce qui enrichit ma façon d'aborder chaque projet. 
           J'aime l'idée de pouvoir concevoir des interfaces non seulement efficaces, mais aussi visuellement engageantes, en mêlant technique et créativité.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Apropos;