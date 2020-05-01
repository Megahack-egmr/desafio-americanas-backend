const app = require('./index');

const listener = app
  .listen(process.env.PORT, () => {
    console.info(`Server running, port: ${process.env.PORT}`);
  })
  .on('error', (error) => {
    console.info('!ERROR!');
    console.info(error);
  });

process.on('uncaughtException', (error) => {
  console.info('uncaughtException');
  console.info(error);
});

module.exports = listener;
