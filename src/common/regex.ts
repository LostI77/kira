export const gmailRegex: RegExp =
  /([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/g;

export const passwordRegex: RegExp =
  /^.*(?=.{8,64})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
