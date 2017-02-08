var express = require("express");
var bodyparser = require("body-parser");
var jieba = require("./jieba.js");

var app = express();

app.set('port', (process.env.PORT || 8080));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));

const QUERY_WORD = "sentence";
const SEND_WORD = "words";

app.get('/jieba-cut', function(request, response) {
    var sentence = request.query[QUERY_WORD];
    var words = jieba.cut(sentence);
    var send = {"words": words};
    response.send(send);
});

var port = app.get('port');
app.listen(port, function() {
    console.log('listen port: ' + port);
});