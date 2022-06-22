const { CODACY_PROVIDER, CODACY_ORGANIZATION } = require('../utils/constants')
const getStyle = require('../utils/grade')

const repositoryInfoPayload = {
  build: ({
    name,
    letter,
    grade,
    selectedBranch,
    issues,
    complexity,
    coverage,
    duplication,
  }) => {
    return {
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: 'Codacy Analysis information for repo *' + name + '*',
          },
          accessory: {
            type: 'button',
            text: {
              type: 'plain_text',
              text: letter,
            },
            url: `https://app.codacy.com/${CODACY_PROVIDER}/${CODACY_ORGANIZATION}/${name}/dashboard`,
            action_id: 'repo-action',
            style: getStyle(grade),
          },
        },
        {
          type: 'divider',
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: '*Branch:*\n' + selectedBranch,
            },
            {
              type: 'mrkdwn',
              text: '*Grade:*\n' + grade,
            },
            {
              type: 'mrkdwn',
              text: '*Issues:*\n' + issues + '%',
            },
            {
              type: 'mrkdwn',
              text: '*Complexity:*\n' + complexity,
            },
            {
              type: 'mrkdwn',
              text: '*Duplication:*\n' + duplication,
            },
            {
              type: 'mrkdwn',
              text: '*Coverage:*\n' + coverage,
            },
          ],
        },
      ],
    }
  },
}

module.exports = repositoryInfoPayload
