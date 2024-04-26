const axios = require("axios");

class Api {
    link = ''

    constructor(link) {
        this.link = link
    }

    async getNewest() {
        let [maxIdPromise] = await Promise.all([axios.get(`${this.link}maxitem.json`)]);

        return maxIdPromise.data;

    }

    async getPost(id) {
        let response = await axios.get(`${this.link}item/${id}.json`);
        return response.data;
    }
}

module.exports = {Api: Api};