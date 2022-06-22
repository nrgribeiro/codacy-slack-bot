const axios = require('axios')

const codacyClient = axios.create({
  baseURL: process.env.CODACY_BASE_URL,
  headers: {
    'api-token': process.env.CODACY_API_TOKEN,
  },
})

module.exports = codacyClient
