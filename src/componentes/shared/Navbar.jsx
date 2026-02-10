// ====================================
// NAVBAR CON MENÚ HAMBURGUESA FUNCIONAL
// Sistema de roles integrado
// ====================================

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import logoSura from "./../../imagenes/logoSura.png";

function Navbar() {
  const navigate = useNavigate();
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Obtener usuario desde localStorage
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const esProfesor = usuario?.rol === "Profesor";

  const salir = () => {
    localStorage.removeItem("usuario");
    navigate("/");
  };

  const redirigir = (ruta) => {
    navigate(ruta);
    setMenuAbierto(false); // Cerrar menú al navegar
  };

  // Cerrar menú al hacer clic fuera de él
  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <>
      {/* Overlay para cerrar menú al hacer clic fuera */}
      {menuAbierto && (
        <div 
          className="menu-overlay" 
          onClick={cerrarMenu}
          aria-hidden="true"
        />
      )}
      
      <nav className="navbar">
        <div className="navbar-sura-izquierda">
          <img 
            src={logoSura} 
            alt="Logo Sura" 
            className="logo-sura-navbar" 
            onClick={() => redirigir("/home")}
            style={{ cursor: 'pointer' }}
          />
          <h3>Hola, {usuario?.nombre} 👋</h3>
          <span className="badge-rol">{usuario?.rol}</span>
        </div>
        
        <div className="acciones-derecha">
          <div className="contenedor-menu">
            <button
              className="boton-menu"
              onClick={() => setMenuAbierto(!menuAbierto)}
              aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuAbierto}
            >
              {menuAbierto ? "✕" : "☰"}
            </button>

            {menuAbierto && (
              <div className="menu-lateral">
                {/* ===== OPCIÓN: HOME ===== */}
                <div 
                  onClick={() => redirigir("/home")} 
                  className="menu-paginas"
                >
                  🏠 Home
                </div>
                
                {/* ===== OPCIÓN: USUARIOS ===== */}
                <div 
                  onClick={() => redirigir("/usuarios")} 
                  className="menu-paginas"
                >
                  👤 Usuarios
                </div>
                
                {/* ===== SECCIÓN: NOTIFICACIONES ===== */}
                <div className="menu-seccion">
                  <div className="menu-titulo-seccion">📧 Notificaciones</div>
                  
                  {/* Ver notificaciones - Todos */}
                  <div 
                    onClick={() => redirigir("/notificaciones")} 
                    className="menu-paginas menu-sub"
                  >
                    📋 Ver Notificaciones
                  </div>
                  
                  {/* Crear notificación - SOLO PROFESORES */}
                  {esProfesor && (
                    <div 
                      onClick={() => redirigir("/notificaciones/crear")} 
                      className="menu-paginas menu-sub"
                    >
                      ✏️ Nueva Notificación
                    </div>
                  )}
                </div>
                
                {/* ===== OPCIÓN: CERRAR SESIÓN ===== */}
                <div 
                  onClick={salir} 
                  className="menu-paginas salir-menu"
                >
                  🚪 Cerrar sesión
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
