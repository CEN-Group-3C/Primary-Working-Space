module.exports = {
  async logMessage(req, res, next) {
    console.log("Middleware is working!");
    next();
  }
}