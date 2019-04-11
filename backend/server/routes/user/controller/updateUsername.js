import { validateUsername } from '../../../utils/validators';

const updateUsername = async (req, res) => {
  const googleId = req.googlePayload.sub;
  const { username } = req.body;

  if (!username) {
    return res.status(400).send('Must include username');
  }

  const errorMessage = validateUsername(username);
  if (errorMessage) {
    return res.status(400).send(errorMessage);
  }

  const db = req.app.get('db');

  const user = await db.user.findOne({ username });
  if (user) {
    return res.status(409).send(`Username, ${username}, already in use`);
  }

  await db.user.update({ google_id: googleId }, { username });
  return res.send('Successfully updated username');
};

export default updateUsername;
