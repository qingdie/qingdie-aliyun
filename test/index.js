var Aliyun = require('../index');
var client = new Aliyun('LTAI2KSGBAhffsyi', 'E8lxsh6ZyRh771dQkjZieo3GrhMAk8');
(async () => {
    var r = await client.sendSms({
        TemplateParam: '{"code":"8888"}',
        PhoneNumbers: '13180314825',
        SignName: '倾蝶科技',
        TemplateCode: 'SMS_75720128'
    });
    console.log(r);
    var r = await client.call({
        CalledNumber: '13180314825',
        CalledShowNumber: '075561971030',
        VoiceCode: '805118f4-b465-4b66-86e0-3f4e6a8f5a12.wav'
    });
    console.log(r);
})();
