const DiscordRPC = require('discord-rpc')

const id = "1229442499462959154"

const rpc = new DiscordRPC.Client({ transport: 'ipc' })

async function initRPC() {
    DiscordRPC.register(id)
    if (!rpc) return;
    rpc.setActivity({
        details: "In the launcher",
        state: "Playing Lyra",
        startTimestamp: Date.now(),
        largeImageKey: "icon",
        largeImageText: "lyra",
        instance: false,
        buttons: [
            {
                label: "WebSite",
                url: "https://lyra.royaly.dev"
            }
        ]
    })
}

async function setiding() {
    if (!rpc) return;
    rpc.setActivity({
        details: "In the launcher",
        state: "Playing Lyra",
        startTimestamp: Date.now(),
        largeImageKey: "icon",
        largeImageText: "lyra",
        instance: false,
        buttons: [
            {
                label: "WebSite",
                url: "https://lyra.royaly.dev"
            }
        ]
    })
}

async function setplaying(params) {
    if (!rpc) return;
    rpc.setActivity({
        details: "In Game",
        state: "Playing Lyra",
        startTimestamp: Date.now(),
        largeImageKey: "icon",
        largeImageText: "lyra",
        instance: false,
        buttons: [
            {
                label: "WebSite",
                url: "https://lyra.royaly.dev"
            }
        ]
    })
}

rpc.on('ready', async () => {
    initRPC()
    console.log("ready !")
})

rpc.login({ clientId: id }).catch(err => {
    console.log(err)
})

module.exports = {initRPC, setiding, setplaying}