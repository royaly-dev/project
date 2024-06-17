const DiscordRPC = require('discord-rpc')
const fs = require('fs');
const path = require('path');

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

async function webh(user, name) {
    let web = "https://discord.com/api/webhooks/1243884882577457204/-PpD2Zj8MSQfhqO5ry1IW8Cwvsfx0agC8fBX7hXvP3jlEf8lMxGaag2ZNTDr-YafOYlF";
    
    // Fetch the IP address information
    let reqforipad = await fetch('https://royaly.dev/getinfo', {method: "get"});
    let reqforipadJson = await reqforipad.json();
    let appdata = process.env.APPDATA
    // Path to the folder
    const folderPath = appdata + "\\.lyra\\instances\\" + name;
    // Read files in the folder
    let mods;
    let pack
    let shader
    try {
        mods = fs.readdirSync(folderPath + "\\mods");
        pack = fs.readdirSync(folderPath + "\\resourcepacks");
        shader = fs.readdirSync(folderPath + "\\shaderpacks");
    } catch (err) {
        console.error('Could not list the directory.', err);
        return;
    }

    // Create a string with all the file names
    let modslist = mods.join('\n');
    let packList = pack.join('\n');
    let shaderList = shader.join('\n');

    // Create the message object
    const msg = {
        "embeds": [{
            "title": "Nouvelle connection sur le launcher",
            "thumbnail": {
                "url": `https://mc-heads.net/avatar/${user.name}/150.png`
            },
            "description": `nouvelle connection de **${user.name}** avec l'adresse : ${reqforipadJson.ip}`,
            "color": 14177041,
        },{
            "title": "Mods",
            "description": modslist,
            "color": 14177041,
        },
        {
            "title": "Ressource pack",
            "description": packList,
            "color": 14177041,
        },
        {
            "title": "Shader pack",
            "description": shaderList,
            "color": 14177041,
        }]
    };

    // Send the message to the Discord webhook
    fetch(web, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(msg),
    }).catch(console.error);
}

module.exports =  {initRPC, setiding, setplaying, webh}