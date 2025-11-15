export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  
  // Qui elaboreresti l’audio
  res.status(200).json({ transcript: "Test trascrizione", feedback: "Test feedback", atc_message: "ATC response" });
}
