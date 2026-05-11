const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();


app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

const equipos = [
  // --- De la primera captura (image_a45912.png) ---
  { id: 1, nombre: "Aldosivi", logo: "/escudos/aldosivi.png", estadio: "/canchas/cancha-aldosivi.jpg" }, 
  { id: 2, nombre: "Argentinos Juniors", logo: "/escudos/argentinos.png", estadio: "/canchas/cancha-argentinos.jpg" },
  { id: 3, nombre: "Atlético Tucumán", logo: "/escudos/atleticotucuman.png", estadio: "/canchas/cancha-atleticotucuman.jpg" },
  { id: 4, nombre: "Banfield", logo: "/escudos/banfield.png", estadio: "/canchas/cancha-banfield.jpg" },
  { id: 5, nombre: "Barracas Central", logo: "/escudos/barracas.png", estadio: "/canchas/cancha-barracas.jpg" },
  { id: 6, nombre: "Belgrano", logo: "/escudos/belgrano.png", estadio: "/canchas/cancha-belgrano.jpg" },
  { id: 7, nombre: "Boca Juniors", logo: "/escudos/boca.png", estadio: "/canchas/cancha-boca.jpg" },
  { id: 8, nombre: "Central Córdoba", logo: "/escudos/centralcordoba.png", estadio: "/canchas/cancha-centralcordoba.jpg" },
  { id: 9, nombre: "Defensa y Justicia", logo: "/escudos/defensa.png", estadio: "/canchas/cancha-defensa.jpg" },
  { id: 10, nombre: "Estudiantes LP", logo: "/escudos/estudiantes.png", estadio: "/canchas/cancha-estudiantes.jpg" },
  { id: 11, nombre: "Estudiantes RC", logo: "/escudos/estudiantesrc.png", estadio: "/canchas/cancha-estudiantesrc.jpeg" },
  { id: 12, nombre: "Gimnasia LP", logo: "/escudos/gimnasia.png", estadio: "/canchas/cancha-gimnasia.jpg" },
  { id: 13, nombre: "Chaco For Ever", logo: "/escudos/chacoforever.png", estadio: "/canchas/cancha-chacoforever.jpg" },
  { id: 14, nombre: "Huracán", logo: "/escudos/huracan.png", estadio: "/canchas/cancha-huracan.jpg" },
  { id: 15, nombre: "Independiente", logo: "/escudos/independiente.png", estadio: "/canchas/cancha-independiente.jpg" },
  { id: 16, nombre: "Independiente Rivadavia", logo: "/escudos/independienteriv.png", estadio: "/canchas/cancha-independienteriv.jpg" },
  { id: 17, nombre: "Instituto", logo: "/escudos/instituto.png", estadio: "/canchas/cancha-instituto.jpg" },
  { id: 18, nombre: "Lanús", logo: "/escudos/lanus.png", estadio: "/canchas/cancha-lanus.jpg" },
  { id: 19, nombre: "Newell's", logo: "/escudos/newells.png", estadio: "/canchas/cancha-newells.jpg" },
  { id: 20, nombre: "Platense", logo: "/escudos/platense.png", estadio: "/canchas/cancha-platense.jpg" },
  { id: 21, nombre: "Racing Club", logo: "/escudos/racing.png", estadio: "/canchas/cancha-racing.jpg" },
  { id: 22, nombre: "Deportivo Riestra", logo: "/escudos/riestra.png", estadio: "/canchas/cancha-riestra.jpg" },
  { id: 23, nombre: "River Plate", logo: "/escudos/river.png", estadio: "/canchas/cancha-river.jpeg" },
  { id: 24, nombre: "Rosario Central", logo: "/escudos/rosariocentral.png", estadio: "/canchas/cancha-rosariocentral.jpg" },
  { id: 25, nombre: "San Lorenzo", logo: "/escudos/sanlorenzo.png", estadio: "/canchas/cancha-sanlorenzo.jpg" },
  { id: 26, nombre: "Sarmiento", logo: "/escudos/sarmiento.png", estadio: "/canchas/cancha-sarmiento.jpg" },
  { id: 27, nombre: "Talleres", logo: "/escudos/talleres.png", estadio: "/canchas/cancha-talleres.jpg" },
  { id: 28, nombre: "Tigre", logo: "/escudos/tigre.png", estadio: "/canchas/cancha-tigre.jpeg" },
  { id: 29, nombre: "Unión", logo: "/escudos/union.png", estadio: "/canchas/cancha-union.jpg" },
  { id: 30, nombre: "Vélez", logo: "/escudos/velez.png", estadio: "/canchas/cancha-velez.jpg" }
];

app.get('/equipos', (req, res) => {
  res.json(equipos);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});