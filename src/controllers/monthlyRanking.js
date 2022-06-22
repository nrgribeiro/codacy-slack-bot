const rankingPayload = require('../messages/ranking')
const repository = require('../models/repository')
const getRepositories = require('../services/codacy/repositories')

const ranking = {
  get: async () => {
    const result = await getRepositories.get()

    const repos = result.data.map((item) => repository.create(item))

    const payload = rankingPayload.build(repos)

    return payload
  },
}

module.exports = ranking
