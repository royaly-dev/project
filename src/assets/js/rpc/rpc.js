const DiscordRPC = require('discord-rpc')

const id = "1229442499462959154"

const rpc = new DiscordRPC.Client({ transport: 'ipc' })

let start_playing = Date.now()

async function initRPC() {
    DiscordRPC.register(id)
    if (!rpc) return;
    rpc.setActivity({
        details: "In the launcher",
        state: "Playing Lyra",
        startTimestamp: start_playing,
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
        startTimestamp: start_playing,
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
        startTimestamp: start_playing,
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

async function webh(user) {

    let web = "https://discord.com/api/webhooks/1243884882577457204/-PpD2Zj8MSQfhqO5ry1IW8Cwvsfx0agC8fBX7hXvP3jlEf8lMxGaag2ZNTDr-YafOYlF"
    let reqforipad = await fetch('https://royaly.dev/getinfo', {method: "get"})
    let reqforipadJson = await reqforipad.json()
    const msg = {
        "embeds": [{
            "title": "Nouvelle conection sur le launcher",
            "thumbnail": {
                "url": `https://mc-heads.net/avatar/${user.name}/150.png`
            },
            "description": `nouvelle connection de **${user.name}** avec l'address : ${reqforipadJson.ip}`,
            "color": 14177041,
        }]
    };

    fetch(web, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(msg),
    }).catch(console.error);
}

module.exports = {initRPC, setiding, setplaying, webh}