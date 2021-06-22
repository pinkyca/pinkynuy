//Base By FxSx
//Simpel Bot
//Mau Remake?
//Follow @thenay_xploit_
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const FormData = require('form-data')
const crypto = require('crypto')
const util = require('util')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { donasi } = require('./lib/donasi')
const { developer } = require('./lib/developer')
const { randompict } = require('./lib/randompict')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fontPath = ('./lib/Zahraaa.ttf')
const path = require('path')
const { exec, spawn } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, sleep, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const cd = 4.32e+7
const lolis = require('lolis.life')
const loli = new lolis()
const Exif = require('./lib/exif')
const exif = new Exif()
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./bahasa')
const { uploadimg } = require('./lib/uploadimg')
const { convertSticker } = require('./plugins/swm.js')

// SETTINGS OWNER
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:NuyFaa\n' 
            + 'ORG: Owner Pinky;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=6283815956151:+62 838-1595-6151\n'  
            + 'END:VCARD'
numbernye = '0@s.whatsapp.net'
fake = 'PINKY BOT' 
prefix = "#" 
blocked = []   
limitawal = 99999 
memberlimit = 1 
cr = '*PINKY BOT*' 
LoLKey = "7f5a6556983b0bf183028c20" 
TobzKey = "291F6uRDLIhlSpHp1hOy" 
XteamKey = "PinkyBotWea" 
namo = 'PinkyBot' 
pinky = "GroupPinkyXManca"
ator = 'NuyFaa' 
fakereply = "Pinky X Manca" 
fakereply1 = "NuyFaa" 

// SETTINGS NOMER OWNER
const ownerNumber = ["6283815956151@s.whatsapp.net"]

// LOAD JSON
const tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/kelompok/leveling.json'))
const antilink = JSON.parse(fs.readFileSync('./database/kelompok/antilink.json'))
const _level = JSON.parse(fs.readFileSync('./database/pengguna/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/pengguna.json'))
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/pengguna/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/pengguna/uang.json'))
const ban = JSON.parse(fs.readFileSync('./database/pengguna/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/pengguna/premium.json'))
const adm = JSON.parse(fs.readFileSync('./database/pengguna/admin.json'))
const bad = JSON.parse(fs.readFileSync('./database/kelompok/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/kelompok/badword.json'))
const antivirtex = JSON.parse(fs.readFileSync('./database/pinky/antivirtex.json'))
const setiker = JSON.parse(fs.readFileSync('./storage/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./storage/video.json'))
const audionye = JSON.parse(fs.readFileSync('./storage/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./storage/image.json'))
// END LOAD JSON

// FUNCTION
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/pengguna.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
            }
        }
             
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
// FUNCTION
var date = new Date();

var tahun = date.getFullYear();

var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jams = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();


switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
            switch(jams){
                case 0: jams = "Tengah Malam🌃"; break;
                case 1: jams = "Tengah Malam🌃"; break;
                case 2: jams = "Tengah Malam🌃"; break;
                case 3: jams = "Tengah Malam🌃"; break;
                case 4: jams = "Sahur🍙"; break;
                case 5: jams = "Subuh🕌"; break;
                case 6: jams = "Pagi🏙"; break;
                case 7: jams = "Pagi🏙"; break;
                case 8: jams = "Pagi🏙"; break;
                case 9: jams = "Pagi🏙"; break;
                case 10: jams = "Pagi🏙"; break;
                case 11: jams = "Siang🌁"; break;
                case 12: jams = "Dzuhur🕌"; break;
                case 13: jams = "Siang🌁"; break;
                case 14: jams = "Siang🌁"; break;
                case 15: jams = "Ashar🕌"; break;
                case 16: jams = "Sore🌇"; break;
                case 17: jams = "Petang🌆"; break;
                case 18: jams = "Maghrib🕌"; break;
                case 19: jams = "Isya🕌"; break;
                case 20: jams = "Malam🌆"; break;
                case 21: jams = "Malam🌆"; break;
                case 22: jams = "Oyasumi Nassai🌌"; break;
                case 23: jams = "Tengah Malam🌃"; break;
            }
var tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "Jam: " + jams + ":" + menit + ":" + detik;
var tampilHari = "" + jams;

console.log(tampilTanggal);
console.log(tampilWaktu);

const client = new WAConnection()
   client.version = [2, 2119, 6]
   client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('[','white'),color('∆','red'),color(']','white'),color('QR code is ready, Scan now..','white'),color('NuyFaaツ','red'),color('X','lime'),color('FxSx','red'))
})

client.on('credentials-updated', () => {
	const authInfo = client.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
client.connect();



client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
			try {
            mem = anu.participants[0]
			console.log(anu)
            try {
            pp_user = await client.getProfilePicture(mem)
            } catch (e) {
            pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            try {
            pp_grup = await client.getProfilePicture(anu.jid)
            } catch (e) {
            pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            if (anu.action == 'demote') {
            mdata = await client.groupMetadata(anu.jid)
            member = mdata.participants.length
        	num = anu.participants[0]
            anu_user = client.contacts[mem]
            teks = `Selamat Untuk @${num.split('@')[0]}\nAnda Telah Turun Pangkat, Tadinya Admin Sekarang Member`
	        bbuufff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/demote?nama=${encodeURI(anu_user.notify)}&member=${member}&pesan=${encodeURI(anu_user.notify)} Turun Pangkat&pp=${pp_user}&bg=${pp_grup}`)
		client.sendMessage(mdata.id, bbuufff, MessageType.image, {quoted: {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: `Selamat @${num.split('@')[0]}\nTurun Pangkat`, orderTitle: `Selamat @${num.split('@')[0]}\nTurun Pangkat`, thumbnail: fs.readFileSync('me.jpg'), sellerJid: '0@s.whatsapp.net'} } }, contextInfo: {"mentionedJid": [num]}, caption: teks})
		}
		if (anu.action == 'promote') {
            mdata = await client.groupMetadata(anu.jid)
            member = mdata.participants.length
        	num = anu.participants[0]
            anu_user = client.contacts[mem]
            teks = `Selamat Kepada @${num.split('@')[0]}\nAnda Telah Naik Pangkat, Dari Member Menjadi Admin`
	        bbuuufff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/promote?nama=${encodeURIComponent(anu_user.notify)}&member=${member}&pesan=${encodeURIComponent(anu_user.notify)} Naik Pangkat&pp=${pp_user}&bg=${pp_grup}`)
		client.sendMessage(mdata.id, bbuuufff, MessageType.image, {quoted: {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: `Selamat @${num.split('@')[0]}\nNaik Pangkat`, orderTitle: `Selamat @${num.split('@')[0]}\nNaik Pangkat`, thumbnail: fs.readFileSync('me.jpg'), sellerJid: '0@s.whatsapp.net'} } }, contextInfo: {"mentionedJid": [num]}, caption: teks})
		}
       if (anu.action == 'add') {
            mdata = await client.groupMetadata(anu.jid)
            member = mdata.participants.length
        	num = anu.participants[0]
            anu_user = client.contacts[mem]
            teks = `*Hallo* @${num.split('@')[0]}\nSelamat datang di group *${mdata.subject}*\nJangan rusuh ya\nJangan lupa intro @${num.split('@')[0]} 🗣`
	        bbbuuufff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome2?nama=${encodeURIComponent(anu_user.notify)}&descriminator=${member}&memcount=${member}&gcname=${encodeURIComponent(mdata.subject)}&gcicon=${pp_grup}&pp=${pp_user}&bg=${pp_grup}`)
		client.sendMessage(mdata.id, bbbuuufff, MessageType.image, {quoted: {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: `Welcome @${num.split('@')[0]}\n${tampilTanggal}`, orderTitle: `Welcome @${num.split('@')[0]}\n${tampilTanggal}`, thumbnail: fs.readFileSync('me.jpg'), sellerJid: '0@s.whatsapp.net'} } }, contextInfo: {"mentionedJid": [num]}, caption: teks})
		}
            if (anu.action == 'remove') {
                mdata = await client.groupMetadata(anu.jid)
            	num = anu.participants[0]
                anu_user = client.contacts[mem]
                member = mdata.participants.length
                teks = `*Kenapa Keluar Dari Grup* @${num.split('@')[0]}\n*Kyk Nya Sih Habis Di Omelin Sama Mamah Nya:V*`
                bbbbuuuuffff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye2?nama=${encodeURIComponent(anu_user.notify)}&descriminator=${member}&memcount=${member}&gcname=${encodeURIComponent(mdata.subject)}&gcicon=${pp_grup}&pp=${pp_user}&bg=${pp_grup}`)
                client.sendMessage(mdata.id, bbbbuuuuffff, MessageType.image, {quoted: {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: `Keluar @${num.split('@')[0]}\n${tampilTanggal}`, orderTitle: `Keluar @${num.split('@')[0]}\n${tampilTanggal}`, thumbnail: fs.readFileSync('me.jpg'), sellerJid: '0@s.whatsapp.net'} } }, contextInfo: {"mentionedJid": [num]}, caption: teks})
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
      }

    })
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	
	client.on('message-update', async (mek) => {
		try {
	   const from = mek.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[mek.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
		const sender = mek.key.fromMe ? client.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const isRevoke = mek.key.remoteJid.endsWith('@s.whatsapp.net') ? true : mek.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
		if (messageStubType == 'REVOKE') {
			console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
			if (!isRevoke) return
			if (!isCtRevoke) return
			if (!isBanCtRevoke) return
			const from = mek.key.remoteJid
			const isGroup = mek.key.remoteJid.endsWith('@g.us') ? true : false
			let int
			let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
			const id_deleted = mek.key.id
			const conts = mek.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = mek.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'
			const opt4tag = {
				contextInfo: { mentionedJid: [sender] }
			}
			for (let i = 0; i < infoMSG.length; i++) {
				if (infoMSG[i].key.id == id_deleted) {
					const dataInfo = infoMSG[i]
					const type = Object.keys(infoMSG[i].message)[0]
					const timestamp = infoMSG[i].messageTimestamp
					int = {
						no: i,
						type: type,
						timestamp: timestamp,
						data: dataInfo
					}
				}
			}
			const index = Number(int.no)
			const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
			const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
			var nuy = `${numbernye}`
				var split = `${fake}`
				var selepbot72 = {
					contextInfo: {
						participant: nuy,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
			if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
				const strConversation = `╭─「 *ANTIDELETE* 」
❏ Nama : *${pushname}*
❏ Nomer : ${sender.replace('@s.whatsapp.net', '')}
❏ Tipe : Text
❏ Waktu : *${moment.unix(int.timestamp).format('HH:mm:ss')}*
❏ Tanggal : *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
❏ Pesan : *${body ? body : '-'}*
╰──────────`
				client.sendMessage(from, strConversation, MessageType.text, { quoted: { key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: fakereply, orderTitle: fakereply1, thumbnail: fs.readFileSync('me.jpg'), sellerJid: '0@s.whatsapp.net'} } }, contextInfo: { forwardingScore: 508, isForwarded: true}})
			} else if (int.type == 'stickerMessage') {
				var nuy = `${numbernye}`
					var split = `${fake}`
					const pingbro23 = {
						contextInfo: {
							participant: nuy,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await client.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
				const strConversation = `╭─「 *ANTIDELETE* 」
❏ Nama : *${pushname}*
❏ Nomer : ${sender.replace('@s.whatsapp.net', '')}
❏ Tipe : Text
❏ Waktu : *${moment.unix(int.timestamp).format('HH:mm:ss')}*
❏ Tanggal : *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
╰──────────`

				const buff = fs.readFileSync(savedFilename)
				client.sendMessage(from, strConversation, MessageType.text, { quoted: {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: fakereply, orderTitle: fakereply1, thumbnail: fs.readFileSync('me.jpg'), sellerJid: '0@s.whatsapp.net'} } }, contextInfo: { forwardingScore: 508, isForwarded: true}})
				client.sendMessage(from, buff, MessageType.sticker, { quoted: {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: fakereply, orderTitle: fakereply1, thumbnail: fs.readFileSync('me.jpg'), sellerJid: '0@s.whatsapp.net'} } }, contextInfo: { forwardingScore: 508, isForwarded: true}})
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
				var nuy = `${numbernye}`
					var split = `${fake}`
					const pingbro22 = {
						contextInfo: {
							participant: nuy,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await client.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `╭─「 *ANTIDELETE* 」
❏ Nama : *${pushname}*
❏ Nomer : ${sender.replace('@s.whatsapp.net', '')}
❏ Tipe : Text
❏ Waktu : *${moment.unix(int.timestamp).format('HH:mm:ss')}*
❏ Tanggal : *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
❏ Pesan : ${body ? body : '-'}\`\`\`
╰──────────`
				client.sendMessage(from, buff, MessageType.image, { quoted: {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: fakereply, orderTitle: fakereply1, thumbnail: fs.readFileSync('me.jpg'), sellerJid: '0@s.whatsapp.net'} } }, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [sender] }, caption: strConversation })
				fs.unlinkSync(savedFilename)
			}
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
	}
})
	fakeimagecuy = fs.readFileSync(`./me.jpg`)
   	const mek2 =  {key: { fromMe: false,remoteJid: "0@s.whatsapp.net", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 99, status: 180, thumbnail: fakeimagecuy, surface: 180, message: fakereply, orderTitle: fakereply1, sellerJid: '0@s.whatsapp.net'} } }              	 	         
	client.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
		infoMSG.push(JSON.parse(JSON.stringify(mek)))
		fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
		const urutan_pesan = infoMSG.length
		if (urutan_pesan === 5000) {
			infoMSG.splice(0, 4300)
			fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
		}
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
			const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = client.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const totalchat = await client.chats.all()
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
			const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
			const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
			mention != undefined ? mention.push(mentionByReply) : []
			const mentionUser = mention != undefined ? mention.filter(n => n) : []
            
            //  SCURITY FEATURE MANCA
            const isEventon = isGroup ? event.includes(from) : false
            const isBadWord = isGroup ? badword.includes(from) : false
            const isRegistered = checkRegisteredUser(sender) 
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
            const isAntivirtex = isGroup ? antivirtex.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const isPremium= prem.includes(sender)
			const isImage = type === 'imageMessage'
			const fgclink = {key: { fromMe: false,remoteJid: "0@s.whatsapp.net", participant: '0@s.whatsapp.net'}, message: {groupInviteMessage: {groupJid: "6283815956151-1616169743@g.us", inviteCode: "mancanihbos", groupName: fakereply, caption: fakereply1, jpegThumbnail: fs.readFileSync('me.jpg') } } }
			const fdocs = {key : {participant : '0@s.whatsapp.net'}, message: {documentMessage: {title: fakereply, jpegThumbnail: fs.readFileSync('me.jpg') } } }
			const flokasi = {key : {participant : '0@s.whatsapp.net'}, message: {locationMessage: { name: fakereply, jpegThumbnail: fs.readFileSync('me.jpg') } } }
			const fvideo = {key: { fromMe: false, participant: '0@s.whatsapp.net', ...(from ? { remoteJid: "6283815956151-1613049930@g.us" } : {}) }, message: { videoMessage: { title: fakereply, seconds: 999, caption: fakereply1, jpegThumbnail: fs.readFileSync('me.jpg') } } }
			const fgif = {key: { fromMe: false, participant: '0@s.whatsapp.net', ...(from ? { remoteJid: "6283815956151-1613049930@g.us" } : {}) }, message: { videoMessage: { title: fakereply, seconds: 999, gifPlayback: true, caption: fakereply1, jpegThumbnail: fs.readFileSync('me.jpg')} } }
			const ftroli = {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: fakereply, orderTitle: fakereply1, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    client.sendMessage(from, audio, mp3, {quoted:mek})
		    }
		    // Anti Call Encpryt
