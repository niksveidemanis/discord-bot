require('dotenv').config()

const { Client, IntentsBitField, EmbedBuilder, AttachmentBuilder } = require('discord.js');

const moment = require('moment');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online!`);
});

client.on('interactionCreate', (Interaction) => {
    if (!Interaction.isChatInputCommand()) return;

    if (Interaction.commandName === 'userinfo') {
        let userpfp = Interaction.user.displayAvatarURL()
        var username = Interaction.user.username;
        var joined = Interaction.member.joinedAt;
        var createdat = Interaction.user.createdAt;
        const embed = new EmbedBuilder()
        .setTitle(`User: ${username}`)
        .setThumbnail(userpfp)
        // .setDescription('This is an embed description')
        .setColor('Random')
        .addFields(
            { name: 'Account created on', value: `${moment(createdat).format('MMMM Do YYYY, h:mm:ss a')}`},
            { name: 'Joined this server on', value: `${moment(joined).format('MMMM Do YYYY, h:mm:ss a')}`},
            { name: 'Joined', value: `${moment(joined, 'YYYYMMDD').fromNow()}`},
            );

        Interaction.reply({ embeds: [embed] })
    }
});

client.login(process.env.TOKEN);
