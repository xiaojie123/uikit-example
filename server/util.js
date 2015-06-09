var api = require('./api');

var util = {
  getPageNum: function (currPageNum, totalPageNum,first,last, url) {
    var result="";
    for (var i = 1; i <= totalPageNum; i++) {
      if (i == 2 && currPageNum - 6 > 1) {
        i = currPageNum - 6;
      } else if (i == currPageNum + 6 && currPageNum + 6 < currPageNum) {
        i = currPageNum - 1;
      } else {
        if (i == currPageNum) {
          result += '<li class="active"><a href="javascript:void(0)">' + i + '<span class="sr-only">(current)</span></a></li>';
        } else {
          result += '<li><a href="' + url.replace(/[&|?]page=\d+/, '') + (url.indexOf('&')>-1?'&':'?')+'page=' + i+'">' + i + '</a></li>';
        }

      }
    }
    return result;
  },
  getSelect:function(name,callback){
    api.get('/constants/'+name,function(e,r,data){
      callback(data);
    });
  },
  isLogin: function (req, res, next) {
    if (req.user) {
      return next();
    }
    res.redirect('/login?redirect=' + req.originalUrl);
  },
  sendSMS:function(req){
    var currentDate = new Date().getTime();
    var cell = req.body.cell;
    var code = Math.floor(Math.random()*10000);
    req.session.re_verify = currentDate+1000*60;
    req.session.re_verify_cell = cell;
    req.session.verify=code;
    api.post("/sms",{to:cell,code:code},function (e, r) {});
  }
};

module.exports = util;
