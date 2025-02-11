import React from "react";

const About = () => {
  return (
    <section className="about">
      <h2>Universidad Cooperativa de Colombia - Cali</h2>
      <div className="about-content">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.8332865711604!2d-76.55374192493363!3d3.390850996583784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a8832212050d%3A0xb7281223f25ff99b!2sUCC%20Cali!5e0!3m2!1ses-419!2sco!4v1725750216407!5m2!1ses-419!2sco"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default About;
