// username must be between 4 and 25 characters,
// start with a letter or number,
// must not have multiple underscores in a row,
// must only contain alphanumeric and underscore characters,
// must end with an alphanumeric character

const validateUsername = username => {
  const usernameRegex = /^(?=[a-zA-Z0-9])(?!.*[_]{2})[\w]+[a-zA-Z0-9]$/;

  if (typeof username !== 'string') {
    return false;
  }

  if (username.length < 4 || username.length > 25) {
    return false;
  }

  if (!usernameRegex.test(username)) {
    return false;
  }

  return true;
};

export default validateUsername;
