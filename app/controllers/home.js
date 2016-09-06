var express = require('express'),
  router = express.Router(),
  Article = require('../models/article'),
  os = require('os');;

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  var articles = [new Article(), new Article()];
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles,
      ip: getIp()
    });
});

const getIp = () => 
  Object.keys(os.networkInterfaces())
        .map(ifname => ifaces[ifname].filter(iface => 'IPv4' === iface.family && iface.internal)
                                                                      .map(iface => iface.address)[0])[0];