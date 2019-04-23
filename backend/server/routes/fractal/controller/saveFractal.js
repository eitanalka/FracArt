const saveFractal = async (req, res) => {
  const googleId = req.googlePayload.sub;
  const { title, settings } = req.body;

  if (!title || !settings) {
    return res.status(400).send('Must include title and settings');
  }

  const db = req.app.get('db');

  const user = await db.user.findOne({ google_id: googleId });
  const fractal = await db.fractal.save({
    owner_id: user.id,
    title,
    settings,
  }, {
    fields: ['id', 'title', 'settings'],
  });

  return res.status(200).json(fractal);
};

export default saveFractal;
