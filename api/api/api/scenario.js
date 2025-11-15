export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { scenario } = req.body;
  res.status(200).json({ prompt: `Scenario avviato: ${scenario}` });
}
