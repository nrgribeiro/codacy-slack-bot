const dayjs = require('dayjs')
const { CODACY_PROVIDER, CODACY_ORGANIZATION } = require('../utils/constants')
const getStyle = require('../utils/grade')
const sort = require('../utils/sort')

const header = {
  type: 'section',
  text: {
    type: 'mrkdwn',
    text: '*Codacy Monthly Ranking* - ' + dayjs().format('MMMM'),
  },
}

const divider = {
  type: 'divider',
}

const tableHeader = {
  type: 'section',
  text: {
    type: 'mrkdwn',
    text: '# - Repository Name',
  },
  accessory: {
    type: 'button',
    text: {
      type: 'plain_text',
      text: 'Grade',
      emoji: true,
    },
    action_id: 'button-action',
  },
}

const footer = {
  type: 'section',
  text: {
    type: 'mrkdwn',
    text: 'Not seeing your projects repository here? ask us how to improve your grade: devops@blissapplications.com',
  },
}

const section = (index, { name, letter, grade }) => ({
  type: 'section',
  text: {
    type: 'mrkdwn',
    text: '*' + ++index + '* - *' + name + '*',
  },
  accessory: {
    type: 'button',
    text: {
      type: 'plain_text',
      text: letter,
      emoji: true,
    },
    url: `https://app.codacy.com/${CODACY_PROVIDER}/${CODACY_ORGANIZATION}/${name}/dashboard`,
    action_id: 'repo-action',
    style: getStyle(grade),
  },
})

const basePayload = () => ({
  blocks: [header, divider, tableHeader, divider],
})

const rankingPayload = {
  build: (items) => {
    const payload = basePayload()
    // past month top 10, sorted by grade
    // only the ones the had changes during that month
    const top = sort
      .numericByValue(items, 'grade')
      .filter((item) => dayjs(item.lastUpdated).diff(dayjs(), 'month') >= 0)
      .reverse()
      .slice(0, 10)

    const sectionTop = top.map((item, index) => section(index, item))

    payload.blocks.push(...sectionTop)
    payload.blocks.push(divider)
    payload.blocks.push(footer)

    return payload
  },
}

module.exports = rankingPayload
