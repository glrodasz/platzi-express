const { config } = require("../../config");

function logErrors(err, req, res, next) {
  console.log(err.stack);
  next(err);
}

function clientErrorHandler(err, req, res, next) {
  // catch errors for AJAX request
  if (req.xhr) {
    res.status(500).json({ err: err.message });
  } else {
    next(err);
  }
}

function errorHandler(err, req, res, next) {
  // catch erros while streaming
  if (res.headersSent) {
    next(err);
  }

  if (!config.dev) {
    delete err.stack;
  }

  res.status(err.status || 500);
  res.render("error", { error: err });
}

module.exports = {
  logErrors,
  clientErrorHandler,
  errorHandler
};
