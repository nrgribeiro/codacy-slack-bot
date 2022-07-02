require('dotenv').config()
const { App } = require('@slack/bolt')
const core = require('./src/core')

const app = new App({
  token: process.env.SLACK_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
})

app.start(process.env.PORT || 3000)

core.init(app)
