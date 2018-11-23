function isRequestAjaxOrApi(req) {
  return !req.accepts("html") || req.xhr;
}

module.exports = isRequestAjaxOrApi;
