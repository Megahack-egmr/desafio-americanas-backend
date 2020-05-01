module.exports = (list) => {
  return (list || '')
    .split(',')
    .map((e) => {
      return e.trim() || e;
    })
    .filter((e) => {
      return e !== '';
    });
};
