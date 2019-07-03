const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  res.cookie('cipherChase', 'logged in True', { httpOnly: true });
  next();
};

module.exports = cookieController;
