var jieba = require("nodejieba");

function cut(sentence) {
    if (typeof(sentence) !== typeof("")) {
        return [];
    }
    var res = jieba.cut(sentence, true);
    return res;
}

exports.cut = cut;