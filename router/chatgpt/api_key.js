
// 接收 openai key
const apiKey = (req, res) => {
    const key = req.body.apiKey;
    res.send(key);
};

module.exports = apiKey;