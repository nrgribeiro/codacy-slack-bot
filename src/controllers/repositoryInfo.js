const repositoryInfoPayload = require('../messages/repositoryInfo')
const repository = require('../models/repository')
const getRepository = require('../services/codacy/repository')

const repositoryInfo = {
  get: async (slug) => {
    const result = await getRepository.get(slug)

    const repo = repository.create(result.data)

    const formatedPayload = repositoryInfoPayload.build(repo)

    return formatedPayload
  },
}

module.exports = repositoryInfo
