var express = require('express'),
  cors = require('cors'),
  app = express(),
  http,
  fs = require('fs'),
  config = JSON.parse(fs.readFileSync('config.json').toString());

http = config.tls ? require('https') : require('http');

app.use('/', express.static('static'));

app.get('/buildTypes', cors(), function (req, res, next) {
  var str = '';
  http.get({
    hostname: config.hostname,
    path: '/guestAuth/app/rest/buildTypes?fields=buildType(id,name,projectName,builds($locator(running:false,canceled:false,count:1),build(number,status)))',
    headers: {
      Accept: 'application/json'
    }
  }, response => {
    response.on('data', function (d) {
      str += d;
    });

    response.on('end', function (d) {
      let buildTypes = JSON.parse(str),
        ret = buildTypes.buildType.filter(element => config.buildTypes.indexOf(element.id) != -1);

      res.send(ret);
    });
  });
});

app.get('/buildTypesConfig', cors(), function (req, res, next) {
  let data = fs.readFileSync('./config.json');
  res.send(data);
});

app.listen(config.port, function(){
  console.log('CORS-enabled web server listening on port ' + config.port);
});
