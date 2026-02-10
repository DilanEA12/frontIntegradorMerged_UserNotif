# 🚀 PROYECTO INTEGRADO SURA G8
## Sistema de Gestión de Usuarios y Notificaciones

---

## 📖 DESCRIPCIÓN

Sistema web completo que integra la gestión de **Usuarios** y **Notificaciones** en una sola aplicación React, con sistema de roles (Profesor/Estudiante) y conexión a backend Spring Boot.

### Características Principales

✅ **Gestión de Usuarios**
- Registro de nuevos usuarios
- Login con validación
- Lista de usuarios registrados
- Roles: Profesor y Estudiante

✅ **Sistema de Notificaciones**
- Crear notificaciones (solo Profesores)
- Ver notificaciones (todos)
- Editar notificaciones (solo Profesores)
- Lista completa de notificaciones

✅ **Sistema de Roles**
- **Profesores:** Acceso completo (crear, editar, ver notificaciones)
- **Estudiantes:** Solo lectura (ver notificaciones)

✅ **Navegación Profesional**
- React Router con URLs limpias
- Navbar con menú hamburguesa funcional
- Rutas protegidas por autenticación
- Landing page y dashboard

✅ **Diseño Corporativo Sura**
- Glassmorphism en toda la interfaz
- Colores: Azul #003DA5, Cyan #00A3E0, Dorado #FDB913
- Responsive design
- Animaciones suaves

---

## 🛠️ TECNOLOGÍAS

### Frontend
- **React** 18.2.0
- **React Router DOM** 6.20.0 - Navegación
- **SweetAlert2** 11.10.3 - Alertas elegantes
- **CSS3** - Glassmorphism y animaciones

### Backend (requiere estar corriendo)
- **Spring Boot** 3.4.1
- **H2 Database** (en memoria)
- **JPA/Hibernate**
- Puerto: `http://localhost:8080`

### Herramientas de Desarrollo
- **Create React App**
- **html-webpack-plugin** 5.5.4 ⚠️ CRÍTICO (no alterar)
- **Node.js** 16+
- **npm** o **yarn**

---

## 📥 INSTALACIÓN

### Requisitos Previos

1. **Node.js** instalado (versión 16 o superior)
   ```bash
   node --version  # Debe ser v16.x.x o superior
   ```

2. **Backend Spring Boot** corriendo en puerto 8080
   - Verificar: http://localhost:8080/apisura8/v1/usuarios
   - Debe devolver `[]` o datos JSON

### Paso 1: Clonar/Descargar el Proyecto

```bash
# Si usas Git
git clone [URL_DEL_REPOSITORIO]
cd proyecto-integrado-sura-g8

# O descomprime el ZIP descargado
```

### Paso 2: Instalar Dependencias

```bash
npm install
```

**IMPORTANTE:** Verificar que `html-webpack-plugin` esté instalado:
```bash
npm list html-webpack-plugin
```

Si NO aparece, instalarlo:
```bash
npm install html-webpack-plugin --save-dev
```

### Paso 3: Verificar Estructura

Asegúrate de tener esta estructura:

```
src/
├── components/
│   ├── usuarios/
│   ├── notificaciones/
│   ├── shared/
│   └── pages/
├── services/
│   ├── usuarioService.js
│   └── notificationService.js
├── imagenes/
│   └── logoSura.png
├── App.jsx
├── App.css
└── index.js
```

### Paso 4: Iniciar el Proyecto

```bash
npm start
```

El navegador se abrirá automáticamente en `http://localhost:3000`

---

## 🎮 USO DEL SISTEMA

### 1. Primera Vez - Registro

1. Ve a `http://localhost:3000`
2. Haz clic en **"Registrarse"**
3. Llena el formulario:
   - Nombre
   - Correo
   - Contraseña (mínimo 6 caracteres)
   - **Rol:** Selecciona "Profesor" o "Estudiante"
   - Teléfono (opcional)
4. Haz clic en **"Guardar"**

### 2. Login

1. Ve a `http://localhost:3000/login`
2. Ingresa:
   - Correo
   - Contraseña
3. Haz clic en **"Entrar"**

### 3. Dashboard (Home)

Después del login verás tarjetas de acceso rápido:

**Para Profesores:**
- 👥 Usuarios
- 📧 Ver Notificaciones
- ✏️ Nueva Notificación

**Para Estudiantes:**
- 👥 Usuarios
- 📧 Ver Notificaciones
- ℹ️ Mensaje: "Solo lectura en notificaciones"

### 4. Menú Hamburguesa

