const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();


app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

const equipos = [
  // --- De la primera captura (image_a45912.png) ---
  { id: 1, nombre: "Aldosivi", logo: "/escudos/aldosivi.png", estadio: "/cancha-aldosivi.jpg" }, 
  { id: 2, nombre: "Argentinos Juniors", logo: "/escudos/argentinos.png", estadio: "/cancha-argentinos.jpg" },
  { id: 3, nombre: "Atlético Tucumán", logo: "/escudos/atleticotucuman.png", estadio: "/cancha-atleticotucuman.jpg" },
  { id: 4, nombre: "Banfield", logo: "/escudos/banfield.png", estadio: "/cancha-banfield.jpg" },
  { id: 5, nombre: "Barracas Central", logo: "/escudos/barracas.png", estadio: "/cancha-barracas.jpg" },
  { id: 6, nombre: "Belgrano", logo: "/escudos/belgrano.png", estadio: "/cancha-belgrano.jpg" },
  { id: 7, nombre: "Boca Juniors", logo: "/escudos/boca.png", estadio: "/cancha-boca.jpg" },
  { id: 8, nombre: "Central Córdoba", logo: "/escudos/centralcordoba.png", estadio: "/cancha-centralcordoba.jpg" },
  { id: 9, nombre: "Defensa y Justicia", logo: "/escudos/defensa.png", estadio: "/cancha-defensa.jpg" },
  { id: 10, nombre: "Estudiantes LP", logo: "/escudos/estudiantes.png", estadio: "/cancha-estudiantes.jpg" },
  { id: 11, nombre: "Estudiantes RC", logo: "/escudos/estudiantesrc.png", estadio: "/cancha-estudiantesrc.jpg" },
  { id: 12, nombre: "Gimnasia LP", logo: "/escudos/gimnasia.png", estadio: "/cancha-gimnasia.jpg" },
  { id: 13, nombre: "Chaco For Ever", logo: "/escudos/chacoforever.png", estadio: "/cancha-chacoforever.jpg" },
  { id: 14, nombre: "Huracán", logo: "/escudos/huracan.png", estadio: "/cancha-huracan.jpg" },
  { id: 15, nombre: "Independiente", logo: "/escudos/independiente.png", estadio: "/cancha-independiente.jpg" },
  { id: 16, nombre: "Independiente Rivadavia", logo: "/escudos/independienteriv.png", estadio: "/cancha-independienteriv.jpeg" },
  { id: 17, nombre: "Instituto", logo: "/escudos/instituto.png", estadio: "/cancha-instituto.jpg" },
  { id: 18, nombre: "Lanús", logo: "/escudos/lanus.png", estadio: "/cancha-lanus.jpg" },
  { id: 19, nombre: "Newell's", logo: "/escudos/newells.png", estadio: "/cancha-newells.jpg" },
  { id: 20, nombre: "Platense", logo: "/escudos/platense.png", estadio: "/cancha-platense.jpg" },
  { id: 21, nombre: "Racing Club", logo: "/escudos/racing.png", estadio: "/cancha-racing.jpg" },
  { id: 22, nombre: "Deportivo Riestra", logo: "/escudos/riestra.png", estadio: "/cancha-riestra.jpg" },
  { id: 23, nombre: "River Plate", logo: "/escudos/river.png", estadio: "/cancha-river.jpeg" },
  { id: 24, nombre: "Rosario Central", logo: "/escudos/rosariocentral.png", estadio: "/cancha-rosariocentral.jpg" },
  { id: 25, nombre: "San Lorenzo", logo: "/escudos/sanlorenzo.png", estadio: "/cancha-sanlorenzo.jpg" },
  { id: 26, nombre: "Sarmiento", logo: "/escudos/sarmiento.png", estadio: "/cancha-sarmiento.jpg" },
  { id: 27, nombre: "Talleres", logo: "/escudos/talleres.png", estadio: "/cancha-talleres.jpg" },
  { id: 28, nombre: "Tigre", logo: "/escudos/tigre.png", estadio: "/cancha-tigre.jpeg" },
  { id: 29, nombre: "Unión", logo: "/escudos/union.png", estadio: "/cancha-union.jpg" },
  { id: 30, nombre: "Vélez", logo: "/escudos/velez.png", estadio: "/cancha-velez.jpg" }
];

app.get('/equipos', (req, res) => {
  res.json(equipos);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});