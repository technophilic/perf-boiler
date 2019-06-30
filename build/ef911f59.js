(function($fsx){
// default/Controls/Controls.js
$fsx.f[6] =
function(module,exports){
Object.defineProperty(exports, '__esModule', { value: true });
$fsx.r(7);
let handleFail = function (err) {
    console.log('Error : ', err);
};
function controlInit(arg) {
    let mic = false, cam = false;
    let micBtn = document.querySelector('#mute-audio'), camBtn = document.querySelector('#mute-video'), leaveBtn = document.querySelector('#leave-call');
    micBtn.className = 'flex-item';
    camBtn.className = 'flex-item';
    leaveBtn.className = 'flex-item';
    mic = true;
    cam = true;
    micBtn.onclick = () => {
        console.log('mic toggled');
        mic = !mic;
        mic ? arg.localStream.unmuteAudio() : arg.localStream.muteAudio();
        micBtn.childNodes[0].innerHTML = `mic${ mic ? '' : '_off' }`;
    };
    camBtn.onclick = () => {
        console.log('cam toggled');
        cam = !cam;
        cam ? arg.localStream.unmuteVideo() : arg.localStream.muteVideo();
        camBtn.childNodes[0].innerHTML = `videocam${ cam ? '' : '_off' }`;
    };
    leaveBtn.onclick = () => {
        arg.client.unpublish(arg.localStream, handleFail);
        arg.localStream.close();
        arg.client.leave();
        let main = document.querySelector('main');
        main.innerHTML = `<h1 style="text-align: center;">Call ended successfully!</h1>`;
    };
    console.log(arg);
}
exports.default = controlInit;
}
// default/Controls/Controls.css
$fsx.f[7] =
function(){
$fsx.r(8);
}
})($fsx);

