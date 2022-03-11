var https = require('follow-redirects').https;
const {token} = require('../../package.json');
//var fs    = require('fs');

var options = {
  'method': 'GET',
  'hostname': 'testeonline.adiantibuilder.com.br',
  'path': '/vilela/gerenciadorpdv/auth/admin/admin',//separar login e senha
  'headers': {
    'Authorization': token // separar o Token
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    //console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();

module.export = req.on('end');