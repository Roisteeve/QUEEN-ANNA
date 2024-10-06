import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

import dotenv from 'dotenv'
dotenv.config()

const ownervb = process.env.OWNERS;
if (!ownervb){
   throw new Error("OWNERS env is not set");
}

const ownerlist = ownervb.split(';');

global.owner = [];
for (let i = 0; i < ownerlist.length; i += 2) {
    const owner = [
        ownerlist[i],            
        ownerlist[i + 1],         
        true                        
    ];
    global.owner.push(owner);
}

//----------------------------------------------------------------------------

global.mods = ['50937042801'] 
global.prems = ['50937042801']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['BrunoSobrino']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '~ ₉₀₀₃'
global.premium = 'true'
global.packname = '~ ₉₀₀₃' 
global.author = '~ ₉₀₀₃' 
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/lawliet.kfx\n' 
global.dygp = 'https://xnxx.com'
global.fgsc = 'https://xnxx.com' 
global.fgyt = 'https://xnxx.com'
global.fgpyp = 'https://xnxx.com'
global.fglog = 'ANNA.jpg' 

//imagen
global.imagen1 = fs.readFileSync('./Assets/ANNA.jpg')

//Dont Edit Danger Zone⚠️
global.wait = '*⌛ _fon ti tann..._*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.mlc = '📃'
global.sdc = '🎶'
global.xmoji = '🔥' 
global.multiplier = 69 
global.maxwarn = '5' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
