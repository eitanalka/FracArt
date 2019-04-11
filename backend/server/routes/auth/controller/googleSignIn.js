import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleSignIn = async (req, res) => {
  const { idToken } = req.body;
  const db = req.app.get('db');

  const ticket = await client.verifyIdToken({
    idToken,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload();

  // check to see if user has been created and has username
  const user = await db.user.findOne({ google_id: payload.sub });
  if (user && user.username) {
    // send jwt here
    return res.send('validated');
  }
  if (!user) {
    await db.user.save({ email: payload.email, google_id: payload.sub });
  }

  return res.send('must create username');
};

export default googleSignIn;
