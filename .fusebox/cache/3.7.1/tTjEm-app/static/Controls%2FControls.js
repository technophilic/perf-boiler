module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nrequire(\"./Controls.css\");\n/**\n * @name handleFail\n * @param err - error thrown by any function\n * @description Helper function to handle errors\n */\nlet handleFail = function (err) {\n    console.log(\"Error : \", err);\n};\nfunction controlInit(arg) {\n    // Declare buttons and js references\n    let mic = false, cam = false;\n    let micBtn = document.querySelector('#mute-audio'), camBtn = document.querySelector('#mute-video'), leaveBtn = document.querySelector('#leave-call');\n    // Initialize buttons and js references\n    micBtn.className = 'flex-item'; // removing greyed-out class (look at index.html for more clarity)\n    camBtn.className = 'flex-item'; // removing greyed-out class (look at index.html for more clarity)\n    leaveBtn.className = 'flex-item'; // removing greyed-out class (look at index.html for more clarity)\n    mic = true;\n    cam = true;\n    micBtn.onclick = () => {\n        console.log('mic toggled');\n        mic = !mic;\n        (mic) ? arg.localStream.unmuteAudio() : arg.localStream.muteAudio(); // <--------------\n        micBtn.childNodes[0].innerHTML = `mic${(mic) ? '' : '_off'}`;\n    };\n    camBtn.onclick = () => {\n        console.log('cam toggled');\n        cam = !cam;\n        (cam) ? arg.localStream.unmuteVideo() : arg.localStream.muteVideo(); // <--------------\n        camBtn.childNodes[0].innerHTML = `videocam${(cam) ? '' : '_off'}`;\n    };\n    leaveBtn.onclick = () => {\n        arg.client.unpublish(arg.localStream, handleFail); // <--------------\n        arg.localStream.close(); // <--------------\n        arg.client.leave(); // <--------------\n        let main = document.querySelector('main');\n        main.innerHTML = `<h1 style=\"text-align: center;\">Call ended successfully!</h1>`;\n    };\n    console.log(arg);\n}\nexports.default = controlInit;\n",
dependencies: ["./Controls.css"],
sourceMap: {},
headerContent: undefined,
mtime: 1559452130757,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}