const logger = require("../logger");
const {countingChannel} = require('../config');
let count = 0;


module.exports = async (e) => {
    logger.info(`MessageCreate interaction for user [discordSnowflake=${e.author.id}]`);

    if(e.author.bot === true) return;

    if(e.channel.id === countingChannel){
        if(Number(e.content) === count + 1){
            count++;
        } else {
            count = 0;
            await e.reply('You miscounted, restarting from 0.')
        }
    }
};