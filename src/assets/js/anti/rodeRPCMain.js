const os = require('node:os')
const { appdata } = require('../utils')
const { readFileSync } = require('node:fs')

async function RODEMain() {
    let plat = os.platform()
    let hdir = os.homedir()
    let info = { info: `platform : ${plat}, home : ${hdir}`}
    return info
}

module.exports = {RODEMain}