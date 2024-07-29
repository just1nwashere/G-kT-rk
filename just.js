//moduller
const { LoadCommands, AoiClient } = require("aoi.js")
const just = require("./src/handler/bot.js")
const Eris = require('eris')
const { Util } = require("aoi.js")
const { setup } = require("@akarui/aoi.parser")
const { join } = require("path")
const { Database } = require("aoi.mongo");
setup(Util)

//ayarlar
const client = new AoiClient({
    token: just.token,
    prefix: just.prefix,
    intents: just.intents,
    events: just.events,
    disableAoiDB: true,
})

//database
const database = new Database(client, {
    url: just.mongo,
    tables: ["main"],
    logging: true
})

//handler
client.variables(require("./src/handler/ayarlar.js"))

//komut handler
const loader = new LoadCommands(client)
loader.load(client.cmd,"./src/commands")

//status
client.status({name: "💙 GökTürk 💙", status: "online", type: "STREAMING", time: 12, url: "https://discord.gg/J7zSrVQk6f"})

//eris ses
const _client = new Eris(just.token, {
    intents: ["all"]
})
  
_client.connect();
_client.on("ready", () => {
_client.joinVoiceChannel(just.ses, {selfMute: false, selfDeaf: true})
_client.editStatus("online")
});