var assert = require('assert');
var jieba = require('../jieba.js');

describe('Jieba cut', function() {
    var raw1 = [];
    var raw2 = {};
    var raw3 = '設定早上五點的鬧鐘';

    var actual1 = jieba.cut(raw1);
    var actual2 = jieba.cut(raw2);
    var actual3 = jieba.cut(raw3);

    var excepted1 = [];
    var excepted2 = [];
    var excepted3 = ['設定', '早上', '五點', '的', '鬧鐘'];

    it('should return []', function() {
        assert.deepEqual(actual1, excepted1);
        assert.deepEqual(actual2, excepted2);
    });

    it('should return words array', function(){
        assert.deepEqual(actual3, excepted3);
    });
});
