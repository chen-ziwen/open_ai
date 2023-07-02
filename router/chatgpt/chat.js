const useGpt = require("../../openai/use_gpt.js");
const gptChat = async (req, res) => {
    const params = req.body;
    console.log('params', params.role, params.content);
    try {
        const respone = await useGpt().createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: params.role,
                    content: params.content,
                }
            ]
        });
        console.log("======>respone", respone);
        res.send(JSON.stringify(respone));
    } catch (e) {
        console.log('请求失败！！！', e);
    }
};

module.exports = gptChat;
