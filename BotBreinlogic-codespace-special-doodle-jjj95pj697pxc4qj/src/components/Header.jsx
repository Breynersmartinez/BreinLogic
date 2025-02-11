import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img
          src="https://1.bp.blogspot.com/-2iRg97PDe2s/WTSj0l1Xi7I/AAAAAAAAAQA/eqUsQOF5Pnkmu20gy_ZJIQQPG7JlkUTSACLcB/s1600/UCC.png"
          alt="Logo UCC"
        />
      </div>
      <nav className="menu">
        <ul className="menu-list">
          <li>Inicio</li>
          <li onClick={() => window.open("https://www.ucc.edu.co/ambientes-practicos-de-aprendizaje/Paginas/Cali/consultorio-Juridico.aspx")}>Servicio</li>
          <li onClick={() => window.open("https://www.ucc.edu.co/Paginas/Contacto.aspx")}>Contacto</li>
          <li onClick={() => window.open("indexLogin.html")}>Inicio de Sesión</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
