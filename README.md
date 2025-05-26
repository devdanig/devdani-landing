# 🍷 Daniel García Portfolio Landing Page

¡Bienvenido a mi portafolio!  
Este proyecto es una **Landing Page minimalista** que muestra mi perfil como **desarrollador Fullstack**, junto con una integración dinámica con la **API de Spotify** para cargar playlists y contenido musical en tiempo real.

---

## 🌐 Tecnologías Utilizadas

- **HTML5 + CSS3** (con Tailwind CSS para estilos rápidos y modernos)
- **JavaScript (ES6+)**
- **API pública:** Spotify23
- **CDN de Tailwind** para un diseño responsivo y limpio

---

## 🚀 Funcionalidades Principales

- 🎨 **Landing Page Personal:** Información clave como tu nombre, descripción profesional y enlaces a redes (GitHub y LinkedIn).
- 🎵 **Integración con API:** Consulta dinámica de playlists mediante la API de Spotify23.
- 📱 **Diseño Responsive:** Totalmente adaptable para pantallas móviles, tabletas y escritorio.
- 🔗 **Código Modular:** Estructura clara para añadir más secciones en el futuro.

---

## ⚙️ Instalación y Uso

1. Clona este repositorio o descarga los archivos.
2. Abre el archivo `index.html` en tu navegador favorito.
3. ¡Listo! Podrás ver tu landing page personalizada con las playlists cargadas automáticamente desde la API.

---

## 💡 Nota Importante

El proyecto utiliza una API Key de prueba para **RapidAPI**.  
Si quieres personalizarla:

1. Regístrate en [RapidAPI](https://rapidapi.com/).
2. Consigue tu propia API Key.
3. Sustitúyela en el archivo `main.js`:

```javascript
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'TU-API-KEY-AQUI',
    'x-rapidapi-host': 'spotify23.p.rapidapi.com'
  }
};
```

## 🧩 Personaliza tu Portafolio

- 🖼 **Logo Personal:** Reemplaza el archivo `D2.png` en `./assets/images/` con tu propio diseño.
- 🌌 **Imagen de Fondo:** Cambia `estereo.jpeg` por la imagen que represente tu estilo.
- 📄 **Datos Personales:** Edita la sección principal (`index.html`) para reflejar tu biografía, experiencia y enlaces.

---

## 💥 Próximos Pasos (To-Do)

- Añadir más secciones como **Proyectos**, **Blog** o **Contacto**.
- Mejorar la experiencia de usuario con animaciones.
- Optimizar el consumo de la API para mostrar más resultados.
- Convertirlo en una app tipo **SPA** (Single Page Application) con **React** o **Vue**.

---

## 🧠 ¿Por qué este proyecto?

Es mi carta de presentación como desarrollador y un campo de pruebas para aprender a integrar APIs externas en proyectos front-end.  
Cada sección refleja lo que soy: alguien que ama la tecnología, la música y el código limpio.

---

## 📬 Conecta conmigo

- GitHub: [@devdanig](https://github.com/devdanig)
- LinkedIn: [Daniel García](https://www.linkedin.com/in/daniel-garcia/)
