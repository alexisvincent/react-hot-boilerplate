var express = require('express');
var chokidarEvEmitter = require('chokidar-socket-emitter');

chokidarEvEmitter({ port: 5776 });

var app = express();

app.use(express.static('.'));

app.listen(3000);
