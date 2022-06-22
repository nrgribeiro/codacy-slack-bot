const {
  CODACY_PROVIDER,
  CODACY_ORGANIZATION,
} = require('../../utils/constants')
const codacyClient = require('../clients')

const endpoint = `/analysis/organizations/${CODACY_PROVIDER}/${CODACY_ORGANIZATION}/repositories/`

const getRepository = {
  get: async (slug) =>
    await codacyClient
      .get(endpoint + slug)
      .then((response) => response.data)
      .catch((error) => error),
}

module.exports = getRepository
