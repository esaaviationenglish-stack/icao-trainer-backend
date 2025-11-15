import express from 'express';
import cors from 'cors';
import multer from 'multer';

const app = express();
const upload = multer();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "Backend ICAO Trainer attivo!" });
});

app.post('/api/audio', upload.single('file'), (req, res) => {
  // Qui elaborerai l’audio e restituirai JSON
  res.json({ transcript: "Test trascrizione", feedback: "Test feedback", atc_message: "ATC response" });
});

app.post('/api/scenario', (req, res) => {
  const { scenario } = req.body;
  res.json({ prompt: `Scenario avviato: ${scenario}` });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Backend ICAO Trainer in ascolto sulla porta ${port}`));
