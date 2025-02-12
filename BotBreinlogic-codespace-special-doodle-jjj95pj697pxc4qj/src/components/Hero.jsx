import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Semillero De Investigacion UCC</h1>
        <p>
          "En la Universidad Cooperativa de Colombia, sede Cali, estamos comprometidos con la excelencia académica y la innovación. El Semillero de Investigación es un espacio destinado a fomentar el espíritu investigativo y el desarrollo de competencias científicas entre nuestros estudiantes. "
        </p>
        <button class="cta-button" onClick={() => window.open("mailto:correspondencia.cal@ucc.edu.co?subject=Consulta&body=Hola,%20tengo%20una%20consulta.")}>
          Contáctanos
        </button>
      </div>
      <div className="hero-image">
        <img src="https://th.bing.com/th/id/R.dee8c068185164ec7bdfdd6c2d467603?rik=0Ib8%2fhG%2bN3O2RQ&pid=ImgRaw&r=0" alt="Legal Assistance" />
      </div>
    </section>
  );
};

export default Hero;
