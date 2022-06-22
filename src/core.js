const dayjs = require('dayjs')
const cron = require('node-cron')
const ranking = require('./controllers/monthlyRanking')
const repositoryInfo = require('./controllers/repositoryInfo')

const core = {
  init: async (app) => {
    // Schedule tasks to be run on the server.
    cron.schedule('* * * * *', async () => {
      // run at the last day of the month
      if (dayjs().endOf('month').format('D') === dayjs().format('D')) {
        const payload = await ranking.get()
        try {
          await app.client.chat.postMessage({
            channel: 'codacy',
            blocks: payload.blocks,
            text: 'Codacy monthly report',
          })
        } catch (error) {
          console.log(error)
        }
      }
    })

    app.command('/codacy', async ({ command, ack, say }) => {
      // Acknowledge command request
      await ack()

      const repo = await repositoryInfo.get(command.text)

      await say({
        blocks: repo.blocks,
        text: 'Codacy report',
      })
    })
  },
}

module.exports = core
