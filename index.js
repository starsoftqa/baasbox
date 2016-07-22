var fs = require('fs');

filedata = fs.readFileSync('./baasbox-lib/baasbox.js', 'utf8');
eval(filedata);

exports.BaasBox = BaasBox;
