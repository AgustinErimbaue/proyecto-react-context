# ElectroHub

ElectroHub es una aplicación web para comprar productos electrónicos. Los usuarios pueden registrarse, iniciar sesión, agregar productos a su carrito, realizar pedidos y ver su perfil y pedidos anteriores.

## Tabla de Contenidos

- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías](#tecnologías)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## Características

- Registro y autenticación de usuarios
- Visualización de productos disponibles
- Añadir productos al carrito de compras
- Crear y gestionar pedidos
- Visualización del perfil del usuario y sus pedidos

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto localmente:

1. Clona el repositorio:

  
   git clone https://github.com/tuusuario/electrohub.git

2. Navega al directorio del proyecto:

  
  cd electrohub

3. Instala las dependencias:

  
  npm install

4. Configura las variables de entorno:

Crea un archivo .env en la raíz del proyecto y define las variables necesarias. Aquí hay un ejemplo de variables de entorno que podrías necesitar:

REACT_APP_API_URL=http://localhost:3000

5.Ejecuta el servidor de desarrollo:

  npm start
  
## Uso

1. Abre tu navegador y navega a http://localhost:3000.
2. Regístrate o inicia sesión.
3. Explora los productos disponibles.
4. Añade productos a tu carrito.
5. Crea un pedido desde el carrito.
6. Consulta tu perfil y revisa tus pedidos.

## Estructura del Proyecto

La estructura principal del proyecto es la siguiente:

src/
│
├── components/
│   ├── Cart/
│   │   └── Cart.jsx
│   ├── Footer/
│   │   └── Footer.jsx
│   ├── Header/
│   │   └── Header.jsx
│   ├── Home/
│   │   └── Home.jsx
│   ├── Login/
│   │   └── Login.jsx
│   ├── Products/
│   │   ├── Product.jsx
│   │   └── Products.jsx
│   ├── Profile/
│   │   └── Profile.jsx
│   └── Register/
│       └── Register.jsx
│
├── Context/
│   ├── GlobalState.js
│   ├── UserState/
│   │   ├── UserState.js
│   │   └── UserReducer.js
│   └── AppReducer.js
│
├── service/
│   └── OrderService.js
│
├── App.js
└── index.js

## Tecnologías

Frontend:

- React
- React Router DOM
- Ant Design
- Axios

Backend:

- Node.js (servidor, configurado como API_URL en los servicios)

## Contribuir
¡Las contribuciones son bienvenidas! Si tienes alguna mejora o corrección, sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una rama nueva (git checkout -b feature/nueva-caracteristica).
3. Realiza tus cambios y haz commit (git commit -m 'Agrega nueva característica').
4. Sube tus cambios a tu fork (git push origin feature/nueva-caracteristica).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.
