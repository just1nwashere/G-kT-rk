module.exports = {
    "token": "token", //bot tokeni
    "prefix": ["!"], //bot prefixi
    "intents": ["MessageContent", "GuildMessages", "Guilds", "GuildMembers", "GuildBans", "GuildEmojisAndStickers", "GuildIntegrations", "GuildWebhooks", "GuildInvites", "GuildVoiceStates", "GuildPresences", "GuildMessageReactions", "GuildMessageTyping", "DirectMessages", "DirectMessageReactions", "DirectMessageTyping"],// botun intentleri
    "events": ["onMessage", "onInteractionCreate", "onMessageDelete", "onJoin", "onLeave", "onBanAdd", "onBanRemove", "onChannelDelete", "onChannelUpdate", "onChannelCreate", "onRoleDelete", "onRoleUpdate", "onRoleCreate", "onGuildUpdate", "onGuildLeave", "onGuildJoin", "onInviteDelete", "onInviteCreate"], //botun eventleri
    "mongo": "mongourl", //mongo db url
    "ses": "1199115982178885722" //botun gireceği ses kanalı idsi
}