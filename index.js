module.exports = function (accessid, secret) {
    var voiceurl = 'https://dyvmsapi.aliyuncs.com/';
    var smsurl = 'https://dysmsapi.aliyuncs.com/';
    var network = require('./lib/network');
    network.app = {
        AccessKeyId: accessid,
        AccessKeySecret: secret
    };
    this.sendSms = function (msg) {
        msg.Action = 'SendSms';
        return network.post(smsurl, msg);
    };
    this.call = function (msg) {
        msg.Action = 'SingleCallByVoice';
        return network.post(voiceurl, msg);
    };
    return this;
};