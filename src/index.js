import AgoraRTC from 'agora-rtc-sdk'
import Input from './Input/Input'
import './materialize.min.css'
import './index.css'
// import Materialize from 'materialize-css'



let client = AgoraRTC.createClient({mode: 'rtc', codec: "h264"});

Input().then((appid)=>{
    Video(client,appid).then(function (value) {   // Value is {localStream,client}
        Controls(value);
    });
});
init();