(function($fsx){
// default/Video/Video.js
$fsx.f[4] =
function(module,exports){
Object.defineProperty(exports, '__esModule', { value: true });
$fsx.r(5);
const agora_rtc_sdk_1 = $fsx.r(9);
let remoteContainer = document.getElementById('remote');
let remoteMinimized = document.getElementById('minimized-remote');
let remotes = [];
function addVideoStream(streamId) {
    remotes.push(streamId);
    let streamDiv = document.createElement('div');
    streamDiv.id = String(streamId);
    streamDiv.style.transform = 'rotateY(180deg)';
    if (remotes.length > 1) {
        streamDiv.className = 'minimized-video video-margin';
        remoteMinimized.appendChild(streamDiv);
    } else {
        streamDiv.style.height = '100%';
        remoteContainer.appendChild(streamDiv);
    }
}
function removeVideoStream(evt) {
    console.log('remove video-stream called');
    let stream = evt.stream;
    if (stream) {
        stream.close();
        remotes = remotes.filter(e => e !== stream.getId());
        let remDiv = document.getElementById(stream.getId());
        remDiv.parentNode.removeChild(remDiv);
        console.log('Remote stream is removed ' + stream.getId());
    }
}
let handleFail = function (err) {
    console.log('Error : ', err);
};
function video(client, appid) {
    let resolve;
    client.init(appid, function () {
        console.log('initialized');
    }, handleFail);
    client.join(null, 'channel-x', null, uid => {
        let localStream = agora_rtc_sdk_1.default.createStream({
            streamID: uid,
            audio: true,
            video: true,
            screen: false
        });
        localStream.init(function () {
            localStream.play('me');
            client.publish(localStream, handleFail);
            resolve({
                localStream,
                client
            });
        }, handleFail);
    }, handleFail);
    client.on('stream-added', function (evt) {
        client.subscribe(evt.stream, handleFail);
    });
    client.on('stream-subscribed', function (evt) {
        let stream = evt.stream;
        addVideoStream(stream.getId());
        stream.play(String(stream.getId()));
    });
    client.on('stream-removed', removeVideoStream);
    client.on('peer-leave', removeVideoStream);
    return new Promise((res, rej) => {
        resolve = res;
    });
}
exports.default = video;
}
// default/Video/Video.css
$fsx.f[5] =
function(){
$fsx.r(8);
}
})($fsx);

