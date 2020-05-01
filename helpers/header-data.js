module.exports = (headers, headerToCheck = 'default') => {
  return Object.keys(headers).indexOf(headerToCheck) !== -1;
};