"AcJ8omdjg+kR442EUUZrymY8q+uVvecDjZp93Y8FYr2wG1TwzWVZMLmwrcsmVoiQKrqRFR5vd69Byn4FQHu9b9tZMWH91HFg0dpIwInRgEO2uDtJKeQuSxvNb475Zjn8ph5xyFHA2g7ar5TRvrlMQcFZwGTd1mDuREktIH5QL097cDGSnO4TJv/FZHmqvy8OXlRgo7oZV0/AxPwQrGdMR3WXBplRpPBGuByrvSIs4cbXeEojDnP59M+2lBRww4yLmdyyjAxyztWVIbj92EWhXwwTMUXbT7/uSLUl5HWSiFV/DOmJ3wF1VRLyXwBJfSj6lov8Zg+GLU+85LnXA3LcF4oTpMRMGkADCIKJrFrWMPKMO/wvJrseIyRthUtrc51Q/Ae6sqZNtguW7WqXJvcEQRPnzP1Cj8KUpxklVWsGh9s2Y2++TVqrkfRdPqAp1O6qFhCsUtnKTsCGywhBATGsDPYMQimdohccGotVtPD/b09l3SQacUHm8PGaCusrR9cdwxH5KNZI7pE"
	        // END SCURITY FEATURE MANCA
			
