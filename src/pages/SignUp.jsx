import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/StellarCodeLogo.jpg";
import "../styles/SignUp.css";
import googleLogo from "../assets/google-logo.png"; // Ruta a la imagen del logo de Google

function SignUp({ onSwitch }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el registro
    console.log("Registrando usuario...");
  };

  return (
    <div className="signup-container">
      <img src={logo} alt="Logo de la empresa" className="logo" />
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre Completo</label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>Correo Electrónico</label>
          <input type="email" required />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input type="password" required />
        </div>
        <button type="submit">Registrarse</button>
      </form>
        <button onClick={() => window.location.href = "https://accounts.google.com"} className="google-btn">
            <img src={googleLogo} alt="Google Logo" className="google-icon" /> Iniciar sesión con Google
          </button>
      <p>
        <label>
          ¿Ya tienes una cuenta?{" "}
          <span className="switch-link" onClick={() => navigate('/login')}>
            Inicia sesión aquí
          </span>
        </label>
      </p>
    </div>
  );
}

export default SignUp;