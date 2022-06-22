// xapp-1-A03E7JJD1J4-3453241352230-58ac444a989ab692b020fd70805e11952e937834dbdc32c9e2219482c160e8e6
require('dotenv').config()
const { App } = require('@slack/bolt')
const core = require('./src/core')

const app = new App({
  token: process.env.SLACK_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
})

app.start(3000)

core.init(app)
