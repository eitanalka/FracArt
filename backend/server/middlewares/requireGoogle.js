import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const requireGoogle = async (req, res, next) => {
  const idToken = req.get('Authorization');
  const db = req.app.get('db');

  try {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    // check to see if user has been created and has username
    const user = await db.user.findOne({ google_id: payload.sub });
    if (user && user.username) {
      payload.username = user.username;
      req.googlePayload = payload;
      return next();
    }

    // create user if it doesn't exist
    if (!user) {
      await db.user.save({ email: payload.email, google_id: payload.sub });
    }

    // if user needs to update username allow them through
    if (req.path.includes('/username')) {
      req.googlePayload = payload;
      return next();
    }

    return res.status(403).send('Must create username');
  } catch (error) {
    res.status(401).send('Unauthorized');
    return next(error);
  }
};

export default requireGoogle;
