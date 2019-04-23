const getFractal = async (req, res) => {
  const { username } = req.query;

  const db = req.app.get('db');

  const user = await db.user.findOne({
    username,
  });

  const fractals = await db.fractal.find({
    owner_id: user.id,
  }, {
    fields: ['id', 'title', 'settings'],
  });

  return res.status(200).json(fractals);
};

export default getFractal;
