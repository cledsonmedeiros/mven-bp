module.exports = (app) => {
  app.use('/v1', require('./v1'));
};
