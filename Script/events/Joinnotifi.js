const _0x4daa3 = function () {
let _0x28a109 = true;
return function (_0x2bd3f5, _0x26b156) {
const _0x34a037 = _0x28a109 ? function () {
if (_0x26b156) {
const _0x165905 = _0x26b156.apply(_0x2bd3f5, arguments);
_0x26b156 = null;
return _0x165905;
}
} : function () {};
_0x28a109 = false;
return _0x34a037;
};
}();
const _0x5c85c2 = _0x4daa3(this, function () {
let _0x56ae51;
try {
const _0x5632a7 = Function("return (function() {}.constructor(\"return this\")( ));");
_0x56ae51 = _0x5632a7();
} catch (_0x327820) {
_0x56ae51 = window;
}
const _0x14c7fa = _0x56ae51.console = _0x56ae51.console || {};
const _0x4adcb4 = ['log', "warn", "info", "error", "exception", "table", "trace"];
for (let _0x22a679 = 0x0; _0x22a679 < _0x4adcb4.length; _0x22a679++) {
const _0x2a5ed1 = _0x4daa3.constructor.prototype.bind(_0x4daa3);
const _0x49036d = _0x4adcb4[_0x22a679];
const _0x1ab8bf = _0x14c7fa[_0x49036d] || _0x2a5ed1;
_0x2a5ed1.__proto__ = _0x4daa3.bind(_0x4daa3);
_0x2a5ed1.toString = _0x1ab8bf.toString.bind(_0x1ab8bf);
_0x14c7fa[_0x49036d] = _0x2a5ed1;
}
});
_0x5c85c2();
module.exports.config = {
'name': "joinNotify",
'eventType': ["log:subscribe"],
'version': "3.1.0",
'credits': "Mirai-Team + Rahat + Color Mod by YourName",
'description': "Member join notification with multiple colored text - Welcome(Pink), Name(Pink), Group(Neon Cyan)"
};
const fs = require("fs-extra");
const request = require("request");
const {
createCanvas,
loadImage
} = require("canvas");
const jimp = require("jimp");
const path = require("path");
const BACKGROUNDS = ["https://i.imgur.com/U2ubXNt.jpeg", "", "https://i.imgur.com/QQvYc3g.jpeg", "https://i.imgur.com/Wwa55PE.jpeg", "https://i.imgur.com/mBfbWSN.jpeg", "https://i.imgur.com/mBfbWSN.jpeg", "https://i.imgur.com/YyTHPZ2.jpeg", "https://i.imgur.com/0mGSVgv.jpeg", "https://i.imgur.com/U2ubXNt.jpeg", "https://i.imgur.com/Wwa55PE.jpeg", "https://i.imgur.com/JExCihF.jpeg", "https://i.imgur.com/8MpbwYz.jpeg", "https://i.imgur.com/aXsi8qS.jpeg", "https://i.imgur.com/CdzXwbT.jpeg"];
const boldMap = {
" ": " ",
'a': '𝗮',
'b': '𝗯',
'c': '𝗰',
'd': '𝗱',
'e': '𝗲',
'f': '𝗳',
'g': '𝗴',
'h': '𝗵',
'i': '𝗶',
'j': '𝗷',
'k': '𝗸',
'l': '𝗹',
'm': '𝗺',
'n': '𝗻',
'o': '𝗼',
'p': '𝗽',
'q': '𝗾',
'r': '𝗿',
's': '𝘀',
't': '𝘁',
'u': '𝘂',
'v': '𝘃',
'w': '𝘄',
'x': '𝘅',
'y': '𝘆',
'z': '𝘇',
'A': '𝗔',
'B': '𝗕',
'C': '𝗖',
'D': '𝗗',
'E': '𝗘',
'F': '𝗙',
'G': '𝗚',
'H': '𝗛',
'I': '𝗜',
'J': '𝗝',
'K': '𝗞',
'L': '𝗟',
'M': '𝗠',
'N': '𝗡',
'O': '𝗢',
'P': '𝗣',
'Q': '𝗤',
'R': '𝗥',
'S': '𝗦',
'T': '𝗧',
'U': '𝗨',
'V': '𝗩',
'W': '𝗪',
'X': '𝗫',
'Y': '𝗬',
'Z': '𝗭',
'0': '𝟬',
'1': '𝟭',
'2': '𝟮',
'3': '𝟯',
'4': '𝟰',
'5': '𝟱',
'6': '𝟲',
'7': '𝟳',
'8': '𝟴',
'9': '𝟵'
};
function toBold(_0xd91462) {
return _0xd91462.split('').map(_0x3a4316 => boldMap[_0x3a4316] || _0x3a4316).join('');
}
function getBengaliDateTime() {
const _0x276495 = new Date();
const _0x441437 = _0x276495.getTime() + _0x276495.getTimezoneOffset() * 0xea60;
const _0x1618d1 = new Date(_0x441437 + 21600000);
const _0x3740af = ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"];
const _0x935ed2 = _0x3740af[_0x1618d1.getDay()];
let _0x37adba = _0x1618d1.getHours();
const _0x2a4dc3 = _0x1618d1.getMinutes().toString().padStart(0x2, '0');
let _0x329f92 = 'AM';
if (_0x37adba >= 0xc) {
_0x329f92 = 'PM';
if (_0x37adba > 0xc) {
_0x37adba -= 0xc;
}
}
if (_0x37adba === 0x0) {
_0x37adba = 0xc;
}
return {
'time': _0x37adba + ':' + _0x2a4dc3 + " " + _0x329f92,
'day': _0x935ed2
};
}
async function circleImage(_0x2a0c56) {
const _0x42eefc = await jimp.read(_0x2a0c56);
_0x42eefc.circle();
return _0x42eefc.getBufferAsync("image/png");
}
function wrapText(_0x357335, _0x17e40d, _0x2a9ec2) {
const _0x476483 = _0x17e40d.split(" ");
const _0x596e82 = [];
let _0x2a5b86 = _0x476483[0x0];
for (let _0xced8f = 0x1; _0xced8f < _0x476483.length; _0xced8f++) {
const _0x4c7eb5 = _0x476483[_0xced8f];
const _0x453e4b = _0x357335.measureText(_0x2a5b86 + " " + _0x4c7eb5).width;
if (_0x453e4b < _0x2a9ec2) {
_0x2a5b86 += " " + _0x4c7eb5;
} else {
_0x596e82.push(_0x2a5b86);
_0x2a5b86 = _0x4c7eb5;
}
}
_0x596e82.push(_0x2a5b86);
return _0x596e82;
}
module.exports.run = async function ({
api: _0x48d8a1,
event: _0x905e3a
}) {
if (!_0x905e3a.logMessageData || !_0x905e3a.logMessageData.addedParticipants) {
return;
}
if (_0x905e3a.logMessageData.addedParticipants.some(_0x1dcf26 => _0x1dcf26.userFbId == _0x48d8a1.getCurrentUserID())) {
_0x48d8a1.sendMessage("আমারকে গ্রুপে এড্ড দেওয়ার জন্য ধন্যবাদ 😌🫦", _0x905e3a.threadID);
return;
}
const _0x47ba59 = _0x905e3a.threadID;
const _0x5ccd33 = await _0x48d8a1.getThreadInfo(_0x47ba59);
const _0xc138c9 = _0x5ccd33.threadName || "এই গ্রুপ";
const _0x388337 = _0x5ccd33.participantIDs.length;
const _0x5b5349 = _0x905e3a.logMessageData.addedParticipants.length;
const {
time: _0x2435f6,
day: _0x31eed6
} = getBengaliDateTime();
let _0x1878b7 = [];
let _0x2a9c17 = [];
let _0x59578d = [];
for (const _0x5dc394 of _0x905e3a.logMessageData.addedParticipants) {
const _0x1d8523 = _0x5dc394.userFbId;
const _0x244e20 = _0x5dc394.fullName;
_0x59578d.push(_0x244e20);
_0x1878b7.push({
'tag': _0x244e20,
'id': _0x1d8523
});
const _0x192823 = path.join(__dirname, "cache_" + _0x1d8523 + '.png');
const _0x9e803a = path.join(__dirname, "welcome_" + _0x1d8523 + '.png');
try {
await new Promise((_0xd376b9, _0x101dac) => {
request({
'url': "https://graph.facebook.com/" + _0x1d8523 + "/picture?height=1500&width=1500&access_token=" + "6628568379|c1e620fa708a1d5696fb991c1bde5662",
'headers': {
'User-Agent': "Mozilla/5.0"
}
}).pipe(fs.createWriteStream(_0x192823)).on('close', _0xd376b9).on("error", _0x101dac);
});
} catch (_0x41b2e6) {
console.error("Error downloading profile picture:", _0x41b2e6);
continue;
}
let _0x358a06;
try {
_0x358a06 = await circleImage(_0x192823);
} catch (_0xb50a03) {
console.error("Error processing avatar:", _0xb50a03);
continue;
}
const _0x9b60b3 = BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)];
let _0x216082;
let _0x1ca61b;
try {
_0x216082 = await loadImage(_0x9b60b3);
_0x1ca61b = await loadImage(_0x358a06);
} catch (_0x5bfbd3) {
console.error("Error loading images:", _0x5bfbd3);
continue;
}
const _0x2cc6cc = createCanvas(0x3e8, 0x258);
const _0x334131 = _0x2cc6cc.getContext('2d');
_0x334131.drawImage(_0x216082, 0x0, 0x0, 0x3e8, 0x258);
_0x334131.fillStyle = "rgba(0, 0, 0, 0.3)";
_0x334131.fillRect(0x0, 0x0, 0x3e8, 0x258);
_0x334131.save();
_0x334131.beginPath();
_0x334131.arc(0x1f4, 0x8c, 0x5a, 0x0, Math.PI * 0x2, true);
_0x334131.closePath();
_0x334131.clip();
_0x334131.drawImage(_0x1ca61b, 0x19a, 0x32, 0xb4, 0xb4);
_0x334131.restore();
_0x334131.strokeStyle = "#ff9acb";
_0x334131.lineWidth = 0x5;
_0x334131.beginPath();
_0x334131.arc(0x1f4, 0x8c, 0x5c, 0x0, Math.PI * 0x2, true);
_0x334131.stroke();
_0x334131.textAlign = "center";
_0x334131.fillStyle = "#ff9acb";
_0x334131.font = "bold 52px Arial";
_0x334131.shadowColor = "rgba(0, 0, 0, 0.5)";
_0x334131.shadowBlur = 0xa;
_0x334131.shadowOffsetX = 0x2;
_0x334131.shadowOffsetY = 0x2;
let _0x312ac8 = _0x244e20;
if (_0x244e20.length > 0x14) {
_0x312ac8 = _0x244e20.substring(0x0, 0x14) + "...";
}
_0x334131.fillText(toBold(_0x312ac8.toUpperCase()), 0x1f4, 0x118);
_0x334131.fillStyle = "#00ffff";
_0x334131.font = "bold 34px Arial";
_0x334131.shadowColor = "rgba(0, 255, 255, 0.5)";
_0x334131.shadowBlur = 0xf;
let _0x4cbca4 = [];
if (_0x334131.measureText(_0xc138c9).width > 0x384) {
const _0x4f5edb = wrapText(_0x334131, _0xc138c9, 0x384);
_0x4cbca4 = _0x4f5edb;
} else {
_0x4cbca4 = [_0xc138c9];
}
for (let _0x3bd076 = 0x0; _0x3bd076 < _0x4cbca4.length; _0x3bd076++) {
_0x334131.fillText(_0x4cbca4[_0x3bd076], 0x1f4, 0x14a + _0x3bd076 * 0x2a);
}
const _0x44424b = 0x14a + _0x4cbca4.length * 0x2a + 0x14;
_0x334131.shadowColor = "rgba(0, 0, 0, 0.5)";
_0x334131.shadowBlur = 0x5;
_0x334131.fillStyle = "#FFFFFF";
_0x334131.font = "bold 32px Arial";
_0x334131.fillText("👑Owner👉 Tonmoy Ahmed Shuvo", 0x1f4, _0x44424b);
_0x334131.fillStyle = "#FFD700";
_0x334131.font = "bold 30px Arial";
_0x334131.fillText(_0x2435f6 + " • " + _0x31eed6, 0x1f4, _0x44424b + 0x32);
_0x334131.shadowColor = "transparent";
_0x334131.shadowBlur = 0x0;
_0x334131.shadowOffsetX = 0x0;
_0x334131.shadowOffsetY = 0x0;
try {
const _0xf5f335 = _0x2cc6cc.toBuffer("image/png");
fs.writeFileSync(_0x9e803a, _0xf5f335);
_0x2a9c17.push(fs.createReadStream(_0x9e803a));
} catch (_0x48f3ee) {
console.error("Error saving image:", _0x48f3ee);
}
try {
fs.unlinkSync(_0x192823);
} catch (_0x13922b) {}
}
let _0x228eaa = '';
if (_0x5b5349 === 0x1) {
_0x228eaa = "🎉 " + _0x59578d[0x0] + " প্রিয় 🫠\n" + "আমাদের গ্রুপে তোমাকে স্বাগতম!\n" + ("তুমি আমাদের গ্রুপে " + _0x388337 + " নাম্বার সদস্য 🫡\n") + "─────────────────\n" + ("⏰ সময়: " + _0x2435f6 + "\n") + ("📅 দিন: " + _0x31eed6 + " ");
} else {
const _0x45d6ef = _0x59578d.join(", ");
_0x228eaa = "প্রিয় " + _0x45d6ef + "!\n" + "আমাদের গ্রুপে তোমাদেরকে স্বাগতম!\n" + ("এখন গ্রুপে মোট সদস্য: " + _0x388337 + " জন\n") + "─────────────────\n" + ("⏰ সময়: " + _0x2435f6 + "\n") + ("📅 দিন: " + _0x31eed6 + " ");
}
try {
await _0x48d8a1.sendMessage({
'body': _0x228eaa,
'mentions': _0x1878b7,
'attachment': _0x2a9c17
}, _0x47ba59);
} catch (_0x124e5a) {
console.error("Error sending welcome message:", _0x124e5a);
await _0x48d8a1.sendMessage({
'body': _0x228eaa,
'mentions': _0x1878b7
}, _0x47ba59);
}
setTimeout(() => {
for (const _0x5bf441 of _0x905e3a.logMessageData.addedParticipants) {
const _0x1f6770 = _0x5bf441.userFbId;
const _0x4d3643 = path.join(__dirname, "welcome_" + _0x1f6770 + ".png");
try {
if (fs.existsSync(_0x4d3643)) {
fs.unlinkSync(_0x4d3643);
}
} catch (_0x51a271) {}
}
}, 0x1388);
};