Haz clic en **☰** (arriba derecha) para ver todas las opciones:

```
🏠 Home
👤 Usuarios
📧 Notificaciones
   📋 Ver Notificaciones
   ✏️ Nueva Notificación (solo Profesores)
🚪 Cerrar sesión
```

---

## 🔐 SISTEMA DE ROLES

### Matriz de Permisos

| Acción | Estudiante | Profesor |
|--------|-----------|----------|
| Registrarse | ✅ | ✅ |
| Login | ✅ | ✅ |
| Ver Home | ✅ | ✅ |
| Ver Usuarios | ✅ | ✅ |
| Ver Notificaciones | ✅ | ✅ |
| Crear Notificación | ❌ | ✅ |
| Editar Notificación | ❌ | ✅ |
| Borrar Notificación | ❌ | ✅ |

### ¿Cómo Funciona?

El sistema verifica el rol del usuario almacenado en `localStorage`:

```javascript
const usuario = JSON.parse(localStorage.getItem('usuario'));
const esProfesor = usuario?.rol === 'Profesor';
```

- Si intentas acceder a una ruta de "Solo Profesores" siendo Estudiante, te redirige al Home
- Las opciones de Profesor no aparecen en el menú para Estudiantes

---

## 📡 CONEXIÓN CON BACKEND

### Endpoints Utilizados

**Usuarios:**
- `POST /apisura8/v1/usuarios` - Crear usuario
- `GET /apisura8/v1/usuarios` - Listar todos
- `GET /apisura8/v1/usuarios/{id}` - Buscar por ID

**Notificaciones:**
- `POST /apisura8/v1/notificaciones` - Crear notificación
- `GET /apisura8/v1/notificaciones` - Listar todas
- `GET /apisura8/v1/notificaciones/{id}` - Buscar por ID
- `POST /apisura8/v1/notificaciones` (con ID) - Actualizar

### Verificar Conexión

1. **Backend corriendo:**
   ```bash
   # En la terminal del backend, debes ver:
   Started [NombreDelProyecto]Application in X.XXX seconds
   ```

2. **Probar endpoint:**
   ```bash
   # En el navegador o Postman:
   GET http://localhost:8080/apisura8/v1/usuarios
   
   # Debe devolver:
   [] o [{"id":1,"nombre":"Juan",...}]
   ```

3. **CORS configurado:**
   ```java
   // Todos los controladores deben tener:
   @CrossOrigin(origins = "*")
   ```

---

## 🐛 SOLUCIÓN DE PROBLEMAS

### Error: "Cannot find module 'react-router-dom'"

**Solución:**
```bash
npm install react-router-dom
```

---

### Error: La página se queda en blanco

**Solución:**
1. Abre DevTools (F12)
2. Ve a la pestaña "Console"
3. Lee el error (probablemente un import mal configurado)
4. Verifica que todos los imports tengan las rutas correctas

---

### Error: CORS policy blocked

**Causa:** El backend no tiene `@CrossOrigin` configurado

**Solución:**
```java
// En TODOS los controladores Java, agregar:
@CrossOrigin(origins = "*")
```

Después, reiniciar Spring Boot.

---

### Error: "Failed to fetch"

**Causa:** El backend no está corriendo

**Solución:**
1. Abre la terminal del backend
2. Ejecuta el proyecto Spring Boot
3. Espera a ver: "Started ...Application"
4. Luego reinicia React

---

### Las opciones de Profesor aparecen para Estudiante

**Causa:** El rol está mal guardado en localStorage

**Solución:**
1. Abre DevTools (F12)
2. Application → Local Storage → http://localhost:3000
3. Busca la clave `usuario`
4. Verifica que `rol` sea exactamente `"Profesor"` o `"Estudiante"`
5. Si está mal, borra el localStorage y vuelve a hacer login

---

### Error: 404 Not Found en /notificaciones

**Causa:** Rutas de React Router no configuradas

**Solución:**
Esto es normal. Siempre navega usando los botones/menú del sistema, no escribiendo URLs directamente en la barra del navegador.

---

## 📂 ESTRUCTURA DEL PROYECTO

