const googleSignIn = async (req, res) => res.status(200).json({
  username: req.googlePayload.username,
});

export default googleSignIn;
