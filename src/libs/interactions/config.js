const dotenv = require('dotenv');

dotenv.config({ path: `${process.cwd()}/.${process.env.NODE_ENV.replace(' ', '')}.env`});

module.exports = {
  countingChannel: process.env.COUNTING_CHANNEL,
};