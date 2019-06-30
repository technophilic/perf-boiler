module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst agora_rtc_sdk_1 = require(\"agora-rtc-sdk\");\nconst Input_1 = require(\"./Input/Input\");\nrequire(\"./materialize.min.css\");\nrequire(\"./index.css\");\n// import Materialize from 'materialize-css'\nlet client = agora_rtc_sdk_1.default.createClient({ mode: 'rtc', codec: \"h264\" });\n// Input().then((appid)=>{\n//     Video(client,appid).then(function (value) {   // Value is {localStream,client}\n//         Controls(value);\n//     });\n// });\nasync function init() {\n    let appid = await Input_1.default();\n    let Video = await $fsmp$(\"~/Video/Video.js\");\n    let value = await Video.default(client, appid);\n    let Controls = await $fsmp$(\"~/Controls/Controls.js\");\n    let _ = Controls.default(value);\n}\ninit();\n",
dependencies: ["agora-rtc-sdk","./Input/Input","./materialize.min.css","./index.css","/home/technophilic/Coding/es6-agora-boilerplate/src/Video/Video.js","/home/technophilic/Coding/es6-agora-boilerplate/src/Controls/Controls.js"],
sourceMap: {},
headerContent: undefined,
mtime: 1561870871291,
devLibsRequired : ["fuse-imports"],
ac : undefined,
_ : {}
}
