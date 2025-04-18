import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/StellarCodeLogo.jpg";
import googleLogo from "../assets/google-logo.png";
import "../styles/Login.css";

function Login({ onSwitch }) {
  const navigate = useNavigate();
  const [idCard, setIdCard] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/Administrador/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idCard: parseInt(idCard),
          password: password,
        }),
      });

      if (response.ok) {
        console.log("Inicio de sesión exitoso");
        navigate('/dashboard'); // Redirige a donde necesites
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError("Error de red o del servidor");
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Logo de la empresa" className="logo" />
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Cédula (ID)</label>
          <input
            type="number"
            value={idCard}
            onChange={(e) => setIdCard(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Iniciar Sesión</button>
      </form>
      
    </div>
  );
}

export default Login;
