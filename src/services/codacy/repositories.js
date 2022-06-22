const {
  CODACY_PROVIDER,
  CODACY_ORGANIZATION,
} = require('../../utils/constants')
const codacyClient = require('../clients')

const endpoint = `/analysis/organizations/${CODACY_PROVIDER}/${CODACY_ORGANIZATION}/repositories`

const getRepositories = {
  get: async () =>
    await codacyClient
      .get(endpoint)
      .then((response) => response.data)
      .catch((error) => error),
}

module.exports = getRepositories
