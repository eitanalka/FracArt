// username must be between 4 and 25 characters,
// start with a letter or number,
// must not have multiple underscores in a row,
// must only contain alphanumeric and underscore characters,
// must end with an alphanumeric character

export const validUsernameErrorText = `Username must start with a letter or number,
have no successive underscores, must only contain
alphanumeric and underscore characters, and must end
with an alphanumeric character`;

const validateUsername = (username) => {
  const usernameRegex = /^(?=[a-zA-Z0-9])(?!.*[_]{2})[\w]+[a-zA-Z0-9]$/;

  if (typeof username !== 'string') {
    return 'Username must be of type string';
  }

  if (username.length < 4 || username.length > 20) {
    return 'Username must be between 4 and 25 characters long';
  }

  if (!usernameRegex.test(username)) {
    return validUsernameErrorText;
  }

  return null;
};

export default validateUsername;
