// ====================================
// APP.JSX UNIFICADO - SURA G8
// ====================================
// Integración de USUARIOS + NOTIFICACIONES
// Con sistema de roles (Profesor/Estudiante)

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// ===== COMPONENTES DE USUARIOS =====
import LoginUsuarios from './componentes/usuarios/LoginUsuarios';
import UsuarioFormulario from './componentes/usuarios/UsuarioFormulario';
import ListaUsuarios from './componentes/usuarios/ListaUsuarios';

// ===== COMPONENTES DE NOTIFICACIONES =====
import FormularioNotificacion from './componentes/notificaciones/FormularioNotificacion';
import ListaNotificaciones from './componentes/notificaciones/ListaNotificaciones';
import EditarNotificacion from './componentes/notificaciones/EditarNotificacion';

// ===== COMPONENTES COMPARTIDOS =====
import Navbar from './componentes/shared/Navbar';

// ===== PÁGINAS =====
import Inicio from './componentes/pages/Inicio';
import Home from './componentes/pages/Home';

// ===== ESTILOS =====
import './App.css';
import './componentes/shared/Colores.css';

// ====================================
// COMPONENTE DE RUTA PROTEGIDA
// ====================================
// Este componente protege las rutas que requieren autenticación
function RutaProtegida({ children }) {
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  
  if (!usuario) {
    // Si no hay usuario logueado, redirige al login
    return <Navigate to="/login" replace />;
  }
  
  // Si hay usuario, muestra el contenido
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

// ====================================
// COMPONENTE DE RUTA SOLO PARA PROFESORES
// ====================================
// Solo los profesores pueden crear/editar notificaciones
function RutaSoloProfesor({ children }) {
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  
  if (!usuario) {
    return <Navigate to="/login" replace />;
  }
  
  if (usuario.rol !== 'Profesor') {
    // Si no es profesor, redirige a home con mensaje
    alert('⚠️ Solo los profesores pueden acceder a esta sección');
    return <Navigate to="/home" replace />;
  }
  
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

// ====================================
// COMPONENTE PRINCIPAL
// ====================================
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* ===== RUTAS PÚBLICAS ===== */}
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<LoginUsuarios />} />
          <Route path="/registro" element={<UsuarioFormulario />} />
          
          {/* ===== RUTAS PROTEGIDAS (requieren login) ===== */}
          <Route 
            path="/home" 
            element={
              <RutaProtegida>
                <Home />
              </RutaProtegida>
            } 
          />
          
          {/* ===== MÓDULO: USUARIOS ===== */}
          <Route 
            path="/usuarios" 
            element={
              <RutaProtegida>
                <ListaUsuarios />
              </RutaProtegida>
            } 
          />
          
          {/* ===== MÓDULO: NOTIFICACIONES ===== */}
          {/* Ver notificaciones - Todos pueden ver */}
          <Route 
            path="/notificaciones" 
            element={
              <RutaProtegida>
                <ListaNotificaciones />
              </RutaProtegida>
            } 
          />
          
          {/* Crear notificación - SOLO PROFESORES */}
          <Route 
            path="/notificaciones/crear" 
            element={
              <RutaSoloProfesor>
                <FormularioNotificacion />
              </RutaSoloProfesor>
            } 
          />
          
          {/* Editar notificación - SOLO PROFESORES */}
          <Route 
            path="/notificaciones/editar/:id" 
            element={
              <RutaSoloProfesor>
                <EditarNotificacion />
              </RutaSoloProfesor>
            } 
          />
          
          {/* ===== RUTA POR DEFECTO ===== */}
          {/* Cualquier ruta no definida redirige al inicio */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