```
proyecto-integrado-sura-g8/
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── usuarios/              ← Módulo de Usuarios
│   │   │   ├── UsuarioFormulario.jsx
│   │   │   ├── UsuarioFormulario.css
│   │   │   ├── ListaUsuarios.jsx
│   │   │   ├── ListaUsuarios.css
│   │   │   ├── LoginUsuarios.jsx
│   │   │   └── LoginUsuarios.css
│   │   │
│   │   ├── notificaciones/        ← Módulo de Notificaciones
│   │   │   ├── FormularioNotificacion.js
│   │   │   ├── FormularioNotificacion_Sura.css
│   │   │   ├── ListaNotificaciones.js
│   │   │   ├── ListaNotificaciones_Sura.css
│   │   │   ├── EditarNotificacion.js
│   │   │   └── EditarNotificacion_Sura.css
│   │   │
│   │   ├── shared/                ← Componentes Compartidos
│   │   │   ├── Navbar.jsx
│   │   │   ├── Navbar.css
│   │   │   └── Colores.css
│   │   │
│   │   └── pages/                 ← Páginas
│   │       ├── Inicio.jsx
│   │       ├── Inicio.css
│   │       ├── Home.jsx
│   │       └── Home.css
│   │
│   ├── services/                  ← Servicios HTTP
│   │   ├── usuarioService.js
│   │   └── notificationService.js
│   │
│   ├── imagenes/
│   │   └── logoSura.png
│   │
│   ├── App.jsx                    ← Componente principal
│   ├── App.css                    ← Estilos globales
│   ├── index.js                   ← Punto de entrada
│   └── index.css
│
├── package.json                   ← Dependencias
├── package-lock.json
├── README.md                      ← Este archivo
├── GUIA_INTEGRACION_COMPLETA.md  ← Guía técnica
└── CAMBIOS_DETALLADOS.md         ← Cambios paso a paso
```

---

## 📚 DOCUMENTACIÓN ADICIONAL

Este proyecto incluye documentación detallada:

1. **README.md** (este archivo)
   - Instalación
   - Uso básico
   - Solución de problemas

2. **GUIA_INTEGRACION_COMPLETA.md**
   - Proceso de unificación completo
   - Explicación técnica de cada archivo
   - Cómo replicar en otros módulos

3. **CAMBIOS_DETALLADOS.md**
   - Comparación ANTES vs AHORA de cada archivo
   - Código específico de cada cambio
   - Justificación de decisiones

---

## 👥 EQUIPO

**Desarrollado por:** Equipo Sura G8

**Módulos:**
- **Usuarios:** [Nombre del compañero]
- **Notificaciones:** [Tu nombre]
- **Integración:** Colaborativo

**Curso:** Proyecto Integrador  
**Año:** 2026

---

## 📝 NOTAS IMPORTANTES

### ⚠️ html-webpack-plugin

Este proyecto usa `html-webpack-plugin`. **NO ALTERAR** esta dependencia.

```json
"devDependencies": {
  "html-webpack-plugin": "^5.5.4"
}
```

### 🔒 Seguridad

- Las contraseñas se envían en texto plano (SOLO PARA DESARROLLO)
- En producción, implementar hashing de contraseñas
- Usar HTTPS
- Implementar tokens JWT

### 🎨 Personalización

Para cambiar colores, edita:
```css
/* src/components/shared/Colores.css */
:root {
  --sura-azul-profundo: #001E60;
  --sura-aqua: #05C3DE;
  --sura-blanco: #FFFFFF;
  --sura-gris-oscuro: #484949;
  --sura-gris-claro: #DAE0E8;
}
```

---

## 🚀 PRÓXIMOS PASOS

### Mejoras Sugeridas

1. **Funcionalidad Completa de Notificaciones**
   - Implementar botón de eliminar
   - Marcar como leída
   - Filtros por tipo/prioridad

2. **Más Módulos**
   - Cursos
   - Profesores
   - Matrículas
   - Notas
   - Reportes
   - Asistencias

3. **Mejoras de UX**
   - Paginación en listas
   - Búsqueda avanzada
   - Ordenamiento de tablas
   - Exportar a Excel/PDF

4. **Seguridad**
   - Autenticación con JWT
   - Hashing de contraseñas
   - Refresh tokens
   - Protección contra XSS/CSRF

5. **Base de Datos**
   - Migrar de H2 a PostgreSQL/MySQL
   - Persistencia permanente
   - Backups automáticos

---

## 📞 SOPORTE

Si tienes problemas:

1. Lee la sección "Solución de Problemas" arriba
2. Revisa `GUIA_INTEGRACION_COMPLETA.md`
3. Consulta `CAMBIOS_DETALLADOS.md`
4. Pregunta en el grupo del equipo

---

## 📄 LICENCIA

Este proyecto es para fines educativos del Proyecto Integrador Sura G8.

---

**¡Gracias por usar el Sistema Integrado Sura G8!** 🎉

**Equipo Sura G8 | 2026**
