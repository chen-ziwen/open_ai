const Openai = require("./gpt.js");

function useGpt() {
    const opts = {
        apiKey: "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",
    }
    const openai = new Openai(opts).openai;
    return openai;
}

module.exports = useGpt;

