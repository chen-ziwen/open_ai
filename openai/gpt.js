const { Configuration, OpenAIApi } = require("openai");
const tunnel = require("tunnel");
const axios = require("axios");

class Openai {
    constructor(opts) {
        this.configuration = new Configuration({
            apiKey: opts.apiKey,
        });
        let defaultOpts = {
            timeout: 5 * 60 * 1000,
            maxContentLength: 20 * 1024 * 1024,
            maxBodyLength: 20 * 1024 * 1024,
            withCredentials: true,
        };
        this.client = axios.create({
            ...defaultOpts,
            httpsAgent: tunnel.httpOverHttp({
                proxy: {
                    host: '127.0.0.1',
                    port: 7890,
                }
            })
        });
        this.openai = new OpenAIApi(this.configuration, this.configuration.basePath, this.client);
    }
}

exports.module = Openai;