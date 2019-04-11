const updateUsername = async (req, res) => {
  const googleID = req.googlePayload.sub;
  const { username } = req.body;

  if (!username) {
    return res.status(400).send('Must include username');
  }

  const db = req.app.get('db');

  const user = await db.user.findOne({ username });
  if (user) {
    return res.status(400).send('Username already in use');
  }

  await db.user.update({ google_id: googleID }, { username });
  return res.send('Successfully updated username');
};

export default updateUsername;
