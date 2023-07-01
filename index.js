console.log('openai 启动了');

const { Configuration, OpenAIApi } = require("openai");
const tunnel = require("tunnel");
const axios = require("axios");

// gpt_key
const configuration = new Configuration({
    apiKey: "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",
});

// set_proxy
const client = axios.create({
    httpsAgent: tunnel.httpsOverHttp({
        proxy: {
            host: '127.0.0.1',
            port: 7890,
        }
    })
})



const openai = new OpenAIApi(configuration, configuration.basePath, client);

const chat = openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
        {
            role: "user",
            content: "甲状腺三级饮食应该注意什么？"
        }
    ],
})

chat.then(res => {
    console.log(res.data.choices[0].message);
}).catch(err => {
    console.log('请求失败，请重新尝试', err)
});
