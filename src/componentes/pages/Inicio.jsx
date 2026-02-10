// ====================================
// PÁGINA DE INICIO (LANDING PAGE)
// ====================================

import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoSura from './../../imagenes/logoSura.png';
import './Inicio.css';

function Inicio() {
  const navigate = useNavigate();

  return (
    <div className="inicio-container">
      <div className="inicio-content">
        {/* Logo */}
        <img 
          src={logoSura} 
          alt="Logo Sura" 
          className="inicio-logo"
        />
        
        {/* Título */}
        <h1 className="inicio-titulo">
          Sistema Integrado Sura G8
        </h1>
        
        <p className="inicio-subtitulo">
          Gestión de Usuarios y Notificaciones
        </p>
        
        <p className="inicio-descripcion">
          Bienvenido al sistema de gestión integral. 
          Administra usuarios y notificaciones desde una sola plataforma.
        </p>
        
        {/* Botones de acción */}
        <div className="inicio-botones">
          <button 
            className="btn-inicio btn-primario"
            onClick={() => navigate('/login')}
          >
            🔐 Iniciar Sesión
          </button>
          
          <button 
            className="btn-inicio btn-secundario"
            onClick={() => navigate('/registro')}
          >
            📝 Registrarse
          </button>
        </div>
        
        {/* Características */}
        <div className="inicio-caracteristicas">
          <div className="caracteristica">
            <div className="caracteristica-icono">👥</div>
            <h3>Gestión de Usuarios</h3>
            <p>Administra usuarios y roles</p>
          </div>
          
          <div className="caracteristica">
            <div className="caracteristica-icono">📧</div>
            <h3>Notificaciones</h3>
            <p>Sistema de mensajería interno</p>
          </div>
          
          <div className="caracteristica">
            <div className="caracteristica-icono">🔒</div>
            <h3>Seguro</h3>
            <p>Control de roles y permisos</p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="inicio-footer">
        <p>Proyecto Integrador - Sura G8 | 2026</p>
      </footer>
    </div>
  );
}

export default Inicio;
