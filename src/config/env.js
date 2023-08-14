module.exports = {
  get appPort() {
    return parseInt(process.env.PORT, 10);
  },
  get mongooUrl() {
    return process.env.MONGOO_URL;
  },
};