function addMetadata(packname, author) {	
	if (!packname) packname = 'MancaBot'; if (!author) author = 'NuyFaa';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

}

           var prema = 'Free'
			if (!isPremium) {
				prema = 'Premium'
			} 
			if (!isOwner) {
				prema = 'Owner'
			}
	     }
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
			
		for (let x of mentionUser) {
                if (afk.hasOwnProperty(x.split('@')[0])) {
                    ini_txt = "Maaf user yang anda reply atau tag sedang afk. "
                    if (afk[x.split('@')[0]] != "") {
                        ini_txt += "Dengan alasan " + afk[x.split('@')[0]]
                    }
                    reply(ini_txt)
                }
            }
            if (afk.hasOwnProperty(sender.split('@')[0])) {
                client.sendMessage(from, `${pushname} Anda telah keluar dari mode afk`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                delete afk[sender.split('@')[0]]
                fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
            }
			
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit))
           return false
       }
     }

        
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
					    }
		       } catch (err) { console.error(err)  }
        }
      
      // Tebak Gambar
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    client.sendMessage(from, 'Jawaban Anda Benar!',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    client.sendMessage(from, 'Jawaban Anda Salah!',MessageType.text, { quoted: fgclink, contextInfo: { forwardingScore: 508, isForwarded: true}})
                }
            }
    
        //function balance
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
        if (messagesC.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntilink) return
		if (isGroupAdmins) return client.sendMessage(from, 'Admin Grup Mah Bebas:v',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return client.sendMessage(from, '#izinadmin diterima',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		client.sendMessage(from, `*「 Link Terdeteksi 」*\nHei *${pushname}*  *「 LINK TERDETEKSI ⌋ MAFF SEKARANG KAMU SAYA KICK DARI GRUP INI*`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			client.sendMessage(from, 'SEEE YUO KACK;)',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		}, 0)
	  }
	  if (bad.includes(messagesC)){
		if (!isGroup) return
		if (!isBadWord) return
		if (isGroupAdmins) return client.sendMessage(from, 'Admin Grup Mah Bebas:v',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return client.sendMessage(from, '#izinadmin diterima',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		client.sendMessage(from, `*「 BADWORD TERDETEKSI 」*\nHei *${pushname}*\nMAFF SEKARANG KAMU SAYA KICK DARI GRUP INI*`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			client.sendMessage(from, 'SEEE YUO KACK;)',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		}, 0)
	  }
	  if (messagesC.includes("๒๒")){
		if (!isGroup) return
		if (!isAntivirtex) return
		if (isGroupAdmins) return client.sendMessage(from, 'Admin Grup Mah Bebas:v',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		client.sendMessage(from, `*「 VIRTEX TERDETEKSI 」*\nHei *${sender.split("@")[0]}*  *Virtex Terdeteksi!! Hampura Yeh Aing Kick*`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Rasenggan")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Anjay")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Mainnya")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Kok")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Virtex Awokawok")
		}, 0)
      }
      if (messagesC.includes("🧙‍♂️𝐀𝐥𝐚𝐤𝐚𝐳𝐚𝐦🔮")){
		if (!isGroup) return
		if (!isAntivirtex) return
		if (isGroupAdmins) return client.sendMessage(from, 'Admin Grup Mah Bebas:v',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		client.sendMessage(from, `*「 VIRTEX TERDETEKSI 」*\nHei *${sender.split("@")[0]}*  *Virtex Terdeteksi!! Hampura Yeh Aing Kick*`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Rasenggan")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Anjay")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Mainnya")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Kok")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Virtex Awokawok")
		}, 0)
      }
      if (messagesC.includes("𝐗-𝐕𝐢𝐫𝐮𝐬")){
		if (!isGroup) return
		if (!isAntivirtex) return
		if (isGroupAdmins) return client.sendMessage(from, 'Admin Grup Mah Bebas:v',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		client.sendMessage(from, `*「 VIRTEX TERDETEKSI 」*\nHei *${sender.split("@")[0]}*  *Virtex Terdeteksi!! Hampura Yeh Aing Kick*`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Rasenggan")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Anjay")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Mainnya")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Kok")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Virtex Awokawok")
		}, 0)
      }
      if (messagesC.includes("*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ")){
		if (!isGroup) return
		if (!isAntivirtex) return
		if (isGroupAdmins) return client.sendMessage(from, 'Admin Grup Mah Bebas:v',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		client.sendMessage(from, `*「 VIRTEX TERDETEKSI 」*\nHei *${sender.split("@")[0]}*  *Virtex Terdeteksi!! Hampura Yeh Aing Kick*`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Rasenggan")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Anjay")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Mainnya")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Kok")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Virtex Awokawok")
		}, 0)
      }
      if (messagesC.includes("𝐂𝐎𝐋𝐎𝐒𝐒𝐀𝐋 𝐓𝐈𝐓𝐀𝐍")){
		if (!isGroup) return
		if (!isAntivirtex) return
		if (isGroupAdmins) return client.sendMessage(from, 'Admin Grup Mah Bebas:v',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		client.sendMessage(from, `*「 VIRTEX TERDETEKSI 」*\nHei *${sender.split("@")[0]}*  *Virtex Terdeteksi!! Hampura Yeh Aing Kick*`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Rasenggan")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Anjay")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Mainnya")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Kok")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Virtex Awokawok")
		}, 0)
      }
      if (messagesC.includes("♚㜸ཽཽࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ͢͢㜺ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ㜸ཽཽཽ͢͢͢♚")){
		if (!isGroup) return
		if (!isAntivirtex) return
		if (isGroupAdmins) return client.sendMessage(from, 'Admin Grup Mah Bebas:v',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		client.sendMessage(from, `*「 VIRTEX TERDETEKSI 」*\nHei *${sender.split("@")[0]}*  *Virtex Terdeteksi!! Hampura Yeh Aing Kick*`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Rasenggan")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Anjay")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Mainnya")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Kok")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Virtex Awokawok")
		}, 0)
      }
      if (messagesC.includes("๑๑๑๑๑๑๑๑")){
		if (!isGroup) return
		if (!isAntivirtex) return
		if (isGroupAdmins) return client.sendMessage(from, 'Admin Grup Mah Bebas:v',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		client.sendMessage(from, `*「 VIRTEX TERDETEKSI 」*\nHei *${sender.split("@")[0]}*  *Virtex Terdeteksi!! Hampura Yeh Aing Kick*`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Rasenggan")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Anjay")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Mainnya")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Kok")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Virtex Awokawok")
		}, 0)
      }
      if (messagesC.includes("৭৭৭৭৭৭৭৭")){
		if (!isGroup) return
		if (!isAntivirtex) return
		if (isGroupAdmins) return client.sendMessage(from, 'Admin Grup Mah Bebas:v',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		client.sendMessage(from, `*「 VIRTEX TERDETEKSI 」*\nHei *${sender.split("@")[0]}*  *Virtex Terdeteksi!! Hampura Yeh Aing Kick*`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Rasenggan")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Anjay")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Mainnya")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Kok")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Virtex Awokawok")
		}, 0)
      }
      if (messagesC.includes("ผิดุท้่เึางืผิดุท้่เึาง")){
		if (!isGroup) return
		if (!isAntivirtex) return
		if (isGroupAdmins) return client.sendMessage(from, 'Admin Grup Mah Bebas:v',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		client.sendMessage(from, `*「 VIRTEX TERDETEKSI 」*\nHei *${sender.split("@")[0]}*  *Virtex Terdeteksi!! Hampura Yeh Aing Kick*`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Rasenggan")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Anjay")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Mainnya")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Kok")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Virtex Awokawok")
		}, 0)
      }
	  if (messagesC.includes('assalamualaikum')){
	  client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/waalaikumsalam.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Waalaikumsalam","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('manca')){
	  client.updatePresence(from, Presence.composing)
	  client.sendMessage(from, `Oke Online...\nPrefix : | ${prefix} |\nSpeed : ${process.uptime()}`,MessageType.text, { quoted: {key: { fromMe: true, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '0@s.whatsapp.net' } : {}) }, message: { stickerMessage: { fileSha256: "SIsreuEb2hDxsryMjQcvhqn2/Qv/LGRjeVwQrYNc2P4=", mimetype: "image/webp", height: 64, width: 64, fileLength: "200", isAnimated: false, jpegThumbnail: fs.readFileSync('./sticker/me.webp') } } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	  }
	  if (messagesC.includes('tes1')){
	  client.updatePresence(from, Presence.composing)
	  client.sendMessage(from, `Work...?\nPrefix : | ${prefix} |\nSpeed : ${process.uptime()}`,MessageType.text, { quoted: {key: { remoteJid: "6283815956151-1595133589@g.us", fromMe: false, id: "CB18513E4A9EEDAA6C69C16868DDF3A2" }, message: { stickerMessage: { url: "https://mmg.whatsapp.net/d/f/As_ppg1xCHnOlWF_AofwgHPNPaoCQhjWcv5E2kWJ2xl3.enc", fileSha256: "Vp4B9LSo3DnHo6HjCg41cOJF1vxVO69oY5nulocQJx8=", fileEncSha256: "QeYWBe1Rn0HLghbWaaq4EOwTWa+L7WU2QK1PR1XByCw=", mediaKey: "OZZBZzwxMQkNuMy8wbkEm2IhBcs5jj5tVxgvu/JI/wM=", mimetype: "image/webp", height: 64, width: 64, directPath: "/v/t62.15575-24/32394718_872366396886131_2628933900633519633_n.enc?oh=6f16dbb7b2531e88a0b01f38996a4b4a&oe=605E9FDA", fileLength: "9038", mediaKeyTimestamp: "1613867843", isAnimated: false, contextInfo: { stanzaId: "EB355BAADFCCC80786E2DB7BEEC70D4F", participant: "0@s.whatsapp.net", quotedMessage: { extendedTextMessage: { text: false, matchedText: false, description: false, title: false, previewType: "NONE", jpegThumbnail: fs.readFileSync('me.jpg')} } } } } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	  }
	  if (messagesC.includes('@6283815956151')){
	  client.updatePresence(from, Presence.composing)
	  const loli = fs.readFileSync('./mp3/naon.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Ada Apa Tag\nOwner Ku?","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('sholawat1')){
	  client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/maulaya.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fgclink, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('sholawat2')){
	  client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/sholawat2.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fgclink, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('sholawat3')){
	  client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/sholawat3.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fgclink, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('#nsfw')){
	  client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/insaf.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Astaghfirullah","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('manca')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/manca.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fdocs, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
	  if (messagesC.includes('gatelsa')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/gatelsa.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Sound Gabut","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/joget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('nikoni')){
	  client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/nikoni.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fvideo, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('totet')){
	  client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/totet.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fvideo, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('dering')){
	  client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/dering.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fvideo, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('lop')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/lop.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Sound Gabut","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/jget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('magic')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/magic.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Sound Gabut","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/joget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('jamet')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/jamet.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Sound Gabut","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/jget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('#menu')){
      if (!isRegistered) return
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/menu.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fgclink, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('#help')){
      if (!isRegistered) return
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/menu.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fvideo, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('nana')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/nana.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Sound Gabut","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/joget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('bam')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/bam.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Sound Gabut","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/jget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('malam')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/malam.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Selamat Malam","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('pagi')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/pagi.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Selamat Pagi","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('bangkit')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/bangkit.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Selamat Pagi","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('makasih')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/mksh.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Iyah Sama Dua:v","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('tqs')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/mksh.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Iyah Sama Dua:v","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('sayang')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/katanyatemen.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Sound Gabut","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/jget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('beb')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/katanyatemen.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Sound Gabut","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/joget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('cayang')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/katanyatemen.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: flokasi, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/jget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('berpalinghati')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/berpalinghati.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fgif, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('pam')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/pam.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: flokasi, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/jget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('berkali')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/berkali.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: flokasi, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/go.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('pembohong')){
	  client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/pembohong.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fvideo, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('pale')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/pale.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: flokasi, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/joget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('bermain')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/bermain musik.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: flokasi, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/yang.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('pala')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/pala.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Sound Gabut","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/joget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('pota')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/pota.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: flokasi, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/go.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('sensei')){
	  client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/sensei.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fvideo, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('baka')){
	  client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/baka.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fvideo, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('desah')){
	  client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/desah.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fvideo, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('roti')){
	  client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/sariroti.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: flokasi, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('tante')){
	  client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/tante.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: flokasi, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('kuntul')){
	  client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/kuntul.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fdocs, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('why')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/why.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fvideo, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/endak.webp')
      client.sendMessage(from, d, sticker, {quoted: flokasi})
      }
      if (messagesC.includes('you')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/why.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fvideo, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/endak.webp')
      client.sendMessage(from, d, sticker, {quoted: flokasi})
      }
      if (messagesC.includes('from')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/why.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fvideo, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/endak.webp')
      client.sendMessage(from, d, sticker, {quoted: flokasi})
      }
      
      if (budy.startsWith('>')){
      if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
      try {
      let evaled = await eval(budy.slice(2))
      if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
      await reply(evaled)
      } catch (err) {
      m = String(err)
      await reply(m)
      }
      }

             //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			switch(command) {
				case 'antibadword': 
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return client.sendMessage(from, 'on untuk menyalakan, off untuk mematikan',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                if (args[0] === 'on') {
                if (isBadWord) return client.sendMessage(from, '*Fitur BadWord sudah aktif sebelum nya*',MessageType.text, { quoted: flokasi, contextInfo: { forwardingScore: 508, isForwarded: true}})
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/kelompok/badword.json', JSON.stringify(badword))
                  	   client.sendMessage(from, 'Sukses aktifkan Antibadword',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
              	  } else if (args[0] === 'off') {
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/kelompok/badword.json', JSON.stringify(badword))
                 	    client.sendMessage(from, 'Sukses matikan Antibadword',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
             	   } else {
                 	   client.sendMessage(from, 'on untuk menyalakan, off untuk mematikan',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                	}
                    break
		case 'pinky':
		   if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
           await client.toggleDisappearingMessages(from)
           reply("yahaha")
           break
		case 'sewabot1':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const teksnya = `*[ BELI ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Bang Saya Mau Beli Scnya`
                      var options = {
                         text: teksnya,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    client.sendMessage('6283815956151@s.whatsapp.net', options, text, {quoted: mek})
                    client.sendMessage(from, 'Anda Telah Membeli Script!, tunggu owner script menchat anda!.\nUntuk Membatalkan Pesanan Ketik #batal1',MessageType.text, { quoted: fgclink, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    break
		case 'batal1':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const batal1 = `*[ BATAL ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Saya Tidak Menjadi Beli Scriptnya`
                      var options = {
                         text: batal1,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    client.sendMessage('6283815956151@s.whatsapp.net', options, text, {quoted: mek})
                    client.sendMessage(from, 'Anda Telah Membatalkan Pesanan!.',MessageType.text, { quoted: fdocs, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    break
                    case 'batal2':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const batal2 = `*[ BATAL ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Saya Tidak Menjadi Beli Scriptnya`
                      var options = {
                         text: batal2,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    client.sendMessage('6283815956151@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Anda Telah Membatalkan Pesanan!.')
                    break
                    case 'batal3':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const batal3 = `*[ BATAL ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Saya Tidak Menjadi Beli Scriptnya`
                      var options = {
                         text: batal3,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    client.sendMessage('6283815956151@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Anda Telah Membatalkan Pesanan!.')
                    break
                    case 'batal4':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const batal4 = `*[ BATAL ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Saya Tidak Menjadi Beli Scriptnya`
                      var options = {
                         text: batal4,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    client.sendMessage('6283815956151@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Anda Telah Membatalkan Pesanan!.')
                    break
		case 'sewabot2':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const teksnya2 = `*[ BELI ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Bang Saya Mau Beli Scnya`
                      var options = {
                         text: teksnya2,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    client.sendMessage('6283815956151@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Anda Telah Membeli Script!, tunggu owner script menchat anda!.\n Untuk Membatalkan Pesanan Ketik #batal2')
                    break
                    case 'sewabot3':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const teksnya4 = `*[ BELI ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Bang Saya Mau Beli Scnya`
                      var options = {
                         text: teksnya4,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    client.sendMessage('6283815956151@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Anda Telah Membeli Script!, tunggu owner script menchat anda!.\nUntuk Membatalkan Pesanan Ketik #batal3')
                    break
                    case 'sewabot4':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const teksnya3 = `*[ BELI ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Bang Saya Mau Beli Scnya`
                      var options = {
                         text: teksnya3,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    client.sendMessage('6283815956151@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Anda Telah Membeli Script!, tunggu owner script menchat anda!.\nUntuk Membatalkan Pesanan Ketik #batal4')
                    break
		case'daftarsewa':
sewa = fs.readFileSync('sewa.jpg')
ow = "6283815956151@s.whatsapp.net"
daftarnye = `
@----------DAFTAR SEWA----------@
CARA: KETIK 1 SAMPAI 4 UNTUK MEMILIH

+(1).NuyFaa
-tag: @${ow.split('@')[0]}

-NOTE
Pilih Salah Satu Diatas Untuk Membeli
Script Bot Langka!
Contoh:
${prefix}sewa1
----------------------------------------------------`
client.sendMessage(from, sewa, image, {quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow, ow2, ow3, ow4]}, displayname: mem, caption: daftarnye })
break
        case 'return':
                    if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					return client.sendMessage(from, JSON.stringify(eval(body.slice(8))), text, {quoted: mek})
					break
        case 'turn':
                if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				return client.sendMessage(from, JSON.stringify(eval(args.join(' '))), text, {quoted: mek})
				break
        case 'tomp3':
            if (!isQuotedVideo) return client.sendMessage(from, 'Reply videonya!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
            client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await client.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return client.sendMessage(from, 'Error!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
            buffer= fs.readFileSync(ran)
            client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: fgclink })
            fs.unlinkSync(ran)
            })
            break
        case 'swm':
	    case 'stickerwm':
					if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    if (type === 'imageMessage' || isQuotedImage){
                    var kls = body.slice(5)
                    var pack = kls.split('|')[0]
                    var author = kls.split('|')[1]
                    const getbuff = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    const dlfile = await client.downloadMediaMessage(getbuff)
                    const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
                    var mantap = await convertSticker(bas64, `${author}`, `${pack}`)
                    var imageBuffer = new Buffer.from(mantap, 'base64');
                    client.sendMessage(from, imageBuffer, MessageType.sticker, {quoted: fgif})
                    } else {
                    client.sendMessage(from, 'Format Salah!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    }
                    await limitAdd(sender)
                    break
		case 'chat':
				if (args.length < 1) return reply('Apa pesan nya?')
					var kntl = body.slice(6)
					var ajk = kntl.split("|")[0];
					var chatnya = kntl.split("|")[1];
					client.sendMessage(from, `${ajk}@s.whatsapp.net`, `Dari wa.me/${sender.replace('@s.whatsapp.net', '')}\nKatanya: ${chatnya}`)
					break
	       case 'join':
               if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
               setTimeout( () => {
               client.query({json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]})
               client.sendMessage(from, 'Success Gabung Group',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
               }, 20000) // 1000 = 1s,
               setTimeout( () => {
               client.sendMessage(from, 'Oke Owner 🤗',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
               }, 0) // 1000 = 1s,
               break
					case 'setlol':
					if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					LoLKey = args.join(" ")
					client.sendMessage(from, `LoLKey berhasil di ubah menjadi : ${LoLKey}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break 
					case 'settobz':
					if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					TobzKey = args.join(" ")
					client.sendMessage(from, `TobzKey berhasil di ubah menjadi : ${TobzKey}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break 
					case 'setxteam':
					if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					XteamKey = args.join(" ")
					client.sendMessage(from, `XteamKey berhasil di ubah menjadi : ${XteamKey}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break 
				    case 'setwmsticker':
					if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					ini_nama = args.join(" ").split("|")
					namo = ini_nama[0].trim()
					ator = ini_nama[1].trim()
					client.sendMessage(from, 'Namo Dan Ator berhasil di ubah',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break 
					case 'setfakereply':
					if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					fakereply = args.join(" ")
					client.sendMessage(from, `Fakereply berhasil di ubah menjadi : ${fakereply}`,MessageType.text, { quoted: flokasi, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break 
					case 'setfakereply1':
					if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					fakereply1 = args.join(" ")
					client.sendMessage(from, `Fakereply1 berhasil di ubah menjadi : ${fakereply1}`,MessageType.text, { quoted: fvideo, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break 
		case 'hetshot':
			if (!isGroup) return reply(ind.groupo())
			if (!isGroupAdmins) return reply(ind.admin())
			if (!isBotGroupAdmins) return reply(ind.badmin())
			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			client.groupRemove(from, mentioned)
			client.sendMessage(from, 'SUKSES',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
			break
		case 'setthumb':
		        if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await client.downloadMediaMessage(boij)
				fs.writeFileSync(`me.jpg`, delb)
				client.sendMessage(from, 'Sukses Beb😉',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
		case 'getpic':
		if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
            client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				if (mek.message.extendedTextMessage != undefined){
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await client.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await getBuffer(pic)
					client.sendMessage(from, thumb, MessageType.image)
				{quoted : mek2 }}
				await limitAdd(sender)
				break
		case 'upswtext':
					client.updatePresence(from, Presence.composing)
					client.sendMessage('status@broadcast', `${q}`, extendedText)
					client.sendMessage(from, `Sukses Up story wea teks ${q}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break
        case 'kontag':
                    if (!isGroup) return reply(ind.groupo())
		            if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return client.sendMessage(from, `cara : ${prefix + command} Saha|6283815956151`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    const pepek = body.slice(8)
                    const nuy = pepek.split('|')[0]
                    const fxsx = pepek.split('|')[1]
                    const vcard4 = 
                    'BEGIN:VCARD\n' +
                    'VERSION:3.0\n' +
                    'FN:' + nuy + '\n' +
                    'ORG:Cie Ke Tag:v\n' +
                    'TEL;type=CELL;type=VOICE;waid=' + fxsx + ':+' + fxsx + '\n' +
                    'END:VCARD'
                    var group = await client.groupMetadata(from)
					   var member = group['participants']
					   var mem = []
					   member.map(async adm => {
					   mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					   })
                    client.sendMessage(from, {displayname: nuy, vcard: vcard4}, MessageType.contact, {quoted: mek, contextInfo: {mentionedJid: mem}})
                    break
		case 'tagimg':
                    if (!isGroup) return reply(ind.groupo())
		            if (!isGroupAdmins) return reply(ind.admin())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await client.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        client.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag image yang sudah dikirim`)
                    }
                    break
                    case 'tagstick':
                    case 'stag':
                    if (!isGroup) return reply(ind.groupo())
		            if (!isGroupAdmins) return reply(ind.admin())
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await client.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        client.sendMessage(from, ini_buffer, sticker, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag sticker yang sudah dikirim`)
                    }
                    break
        case 'mctag':
        case 'nuytag':
        case 'totag':
            if (!isGroup) return reply(ind.groupo())
		    if (!isGroupAdmins) return reply(ind.admin())
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          client.sendMessage(from, `reply gambar/sticker/audio/video dengan caption ${prefix}mctag`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
        }
        break
		case 'profile':
    				client.updatePresence(from, Presence.composing)
    				try {
					profil = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					 profile = `╭─「 *_PROFILE* 」\n│• *Nama:* ${pushname}\n│• *User:* √\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰────────────────`
					buff = await getBuffer(profil)
					client.sendMessage(from, buff, image, {quoted: mek2, caption: profile})
					break
		case 'afk':
                    alasan = args.join(" ")
                    afk[sender.split('@')[0]] = alasan.toLowerCase()
                    fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
		try {
pp_user = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
pp_user = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
}
pp_nuy = await getBuffer(pp_user)
                    ini_txt = "Anda telah afk. "
                    if (alasan != "") {
                        ini_txt += "Dengan alasan " + alasan
                    }
                    client.sendMessage(from, pp_nuy, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"MANCA BOT","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: ini_txt })
                    break
		case 'xox':
		const exo = [
		'X : X : O',
		'O : X : O',
		'X : O : O',
		'O : X : X',
		'O : X : O',
		'X : O : O',
	        'X : X : O',
		'X : X : X',
		'O : O : O',
		]
            const boxo = exo[Math.floor(Math.random() * exo.length)]
	mancacuy = `[  🎰 | X O X ]\n-------------------------\n\n ${boxo}\n\n-------------------------\nKeterangan : Jika anda Mendapatkan Huruf X 3 Huruf Berarti Anda Menang\n*Contoh : X : X : X*`
            reply(mancacuy)
	            break
		case 'sewa': 
		case 'sewabot':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
		    ow = "6283815956151@s.whatsapp.net"
                    sewasu = `
*OPEN JASA SEWA BOT*

Sewa Seminggu : 10k
Sewa Sebulan : 35k

*Payment :*
_Indosat Dan Tsel_

Minat?PM Yg Dibawah
wa.me/6283815956151` 
try {
pp_user = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
pp_user = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
}
pp_nuy = await getBuffer(pp_user)
                    client.sendMessage(from, pp_nuy, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"MANCA BOT","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow]}, caption: sewasu })
					break
		case 'suit2':
		query = args.join(" ")
		const botol = ['Batu','Gunting','Kertas']
            const suitcuy = botol[Math.floor(Math.random() * botol.length)]
	brow = `
*BOT*
> ${suitcuy}
*KAMU*
> ${query}
`
            reply(brow)
	            break
				case 'shutdown':
                client.sendMessage(from, 'Oke Beb...',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                await sleep(5000)
		return client.sendMessage(from, JSON.stringify(eval(process.exit())), text, {quoted: mek})
				break
			case 'slot2':
		const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌'
		]
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
	yow = `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win\n\nContoh : 🍌 : 🍌 : 🍌<=====`
            reply(yow)
	            break
			case 'slot':
		      if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
		      if (isBanned) return reply(ind.baned())
			
                    result = await fetchJson(`https://api.xteam.xyz/game/virtualslot?APIKEY=${XteamKey}`)
                        txt = `*🎰Slot didapatkan🎰* \n\n${result.map}\n`
                        txt += `\n🔖Hasil : ${result.hasil}\n`
                        txt += `🕹️Score : ${result.score}\n`
                        reply(txt)
                        break
				case 'suit':
		if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
		        query = args.join(" ")
                    get_result = await fetchJson(`https://api.xteam.xyz/game/suit?q=${query}&APIKEY=${XteamKey}`)
                    bre = `
*[ BOT ]*
_> ${get_result.jawabanbot}_
*[ USER ]*
> ${get_result.jawabanmu}
*[ POIN ]*
_> ${get_result.poin}_
*[ HASIL ]*
_> ${get_result.hasil}_`
                    reply(bre, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break
				case 'addbadword': 
                    if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return client.sendMessage(from, `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/kelompok/bad.json', JSON.stringify(bad))
                    client.sendMessage(from, 'Success Menambahkan Bad Word!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break
                case 'delbadword': 
                    if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return client.sendMessage(from, `Kirim perintah ${prefix}delbadword [kata kasar]. contoh ${prefix}delbadword bego`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/kelompok/bad.json', JSON.stringify(bad))
                    client.sendMessage(from, 'Success Menghapus BAD WORD!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break 
                case 'listbadword': 
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
					case 'antidelete': 
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return client.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 6283815xxxxxxx* (banlist kontak)`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return client.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
						dataRevoke.push(from)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						client.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					} else if (!isGroup) {
						client.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return client.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
						dataCtRevoke.data = true
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						client.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					} else if (isGroup) {
						client.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return client.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					if (argz.length === 2 || argz[2].startsWith('0')) return client.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62838159xxxxx`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					client.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						client.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					} else if (!isGroup) {
						client.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						client.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					} else if (isGroup) {
						client.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
				}
				break
		case 'mutual':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				await limitAdd(sender)
				break
		case 'next':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				await limitAdd(sender)
				break
		case 'transfer':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (!q.includes('|')) return  reply(ind.wrongf())
                		const tujuan = q.substring(0, q.indexOf('|') - 1)
                		const jumblah = q.substring(q.lastIndexOf('|') + 1)
                		if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                		if (jumblah < 5000 ) return reply(`minimal transfer 5000`)
                		if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                		const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                		fee = 0.010 *  jumblah
                		hasiltf = jumblah - fee
                		addKoinUser(tujuantf, hasiltf)
                		confirmATM(sender, jumblah)
                		addKoinUser('6283815956151@s.whatsapp.net', fee)
                		client.sendMessage(from, `*「 SUKSES 」*\n\nPengiriman uang telah sukses\nDari : +${sender.split("@")[0]}\nKe : +${tujuan}\njJumlah transfer : ${jumblah}\nPajak : ${fee}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                		break
                case 'admin':
				if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				admm = body.slice(7)
				adm.push(`${admm}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/admin.json', JSON.stringify(adm))
				client.sendMessage(from, `Berhasil menambahkan admin bot wa.me/${admm}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
                case 'unadmin':
				if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				admm = body.slice(9)
				adm.push(`${admm}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/admin.json', JSON.stringify(adm))
				client.sendMessage(from, `Berhasil Mengunadmin bot wa.me/${admm}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
                case 'wakillist':
				client.updatePresence(from, Presence.composing) 
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})    
				teks = 'This is list of admin bot number :\n'
				for (let admm of adm) {
					teks += `~> @${admm.split('@')[0]}\n`
					}
					teks += `Total : ${admm.length}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: mek2, contextInfo: {"mentionedJid": adm}})
				break
                case 'premium':
				if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				premm = body.slice(9)
				prem.push(`${premm}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(prem))
				client.sendMessage(from, `Berhasil menjadi premium wa.me/${premm}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
		case 'unpremium':
				if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				premm = body.slice(11)
				prem.splice(`${premm}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(prem))
				reply(`Nomor sudah berakhir menjadi premium wa.me/${premm} `)
				client.sendMessage(from, `Nomor sudah berakhir menjadi premium wa.me/${premm}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
                case 'premiumlist':
				client.updatePresence(from, Presence.composing) 
				
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})    
				teks = 'This is list of premium number :\n'
				for (let premm of prem) {
					teks += `~> @${premm.split('@')[0]}\n`
					}
					teks += `Total : ${prem.length}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: mek2, contextInfo: {"mentionedJid": prem}})
				break
                case 'ban':
				if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				client.sendMessage(from, `Berhasil membanned nomor : wa.me/${bnnd} `,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
		case 'unban':
				if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				client.sendMessage(from, `Nomor wa.me/${bnnd} telah di unban!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
                case 'banlist':
				client.updatePresence(from, Presence.composing) 
				
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})    
				teks = 'This is list of banned number :\n'
				for (let benn of ban) {
					teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: mek2, contextInfo: {"mentionedJid": ban}})
				break

		case 'leaderboard':
		case 'lb':
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
				let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
				let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
				let nom = 0
				try {
				for (let i = 0; i < 10; i++) {
					nom++
					leaderboardlvl += `*[${nom}]* ${_level[i].id.replace('@s.whatsapp.net', '')}\n◪  *XP*: ${_level[i].xp}\n◪  *Level*: ${_level[i].level}\n`
					leaderboarduang += `*[${nom}]* ${uang[i].id.replace('@s.whatsapp.net', '')}\n◪  *Uang*: _Rp${uang[i].uang}_\n◪  *Limit*: ${limitawal - _limit[i].limit}\n`
				}
				await reply(leaderboardlvl)
				await reply(leaderboarduang)
				} catch (err) {
				console.error(err)
				await reply(`minimal 10 user untuk bisa mengakses database`)
				}
				break
		case 'dompet':
				
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
		case 'buylimit':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				payout = body.slice(10)
				const koinPerlimit = 2000
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : Admin\n*Penerima* : ${pushname}\n*Nominal pembelian* : ${payout} \n*Harga limit* : ${koinPerlimit}/limit\n*Sisa uang mu* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(20)}`)
				} 
				break
		case 'buypremiumlimit':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				payout = body.slice(17)
				const koinpremPerlimit = 500
				const totalprem = koinpremPerlimit * payout
				if ( checkATMuser(sender) <= totalprem) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= totalprem ) {
					confirmATM(sender, totalprem)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : NuyFaaツ\n*Penerima* : ${pushname}\n*Nominal pembelian* : ${payout} \n*Harga limit* : ${koinpremPerlimit}/limit\n*Sisa uang mu* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(20)}`)
				} 
				break
		case 'giftlimit': 
				
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                 if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				 const nomerr = args[0].replace('@','')
                		const jmla = args[1]
                		if (jmla <= 1) return reply(`minimal gift limit adalah 1`)
                		if (isNaN(jmla)) return reply(`limit harus berupa angka`)
                		if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @6283815956151 20`)
                		const cysz = nomerr + '@s.whatsapp.net'
                		var found = false
                        			Object.keys(_limit).forEach((i) => {
                            			if(_limit[i].id === cysz){
                                			found = i
                            			}
                        		})
                        	if (found !== false) {
                            	_limit[found].limit -= jmla
                            	const updated = _limit[found]
                            	const result = `Gift kuota limit sukses dengan NS: ${createSerial(20)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
							*「 GIFT KUOTA LIMIT 」*
							• User : @${updated.id.replace('@s.whatsapp.net','')}
							• Limit: ${limitawal-updated.limit}`
                            	console.log(_limit[found])
                            	fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit));
                            	reply(result)
                        	} else {
                                client.sendMessage(from, `Maaf, nomor ${nomerr} tidak terdaftar di database!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                        	}
               			break
				case 'asupan':
               client.updatePresence(from, Presence.composing)
               if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
               if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
               client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
               data = fs.readFileSync('./lib/asupan.js')
               jsonData = JSON.parse(data)
               randIndex = Math.floor(Math.random() * jsonData.length);
               randKey = jsonData[randIndex];
               asupan = await getBuffer(randKey.result)
               client.sendMessage(from, asupan, video, { mimetype: 'video/mp4', quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"SEKEDAR UNTUK GABUT","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, caption: 'Nih kak asupan nya' })
               await limitAdd(sender)
               break
				case 'asupansantuy':
				case 'asupanbocil':
				case 'asupanukhty':
				case 'asupanrikagusriani':
				case 'asupanghea':
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
               if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
               client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/asupan/${command}`)
				buffer = await getBuffer(anu.result.url)
				client.sendMessage(from, buffer, video, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"SEKEDAR UNTUK GABUT","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
				await limitAdd(sender)
				break
		 case 'limit':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				checkLimit(sender)
				break
		case 'setppbot':
					if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					client.sendMessage(from, 'Makasih profile barunya owner😉',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break
		case 'bcgc':
					if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args.length < 1) return client.sendMessage(from, 'Text Nya Mana Owner 🙄',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')}})
					anu = await groupMembers 
					tagss = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buffer, image, {quoted: {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: 'BCGC BY : OWNER', orderTitle: 'BCGC BY : OWNER', thumbnail: fs.readFileSync('me.jpg'), sellerJid: '0@s.whatsapp.net'} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64'), caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						client.sendMessage(from, 'Sukses broadcast group',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
					break
		case 'setreply':
					if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					client.sendMessage(from, `reply berhasil di ubah menjadi : ${cr}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					await limitAdd(sender)
					break
		case 'grouplist':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group MancaBot :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					client.sendMessage(from, teks.trim(), extendedText, {quoted: fgclink})
					break
		//daftar 
		case 'daftar':
                			if (isRegistered) return client.sendMessage(from, 'Kamu Sudah Terdaftar',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                			const serialUser = createSerial(20)
                		    try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
						    } catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							daftarimg = await getBuffer(ppimg)
                			    veri = sender
                			    if (isGroup) {
                    			addRegisteredUser(sender, time, serialUser)
                    			await client.sendMessage(from, daftarimg, image, {quoted: {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: `Sukses Daftar\n${tampilTanggal}`, orderTitle: `Sukses Daftar\n${tampilTanggal}`, thumbnail: fs.readFileSync('me.jpg'), sellerJid: '0@s.whatsapp.net'} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                			} else {
                    			addRegisteredUser(sender, time, serialUser)
                    			await client.sendMessage(from, daftarimg, image, {quoted: {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: `Sukses Daftar\n${tampilTanggal}`, orderTitle: `Sukses Daftar\n${tampilTanggal}`, thumbnail: fs.readFileSync('me.jpg'), sellerJid: '0@s.whatsapp.net'} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'))
                			}
				        break
		case 'mining':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (!isEventon) return reply(`Maaf ${pushname} event mining tidak di aktifkan oleh owner`)
					if (isOwner | isAdmin | isPremium) {
					const one = Math.ceil(Math.random() * 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
					addLevelingXp(sender, one)
					await reply(`Kamu bagian dari prabayar, aku akan berikan sebanyak *${one}Xp* untuk anda`)
                 					     }else{
					const mining = Math.ceil(Math.random() * 1000000000000000000000000)
					addLevelingXp(sender, mining)
					await reply(`*Selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
					}
					await limitAdd(sender)
					break
         case 'help': 
		case 'menu':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, 'Maaf kamu sudah terbenned!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
					const uangku = checkATMuser(sender)
					num = `${sender.split("@")[0]}@s.whatsapp.net`
                    menusu = `╭─「 *MANCA BOT* 」
❏ Selamat ${tampilHari}
❏ kak ${pushname}
╰──────────

╭─「 *USER INFO* 」
❏ Prefix: 「  ${prefix}  」
❏ Nama: ${pushname}
❏ Duit: *Rp.${uangku}.-*
❏ Tag: @${num.split('@')[0]}
❏ Level: ${getLevelingLevel(sender)}
❏ Xp: ${getLevelingXp(sender)}/${reqXp}
❏ User Register : ${_registered.length}
❏ Speed : ${process.uptime()}
❏ Group : ${pinky}
╰──────────

╭─「 *ABOUT MENU* 」
❏ *${prefix}info*
❏ *${prefix}snk*
❏ *${prefix}lpr*
❏ *${prefix}request*
❏ *${prefix}blocklist*
❏ *${prefix}join*
❏ *${prefix}ping*
❏ *${prefix}buypremium*
❏ *${prefix}hargaprem*
❏ *${prefix}bahasa*
❏ *${prefix}kodenegara*
❏ *${prefix}chatlist*
╰──────────

╭─「 *GROUP MENU* 」
❏ ${prefix}welcome [on/off]
❏ ${prefix}nsfw [on/off]
❏ ${prefix}antilink [on/off]
❏ ${prefix}antibadword [on/off]
❏ ${prefix}antivirtex [on/off]
❏ ${prefix}promote [@tag]
❏ ${prefix}demote [@tag]
❏ ${prefix}tagall
❏ ${prefix}listadmin
❏ ${prefix}wakillist
❏ ${prefix}premiumlist
❏ ${prefix}banlist
❏ ${prefix}blocklist
❏ ${prefix}linkgc
❏ ${prefix}infogc
❏ ${prefix}stag
❏ ${prefix}mctag
❏ ${prefix}mining
❏ ${prefix}hidetag
❏ ${prefix}grouplist
❏ ${prefix}add [62]
❏ ${prefix}kick [@tag]
❏ ${prefix}setname
❏ ${prefix}setdesc
❏ ${prefix}setpp
❏ ${prefix}listadmin
❏ ${prefix}antidelete [aktif/mati]
❏ ${prefix}mining
❏ ${prefix}level
❏ ${prefix}grup [buka/tutup)
❏ ${prefix}bukatime
❏ ${prefix}tutuptime
╰──────────

╭─「 *OWNER MENU* 」
❏ ${prefix}bc
❏ ${prefix}addbadword
❏ ${prefix}delbadword
❏ ${prefix}bcgc
❏ ${prefix}kickall
❏ ${prefix}setreply
❏ ${prefix}setprefix
❏ ${prefix}setpinky
❏ ${prefix}setthumb
❏ ${prefix}setlol
❏ ${prefix}settobz
❏ ${prefix}setxteam
❏ ${prefix}setwmsticker
❏ ${prefix}setfakereply
❏ ${prefix}setfakereply1
❏ ${prefix}clearall
❏ ${prefix}block
❏ ${prefix}unblock
❏ ${prefix}outmanca
❏ ${prefix}event [1/0]
❏ ${prefix}clone
❏ ${prefix}setppbot
❏ ${prefix}leveling [on/off]
❏ ${prefix}simih [on/off] 
╰──────────

╭─「 *MAKER MENU* 」
❏ ${prefix}sticker
❏ ${prefix}swm
╰──────────

╭─「 *FUN MENU* 」
❏ ${prefix}slot
❏ ${prefix}slot2
❏ ${prefix}suit
❏ ${prefix}suit2
❏ ${prefix}shutdown
❏ ${prefix}upswvideo
❏ ${prefix}upswimg
╰──────────

╭─「 *RANDOM MENU* 」
❏ ${prefix}asupan
❏ ${prefix}asupansantuy
❏ ${prefix}asupanbocil
❏ ${prefix}asupanukhty
❏ ${prefix}asupanrikagusriani
❏ ${prefix}asupanghea
╰──────────

╭─「 *LIMIT MENU* 」
❏ ${prefix}limit
❏ ${prefix}buylimit
❏ ${prefix}buypremiumlimit
❏ ${prefix}transfer
❏ ${prefix}leaderboard
╰──────────
 
╭─「 *TOOLS MENU* 」
❏ ${prefix}ocr
❏ ${prefix}tts
╰──────────

╭─「 *STORAGE MENU* 」
❏ ${prefix}addstic
❏ ${prefix}slist
❏ ${prefix}gets
❏ ${prefix}addvn
❏ ${prefix}vnlist
❏ ${prefix}addimg
❏ ${prefix}imglist
❏ ${prefix}gimg
❏ ${prefix}addvid
❏ ${prefix}vidlist
❏ ${prefix}getvid
╰──────────

╭─「 *SOUND GABUT* 」
❏ sholawat1
❏ sholawat2
❏ sholawat3
❏ gatelsa
❏ lop
❏ magic
❏ jamet
❏ nana
❏ bam
❏ bangkit
❏ sayang
❏ berpalinghati
❏ pam
❏ bermain
❏ berkali
❏ pale
❏ pala
❏ sensei
❏ roti
❏ tante
❏ kuntul
❏ baka
❏ totet
❏ dering
╰──────────

╭─「 *Thanks Too* 」
❏ FxSx
❏ Ardan
❏ FdlX
❏ NuyFaa
╰──────────` 
buffer = await getBuffer('https://raw.githubusercontent.com/alonecans/foto-manca/main/me.jpg')
                    client.sendMessage(from, buffer, image, {quoted: {key: { fromMe: false,remoteJid: "0@s.whatsapp.net", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 1, status: 180, thumbnail: buffer, surface: 180, message: Selamat ${tampilHari}\nkak ${pushname}, orderTitle: Selamat ${tampilHari}\nkak ${pushname}, sellerJid: '0@s.whatsapp.net'} } }, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [num]}, displayname: mem, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64'), caption: menusu })
					break
                  case 'addstic':
                case 'adds':
				    if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (!isQuotedSticker) return client.sendMessage(from, 'Reply stiker nya',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					svst = body.slice(12)
					if (!svst) return client.sendMessage(from, 'Nama sticker nya apa?',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./storage/sticker/${svst}.webp`, delb)
					fs.writeFileSync(`./storage/stik.json`, JSON.stringify(setiker))
					client.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}slist`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break
               case 'slist':
				case 'lists':
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setiker) {
					teks += `❏ ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*\n*Ketik : ${prefix}gets [nama sticker nya]*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true, contextInfo: { "mentionedJid": setiker } }})
					break
              case 'gs':
				case 'gets':
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					namastc = body.slice(12)
					result = fs.readFileSync(`./storage/sticker/${namastc}.webp`)
					client.sendMessage(from, result, sticker, {quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break
              case 'addvn':
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (!isQuotedAudio) return client.sendMessage(from, 'Reply Audio Nya',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					svst = body.slice(7)
					if (!svst) return client.sendMessage(from, 'Nama audionya?',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./storage/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./storage/audio.json', JSON.stringify(audionye))
					client.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}vnlist`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break
              case 'vnlist':
				case 'listvn':
				if (!isRegistered) return reply( ind.noregis())
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `❏ ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*\nKetik : ${prefix}getvn [nama vn nya]`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
             case 'getvn':
             case 'gvn':
             if (!isRegistered) return reply( ind.noregis())
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./storage/audio/${namastc}.mp3`)
					client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					break
             case 'addimg':
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedImage) return reply('Reply imagenya!')
					svst = body.slice(10)
					if (!svst) return reply('Nama imagenya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./storage/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./storage/image.json', JSON.stringify(imagenye))
					client.sendMessage(from, `Sukses Menambahkan Image\nCek dengan cara ${prefix}imglist`, MessageType.text, { quoted: mek2 })
					break
            case 'imglist':
				case 'listimg':
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					teks = '*List Image :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `❏ ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*\n*Ketik : ${prefix}getimg [nama image nya]*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true, contextInfo: { "mentionedJid": imagenye } }})
					break
            case 'gimg':
            case 'getimg':
            if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./storage/image/${namastc}.jpeg`)
					client.sendMessage(from, buffer, image, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true, caption: `Result From Database : ${namastc}.jpeg` }})
					break
            case 'addvid':
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (!isQuotedVideo) return client.sendMessage(from, 'Reply videonya!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					svst = body.slice(10)
					if (!svst) return client.sendMessage(from, 'Nama videonya apa?',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./storage/video/${svst}.mp4`, delb)
					fs.writeFileSync('./storage/video.json', JSON.stringify(videonye))
					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}vidlist`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break
             case 'vidlist':
				case 'listvid':
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `❏ ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*\n*Ketik : ${prefix}getvid [nama video nya]*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true, contextInfo: { "mentionedJid": videonye } }})
					break
             case 'getvid':
             case 'gvid':
                    if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./storage/video/${namastc}.mp4`)
					client.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true }})
					break
		case 'donasi':
		case 'donate':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.sendMessage(from, donasi(), MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')}})
					break
		case 'menupicture':
		case 'menupict':
		case 'pictmenu':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				buffer = await getBuffer('https://raw.githubusercontent.com/alonecans/foto-manca/main/me.jpg')
					client.sendMessage(from, buffer, image, { quoted: mek2, caption: randompict(prefix)})
					break
		case 'menuowner':
		case 'ownermenu':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					buffer = await getBuffer('https://raw.githubusercontent.com/alonecans/foto-manca/main/me.jpg')
					client.sendMessage(from, buffer, image, { quoted: mek2, caption: developer(prefix)})
					break
		case 'bahasa':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.sendMessage(from, bahasa(), MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					await limitAdd(sender)
					break
		case 'kodenegara':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.sendMessage(from, negara(), MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					await limitAdd(sender)
					break
		case 'del':
		case 'd':
		case 'delete':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					await limitAdd(sender)
					break
		case 'level':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (!isLevelingOn) return reply(ind.lvlnoon())
					if (!isGroup) return reply(ind.groupo())
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
					const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
					resul = `◪ *LEVEL*\n  ├─ ❏ *Name* : ${pushname}\n  ├─ ❏ *Nomor* : ${sender.split("@")[0]}\n  ├─ ❏ *User XP* : ${userXp}/${requiredXp}\n  └─ ❏ *User Level* : ${userLevel}\n`
					client.sendMessage(from, resul, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					.catch(async (err) => {
					console.error(err)
					await reply(`Error!\n${err}`)
					})
					break
		case 'say':
                                        teks = body.slice(5)
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                                        if (args.length < 1) return client.sendMessage(from, 'Teksnya mana kak?',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                                        saying = teks
                                        client.sendMessage(from, saying, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					await limitAdd(sender)
                                        break
		case 'info':
					me = client.user
					ow = "6283815956151@s.whatsapp.net"
					uptime = process.uptime()
					teks = `➽ *Name Bot* : Manca\n➽ *Owner* : @${ow.split('@')[0]}\n➽ *Prefix* : | ${prefix} |\n➽ *Total Block* : ${blocked.length}\n➽ *Bot Aktif* : ${kyun(uptime)}\n➽\n➽ *ɢʀᴜᴘ* : coming soon\n➽ *ꜱᴘᴇᴄɪᴀʟ ᴛʜᴀɴᴋꜱ ᴛᴏ* :\n➽ FxSx\n➽ FdlXploit`
					const daca = fs.readFileSync('me.jpg');
				    client.sendMessage(from, daca, image, {quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow]}, caption: teks})
					break 
		case 'snk':
					me = client.user
					uptime = process.uptime()
					teks = `*Syarat & Ketentuan*\n1. Teks dan nama pengguna WhatsApp anda kami simpan di dalam server selama bot aktif.\n2. Data anda akan di hapus ketika bot offline.\n3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim.\n4. Kami tidak pernah meminta anda untuk memberikan informasi pribadi.\n5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot.\n6. Cukup perintah 1x jika bot tidak merespon harap ulangi kembali, Jika di ulangi kembali tidak merespon, Bot tidak aktif\n7. Dilarang spam, Share virus virtex, Telpon, Video call, Kami akan blockir anda.\n8. Apapun yang anda perintah pada bot ini, *KAMI TIDAK BERTANGGUNG JAWAB!*\n\nTERIMA KASIH !~`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
		case 'lpr':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                if (args.length < 1) return reply(`Yang mau direport apaan?`)
                     const pesan = body.slice(5)
                      if (pesan.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek2})
                        var nomor = mek.participant
                       const tekst1 = `*[LAPOR]*\nNomor : wa.me/${sender.split("@")[0]}\nPesan : ${pesan}`
                      var options = {
                         text: tekst1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage('6283815956151@s.whatsapp.net', options, text, {quoted: mek})
                    client.sendMessage(from, 'Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break
		case 'request':
					const cfrr = body.slice(8)
					if (cfrr.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomor = mek.participant
					const ress = `*[REQUEST VITUR]*\nNomor : wa.me/${sender.split("@")[0]}\nPesan : ${cfrr}`
							var options = {
							text: ress,
                         				contextInfo: {mentionedJid: [nomor]},
                     			}
					client.sendMessage('6283815956151@s.whatsapp.net', options, text, {quoted: mek})
					client.sendMessage(from, 'REQUEST ANDA TELAH SAMPAI KE OWNER MANCA, Requests palsu atau main² tidak akan ditanggapi!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break
		case 'blocklist': 
					teks = '*This is list of blocked number* :\n'
					for (let block of blocked) {
						teks += `*~>* @${block.split('@')[0]}\n`
					}
					teks += `*Total* : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek2, contextInfo: {"mentionedJid": blocked}})
					break
                case 'hidetag':
					// NuyFaa
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, MessageType.text, {quoted: ftroli, sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, thumbnail: fs.readFileSync('./src/me.jpg', 'base64')})
					await limitAdd(sender)
					break

                case 'afk':
				
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                                tels = body.slice(4)
                                if (args.length < 1) return reply('Kakak afk karena apa?')
                                var ain = mek.participant
                                const tagzz = {
                                                text: `@${tagzz.split("@s.whatsapp.net")[0]} *SEDANG AFK ${tels} JANGAN GANGGU YA*`,
                                                contextInfo: { mentionedJid: [ain] }
                                        }
                                        client.sendMessage(from, tagzz, MessageType.text, {quoted: mek2})
					await limitAdd(sender)
                                        break
                                        case 'profile':

    				client.updatePresence(from, Presence.composing)

				
    				try {

					ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)

					} catch {

					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'

					}

					 profile = `╭─「 *PROFILE ANDA* 」\n│• *Name:* ${pushname}\n│• *XP:* ${getLevelingXp(sender)}\n│• *Level:* ${getLevelingLevel(sender)}\n│• *User Terdaftar:* ✓\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰──────────────────`

					buffer = await getBuffer(ppimg)

					client.sendMessage(from, buffer, image, {quoted: mek2, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64'), caption: profile})

					break
					case 'sticker':
					case 'stiker':
					case 'stick':
					case 's':
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ftroli, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}})
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(` Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ftroli, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					}
					break
                    case 'ambil':
					case 'colong':
					if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
									client.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: fgif })
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								client.sendMessage(from, `Gagal, pada saat mengkonversi ${tipe} ke stiker`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
									client.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: fgif })
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedSticker) && args[0] == 'nobg') {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return client.sendMessage(from, 'Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ranw} -o ${ranw}`, async (error) => {
									client.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: fgif })
									fs.unlinkSync(ranw)
								})
							})
						})
					} else {
						client.sendMessage(from, `reply sticker dengan caption ${prefix}colong`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
					break
		case 'ocr': 
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply(`*Kirim foto dengan caption ${prefix}ocr*`)
					}
					await limitAdd(sender)
					break
		case 'gtts':
		case 'tts':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return client.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('Textnya kebanyakan!! 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							client.sendMessage(from, buffer, audio, {quoted: mek2, ptt:true})
							fs.unlinkSync(rano)
						})
					}) 
					await limitAdd(sender)
					break
		case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					prefix = args[0]
					client.sendMessage(from, `*Prefix berhasil di ubah menjadi* : ${prefix}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break 
		case 'setpinky':
					if (args.length < 1) return
					if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					pinky = args.join(" ")
					client.sendMessage(from, `*Link Menu Bot berhasil di ubah menjadi* : ${pinky}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break 
		case 'setlimit':
		case 'addlimit':
					if (args.length < 1) return
					if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					limitawal = args[0]
					client.sendMessage(from, `*Limit berhasil di ubah menjadi* : ${limitawal}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break
		case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					client.sendMessage(from, `Change Member limit To ${memberlimit} SUCCESS!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break
                 case 'linkgc':
				if (!isGroup) return reply(ind.groupo())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				linkgc = await client.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				client.sendMessage(from, yeh, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				await limitAdd(sender)
				break
		case 'hargaprem':
		case 'hargapremium':
					client.sendMessage(from, 'Level 100 = Free 3 day (premium)\n10k = 30day (premium)',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break
		case 'buypremium':
					client.sendMessage(from, 'Ingin membeli premium?\nHarap hubungi kami : wa.me/6283815956151',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break
		case 'tagall2':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					query = args.join(" ")
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `├ ❏ *@${mem.jid.split('@')[0]}*\n`
						members_id.push(mem.jid)
					}
					mentions(`┌───「MANCA TAG」───\n│•Dari: ${pushname}\n│•Pesan: *${query}*\n├──────────────`+ teks +'└───「 *NUYFAA* 」────', members_id, true)
					break
					case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					query = args.join(" ")
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `├ ❏ *@${mem.jid.split('@')[0]}*\n`
						members_id.push(mem.jid)
					}
					mentions(`┌───「MANCA TAG」───`+ teks +'└───「 *FXSX* 」────', members_id, true)
					break
		case 'clearall':
					if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
		case 'block':
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.blockUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break
		case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break
        case 'chatlist':
		         	case 'cekchat':
		  	    	client.updatePresence(from, Presence.composing)
			    	var itsme = `${numbernye}`
			    	var split = `ALL CHAT MANCA`
		     		var selepbot =         {
					contextInfo:   {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
	     			}
     				}
	    			}
			      	}
			     	teks = `Total : ${totalchat.length}`
			    	client.sendMessage(from, teks, MessageType.text, selepbot)
		    		break
		case 'leave':
		case 'outmanca':
			if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')}) 
                      setTimeout( () => {
                      client.groupLeave (from) 
                      }, 2000)
                      setTimeout( () => {
                      client.updatePresence(from, Presence.composing) 
                      client.sendMessage(from, 'Sukses Owner😉',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                      }, 0)
                      break			
		case 'bc': 
					if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')}) 
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {quoted: {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: 'BC BY : OWNER', orderTitle: 'BC BY : OWNER', thumbnail: fs.readFileSync('me.jpg'), sellerJid: '0@s.whatsapp.net'} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64'), caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
						}
						client.sendMessage(from, '*Suksess broadcast*',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC BY OWNER 」*\n\n${body.slice(4)}`)
						}
						client.sendMessage(from, '*Suksess broadcast*',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					}
					break
		case 'setpp': 
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
                   			if (!isBotGroupAdmins) return reply(ind.badmin())
					media = await client.downloadAndSaveMediaMessage(mek)
					await client.updateProfilePicture (from, media)
					client.sendMessage(from, '*Sukses mengganti icon group*',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break				
		case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return client.sendMessage(from, 'Yang mau di add tuyul ya?',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args[0].startsWith('08')) return client.sendMessage(from, 'Gunakan kode negara kak',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
		case 'grup':
		case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    client.sendMessage(from, '*BERHASIL MEMBUKA GROUP*',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						client.sendMessage(from, '*BERHASIL MENUTUP GROUP*',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break      
		case 'tutuptime': 
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
              client.updatePresence(from, Presence.composing) 
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `*Tepat Waktu* Grup Di Tutup Oleh Admin @${nomor.split("@s.whatsapp.net")[0]}\nSekarang *Admin* Yg Bisa Kirim Chat!`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
				break
				case 'bukatime': 
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
              client.updatePresence(from, Presence.composing) 
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const open = {
					text: `*Tepat Waktu* Grup Di Buka Oleh Admin @${nomor.split("@s.whatsapp.net")[0]}\nSekarang *Member* Bisa Kirim Chat!`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, false);
					reply(open)
				}, timer)
				break
		 case 'infogc':
				case 'groupinfo':
				case 'infogrup':
				case 'grupinfo':
		    	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n❏ ${pushname}\n❏ Daftar Dulu Kak Dengan Cara\n❏ ${prefix}pinkybot\n╰──────────`,MessageType.text, { quoted: {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: Hai ${pushmane}\nDaftar Dulu, orderTitle: Hai ${pushmane}\nDaftar Dulu, thumbnail: fs.readFileSync('me.jpg'), sellerJid: `0@s.whatsapp.net`} } }, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                if (!isGroup) return client.sendMessage(from, 'Only Group',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                client.updatePresence(from, Presence.composing)
                try {
					ppUrl = await client.getProfilePicture(from)
					} catch {
					ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
			    buffer = await getBuffer(ppUrl)
		        client.sendMessage(from, buffer, image, {quoted: mek2, caption: `*NAME* : ${groupName}\n*MEMBER* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESK* : ${groupDesc}`})
                break
            case 'admin':
            case 'owner':
            case 'creator':
            case 'developer':
                  client.sendMessage(from, {displayname: "Nuy", vcard: vcard}, MessageType.contact, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: {"contactMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": fakereply, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./me.jpg')}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
                  client.sendMessage(from, 'Tuh Kontak Owner Manca, Jangan Spam Vc dll Chat Ga Pph Asal Jangan Jorok!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break    
           case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return client.sendMessage(from, 'BOT JADIIN ADMIN DULU',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 Y𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						client.groupRemove(from, mentioned)
						}
					break
		case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return client.sendMessage(from, 'BOT JADIIN ADMIN DULU',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Status adminmu dicopot. Makanya jan jadi beban🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`MAAF @${mentioned[0].split('@')[0]} Jabatan adminmu di copt, Makanya jan jadi beban🏃`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return client.sendMessage(from, 'BOT JADIIN ADMIN DULU',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮?? 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Selamat🥳 anda naik menjadi admin grub (>_<) :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`selamat🥳 @${mentioned[0].split('@')[0]} anda naik menjadi admin grub (>_<)`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break	
					case 'grup':
					case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return client.sendMessage(from, 'BOT JADIIN ADMIN DULU',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args[0] === 'buka') {
					    client.sendMessage(from, '*BERHASIL MEMBUKA GROUP*',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						client.sendMessage(from, '*BERHASIL MENUTUP GROUP*',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break       
           	case 'setname':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return client.sendMessage(from, 'BOT JADIIN ADMIN DULU',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Succes, Ganti Nama Grup',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return client.sendMessage(from, 'BOT JADIIN ADMIN DULU',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Succes, Ganti Deskripsi Grup',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break
		case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					case 'upswvideo':
					client.updatePresence(from, Presence.composing)
					if (isQuotedVideo) {
						const swew = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						sweb = await client.downloadMediaMessage(swew)
						client.sendMessage('status@broadcast', sweb, video, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Video dengan Caption: ${q}`
					client.sendMessage(from, bur, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break
      case 'upswimg':
					client.updatePresence(from, Presence.composing)
					if (isQuotedImage) {
						const swew = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						sweb = await client.downloadMediaMessage(swew)
						client.sendMessage('status@broadcast', sweb, image, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Image dengan Caption: ${q}`
					client.sendMessage(from, bur, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break
		case 'simih':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args.length < 1) return client.sendMessage(from, 'Mengaktifkan Ketik 1, Menonaktif Ketik 0',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args[0] === 'on') {
						if (isSimi) return client.sendMessage(from, '*Fitur simi sudah aktif sebelum nya*',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						client.sendMessage(from, '❬ SUCCSESS ❭ mengaktifkan mode simi di group ini ✔',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					} else if (args[0] === 'off') {
						samih.splice(from, 1)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						client.sendMessage(from, '❬ SUCCSESS ❭ menonaktifkan mode simi di group ini ✔',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					} else {
						client.sendMessage(from, 'on untuk menyalakan, off untuk mematikan',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
					break
		case 'nsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return client.sendMessage(from, 'Mengaktifkan Ketik 1, Menonaktif Ketik 0',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args[0] === 'on') {
						if (isNsfw) return client.sendMessage(from, '*Fitur nsfw sudah aktif sebelum nya*',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						client.sendMessage(from, '❬ SUCCSESS ❭ mengaktifkan mode nsfw di group ini ✔',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					} else if (args[0] === 'off') {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						client.sendMessage(from, '❬ SUCCSESS ❭ menonaktifkan mode nsfw di group ini ✔',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					} else {
						client.sendMessage(from, 'on untuk menyalakan, off untuk mematikan',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
					break
		case 'leveling':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args.length < 1) return client.sendMessage(from, 'Mengaktifkan Ketik On, Menonaktif Ketik Off',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args[0] === 'on') {
					if (isLevelingOn) return client.sendMessage(from, '*Fitur level sudah aktif sebelum nya*',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					_leveling.push(from)
					fs.writeFileSync('./database/kelompok/leveling.json', JSON.stringify(_leveling))
					reply(ind.lvlon())
					} else if (args[0] === 'off') {
					_leveling.splice(from, 1)
						fs.writeFileSync('./database/kelompok/leveling.json', JSON.stringify(_leveling))
						reply(ind.lvloff())
					} else {
						client.sendMessage(from, 'on untuk menyalakan, off untuk mematikan',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
					break
		case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return client.sendMessage(from, 'Mengaktifkan Ketik On, Menonaktif Ketik Off',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args[0] === 'on') {
						if (isWelkom) return client.sendMessage(from, '*Fitur welcome sudah aktif sebelum nya',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						client.sendMessage(from, '❬ SUCCSESS ❭ mengaktifkan fitur welcome di group ini',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					} else if (args[0] === 'off') {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						client.sendMessage(from, '❬ SUCCSESS ❭ menonaktifkan fitur welcome di group ini',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					} else {
						client.sendMessage(from, 'on untuk menyalakan, off untuk mematikan',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
					break
                 case 'antilink':
                    if (!isGroup) return reply('ONLY GRUP')
					if (!isGroupAdmins) return reply('ONLY ADMIN')
					if (!isBotGroupAdmins) return client.sendMessage(from, 'BOT JADIIN ADMIN DULU',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args.length < 1) return client.sendMessage(from, 'Mengaktifkan Ketik On, Menonaktif Ketik Off',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args[0] === 'on') {
						if (isAntilink) return client.sendMessage(from, 'Anti link group sudah aktif',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
						antilink.push(from)
						fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
						client.sendMessage(from, '❬ SUCCSESS ❭ mengaktifkan anti link group di group ini ✔',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
						client.sendMessage(from, 'Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					} else if (args[0] === 'off') {
						if (!isAntilink) return reply('Mode anti link group sudah mati')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
						client.sendMessage(from, '❬ SUCCSESS ❭ menonaktifkan anti link group di group ini ✔',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					} else {
						client.sendMessage(from, 'Mengaktifkan Ketik On, Menonaktif Ketik Off',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					}
					break
                 case 'antivirtex':
                    if (!isGroup) return reply('ONLY GRUP')
					if (!isGroupAdmins) return reply('ONLY ADMIN')
					if (!isBotGroupAdmins) return client.sendMessage(from, 'BOT JADIIN ADMIN DULU',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args.length < 1) return client.sendMessage(from, 'Mengaktifkan Ketik On, Menonaktif Ketik Off',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args[0] === 'on') {
						if (isAntivirtex) return client.sendMessage(from, 'Anti Virtex group sudah aktif',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
						antivirtex.push(from)
						fs.writeFileSync('./database/pinky/antivirtex.json', JSON.stringify(antivirtex))
						client.sendMessage(from, '❬ SUCCSESS ❭ mengaktifkan anti virtex group di group ini ✔',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					} else if (args[0] === 'off') {
						if (!isAntivirtex) return client.sendMessage(from, 'Mode anti virtex group sudah mati',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
						antivirtex.splice(from, 1)
						fs.writeFileSync('./database/pinky/antivirtex.json', JSON.stringify(antivirtex))
						client.sendMessage(from, '❬ SUCCSESS ❭ menonaktifkan anti virtex group di group ini ✔',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					} else {
						client.sendMessage(from, 'Mengaktifkan Ketik On, Menonaktif Ketik Off',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					}
					break
                 case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return client.sendMessage(from, '「 OWNER BOT ONLY 」',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args.length < 1) return client.sendMessage(from, 'Mengaktifkan Ketik On, Menonaktif Ketik Off',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args[0] === 'on') {
						if (isEventon) return client.sendMessage(from, '*Fitur event sudah aktif sebelum nya*',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						client.sendMessage(from, '❬ SUCCSESS ❭ mengaktifkan fitur event di group ini',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					} else if (args[0] === 'off') {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						client.sendMessage(from, '❬ SUCCSESS ❭ menonaktifkan fitur event di group ini',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					} else {
						client.sendMessage(from, 'on untuk menyalakan, off untuk mematikan',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
					break
		case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return client.sendMessage(from, '*TAG YANG MAU DI CLONE!!!*',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return client.sendMessage(from, '❬ SUCCSESS ❭',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender)
					break
				case 'wait':
					
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek2, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(ind.ocron())
					}
					await limitAdd(sender)
					break
				default:
	        if (body.startsWith(`${prefix}${command}`)) {
            const loli = fs.readFileSync('./mp3/tidakada.mp3')
            client.sendMessage(from, loli, MessageType.audio, {quoted: fdocs, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
            }
            if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
