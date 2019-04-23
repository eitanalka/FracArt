const getFractal = async (req, res) => {
  const { id } = req.params;

  const db = req.app.get('db');

  const fractal = await db.fractal.findOne({
    id,
  }, {
    fields: ['title', 'settings'],
  });

  return res.status(200).json(fractal);
};

export default getFractal;
