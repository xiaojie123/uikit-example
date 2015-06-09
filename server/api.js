var exports = module.exports;
var request = require('request');
var oauthToken = "x";
function callApi(url, method, data, token, callback) {
  if (url.substring(0,4)!=='http')
    url = config.endpoint + '/' + url;
  var options = {
    url: url,
    json: data,
    method: method,
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-type': 'application/json'
    }
  };
  request(options, function (error, response, body) {
    callback(error, response, body, token);
  });
}
module.exports = {
  get: function (url, callback) {
    callApi(url, 'GET', {}, oauthToken, callback);
  },
  post: function (url, data, callback) {
    callApi(url, 'POST', data, oauthToken, callback);
  },
  put: function (url, data, callback) {
    callApi(url, 'PUT', data, oauthToken, callback);
  },
  patch: function (url, data, callback) {
    callApi(url, 'PATCH', data, oauthToken, callback);
  }
};
