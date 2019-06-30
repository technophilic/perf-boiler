module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nrequire(\"./Video.css\");\nconst agora_rtc_sdk_1 = require(\"agora-rtc-sdk\");\nlet remoteContainer = document.getElementById(\"remote\");\nlet remoteMinimized = document.getElementById(\"minimized-remote\");\nlet remotes = [];\n/**\n * @name addVideoStream\n * @param streamId\n * @description Helper function to add the video stream to \"remote-container\"\n */\nfunction addVideoStream(streamId) {\n    remotes.push(streamId);\n    let streamDiv = document.createElement(\"div\"); // Create a new div for every stream\n    streamDiv.id = String(streamId); // Assigning id to div\n    streamDiv.style.transform = \"rotateY(180deg)\"; // Takes care of lateral inversion (mirror image)\n    if (remotes.length > 1) {\n        streamDiv.className = \"minimized-video video-margin\";\n        remoteMinimized.appendChild(streamDiv); // Add new div to container\n    }\n    else {\n        streamDiv.style.height = '100%';\n        remoteContainer.appendChild(streamDiv); // Add new div to container\n    }\n}\n/**\n * @name removeVideoStream\n * @param evt - Remove event\n * @description Helper function to remove the video stream from \"remote-container\"\n */\nfunction removeVideoStream(evt) {\n    console.log(\"remove video-stream called\");\n    let stream = evt.stream;\n    if (stream) {\n        stream.close();\n        remotes = remotes.filter(e => e !== stream.getId());\n        // console.log('remove ',stream.getId(), remotes);\n        let remDiv = document.getElementById(stream.getId());\n        remDiv.parentNode.removeChild(remDiv);\n        console.log(\"Remote stream is removed \" + stream.getId());\n    }\n}\n/**\n * @name handleFail\n * @param err - error thrown by any function\n * @description Helper function to handle errors\n */\nlet handleFail = function (err) {\n    console.log(\"Error : \", err);\n};\n/**\n * @name handleFail\n * @param client - RTC Client\n * @description Function takes in a client and returns a promise which will resolve {localStream and client}\n */\nfunction video(client, appid) {\n    let resolve;\n    client.init(appid, function () {\n        console.log(\"initialized\");\n    }, handleFail);\n    client.join(null, 'channel-x', null, (uid) => {\n        let localStream = agora_rtc_sdk_1.default.createStream({\n            streamID: uid,\n            audio: true,\n            video: true,\n            screen: false\n        });\n        localStream.init(function () {\n            localStream.play('me');\n            client.publish(localStream, handleFail);\n            resolve({ localStream, client });\n        }, handleFail);\n    }, handleFail);\n    client.on('stream-added', function (evt) {\n        client.subscribe(evt.stream, handleFail);\n    });\n    client.on('stream-subscribed', function (evt) {\n        let stream = evt.stream;\n        addVideoStream(stream.getId());\n        stream.play(String(stream.getId()));\n    });\n    client.on('stream-removed', removeVideoStream);\n    client.on('peer-leave', removeVideoStream);\n    return new Promise((res, rej) => { resolve = res; });\n}\nexports.default = video;\n",
dependencies: ["./Video.css","agora-rtc-sdk"],
sourceMap: {},
headerContent: undefined,
mtime: 1561869458673,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}