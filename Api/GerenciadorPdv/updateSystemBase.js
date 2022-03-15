var https = require('follow-redirects').https;
require('dotenv').config();

//var fs    = require('fs');

var https = require('follow-redirects').https;

var options = {
  'method': 'GET',
  'hostname': process.env.URL_GERENCIADOR,
  'path': '/vilela/gerenciadorpdv/auth/'+process.env.USUARIO_ADMIN_GERENCIADOR+'/'+process.env.SENHA_ADMIN_GERENCIADOR+'',
  'headers': {
    'Authorization': 'Basic '+process.env.TOKEN_GERENCIADOR
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
    process.env['JWT']=body.toString();
  });  
  res.on("error", function (error) {
    console.error(error);
  });
});
req.end();

//console.log(req);
module.export = req;