// ====================================
// PÁGINA HOME - DASHBOARD PRINCIPAL
// ====================================

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  const esProfesor = usuario?.rol === 'Profesor';

  // Tarjetas de acceso rápido
  const tarjetas = [
    {
      titulo: 'Usuarios',
      descripcion: 'Ver lista de usuarios registrados',
      icono: '👥',
      ruta: '/usuarios',
      color: 'azul',
      disponible: true
    },
    {
      titulo: 'Ver Notificaciones',
      descripcion: 'Consultar notificaciones recibidas',
      icono: '📧',
      ruta: '/notificaciones',
      color: 'cyan',
      disponible: true
    },
    {
      titulo: 'Nueva Notificación',
      descripcion: 'Crear y enviar notificación',
      icono: '✏️',
      ruta: '/notificaciones/crear',
      color: 'dorado',
      disponible: esProfesor, // Solo para profesores
      soloProfesor: true
    }
  ];

  const irA = (ruta) => {
    navigate(ruta);
  };

  return (
    <div className="home-container">
      <div className="home-content">
        {/* Encabezado de bienvenida */}
        <div className="home-header">
          <h1>¡Bienvenido, {usuario?.nombre}! 👋</h1>
          <p className="home-rol">
            Rol: <span className="badge-rol-home">{usuario?.rol}</span>
          </p>
        </div>

        {/* Descripción */}
        <div className="home-descripcion">
          <p>
            {esProfesor 
              ? 'Como profesor, tienes acceso completo para gestionar usuarios y notificaciones.'
              : 'Puedes consultar usuarios y ver las notificaciones que te han enviado.'
            }
          </p>
        </div>

        {/* Tarjetas de acceso rápido */}
        <div className="home-tarjetas">
          {tarjetas.map((tarjeta, index) => {
            // Si la tarjeta no está disponible, no la mostramos
            if (!tarjeta.disponible) return null;
            
            return (
              <div
                key={index}
                className={`tarjeta tarjeta-${tarjeta.color}`}
                onClick={() => irA(tarjeta.ruta)}
              >
                <div className="tarjeta-icono">{tarjeta.icono}</div>
                <h3>{tarjeta.titulo}</h3>
                <p>{tarjeta.descripcion}</p>
                
                {tarjeta.soloProfesor && (
                  <span className="badge-profesor">Solo Profesores</span>
                )}
                
                <div className="tarjeta-flecha">→</div>
              </div>
            );
          })}
        </div>

        {/* Mensaje para estudiantes */}
        {!esProfesor && (
          <div className="info-estudiante">
            <div className="info-icono">ℹ️</div>
            <p>
              <strong>Nota:</strong> Como estudiante, puedes ver notificaciones pero no crearlas. 
              Si necesitas enviar una notificación, contacta a tu profesor.
            </p>
          </div>
        )}

        {/* Estadísticas rápidas (opcional) */}
        <div className="home-estadisticas">
          <div className="estadistica">
            <div className="estadistica-numero">🎯</div>
            <p>Sistema Integrado</p>
          </div>
          <div className="estadistica">
            <div className="estadistica-numero">🔐</div>
            <p>Acceso Seguro</p>
          </div>
          <div className="estadistica">
            <div className="estadistica-numero">⚡</div>
            <p>Tiempo Real</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
