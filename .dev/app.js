(function($fsx){
// default/index.js
$fsx.f[0] =
function(module,exports){
Object.defineProperty(exports, '__esModule', { value: true });
const agora_rtc_sdk_1 = $fsx.r(9);
const Input_1 = $fsx.r(1);
$fsx.r(2);
$fsx.r(3);
let client = agora_rtc_sdk_1.default.createClient({
    mode: 'rtc',
    codec: 'h264'
});
async function init() {
    let appid = await Input_1.default();
    let Video = await $fsx.l('4fd423f9');
    let value = await Video.default(client, appid);
    let Controls = await $fsx.l('ef911f59');
    let _ = Controls.default(value);
}
init();
}
// default/Input/Input.js
$fsx.f[1] =
function(module,exports){
Object.defineProperty(exports, '__esModule', { value: true });
function Input() {
    return new Promise((res, rej) => {
        let prompt = document.getElementById('prompt');
        let appid = document.getElementById('appid');
        let submit = document.getElementById('prompt-submit');
        prompt.style = '';
        submit.onclick = () => {
            let appval = appid.value;
            res(appval);
            prompt.style = 'display: none;';
            submit.onclick = null;
        };
    });
}
exports.default = Input;
}
// default/materialize.min.css
$fsx.f[2] =
function(){
$fsx.r(8);
}
// default/index.css
$fsx.f[3] =
function(){
$fsx.r(8);
}
// default/bundle.css
$fsx.f[8] =
function(){
$fsx.r(10)('bundle.css');
}
// agora-rtc-sdk/AgoraRTCSDK.min.js
$fsx.f[9] =
function(module,exports){
!function (e, t) {
    'object' == 'object' && 'object' == 'object' ? module.exports = t() : 'function' == 'undefined' && define.amd ? define('AgoraRTC', [], t) : 'object' == 'object' ? exports.AgoraRTC = t() : e.AgoraRTC = t();
}(window, function () {
    return function (e) {
        var t = {};
        function n(i) {
            if (t[i])
                return t[i].exports;
            var o = t[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
        }
        return n.m = e, n.c = t, n.d = function (e, t, i) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: i
            });
        }, n.r = function (e) {
            'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 });
        }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t)
                return e;
            if (4 & t && 'object' == typeof e && e && e.__esModule)
                return e;
            var i = Object.create(null);
            if (n.r(i), Object.defineProperty(i, 'default', {
                    enumerable: !0,
                    value: e
                }), 2 & t && 'string' != typeof e)
                for (var o in e)
                    n.d(i, o, function (t) {
                        return e[t];
                    }.bind(null, o));
            return i;
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default;
            } : function () {
                return e;
            };
            return n.d(t, 'a', t), t;
        }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, n.p = '', n(n.s = 17);
    }([
        function (e, t, n) {
            n.r(t);
            var i = n(6), o = n.n(i), a = n(5), r = n(3), s = n(1), d = 0, c = 'free', u = [], l = [], p = 0;
            setInterval(function () {
                Object(r.getParameter)('UPLOAD_LOG') && f.info('console log upload');
            }, 900000);
            var f = function () {
                var e, t, n, i, f, m, g = 'https://'.concat(Object(r.getParameter)('LOG_UPLOAD_SERVER'), '/upload/v1'), v = [
                        'DEBUG',
                        'INFO',
                        'WARNING',
                        'ERROR',
                        'NONE'
                    ], S = 0, I = function e(t) {
                        c = 'uploading', setTimeout(function () {
                            !function (e, t, n) {
                                var i;
                                Array.isArray(e) || (e = [e]), e = e.map(function (e) {
                                    return {
                                        log_item_id: d++,
                                        log_level: e.log_level,
                                        payload_str: e.payload
                                    };
                                }), i = {
                                    sdk_version: r.VERSION,
                                    process_id: Object(s.a)(),
                                    payload: JSON.stringify(e)
                                };
                                try {
                                    Object(a.c)(g, i, function (e) {
                                        'OK' === e ? t && t(e) : n && n(e);
                                    }, function (e) {
                                        n && n(e);
                                    }, { withCredentials: !0 });
                                } catch (e) {
                                    n && n(e);
                                }
                            }(t, function () {
                                p = 0, 0 !== u.length ? (l = u.length < 10 ? u.splice(0, u.length) : u.splice(0, 10), e(l)) : c = 'free';
                            }, function () {
                                setTimeout(function () {
                                    e(l);
                                }, p++ < 2 ? 200 : 10000);
                            });
                        }, 3000);
                    };
                t = function () {
                    for (var t = [0], n = 0; n < arguments.length; n++)
                        t.push(arguments[n]);
                    e.apply(this, t);
                }, n = function () {
                    for (var t = [1], n = 0; n < arguments.length; n++)
                        t.push(arguments[n]);
                    e.apply(this, t);
                }, i = function () {
                    for (var t = [2], n = 0; n < arguments.length; n++)
                        t.push(arguments[n]);
                    e.apply(this, t);
                }, f = function () {
                    for (var t = [3], n = 0; n < arguments.length; n++)
                        t.push(arguments[n]);
                    e.apply(this, t);
                };
                var _ = {};
                return m = function (e) {
                    _[e] || (i.apply(void 0, arguments), _[e] = !0);
                }, {
                    DEBUG: 0,
                    INFO: 1,
                    WARNING: 2,
                    ERROR: 3,
                    NONE: 4,
                    enableLogUpload: function () {
                        Object(r.setParameter)('UPLOAD_LOG', !0);
                    },
                    disableLogUpload: function () {
                        Object(r.setParameter)('UPLOAD_LOG', !1);
                    },
                    setProxyServer: function (e) {
                        g = e ? 'https://'.concat(e, '/ls/?h=').concat(Object(r.getParameter)('LOG_UPLOAD_SERVER'), '&p=443&d=upload/v1') : 'https://'.concat(Object(r.getParameter)('LOG_UPLOAD_SERVER'), '/upload/v1');
                    },
                    setLogLevel: function (e) {
                        e > 4 ? e = 4 : e < 0 && (e = 0), S = e;
                    },
                    log: e = function () {
                        var e, t = arguments[0], n = arguments;
                        if (n[0] = (e = new Date()).toTimeString().split(' ')[0] + ':' + e.getMilliseconds() + ' Agora-SDK [' + (v[t] || 'DEFAULT') + ']:', function (e, t) {
                                if (Object(r.getParameter)('UPLOAD_LOG'))
                                    try {
                                        t = Array.prototype.slice.call(t);
                                        var n = '';
                                        t.forEach(function (e) {
                                            'object' === o()(e) && (e = JSON.stringify(e)), n = n + e + ' ';
                                        }), u.push({
                                            payload: n,
                                            log_level: e
                                        }), 'free' === c && (l = u.length < 10 ? u.splice(0, u.length) : u.splice(0, 10), I(l));
                                    } catch (e) {
                                    }
                            }(t, n), !(t < S))
                            switch (t) {
                            case 0:
                            case 1:
                                console.log.apply(console, n);
                                break;
                            case 2:
                                console.warn.apply(console, n);
                                break;
                            case 3:
                                console.error.apply(console, n);
                                break;
                            default:
                                return void console.log.apply(console, n);
                            }
                    },
                    debug: t,
                    info: n,
                    warning: i,
                    deprecate: m,
                    error: f
                };
            }();
            t.default = f;
        },
        function (e, t, n) {
            var i = n(9), o = n.n(i), a = n(4), r = n.n(a), s = n(3), d = n(0), c = n(5), u = n(11), l = n.n(u);
            n.d(t, 'b', function () {
                return g;
            }), n.d(t, 'a', function () {
                return m;
            });
            var p = {
                    eventType: null,
                    sid: null,
                    lts: null,
                    success: null,
                    cname: null,
                    uid: null,
                    peer: null,
                    cid: null,
                    elapse: null,
                    extend: null,
                    vid: 0
                }, f = null, m = function () {
                    return f || (f = 'process-' + l()(), d.default.info('processId: ' + f)), f;
                }, g = function () {
                    var e = { list: {} };
                    e.url = Object(c.e)() ? 'https://'.concat(Object(s.getParameter)('EVENT_REPORT_DOMAIN'), ':6443/events/message') : 'http://'.concat(Object(s.getParameter)('EVENT_REPORT_DOMAIN'), ':6080/events/message'), e.urlBackup = Object(c.e)() ? 'https://'.concat(Object(s.getParameter)('EVENT_REPORT_BACKUP_DOMAIN'), ':6443/events/message') : 'http://'.concat(Object(s.getParameter)('EVENT_REPORT_BACKUP_DOMAIN'), ':6080/events/message'), e.setProxyServer = function (t) {
                        t ? (e.url = Object(c.e)() ? 'https://'.concat(t, '/rs/?h=').concat(Object(s.getParameter)('EVENT_REPORT_DOMAIN'), '&p=6443&d=events/message') : 'http://'.concat(t, '/rs/?h=').concat(Object(s.getParameter)('EVENT_REPORT_DOMAIN'), '&p=6080&d=events/message'), e.urlBackup = Object(c.e)() ? 'https://'.concat(t, '/rs/?h=').concat(Object(s.getParameter)('EVENT_REPORT_BACKUP_DOMAIN'), '&p=6443&d=events/message') : 'http://'.concat(t, '/rs/?h=').concat(Object(s.getParameter)('EVENT_REPORT_BACKUP_DOMAIN'), '&p=6080&d=events/message'), d.default.debug('reportProxyServerURL: '.concat(e.url)), d.default.debug('reportProxyServerBackupURL: '.concat(e.urlBackup))) : (e.url = Object(c.e)() ? 'https://'.concat(Object(s.getParameter)('EVENT_REPORT_DOMAIN'), ':6443/events/message') : 'http://'.concat(Object(s.getParameter)('EVENT_REPORT_DOMAIN'), ':6080/events/message'), e.urlBackup = Object(c.e)() ? 'https://'.concat(Object(s.getParameter)('EVENT_REPORT_BACKUP_DOMAIN'), ':6443/events/message') : 'http://'.concat(Object(s.getParameter)('EVENT_REPORT_BACKUP_DOMAIN'), ':6080/events/message'));
                    }, e.sessionInit = function (t, n) {
                        var i = r()({}, p);
                        i.startTime = +new Date(), i.sid = t, i.cname = n.cname, e.list[t] = i;
                        var o = r()({}, { willUploadConsoleLog: Object(s.getParameter)('UPLOAD_LOG') }, n.extend), a = r()({}, i);
                        a.eventType = 'session_init', a.appid = n.appid, a.browser = navigator.userAgent, a.build = s.BUILD, a.lts = +new Date(), a.elapse = a.lts - a.startTime, a.extend = JSON.stringify(o), a.mode = n.mode, a.process = m(), a.success = n.succ, a.version = s.VERSION, delete a.startTime, e.send({
                            type: 'io.agora.pb.Wrtc.Session',
                            data: a
                        }), e._flushInvokeReport(t);
                    }, e.joinChooseServer = function (t, n, i) {
                        n.uid && (e.list[t].uid = parseInt(n.uid)), n.cid && (e.list[t].cid = parseInt(n.cid));
                        var o = r()({}, e.list[t]);
                        o.eventType = 'join_choose_server';
                        var a = n.lts;
                        o.lts = Date.now(), o.eventElapse = o.lts - a, o.chooseServerAddr = n.csAddr, o.errorCode = n.ec, o.elapse = o.lts - o.startTime, o.success = n.succ, o.chooseServerAddrList = JSON.stringify(n.serverList), delete o.startTime, e.send({
                            type: 'io.agora.pb.Wrtc.JoinChooseServer',
                            data: o
                        });
                    }, e.joinGateway = function (t, n) {
                        n.vid && (e.list[t].vid = n.vid);
                        var i = r()({}, e.list[t]), o = n.lts;
                        i.eventType = 'join_gateway', i.lts = Date.now(), i.gatewayAddr = n.addr, i.success = n.succ, i.errorCode = n.ec, i.elapse = i.lts - i.startTime, i.eventElapse = i.lts - o, delete i.startTime, e.send({
                            type: 'io.agora.pb.Wrtc.JoinGateway',
                            data: i
                        });
                    }, e.publish = function (t, n) {
                        var i = r()({}, e.list[t]);
                        i.eventType = 'publish';
                        var o = n.lts;
                        i.lts = Date.now(), i.eventElapse = i.lts - o, i.elapse = i.lts - i.startTime, i.success = n.succ, i.errorCode = n.ec, n.videoName && (i.videoName = n.videoName), n.audioName && (i.audioName = n.audioName), n.screenName && (i.screenName = n.screenName), delete i.startTime, e.send({
                            type: 'io.agora.pb.Wrtc.Publish',
                            data: i
                        }), e._flushInvokeReport(t);
                    }, e.subscribe = function (t, n) {
                        var i = r()({}, e.list[t]);
                        i.eventType = 'subscribe';
                        var o = n.lts;
                        i.lts = Date.now(), i.eventElapse = i.lts - o, i.elapse = i.lts - i.startTime, i.errorCode = n.ec, i.success = n.succ, isFinite(n.peerid) ? i.peer = n.peerid : i.peerSuid = '' + n.peerid, 'boolean' == typeof n.video && (i.video = n.video), 'boolean' == typeof n.audio && (i.audio = n.audio), delete i.startTime, e.send({
                            type: 'io.agora.pb.Wrtc.Subscribe',
                            data: i
                        }), e._flushInvokeReport(t);
                    }, e.firstRemoteFrame = function (t, n) {
                        var i = r()({}, e.list[t]);
                        i.eventType = 'first_remote_frame';
                        var o = n.lts;
                        i.lts = Date.now(), i.eventElapse = i.lts - o, i.elapse = i.lts - i.startTime, i.width = n.width, i.height = n.height, i.success = n.succ, i.errorCode = n.ec, isFinite(n.peerid) ? i.peer = n.peerid : i.peerSuid = '' + n.peerid, delete i.startTime, e.send({
                            type: 'io.agora.pb.Wrtc.FirstFrame',
                            data: i
                        });
                    }, e.streamSwitch = function (t, n) {
                        var i = r()({}, e.list[t]);
                        i.eventType = 'stream_switch', i.lts = Date.now(), i.isDual = n.isdual, i.elapse = i.lts - i.startTime, i.success = i.succ, delete i.startTime, e.send({
                            type: 'io.agora.pb.Wrtc.StreamSwitch',
                            data: i
                        });
                    }, e.audioSendingStopped = function (t, n) {
                        var i = r()({}, e.list[t]);
                        i.eventType = 'audio_sending_stopped', i.lts = Date.now(), i.elapse = i.lts - i.startTime, i.reason = n.reason, i.success = n.succ, delete i.startTime, e.send({
                            type: 'io.agora.pb.Wrtc.AudioSendingStopped',
                            data: i
                        });
                    }, e.videoSendingStopped = function (t, n) {
                        var i = r()({}, e.list[t]);
                        i.eventType = 'video_sending_stopped', i.lts = Date.now(), i.elapse = i.lts - i.startTime, i.reson = n.reason, i.success = n.succ, delete i.startTime, e.send({
                            type: 'io.agora.pb.Wrtc.VideoSendingStopped',
                            data: i
                        });
                    }, e.requestProxyAppCenter = function (t, n) {
                        var i = r()({}, e.list[t]), o = n.lts;
                        i.eventType = 'request_proxy_appcenter', i.lts = Date.now(), i.eventElapse = i.lts - o, i.elapse = i.lts - i.startTime, i.extend = n.extend + '', i.APAddr = n.APAddr, i.workerManagerList = n.workerManagerList, i.response = n.response, i.errorCode = n.ec, i.success = n.succ, delete i.startTime, e.send({
                            type: 'io.agora.pb.Wrtc.RequestProxyAppCenter',
                            data: i
                        });
                    }, e.requestProxyWorkerManager = function (t, n) {
                        var i = r()({}, e.list[t]), o = n.lts;
                        i.eventType = 'request_proxy_worker_manager', i.lts = Date.now(), i.eventElapse = i.lts - o, i.elapse = i.lts - i.startTime, i.extend = n.extend, i.workerManagerAddr = n.workerManagerAddr, i.response = n.response, i.errorCode = n.ec, i.success = n.succ, delete i.startTime, e.send({
                            type: 'io.agora.pb.Wrtc.RequestProxyWorkerManager',
                            data: i
                        });
                    };
                    var t = 0;
                    return e.reportApiInvoke = function (e, n) {
                        var i = n.tag, a = n.name, r = n.getStates, s = n.options, d = n.timeout, c = void 0 === d ? 60000 : d, u = n.callback, l = n.reportResult, p = void 0 === l || l, f = Date.now(), m = 0, v = t++, S = function () {
                                return o()({
                                    tag: i,
                                    invokeId: v,
                                    sid: e,
                                    name: a,
                                    apiInvokeTime: f,
                                    options: s
                                }, r && {
                                    states: (t = r(), Object.keys(t).reduce(function (e, n) {
                                        var i = e;
                                        return null != t[n] && (i[n] = t[n]), i;
                                    }, {}))
                                });
                                var t;
                            }, I = setTimeout(function () {
                                g._sendApiInvoke(o()({}, S(), {
                                    error: 'API_INVOKE_TIMEOUT',
                                    success: !1
                                }));
                            }, c);
                        return function (e, t) {
                            if (clearTimeout(I), ++m > 1 && (e = 'EXECUTOR_INVOKE_'.concat(m)), e)
                                return g._sendApiInvoke(o()({}, S(), {
                                    success: !1,
                                    error: e
                                }, r && { states: r() })), u && u(e);
                            g._sendApiInvoke(o()({}, S(), { success: !0 }, p && { result: t }, r && { states: r() })), u && u(null, t);
                        };
                    }, e._cachedItems = [], e._cacheInvokeReport = function (t) {
                        t.lts || (t.lts = Date.now()), e._cachedItems.push(t), e._cachedItems.length > 50 && e._cachedItems.shift();
                    }, e._flushInvokeReport = function (t) {
                        if (e._cachedItems.length) {
                            var n = e._cachedItems;
                            e._cachedItems = [], d.default.debug('Flush cached event reporting:', n.length), n.forEach(function (n, i) {
                                n.sid = t, setTimeout(function () {
                                    e._sendApiInvoke(n);
                                }, 5000 + 500 * i);
                            });
                        }
                    }, e._sendApiInvoke = function (t) {
                        var n = t.tag, i = t.invokeId, a = t.sid, r = t.name, d = t.result, c = t.states, u = t.options, l = t.error, p = t.success, f = t.apiInvokeTime, m = t.lts, g = Object(s.getParameter)('NOT_REPORT_EVENT');
                        if (!(n && g instanceof Array && g.includes(n)))
                            if (e.list[a]) {
                                var v = e.list[a], S = v.startTime, I = v.cname, _ = v.uid, h = v.cid, y = (m = m || Date.now()) - S, b = m - f, E = o()({
                                        invokeId: i,
                                        sid: a,
                                        cname: I,
                                        cid: h,
                                        lts: m,
                                        uid: _,
                                        success: p,
                                        elapse: y,
                                        apiName: r,
                                        execElapse: b
                                    }, void 0 !== u && { options: JSON.stringify(u) }, void 0 !== c && { execStates: JSON.stringify(c) }, void 0 !== l && { errorCode: JSON.stringify(l) }, void 0 !== d && { execResult: JSON.stringify(d) });
                                e.send({
                                    type: 'io.agora.pb.Wrtc.ApiInvoke',
                                    data: E
                                });
                            } else
                                e._cacheInvokeReport(arguments[0]);
                    }, e.send = function (t) {
                        try {
                            Object(c.c)(e.url, t, null, function (n) {
                                Object(c.c)(e.urlBackup, t, null, function (e) {
                                }, { timeout: 10000 });
                            }, { timeout: 10000 });
                        } catch (e) {
                        }
                    }, e;
                }();
        },
        function (e, t, n) {
            n.r(t), n.d(t, 'getBrowserInfo', function () {
                return v;
            }), n.d(t, 'getBrowserVersion', function () {
                return p;
            }), n.d(t, 'getBrowserOS', function () {
                return f;
            }), n.d(t, 'isChrome', function () {
                return o;
            }), n.d(t, 'isSafari', function () {
                return a;
            }), n.d(t, 'isFireFox', function () {
                return r;
            }), n.d(t, 'isOpera', function () {
                return s;
            }), n.d(t, 'isQQBrowser', function () {
                return d;
            }), n.d(t, 'isWeChatBrowser', function () {
                return c;
            }), n.d(t, 'isSupportedPC', function () {
                return u;
            }), n.d(t, 'isSupportedMobile', function () {
                return l;
            }), n.d(t, 'getChromeKernelVersion', function () {
                return g;
            }), n.d(t, 'isChromeKernel', function () {
                return m;
            });
            var i, o = function () {
                    var e = v();
                    return e.name && 'Chrome' === e.name;
                }, a = function () {
                    var e = v();
                    return e.name && 'Safari' === e.name;
                }, r = function () {
                    var e = v();
                    return e.name && 'Firefox' === e.name;
                }, s = function () {
                    var e = v();
                    return e.name && 'OPR' === e.name;
                }, d = function () {
                    var e = v();
                    return e.name && 'QQBrowser' === e.name;
                }, c = function () {
                    var e = v();
                    return e.name && 'MicroMessenger' === e.name;
                }, u = function () {
                    var e = f();
                    return 'Linux' === e || 'Mac OS X' === e || 'Mac OS' === e || -1 !== e.indexOf('Windows');
                }, l = function () {
                    var e = f();
                    return 'Android' === e || 'iOS' === e;
                }, p = function () {
                    return v().version;
                }, f = function () {
                    return v().os;
                }, m = function () {
                    return !!navigator.userAgent.match(/chrome\/[\d]./i);
                }, g = function () {
                    var e = navigator.userAgent.match(/chrome\/[\d]./i);
                    return e && e[0] && e[0].split('/')[1];
                }, v = (i = function () {
                    var e, t = navigator.userAgent, n = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                    'Chrome' === n[1] && null != (e = t.match(/(OPR(?=\/))\/?(\d+)/i)) && (n = e), 'Safari' === n[1] && null != (e = t.match(/version\/(\d+)/i)) && (n[2] = e[1]), ~t.toLowerCase().indexOf('qqbrowser') && null != (e = t.match(/(qqbrowser(?=\/))\/?(\d+)/i)) && (n = e), ~t.toLowerCase().indexOf('micromessenger') && null != (e = t.match(/(micromessenger(?=\/))\/?(\d+)/i)) && (n = e), ~t.toLowerCase().indexOf('edge') && null != (e = t.match(/(edge(?=\/))\/?(\d+)/i)) && (n = e), ~t.toLowerCase().indexOf('trident') && null != (e = /\brv[ :]+(\d+)/g.exec(t) || []) && (n = [
                        null,
                        'IE',
                        e[1]
                    ]);
                    var i = void 0, o = [
                            {
                                s: 'Windows 10',
                                r: /(Windows 10.0|Windows NT 10.0)/
                            },
                            {
                                s: 'Windows 8.1',
                                r: /(Windows 8.1|Windows NT 6.3)/
                            },
                            {
                                s: 'Windows 8',
                                r: /(Windows 8|Windows NT 6.2)/
                            },
                            {
                                s: 'Windows 7',
                                r: /(Windows 7|Windows NT 6.1)/
                            },
                            {
                                s: 'Windows Vista',
                                r: /Windows NT 6.0/
                            },
                            {
                                s: 'Windows Server 2003',
                                r: /Windows NT 5.2/
                            },
                            {
                                s: 'Windows XP',
                                r: /(Windows NT 5.1|Windows XP)/
                            },
                            {
                                s: 'Windows 2000',
                                r: /(Windows NT 5.0|Windows 2000)/
                            },
                            {
                                s: 'Windows ME',
                                r: /(Win 9x 4.90|Windows ME)/
                            },
                            {
                                s: 'Windows 98',
                                r: /(Windows 98|Win98)/
                            },
                            {
                                s: 'Windows 95',
                                r: /(Windows 95|Win95|Windows_95)/
                            },
                            {
                                s: 'Windows NT 4.0',
                                r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
                            },
                            {
                                s: 'Windows CE',
                                r: /Windows CE/
                            },
                            {
                                s: 'Windows 3.11',
                                r: /Win16/
                            },
                            {
                                s: 'Android',
                                r: /Android/
                            },
                            {
                                s: 'Open BSD',
                                r: /OpenBSD/
                            },
                            {
                                s: 'Sun OS',
                                r: /SunOS/
                            },
                            {
                                s: 'Linux',
                                r: /(Linux|X11)/
                            },
                            {
                                s: 'iOS',
                                r: /(iPhone|iPad|iPod)/
                            },
                            {
                                s: 'Mac OS X',
                                r: /Mac OS X/
                            },
                            {
                                s: 'Mac OS',
                                r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
                            },
                            {
                                s: 'QNX',
                                r: /QNX/
                            },
                            {
                                s: 'UNIX',
                                r: /UNIX/
                            },
                            {
                                s: 'BeOS',
                                r: /BeOS/
                            },
                            {
                                s: 'OS/2',
                                r: /OS\/2/
                            },
                            {
                                s: 'Search Bot',
                                r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
                            }
                        ];
                    for (var a in o) {
                        var r = o[a];
                        if (r.r.test(navigator.userAgent)) {
                            i = r.s;
                            break;
                        }
                    }
                    return {
                        name: n[1],
                        version: n[2],
                        os: i
                    };
                }(), function () {
                    return i;
                });
        },
        function (e, t, n) {
            Object.defineProperty(t, '__esModule', { value: !0 });
            t.BUILD = 'v2.6.1-0-g01b3be9';
            t.VERSION = '2.6.1';
            t.SUPPORT_RESOLUTION_LIST = {
                '90p_1': [
                    160,
                    90
                ],
                '120p_1': [
                    160,
                    120
                ],
                '120p_3': [
                    120,
                    120
                ],
                '120p_4': [
                    212,
                    120
                ],
                '180p_1': [
                    320,
                    180
                ],
                '180p_3': [
                    180,
                    180
                ],
                '180p_4': [
                    240,
                    180
                ],
                '240p_1': [
                    320,
                    240
                ],
                '240p_3': [
                    240,
                    240
                ],
                '240p_4': [
                    424,
                    240
                ],
                '360p_1': [
                    640,
                    360
                ],
                '360p_3': [
                    360,
                    360
                ],
                '360p_4': [
                    640,
                    360
                ],
                '360p_6': [
                    360,
                    360
                ],
                '360p_7': [
                    480,
                    360
                ],
                '360p_8': [
                    480,
                    360
                ],
                '360p_9': [
                    640,
                    360
                ],
                '360p_10': [
                    640,
                    360
                ],
                '360p_11': [
                    640,
                    360
                ],
                '480p_1': [
                    640,
                    480
                ],
                '480p_2': [
                    640,
                    480
                ],
                '480p_3': [
                    480,
                    480
                ],
                '480p_4': [
                    640,
                    480
                ],
                '480p_6': [
                    480,
                    480
                ],
                '480p_8': [
                    848,
                    480
                ],
                '480p_9': [
                    848,
                    480
                ],
                '480p_10': [
                    640,
                    480
                ],
                '720p_1': [
                    1280,
                    720
                ],
                '720p_2': [
                    1280,
                    720
                ],
                '720p_3': [
                    1280,
                    720
                ],
                '720p_5': [
                    960,
                    720
                ],
                '720p_6': [
                    960,
                    720
                ],
                '1080p_1': [
                    1920,
                    1080
                ],
                '1080p_2': [
                    1920,
                    1080
                ],
                '1080p_3': [
                    1920,
                    1080
                ],
                '1080p_5': [
                    1920,
                    1080
                ],
                '1440p_1': [
                    2560,
                    1440
                ],
                '1440p_2': [
                    2560,
                    1440
                ],
                '4k_1': [
                    3840,
                    2160
                ],
                '4k_3': [
                    3840,
                    2160
                ]
            };
            const i = {
                WEBCS_DOMAIN: [
                    'ap-web-1.agora.io',
                    'ap-web-2.agoraio.cn'
                ],
                WEBCS_DOMAIN_BACKUP_LIST: [
                    'ap-web-3.agora.io',
                    'ap-web-4.agoraio.cn'
                ],
                PROXY_CS: [
                    'ap-proxy-1.agora.io',
                    'ap-proxy-2.agora.io'
                ],
                LOG_UPLOAD_SERVER: 'logservice.agora.io',
                EVENT_REPORT_DOMAIN: 'webcollector-1.agora.io',
                EVENT_REPORT_BACKUP_DOMAIN: 'webcollector-2.agoraio.cn',
                WEBCS_BACKUP_CONNECT_TIMEOUT: 6000,
                HTTP_CONNECT_TIMEOUT: 5000,
                UPLOAD_LOG: !1,
                NOT_REPORT_EVENT: [],
                FILEPATH_LENMAX: 255
            };
            t.setParameter = (e, t) => void 0 !== i[e] && (i[e] = t, !0);
            t.getParameter = e => void 0 !== i[e] ? i[e] : null;
        },
        function (e, t) {
            function n() {
                return e.exports = n = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n)
                            Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                    }
                    return e;
                }, n.apply(this, arguments);
            }
            e.exports = n;
        },
        function (e, t, n) {
            n.d(t, 'c', function () {
                return u;
            }), n.d(t, 'e', function () {
                return l;
            }), n.d(t, 'b', function () {
                return s;
            }), n.d(t, 'a', function () {
                return d;
            }), n.d(t, 'd', function () {
                return c;
            });
            var i = n(3), o = n(7), a = 0, r = 0, s = function () {
                    return a;
                }, d = function () {
                    return r;
                }, c = function () {
                    a = 0, r = 0;
                }, u = function (e, t, n, s, d) {
                    var c = new XMLHttpRequest();
                    if (c.timeout = t.timeout || Object(i.getParameter)('HTTP_CONNECT_TIMEOUT'), c.open('POST', e, !0), c.setRequestHeader('Content-type', 'application/json; charset=utf-8'), d)
                        for (var u in d)
                            'withCredentials' == u ? c.withCredentials = !0 : c.setRequestHeader(u, d[u]);
                    c.onload = function (e) {
                        r += Object(o.e)(c.responseText), n && n(c.responseText);
                    }, c.onerror = function (t) {
                        s && s(t, e);
                    }, c.ontimeout = function (t) {
                        s && s(t, e);
                    };
                    var l = JSON.stringify(t);
                    a += Object(o.e)(l), c.send(l);
                }, l = function () {
                    return 'https:' == document.location.protocol;
                };
        },
        function (e, t) {
            function n(e) {
                return (n = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                    return typeof e;
                } : function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                })(e);
            }
            function i(t) {
                return 'function' == typeof Symbol && 'symbol' === n(Symbol.iterator) ? e.exports = i = function (e) {
                    return n(e);
                } : e.exports = i = function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : n(e);
                }, i(t);
            }
            e.exports = i;
        },
        function (e, t, n) {
            n.d(t, 'd', function () {
                return v;
            }), n.d(t, 'b', function () {
                return f;
            }), n.d(t, 'a', function () {
                return p;
            }), n.d(t, 'h', function () {
                return m;
            }), n.d(t, 'c', function () {
                return g;
            }), n.d(t, 'g', function () {
                return I;
            }), n.d(t, 'f', function () {
                return h;
            }), n.d(t, 'e', function () {
                return _;
            });
            var i = n(6), o = n.n(i), a = n(2), r = n(0), s = n(11), d = n.n(s), c = n(10), u = n(8), l = null, p = function (e) {
                    return this.audioContext = (l || (l = Object(c.a)()), l), this.sourceNode = e.otWebkitAudioSource || this.audioContext.createMediaStreamSource(e), this.analyser = this.audioContext.createAnalyser(), this.timeDomainData = new Uint8Array(this.analyser.frequencyBinCount), this.sourceNode.connect(this.analyser), this.getAudioLevel = function () {
                        if (this.analyser) {
                            this.analyser.getByteTimeDomainData(this.timeDomainData);
                            for (var e = 0, t = 0; t < this.timeDomainData.length; t++)
                                e = Math.max(e, Math.abs(this.timeDomainData[t] - 128));
                            return e / 128;
                        }
                        return r.default.warning('can\'t find analyser in audioLevelHelper'), 0;
                    }, this;
                };
            function f() {
                return d()().replace(/-/g, '').toUpperCase();
            }
            var m = function (e, t, n) {
                    try {
                        var i = document.createElement('video');
                        i.setAttribute('autoplay', ''), i.setAttribute('muted', ''), i.setAttribute('playsinline', ''), i.setAttribute('style', 'position: absolute; top: 0; left: 0; width:1px; high:1px;'), document.body.appendChild(i), i.addEventListener('playing', function (e) {
                            a.isFireFox() ? i.videoWidth && (t(i.videoWidth, i.videoHeight), document.body.removeChild(i)) : (t(i.videoWidth, i.videoHeight), document.body.removeChild(i));
                        }), Object(u.c)(i, e);
                    } catch (e) {
                        n(e);
                    }
                }, g = function (e) {
                    return 'number' == typeof e && 0 <= e && e <= 4294967295;
                }, v = function (e) {
                    var t = [
                        'lowLatency',
                        'userConfigExtraInfo',
                        'transcodingUsers'
                    ];
                    for (var n in e)
                        if ('lowLatency' === n && 'boolean' != typeof e[n] || 'userConfigExtraInfo' === n && 'object' !== o()(e[n]) || 'transcodingUsers' === n && !S(e[n]) || !~t.indexOf(n) && 'number' != typeof e[n])
                            throw new Error('Param [' + n + '] is inValid');
                    return !0;
                }, S = function (e) {
                    for (var t = 0; t < e.length; t++)
                        for (var n in e[t])
                            if ('number' != typeof e[t][n])
                                throw new Error('Param user[' + t + '] - [' + n + '] is inValid');
                    return !0;
                }, I = function (e) {
                    isNaN(e) && (e = 1000);
                    var t = +new Date(), n = (t = (9301 * t + 49297) % 233280) / 233280;
                    return Math.ceil(n * e);
                }, _ = function (e) {
                    var t = encodeURIComponent(e).match(/%[89ABab]/g);
                    return e.length + (t ? t.length : 0);
                }, h = function () {
                    if (!document.getElementById('agora-ban-tip')) {
                        var e = document.createElement('div');
                        e.id = 'agora-ban-tip', e.style = 'position: absolute; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; color: #fff;', document.querySelector('body').prepend(e);
                        var t = document.createElement('div');
                        t.style = 'background: #000; width: 346px; height: 116px; z-index: 100000; opacity: 0.6; border-radius: 10px; box-shadow: 0 2px 4px #000;', e.append(t);
                        var n = document.createElement('div');
                        n.style = 'height: 76px; display: flex; justify-content: center; align-items: center;';
                        var i = document.createElement('span');
                        i.style = 'height: 28px; width: 28px; color: #000; text-align: center; line-height: 30px; background: #fff; border-radius: 50%; font-weight: 600; font-size: 20px;margin-right: 5px;', i.innerText = '!';
                        var o = document.createElement('span');
                        o.innerText = 'This browser does not support webRTC', n.append(i), n.append(o);
                        var a = document.createElement('div');
                        a.style = 'height: 38px; display: flex; border-top: #fff 1px solid; justify-content: center; align-items: center;', a.innerText = 'OK', t.append(n), t.append(a), a.onclick = function () {
                            var e = document.getElementById('agora-ban-tip');
                            e.parentNode.removeChild(e);
                        };
                    }
                };
        },
        function (e, t, n) {
            n.d(t, 'a', function () {
                return _;
            }), n.d(t, 'b', function () {
                return r;
            }), n.d(t, 'c', function () {
                return c;
            });
            var i = n(6), o = n.n(i), a = null, r = null, s = null, d = null, c = null, u = null, l = null, p = { addStream: null }, f = {
                    log: function () {
                    },
                    extractVersion: function (e, t, n) {
                        var i = e.match(t);
                        return i && i.length >= n && parseInt(i[n]);
                    }
                };
            if ('object' == ('undefined' == 'object' ? 'undefined' : o()(window)) ? (!window.HTMLMediaElement || 'srcObject' in window.HTMLMediaElement.prototype ? (c = function (e, t) {
                    e.srcObject = t;
                }, u = function (e) {
                    return e.srcObject;
                }) : (c = function (e, t) {
                    'mozSrcObject' in e ? e.mozSrcObject = t : (e._srcObject = t, e.src = t ? URL.createObjectURL(t) : null);
                }, u = function (e) {
                    return 'mozSrcObject' in e ? e.mozSrcObject : e._srcObject;
                }), a = window.navigator && window.navigator.getUserMedia) : (c = function (e, t) {
                    e.srcObject = t;
                }, u = function (e) {
                    return e.srcObject;
                }), r = function (e, t) {
                    c(e, t);
                }, function (e, t) {
                    c(e, u(t));
                }, 'undefined' != 'object' && window.navigator)
                if (navigator.mozGetUserMedia && window.mozRTCPeerConnection) {
                    for (var m in (f.log('This appears to be Firefox'), 'firefox', s = f.extractVersion(navigator.userAgent, /Firefox\/([0-9]+)\./, 1), 31, l = mozRTCPeerConnection, p))
                        p[m] = l.prototype[m];
                    if (d = function (e, t) {
                            if (s < 38 && e && e.iceServers) {
                                for (var n = [], i = 0; i < e.iceServers.length; i++) {
                                    var o = e.iceServers[i];
                                    if (o.hasOwnProperty('urls'))
                                        for (var a = 0; a < o.urls.length; a++) {
                                            var r = { url: o.urls[a] };
                                            0 === o.urls[a].indexOf('turn') && (r.username = o.username, r.credential = o.credential), n.push(r);
                                        }
                                    else
                                        n.push(e.iceServers[i]);
                                }
                                e.iceServers = n;
                            }
                            var d = new l(e, t);
                            for (var c in p)
                                d[c] = p[c];
                            return d;
                        }, window.RTCSessionDescription || (window.RTCSessionDescription = mozRTCSessionDescription), window.RTCIceCandidate || (window.RTCIceCandidate = mozRTCIceCandidate), a = function (e, t, n) {
                            var i = function (e) {
                                if ('object' !== o()(e) || e.require)
                                    return e;
                                var t = [];
                                return Object.keys(e).forEach(function (n) {
                                    if ('require' !== n && 'advanced' !== n && 'mediaSource' !== n) {
                                        var i = e[n] = 'object' === o()(e[n]) ? e[n] : { ideal: e[n] };
                                        if (void 0 === i.min && void 0 === i.max && void 0 === i.exact || t.push(n), void 0 !== i.exact && ('number' == typeof i.exact ? i.min = i.max = i.exact : e[n] = i.exact, delete i.exact), void 0 !== i.ideal) {
                                            e.advanced = e.advanced || [];
                                            var a = {};
                                            'number' == typeof i.ideal ? a[n] = {
                                                min: i.ideal,
                                                max: i.ideal
                                            } : a[n] = i.ideal, e.advanced.push(a), delete i.ideal, Object.keys(i).length || delete e[n];
                                        }
                                    }
                                }), t.length && (e.require = t), e;
                            };
                            return s < 38 && (f.log('spec: ' + JSON.stringify(e)), e.audio && (e.audio = i(e.audio)), e.video && (e.video = i(e.video)), f.log('ff37: ' + JSON.stringify(e))), navigator.mozGetUserMedia(e, t, n);
                        }, navigator.getUserMedia = a, navigator.mediaDevices || (navigator.mediaDevices = {
                            getUserMedia: I,
                            addEventListener: function () {
                            },
                            removeEventListener: function () {
                            }
                        }), navigator.mediaDevices.enumerateDevices = navigator.mediaDevices.enumerateDevices || function () {
                            return new Promise(function (e) {
                                e([
                                    {
                                        kind: 'audioinput',
                                        deviceId: 'default',
                                        label: '',
                                        groupId: ''
                                    },
                                    {
                                        kind: 'videoinput',
                                        deviceId: 'default',
                                        label: '',
                                        groupId: ''
                                    }
                                ]);
                            });
                        }, s < 41) {
                        var g = navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
                        navigator.mediaDevices.enumerateDevices = function () {
                            return g().then(void 0, function (e) {
                                if ('NotFoundError' === e.name)
                                    return [];
                                throw e;
                            });
                        };
                    }
                } else if (navigator.webkitGetUserMedia && window.webkitRTCPeerConnection) {
                    for (var m in (f.log('This appears to be Chrome'), 'chrome', s = f.extractVersion(navigator.userAgent, /Chrom(e|ium)\/([0-9]+)\./, 2), 38, l = webkitRTCPeerConnection, p))
                        p[m] = l.prototype[m];
                    d = function (e, t) {
                        e && e.iceTransportPolicy && (e.iceTransports = e.iceTransportPolicy);
                        var n = new l(e, t);
                        for (var i in p)
                            n[i] = p[i];
                        var o = n.getStats.bind(n);
                        return n.getStats = function (e, t, n) {
                            var i = this, a = arguments;
                            if (arguments.length > 0 && 'function' == typeof e)
                                return o(e, t);
                            var r = function (e) {
                                var t = {};
                                return e.result().forEach(function (e) {
                                    var n = {
                                        id: e.id,
                                        timestamp: e.timestamp,
                                        type: e.type
                                    };
                                    e.names().forEach(function (t) {
                                        n[t] = e.stat(t);
                                    }), t[n.id] = n;
                                }), t;
                            };
                            if (arguments.length >= 2) {
                                return o.apply(this, [
                                    function (e) {
                                        a[1](r(e));
                                    },
                                    arguments[0]
                                ]);
                            }
                            return new Promise(function (t, n) {
                                1 === a.length && null === e ? o.apply(i, [
                                    function (e) {
                                        t.apply(null, [r(e)]);
                                    },
                                    n
                                ]) : o.apply(i, [
                                    t,
                                    n
                                ]);
                            });
                        }, n;
                    }, [
                        'createOffer',
                        'createAnswer'
                    ].forEach(function (e) {
                        var t = webkitRTCPeerConnection.prototype[e];
                        webkitRTCPeerConnection.prototype[e] = function () {
                            var e = this;
                            if (arguments.length < 1 || 1 === arguments.length && 'object' === o()(arguments[0])) {
                                var n = 1 === arguments.length ? arguments[0] : void 0;
                                return new Promise(function (i, o) {
                                    t.apply(e, [
                                        i,
                                        o,
                                        n
                                    ]);
                                });
                            }
                            return t.apply(this, arguments);
                        };
                    }), [
                        'setLocalDescription',
                        'setRemoteDescription',
                        'addIceCandidate'
                    ].forEach(function (e) {
                        var t = webkitRTCPeerConnection.prototype[e];
                        webkitRTCPeerConnection.prototype[e] = function () {
                            var e = arguments, n = this;
                            return new Promise(function (i, o) {
                                t.apply(n, [
                                    e[0],
                                    function () {
                                        i(), e.length >= 2 && e[1].apply(null, []);
                                    },
                                    function (t) {
                                        o(t), e.length >= 3 && e[2].apply(null, [t]);
                                    }
                                ]);
                            });
                        };
                    });
                    var v = function (e) {
                        if ('object' !== o()(e) || e.mandatory || e.optional)
                            return e;
                        var t = {};
                        return Object.keys(e).forEach(function (n) {
                            if ('require' !== n && 'advanced' !== n && 'mediaSource' !== n) {
                                var i = 'object' === o()(e[n]) ? e[n] : { ideal: e[n] };
                                void 0 !== i.exact && 'number' == typeof i.exact && (i.min = i.max = i.exact);
                                var a = function (e, t) {
                                    return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : 'deviceId' === t ? 'sourceId' : t;
                                };
                                if (void 0 !== i.ideal) {
                                    t.optional = t.optional || [];
                                    var r = {};
                                    'number' == typeof i.ideal ? (r[a('min', n)] = i.ideal, t.optional.push(r), (r = {})[a('max', n)] = i.ideal, t.optional.push(r)) : (r[a('', n)] = i.ideal, t.optional.push(r));
                                }
                                void 0 !== i.exact && 'number' != typeof i.exact ? (t.mandatory = t.mandatory || {}, t.mandatory[a('', n)] = i.exact) : [
                                    'min',
                                    'max'
                                ].forEach(function (e) {
                                    void 0 !== i[e] && (t.mandatory = t.mandatory || {}, t.mandatory[a(e, n)] = i[e]);
                                });
                            }
                        }), e.advanced && (t.optional = (t.optional || []).concat(e.advanced)), t;
                    };
                    if (a = function (e, t, n) {
                            return e.audio && (e.audio = v(e.audio)), e.video && (e.video = v(e.video)), f.log('chrome: ' + JSON.stringify(e)), navigator.webkitGetUserMedia(e, t, n);
                        }, navigator.getUserMedia = a, navigator.mediaDevices || (navigator.mediaDevices = {
                            getUserMedia: I,
                            enumerateDevices: function () {
                                return new Promise(function (e) {
                                    var t = {
                                        audio: 'audioinput',
                                        video: 'videoinput'
                                    };
                                    return MediaStreamTrack.getSources(function (n) {
                                        e(n.map(function (e) {
                                            return {
                                                label: e.label,
                                                kind: t[e.kind],
                                                deviceId: e.id,
                                                groupId: ''
                                            };
                                        }));
                                    });
                                });
                            }
                        }), navigator.mediaDevices.getUserMedia) {
                        var S = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
                        navigator.mediaDevices.getUserMedia = function (e) {
                            return f.log('spec:   ' + JSON.stringify(e)), e.audio = v(e.audio), e.video = v(e.video), f.log('chrome: ' + JSON.stringify(e)), S(e);
                        };
                    } else
                        navigator.mediaDevices.getUserMedia = function (e) {
                            return I(e);
                        };
                    void 0 === navigator.mediaDevices.addEventListener && (navigator.mediaDevices.addEventListener = function () {
                        f.log('Dummy mediaDevices.addEventListener called.');
                    }), void 0 === navigator.mediaDevices.removeEventListener && (navigator.mediaDevices.removeEventListener = function () {
                        f.log('Dummy mediaDevices.removeEventListener called.');
                    }), r = function (e, t) {
                        s >= 43 ? c(e, t) : void 0 !== e.src ? e.src = t ? URL.createObjectURL(t) : null : f.log('Error attaching stream to element.');
                    }, function (e, t) {
                        s >= 43 ? c(e, u(t)) : e.src = t.src;
                    };
                } else
                    navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/) ? (f.log('This appears to be Edge'), 'edge', s = f.extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2), 12) : f.log('Browser does not appear to be WebRTC-capable');
            else
                f.log('This does not appear to be a browser'), 'not a browser';
            function I(e) {
                return new Promise(function (t, n) {
                    a(e, t, n);
                });
            }
            var _;
            try {
                Object.defineProperty({}, 'version', {
                    set: function (e) {
                        s = e;
                    }
                });
            } catch (e) {
            }
            d ? _ = d : 'undefined' != 'object' && (_ = window.RTCPeerConnection);
        },
        function (e, t, n) {
            var i = n(15);
            e.exports = function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}, o = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    }))), o.forEach(function (t) {
                        i(e, t, n[t]);
                    });
                }
                return e;
            };
        },
        function (e, t, n) {
            n.d(t, 'a', function () {
                return o;
            });
            var i = window.AudioContext || window.webkitAudioContext, o = function () {
                    if (i)
                        return new i();
                    throw new Error('AUDIO_CONTEXT_NOT_SUPPORTED');
                };
        },
        function (e, t, n) {
            var i = n(13), o = n(14);
            e.exports = function (e, t, n) {
                var a = t && n || 0;
                'string' == typeof e && (t = 'binary' === e ? new Array(16) : null, e = null);
                var r = (e = e || {}).random || (e.rng || i)();
                if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t)
                    for (var s = 0; s < 16; ++s)
                        t[a + s] = r[s];
                return t || o(r);
            };
        },
        function (e, t, n) {
            var i = this && this.__awaiter || function (e, t, n, i) {
                return new (n || (n = Promise))(function (o, a) {
                    function r(e) {
                        try {
                            d(i.next(e));
                        } catch (e) {
                            a(e);
                        }
                    }
                    function s(e) {
                        try {
                            d(i.throw(e));
                        } catch (e) {
                            a(e);
                        }
                    }
                    function d(e) {
                        e.done ? o(e.value) : new n(function (t) {
                            t(e.value);
                        }).then(r, s);
                    }
                    d((i = i.apply(e, t || [])).next());
                });
            };
            Object.defineProperty(t, '__esModule', { value: !0 });
            const o = n(16), a = n(2), r = n(0);
            t.getSupportedCodec = e => i(this, void 0, void 0, function* () {
                const t = {
                    video: [],
                    audio: []
                };
                if ('undefined' == 'object') {
                    const e = 'NOT_BROWSER_ENV';
                    return r.default.error(`getSupportedCodec: ${ e }`), Promise.reject(e);
                }
                {
                    let n;
                    try {
                        n = o.createRTCPeerConnection({ iceServers: [] });
                    } catch (e) {
                        return r.default.error('Failed to init RTCPeerConnection', e), Promise.reject(e);
                    }
                    if (n) {
                        if (e && e.stream) {
                            let t;
                            e.stream.getTracks && n.addTrack ? e.stream.getTracks().forEach(t => {
                                n.addTrack(t, e.stream);
                            }) : n.addStream(e.stream), t = a.isSafari() || a.isFireFox() ? yield n.createOffer() : yield new Promise((e, t) => {
                                n.createOffer(e, t);
                            }), n.close();
                            const i = t.sdp;
                            return s(i);
                        }
                        {
                            const e = {
                                mandatory: {
                                    OfferToReceiveAudio: !0,
                                    OfferToReceiveVideo: !0
                                }
                            };
                            let t;
                            (a.isSafari() || a.isFireFox() || a.isWeChatBrowser()) && n.addTransceiver ? (n.addTransceiver('audio'), n.addTransceiver('video'), t = yield n.createOffer()) : t = yield new Promise((t, i) => {
                                const o = setTimeout(() => {
                                    i('CREATEOFFER_TIMEOUT');
                                }, 3000);
                                n.createOffer(e => {
                                    clearTimeout(o), t(e);
                                }, e => {
                                    clearTimeout(o), i(e);
                                }, e);
                            }), n.close();
                            const i = t.sdp;
                            return s(i);
                        }
                    }
                    return r.default.warning('getSupportedCodec: no RTCPeerConnection constructor is detected'), Promise.resolve(t);
                }
            });
            const s = e => {
                const t = {
                    video: [],
                    audio: []
                };
                return e.match(/ VP8/i) && t.video.push('VP8'), e.match(/ H264/i) && t.video.push('H264'), e.match(/ opus/i) && t.audio.push('OPUS'), Promise.resolve(t);
            };
        },
        function (e, t) {
            var n = 'undefined' != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || 'undefined' != typeof msCrypto && 'function' == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
            if (n) {
                var i = new Uint8Array(16);
                e.exports = function () {
                    return n(i), i;
                };
            } else {
                var o = new Array(16);
                e.exports = function () {
                    for (var e, t = 0; t < 16; t++)
                        0 == (3 & t) && (e = 4294967296 * Math.random()), o[t] = e >>> ((3 & t) << 3) & 255;
                    return o;
                };
            }
        },
        function (e, t) {
            for (var n = [], i = 0; i < 256; ++i)
                n[i] = (i + 256).toString(16).substr(1);
            e.exports = function (e, t) {
                var i = t || 0, o = n;
                return [
                    o[e[i++]],
                    o[e[i++]],
                    o[e[i++]],
                    o[e[i++]],
                    '-',
                    o[e[i++]],
                    o[e[i++]],
                    '-',
                    o[e[i++]],
                    o[e[i++]],
                    '-',
                    o[e[i++]],
                    o[e[i++]],
                    '-',
                    o[e[i++]],
                    o[e[i++]],
                    o[e[i++]],
                    o[e[i++]],
                    o[e[i++]],
                    o[e[i++]]
                ].join('');
            };
        },
        function (e, t) {
            e.exports = function (e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            };
        },
        function (e, t, n) {
            Object.defineProperty(t, '__esModule', { value: !0 });
            const i = 'object' == 'object' && window.RTCPeerConnection, o = 'object' == 'object' && window.webkitRTCPeerConnection, a = 'object' == 'object' && window.mozRTCPeerConnection;
            t.createRTCPeerConnection = e => {
                const t = i || o || a;
                return t ? new t(e) : null;
            };
        },
        function (e, t, n) {
            n.r(t);
            var i = n(3), o = n(0), a = n(1), r = function () {
                    var e = { dispatcher: {} };
                    return e.dispatcher.eventListeners = {}, e.addEventListener = function (t, n) {
                        void 0 === e.dispatcher.eventListeners[t] && (e.dispatcher.eventListeners[t] = []), e.dispatcher.eventListeners[t].push(n);
                    }, e.hasListeners = function (t) {
                        return !(!e.dispatcher.eventListeners[t] || !e.dispatcher.eventListeners[t].length);
                    }, e.on = e.addEventListener, e.removeEventListener = function (t, n) {
                        var i;
                        -1 !== (i = e.dispatcher.eventListeners[t].indexOf(n)) && e.dispatcher.eventListeners[t].splice(i, 1);
                    }, e.dispatchEvent = function (t) {
                        var n;
                        for (n in e.dispatcher.eventListeners[t.type])
                            e.dispatcher.eventListeners[t.type] && e.dispatcher.eventListeners[t.type].hasOwnProperty(n) && 'function' == typeof e.dispatcher.eventListeners[t.type][n] && e.dispatcher.eventListeners[t.type][n](t);
                    }, e.dispatchSocketEvent = function (t) {
                        var n;
                        for (n in e.dispatcher.eventListeners[t.type])
                            e.dispatcher.eventListeners[t.type] && e.dispatcher.eventListeners[t.type].hasOwnProperty(n) && 'function' == typeof e.dispatcher.eventListeners[t.type][n] && e.dispatcher.eventListeners[t.type][n](t.msg);
                    }, e;
                }, s = function (e) {
                    var t = {};
                    return t.type = e.type, t;
                }, d = function (e) {
                    var t = s(e);
                    return t.stream = e.stream, t.reason = e.reason, t.msg = e.msg, t;
                }, c = function (e) {
                    var t = s(e);
                    return t.uid = e.uid, t.attr = e.attr, t.stream = e.stream, t;
                }, u = function (e) {
                    var t = s(e);
                    return t.msg = e.msg, t;
                }, l = function (e) {
                    var t = s(e);
                    return t.url = e.url, t.uid = e.uid, t.status = e.status, t.reason = e.reason, t;
                }, p = n(2), f = function () {
                };
            f.prototype.set = function (e, t) {
                ['BatteryLevel'].indexOf(e) > -1 && (this[e] = t);
            };
            var m = new function () {
                    var e = r();
                    return e.states = {
                        UNINIT: 'UNINIT',
                        INITING: 'INITING',
                        INITED: 'INITED'
                    }, e.state = e.states.UNINIT, e.batteryManager = null, e._init = function (t, n) {
                        e.state = e.states.INITING, navigator.getBattery ? navigator.getBattery().then(function (n) {
                            e.batteryManager = n, t && setTimeout(function () {
                                t();
                            }, 0);
                        }).catch(function (e) {
                            o.default.debug('navigator.getBattery is disabled', e), t && t();
                        }) : (e.state = e.states.INITED, t && t());
                    }, e._getBatteryStats = function () {
                        var t = {};
                        return e.batteryManager && e.batteryManager.level ? t.BatteryLevel = Math.floor(100 * e.batteryManager.level) : t.BatteryLevel = 'UNSUPPORTED', t;
                    }, e.getStats = function (t, n) {
                        var i = new f(), o = e._getBatteryStats();
                        o && o.BatteryLevel && i.set('BatteryLevel', o.BatteryLevel), t && t(i);
                    }, e._init(), e;
                }(), g = n(6), v = n.n(g), S = n(4), I = n.n(S), _ = function (e) {
                    var t = r();
                    return t.url = '.', t;
                }, h = n(8), y = {
                    101100: 'NO_FLAG_SET',
                    101101: 'FLAG_SET_BUT_EMPTY',
                    101102: 'INVALID_FALG_SET',
                    101203: 'NO_SERVICE_AVIABLE',
                    0: 'OK_CODE',
                    5: 'INVALID_VENDOR_KEY',
                    7: 'INVALID_CHANNEL_NAME',
                    8: 'INTERNAL_ERROR',
                    9: 'NO_AUTHORIZED',
                    10: 'DYNAMIC_KEY_TIMEOUT',
                    11: 'NO_ACTIVE_STATUS',
                    13: 'DYNAMIC_KEY_EXPIRED',
                    14: 'STATIC_USE_DYANMIC_KEY',
                    15: 'DYNAMIC_USE_STATIC_KEY'
                }, b = {
                    2000: 'ERR_NO_VOCS_AVAILABLE',
                    2001: 'ERR_NO_VOS_AVAILABLE',
                    2002: 'ERR_JOIN_CHANNEL_TIMEOUT',
                    2003: 'WARN_REPEAT_JOIN',
                    2004: 'ERR_JOIN_BY_MULTI_IP',
                    101: 'ERR_INVALID_VENDOR_KEY',
                    102: 'ERR_INVALID_CHANNEL_NAME',
                    103: 'WARN_NO_AVAILABLE_CHANNEL',
                    104: 'WARN_LOOKUP_CHANNEL_TIMEOUT',
                    105: 'WARN_LOOKUP_CHANNEL_REJECTED',
                    106: 'WARN_OPEN_CHANNEL_TIMEOUT',
                    107: 'WARN_OPEN_CHANNEL_REJECTED',
                    108: 'WARN_REQUEST_DEFERRED',
                    109: 'ERR_DYNAMIC_KEY_TIMEOUT',
                    110: 'ERR_NO_AUTHORIZED',
                    111: 'ERR_VOM_SERVICE_UNAVAILABLE',
                    112: 'ERR_NO_CHANNEL_AVAILABLE_CODE',
                    113: 'ERR_TOO_MANY_USERS',
                    114: 'ERR_MASTER_VOCS_UNAVAILABLE',
                    115: 'ERR_INTERNAL_ERROR',
                    116: 'ERR_NO_ACTIVE_STATUS',
                    117: 'ERR_INVALID_UID',
                    118: 'ERR_DYNAMIC_KEY_EXPIRED',
                    119: 'ERR_STATIC_USE_DYANMIC_KE',
                    120: 'ERR_DYNAMIC_USE_STATIC_KE',
                    2: 'K_TIMESTAMP_EXPIRED',
                    3: 'K_CHANNEL_PERMISSION_INVALID',
                    4: 'K_CERTIFICATE_INVALID',
                    5: 'K_CHANNEL_NAME_EMPTY',
                    6: 'K_CHANNEL_NOT_FOUND',
                    7: 'K_TICKET_INVALID',
                    8: 'K_CHANNEL_CONFLICTED',
                    9: 'K_SERVICE_NOT_READY',
                    10: 'K_SERVICE_TOO_HEAVY',
                    14: 'K_UID_BANNED',
                    15: 'K_IP_BANNED',
                    16: 'K_CHANNEL_BANNED'
                }, E = ['NO_SERVICE_AVIABLE'], R = {
                    19: 'ERR_ALREADY_IN_USE',
                    10: 'ERR_TIMEDOUT',
                    3: 'ERR_NOT_READY',
                    9: 'ERR_NO_PERMISSION',
                    0: 'UNKNOW_ERROR'
                }, A = {
                    FAILED: 'FAILED',
                    INVALID_KEY: 'INVALID_KEY',
                    INVALID_CLIENT_MODE: 'INVALID_CLIENT_MODE',
                    INVALID_CLIENT_CODEC: 'INVALID_CLIENT_CODEC',
                    CLIENT_MODE_CODEC_MISMATCH: 'CLIENT_MODE_CODEC_MISMATCH',
                    WEB_API_NOT_SUPPORTED: 'WEB_API_NOT_SUPPORTED',
                    INVALID_PARAMETER: 'INVALID_PARAMETER',
                    INVALID_OPERATION: 'INVALID_OPERATION',
                    INVALID_LOCAL_STREAM: 'INVALID_LOCAL_STREAM',
                    INVALID_REMOTE_STREAM: 'INVALID_REMOTE_STREAM',
                    INVALID_DYNAMIC_KEY: 'INVALID_DYNAMIC_KEY',
                    DYNAMIC_KEY_TIMEOUT: 'DYNAMIC_KEY_TIMEOUT',
                    NO_VOCS_AVAILABLE: 'NO_VOCS_AVAILABLE',
                    NO_VOS_AVAILABLE: 'ERR_NO_VOS_AVAILABLE',
                    JOIN_CHANNEL_TIMEOUT: 'ERR_JOIN_CHANNEL_TIMEOUT',
                    NO_AVAILABLE_CHANNEL: 'NO_AVAILABLE_CHANNEL',
                    LOOKUP_CHANNEL_TIMEOUT: 'LOOKUP_CHANNEL_TIMEOUT',
                    LOOKUP_CHANNEL_REJECTED: 'LOOKUP_CHANNEL_REJECTED',
                    OPEN_CHANNEL_TIMEOUT: 'OPEN_CHANNEL_TIMEOUT',
                    OPEN_CHANNEL_REJECTED: 'OPEN_CHANNEL_REJECTED',
                    REQUEST_DEFERRED: 'REQUEST_DEFERRED',
                    STREAM_ALREADY_PUBLISHED: 'STREAM_ALREADY_PUBLISHED',
                    STREAM_NOT_YET_PUBLISHED: 'STREAM_NOT_YET_PUBLISHED',
                    JOIN_TOO_FREQUENT: 'JOIN_TOO_FREQUENT',
                    SOCKET_ERROR: 'SOCKET_ERROR',
                    SOCKET_DISCONNECTED: 'SOCKET_DISCONNECTED',
                    PEERCONNECTION_FAILED: 'PEERCONNECTION_FAILED',
                    CONNECT_GATEWAY_ERROR: 'CONNECT_GATEWAY_ERROR',
                    SERVICE_NOT_AVAILABLE: 'SERVICE_NOT_AVAILABLE',
                    JOIN_CHANNEL_FAILED: 'JOIN_CHANNEL_FAILED',
                    PUBLISH_STREAM_FAILED: 'PUBLISH_STREAM_FAILED',
                    UNPUBLISH_STREAM_FAILED: 'UNPUBLISH_STREAM_FAILED',
                    SUBSCRIBE_STREAM_FAILED: 'SUBSCRIBE_STREAM_FAILED',
                    UNSUBSCRIBE_STREAM_FAILED: 'UNSUBSCRIBE_STREAM_FAILED',
                    NO_SUCH_REMOTE_STREAM: 'NO_SUCH_REMOTE_STREAM',
                    ERR_FAILED: '1',
                    ERR_INVALID_VENDOR_KEY: '101',
                    ERR_INVALID_CHANNEL_NAME: '102',
                    WARN_NO_AVAILABLE_CHANNEL: '103',
                    WARN_LOOKUP_CHANNEL_TIMEOUT: '104',
                    WARN_LOOKUP_CHANNEL_REJECTED: '105',
                    WARN_OPEN_CHANNEL_TIMEOUT: '106',
                    WARN_OPEN_CHANNEL_REJECTED: '107',
                    WARN_REQUEST_DEFERRED: '108',
                    ERR_DYNAMIC_KEY_TIMEOUT: '109',
                    ERR_INVALID_DYNAMIC_KEY: '110',
                    ERR_NO_VOCS_AVAILABLE: '2000',
                    ERR_NO_VOS_AVAILABLE: '2001',
                    ERR_JOIN_CHANNEL_TIMEOUT: '2002',
                    IOS_NOT_SUPPORT: 'IOS_NOT_SUPPORT',
                    WECHAT_NOT_SUPPORT: 'WECHAT_NOT_SUPPORT',
                    SHARING_SCREEN_NOT_SUPPORT: 'SHARING_SCREEN_NOT_SUPPORT',
                    STILL_ON_PUBLISHING: 'STILL_ON_PUBLISHING',
                    LOW_STREAM_ALREADY_PUBLISHED: 'LOW_STREAM_ALREADY_PUBLISHED',
                    LOW_STREAM_NOT_YET_PUBLISHED: 'LOW_STREAM_ALREADY_PUBLISHED',
                    HIGH_STREAM_NOT_VIDEO_TRACE: 'HIGH_STREAM_NOT_VIDEO_TRACE',
                    NOT_FIND_DEVICE_BY_LABEL: 'NOT_FIND_DEVICE_BY_LABEL',
                    ENABLE_DUALSTREAM_FAILED: 'ENABLE_DUALSTREAM_FAILED',
                    DISABLE_DUALSTREAM_FAILED: 'DISABLE_DUALSTREAM_FAILED',
                    PLAYER_NOT_FOUND: 'PLAYER_NOT_FOUND',
                    ELECTRON_NOT_SUPPORT_SHARING_SCREEN: 'ELECTRON_NOT_SUPPORT_SHARING_SCREEN',
                    BAD_ENVIRONMENT: 'BAD_ENVIRONMENT'
                }, T = function (e) {
                    var t = _({});
                    t.id = e.id, t.fit = e.options && e.options.fit, 'contain' !== t.fit && 'cover' !== t.fit && (t.fit = null), t.url = e.url, t.stream = e.stream.stream, t.elementID = e.elementID, t.setAudioOutput = function (e, n, i) {
                        var a = t.video || t.audio;
                        return a ? a.setSinkId ? void a.setSinkId(e).then(function () {
                            return o.default.debug('[' + t.id + '] ' + 'video '.concat(t.id, ' setAudioOutput ').concat(e, ' SUCCESS')), a == t.video && t.audio ? t.audio.setSinkId(e) : Promise.resolve();
                        }).then(function () {
                            return o.default.debug('[' + t.id + '] ' + 'audio '.concat(t.id, ' setAudioOutput ').concat(e, ' SUCCESS')), n && n();
                        }).catch(function (e) {
                            return o.default.error('[' + t.id + '] VideoPlayer.setAudioOutput', e), i && i(e);
                        }) : (o.default.error('[' + t.id + '] ', A.WEB_API_NOT_SUPPORTED), i && i(A.WEB_API_NOT_SUPPORTED)) : (o.default.error('[' + t.id + '] ', A.PLAYER_NOT_FOUND), i && i(A.PLAYER_NOT_FOUND));
                    }, t.destroy = function () {
                        Object(h.c)(t.video, null), Object(h.c)(t.audio, null), t.video.pause(), delete t.resizer, document.getElementById(t.div.id) && t.parentNode.contains(t.div) && t.parentNode.removeChild(t.div);
                    }, t.div = document.createElement('div'), t.div.setAttribute('id', 'player_' + t.id), e.stream.video ? t.div.setAttribute('style', 'width: 100%; height: 100%; position: relative; background-color: black; overflow: hidden;') : t.div.setAttribute('style', 'width: 100%; height: 100%; position: relative; overflow: hidden;'), t.video = document.createElement('video'), t.video.setAttribute('id', 'video' + t.id), e.stream.local && !e.stream.screen ? e.stream.mirror ? t.video.setAttribute('style', 'width: 100%; height: 100%; position: absolute; transform: rotateY(180deg); object-fit: '.concat(t.fit || 'cover', ';')) : t.video.setAttribute('style', 'width: 100%; height: 100%; position: absolute; object-fit: '.concat(t.fit || 'cover', ';')) : e.stream.video ? t.video.setAttribute('style', 'width: 100%; height: 100%; position: absolute; object-fit: '.concat(t.fit || 'cover', ';')) : e.stream.screen ? t.video.setAttribute('style', 'width: 100%; height: 100%; position: absolute; object-fit: '.concat(t.fit || 'contain')) : t.video.setAttribute('style', 'width: 100%; height: 100%; position: absolute; display: none; object-fit: '.concat(t.fit || 'cover'));
                    var n = {
                            autoplay: !0,
                            muted: !!e.stream.local || !(!p.isSafari() && 'iOS' !== p.getBrowserOS()) && 'video_element_muted',
                            playsinline: !0,
                            controls: !(!p.isSafari() && 'iOS' !== p.getBrowserOS() || e.stream.local),
                            volume: null
                        }, i = I()({}, n, e.options);
                    if (!0 !== i.muted || i.volume || (i.volume = 0), i.autoplay && t.video.setAttribute('autoplay', ''), !0 !== i.muted && 'video_element_muted' !== i.muted || (t.video.setAttribute('muted', ''), t.video.muted = !0), i.playsinline && t.video.setAttribute('playsinline', ''), i.controls && t.video.setAttribute('controls', ''), Number.isFinite(i.volume) && (t.video.volume = i.volume), t.audio = document.createElement('audio'), t.audio.setAttribute('id', 'audio' + t.id), i.autoplay && t.audio.setAttribute('autoplay', ''), !0 === i.muted && t.audio.setAttribute('muted', ''), !0 === i.muted && (t.audio.muted = !0), i.playsinline && t.audio.setAttribute('playsinline', ''), Number.isFinite(i.volume) && (t.audio.volume = i.volume), void 0 !== t.elementID ? (document.getElementById(t.elementID).appendChild(t.div), t.container = document.getElementById(t.elementID)) : (document.body.appendChild(t.div), t.container = document.body), t.parentNode = t.div.parentNode, t.video.addEventListener('playing', function (e) {
                            !function e() {
                                t.video.videoWidth * t.video.videoHeight > 4 ? o.default.debug('[' + t.id + '] video dimensions:', t.video.videoWidth, t.video.videoHeight) : setTimeout(e, 50);
                            }();
                        }), e.stream.hasVideo() || e.stream.hasScreen())
                        t.div.appendChild(t.video), t.div.appendChild(t.audio), Object(h.b)(t.video, e.stream.stream), Object(h.b)(t.audio, e.stream.stream);
                    else if (!1 !== i.muted && 'video_element_muted' !== i.muted || (t.video.removeAttribute('muted'), t.video.muted = !1, t.div.appendChild(t.video)), window.MediaStream && p.isSafari()) {
                        var a = new MediaStream(e.stream.stream.getAudioTracks());
                        Object(h.c)(t.video, a);
                    } else
                        Object(h.c)(t.video, e.stream.stream);
                    return t.setAudioVolume = function (e) {
                        var n = parseInt(e) / 100;
                        isFinite(n) && (n < 0 ? n = 0 : n > 1 && (n = 1), t.video && (t.video.volume = n), t.audio && (t.audio.volume = n));
                    }, t;
                }, O = function (e) {
                    var t = {}, n = webkitRTCPeerConnection;
                    t.pc_config = { iceServers: [] }, t.con = { optional: [{ DtlsSrtpKeyAgreement: !0 }] }, e.iceServers instanceof Array ? t.pc_config.iceServers = e.iceServers : (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function (e) {
                        'string' == typeof e && '' !== e && t.pc_config.iceServers.push({ url: e });
                    }) : 'string' == typeof e.stunServerUrl && '' !== e.stunServerUrl && t.pc_config.iceServers.push({ url: e.stunServerUrl })), e.turnServer && (e.turnServer instanceof Array ? e.turnServer.map(function (e) {
                        'string' == typeof e.url && '' !== e.url && t.pc_config.iceServers.push({
                            username: e.username,
                            credential: e.password,
                            url: e.url
                        });
                    }) : 'string' == typeof e.turnServer.url && '' !== e.turnServer.url && t.pc_config.iceServers.push({
                        username: e.turnServer.username,
                        credential: e.turnServer.password,
                        url: e.turnServer.url
                    }))), void 0 === e.audio && (e.audio = !0), void 0 === e.video && (e.video = !0), t.mediaConstraints = {
                        mandatory: {
                            OfferToReceiveVideo: e.video,
                            OfferToReceiveAudio: e.audio
                        }
                    }, t.roapSessionId = 103, t.peerConnection = new n(t.pc_config, t.con), t.peerConnection.onicecandidate = function (e) {
                        e.candidate ? t.iceCandidateCount += 1 : (o.default.debug('PeerConnection State: ' + t.peerConnection.iceGatheringState), void 0 === t.ices && (t.ices = 0), t.ices = t.ices + 1, t.ices >= 1 && t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded()));
                    };
                    var i = function (t) {
                        var n, i;
                        return e.minVideoBW && e.maxVideoBW && (i = (n = t.match(/m=video.*\r\n/))[0] + 'b=AS:' + e.maxVideoBW + '\r\n', t = t.replace(n[0], i), o.default.debug('Set Video Bitrate - min:' + e.minVideoBW + ' max:' + e.maxVideoBW)), e.maxAudioBW && (i = (n = t.match(/m=audio.*\r\n/))[0] + 'b=AS:' + e.maxAudioBW + '\r\n', t = t.replace(n[0], i)), t;
                    };
                    return t.processSignalingMessage = function (e) {
                        var n, o = JSON.parse(e);
                        t.incomingMessage = o, 'new' === t.state ? 'OFFER' === o.messageType ? (n = {
                            sdp: o.sdp,
                            type: 'offer'
                        }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.state = 'offer-received', t.markActionNeeded()) : t.error('Illegal message for this state: ' + o.messageType + ' in state ' + t.state) : 'offer-sent' === t.state ? 'ANSWER' === o.messageType ? ((n = {
                            sdp: o.sdp,
                            type: 'answer'
                        }).sdp = i(n.sdp), t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.sendOK(), t.state = 'established') : 'pr-answer' === o.messageType ? (n = {
                            sdp: o.sdp,
                            type: 'pr-answer'
                        }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(n))) : 'offer' === o.messageType ? t.error('Not written yet') : t.error('Illegal message for this state: ' + o.messageType + ' in state ' + t.state) : 'established' === t.state && ('OFFER' === o.messageType ? (n = {
                            sdp: o.sdp,
                            type: 'offer'
                        }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.state = 'offer-received', t.markActionNeeded()) : t.error('Illegal message for this state: ' + o.messageType + ' in state ' + t.state));
                    }, t.addStream = function (e) {
                        t.peerConnection.addStream(e), t.markActionNeeded();
                    }, t.removeStream = function () {
                        t.markActionNeeded();
                    }, t.close = function () {
                        t.state = 'closed', t.peerConnection.close();
                    }, t.markActionNeeded = function () {
                        t.actionNeeded = !0, t.doLater(function () {
                            t.onstablestate();
                        });
                    }, t.doLater = function (e) {
                        window.setTimeout(e, 1);
                    }, t.onstablestate = function () {
                        var e;
                        if (t.actionNeeded) {
                            if ('new' === t.state || 'established' === t.state)
                                t.peerConnection.createOffer(function (e) {
                                    if (e.sdp = i(e.sdp), o.default.debug('Changed', e.sdp), e.sdp !== t.prevOffer)
                                        return t.peerConnection.setLocalDescription(e), t.state = 'preparing-offer', void t.markActionNeeded();
                                    o.default.debug('Not sending a new offer');
                                }, function (e) {
                                    o.default.debug('peer connection create offer failed ', e);
                                }, t.mediaConstraints);
                            else if ('preparing-offer' === t.state) {
                                if (t.moreIceComing)
                                    return;
                                t.prevOffer = t.peerConnection.localDescription.sdp, t.sendMessage('OFFER', t.prevOffer), t.state = 'offer-sent';
                            } else if ('offer-received' === t.state)
                                t.peerConnection.createAnswer(function (e) {
                                    if (t.peerConnection.setLocalDescription(e), t.state = 'offer-received-preparing-answer', t.iceStarted)
                                        t.markActionNeeded();
                                    else {
                                        var n = new Date();
                                        o.default.debug(n.getTime() + ': Starting ICE in responder'), t.iceStarted = !0;
                                    }
                                }, function (e) {
                                    o.default.debug('peer connection create answer failed ', e);
                                }, t.mediaConstraints);
                            else if ('offer-received-preparing-answer' === t.state) {
                                if (t.moreIceComing)
                                    return;
                                e = t.peerConnection.localDescription.sdp, t.sendMessage('ANSWER', e), t.state = 'established';
                            } else
                                t.error('Dazed and confused in state ' + t.state + ', stopping here');
                            t.actionNeeded = !1;
                        }
                    }, t.sendOK = function () {
                        t.sendMessage('OK');
                    }, t.sendMessage = function (e, n) {
                        var i = {};
                        i.messageType = e, i.sdp = n, 'OFFER' === e ? (i.offererSessionId = t.sessionId, i.answererSessionId = t.otherSessionId, i.seq = t.sequenceNumber += 1, i.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (i.offererSessionId = t.incomingMessage.offererSessionId, i.answererSessionId = t.sessionId, i.seq = t.incomingMessage.seq), t.onsignalingmessage(JSON.stringify(i));
                    }, t._getSender = function (e) {
                        if (t.peerConnection && t.peerConnection.getSenders) {
                            var n = t.peerConnection.getSenders().find(function (t) {
                                return t.track.kind == e;
                            });
                            if (n)
                                return n;
                        }
                        return null;
                    }, t.hasSender = function (e) {
                        return !!t._getSender(e);
                    }, t.replaceTrack = function (e, n, i) {
                        var o = t._getSender(e.kind);
                        if (!o)
                            return i('NO_SENDER_FOUND');
                        try {
                            o.replaceTrack(e);
                        } catch (e) {
                            return i && i(e);
                        }
                        setTimeout(function () {
                            return n && n();
                        }, 50);
                    }, t.error = function (e) {
                        throw 'Error in RoapOnJsep: ' + e;
                    }, t.sessionId = t.roapSessionId += 1, t.sequenceNumber = 0, t.actionNeeded = !1, t.iceStarted = !1, t.moreIceComing = !0, t.iceCandidateCount = 0, t.onsignalingmessage = e.callback, t.peerConnection.onopen = function () {
                        t.onopen && t.onopen();
                    }, t.peerConnection.onaddstream = function (e) {
                        t.onaddstream && t.onaddstream(e);
                    }, t.peerConnection.onremovestream = function (e) {
                        t.onremovestream && t.onremovestream(e);
                    }, t.peerConnection.oniceconnectionstatechange = function (e) {
                        t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState);
                    }, t.onaddstream = null, t.onremovestream = null, t.state = 'new', t.markActionNeeded(), t;
                }, C = function (e) {
                    var t = {}, n = h.a;
                    t.uid = e.uid, t.isVideoMute = e.isVideoMute, t.isAudioMute = e.isAudioMute, t.isSubscriber = e.isSubscriber, t.clientId = e.clientId, t.pc_config = { iceServers: [{ url: 'stun:webcs.agora.io:3478' }] }, t.con = { optional: [{ DtlsSrtpKeyAgreement: !0 }] }, e.iceServers instanceof Array ? t.pc_config.iceServers = e.iceServers : (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function (e) {
                        'string' == typeof e && '' !== e && t.pc_config.iceServers.push({ url: e });
                    }) : 'string' == typeof e.stunServerUrl && '' !== e.stunServerUrl && t.pc_config.iceServers.push({ url: e.stunServerUrl })), e.turnServer && (e.turnServer instanceof Array ? e.turnServer.map(function (e) {
                        'string' == typeof e.url && '' !== e.url && t.pc_config.iceServers.push({
                            username: e.username,
                            credential: e.credential,
                            url: e.url
                        });
                    }) : 'string' == typeof e.turnServer.url && '' !== e.turnServer.url && (t.pc_config.iceServers.push({
                        username: e.turnServer.username,
                        credential: e.turnServer.credential,
                        credentialType: 'password',
                        urls: 'turn:' + e.turnServer.url + ':' + e.turnServer.udpport + '?transport=udp'
                    }), 'string' == typeof e.turnServer.tcpport && '' !== e.turnServer.tcpport && t.pc_config.iceServers.push({
                        username: e.turnServer.username,
                        credential: e.turnServer.credential,
                        credentialType: 'password',
                        urls: 'turn:' + e.turnServer.url + ':' + e.turnServer.tcpport + '?transport=tcp'
                    }), !0 === e.turnServer.forceturn && (t.pc_config.iceTransportPolicy = 'relay')))), void 0 === e.audio && (e.audio = !0), void 0 === e.video && (e.video = !0), t.mediaConstraints = {
                        mandatory: {
                            OfferToReceiveVideo: e.video,
                            OfferToReceiveAudio: e.audio
                        }
                    }, t.roapSessionId = 103;
                    try {
                        t.pc_config.sdpSemantics = 'plan-b', t.peerConnection = new n(t.pc_config, t.con);
                    } catch (e) {
                        delete t.pc_config.sdpSemantics, t.peerConnection = new n(t.pc_config, t.con);
                    }
                    t.peerConnection.onicecandidate = function (e) {
                        var n, i, a, r;
                        i = (n = t.peerConnection.localDescription.sdp).match(/a=candidate:.+typ\ssrflx.+\r\n/), a = n.match(/a=candidate:.+typ\shost.+\r\n/), r = n.match(/a=candidate:.+typ\srelay.+\r\n/), 0 === t.iceCandidateCount && (t.timeout = setTimeout(function () {
                            t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded());
                        }, 1000)), null === i && null === a && null === r || void 0 !== t.ice || (o.default.debug('[' + t.clientId + ']srflx candidate : ' + i + ' relay candidate: ' + r + ' host candidate : ' + a), clearTimeout(t.timeout), t.ice = 0, t.moreIceComing = !1, t.markActionNeeded()), t.iceCandidateCount = t.iceCandidateCount + 1;
                    }, o.default.debug('[' + t.clientId + ']Created webkitRTCPeerConnnection with config "' + JSON.stringify(t.pc_config) + '".');
                    var i = function (t) {
                            return e.screen && (t = t.replace('a=x-google-flag:conference\r\n', '')), t;
                        }, a = function (n) {
                            var i, a;
                            if (e.minVideoBW && e.maxVideoBW) {
                                a = (i = n.match(/m=video.*\r\n/))[0] + 'b=AS:' + e.maxVideoBW + '\r\n';
                                var r = 0, s = 0;
                                'h264' === e.codec ? (r = n.search(/a=rtpmap:(\d+) H264\/90000\r\n/), s = n.search(/H264\/90000\r\n/)) : 'vp8' === e.codec && (r = n.search(/a=rtpmap:(\d+) VP8\/90000\r\n/), s = n.search(/VP8\/90000\r\n/)), -1 !== r && -1 !== s && s - r > 10 && (a = a + 'a=fmtp:' + n.slice(r + 9, s - 1) + ' x-google-min-bitrate=' + e.minVideoBW + '\r\n'), n = n.replace(i[0], a), o.default.debug('[' + t.clientId + ']Set Video Bitrate - min:' + e.minVideoBW + ' max:' + e.maxVideoBW);
                            }
                            return e.maxAudioBW && (a = (i = n.match(/m=audio.*\r\n/))[0] + 'b=AS:' + e.maxAudioBW + '\r\n', n = n.replace(i[0], a)), n;
                        };
                    return t.processSignalingMessage = function (e) {
                        var n, o = JSON.parse(e);
                        t.incomingMessage = o, 'new' === t.state ? 'OFFER' === o.messageType ? (n = {
                            sdp: o.sdp,
                            type: 'offer'
                        }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.state = 'offer-received', t.markActionNeeded()) : t.error('Illegal message for this state: ' + o.messageType + ' in state ' + t.state) : 'offer-sent' === t.state ? 'ANSWER' === o.messageType ? ((n = {
                            sdp: o.sdp,
                            type: 'answer'
                        }).sdp = i(n.sdp), n.sdp = a(n.sdp), t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.sendOK(), t.state = 'established') : 'pr-answer' === o.messageType ? (n = {
                            sdp: o.sdp,
                            type: 'pr-answer'
                        }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(n))) : 'offer' === o.messageType ? t.error('Not written yet') : t.error('Illegal message for this state: ' + o.messageType + ' in state ' + t.state) : 'established' === t.state && ('OFFER' === o.messageType ? (n = {
                            sdp: o.sdp,
                            type: 'offer'
                        }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.state = 'offer-received', t.markActionNeeded()) : 'ANSWER' === o.messageType ? ((n = {
                            sdp: o.sdp,
                            type: 'answer'
                        }).sdp = i(n.sdp), n.sdp = a(n.sdp), t.peerConnection.setRemoteDescription(new RTCSessionDescription(n))) : t.error('Illegal message for this state: ' + o.messageType + ' in state ' + t.state));
                    }, t.getVideoRelatedStats = function (e) {
                        t.peerConnection.getStats(null, function (n) {
                            Object.keys(n).forEach(function (i) {
                                var o = n[i];
                                t.isSubscriber ? 'video' === o.mediaType && o.id && ~o.id.indexOf('recv') && e && e({
                                    mediaType: 'video',
                                    peerId: t.uid,
                                    isVideoMute: t.isVideoMute,
                                    frameRateReceived: o.googFrameRateReceived,
                                    frameRateDecoded: o.googFrameRateDecoded,
                                    bytesReceived: o.bytesReceived,
                                    packetsReceived: o.packetsReceived,
                                    packetsLost: o.packetsLost
                                }) : 'video' === o.mediaType && o.id && ~o.id.indexOf('send') && e && e({
                                    mediaType: 'video',
                                    isVideoMute: t.isVideoMute,
                                    frameRateInput: o.googFrameRateInput,
                                    frameRateSent: o.googFrameRateSent,
                                    googRtt: o.googRtt
                                });
                            });
                        });
                    }, t.getAudioRelatedStats = function (e) {
                        t.peerConnection.getStats(null, function (n) {
                            Object.keys(n).forEach(function (i) {
                                var o = n[i];
                                t.isSubscriber && 'audio' === o.mediaType && o.id && ~o.id.indexOf('recv') && e && e({
                                    mediaType: 'audio',
                                    peerId: t.uid,
                                    isAudioMute: t.isAudioMute,
                                    frameDropped: parseInt(o.googDecodingPLC) + parseInt(o.googDecodingPLCCNG) + '',
                                    frameReceived: o.googDecodingCTN,
                                    googJitterReceived: o.googJitterReceived,
                                    bytesReceived: o.bytesReceived,
                                    packetsReceived: o.packetsReceived,
                                    packetsLost: o.packetsLost
                                });
                            });
                        });
                    }, t.getStatsRate = function (e) {
                        t.getStats(function (t) {
                            e(t);
                        });
                    }, t.getStats = function (e) {
                        t.peerConnection.getStats(null, function (n) {
                            var i = [], o = [], a = null;
                            Object.keys(n).forEach(function (e) {
                                var t = n[e];
                                o.push(t), 'ssrc' !== t.type && 'VideoBwe' !== t.type || (a = t.timestamp, i.push(t));
                            }), i.push({
                                id: 'time',
                                startTime: t.connectedTime,
                                timestamp: a || new Date()
                            }), e(i, o);
                        });
                    }, t.addTrack = function (e, n) {
                        t.peerConnection.addTrack(e, n);
                    }, t.removeTrack = function (e, n) {
                        t.peerConnection.removeTrack(t.peerConnection.getSenders().find(function (t) {
                            return t.track == e;
                        }));
                    }, t.addStream = function (e) {
                        t.peerConnection.addStream(e), t.markActionNeeded();
                    }, t.removeStream = function () {
                        t.markActionNeeded();
                    }, t.close = function () {
                        t.state = 'closed', t.peerConnection.close();
                    }, t.markActionNeeded = function () {
                        t.actionNeeded = !0, t.doLater(function () {
                            t.onstablestate();
                        });
                    }, t.doLater = function (e) {
                        window.setTimeout(e, 1);
                    }, t.onstablestate = function () {
                        var e;
                        if (t.actionNeeded) {
                            if ('new' === t.state || 'established' === t.state)
                                t.peerConnection.createOffer(function (e) {
                                    if (e.sdp !== t.prevOffer)
                                        return t.peerConnection.setLocalDescription(e), t.state = 'preparing-offer', void t.markActionNeeded();
                                    o.default.debug('[' + t.clientId + ']Not sending a new offer');
                                }, function (e) {
                                    o.default.debug('[' + t.clientId + ']peer connection create offer failed ', e);
                                }, t.mediaConstraints);
                            else if ('preparing-offer' === t.state) {
                                if (t.moreIceComing)
                                    return;
                                t.prevOffer = t.peerConnection.localDescription.sdp, t.prevOffer = t.prevOffer.replace(/a=candidate:.+typ\shost.+\r\n/g, 'a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n'), t.sendMessage('OFFER', t.prevOffer), t.state = 'offer-sent';
                            } else if ('offer-received' === t.state)
                                t.peerConnection.createAnswer(function (e) {
                                    if (t.peerConnection.setLocalDescription(e), t.state = 'offer-received-preparing-answer', t.iceStarted)
                                        t.markActionNeeded();
                                    else {
                                        var n = new Date();
                                        o.default.debug('[' + t.clientId + ']' + n.getTime() + ': Starting ICE in responder'), t.iceStarted = !0;
                                    }
                                }, function (e) {
                                    o.default.debug('[' + t.clientId + ']peer connection create answer failed ', e);
                                }, t.mediaConstraints);
                            else if ('offer-received-preparing-answer' === t.state) {
                                if (t.moreIceComing)
                                    return;
                                e = t.peerConnection.localDescription.sdp, t.sendMessage('ANSWER', e), t.state = 'established';
                            } else
                                t.error('Dazed and confused in state ' + t.state + ', stopping here');
                            t.actionNeeded = !1;
                        }
                    }, t.sendOK = function () {
                        t.sendMessage('OK');
                    }, t.sendMessage = function (e, n) {
                        var i = {};
                        i.messageType = e, i.sdp = n, 'OFFER' === e ? (i.offererSessionId = t.sessionId, i.answererSessionId = t.otherSessionId, i.seq = t.sequenceNumber += 1, i.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (i.offererSessionId = t.incomingMessage.offererSessionId, i.answererSessionId = t.sessionId, i.seq = t.incomingMessage.seq), t.onsignalingmessage(JSON.stringify(i));
                    }, t._getSender = function (e) {
                        if (t.peerConnection && t.peerConnection.getSenders) {
                            var n = t.peerConnection.getSenders().find(function (t) {
                                return t.track.kind == e;
                            });
                            if (n)
                                return n;
                        }
                        return null;
                    }, t.hasSender = function (e) {
                        return !!t._getSender(e);
                    }, t.replaceTrack = function (e, n, i) {
                        var o = t._getSender(e.kind);
                        if (!o)
                            return i('NO_SENDER_FOUND');
                        try {
                            o.replaceTrack(e);
                        } catch (e) {
                            return i && i(e);
                        }
                        setTimeout(function () {
                            return n && n();
                        }, 50);
                    }, t.error = function (e) {
                        throw 'Error in RoapOnJsep: ' + e;
                    }, t.sessionId = t.roapSessionId += 1, t.sequenceNumber = 0, t.actionNeeded = !1, t.iceStarted = !1, t.moreIceComing = !0, t.iceCandidateCount = 0, t.onsignalingmessage = e.callback, t.peerConnection.ontrack = function (e) {
                        t.onaddstream && (t.onaddstream(e, 'ontrack'), t.peerConnection.onaddstream = null);
                    }, t.peerConnection.onaddstream = function (e) {
                        t.onaddstream && (t.onaddstream(e, 'onaddstream'), t.peerConnection.ontrack = null);
                    }, t.peerConnection.onremovestream = function (e) {
                        t.onremovestream && t.onremovestream(e);
                    }, t.peerConnection.oniceconnectionstatechange = function (e) {
                        'connected' === e.currentTarget.iceConnectionState && (t.connectedTime = new Date()), t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState);
                    }, t.peerConnection.onnegotiationneeded = function () {
                        void 0 !== t.prevOffer && t.peerConnection.createOffer().then(function (e) {
                            return e.sdp = e.sdp.replace(/a=recvonly\r\n/g, 'a=inactive\r\n'), e.sdp = i(e.sdp), e.sdp = a(e.sdp), t.peerConnection.setLocalDescription(e);
                        }).then(function () {
                            t.onnegotiationneeded && t.onnegotiationneeded(t.peerConnection.localDescription.sdp);
                        }).catch(function (e) {
                            console.log('createOffer error: ', e);
                        });
                    }, t.onaddstream = null, t.onremovestream = null, t.onnegotiationneeded = null, t.state = 'new', t.markActionNeeded(), t;
                }, N = function (e) {
                    var t = {}, n = h.a;
                    t.uid = e.uid, t.isVideoMute = e.isVideoMute, t.isAudioMute = e.isAudioMute, t.isSubscriber = e.isSubscriber, t.clientId = e.clientId, t.pc_config = {
                        iceServers: [{
                                urls: [
                                    'stun:webcs.agora.io:3478',
                                    'stun:stun.l.google.com:19302'
                                ]
                            }],
                        bundlePolicy: 'max-bundle'
                    }, t.con = { optional: [{ DtlsSrtpKeyAgreement: !0 }] }, e.iceServers instanceof Array ? t.pc_config.iceServers = e.iceServers : (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function (e) {
                        'string' == typeof e && '' !== e && t.pc_config.iceServers.push({ url: e });
                    }) : 'string' == typeof e.stunServerUrl && '' !== e.stunServerUrl && t.pc_config.iceServers.push({ url: e.stunServerUrl })), e.turnServer && (e.turnServer instanceof Array ? e.turnServer.map(function (e) {
                        'string' == typeof e.url && '' !== e.url && t.pc_config.iceServers.push({
                            username: e.username,
                            credential: e.credential,
                            url: e.url
                        });
                    }) : 'string' == typeof e.turnServer.url && '' !== e.turnServer.url && (t.pc_config.iceServers.push({
                        username: e.turnServer.username,
                        credential: e.turnServer.credential,
                        credentialType: 'password',
                        urls: ['turn:' + e.turnServer.url + ':' + e.turnServer.udpport + '?transport=udp']
                    }), 'string' == typeof e.turnServer.tcpport && '' !== e.turnServer.tcpport && t.pc_config.iceServers.push({
                        username: e.turnServer.username,
                        credential: e.turnServer.credential,
                        credentialType: 'password',
                        urls: ['turn:' + e.turnServer.url + ':' + e.turnServer.tcpport + '?transport=tcp']
                    }), !0 === e.turnServer.forceturn && (t.pc_config.iceTransportPolicy = 'relay')))), void 0 === e.audio && (e.audio = !0), void 0 === e.video && (e.video = !0), t.mediaConstraints = {
                        mandatory: {
                            OfferToReceiveVideo: e.video,
                            OfferToReceiveAudio: e.audio
                        }
                    }, t.roapSessionId = 103;
                    try {
                        t.pc_config.sdpSemantics = 'plan-b', t.peerConnection = new n(t.pc_config, t.con);
                    } catch (e) {
                        delete t.pc_config.sdpSemantics, t.peerConnection = new n(t.pc_config, t.con);
                    }
                    o.default.debug('[' + t.clientId + ']safari Created RTCPeerConnnection with config "' + JSON.stringify(t.pc_config) + '".'), t.peerConnection.onicecandidate = function (e) {
                        var n, i, a, r;
                        i = (n = t.peerConnection.localDescription.sdp).match(/a=candidate:.+typ\ssrflx.+\r\n/), a = n.match(/a=candidate:.+typ\shost.+\r\n/), r = n.match(/a=candidate:.+typ\srelay.+\r\n/), 0 === t.iceCandidateCount && (t.timeout = setTimeout(function () {
                            t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded());
                        }, 1000)), null === i && null === a && null === r || void 0 !== t.ice || (o.default.debug('[' + t.clientId + ']srflx candidate : ' + i + ' relay candidate: ' + r + ' host candidate : ' + a), clearTimeout(t.timeout), t.ice = 0, t.moreIceComing = !1, t.markActionNeeded()), t.iceCandidateCount = t.iceCandidateCount + 1;
                    };
                    var i = function (t) {
                            return e.screen && (t = t.replace('a=x-google-flag:conference\r\n', '')), t;
                        }, a = function (n) {
                            var i, a;
                            return e.minVideoBW && e.maxVideoBW && (a = (i = n.match(/m=video.*\r\n/))[0] + 'b=AS:' + e.maxVideoBW + '\r\n', n = n.replace(i[0], a), o.default.debug('[' + t.clientId + ']Set Video Bitrate - min:' + e.minVideoBW + ' max:' + e.maxVideoBW)), e.maxAudioBW && (a = (i = n.match(/m=audio.*\r\n/))[0] + 'b=AS:' + e.maxAudioBW + '\r\n', n = n.replace(i[0], a)), n;
                        };
                    t.processSignalingMessage = function (e) {
                        var n, o = JSON.parse(e);
                        t.incomingMessage = o, 'new' === t.state ? 'OFFER' === o.messageType ? (n = {
                            sdp: o.sdp,
                            type: 'offer'
                        }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.state = 'offer-received', t.markActionNeeded()) : t.error('Illegal message for this state: ' + o.messageType + ' in state ' + t.state) : 'offer-sent' === t.state ? 'ANSWER' === o.messageType ? ((n = {
                            sdp: o.sdp,
                            type: 'answer'
                        }).sdp = i(n.sdp), n.sdp = a(n.sdp), n.sdp = n.sdp.replace(/a=x-google-flag:conference\r\n/g, ''), t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.sendOK(), t.state = 'established') : 'pr-answer' === o.messageType ? (n = {
                            sdp: o.sdp,
                            type: 'pr-answer'
                        }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(n))) : 'offer' === o.messageType ? t.error('Not written yet') : t.error('Illegal message for this state: ' + o.messageType + ' in state ' + t.state) : 'established' === t.state && ('OFFER' === o.messageType ? (n = {
                            sdp: o.sdp,
                            type: 'offer'
                        }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.state = 'offer-received', t.markActionNeeded()) : 'ANSWER' === o.messageType ? ((n = {
                            sdp: o.sdp,
                            type: 'answer'
                        }).sdp = i(n.sdp), n.sdp = a(n.sdp), t.peerConnection.setRemoteDescription(new RTCSessionDescription(n))) : t.error('Illegal message for this state: ' + o.messageType + ' in state ' + t.state));
                    };
                    var r = {
                            id: '',
                            type: '',
                            mediaType: '',
                            googCodecName: 'opus',
                            aecDivergentFilterFraction: '0',
                            audioInputLevel: '0',
                            bytesSent: '0',
                            packetsSent: '0',
                            googEchoCancellationReturnLoss: '0',
                            googEchoCancellationReturnLossEnhancement: '0'
                        }, s = {
                            id: '',
                            type: '',
                            mediaType: '',
                            googCodecName: 'h264' === e.codec ? 'H264' : 'VP8',
                            bytesSent: '0',
                            packetsLost: '0',
                            packetsSent: '0',
                            googAdaptationChanges: '0',
                            googAvgEncodeMs: '0',
                            googEncodeUsagePercent: '0',
                            googFirsReceived: '0',
                            googFrameHeightSent: '0',
                            googFrameHeightInput: '0',
                            googFrameRateInput: '0',
                            googFrameRateSent: '0',
                            googFrameWidthSent: '0',
                            googFrameWidthInput: '0',
                            googNacksReceived: '0',
                            googPlisReceived: '0',
                            googRtt: '0',
                            googFramesEncoded: '0'
                        }, d = {
                            id: '',
                            type: '',
                            mediaType: '',
                            audioOutputLevel: '0',
                            bytesReceived: '0',
                            packetsLost: '0',
                            packetsReceived: '0',
                            googAccelerateRate: '0',
                            googCurrentDelayMs: '0',
                            googDecodingCNG: '0',
                            googDecodingCTN: '0',
                            googDecodingCTSG: '0',
                            googDecodingNormal: '0',
                            googDecodingPLC: '0',
                            googDecodingPLCCNG: '0',
                            googExpandRate: '0',
                            googJitterBufferMs: '0',
                            googJitterReceived: '0',
                            googPreemptiveExpandRate: '0',
                            googPreferredJitterBufferMs: '0',
                            googSecondaryDecodedRate: '0',
                            googSpeechExpandRate: '0'
                        }, c = {
                            id: '',
                            type: '',
                            mediaType: '',
                            googTargetDelayMs: '0',
                            packetsLost: '0',
                            googDecodeMs: '0',
                            googMaxDecodeMs: '0',
                            googRenderDelayMs: '0',
                            googFrameWidthReceived: '0',
                            googFrameHeightReceived: '0',
                            googFrameRateReceived: '0',
                            googFrameRateDecoded: '0',
                            googFrameRateOutput: '0',
                            googFramesDecoded: '0',
                            googFrameReceived: '0',
                            googJitterBufferMs: '0',
                            googCurrentDelayMs: '0',
                            googMinPlayoutDelayMs: '0',
                            googNacksSent: '0',
                            googPlisSent: '0',
                            googFirsSent: '0',
                            bytesReceived: '0',
                            packetsReceived: '0'
                        }, u = {
                            id: 'bweforvideo',
                            type: 'VideoBwe',
                            googAvailableSendBandwidth: '0',
                            googAvailableReceiveBandwidth: '0',
                            googActualEncBitrate: '0',
                            googRetransmitBitrate: '0',
                            googTargetEncBitrate: '0',
                            googBucketDelay: '0',
                            googTransmitBitrate: '0'
                        }, l = 0, p = 0, f = 0;
                    return t.getVideoRelatedStats = function (n) {
                        t.peerConnection.getStats().then(function (i) {
                            var o = {
                                peerId: t.uid,
                                mediaType: 'video',
                                isVideoMute: t.isVideoMute
                            };
                            i.forEach(function (i) {
                                if (t.isSubscriber) {
                                    if ('track' === i.type && (~i.id.indexOf('video') || ~i.trackIdentifier.indexOf('v'))) {
                                        if (!t.lastReport)
                                            return void (t.lastReport = i);
                                        o.frameRateReceived = i.framesReceived - t.lastReport.framesReceived + '', o.frameRateDecoded = i.framesDecoded - t.lastReport.framesDecoded + '', t.lastReport = i;
                                    }
                                    'inbound-rtp' === i.type && ~i.id.indexOf('Video') && (o.bytesReceived = i.bytesReceived + '', o.packetsReceived = i.packetsReceived + '', o.packetsLost = i.packetsLost + '');
                                } else if ('outbound-rtp' === i.type && ~i.id.indexOf('Video')) {
                                    if (!t.lastReport)
                                        return void (t.lastReport = i);
                                    n && n({
                                        mediaType: 'video',
                                        isVideoMute: t.isVideoMute,
                                        frameRateInput: e.maxFrameRate + '',
                                        frameRateSent: i.framesEncoded - t.lastReport.framesEncoded + ''
                                    }), t.lastReport = i;
                                }
                            }), n && n(o);
                        });
                    }, t.getAudioRelatedStats = function (e) {
                        t.peerConnection.getStats().then(function (n) {
                            n.forEach(function (n) {
                                t.isSubscriber && 'inbound-rtp' === n.type && ~n.id.indexOf('Audio') && e && e({
                                    peerId: t.uid,
                                    mediaType: 'audio',
                                    isAudioMute: t.isAudioMute,
                                    frameDropped: n.packetsLost + '',
                                    frameReceived: n.packetsReceived + '',
                                    googJitterReceived: n.jitter + '',
                                    bytesReceived: n.bytesReceived + '',
                                    packetsReceived: n.packetsReceived + '',
                                    packetsLost: n.packetsLost + ''
                                });
                            });
                        });
                    }, t.getStatsRate = function (e) {
                        t.getStats(function (t) {
                            t.forEach(function (e) {
                                'outbound-rtp' === e.type && 'video' === e.mediaType && e.googFramesEncoded && (e.googFrameRateSent = ((e.googFramesEncoded - l) / 3).toString(), l = e.googFramesEncoded), 'inbound-rtp' === e.type && -1 != e.id.indexOf('55543') && (e.googFrameRateReceived && (e.googFrameRateReceived = ((e.googFrameReceived - f) / 3).toString(), f = e.googFrameReceived), e.googFrameRateDecoded && (e.googFrameRateDecoded = ((e.googFramesDecoded - p) / 3).toString(), p = e.googFramesDecoded));
                            }), e(t);
                        });
                    }, t.getStats = function (e) {
                        var n = [];
                        t.peerConnection.getStats().then(function (i) {
                            i.forEach(function (e) {
                                n.push(e), 'outbound-rtp' === e.type && 'audio' === e.mediaType && (r.id = e.id, r.type = e.type, r.mediaType = e.mediaType, r.bytesSent = e.bytesSent ? e.bytesSent + '' : '0', r.packetsSent = e.packetsSent ? e.packetsSent + '' : '0'), 'outbound-rtp' === e.type && 'video' === e.mediaType && (s.id = e.id, s.type = e.type, s.mediaType = e.mediaType, s.bytesSent = e.bytesSent ? e.bytesSent + '' : '0', s.packetsSent = e.packetsSent ? e.packetsSent + '' : '0', s.googPlisReceived = e.pliCount ? e.pliCount + '' : '0', s.googNacksReceived = e.nackCount ? e.nackCount + '' : '0', s.googFirsReceived = e.firCount ? e.firCount + '' : '0', s.googFramesEncoded = e.framesEncoded ? e.framesEncoded + '' : '0'), 'inbound-rtp' === e.type && -1 != e.id.indexOf('44444') && (d.id = e.id, d.type = e.type, d.mediaType = 'audio', d.packetsReceived = e.packetsReceived ? e.packetsReceived + '' : '0', d.bytesReceived = e.bytesReceived ? e.bytesReceived + '' : '0', d.packetsLost = e.packetsLost ? e.packetsLost + '' : '0', d.packetsReceived = e.packetsReceived ? e.packetsReceived + '' : '0', d.googJitterReceived = e.jitter ? e.jitter + '' : '0'), 'inbound-rtp' === e.type && -1 != e.id.indexOf('55543') && (c.id = e.id, c.type = e.type, c.mediaType = 'video', c.packetsReceived = e.packetsReceived ? e.packetsReceived + '' : '0', c.bytesReceived = e.bytesReceived ? e.bytesReceived + '' : '0', c.packetsLost = e.packetsLost ? e.packetsLost + '' : '0', c.googJitterBufferMs = e.jitter ? e.jitter + '' : '0', c.googNacksSent = e.nackCount ? e.nackCount + '' : '0', c.googPlisSent = e.pliCount ? e.pliCount + '' : '0', c.googFirsSent = e.firCount ? e.firCount + '' : '0'), 'track' !== e.type || -1 == e.id.indexOf('55543') && !~e.trackIdentifier.indexOf('v') || (c.googFrameWidthReceived = e.frameWidth ? e.frameWidth + '' : '0', c.googFrameHeightReceived = e.frameHeight ? e.frameHeight + '' : '0', c.googFrameReceived = e.framesReceived ? e.framesReceived + '' : '0', c.googFramesDecoded = e.framesDecoded ? e.framesDecoded + '' : '0'), 'track' !== e.type || -1 == e.id.indexOf('44444') && !~e.trackIdentifier.indexOf('a') || (d.audioOutputLevel = e.audioLevel + '', r.audioInputLevel = e.audioLevel + ''), 'candidate-pair' === e.type && (0 == e.availableIncomingBitrate ? u.googAvailableSendBandwidth = e.availableOutgoingBitrate + '' : u.googAvailableReceiveBandwidth = e.availableIncomingBitrate + '');
                            });
                            var o = [
                                u,
                                r,
                                s,
                                d,
                                c
                            ];
                            o.push({
                                id: 'time',
                                startTime: t.connectedTime,
                                timestamp: new Date()
                            }), e(o, n);
                        }).catch(function (e) {
                            console.error(e);
                        });
                    }, t.addTrack = function (e, n) {
                        t.peerConnection.addTrack(e, n);
                    }, t.removeTrack = function (e, n) {
                        var i = t.peerConnection.getSenders().find(function (t) {
                            return t.track == e;
                        });
                        i.replaceTrack(null), t.peerConnection.removeTrack(i);
                    }, t.addStream = function (e) {
                        window.navigator.userAgent.indexOf('Safari') > -1 && -1 === navigator.userAgent.indexOf('Chrome') ? e.getTracks().forEach(function (n) {
                            return t.peerConnection.addTrack(n, e);
                        }) : t.peerConnection.addStream(e), t.markActionNeeded();
                    }, t.removeStream = function () {
                        t.markActionNeeded();
                    }, t.close = function () {
                        t.state = 'closed', t.peerConnection.close();
                    }, t.markActionNeeded = function () {
                        t.actionNeeded = !0, t.doLater(function () {
                            t.onstablestate();
                        });
                    }, t.doLater = function (e) {
                        window.setTimeout(e, 1);
                    }, t.onstablestate = function () {
                        var n;
                        if (t.actionNeeded) {
                            if ('new' === t.state || 'established' === t.state)
                                e.isSubscriber && (t.peerConnection.addTransceiver('audio', { direction: 'recvonly' }), t.peerConnection.addTransceiver('video', { direction: 'recvonly' })), t.peerConnection.createOffer(t.mediaConstraints).then(function (n) {
                                    if (n.sdp = a(n.sdp), e.isSubscriber || (n.sdp = n.sdp.replace(/a=extmap:4 urn:3gpp:video-orientation\r\n/g, '')), n.sdp !== t.prevOffer)
                                        return t.peerConnection.setLocalDescription(n), t.state = 'preparing-offer', void t.markActionNeeded();
                                    o.default.debug('[' + t.clientId + ']Not sending a new offer');
                                }).catch(function (e) {
                                    o.default.debug('[' + t.clientId + ']peer connection create offer failed ', e);
                                });
                            else if ('preparing-offer' === t.state) {
                                if (t.moreIceComing)
                                    return;
                                t.prevOffer = t.peerConnection.localDescription.sdp, t.prevOffer = t.prevOffer.replace(/a=candidate:.+typ\shost.+\r\n/g, 'a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n'), t.sendMessage('OFFER', t.prevOffer), t.state = 'offer-sent';
                            } else if ('offer-received' === t.state)
                                t.peerConnection.createAnswer(function (e) {
                                    if (t.peerConnection.setLocalDescription(e), t.state = 'offer-received-preparing-answer', t.iceStarted)
                                        t.markActionNeeded();
                                    else {
                                        var n = new Date();
                                        o.default.debug('[' + t.clientId + ']' + n.getTime() + ': Starting ICE in responder'), t.iceStarted = !0;
                                    }
                                }, function (e) {
                                    o.default.debug('[' + t.clientId + ']peer connection create answer failed ', e);
                                }, t.mediaConstraints);
                            else if ('offer-received-preparing-answer' === t.state) {
                                if (t.moreIceComing)
                                    return;
                                n = t.peerConnection.localDescription.sdp, t.sendMessage('ANSWER', n), t.state = 'established';
                            } else
                                t.error('Dazed and confused in state ' + t.state + ', stopping here');
                            t.actionNeeded = !1;
                        }
                    }, t.sendOK = function () {
                        t.sendMessage('OK');
                    }, t.sendMessage = function (e, n) {
                        var i = {};
                        i.messageType = e, i.sdp = n, 'OFFER' === e ? (i.offererSessionId = t.sessionId, i.answererSessionId = t.otherSessionId, i.seq = t.sequenceNumber += 1, i.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (i.offererSessionId = t.incomingMessage.offererSessionId, i.answererSessionId = t.sessionId, i.seq = t.incomingMessage.seq), t.onsignalingmessage(JSON.stringify(i));
                    }, t._getSender = function (e) {
                        if (t.peerConnection && t.peerConnection.getSenders) {
                            var n = t.peerConnection.getSenders().find(function (t) {
                                return t.track.kind == e;
                            });
                            if (n)
                                return n;
                        }
                        return null;
                    }, t.hasSender = function (e) {
                        return !!t._getSender(e);
                    }, t.replaceTrack = function (e, n, i) {
                        var o = t._getSender(e.kind);
                        if (!o)
                            return i('NO_SENDER_FOUND');
                        try {
                            o.replaceTrack(e);
                        } catch (e) {
                            return i && i(e);
                        }
                        setTimeout(function () {
                            return n && n();
                        }, 50);
                    }, t.error = function (e) {
                        throw 'Error in RoapOnJsep: ' + e;
                    }, t.sessionId = t.roapSessionId += 1, t.sequenceNumber = 0, t.actionNeeded = !1, t.iceStarted = !1, t.moreIceComing = !0, t.iceCandidateCount = 0, t.onsignalingmessage = e.callback, t.peerConnection.ontrack = function (e) {
                        t.onaddstream && t.onaddstream(e, 'ontrack');
                    }, t.peerConnection.onremovestream = function (e) {
                        t.onremovestream && t.onremovestream(e);
                    }, t.peerConnection.oniceconnectionstatechange = function (e) {
                        'connected' === e.currentTarget.iceConnectionState && (t.connectedTime = new Date()), t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState);
                    }, t.peerConnection.onnegotiationneeded = function () {
                        void 0 !== t.prevOffer && t.peerConnection.createOffer().then(function (e) {
                            return e.sdp = e.sdp.replace(/a=recvonly\r\n/g, 'a=inactive\r\n'), e.sdp = i(e.sdp), e.sdp = a(e.sdp), t.peerConnection.setLocalDescription(e);
                        }).then(function () {
                            t.onnegotiationneeded && t.onnegotiationneeded(t.peerConnection.localDescription.sdp);
                        }).catch(function (e) {
                            console.log('createOffer error: ', e);
                        });
                    }, t.onaddstream = null, t.onremovestream = null, t.state = 'new', t.markActionNeeded(), t;
                }, w = function () {
                    var e = {
                        addStream: function () {
                        }
                    };
                    return e;
                }, D = function (e) {
                    var t = {}, n = (mozRTCPeerConnection, mozRTCSessionDescription), i = !1;
                    t.uid = e.uid, t.isVideoMute = e.isVideoMute, t.isAudioMute = e.isAudioMute, t.isSubscriber = e.isSubscriber, t.clientId = e.clientId, t.pc_config = { iceServers: [] }, e.iceServers instanceof Array ? e.iceServers.map(function (e) {
                        0 === e.url.indexOf('stun:') && t.pc_config.iceServers.push({ url: e.url });
                    }) : (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function (e) {
                        'string' == typeof e && '' !== e && t.pc_config.iceServers.push({ url: e });
                    }) : 'string' == typeof e.stunServerUrl && '' !== e.stunServerUrl && t.pc_config.iceServers.push({ url: e.stunServerUrl })), e.turnServer && 'string' == typeof e.turnServer.url && '' !== e.turnServer.url && (t.pc_config.iceServers.push({
                        username: e.turnServer.username,
                        credential: e.turnServer.credential,
                        credentialType: 'password',
                        urls: 'turn:' + e.turnServer.url + ':' + e.turnServer.udpport + '?transport=udp'
                    }), 'string' == typeof e.turnServer.tcpport && '' !== e.turnServer.tcpport && t.pc_config.iceServers.push({
                        username: e.turnServer.username,
                        credential: e.turnServer.credential,
                        credentialType: 'password',
                        urls: 'turn:' + e.turnServer.url + ':' + e.turnServer.tcpport + '?transport=tcp'
                    }), !0 === e.turnServer.forceturn && (t.pc_config.iceTransportPolicy = 'relay'))), void 0 === e.audio && (e.audio = !0), void 0 === e.video && (e.video = !0), t.mediaConstraints = {
                        offerToReceiveAudio: e.audio,
                        offerToReceiveVideo: e.video,
                        mozDontOfferDataChannel: !0
                    }, t.roapSessionId = 103, t.peerConnection = new h.a(t.pc_config), o.default.debug('[' + t.clientId + ']safari Created RTCPeerConnnection with config "' + JSON.stringify(t.pc_config) + '".'), t.peerConnection.onicecandidate = function (e) {
                        var n, i, a, r;
                        i = (n = t.peerConnection.localDescription.sdp).match(/a=candidate:.+typ\ssrflx.+\r\n/), a = n.match(/a=candidate:.+typ\shost.+\r\n/), r = n.match(/a=candidate:.+typ\srelay.+\r\n/), 0 === t.iceCandidateCount && (t.timeout = setTimeout(function () {
                            t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded());
                        }, 1000)), null === i && null === a && null === r || void 0 !== t.ice || (o.default.debug('[' + t.clientId + ']srflx candidate : ' + i + ' relay candidate: ' + r + ' host candidate : ' + a), clearTimeout(t.timeout), t.ice = 0, t.moreIceComing = !1, t.markActionNeeded()), t.iceCandidateCount = t.iceCandidateCount + 1;
                    }, t.checkMLineReverseInSDP = function (e) {
                        return !(!~e.indexOf('m=audio') || !~e.indexOf('m=video')) && e.indexOf('m=audio') > e.indexOf('m=video');
                    }, t.reverseMLineInSDP = function (e) {
                        var t = e.split('m=audio'), n = t[1].split('m=video'), i = 'm=video' + n[1], o = 'm=audio' + n[0];
                        return e = t[0] + i + o;
                    }, t.processSignalingMessage = function (e) {
                        var i, a = JSON.parse(e);
                        t.incomingMessage = a, 'new' === t.state ? 'OFFER' === a.messageType ? (a.sdp = u(a.sdp), i = {
                            sdp: a.sdp,
                            type: 'offer'
                        }, t.peerConnection.setRemoteDescription(new n(i), function () {
                            o.default.debug('[' + t.clientId + ']setRemoteDescription succeeded');
                        }, function (e) {
                            o.default.info('[' + t.clientId + ']setRemoteDescription failed: ' + e.name);
                        }), t.state = 'offer-received', t.markActionNeeded()) : t.error('Illegal message for this state: ' + a.messageType + ' in state ' + t.state) : 'offer-sent' === t.state ? 'ANSWER' === a.messageType ? (a.sdp = u(a.sdp), a.sdp = a.sdp.replace(/ generation 0/g, ''), a.sdp = a.sdp.replace(/ udp /g, ' UDP '), -1 !== a.sdp.indexOf('a=group:BUNDLE') ? (a.sdp = a.sdp.replace(/a=group:BUNDLE audio video/, 'a=group:BUNDLE sdparta_0 sdparta_1'), a.sdp = a.sdp.replace(/a=mid:audio/, 'a=mid:sdparta_0'), a.sdp = a.sdp.replace(/a=mid:video/, 'a=mid:sdparta_1')) : (a.sdp = a.sdp.replace(/a=mid:audio/, 'a=mid:sdparta_0'), a.sdp = a.sdp.replace(/a=mid:video/, 'a=mid:sdparta_0')), i = {
                            sdp: a.sdp,
                            type: 'answer'
                        }, t.peerConnection.setRemoteDescription(new n(i), function () {
                            o.default.debug('[' + t.clientId + ']setRemoteDescription succeeded');
                        }, function (e) {
                            o.default.info('[' + t.clientId + ']setRemoteDescription failed: ' + e);
                        }), t.sendOK(), t.state = 'established') : 'pr-answer' === a.messageType ? (i = {
                            sdp: a.sdp,
                            type: 'pr-answer'
                        }, t.peerConnection.setRemoteDescription(new n(i), function () {
                            o.default.debug('[' + t.clientId + ']setRemoteDescription succeeded');
                        }, function (e) {
                            o.default.info('[' + t.clientId + ']setRemoteDescription failed: ' + e.name);
                        })) : 'offer' === a.messageType ? t.error('Not written yet') : t.error('Illegal message for this state: ' + a.messageType + ' in state ' + t.state) : 'established' === t.state && ('OFFER' === a.messageType ? (i = {
                            sdp: a.sdp,
                            type: 'offer'
                        }, t.peerConnection.setRemoteDescription(new n(i), function () {
                            o.default.debug('[' + t.clientId + ']setRemoteDescription succeeded');
                        }, function (e) {
                            o.default.info('[' + t.clientId + ']setRemoteDescription failed: ' + e.name);
                        }), t.state = 'offer-received', t.markActionNeeded()) : t.error('Illegal message for this state: ' + a.messageType + ' in state ' + t.state));
                    };
                    var a = {
                            id: '',
                            type: '',
                            mediaType: 'opus',
                            googCodecName: 'opus',
                            aecDivergentFilterFraction: '0',
                            audioInputLevel: '0',
                            bytesSent: '0',
                            packetsSent: '0',
                            googEchoCancellationReturnLoss: '0',
                            googEchoCancellationReturnLossEnhancement: '0'
                        }, r = {
                            id: '',
                            type: '',
                            mediaType: '',
                            googCodecName: 'h264' === e.codec ? 'H264' : 'VP8',
                            bytesSent: '0',
                            packetsLost: '0',
                            packetsSent: '0',
                            googAdaptationChanges: '0',
                            googAvgEncodeMs: '0',
                            googEncodeUsagePercent: '0',
                            googFirsReceived: '0',
                            googFrameHeightSent: '0',
                            googFrameHeightInput: '0',
                            googFrameRateInput: '0',
                            googFrameRateSent: '0',
                            googFrameWidthSent: '0',
                            googFrameWidthInput: '0',
                            googNacksReceived: '0',
                            googPlisReceived: '0',
                            googRtt: '0'
                        }, s = {
                            id: '',
                            type: '',
                            mediaType: '',
                            audioOutputLevel: '0',
                            bytesReceived: '0',
                            packetsLost: '0',
                            packetsReceived: '0',
                            googAccelerateRate: '0',
                            googCurrentDelayMs: '0',
                            googDecodingCNG: '0',
                            googDecodingCTN: '0',
                            googDecodingCTSG: '0',
                            googDecodingNormal: '0',
                            googDecodingPLC: '0',
                            googDecodingPLCCNG: '0',
                            googExpandRate: '0',
                            googJitterBufferMs: '0',
                            googJitterReceived: '0',
                            googPreemptiveExpandRate: '0',
                            googPreferredJitterBufferMs: '0',
                            googSecondaryDecodedRate: '0',
                            googSpeechExpandRate: '0'
                        }, d = {
                            id: '',
                            type: '',
                            mediaType: '',
                            googTargetDelayMs: '0',
                            packetsLost: '0',
                            googDecodeMs: '0',
                            googMaxDecodeMs: '0',
                            googRenderDelayMs: '0',
                            googFrameWidthReceived: '0',
                            googFrameHeightReceived: '0',
                            googFrameRateReceived: '0',
                            googFrameRateDecoded: '0',
                            googFrameRateOutput: '0',
                            googJitterBufferMs: '0',
                            googCurrentDelayMs: '0',
                            googMinPlayoutDelayMs: '0',
                            googNacksSent: '0',
                            googPlisSent: '0',
                            googFirsSent: '0',
                            bytesReceived: '0',
                            packetsReceived: '0',
                            googFramesDecoded: '0'
                        }, c = 0;
                    t.getVideoRelatedStats = function (e) {
                        t.peerConnection.getStats().then(function (n) {
                            Object.keys(n).forEach(function (i) {
                                var o = n[i];
                                if (t.isSubscriber) {
                                    if ('inboundrtp' === o.type && 'video' === o.mediaType) {
                                        if (!t.lastReport)
                                            return void (t.lastReport = o);
                                        e && e({
                                            browser: 'firefox',
                                            mediaType: 'video',
                                            peerId: t.uid,
                                            isVideoMute: t.isVideoMute,
                                            frameRateReceived: o.framerateMean + '',
                                            frameRateDecoded: o.framesDecoded - t.lastReport.framesDecoded + '',
                                            bytesReceived: o.bytesReceived + '',
                                            packetsReceived: o.packetsReceived + '',
                                            packetsLost: o.packetsLost + ''
                                        }), t.lastReport = o;
                                    }
                                } else if ('outboundrtp' === o.type && 'video' === o.mediaType) {
                                    if (!t.lastReport)
                                        return void (t.lastReport = o);
                                    e && e({
                                        mediaType: 'video',
                                        isVideoMute: t.isVideoMute,
                                        frameRateInput: o.framerateMean + '',
                                        frameRateSent: o.framesEncoded - t.lastReport.framesEncoded + ''
                                    }), t.lastReport = o;
                                }
                            });
                        });
                    }, t.getAudioRelatedStats = function (e) {
                        t.peerConnection.getStats().then(function (n) {
                            Object.keys(n).forEach(function (i) {
                                var o = n[i];
                                t.isSubscriber && 'inboundrtp' === o.type && 'audio' === o.mediaType && e && e({
                                    browser: 'firefox',
                                    mediaType: 'audio',
                                    peerId: t.uid,
                                    isAudioMute: t.isAudioMute,
                                    frameDropped: o.packetsLost + '',
                                    frameReceived: o.packetsReceived + '',
                                    googJitterReceived: o.jitter + '',
                                    bytesReceived: o.bytesReceived + '',
                                    packetsReceived: o.packetsReceived + '',
                                    packetsLost: o.packetsLost + ''
                                });
                            });
                        });
                    }, t.getStatsRate = function (e) {
                        t.getStats(function (t) {
                            t.forEach(function (e) {
                                'inboundrtp' === e.type && 'video' === e.mediaType && e.googFrameRateDecoded && (e.googFrameRateDecoded = ((e.googFramesDecoded - c) / 3).toString(), c = e.googFramesDecoded);
                            }), e(t);
                        });
                    }, t.getStats = function (e) {
                        t.peerConnection.getStats().then(function (n) {
                            var i = [];
                            Object.keys(n).forEach(function (e) {
                                var t = n[e];
                                i.push(t), 'outboundrtp' === t.type && 'video' === t.mediaType && -1 === t.id.indexOf('rtcp') && (r.id = t.id, r.type = t.type, r.mediaType = t.mediaType, r.bytesSent = t.bytesSent ? t.bytesSent + '' : '0', r.packetsSent = t.packetsSent ? t.packetsSent + '' : '0', r.googPlisReceived = t.pliCount ? t.pliCount + '' : '0', r.googNacksReceived = t.nackCount ? t.nackCount + '' : '0', r.googFirsReceived = t.firCount ? t.firCount + '' : '0', r.googFrameRateSent = t.framerateMean ? t.framerateMean + '' : '0'), 'outboundrtp' === t.type && 'audio' === t.mediaType && -1 === t.id.indexOf('rtcp') && (a.id = t.id, a.type = t.type, a.mediaType = t.mediaType, a.bytesSent = t.bytesSent ? t.bytesSent + '' : '0', a.packetsSent = t.packetsSent ? t.packetsSent + '' : '0'), 'inboundrtp' !== t.type || 'audio' !== t.mediaType || t.isRemote || -1 !== t.id.indexOf('rtcp') || (s.id = t.id, s.type = t.type, s.mediaType = t.mediaType, s.bytesReceived = t.bytesReceived ? t.bytesReceived + '' : '0', s.packetsLost = t.packetsLost ? t.packetsLost + '' : '0', s.packetsReceived = t.packetsReceived ? t.packetsReceived + '' : '0', s.googJitterReceived = t.jitter ? t.jitter + '' : '0'), 'inboundrtp' !== t.type || 'video' !== t.mediaType || t.isRemote || -1 !== t.id.indexOf('rtcp') || (d.id = t.id, d.type = t.type, d.mediaType = t.mediaType, d.bytesReceived = t.bytesReceived ? t.bytesReceived + '' : '0', d.googFrameRateReceived = t.framerateMean ? t.framerateMean + '' : '0', d.googFramesDecoded = t.framesDecoded ? t.framesDecoded + '' : '0', d.packetsLost = t.packetsLost ? t.packetsLost + '' : '0', d.packetsReceived = t.packetsReceived ? t.packetsReceived + '' : '0', d.googJitterBufferMs = t.jitter ? t.jitter + '' : '0', d.googNacksSent = t.nackCount ? t.nackCount + '' : '0', d.googPlisSent = t.pliCount ? t.pliCount + '' : '0', d.googFirsSent = t.firCount ? t.firCount + '' : '0'), -1 !== t.id.indexOf('outbound_rtcp_video') && (r.packetsLost = t.packetsLost ? t.packetsLost + '' : '0');
                            });
                            var o = [
                                r,
                                a,
                                s,
                                d
                            ];
                            o.push({
                                id: 'time',
                                startTime: t.connectedTime,
                                timestamp: new Date()
                            }), e(o, i);
                        }, function (e) {
                            o.default.error('[' + t.clientId + ']' + e);
                        });
                    }, t.addStream = function (e) {
                        i = !0, t.peerConnection.addStream(e), t.markActionNeeded();
                    }, t.removeStream = function () {
                        t.markActionNeeded();
                    }, t.close = function () {
                        t.state = 'closed', t.peerConnection.close();
                    }, t.markActionNeeded = function () {
                        t.actionNeeded = !0, t.doLater(function () {
                            t.onstablestate();
                        });
                    }, t.doLater = function (e) {
                        window.setTimeout(e, 1);
                    }, t.onstablestate = function () {
                        if (t.actionNeeded) {
                            if ('new' === t.state || 'established' === t.state)
                                i && (t.mediaConstraints = void 0), t.peerConnection.createOffer(function (e) {
                                    if (e.sdp = u(e.sdp), e.sdp = e.sdp.replace(/a=extmap:1 http:\/\/www.webrtc.org\/experiments\/rtp-hdrext\/abs-send-time/, 'a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time'), e.sdp !== t.prevOffer)
                                        return t.peerConnection.setLocalDescription(e), t.state = 'preparing-offer', void t.markActionNeeded();
                                    o.default.debug('[' + t.clientId + ']Not sending a new offer');
                                }, function (e) {
                                    o.default.debug('[' + t.clientId + ']Ups! create offer failed ', e);
                                }, t.mediaConstraints);
                            else if ('preparing-offer' === t.state) {
                                if (t.moreIceComing)
                                    return;
                                t.prevOffer = t.peerConnection.localDescription.sdp, t.prevOffer = t.prevOffer.replace(/a=candidate:.+typ\shost.+\r\n/g, 'a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n'), t.sendMessage('OFFER', t.prevOffer), t.state = 'offer-sent';
                            } else if ('offer-received' === t.state)
                                t.peerConnection.createAnswer(function (e) {
                                    if (t.peerConnection.setLocalDescription(e), t.state = 'offer-received-preparing-answer', t.iceStarted)
                                        t.markActionNeeded();
                                    else {
                                        var n = new Date();
                                        o.default.debug('[' + t.clientId + ']' + n.getTime() + ': Starting ICE in responder'), t.iceStarted = !0;
                                    }
                                }, function () {
                                    o.default.debug('[' + t.clientId + ']Ups! Something went wrong');
                                });
                            else if ('offer-received-preparing-answer' === t.state) {
                                if (t.moreIceComing)
                                    return;
                                var e = t.peerConnection.localDescription.sdp;
                                t.sendMessage('ANSWER', e), t.state = 'established';
                            } else
                                t.error('Dazed and confused in state ' + t.state + ', stopping here');
                            t.actionNeeded = !1;
                        }
                    }, t.sendOK = function () {
                        t.sendMessage('OK');
                    }, t.sendMessage = function (e, n) {
                        var i = {};
                        i.messageType = e, i.sdp = n, 'OFFER' === e ? (i.offererSessionId = t.sessionId, i.answererSessionId = t.otherSessionId, i.seq = t.sequenceNumber += 1, i.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (i.offererSessionId = t.incomingMessage.offererSessionId, i.answererSessionId = t.sessionId, i.seq = t.incomingMessage.seq), t.onsignalingmessage(JSON.stringify(i));
                    }, t._getSender = function (e) {
                        if (t.peerConnection && t.peerConnection.getSenders) {
                            var n = t.peerConnection.getSenders().find(function (t) {
                                return t.track.kind == e;
                            });
                            if (n)
                                return n;
                        }
                        return null;
                    }, t.hasSender = function (e) {
                        return !!t._getSender(e);
                    }, t.replaceTrack = function (e, n, i) {
                        var o = t._getSender(e.kind);
                        if (!o)
                            return i('NO_SENDER_FOUND');
                        try {
                            o.replaceTrack(e);
                        } catch (e) {
                            return i && i(e);
                        }
                        setTimeout(function () {
                            return n && n();
                        }, 50);
                    }, t.error = function (e) {
                        throw 'Error in RoapOnJsep: ' + e;
                    }, t.sessionId = t.roapSessionId += 1, t.sequenceNumber = 0, t.actionNeeded = !1, t.iceStarted = !1, t.moreIceComing = !0, t.iceCandidateCount = 0, t.onsignalingmessage = e.callback, t.peerConnection.ontrack = function (e) {
                        t.onaddstream && t.onaddstream(e, 'ontrack');
                    }, t.peerConnection.onremovestream = function (e) {
                        t.onremovestream && t.onremovestream(e);
                    }, t.peerConnection.oniceconnectionstatechange = function (e) {
                        'connected' === e.currentTarget.iceConnectionState && (t.connectedTime = new Date()), t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState);
                    };
                    var u = function (t) {
                        var n;
                        if (e.video && e.maxVideoBW && (null == (n = t.match(/m=video.*\r\n/)) && (n = t.match(/m=video.*\n/)), n && n.length > 0)) {
                            var i = n[0] + 'b=TIAS:' + 1000 * e.maxVideoBW + '\r\n';
                            t = t.replace(n[0], i);
                        }
                        return e.audio && e.maxAudioBW && (null == (n = t.match(/m=audio.*\r\n/)) && (n = t.match(/m=audio.*\n/)), n && n.length > 0) && (i = n[0] + 'b=TIAS:' + 1000 * e.maxAudioBW + '\r\n', t = t.replace(n[0], i)), t;
                    };
                    return t.onaddstream = null, t.onremovestream = null, t.state = 'new', t.markActionNeeded(), t;
                }, k = function (e) {
                    var t = {}, n = (mozRTCPeerConnection, mozRTCSessionDescription), i = !1;
                    t.uid = e.uid, t.isVideoMute = e.isVideoMute, t.isAudioMute = e.isAudioMute, t.isSubscriber = e.isSubscriber, t.clientId = e.clientId, t.pc_config = { iceServers: [] }, e.iceServers instanceof Array ? e.iceServers.map(function (e) {
                        0 === e.url.indexOf('stun:') && t.pc_config.iceServers.push({ url: e.url });
                    }) : (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function (e) {
                        'string' == typeof e && '' !== e && t.pc_config.iceServers.push({ url: e });
                    }) : 'string' == typeof e.stunServerUrl && '' !== e.stunServerUrl && t.pc_config.iceServers.push({ url: e.stunServerUrl })), e.turnServer && 'string' == typeof e.turnServer.url && '' !== e.turnServer.url && (t.pc_config.iceServers.push({
                        username: e.turnServer.username,
                        credential: e.turnServer.credential,
                        credentialType: 'password',
                        urls: 'turn:' + e.turnServer.url + ':' + e.turnServer.udpport + '?transport=udp'
                    }), 'string' == typeof e.turnServer.tcpport && '' !== e.turnServer.tcpport && t.pc_config.iceServers.push({
                        username: e.turnServer.username,
                        credential: e.turnServer.credential,
                        credentialType: 'password',
                        urls: 'turn:' + e.turnServer.url + ':' + e.turnServer.tcpport + '?transport=tcp'
                    }), !0 === e.turnServer.forceturn && (t.pc_config.iceTransportPolicy = 'relay'))), void 0 === e.audio && (e.audio = !0), void 0 === e.video && (e.video = !0), t.mediaConstraints = {
                        offerToReceiveAudio: e.audio,
                        offerToReceiveVideo: e.video,
                        mozDontOfferDataChannel: !0
                    }, t.roapSessionId = 103, t.peerConnection = new h.a(t.pc_config), o.default.debug('[' + t.clientId + ']safari Created RTCPeerConnnection with config "' + JSON.stringify(t.pc_config) + '".'), t.peerConnection.onicecandidate = function (e) {
                        var n, i, a, r;
                        i = (n = t.peerConnection.localDescription.sdp).match(/a=candidate:.+typ\ssrflx.+\r\n/), a = n.match(/a=candidate:.+typ\shost.+\r\n/), r = n.match(/a=candidate:.+typ\srelay.+\r\n/), 0 === t.iceCandidateCount && (t.timeout = setTimeout(function () {
                            t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded());
                        }, 1000)), null === i && null === a && null === r || void 0 !== t.ice || (o.default.debug('[' + t.clientId + ']srflx candidate : ' + i + ' relay candidate: ' + r + ' host candidate : ' + a), clearTimeout(t.timeout), t.ice = 0, t.moreIceComing = !1, t.markActionNeeded()), t.iceCandidateCount = t.iceCandidateCount + 1;
                    }, t.checkMLineReverseInSDP = function (e) {
                        return !(!~e.indexOf('m=audio') || !~e.indexOf('m=video')) && e.indexOf('m=audio') > e.indexOf('m=video');
                    }, t.reverseMLineInSDP = function (e) {
                        var t = e.split('m=audio'), n = t[1].split('m=video'), i = 'm=video' + n[1], o = 'm=audio' + n[0];
                        return e = t[0] + i + o;
                    }, t.processSignalingMessage = function (e) {
                        var i, a = JSON.parse(e);
                        t.incomingMessage = a, 'new' === t.state ? 'OFFER' === a.messageType ? (a.sdp = u(a.sdp), i = {
                            sdp: a.sdp,
                            type: 'offer'
                        }, t.peerConnection.setRemoteDescription(new n(i), function () {
                            o.default.debug('[' + t.clientId + ']setRemoteDescription succeeded');
                        }, function (e) {
                            o.default.info('[' + t.clientId + ']setRemoteDescription failed: ' + e.name);
                        }), t.state = 'offer-received', t.markActionNeeded()) : t.error('Illegal message for this state: ' + a.messageType + ' in state ' + t.state) : 'offer-sent' === t.state ? 'ANSWER' === a.messageType ? (a.sdp = u(a.sdp), a.sdp = a.sdp.replace(/ generation 0/g, ''), a.sdp = a.sdp.replace(/ udp /g, ' UDP '), -1 !== a.sdp.indexOf('a=group:BUNDLE') ? (a.sdp = a.sdp.replace(/a=group:BUNDLE audio video/, 'a=group:BUNDLE sdparta_0 sdparta_1'), a.sdp = a.sdp.replace(/a=mid:audio/, 'a=mid:sdparta_0'), a.sdp = a.sdp.replace(/a=mid:video/, 'a=mid:sdparta_1')) : (a.sdp = a.sdp.replace(/a=mid:audio/, 'a=mid:sdparta_0'), a.sdp = a.sdp.replace(/a=mid:video/, 'a=mid:sdparta_0')), i = {
                            sdp: a.sdp,
                            type: 'answer'
                        }, t.peerConnection.setRemoteDescription(new n(i), function () {
                            o.default.debug('[' + t.clientId + ']setRemoteDescription succeeded');
                        }, function (e) {
                            o.default.info('[' + t.clientId + ']setRemoteDescription failed: ' + e);
                        }), t.sendOK(), t.state = 'established') : 'pr-answer' === a.messageType ? (i = {
                            sdp: a.sdp,
                            type: 'pr-answer'
                        }, t.peerConnection.setRemoteDescription(new n(i), function () {
                            o.default.debug('[' + t.clientId + ']setRemoteDescription succeeded');
                        }, function (e) {
                            o.default.info('[' + t.clientId + ']setRemoteDescription failed: ' + e.name);
                        })) : 'offer' === a.messageType ? t.error('Not written yet') : t.error('Illegal message for this state: ' + a.messageType + ' in state ' + t.state) : 'established' === t.state && ('OFFER' === a.messageType ? (i = {
                            sdp: a.sdp,
                            type: 'offer'
                        }, t.peerConnection.setRemoteDescription(new n(i), function () {
                            o.default.debug('[' + t.clientId + ']setRemoteDescription succeeded');
                        }, function (e) {
                            o.default.info('[' + t.clientId + ']setRemoteDescription failed: ' + e.name);
                        }), t.state = 'offer-received', t.markActionNeeded()) : t.error('Illegal message for this state: ' + a.messageType + ' in state ' + t.state));
                    };
                    var a = {
                            id: '',
                            type: '',
                            mediaType: 'opus',
                            googCodecName: 'opus',
                            aecDivergentFilterFraction: '0',
                            audioInputLevel: '0',
                            bytesSent: '0',
                            packetsSent: '0',
                            googEchoCancellationReturnLoss: '0',
                            googEchoCancellationReturnLossEnhancement: '0'
                        }, r = {
                            id: '',
                            type: '',
                            mediaType: '',
                            googCodecName: 'h264' === e.codec ? 'H264' : 'VP8',
                            bytesSent: '0',
                            packetsLost: '0',
                            packetsSent: '0',
                            googAdaptationChanges: '0',
                            googAvgEncodeMs: '0',
                            googEncodeUsagePercent: '0',
                            googFirsReceived: '0',
                            googFrameHeightSent: '0',
                            googFrameHeightInput: '0',
                            googFrameRateInput: '0',
                            googFrameRateSent: '0',
                            googFrameWidthSent: '0',
                            googFrameWidthInput: '0',
                            googNacksReceived: '0',
                            googPlisReceived: '0',
                            googRtt: '0'
                        }, s = {
                            id: '',
                            type: '',
                            mediaType: '',
                            audioOutputLevel: '0',
                            bytesReceived: '0',
                            packetsLost: '0',
                            packetsReceived: '0',
                            googAccelerateRate: '0',
                            googCurrentDelayMs: '0',
                            googDecodingCNG: '0',
                            googDecodingCTN: '0',
                            googDecodingCTSG: '0',
                            googDecodingNormal: '0',
                            googDecodingPLC: '0',
                            googDecodingPLCCNG: '0',
                            googExpandRate: '0',
                            googJitterBufferMs: '0',
                            googJitterReceived: '0',
                            googPreemptiveExpandRate: '0',
                            googPreferredJitterBufferMs: '0',
                            googSecondaryDecodedRate: '0',
                            googSpeechExpandRate: '0'
                        }, d = {
                            id: '',
                            type: '',
                            mediaType: '',
                            googTargetDelayMs: '0',
                            packetsLost: '0',
                            googDecodeMs: '0',
                            googMaxDecodeMs: '0',
                            googRenderDelayMs: '0',
                            googFrameWidthReceived: '0',
                            googFrameHeightReceived: '0',
                            googFrameRateReceived: '0',
                            googFrameRateDecoded: '0',
                            googFrameRateOutput: '0',
                            googJitterBufferMs: '0',
                            googCurrentDelayMs: '0',
                            googMinPlayoutDelayMs: '0',
                            googNacksSent: '0',
                            googPlisSent: '0',
                            googFirsSent: '0',
                            bytesReceived: '0',
                            packetsReceived: '0',
                            googFramesDecoded: '0'
                        }, c = 0;
                    t.getVideoRelatedStats = function (e) {
                        t.peerConnection.getStats().then(function (n) {
                            var i = !0, o = !1, a = void 0;
                            try {
                                for (var r, s = n.values()[Symbol.iterator](); !(i = (r = s.next()).done); i = !0) {
                                    var d = r.value;
                                    if (t.isSubscriber) {
                                        if (('inbound-rtp' === d.type || 'inboundrtp' === d.type) && 'video' === d.mediaType) {
                                            if (!t.lastReport)
                                                return void (t.lastReport = d);
                                            e && e({
                                                browser: 'firefox',
                                                mediaType: 'video',
                                                peerId: t.uid,
                                                isVideoMute: t.isVideoMute,
                                                frameRateReceived: d.framerateMean + '',
                                                frameRateDecoded: d.framesDecoded - t.lastReport.framesDecoded + '',
                                                bytesReceived: d.bytesReceived + '',
                                                packetsReceived: d.packetsReceived + '',
                                                packetsLost: d.packetsLost + ''
                                            }), t.lastReport = d;
                                        }
                                    } else if (('outbound-rtp' === d.type || 'outboundrtp' === d.type) && 'video' === d.mediaType) {
                                        if (!t.lastReport)
                                            return void (t.lastReport = d);
                                        e && e({
                                            mediaType: 'video',
                                            isVideoMute: t.isVideoMute,
                                            frameRateInput: d.framerateMean + '',
                                            frameRateSent: d.framesEncoded - t.lastReport.framesEncoded + ''
                                        }), t.lastReport = d;
                                    }
                                }
                            } catch (e) {
                                o = !0, a = e;
                            } finally {
                                try {
                                    i || null == s.return || s.return();
                                } finally {
                                    if (o)
                                        throw a;
                                }
                            }
                        });
                    }, t.getAudioRelatedStats = function (e) {
                        t.peerConnection.getStats().then(function (n) {
                            var i = !0, o = !1, a = void 0;
                            try {
                                for (var r, s = n.values()[Symbol.iterator](); !(i = (r = s.next()).done); i = !0) {
                                    var d = r.value;
                                    t.isSubscriber && ('inbound-rtp' !== d.type && 'inboundrtp' !== d.type || 'audio' !== d.mediaType || e && e({
                                        browser: 'firefox',
                                        mediaType: 'audio',
                                        peerId: t.uid,
                                        isAudioMute: t.isAudioMute,
                                        frameDropped: d.packetsLost + '',
                                        frameReceived: d.packetsReceived + '',
                                        googJitterReceived: d.jitter + '',
                                        bytesReceived: d.bytesReceived + '',
                                        packetsReceived: d.packetsReceived + '',
                                        packetsLost: d.packetsLost + ''
                                    }));
                                }
                            } catch (e) {
                                o = !0, a = e;
                            } finally {
                                try {
                                    i || null == s.return || s.return();
                                } finally {
                                    if (o)
                                        throw a;
                                }
                            }
                        });
                    }, t.getStatsRate = function (e) {
                        t.getStats(function (t) {
                            t.forEach(function (e) {
                                'inbound-rtp' !== e.type && 'inboundrtp' !== e.type || 'video' !== e.mediaType || e.googFrameRateDecoded && (e.googFrameRateDecoded = ((e.googFramesDecoded - c) / 3).toString(), c = e.googFramesDecoded);
                            }), e(t);
                        });
                    }, t.getStats = function (e) {
                        t.peerConnection.getStats().then(function (n) {
                            var i = [], o = !0, c = !1, u = void 0;
                            try {
                                for (var l, p = n.values()[Symbol.iterator](); !(o = (l = p.next()).done); o = !0) {
                                    var f = l.value;
                                    i.push(f), 'outbound-rtp' !== f.type && 'outboundrtp' !== f.type || 'video' !== f.mediaType || -1 !== f.id.indexOf('rtcp') || (r.id = f.id, r.type = f.type, r.mediaType = f.mediaType, r.bytesSent = f.bytesSent ? f.bytesSent + '' : '0', r.packetsSent = f.packetsSent ? f.packetsSent + '' : '0', r.googPlisReceived = f.pliCount ? f.pliCount + '' : '0', r.googNacksReceived = f.nackCount ? f.nackCount + '' : '0', r.googFirsReceived = f.firCount ? f.firCount + '' : '0', r.googFrameRateSent = f.framerateMean ? f.framerateMean + '' : '0'), 'outbound-rtp' !== f.type && 'outboundrtp' !== f.type || 'audio' !== f.mediaType || -1 !== f.id.indexOf('rtcp') || (a.id = f.id, a.type = f.type, a.mediaType = f.mediaType, a.bytesSent = f.bytesSent ? f.bytesSent + '' : '0', a.packetsSent = f.packetsSent ? f.packetsSent + '' : '0'), 'inbound-rtp' !== f.type && 'inboundrtp' !== f.type || 'audio' !== f.mediaType || f.isRemote || -1 !== f.id.indexOf('rtcp') || (s.id = f.id, s.type = f.type, s.mediaType = f.mediaType, s.bytesReceived = f.bytesReceived ? f.bytesReceived + '' : '0', s.packetsLost = f.packetsLost ? f.packetsLost + '' : '0', s.packetsReceived = f.packetsReceived ? f.packetsReceived + '' : '0', s.googJitterReceived = f.jitter ? f.jitter + '' : '0'), 'inbound-rtp' !== f.type && 'inboundrtp' !== f.type || 'video' !== f.mediaType || f.isRemote || -1 !== f.id.indexOf('rtcp') || (d.id = f.id, d.type = f.type, d.mediaType = f.mediaType, d.bytesReceived = f.bytesReceived ? f.bytesReceived + '' : '0', d.googFrameRateReceived = f.framerateMean ? f.framerateMean + '' : '0', d.googFramesDecoded = f.framesDecoded ? f.framesDecoded + '' : '0', d.packetsLost = f.packetsLost ? f.packetsLost + '' : '0', d.packetsReceived = f.packetsReceived ? f.packetsReceived + '' : '0', d.googJitterBufferMs = f.jitter ? f.jitter + '' : '0', d.googNacksSent = f.nackCount ? f.nackCount + '' : '0', d.googPlisSent = f.pliCount ? f.pliCount + '' : '0', d.googFirsSent = f.firCount ? f.firCount + '' : '0'), -1 !== f.id.indexOf('outbound_rtcp_video') && (r.packetsLost = f.packetsLost ? f.packetsLost + '' : '0');
                                }
                            } catch (e) {
                                c = !0, u = e;
                            } finally {
                                try {
                                    o || null == p.return || p.return();
                                } finally {
                                    if (c)
                                        throw u;
                                }
                            }
                            var m = [
                                r,
                                a,
                                s,
                                d
                            ];
                            m.push({
                                id: 'time',
                                startTime: t.connectedTime,
                                timestamp: new Date()
                            }), e(m, i);
                        }, function (e) {
                            o.default.error('[' + t.clientId + ']' + e);
                        });
                    }, t.addStream = function (e) {
                        i = !0, t.peerConnection.addStream(e), t.markActionNeeded();
                    }, t.removeStream = function () {
                        t.markActionNeeded();
                    }, t.close = function () {
                        t.state = 'closed', t.peerConnection.close();
                    }, t.markActionNeeded = function () {
                        t.actionNeeded = !0, t.doLater(function () {
                            t.onstablestate();
                        });
                    }, t.doLater = function (e) {
                        window.setTimeout(e, 1);
                    }, t.onstablestate = function () {
                        if (t.actionNeeded) {
                            if ('new' === t.state || 'established' === t.state)
                                i && (t.mediaConstraints = void 0), t.peerConnection.createOffer(function (e) {
                                    if (e.sdp = u(e.sdp), e.sdp = e.sdp.replace(/a=extmap:1 http:\/\/www.webrtc.org\/experiments\/rtp-hdrext\/abs-send-time/, 'a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time'), e.sdp !== t.prevOffer)
                                        return t.peerConnection.setLocalDescription(e), t.state = 'preparing-offer', void t.markActionNeeded();
                                    o.default.debug('[' + t.clientId + ']Not sending a new offer');
                                }, function (e) {
                                    o.default.debug('[' + t.clientId + ']Ups! create offer failed ', e);
                                }, t.mediaConstraints);
                            else if ('preparing-offer' === t.state) {
                                if (t.moreIceComing)
                                    return;
                                t.prevOffer = t.peerConnection.localDescription.sdp, t.prevOffer = t.prevOffer.replace(/a=candidate:.+typ\shost.+\r\n/g, 'a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n'), t.sendMessage('OFFER', t.prevOffer), t.state = 'offer-sent';
                            } else if ('offer-received' === t.state)
                                t.peerConnection.createAnswer(function (e) {
                                    if (t.peerConnection.setLocalDescription(e), t.state = 'offer-received-preparing-answer', t.iceStarted)
                                        t.markActionNeeded();
                                    else {
                                        var n = new Date();
                                        o.default.debug('[' + t.clientId + ']' + n.getTime() + ': Starting ICE in responder'), t.iceStarted = !0;
                                    }
                                }, function () {
                                    o.default.debug('[' + t.clientId + ']Ups! Something went wrong');
                                });
                            else if ('offer-received-preparing-answer' === t.state) {
                                if (t.moreIceComing)
                                    return;
                                var e = t.peerConnection.localDescription.sdp;
                                t.sendMessage('ANSWER', e), t.state = 'established';
                            } else
                                t.error('Dazed and confused in state ' + t.state + ', stopping here');
                            t.actionNeeded = !1;
                        }
                    }, t.sendOK = function () {
                        t.sendMessage('OK');
                    }, t.sendMessage = function (e, n) {
                        var i = {};
                        i.messageType = e, i.sdp = n, 'OFFER' === e ? (i.offererSessionId = t.sessionId, i.answererSessionId = t.otherSessionId, i.seq = t.sequenceNumber += 1, i.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (i.offererSessionId = t.incomingMessage.offererSessionId, i.answererSessionId = t.sessionId, i.seq = t.incomingMessage.seq), t.onsignalingmessage(JSON.stringify(i));
                    }, t._getSender = function (e) {
                        if (t.peerConnection && t.peerConnection.getSenders) {
                            var n = t.peerConnection.getSenders().find(function (t) {
                                return t.track.kind == e;
                            });
                            if (n)
                                return n;
                        }
                        return null;
                    }, t.hasSender = function (e) {
                        return !!t._getSender(e);
                    }, t.replaceTrack = function (e, n, i) {
                        var o = t._getSender(e.kind);
                        if (!o)
                            return i('NO_SENDER_FOUND');
                        try {
                            o.replaceTrack(e);
                        } catch (e) {
                            return i && i(e);
                        }
                        setTimeout(function () {
                            return n && n();
                        }, 50);
                    }, t.error = function (e) {
                        throw 'Error in RoapOnJsep: ' + e;
                    }, t.sessionId = t.roapSessionId += 1, t.sequenceNumber = 0, t.actionNeeded = !1, t.iceStarted = !1, t.moreIceComing = !0, t.iceCandidateCount = 0, t.onsignalingmessage = e.callback, t.peerConnection.ontrack = function (e) {
                        t.onaddstream && t.onaddstream(e, 'ontrack');
                    }, t.peerConnection.onremovestream = function (e) {
                        t.onremovestream && t.onremovestream(e);
                    }, t.peerConnection.oniceconnectionstatechange = function (e) {
                        'connected' === e.currentTarget.iceConnectionState && (t.connectedTime = new Date()), t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState);
                    };
                    var u = function (t) {
                        var n;
                        if (e.video && e.maxVideoBW && (null == (n = t.match(/m=video.*\r\n/)) && (n = t.match(/m=video.*\n/)), n && n.length > 0)) {
                            var i = n[0] + 'b=TIAS:' + 1000 * e.maxVideoBW + '\r\n';
                            t = t.replace(n[0], i);
                        }
                        return e.audio && e.maxAudioBW && (null == (n = t.match(/m=audio.*\r\n/)) && (n = t.match(/m=audio.*\n/)), n && n.length > 0) && (i = n[0] + 'b=TIAS:' + 1000 * e.maxAudioBW + '\r\n', t = t.replace(n[0], i)), t;
                    };
                    return t.onaddstream = null, t.onremovestream = null, t.state = 'new', t.markActionNeeded(), t;
                }, M = null, P = function () {
                    try {
                        M = window.require('electron');
                    } catch (e) {
                    }
                    return M;
                }, L = function (e) {
                    var t = a.b.reportApiInvoke(null, {
                            callback: e,
                            name: 'getScreenSources',
                            options: arguments,
                            tag: 'tracer'
                        }), n = P();
                    if (!n)
                        return t && t('electron is null');
                    n.desktopCapturer.getSources({
                        types: [
                            'window',
                            'screen'
                        ]
                    }, function (e, n) {
                        if (e)
                            return t && t(e);
                        t && t(null, n);
                    });
                }, x = function (e, t, n) {
                    var i = t.attributes.width;
                    t = {
                        audio: !1,
                        video: {
                            mandatory: {
                                chromeMediaSource: 'desktop',
                                chromeMediaSourceId: e,
                                maxHeight: t.attributes.height,
                                maxWidth: i,
                                maxFrameRate: t.attributes.maxFr,
                                minFrameRate: t.attributes.minFr
                            }
                        }
                    };
                    navigator.webkitGetUserMedia(t, function (e) {
                        n && n(null, e);
                    }, function (e) {
                        n && n(e);
                    });
                }, V = function () {
                    return !!P();
                }, F = L, B = x, U = function (e, t) {
                    L(function (n, i) {
                        if (n)
                            return t && t(n);
                        !function (e, t) {
                            var n = document.createElement('div');
                            n.innerText = 'share screen', n.setAttribute('style', 'text-align: center; height: 25px; line-height: 25px; border-radius: 4px 4px 0 0; background: #D4D2D4; border-bottom:  solid 1px #B9B8B9;');
                            var i = document.createElement('div');
                            i.setAttribute('style', 'width: 100%; height: 500px; padding: 15px 25px ; box-sizing: border-box;');
                            var o = document.createElement('div');
                            o.innerText = 'Agora Web Screensharing wants to share the contents of your screen with webdemo.agorabeckon.com. Choose what you\'d like to share.', o.setAttribute('style', 'height: 12%;');
                            var a = document.createElement('div');
                            a.setAttribute('style', 'width: 100%; height: 80%; background: #FFF; border:  solid 1px #CBCBCB; display: flex; flex-wrap: wrap; justify-content: space-around; overflow-y: scroll; padding: 0 15px; box-sizing: border-box;');
                            var r = document.createElement('div');
                            r.setAttribute('style', 'text-align: right; padding: 16px 0;');
                            var s = document.createElement('button');
                            s.innerHTML = 'cancel', s.setAttribute('style', 'width: 85px;'), s.onclick = function () {
                                document.body.removeChild(d), t && t('NotAllowedError');
                            }, r.appendChild(s), i.appendChild(o), i.appendChild(a), i.appendChild(r);
                            var d = document.createElement('div');
                            d.setAttribute('style', 'position: absolute; z-index: 99999999; top: 50%; left: 50%; width: 620px; height: 525px; background: #ECECEC; border-radius: 4px; -webkit-transform: translate(-50%,-50%); transform: translate(-50%,-50%);'), d.appendChild(n), d.appendChild(i), document.body.appendChild(d), e.map(function (e) {
                                if (e.id) {
                                    var n = document.createElement('div');
                                    n.setAttribute('style', 'width: 30%; height: 160px; padding: 20px 0; text-align: center;box-sizing: content-box;'), n.innerHTML = '<div style="height: 120px; display: table-cell; vertical-align: middle;"><img style="width: 100%; background: #333333; box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);" src=' + e.thumbnail.toDataURL() + ' /></div><span style="\theight: 40px; line-height: 40px; display: inline-block; width: 70%; word-break: keep-all; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">' + e.name + '</span>', n.onclick = function () {
                                        document.body.removeChild(d), t && t(null, e.id);
                                    }, a.appendChild(n);
                                }
                            });
                        }(i, function (n, i) {
                            if (n)
                                return t && t(n);
                            x(i, e, t);
                        });
                    });
                }, j = 103, W = function (e) {
                    var t = {};
                    if (t.clientId = e.clientId, e.session_id = j += 1, 'undefined' != 'object' && window.navigator)
                        if (null !== window.navigator.userAgent.match('Firefox'))
                            t.browser = 'mozilla', t = p.getBrowserVersion() >= 66 ? k(e) : D(e);
                        else if ('iOS' === p.getBrowserOS() || p.isSafari())
                            o.default.debug('[' + t.streamId + '][' + t.clientId + ']Safari'), (t = N(e)).browser = 'safari';
                        else if (window.navigator.userAgent.indexOf('MSIE '))
                            (t = C(e)).browser = 'ie';
                        else if (window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1] >= 26)
                            (t = C(e)).browser = 'chrome-stable';
                        else {
                            if (!(window.navigator.userAgent.toLowerCase().indexOf('chrome') >= 40))
                                throw t.browser = 'none', 'WebRTC stack not available';
                            (t = O(e)).browser = 'chrome-canary';
                        }
                    else
                        o.default.error('[' + t.streamId + '][' + t.clientId + ']Publish/subscribe video/audio streams not supported yet'), t = w(e);
                    return t;
                }, H = function (e, t, n) {
                    var i = {};
                    if (i.config = e, i.streamId = e.streamId, navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia, e.screen) {
                        if (V())
                            return e.sourceId ? B(e.sourceId, e, function (e, i) {
                                if (e)
                                    return n && n();
                                t && t(i);
                            }) : U(e, function (e, i) {
                                if (e)
                                    return n && n();
                                t && t(i);
                            });
                        if (o.default.debug('[' + i.streamId + ']Screen access requested'), null !== window.navigator.userAgent.match('Firefox')) {
                            e.mediaSource = e.mediaSource || 'screen';
                            if (!~[
                                    'screen',
                                    'window',
                                    'application'
                                ].indexOf(e.mediaSource))
                                return n && n('Invalid mediaSource, mediaSource should be one of [screen, window, application]');
                            if (!e.attributes)
                                return n && n('Share screen attributes is null');
                            var a = {};
                            a.video = {
                                frameRate: {
                                    ideal: e.attributes.mxaFr,
                                    max: e.attributes.mxaFr
                                },
                                height: { ideal: e.attributes.height },
                                width: { ideal: e.attributes.width },
                                mediaSource: e.mediaSource
                            }, navigator.getMedia(a, t, n);
                        } else if (null !== window.navigator.userAgent.match('Chrome')) {
                            if (window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1] < 34)
                                return void n({ code: 'This browser does not support screen sharing' });
                            var r = 'okeephmleflklcdebijnponpabbmmgeo';
                            if (e.extensionId)
                                o.default.debug('[' + i.streamId + ']extensionId supplied, using ' + e.extensionId), r = e.extensionId;
                            else if (window.navigator.mediaDevices.getDisplayMedia) {
                                var s = {
                                    video: {
                                        height: { ideal: e.attributes.height },
                                        width: { ideal: e.attributes.width },
                                        frameRate: {
                                            ideal: e.attributes.maxFr,
                                            max: e.attributes.maxFr
                                        }
                                    }
                                };
                                return o.default.debug('use getDisplayMedia, config.attributes:', e.attributes), o.default.debug('use getDisplayMedia, constraints:', s), window.navigator.mediaDevices.getDisplayMedia(s).then(function (e) {
                                    t && t(e);
                                }).catch(n);
                            }
                            o.default.debug('[' + i.streamId + ']Screen access on chrome stable, looking for extension');
                            try {
                                chrome.runtime.sendMessage(r, { getStream: !0 }, function (r) {
                                    if (void 0 !== r) {
                                        var s = r.streamId, d = e.attributes.width, c = e.attributes.height, u = e.attributes.maxFr, l = e.attributes.minFr;
                                        a = {
                                            video: {
                                                mandatory: {
                                                    chromeMediaSource: 'desktop',
                                                    chromeMediaSourceId: s,
                                                    maxHeight: c,
                                                    maxWidth: d,
                                                    maxFrameRate: u,
                                                    minFrameRate: l
                                                }
                                            }
                                        }, navigator.getMedia(a, t, n);
                                    } else {
                                        o.default.error('[' + i.streamId + ']No response from Chrome Plugin. Plugin not installed properly');
                                        n({
                                            name: 'PluginNotInstalledProperly',
                                            message: 'No response from Chrome Plugin. Plugin not installed properly.'
                                        });
                                    }
                                });
                            } catch (e) {
                                o.default.debug('[' + i.streamId + ']AgoraRTC screensharing plugin is not accessible');
                                return void n({ code: 'no_plugin_present' });
                            }
                        } else
                            o.default.debug('[' + i.streamId + ']This browser does not support screenSharing');
                    } else
                        window.navigator.userAgent.indexOf('Safari') > -1 && -1 === navigator.userAgent.indexOf('Chrome') ? navigator.mediaDevices.getUserMedia(e).then(t).catch(n) : 'undefined' != typeof navigator && navigator.getMedia ? navigator.getMedia(e, t, n) : o.default.error('[' + i.streamId + ']Video/audio streams not supported yet');
                }, G = n(7), J = function (e, t, n) {
                    if ([
                            'End2EndDelay',
                            'TransportDelay',
                            'PacketLossRate',
                            'RecvLevel',
                            'RecvBitrate',
                            'CodecType',
                            'MuteState',
                            'TotalFreezeTime',
                            'TotalPlayDuration',
                            'RecordingLevel',
                            'SendLevel',
                            'SamplingRate',
                            'SendBitrate',
                            'CodecType',
                            'MuteState',
                            'End2EndDelay',
                            'TransportDelay',
                            'PacketLossRate',
                            'RecvBitrate',
                            'RecvResolutionWidth',
                            'RecvResolutionHeight',
                            'RenderResolutionHeight',
                            'RenderResolutionWidth',
                            'RenderFrameRate',
                            'TotalFreezeTime',
                            'TotalPlayDuration',
                            'TargetSendBitrate',
                            'SendFrameRate',
                            'SendFrameRate',
                            'SendBitrate',
                            'SendResolutionWidth',
                            'SendResolutionHeight',
                            'CaptureResolutionHeight',
                            'CaptureResolutionWidth',
                            'EncodeDelay',
                            'MuteState',
                            'TotalFreezeTime',
                            'TotalDuration',
                            'CaptureFrameRate',
                            'RTT',
                            'OutgoingAvailableBandwidth',
                            'Duration',
                            'UserCount',
                            'SendBytes',
                            'RecvBytes',
                            'SendBitrate',
                            'RecvBitrate',
                            'accessDelay',
                            'audioSendBytes',
                            'audioSendPackets',
                            'videoSendBytes',
                            'videoSendPackets',
                            'videoSendPacketsLost',
                            'videoSendFrameRate',
                            'audioSendPacketsLost',
                            'videoSendResolutionWidth',
                            'videoSendResolutionHeight',
                            'accessDelay',
                            'audioReceiveBytes',
                            'audioReceivePackets',
                            'audioReceivePacketsLost',
                            'videoReceiveBytes',
                            'videoReceivePackets',
                            'videoReceivePacketsLost',
                            'videoReceiveFrameRate',
                            'videoReceiveDecodeFrameRate',
                            'videoReceiveResolutionWidth',
                            'videoReceiveResolutionHeight',
                            'endToEndDelay',
                            'videoReceiveDelay',
                            'audioReceiveDelay',
                            'FirstFrameTime',
                            'VideoFreezeRate',
                            'AudioFreezeRate',
                            'RenderResolutionWidth',
                            'RenderResolutionHeight'
                        ].indexOf(t) > -1 && ('string' == typeof n || isFinite(n)))
                        return e[t] = '' + n;
                }, z = n(10), K = new function () {
                    var e = r();
                    return e.devicesHistory = {}, e.states = {
                        UNINIT: 'UNINIT',
                        INITING: 'INITING',
                        INITED: 'INITED'
                    }, e.state = e.states.UNINIT, e.deviceStates = {
                        ACTIVE: 'ACTIVE',
                        INACTIVE: 'INACTIVE'
                    }, e.deviceReloadTimer = null, e._init = function (t, n) {
                        e.state = e.states.INITING, e.devicesHistory = {}, e._reloadDevicesInfo(function () {
                            e.state = e.states.INITED, e.dispatchEvent({ type: 'inited' }), t && t();
                        }, function (t) {
                            o.default.warning('Device Detection functionality cannot start properly.'), e.state = e.states.UNINIT, n && n(t);
                        });
                    }, e._enumerateDevices = function (e, t) {
                        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices)
                            return o.default.warning('enumerateDevices() not supported.'), t && t('enumerateDevices() not supported');
                        navigator.mediaDevices.enumerateDevices().then(function (t) {
                            e && setTimeout(function () {
                                e(t);
                            }, 0);
                        }).catch(function (e) {
                            t && t(e);
                        });
                    }, e._reloadDevicesInfo = function (t, n) {
                        var i = [];
                        e._enumerateDevices(function (n) {
                            var a = Date.now();
                            for (var r in (n.forEach(function (t) {
                                    var n = e.devicesHistory[t.deviceId];
                                    if ((n ? n.state : e.deviceStates.INACTIVE) != e.deviceStates.ACTIVE) {
                                        var o = n || { initAt: a };
                                        o.device = t, o.state = e.deviceStates.ACTIVE, i.push(o), e.devicesHistory[t.deviceId] = o;
                                    }
                                    e.devicesHistory[t.deviceId].lastReloadAt = a;
                                }), e.devicesHistory)) {
                                var s = e.devicesHistory[r];
                                s && s.state == e.deviceStates.ACTIVE && s.lastReloadAt !== a && (s.state = e.deviceStates.INACTIVE, i.push(s)), s.lastReloadAt = a;
                            }
                            e.state == e.states.INITED && i.forEach(function (t) {
                                var n = I()({}, t);
                                switch (t.device.kind) {
                                case 'audioinput':
                                    n.type = 'recordingDeviceChanged';
                                    break;
                                case 'audiooutput':
                                    n.type = 'playoutDeviceChanged';
                                    break;
                                case 'videoinput':
                                    n.type = 'cameraChanged';
                                    break;
                                default:
                                    o.default.warning('Unknown device change', n), n.type = 'unknownDeviceChanged';
                                }
                                e.dispatchEvent(n);
                            }), t && t();
                        }, n);
                    }, e.getDeviceById = function (t, n, i) {
                        e.getDevices(function (e) {
                            for (var o = 0; o < e.length; o++) {
                                var a = e[o];
                                if (a && a.deviceId === t)
                                    return n && n(a);
                            }
                            return i && i();
                        });
                    }, e.searchDeviceNameById = function (t) {
                        var n = e.devicesHistory[t];
                        return n ? n.device.label || n.device.deviceId : null;
                    }, e.getDevices = function (t, n) {
                        e._enumerateDevices(t, function (e) {
                            n && n(e.name + ': ' + e.message);
                        });
                    }, e.getVideoCameraIdByLabel = function (t, n, i) {
                        e.getCameras(function (e) {
                            var o = !0, a = !1, r = void 0;
                            try {
                                for (var s, d = e[Symbol.iterator](); !(o = (s = d.next()).done); o = !0) {
                                    var c = s.value;
                                    if (c.label === t)
                                        return n && n(c.deviceId);
                                }
                            } catch (e) {
                                a = !0, r = e;
                            } finally {
                                try {
                                    o || null == d.return || d.return();
                                } finally {
                                    if (a)
                                        throw r;
                                }
                            }
                            return i && i(A.NOT_FIND_DEVICE_BY_LABEL);
                        }, i);
                    }, e.getRecordingDevices = function (t, n) {
                        return e._enumerateDevices(function (e) {
                            var n = e.filter(function (e) {
                                return 'audioinput' == e.kind;
                            });
                            t && t(n);
                        }, function (e) {
                            n && n(e);
                        });
                    }, e.getPlayoutDevices = function (t, n) {
                        return e._enumerateDevices(function (e) {
                            var n = e.filter(function (e) {
                                return 'audiooutput' == e.kind;
                            });
                            t && t(n);
                        }, function (e) {
                            n && n(e);
                        });
                    }, e.getCameras = function (t, n) {
                        return e._enumerateDevices(function (e) {
                            var n = e.filter(function (e) {
                                return 'videoinput' == e.kind;
                            });
                            t && t(n);
                        }, function (e) {
                            n && n(e);
                        });
                    }, e._init(function () {
                        navigator.mediaDevices && navigator.mediaDevices.addEventListener && navigator.mediaDevices.addEventListener('devicechange', function () {
                            e._reloadDevicesInfo();
                        }), e.deviceReloadTimer = setInterval(e._reloadDevicesInfo, 5000);
                    }), e;
                }(), Y = function (e, t, n) {
                    for (var i = 0; i < n.length; i++)
                        if (e === n[i])
                            return !0;
                    throw new Error(''.concat(t, ' can only be set as ').concat(JSON.stringify(n)));
                }, q = function (e, t) {
                    if (!e)
                        throw new Error('Invalid param: '.concat(t || 'param', ' cannot be empty'));
                    if ('object' !== v()(e))
                        throw new Error(''.concat(t || 'This paramter', ' is of the object type'));
                    return !0;
                }, Q = function (e, t, n, i, o) {
                    if (re(n) && (n = 1), i = i || 255, re(o) && (o = !0), re(e))
                        throw new Error(''.concat(t || 'param', ' cannot be empty'));
                    if (!Z(e, n, i, o))
                        throw new Error('Invalid '.concat(t || 'string param', ': Length of the string: [').concat(n, ',').concat(i, '].').concat(o ? ' ASCII characters only.' : ''));
                }, X = function (e, t, n, i) {
                    if (re(n) && (n = 1), i = i || 10000, re(e))
                        throw new Error(''.concat(t || 'param', ' cannot be empty'));
                    if (!ee(e, n, i))
                        throw new Error('Invalid '.concat(t || 'number param', ': The value range is [').concat(n, ',').concat(i, ']. integer only'));
                }, $ = function (e, t) {
                    if (re(e))
                        throw new Error(''.concat(t || 'param', ' cannot be empty'));
                    if (!te(e))
                        throw new Error('Invalid '.concat(t || 'boolean param', ': The value is of the boolean type.'));
                }, Z = function (e, t, n, i) {
                    return t || (t = 0), n || (n = Number.MAX_SAFE_INTEGER), re(i) && (i = !0), ae(e) && (!i || ie(e)) && e.length >= t && e.length <= n;
                }, ee = function (e, t, n) {
                    return oe(e) && e >= t && e <= n;
                }, te = function (e) {
                    return 'boolean' == typeof e;
                }, ne = function (e) {
                    return Z(e, 1, 2047);
                }, ie = function (e) {
                    if ('string' == typeof e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e.charCodeAt(t);
                            if (n < 0 || n > 255)
                                return !1;
                        }
                        return !0;
                    }
                }, oe = function (e) {
                    return 'number' == typeof e && e % 1 == 0;
                }, ae = function (e) {
                    return 'string' == typeof e;
                }, re = function (e) {
                    return null == e;
                };
            var se = function (e) {
                    var t = r();
                    if (t.params = I()({}, e), t.stream = e.stream, t.url = e.url, t.onClose = void 0, t.local = !1, t.videoSource = e.videoSource, t.audioSource = e.audioSource, t.video = !!e.video, t.audio = !!e.audio, t.screen = !!e.screen, t.screenAttributes = {
                            width: 1920,
                            height: 1080,
                            maxFr: 5,
                            minFr: 1
                        }, t.videoSize = e.videoSize, t.player = void 0, t.audioLevelHelper = null, e.attributes = e.attributes || {}, t.attributes = e.attributes, t.microphoneId = e.microphoneId, t.cameraId = e.cameraId, t.inSwitchDevice = !1, t.userMuteVideo = !1, t.userMuteAudio = !1, t.peerMuteVideo = !1, t.peerMuteAudio = !1, t.lowStream = null, t.videoWidth = 0, t.videoHeight = 0, t.streamId = null, t.streamId = e.streamID, t.userId = null, t.mirror = !1 !== e.mirror, t.DTX = e.audioProcessing && e.audioProcessing.DTX, t.audioProcessing = e.audioProcessing, t.highQuality = !1, t.stereo = !1, t.speech = !1, t.screen || delete t.screen, !(void 0 === t.videoSize || t.videoSize instanceof Array && 4 === t.videoSize.length))
                        throw Error('Invalid Video Size');
                    function n(e, t) {
                        return {
                            width: { ideal: e },
                            height: { ideal: t }
                        };
                    }
                    t.videoSize = [
                        640,
                        480,
                        640,
                        480
                    ], void 0 !== e.local && !0 !== e.local || (t.local = !0), t.initialized = !t.local, function (e) {
                        e.audioMixing = {
                            audioContextInited: !1,
                            defaultVolume: 100,
                            inEarMonitoring: 'FILE',
                            sounds: {},
                            states: {
                                IDLE: 'IDLE',
                                STARTING: 'STARTING',
                                BUSY: 'BUSY',
                                PAUSED: 'PAUSED'
                            },
                            inEarMonitoringModes: {
                                NONE: 'NONE',
                                FILE: 'FILE',
                                MICROPHONE: 'MOCROPHONE',
                                ALL: 'ALL'
                            },
                            ctx: null,
                            mediaStreamSource: null,
                            mediaStreamDest: null,
                            buffer: {}
                        }, e._initSoundIfNotExists = function (t, n) {
                            e.audioMixing.sounds[t] || (e.audioMixing.sounds[t] = {
                                soundId: t,
                                state: 'IDLE',
                                muted: e.userMuteAudio,
                                filePath: n,
                                volume: e.audioMixing.defaultVolume,
                                startAt: null,
                                startOffset: null,
                                pauseAt: null,
                                pauseOffset: null,
                                resumeAt: null,
                                resumeOffset: null,
                                stopAt: null,
                                options: null,
                                source: null
                            });
                        }, e._initSoundIfNotExists(-1), e.loadAudioBuffer = function (t, n, i) {
                            var r = a.b.reportApiInvoke(e.sid, {
                                callback: i,
                                name: 'Stream.loadAudioBuffer',
                                options: arguments,
                                tag: 'tracer'
                            });
                            Q(n, 'url', 1, 1024, !1), Q(t, 'id', 1, 1024, !1);
                            var s = new XMLHttpRequest();
                            s.open('GET', n, !0), s.responseType = 'arraybuffer', s.onload = function () {
                                if (s.status > 400) {
                                    var n = s.statusText;
                                    return o.default.error('['.concat(e.streamId, '] loadAudioBuffer Failed: ') + n), r(n);
                                }
                                var i = s.response;
                                e.audioMixing.audioContextInited || e._initAudioContext(), e.audioMixing.ctx.decodeAudioData(i, function (n) {
                                    e.audioMixing.buffer[t] = n, r(null);
                                }, function (t) {
                                    o.default.error('['.concat(e.streamId, '] decodeAudioData Failed: '), t), r(t);
                                });
                            }, s.send();
                        }, e.createAudioBufferSource = function (t) {
                            var n = a.b.reportApiInvoke(e.sid, {
                                name: 'Stream.createAudioBufferSource',
                                options: arguments,
                                tag: 'tracer'
                            });
                            if (e.audioMixing.buffer[t.id]) {
                                var i = e.audioMixing.buffer[t.id], r = e.audioMixing.ctx.createBufferSource();
                                r.buffer = i;
                                var s = e.audioMixing.ctx.createGain();
                                if (r.connect(s), s.connect(e.audioMixing.mediaStreamDest), r.gainNode = s, t.loop)
                                    r.loop = !0, r.start(0, t.playTime / 1000);
                                else if (t.cycle > 1)
                                    if (Object(p.isChrome)()) {
                                        r.loop = !0;
                                        var d = t.cycle * i.duration * 1000 - (t.playTime || 0);
                                        r.start(0, t.playTime / 1000, d / 1000);
                                    } else
                                        o.default.warning('['.concat(e.streamId, '] Cycle Param is ignored by current browser')), r.start(0, t.playTime / 1000);
                                else
                                    r.start(0, t.playTime / 1000);
                                var c = e.audioMixing.sounds[t.soundId];
                                return c.source = r, e._flushAudioMixingMuteStatus(), r.addEventListener('ended', function () {
                                    r === c.source && e.dispatchEvent({
                                        type: 'audioSourceEnded',
                                        soundId: t.soundId,
                                        source: r,
                                        sound: c
                                    });
                                }), n(), r;
                            }
                            return o.default.error('['.concat(e.streamId, '] '), 'AUDIOBUFFER_NOT_FOUND', t.id), n(!1), !1;
                        }, e.on('audioSourceEnded', function (t) {
                            t.source;
                            var n = t.sound;
                            n && n.state === e.audioMixing.states.BUSY && !n.pauseAt && (n.state = e.audioMixing.states.IDLE, n.startAt = null, n.startOffset = null, n.resumeAt = null, n.resumeOffset = null, e.audioMixing.mediaStreamSource.connect(e.audioMixing.mediaStreamDest));
                        }), e.clearAudioBufferSource = function () {
                            e.audioBufferSource.forEach(function (e) {
                                e.stop();
                            });
                        }, e._isSoundExists = function (t) {
                            return !!e.audioMixing.sounds[t.soundId] || (o.default.error('SoundId not exists. #'.concat(t.soundId)), !1);
                        }, e._initAudioContext = function () {
                            if (e.audioMixing.audioContextInited)
                                throw new Error('Failed to init audio context. Already inited');
                            if (!e.stream)
                                throw new Error('Failed to init audio context. Local Stream not initialized');
                            e.audioMixing.ctx = Object(z.a)(), e.audioMixing.mediaStreamSource = e.audioMixing.ctx.createMediaStreamSource(e.stream), e.audioMixing.mediaStreamDest = e.audioMixing.ctx.createMediaStreamDestination(), e.audioMixing.mediaStreamSource.connect(e.audioMixing.mediaStreamDest);
                            var t = e.stream.getVideoTracks()[0];
                            if (t && e.audioMixing.mediaStreamDest.stream.addTrack(t), e._isAudioMuted() ? (e._unmuteAudio(), e.stream = e.audioMixing.mediaStreamDest.stream, e._muteAudio()) : e.stream = e.audioMixing.mediaStreamDest.stream, e.audioLevelHelper = null, e.pc && e.pc.peerConnection && e.pc.peerConnection) {
                                var n = (e.pc.peerConnection && e.pc.peerConnection.getSenders()).find(function (e) {
                                        return e && e.track && 'audio' == e.track.kind;
                                    }), i = e.audioMixing.mediaStreamDest.stream.getAudioTracks()[0];
                                n && n.replaceTrack && i && n.replaceTrack(i);
                            }
                            e.audioMixing.audioContextInited = !0;
                        }, e._reloadInEarMonitoringMode = function (t) {
                            if (t) {
                                if (!e.audioMixing.inEarMonitoringModes[t])
                                    return o.default.error('['.concat(e.streamId, '] Invalid InEarMonitoringMode ').concat(t));
                                e.audioMixing.inEarMonitoring = t;
                            }
                            switch (e.audioMixing.audioContextInited || e._initAudioContext(), e.audioMixing.inEarMonitoring) {
                            case e.audioMixing.inEarMonitoringModes.FILE:
                                e.audioMixing.mediaStreamSource.connectedToDestination && (e.audioMixing.mediaStreamSource.disconnect(e.audioMixing.ctx.destination), e.audioMixing.mediaStreamSource.connectedToDestination = !1);
                            case e.audioMixing.inEarMonitoringModes.ALL:
                                for (var n in e.audioMixing.sounds) {
                                    var i = e.audioMixing.sounds[n];
                                    i && i.source && !i.source.connectedToDestination && (i.source.gainNode.connect(e.audioMixing.ctx.destination), i.source.connectedToDestination = !0);
                                }
                            }
                            switch (e.audioMixing.inEarMonitoring) {
                            case e.audioMixing.inEarMonitoringModes.MICROPHONE:
                                e.audioMixing.source.forEach(function (t) {
                                    t.connectedToDestination && (t.gainNode.disconnect(e.audioMixing.ctx.destination), t.connectedToDestination = !1);
                                });
                            case e.audioMixing.inEarMonitoringModes.ALL:
                                e.audioMixing.mediaStreamSource.connectedToDestination || (e.audioMixing.mediaStreamSource.connect(e.audioMixing.ctx.destination), e.audioMixing.mediaStreamSource.connectedToDestination = !0);
                            }
                        }, e._startAudioMixingBufferSource = function (t) {
                            e.audioMixing.audioContextInited || e._initAudioContext();
                            var n = {
                                    soundId: t.soundId,
                                    id: t.filePath,
                                    loop: t.loop,
                                    cycle: t.cycle,
                                    playTime: t.playTime || 0
                                }, i = t.replace, o = e.createAudioBufferSource(n);
                            return o.sound = e.audioMixing.sounds[t.soundId], o ? (o.addEventListener('ended', e._audioMixingFinishedListener, { once: !0 }), e._reloadInEarMonitoringMode(), i && e.audioMixing.mediaStreamSource.disconnect(e.audioMixing.mediaStreamDest), o) : null;
                        }, e._stopAudioMixingBufferSource = function (t) {
                            var n = e.audioMixing.sounds[t.soundId].source;
                            return n ? (n.removeEventListener('ended', e._audioMixingFinishedListener), e.audioMixing.mediaStreamSource.connect(e.audioMixing.mediaStreamDest), n.stop(), n) : null;
                        }, e._flushAudioMixingMuteStatus = function (t) {
                            for (var n in e.audioMixing.sounds) {
                                var i = e.audioMixing.sounds[n];
                                i && (void 0 !== t && (i.muted = !!t), i.source && (i.muted ? i.source.gainNode.gain.value = 0 : i.source.gainNode.gain.value = i.volume / 100));
                            }
                        }, e._handleAudioMixingInvalidStateError = function (t, n, i) {
                            var a = e.audioMixing.sounds[n.soundId], r = -1 === n.soundId ? 'INVALID_AUDIO_MIXING_STATE' : 'INVALID_PLAY_EFFECT_STATE';
                            o.default.error('['.concat(e.streamId, '] Cannot ').concat(t, ': ').concat(r, ', state is ').concat(a.state)), i && i(r);
                        }, e._handleAudioMixingNoSourceError = function (t, n, i) {
                            e.audioMixing.sounds[n.soundId].state = e.audioMixing.states.IDLE;
                            var a = -1 === n.soundId ? 'NO_AUDIO_MIXING_SOURCE' : 'NO_EFFECT_SOURCE';
                            o.default.error('['.concat(e.streamId, '] Cannot ').concat(t, ': ').concat(a)), i && i(a);
                        }, e._getOneEffectStates = function (t) {
                            var n = e.audioMixing.sounds[t.soundId];
                            return function () {
                                return n ? {
                                    state: n.state,
                                    startAt: n.startAt,
                                    resumeAt: n.resumeAt,
                                    pauseOffset: n.pauseOffset,
                                    pauseAt: n.pauseAt,
                                    resumeOffset: n.resumeOffset,
                                    stopAt: n.stopAt,
                                    duration: e._getOneEffectDuration(t),
                                    position: e._getOneEffectCurrentPosition(t)
                                } : {};
                            };
                        }, e._audioMixingFinishedListener = function () {
                            var t = this.sound;
                            t.state === e.audioMixing.states.IDLE && e.audioMixing.buffer[t.options.filePath] && !t.options.cacheResource && (o.default.debug('Recycled buffer '.concat(t.options.filePath)), delete e.audioMixing.buffer[t.options.filePath]), -1 === t.soundId && e.dispatchEvent({ type: 'audioMixingFinished' });
                        }, e._playOneEffect = function (t, n) {
                            q(t, 'options');
                            var i = t.soundId, a = (t.filePath, t.cacheResource);
                            if (t.cycle, t.loop, t.playTime, t.replace, Object(p.isSafari)() && Object(p.getBrowserVersion)() < 12) {
                                var r = 'BROWSER_NOT_SUPPORT';
                                return o.default.error('['.concat(e.streamId, '] Cannot _playOneEffect: '), r), n(r);
                            }
                            e.audioMixing.audioContextInited || e._initAudioContext(), e._initSoundIfNotExists(i);
                            var s = e.audioMixing.sounds[i];
                            if (s.state === e.audioMixing.states.IDLE) {
                                if (void 0 !== t.cycle && !t.cycle > 0)
                                    return r = 'Invalid Parmeter cycle: ' + t.cycle, o.default.error('['.concat(e.streamId, '] ').concat(i), r), n(r);
                                if (re(a) && (t.cacheResource = !0), s.state = e.audioMixing.states.STARTING, s.options = t, e.audioMixing.buffer[t.filePath]) {
                                    var d = e._startAudioMixingBufferSource(t);
                                    if (d)
                                        return s.source = d, s.startAt = Date.now(), s.resumeAt = null, s.pauseOffset = null, s.pauseAt = null, s.resumeOffset = null, s.stopAt = null, s.startOffset = t.playTime || 0, s.state = e.audioMixing.states.BUSY, e._flushAudioMixingMuteStatus(), n(null);
                                    s.state = e.audioMixing.states.IDLE;
                                    var c = 'CREATE_BUFFERSOURCE_FAILED';
                                    if (n)
                                        return n(c);
                                    o.default.error('['.concat(e.streamId, '] '), c);
                                } else
                                    e.loadAudioBuffer(t.filePath, t.filePath, function (i) {
                                        if (i)
                                            s.state = e.audioMixing.states.IDLE, n ? n(i) : o.default.error('['.concat(e.streamId, '] '), i);
                                        else {
                                            var a = e._startAudioMixingBufferSource(t);
                                            if (a)
                                                return s.source = a, s.startAt = Date.now(), s.resumeAt = null, s.pauseOffset = null, s.pauseAt = null, s.resumeOffset = null, s.stopAt = null, s.startOffset = t.playTime || 0, s.state = e.audioMixing.states.BUSY, e._flushAudioMixingMuteStatus(), n(null);
                                            if (s.state = e.audioMixing.states.IDLE, i = 'CREATE_BUFFERSOURCE_FAILED', n)
                                                return n(i);
                                            o.default.error('['.concat(e.streamId, '] '), i);
                                        }
                                    });
                            } else
                                e._handleAudioMixingInvalidStateError('_playEffect', t, n);
                        }, e._stopOneEffect = function (t, n) {
                            var i = e.audioMixing.sounds[t.soundId];
                            return e._isSoundExists(t) ? i.state === e.audioMixing.states.BUSY || i.state === e.audioMixing.states.PAUSED ? (e._stopAudioMixingBufferSource(t), i.stopAt = Date.now(), i.state = e.audioMixing.states.IDLE, e.audioMixing.buffer[i.options.filePath] && !i.options.cacheResource && (o.default.debug('Recycled buffer '.concat(i.options.filePath)), delete e.audioMixing.buffer[i.options.filePath]), void (n && n(null))) : void e._handleAudioMixingInvalidStateError('_stopOneEffect', t, n) : n('SOUND_NOT_EXISTS');
                        }, e._pauseOneEffect = function (t, n) {
                            var i = e.audioMixing.sounds[t.soundId];
                            if (i.state === e.audioMixing.states.BUSY)
                                return e._stopAudioMixingBufferSource(t) ? (i.pauseAt = Date.now(), i.state = e.audioMixing.states.PAUSED, i.resumeAt ? i.pauseOffset = i.pauseAt - i.resumeAt + i.resumeOffset : i.pauseOffset = i.pauseAt - i.startAt + i.startOffset, n && n(null)) : void e._handleAudioMixingNoSourceError('_pauseOneEffect', t, n);
                            e._handleAudioMixingInvalidStateError('_pauseOneEffect', t, n);
                        }, e._resumeOneEffect = function (t, n) {
                            var i = e.audioMixing.sounds[t.soundId];
                            if (i.state === e.audioMixing.states.PAUSED) {
                                var a = {
                                        soundId: t.soundId,
                                        filePath: i.options.filePath,
                                        cycle: i.options.cycle,
                                        loop: i.options.loop,
                                        playTime: i.pauseOffset,
                                        replace: i.options.replace
                                    }, r = e._startAudioMixingBufferSource(a);
                                if (!r) {
                                    var s = 'CREATE_BUFFERSOURCE_FAILED';
                                    return n(s), void o.default.error('['.concat(e.streamId, '] '), s);
                                }
                                i.source = r, i.resumeAt = Date.now(), i.resumeOffset = i.pauseOffset, i.state = e.audioMixing.states.BUSY, i.pauseAt = null, i.pauseOffset = null, n(null);
                            } else
                                e._handleAudioMixingInvalidStateError('_resumeOneEffect', t, n);
                        }, e._getOneEffectDuration = function (t) {
                            var n = e.audioMixing.sounds[t.soundId];
                            return n.options && n.options.filePath && e.audioMixing.buffer[n.options.filePath] ? 1000 * e.audioMixing.buffer[n.options.filePath].duration : null;
                        }, e._getOneEffectCurrentPosition = function (t, n) {
                            var i = e.audioMixing.sounds[t.soundId];
                            return i.state === e.audioMixing.states.PAUSED ? i.pauseOffset % e._getOneEffectDuration(t) : i.state === e.audioMixing.states.BUSY ? (Date.now() - i.startAt + i.startOffset) % e._getOneEffectDuration(t) : void (n && e._handleAudioMixingInvalidStateError('_getOneEffectCurrentPosition', t));
                        }, e._setOneEffectPosition = function (t, n, i) {
                            var a = e.audioMixing.sounds[t.soundId];
                            if (a.state === e.audioMixing.states.BUSY) {
                                if (!e._stopAudioMixingBufferSource(t))
                                    return void e._handleAudioMixingNoSourceError('_setOneEffectPosition', t, i);
                                var r = {
                                        soundId: t.soundId,
                                        filePath: a.options.filePath,
                                        loop: a.options.loop,
                                        cycle: a.options.cycle,
                                        playTime: n
                                    }, s = e._startAudioMixingBufferSource(r);
                                if (!s) {
                                    var d = 'CREATE_BUFFERSOURCE_FAILED';
                                    return i && i(d), void o.default.error('['.concat(e.streamId, '] '), d);
                                }
                                a.source = s, a.startAt = Date.now(), a.startOffset = n, a.resumeAt = null, a.resumeOffset = null, a.pauseOffset = null, a.pauseAt = null;
                            } else {
                                if (a.state !== e.audioMixing.states.PAUSED)
                                    return void e._handleAudioMixingInvalidStateError('_setOneEffectPosition', t, i);
                                a.pauseOffset = n;
                            }
                            i && i(null);
                        }, e.startAudioMixing = function (t, n) {
                            var o = a.b.reportApiInvoke(e.sid, {
                                callback: function (t) {
                                    if (t)
                                        return n && n(t);
                                    e.dispatchEvent({ type: 'audioMixingPlayed' }), n && n(null);
                                },
                                getStates: e._getOneEffectStates({ soundId: -1 }),
                                name: 'Stream.startAudioMixing',
                                options: t
                            });
                            q(t, 'options');
                            var r = t.filePath, s = t.cacheResource, d = t.cycle, c = t.loop, u = t.playTime, l = t.replace;
                            Q(r, 'filePath', 1, Object(i.getParameter)('FILEPATH_LENMAX'), !1), X(u, 'playTime', 0, 100000000), !re(d) && X(d, 'cycle'), !re(c) && $(c, 'loop'), !re(l) && $(l, 'replace'), !re(s) && $(s, 'cacheResource');
                            var p = I()({ soundId: -1 }, t);
                            e._playOneEffect(p, o);
                        }, e.stopAudioMixing = function (t) {
                            var n = a.b.reportApiInvoke(e.sid, {
                                callback: t,
                                getStates: e._getOneEffectStates({ soundId: -1 }),
                                name: 'Stream.stopAudioMixing'
                            });
                            e._stopOneEffect({ soundId: -1 }, n);
                        }, e.pauseAudioMixing = function (t) {
                            var n = a.b.reportApiInvoke(e.sid, {
                                callback: t,
                                getStates: e._getOneEffectStates({ soundId: -1 }),
                                name: 'Stream.pauseAudioMixing'
                            });
                            return e._pauseOneEffect({ soundId: -1 }, n);
                        }, e.resumeAudioMixing = function (t) {
                            var n = a.b.reportApiInvoke(e.sid, {
                                callback: function (n, i) {
                                    if (n)
                                        return t && t(n);
                                    e.dispatchEvent({ type: 'audioMixingPlayed' }), t && t(null);
                                },
                                getStates: e._getOneEffectStates({ soundId: -1 }),
                                name: 'Stream.resumeAudioMixing'
                            });
                            e._resumeOneEffect({ soundId: -1 }, n);
                        }, e.adjustAudioMixingVolume = function (t) {
                            var n = a.b.reportApiInvoke(e.sid, {
                                getStates: e._getOneEffectStates({ soundId: -1 }),
                                name: 'Stream.adjustAudioMixingVolume',
                                options: arguments,
                                tag: 'tracer'
                            });
                            X(t, 'volume', 0, 100), e.audioMixing.sounds[-1].volume = t, e._flushAudioMixingMuteStatus(), n();
                        }, e.getAudioMixingDuration = function () {
                            var t = a.b.reportApiInvoke(e.sid, {
                                    getStates: e._getOneEffectStates({ soundId: -1 }),
                                    name: 'Stream.getAudioMixingDuration'
                                }), n = e._getOneEffectDuration({ soundId: -1 });
                            return t(null, n), n;
                        }, e.getAudioMixingCurrentPosition = function () {
                            var t = a.b.reportApiInvoke(e.sid, {
                                    getStates: e._getOneEffectStates({ soundId: -1 }),
                                    name: 'Stream.getAudioMixingCurrentPosition'
                                }), n = e._getOneEffectCurrentPosition({ soundId: -1 }, !0);
                            return t(null, n), n;
                        }, e.setAudioMixingPosition = function (t, n) {
                            var i = a.b.reportApiInvoke(e.sid, {
                                callback: n,
                                options: arguments,
                                tag: 'tracer',
                                getStates: e._getOneEffectStates({ soundId: -1 }),
                                name: 'Stream.setAudioMixingPosition'
                            });
                            X(t, 'position', 0, 100000000), e._setOneEffectPosition({ soundId: -1 }, t, i);
                        }, e.playEffect = function (t, n) {
                            var o = a.b.reportApiInvoke(e.sid, {
                                callback: function (t) {
                                    if (t)
                                        return n && n(t);
                                    e.dispatchEvent({ type: 'effectPlayed' }), n && n(null);
                                },
                                name: 'Stream.playEffect',
                                options: t
                            });
                            q(t, 'options');
                            var r = t.soundId, s = t.filePath, d = t.cycle;
                            X(r, 'soundId', 1, 10000), Q(s, 'filePath', 0, Object(i.getParameter)('FILEPATH_LENMAX'), !1), !re(d) && X(d, 'cycle'), e._playOneEffect(t, o);
                        }, e.stopEffect = function (t, n) {
                            var i = a.b.reportApiInvoke(e.sid, {
                                callback: n,
                                getStates: e._getOneEffectStates({ soundId: t }),
                                name: 'Stream.stopEffect'
                            });
                            X(t, 'soundId', 1, 10000), e._stopOneEffect({ soundId: t }, i);
                        }, e.stopAllEffects = function (t) {
                            var n = a.b.reportApiInvoke(e.sid, {
                                    callback: t,
                                    name: 'Stream.stopAllEffect'
                                }), i = !1, o = 0, r = 0, s = function (e) {
                                    i || (e ? (n(e), i = !0) : o += 1, o === r && (n(null), i = !0));
                                };
                            for (var d in e.audioMixing.sounds) {
                                var c = e.audioMixing.sounds[d];
                                -1 !== c.soundId && (c.state !== e.audioMixing.states.BUSY && c.state !== e.audioMixing.states.PAUSED || (r++, e._stopOneEffect({ soundId: d }, s)));
                            }
                            r || n(null);
                        }, e.preloadEffect = function (t, n, o) {
                            var r = a.b.reportApiInvoke(e.sid, {
                                callback: o,
                                options: arguments,
                                tag: 'tracer',
                                name: 'Stream.preloadEffect'
                            });
                            X(t, 'soundId', 1, 10000), Q(n, 'filePath', 1, Object(i.getParameter)('FILEPATH_LENMAX'), !1), e._initSoundIfNotExists(t, n), e.audioMixing.buffer[n] ? r(null) : e.loadAudioBuffer(n, n, r);
                        }, e.unloadEffect = function (t, n) {
                            var i = a.b.reportApiInvoke(e.sid, {
                                callback: n,
                                options: arguments,
                                tag: 'tracer',
                                name: 'Stream.unloadEffect'
                            });
                            X(t, 'soundId', 1, 10000);
                            var r = e.audioMixing.sounds[t];
                            if (!r) {
                                var s = 'SOUND_NOT_EXISTS';
                                return o.default.error(s, t), void i(s);
                            }
                            var d = r.options ? r.options.filePath : r.filePath;
                            if (d)
                                delete e.audioMixing.buffer[d], delete e.audioMixing.sounds[t], i(null);
                            else {
                                var c = 'SOUND_BUFFER_NOT_FOUND';
                                o.default.error(c, t), i(c);
                            }
                        }, e.pauseEffect = function (t, n) {
                            var i = a.b.reportApiInvoke(e.sid, {
                                callback: n,
                                options: arguments,
                                tag: 'tracer',
                                name: 'Stream.pauseEffect'
                            });
                            return e._pauseOneEffect({ soundId: t }, i);
                        }, e.pauseAllEffects = function (t) {
                            var n = a.b.reportApiInvoke(e.sid, {
                                    callback: t,
                                    name: 'Stream.pauseAllEffects'
                                }), i = !1, o = 0, r = 0, s = function (e) {
                                    i || (e ? (n(e), i = !0) : o += 1, o === r && (n(null), i = !0));
                                };
                            for (var d in e.audioMixing.sounds)
                                '-1' !== d && e.audioMixing.sounds[d].state === e.audioMixing.states.BUSY && (r++, e._pauseOneEffect({ soundId: d }, s));
                            r || n(null);
                        }, e.resumeEffect = function (t, n) {
                            X(t, 'soundId', 1, 10000);
                            var i = a.b.reportApiInvoke(e.sid, {
                                callback: n,
                                options: arguments,
                                tag: 'tracer',
                                name: 'Stream.resumeEffect'
                            });
                            return e._resumeOneEffect({ soundId: t }, i);
                        }, e.resumeAllEffects = function (t) {
                            var n = a.b.reportApiInvoke(e.sid, {
                                    callback: t,
                                    name: 'Stream.resumeAllEffects'
                                }), i = !1, o = 0, r = 0, s = function (e) {
                                    i || (e ? (n(e), i = !0) : o += 1, o === r && (n(null), i = !0));
                                };
                            for (var d in e.audioMixing.sounds)
                                '-1' !== d && e.audioMixing.sounds[d].state === e.audioMixing.states.PAUSED && (r++, e._resumeOneEffect({ soundId: d }, s));
                            r || n(null);
                        }, e.getEffectsVolume = function () {
                            var t = [];
                            for (var n in e.audioMixing.sounds) {
                                var i = e.audioMixing.sounds[n];
                                i && '-1' !== n && t.push({
                                    soundId: parseInt(n),
                                    volume: i.volume
                                });
                            }
                            return t;
                        }, e.setEffectsVolume = function (t, n) {
                            var i = a.b.reportApiInvoke(e.sid, {
                                name: 'Stream.setEffectsVolume',
                                options: arguments,
                                tag: 'tracer',
                                callback: n
                            });
                            for (var o in (X(t, 'volume', 0, 100), e.audioMixing.defaultVolume = t, e.audioMixing.sounds)) {
                                var r = e.audioMixing.sounds[o];
                                '-1' !== o && (r.volume = t);
                            }
                            e._flushAudioMixingMuteStatus(), i(null);
                        }, e.setVolumeOfEffect = function (t, n, i) {
                            var o = a.b.reportApiInvoke(e.sid, {
                                name: 'Stream.setVolumeOfEffect',
                                options: arguments,
                                tag: 'tracer',
                                callback: i
                            });
                            X(t, 'soundId', 0, 10000), X(n, 'volume', 0, 100), e._initSoundIfNotExists(t), e.audioMixing.sounds[t].volume = n, e._flushAudioMixingMuteStatus(), o(null);
                        };
                    }(t), t.on('collectStats', function (e) {
                        e.promises.push(t._getPCStats()), e.promises.push(new Promise(function (e) {
                            var n = {};
                            t.pc && t.pc.isSubscriber ? null !== window.navigator.userAgent.match('Firefox') && (J(n, 'videoReceiveResolutionHeight', t.videoHeight), J(n, 'videoReceiveResolutionWidth', t.videoWidth)) : t.pc && !t.pc.isSubscriber && ((Object(p.isSafari)() || Object(p.isFireFox)()) && (J(n, 'videoSendResolutionHeight', t.videoHeight), J(n, 'videoSendResolutionWidth', t.videoWidth)), (Object(p.isSafari)() || Object(p.isFireFox)()) && t.uplinkStats && J(n, 'videoSendPacketsLost', t.uplinkStats.uplink_cumulative_lost)), e(n);
                        })), e.promises.push(new Promise(function (e) {
                            var n = {};
                            return t.traffic_stats && t.pc && t.pc.isSubscriber ? (J(n, 'accessDelay', t.traffic_stats.access_delay), J(n, 'endToEndDelay', t.traffic_stats.e2e_delay), J(n, 'videoReceiveDelay', t.traffic_stats.video_delay), J(n, 'audioReceiveDelay', t.traffic_stats.audio_delay)) : t.traffic_stats && t.pc && !t.pc.isSubscriber && J(n, 'accessDelay', t.traffic_stats.access_delay), e(n);
                        }));
                    });
                    var s = {
                        true: !0,
                        unspecified: !0,
                        '90p_1': n(160, 90),
                        '120p_1': n(160, 120),
                        '120p_3': n(120, 120),
                        '120p_4': n(212, 120),
                        '180p_1': n(320, 180),
                        '180p_3': n(180, 180),
                        '180p_4': n(240, 180),
                        '240p_1': n(320, 240),
                        '240p_3': n(240, 240),
                        '240p_4': n(424, 240),
                        '360p_1': n(640, 360),
                        '360p_3': n(360, 360),
                        '360p_4': n(640, 360),
                        '360p_6': n(360, 360),
                        '360p_7': n(480, 360),
                        '360p_8': n(480, 360),
                        '360p_9': n(640, 360),
                        '360p_10': n(640, 360),
                        '360p_11': n(640, 360),
                        '480p_1': n(640, 480),
                        '480p_2': n(640, 480),
                        '480p_3': n(480, 480),
                        '480p_4': n(640, 480),
                        '480p_6': n(480, 480),
                        '480p_8': n(848, 480),
                        '480p_9': n(848, 480),
                        '480p_10': n(640, 480),
                        '720p_1': n(1280, 720),
                        '720p_2': n(1280, 720),
                        '720p_3': n(1280, 720),
                        '720p_5': n(960, 720),
                        '720p_6': n(960, 720),
                        '1080p_1': n(1920, 1080),
                        '1080p_2': n(1920, 1080),
                        '1080p_3': n(1920, 1080),
                        '1080p_5': n(1920, 1080),
                        '1440p_1': n(2560, 1440),
                        '1440p_2': n(2560, 1440),
                        '4k_1': n(3840, 2160),
                        '4k_3': n(3840, 2160)
                    };
                    return t.setVideoResolution = function (n) {
                        var i = a.b.reportApiInvoke(t.sid, {
                            name: 'Stream.setVideoResolution',
                            options: arguments,
                            tag: 'tracer'
                        });
                        return void 0 !== s[n += ''] ? (e.video = s[n], e.attributes = e.attributes || {}, e.attributes.resolution = n, i(), !0) : (i(), !1);
                    }, t.setVideoFrameRate = function (n) {
                        var i = a.b.reportApiInvoke(t.sid, {
                            name: 'Stream.setVideoFrameRate',
                            options: arguments,
                            tag: 'tracer'
                        });
                        return Object(p.isFireFox)() ? (i(), !1) : 'object' === v()(n) && n instanceof Array && n.length > 1 ? (e.attributes = e.attributes || {}, e.attributes.minFrameRate = n[0], e.attributes.maxFrameRate = n[1], i(), !0) : (i(), !1);
                    }, t.setVideoBitRate = function (n) {
                        var i = a.b.reportApiInvoke(t.sid, {
                            name: 'Stream.setVideoBitRate',
                            options: arguments,
                            tag: 'tracer'
                        });
                        return 'object' === v()(n) && n instanceof Array && n.length > 1 ? (e.attributes = e.attributes || {}, e.attributes.minVideoBW = n[0], e.attributes.maxVideoBW = n[1], t.connectionSpec && (t.connectionSpec.minVideoBW = n[0], t.connectionSpec.maxVideoBW = n[1]), i(), !0) : (i(), !1);
                    }, t.setScreenBitRate = function (n) {
                        var i = a.b.reportApiInvoke(t.sid, {
                            name: 'Stream.setScreenBitRate',
                            options: arguments,
                            tag: 'tracer'
                        });
                        return 'object' === v()(n) && n instanceof Array && n.length > 1 ? (e.screenAttributes = e.screenAttributes || {}, e.screenAttributes.minVideoBW = n[0], e.screenAttributes.maxVideoBW = n[1], i(), !0) : (i(), !1);
                    }, t.setScreenProfile = function (e) {
                        var n = a.b.reportApiInvoke(t.sid, {
                            name: 'Stream.setScreenProfile',
                            options: arguments,
                            tag: 'tracer'
                        });
                        if (Y(e, 'profile', [
                                '480p_1',
                                '480p_2',
                                '720p_1',
                                '720p_2',
                                '1080p_1',
                                '1080p_2'
                            ]), 'string' == typeof e && t.screen) {
                            switch (e) {
                            case '480p_1':
                                t.screenAttributes.width = 640, t.screenAttributes.height = 480, t.screenAttributes.maxFr = 5, t.screenAttributes.minFr = 1;
                                break;
                            case '480p_2':
                                t.screenAttributes.width = 640, t.screenAttributes.height = 480, t.screenAttributes.maxFr = 30, t.screenAttributes.minFr = 25;
                                break;
                            case '720p_1':
                                t.screenAttributes.width = 1280, t.screenAttributes.height = 720, t.screenAttributes.maxFr = 5, t.screenAttributes.minFr = 1;
                                break;
                            case '720p_2':
                                t.screenAttributes.width = 1280, t.screenAttributes.height = 720, t.screenAttributes.maxFr = 30, t.screenAttributes.minFr = 25;
                                break;
                            case '1080p_1':
                                t.screenAttributes.width = 1920, t.screenAttributes.height = 1080, t.screenAttributes.maxFr = 5, t.screenAttributes.minFr = 1;
                                break;
                            case '1080p_2':
                                t.screenAttributes.width = 1920, t.screenAttributes.height = 1080, t.screenAttributes.maxFr = 30, t.screenAttributes.minFr = 25;
                            }
                            return n(), !0;
                        }
                        return n(), !1;
                    }, t.setVideoProfileCustom = function (e) {
                        var n = a.b.reportApiInvoke(t.sid, {
                            name: 'Stream.setVideoProfileCustom',
                            options: arguments,
                            tag: 'tracer'
                        });
                        t.setVideoResolution(e[0]), t.setVideoFrameRate([
                            e[1],
                            e[1]
                        ]), t.setVideoBitRate([
                            e[2],
                            e[2]
                        ]), n();
                    }, t.setVideoProfileCustomPlus = function (i) {
                        var o = a.b.reportApiInvoke(t.sid, {
                            name: 'Stream.setVideoProfileCustom',
                            options: arguments,
                            tag: 'tracer'
                        });
                        e.video = n(i.width, i.height), e.attributes = e.attributes || {}, e.attributes.resolution = ''.concat(i.width, 'x').concat(i.height), t.setVideoFrameRate([
                            i.framerate,
                            i.framerate
                        ]), t.setVideoBitRate([
                            i.bitrate,
                            i.bitrate
                        ]), o();
                    }, t.setVideoProfile = function (e) {
                        var n = a.b.reportApiInvoke(t.sid, {
                            name: 'Stream.setVideoProfile',
                            options: arguments,
                            tag: 'tracer'
                        });
                        if (Y(e, 'profile', [
                                '480p_1',
                                '480p_2',
                                '720p_1',
                                '720p_2',
                                '1080p_1',
                                '1080p_2',
                                '120p',
                                '120P',
                                '120p_1',
                                '120P_1',
                                '120p_3',
                                '120P_3',
                                '180p',
                                '180P',
                                '180p_1',
                                '180P_1',
                                '180p_3',
                                '180P_3',
                                '180p_4',
                                '180P_4',
                                '240p',
                                '240P',
                                '240p_1',
                                '240P_1',
                                '240p_3',
                                '240P_3',
                                '240p_4',
                                '240P_4',
                                '360p',
                                '360P',
                                '360p_1',
                                '360P_1',
                                '360p_3',
                                '360P_3',
                                '360p_4',
                                '360P_4',
                                '360p_6',
                                '360P_6',
                                '360p_7',
                                '360P_7',
                                '360p_8',
                                '360P_8',
                                '360p_9',
                                '360P_9',
                                '360p_10',
                                '360P_10',
                                '360p_11',
                                '360P_11',
                                '480p',
                                '480P',
                                '480p_1',
                                '480P_1',
                                '480p_2',
                                '480P_2',
                                '480p_3',
                                '480P_3',
                                '480p_4',
                                '480P_4',
                                '480p_6',
                                '480P_6',
                                '480p_8',
                                '480P_8',
                                '480p_9',
                                '480P_9',
                                '480p_10',
                                '480P_10',
                                '720p',
                                '720P',
                                '720p_1',
                                '720P_1',
                                '720p_2',
                                '720P_2',
                                '720p_3',
                                '720P_3',
                                '720p_5',
                                '720P_5',
                                '720p_6',
                                '720P_6',
                                '1080p',
                                '1080P',
                                '1080p_1',
                                '1080P_1',
                                '1080p_2',
                                '1080P_2',
                                '1080p_3',
                                '1080P_3',
                                '1080p_5',
                                '1080P_5',
                                '1440p',
                                '1440P',
                                '1440p_1',
                                '1440P_1',
                                '1440p_2',
                                '1440P_2',
                                '4k',
                                '4K',
                                '4k_1',
                                '4K_1',
                                '4k_3',
                                '4K_3'
                            ]), t.profile = e, 'string' == typeof e && t.video) {
                            switch (e) {
                            case '120p':
                            case '120P':
                            case '120p_1':
                            case '120P_1':
                                t.setVideoResolution('120p_1'), t.setVideoFrameRate([
                                    15,
                                    15
                                ]), t.setVideoBitRate([
                                    30,
                                    65
                                ]);
                                break;
                            case '120p_3':
                            case '120P_3':
                                t.setVideoResolution('120p_3'), t.setVideoFrameRate([
                                    15,
                                    15
                                ]), t.setVideoBitRate([
                                    30,
                                    50
                                ]);
                                break;
                            case '180p':
                            case '180P':
                            case '180p_1':
                            case '180P_1':
                                t.setVideoResolution('180p_1'), t.setVideoFrameRate([
                                    15,
                                    15
                                ]), t.setVideoBitRate([
                                    30,
                                    140
                                ]);
                                break;
                            case '180p_3':
                            case '180P_3':
                                t.setVideoResolution('180p_3'), t.setVideoFrameRate([
                                    15,
                                    15
                                ]), t.setVideoBitRate([
                                    30,
                                    100
                                ]);
                                break;
                            case '180p_4':
                            case '180P_4':
                                t.setVideoResolution('180p_4'), t.setVideoFrameRate([
                                    15,
                                    15
                                ]), t.setVideoBitRate([
                                    30,
                                    120
                                ]);
                                break;
                            case '240p':
                            case '240P':
                            case '240p_1':
                            case '240P_1':
                                t.setVideoResolution('240p_1'), t.setVideoFrameRate([
                                    15,
                                    15
                                ]), t.setVideoBitRate([
                                    40,
                                    200
                                ]);
                                break;
                            case '240p_3':
                            case '240P_3':
                                t.setVideoResolution('240p_3'), t.setVideoFrameRate([
                                    15,
                                    15
                                ]), t.setVideoBitRate([
                                    40,
                                    140
                                ]);
                                break;
                            case '240p_4':
                            case '240P_4':
                                t.setVideoResolution('240p_4'), t.setVideoFrameRate([
                                    15,
                                    15
                                ]), t.setVideoBitRate([
                                    40,
                                    220
                                ]);
                                break;
                            case '360p':
                            case '360P':
                            case '360p_1':
                            case '360P_1':
                                t.setVideoResolution('360p_1'), t.setVideoFrameRate([
                                    15,
                                    15
                                ]), t.setVideoBitRate([
                                    80,
                                    400
                                ]);
                                break;
                            case '360p_3':
                            case '360P_3':
                                t.setVideoResolution('360p_3'), t.setVideoFrameRate([
                                    15,
                                    15
                                ]), t.setVideoBitRate([
                                    80,
                                    260
                                ]);
                                break;
                            case '360p_4':
                            case '360P_4':
                                t.setVideoResolution('360p_4'), t.setVideoFrameRate([
                                    30,
                                    30
                                ]), t.setVideoBitRate([
                                    80,
                                    600
                                ]);
                                break;
                            case '360p_6':
                            case '360P_6':
                                t.setVideoResolution('360p_6'), t.setVideoFrameRate([
                                    30,
                                    30
                                ]), t.setVideoBitRate([
                                    80,
                                    400
                                ]);
                                break;
                            case '360p_7':
                            case '360P_7':
                                t.setVideoResolution('360p_7'), t.setVideoFrameRate([
                                    15,
                                    15
                                ]), t.setVideoBitRate([
                                    80,
                                    320
                                ]);
                                break;
                            case '360p_8':
                            case '360P_8':
                                t.setVideoResolution('360p_8'), t.setVideoFrameRate([
                                    30,
                                    30
                                ]), t.setVideoBitRate([
                                    80,
                                    490
                                ]);
                                break;
                            case '360p_9':
                            case '360P_9':
                                t.setVideoResolution('360p_9'), t.setVideoFrameRate([
                                    15,
                                    15
                                ]), t.setVideoBitRate([
                                    80,
                                    800
                                ]);
                                break;
                            case '360p_10':
                            case '360P_10':
                                t.setVideoResolution('360p_10'), t.setVideoFrameRate([
                                    24,
                                    24
                                ]), t.setVideoBitRate([
                                    80,
                                    800
                                ]);
                                break;
                            case '360p_11':
                            case '360P_11':
                                t.setVideoResolution('360p_11'), t.setVideoFrameRate([
                                    24,
                                    24
                                ]), t.setVideoBitRate([
                                    80,
                                    1000
                                ]);
                                break;
                            case '480p':
                            case '480P':
                            case '480p_1':
                            case '480P_1':
                                t.setVideoResolution('480p_1'), t.setVideoFrameRate([
                                    15,
                                    15
                                ]), t.setVideoBitRate([
                                    20,
                                    500
                                ]);
                                break;
                            case '480p_2':
                            case '480P_2':
                                t.setVideoResolution('480p_2'), t.setVideoFrameRate([
                                    30,
                                    30
                                ]), t.setVideoBitRate([
                                    100,
                                    1000
                                ]);
                                break;
                            case '480p_3':
                            case '480P_3':
                                t.setVideoResolution('480p_3'), t.setVideoFrameRate([
                                    15,
                                    15
                                ]), t.setVideoBitRate([
                                    100,
                                    400
                                ]);
                                break;
                            case '480p_4':
                            case '480P_4':
                                t.setVideoResolution('480p_4'), t.setVideoFrameRate([
                                    30,
                                    30
                                ]), t.setVideoBitRate([
                                    100,
                                    750
                                ]);
                                break;
                            case '480p_6':
                            case '480P_6':
                                t.setVideoResolution('480p_6'), t.setVideoFrameRate([
                                    30,
                                    30
                                ]), t.setVideoBitRate([
                                    100,
                                    600
                                ]);
                                break;
                            case '480p_8':
                            case '480P_8':
                                t.setVideoResolution('480p_8'), t.setVideoFrameRate([
                                    15,
                                    15
                                ]), t.setVideoBitRate([
                                    100,
                                    610
                                ]);
                                break;
                            case '480p_9':
                            case '480P_9':
                                t.setVideoResolution('480p_9'), t.setVideoFrameRate([
                                    30,
                                    30
                                ]), t.setVideoBitRate([
                                    100,
                                    930
                                ]);
                                break;
                            case '480p_10':
                            case '480P_10':
                                t.setVideoResolution('480p_10'), t.setVideoFrameRate([
                                    10,
                                    10
                                ]), t.setVideoBitRate([
                                    100,
                                    400
                                ]);
                                break;
                            case '720p':
                            case '720P':
                            case '720p_1':
                            case '720P_1':
                                t.setVideoResolution('720p_1'), t.setVideoFrameRate([
                                    15,
                                    15
                                ]), t.setVideoBitRate([
                                    120,
                                    1130
                                ]);
                                break;
                            case '720p_2':
                            case '720P_2':
                                t.setVideoResolution('720p_2'), t.setVideoFrameRate([
                                    30,
                                    30
                                ]), t.setVideoBitRate([
                                    120,
                                    2000
                                ]);
                                break;
                            case '720p_3':
                            case '720P_3':
                                t.setVideoResolution('720p_3'), t.setVideoFrameRate([
                                    30,
                                    30
                                ]), t.setVideoBitRate([
                                    120,
                                    1710
                                ]);
                                break;
                            case '720p_5':
                            case '720P_5':
                                t.setVideoResolution('720p_5'), t.setVideoFrameRate([
                                    15,
                                    15
                                ]), t.setVideoBitRate([
                                    120,
                                    910
                                ]);
                                break;
                            case '720p_6':
                            case '720P_6':
                                t.setVideoResolution('720p_6'), t.setVideoFrameRate([
                                    30,
                                    30
                                ]), t.setVideoBitRate([
                                    120,
                                    1380
                                ]);
                                break;
                            case '1080p':
                            case '1080P':
                            case '1080p_1':
                            case '1080P_1':
                                t.setVideoResolution('1080p_1'), t.setVideoFrameRate([
                                    15,
                                    15
                                ]), t.setVideoBitRate([
                                    120,
                                    2080
                                ]);
                                break;
                            case '1080p_2':
                            case '1080P_2':
                                t.setVideoResolution('1080p_2'), t.setVideoFrameRate([
                                    30,
                                    30
                                ]), t.setVideoBitRate([
                                    120,
                                    3000
                                ]);
                                break;
                            case '1080p_3':
                            case '1080P_3':
                                t.setVideoResolution('1080p_3'), t.setVideoFrameRate([
                                    30,
                                    30
                                ]), t.setVideoBitRate([
                                    120,
                                    3150
                                ]);
                                break;
                            case '1080p_5':
                            case '1080P_5':
                                t.setVideoResolution('1080p_5'), t.setVideoFrameRate([
                                    60,
                                    60
                                ]), t.setVideoBitRate([
                                    120,
                                    4780
                                ]);
                                break;
                            case '1440p':
                            case '1440P':
                            case '1440p_1':
                            case '1440P_1':
                                t.setVideoResolution('1440p_1'), t.setVideoFrameRate([
                                    30,
                                    30
                                ]), t.setVideoBitRate([
                                    120,
                                    4850
                                ]);
                                break;
                            case '1440p_2':
                            case '1440P_2':
                                t.setVideoResolution('1440p_2'), t.setVideoFrameRate([
                                    60,
                                    60
                                ]), t.setVideoBitRate([
                                    120,
                                    7350
                                ]);
                                break;
                            case '4k':
                            case '4K':
                            case '4k_1':
                            case '4K_1':
                                t.setVideoResolution('4k_1'), t.setVideoFrameRate([
                                    30,
                                    30
                                ]), t.setVideoBitRate([
                                    120,
                                    8910
                                ]);
                                break;
                            case '4k_3':
                            case '4K_3':
                                t.setVideoResolution('4k_3'), t.setVideoFrameRate([
                                    60,
                                    60
                                ]), t.setVideoBitRate([
                                    120,
                                    13500
                                ]);
                                break;
                            default:
                                t.setVideoResolution('480p_1'), t.setVideoFrameRate([
                                    15,
                                    15
                                ]), t.setVideoBitRate([
                                    100,
                                    500
                                ]);
                            }
                            return n(), !0;
                        }
                        return n(), !1;
                    }, t.setAudioProfile = function (e) {
                        var n = a.b.reportApiInvoke(t.sid, {
                            name: 'Stream.setAudioProfile',
                            options: arguments,
                            tag: 'tracer'
                        });
                        if (Y(e, 'profile', [
                                'speech_low_quality',
                                'speech_standard',
                                'music_standard',
                                'standard_stereo',
                                'high_quality',
                                'high_quality_stereo'
                            ]), t.audioProfile = e, 'string' == typeof e && t.audio) {
                            switch (e) {
                            case 'speech_low_quality':
                                t.highQuality = !1, t.stereo = !1, t.speech = !0, t.lowQuality = !0;
                                break;
                            case 'speech_standard':
                                t.highQuality = !1, t.stereo = !1, t.speech = !0, t.lowQuality = !1;
                                break;
                            case 'music_standard':
                                t.highQuality = !1, t.stereo = !1, t.speech = !1, t.lowQuality = !1;
                                break;
                            case 'standard_stereo':
                                t.highQuality = !1, t.stereo = !0, t.speech = !1, t.lowQuality = !1;
                                break;
                            case 'high_quality':
                                t.highQuality = !0, t.stereo = !1, t.speech = !1, t.lowQuality = !1;
                                break;
                            case 'high_quality_stereo':
                                t.highQuality = !0, t.stereo = !0, t.speech = !1, t.lowQuality = !1;
                                break;
                            default:
                                t.highQuality = !1, t.stereo = !1, t.speech = !1, t.lowQuality = !1;
                            }
                            return n(), !0;
                        }
                        return n(), !1;
                    }, t.getId = function () {
                        return t.streamId;
                    }, t.getUserId = function () {
                        return t.userId;
                    }, t.setUserId = function (e) {
                        var n = a.b.reportApiInvoke(t.sid, {
                            name: 'Stream.setUserId',
                            options: arguments,
                            tag: 'tracer'
                        });
                        t.userId && o.default.warning('['.concat(t.streamId, '] Stream.userId ').concat(t.userId, ' => ').concat(e)), t.userId = e, n();
                    }, t.getAttributes = function () {
                        return e.screen ? t.screenAttributes : e.attributes;
                    }, t.hasAudio = function () {
                        return t.audio;
                    }, t.hasVideo = function () {
                        return t.video;
                    }, t.hasScreen = function () {
                        return t.screen;
                    }, t.isVideoOn = function () {
                        return (t.hasVideo() || t.hasScreen()) && !t.userMuteVideo;
                    }, t.isAudioOn = function () {
                        return t.hasAudio() && !t.userMuteAudio;
                    }, t.init = function (n, i) {
                        var r = a.b.reportApiInvoke(t.sid, {
                                callback: function (e, t) {
                                    if (e)
                                        return i && i(e);
                                    n && n(t);
                                },
                                name: 'Stream.init',
                                options: arguments,
                                tag: 'tracer'
                            }), s = (new Date().getTime(), arguments[2]);
                        if (void 0 === s && (s = 2), !0 === t.initialized)
                            return r({
                                type: 'warning',
                                msg: 'STREAM_ALREADY_INITIALIZED'
                            });
                        if (!0 !== t.local)
                            return r({
                                type: 'warning',
                                msg: 'STREAM_NOT_LOCAL'
                            });
                        if (t.videoSource ? t.videoName = 'videoSource' : t.video && (t.videoName = K.searchDeviceNameById(e.cameraId) || 'default'), t.audioSource ? t.audioName = 'audioSource' : t.audio && (t.audioName = K.searchDeviceNameById(e.microphoneId) || 'default'), t.screen && (t.screenName = e.extensionId || 'default'), t.videoSource || t.audioSource) {
                            var d = new MediaStream();
                            return t.videoSource && (o.default.debug('['.concat(t.streamId, '] Added videoSource')), d.addTrack(t.videoSource), t.video = !0), t.audioSource && (o.default.debug('['.concat(t.streamId, '] Added audioSource')), d.addTrack(t.audioSource), t.audio = !0), t.hasVideo() ? Object(G.h)(d, function (e, n) {
                                o.default.info('['.concat(t.streamId, '] Video Source width ').concat(e, ' height ').concat(n)), t.stream = d, t.initialized = !0, r();
                            }, function (e) {
                                o.default.warning('['.concat(t.streamId, '] Failed to get width & height from video source'), e), t.stream = d, t.initialized = !0, r();
                            }) : (t.stream = d, t.initialized = !0, r());
                        }
                        try {
                            if ((e.audio || e.video || e.screen) && void 0 === e.url) {
                                o.default.debug('['.concat(t.streamId, '] Requested access to local media'));
                                var c = e.video;
                                if (e.screen)
                                    var u = {
                                        video: c,
                                        audio: !1,
                                        screen: !0,
                                        data: !0,
                                        extensionId: e.extensionId,
                                        attributes: t.screenAttributes,
                                        fake: e.fake,
                                        mediaSource: e.mediaSource,
                                        sourceId: e.sourceId,
                                        streamId: t.streamId
                                    };
                                else {
                                    u = {
                                        video: c,
                                        audio: e.audio,
                                        fake: e.fake,
                                        streamId: t.streamId
                                    };
                                    if (!(null !== window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./) && window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1] <= 35)) {
                                        var l = 30, f = 30;
                                        if (void 0 !== e.attributes.minFrameRate && (l = e.attributes.minFrameRate), void 0 !== e.attributes.maxFrameRate && (f = e.attributes.maxFrameRate), !0 === u.audio) {
                                            u.audio = !e.microphoneId || { deviceId: { exact: e.microphoneId } };
                                            var m = {};
                                            t.audioProcessing && (void 0 !== t.audioProcessing.AGC && (Object(p.isFireFox)() ? m.autoGainControl = t.audioProcessing.AGC : Object(p.isChrome)() && (m.googAutoGainControl = t.audioProcessing.AGC, m.googAutoGainControl2 = t.audioProcessing.AGC)), void 0 !== t.audioProcessing.AEC && (m.echoCancellation = t.audioProcessing.AEC), void 0 !== t.audioProcessing.ANS && (Object(p.isFireFox)() ? m.noiseSuppression = t.audioProcessing.ANS : Object(p.isChrome)() && (m.googNoiseSuppression = t.audioProcessing.ANS))), t.stereo && Object(p.isChrome)() && (m.googAutoGainControl = !1, m.googAutoGainControl2 = !1, m.echoCancellation = !1, m.googNoiseSuppression = !1), 0 !== Object.keys(m).length && (!0 === u.audio ? u.audio = { mandatory: m } : u.audio = I()(u.audio, m));
                                        }
                                        !0 === u.video ? (u.video = {
                                            width: { ideal: t.videoSize[0] },
                                            height: { ideal: t.videoSize[1] },
                                            frameRate: {
                                                ideal: l,
                                                max: f
                                            }
                                        }, t.setVideoBitRate([
                                            500,
                                            500
                                        ]), u.video.deviceId = e.cameraId ? { exact: e.cameraId } : void 0) : 'object' === v()(u.video) && (u.video.frameRate = {
                                            ideal: l,
                                            max: f
                                        }, u.video.deviceId = e.cameraId ? { exact: e.cameraId } : void 0);
                                    }
                                }
                                o.default.debug('['.concat(t.streamId, '] '), u);
                                var g = I()({}, u);
                                if (t.constraints = u, H(g, function (n) {
                                        t.screenAudioTrack && n.addTrack(t.screenAudioTrack);
                                        var i = n.getVideoTracks().length > 0, a = n.getAudioTracks().length > 0;
                                        return g.video && !i && g.audio && !a ? (o.default.error('['.concat(t.streamId, '] Media access: NO_CAMERA_MIC_PERMISSION')), r('NO_CAMERA_MIC_PERMISSION')) : g.video && !i ? (o.default.error('['.concat(t.streamId, '] Media access: NO_CAMERA_PERMISSION')), r('NO_CAMERA_PERMISSION')) : g.screen && !i ? (o.default.error('['.concat(t.streamId, '] Media access: NO_SCREEN_PERMISSION')), r('NO_SCREEN_PERMISSION')) : g.audio && !a ? (o.default.error('['.concat(t.streamId, '] Media access: NO_MIC_PERMISSION')), r('NO_MIC_PERMISSION')) : (o.default.debug('['.concat(t.streamId, '] User has granted access to local media')), t.dispatchEvent({ type: 'accessAllowed' }), t.stream = n, t.initialized = !0, e.screen && e.audio && !t.screenAudioTrack || r(), t.hasVideo() && Object(G.h)(n, function (e, n) {
                                            t.videoWidth = e, t.videoHeight = n;
                                        }, function (e) {
                                            o.default.warning('['.concat(t.streamId, '] vsResHack failed: '), e);
                                        }), void (e.screen && Object(p.isChrome)() && t.stream && t.stream.getVideoTracks()[0] && (t.stream.getVideoTracks()[0].onended = function () {
                                            t.dispatchEvent({ type: 'stopScreenSharing' });
                                        })));
                                    }, function (e) {
                                        var n = {
                                            type: 'error',
                                            msg: e.name || e.code || e,
                                            info: null
                                        };
                                        switch (e && (e.message && (n.info = e.message), e.code && (n.info ? n.info += '. ' + e.code : n.info = ' ' + e.code), e.constraint && (n.info ? n.info += '. Constraint: ' + e.constraint : n.info = 'constraint: ' + e.constraint)), n.msg) {
                                        case 'Starting video failed':
                                        case 'TrackStartError':
                                            if (t.videoSize = void 0, s > 0)
                                                return void setTimeout(function () {
                                                    t.init(function (e) {
                                                        return r(e);
                                                    }, r, s - 1);
                                                }, 1);
                                            n.msg = 'MEDIA_OPTION_INVALID';
                                            break;
                                        case 'DevicesNotFoundError':
                                            n.msg = 'DEVICES_NOT_FOUND';
                                            break;
                                        case 'NotSupportedError':
                                            n.msg = 'NOT_SUPPORTED';
                                            break;
                                        case 'PermissionDeniedError':
                                            n.msg = 'PERMISSION_DENIED', t.dispatchEvent({ type: 'accessDenied' });
                                            break;
                                        case 'PERMISSION_DENIED':
                                            t.dispatchEvent({ type: 'accessDenied' });
                                            break;
                                        case 'InvalidStateError':
                                            n.msg = 'PERMISSION_DENIED', t.dispatchEvent({ type: 'accessDenied' });
                                            break;
                                        case 'NotAllowedError':
                                            t.dispatchEvent({ type: 'accessDenied' });
                                            break;
                                        case 'ConstraintNotSatisfiedError':
                                            n.msg = 'CONSTRAINT_NOT_SATISFIED';
                                            break;
                                        default:
                                            n.msg || (n.msg = 'UNDEFINED');
                                        }
                                        var i = 'Media access '.concat(n.msg).concat(n.info ? ': ' + n.info : '');
                                        o.default.error('['.concat(t.streamId, '] '), i), r(n);
                                    }), e.screen && e.audio) {
                                    var S = !e.microphoneId || { deviceId: { exact: e.microphoneId } };
                                    m = {};
                                    t.audioProcessing && (void 0 !== t.audioProcessing.AGC && (Object(p.isFireFox)() ? m.autoGainControl = t.audioProcessing.AGC : Object(p.isChrome)() && (m.googAutoGainControl = t.audioProcessing.AGC, m.googAutoGainControl2 = t.audioProcessing.AGC)), void 0 !== t.audioProcessing.AEC && (m.echoCancellation = t.audioProcessing.AEC), void 0 !== t.audioProcessing.ANS && (Object(p.isFireFox)() ? m.noiseSuppression = t.audioProcessing.ANS : Object(p.isChrome)() && (m.googNoiseSuppression = t.audioProcessing.ANS))), t.stereo && Object(p.isChrome)() && (m.googAutoGainControl = !1, m.googAutoGainControl2 = !1, m.echoCancellation = !1, m.googNoiseSuppression = !1), 0 !== Object.keys(m).length && (S = !0 === S ? { mandatory: m } : I()(S, m));
                                    var _ = {
                                        video: !1,
                                        audio: S
                                    };
                                    o.default.debug('['.concat(t.streamId, '] '), _), H(_, function (e) {
                                        o.default.info('['.concat(t.streamId, '] User has granted access to auxiliary local media.')), t.dispatchEvent({ type: 'accessAllowed' });
                                        var n = e.getAudioTracks()[0];
                                        t.stream ? (t.stream.addTrack(n), r()) : t.screenAudioTrack = n;
                                    }, function (e) {
                                        var n = {
                                            type: 'error',
                                            msg: e.name || e.code || e,
                                            info: null
                                        };
                                        switch (e && (e.message && (n.info = e.message), e.code && (n.info ? n.info += '. ' + e.code : n.info = ' ' + e.code), e.constraint && (n.info ? n.info += '. Constraint: ' + e.constraint : n.info = 'constraint: ' + e.constraint)), n.msg) {
                                        case 'Starting video failed':
                                        case 'TrackStartError':
                                            if (t.videoSize = void 0, s > 0)
                                                return void setTimeout(function () {
                                                    t.init(function (e) {
                                                        return r(e);
                                                    }, r, s - 1);
                                                }, 1);
                                            n.msg = 'MEDIA_OPTION_INVALID';
                                            break;
                                        case 'DevicesNotFoundError':
                                            n.msg = 'DEVICES_NOT_FOUND';
                                            break;
                                        case 'NotSupportedError':
                                            n.msg = 'NOT_SUPPORTED';
                                            break;
                                        case 'PermissionDeniedError':
                                        case 'InvalidStateError':
                                            n.msg = 'PERMISSION_DENIED', t.dispatchEvent({ type: 'accessDenied' });
                                            break;
                                        case 'PERMISSION_DENIED':
                                        case 'NotAllowedError':
                                            t.dispatchEvent({ type: 'accessDenied' });
                                            break;
                                        case 'ConstraintNotSatisfiedError':
                                            n.msg = 'CONSTRAINT_NOT_SATISFIED';
                                            break;
                                        default:
                                            n.msg || (n.msg = 'UNDEFINED');
                                        }
                                        var i = 'Media access '.concat(n.msg).concat(n.info ? ': ' + n.info : '');
                                        o.default.error('['.concat(t.streamId, '] '), i), r(n);
                                    });
                                }
                            } else
                                r({
                                    type: 'warning',
                                    msg: 'STREAM_HAS_NO_MEDIA_ATTRIBUTES'
                                });
                        } catch (e) {
                            o.default.error('['.concat(t.streamId, '] Stream init: '), e), r({
                                type: 'error',
                                msg: e.message || e
                            });
                        }
                    }, t.close = function () {
                        var e = a.b.reportApiInvoke(null, {
                            name: 'Stream.close',
                            options: arguments,
                            tag: 'tracer'
                        });
                        if (o.default.debug('['.concat(t.streamId, '] Close stream with id'), t.streamId), void 0 !== t.stream) {
                            var n = t.stream.getTracks();
                            for (var i in n)
                                n.hasOwnProperty(i) && n[i].stop();
                            t.stream = void 0;
                        }
                        Object(p.isSafari)() && t.pc && t.pc.peerConnection && t.pc.peerConnection.removeTrack && t.pc.peerConnection.getSenders && t.pc.peerConnection.getSenders().forEach(function (e) {
                            e && (o.default.debug('['.concat(t.streamId, '] Remove Track'), e), t.pc.peerConnection.removeTrack(e));
                        });
                        t.initialized = !1, t._onAudioMute = void 0, t._onAudioUnmute = void 0, t._onVideoMute = void 0, t._onVideoUnmute = void 0, t.lowStream && t.lowStream.close(), e();
                    }, t.enableAudio = function () {
                        var e = a.b.reportApiInvoke(t.sid, {
                            name: 'Stream.enableAudio',
                            options: arguments,
                            tag: 'tracer'
                        });
                        o.default.deprecate('['.concat(t.streamId, '] Stream.enableAudio is deprecated and will be removed in the future. Use Stream.unmuteAudio instead'));
                        var n = t._unmuteAudio();
                        return n && (t.userMuteAudio = !1), e(null, n), n;
                    }, t.disableAudio = function () {
                        var e = a.b.reportApiInvoke(t.sid, {
                            name: 'Stream.disableAudio',
                            options: arguments,
                            tag: 'tracer'
                        });
                        o.default.deprecate('['.concat(t.streamId, '] Stream.disableAudio is deprecated and will be removed in the future. Use Stream.muteAudio instead'));
                        var n = t._muteAudio();
                        return n && (t.userMuteAudio = !0), e(null, n), n;
                    }, t.enableVideo = function () {
                        var e = a.b.reportApiInvoke(t.sid, {
                            name: 'Stream.enableVideo',
                            options: arguments,
                            tag: 'tracer'
                        });
                        o.default.deprecate('['.concat(t.streamId, '] Stream.enableVideo is deprecated and will be removed in the future. Use Stream.unmuteVideo instead'));
                        var n = t._unmuteVideo();
                        return n && (t.userMuteVideo = !1, t.lowStream && (t.lowStream.userMuteVideo = !1)), e(null, n), n;
                    }, t.disableVideo = function () {
                        var e = a.b.reportApiInvoke(t.sid, {
                            name: 'Stream.disableVideo',
                            options: arguments,
                            tag: 'tracer'
                        });
                        o.default.deprecate('['.concat(t.streamId, '] Stream.disableVideo is deprecated and will be removed in the future. Use Stream.muteVideo instead'));
                        var n = t._muteVideo();
                        return n && (t.userMuteVideo = !0, t.lowStream && (t.lowStream.userMuteVideo = !0)), e(null, n), n;
                    }, t.unmuteAudio = function () {
                        var e = a.b.reportApiInvoke(t.sid, {
                                name: 'Stream.unmuteAudio',
                                options: arguments,
                                tag: 'tracer'
                            }), n = t._unmuteAudio();
                        return n && (t.userMuteAudio = !1), e(null, n), n;
                    }, t.muteAudio = function () {
                        var e = a.b.reportApiInvoke(t.sid, {
                                name: 'Stream.muteAudio',
                                options: arguments,
                                tag: 'tracer'
                            }), n = t._muteAudio();
                        return n && (t.userMuteAudio = !0), e(null, n), n;
                    }, t.unmuteVideo = function () {
                        var e = a.b.reportApiInvoke(t.sid, {
                                name: 'Stream.unmuteVideo',
                                options: arguments,
                                tag: 'tracer'
                            }), n = t._unmuteVideo();
                        return n && (t.userMuteVideo = !1, t.lowStream && (t.lowStream.userMuteVideo = !1)), e(null, n), n;
                    }, t.muteVideo = function () {
                        var e = a.b.reportApiInvoke(t.sid, {
                                name: 'Stream.muteVideo',
                                options: arguments,
                                tag: 'tracer'
                            }), n = t._muteVideo();
                        return n && (t.userMuteVideo = !0, t.lowStream && (t.lowStream.userMuteVideo = !0)), e(null, n), n;
                    }, t._unmuteAudio = function () {
                        return o.default.debug('['.concat(t.streamId, '] Unmuted audio stream with id '), t.streamId), t._flushAudioMixingMuteStatus(!1), !(!t.hasAudio() || !t.initialized || void 0 === t.stream || !0 === t.stream.getAudioTracks()[0].enabled) && (t._onAudioUnmute && t._onAudioUnmute(), t.pc && (t.pc.isAudioMute = !1), t.stream.getAudioTracks()[0].enabled = !0, !0);
                    }, t._isAudioMuted = function () {
                        if (t.stream && t.hasAudio()) {
                            var e = t.stream.getAudioTracks();
                            return e.length > 0 && !e[0].enabled;
                        }
                        return !1;
                    }, t._muteAudio = function () {
                        return o.default.debug('['.concat(t.streamId, '] Muted audio stream with id '), t.streamId), t._flushAudioMixingMuteStatus(!0), !!(t.hasAudio() && t.initialized && void 0 !== t.stream && t.stream.getAudioTracks()[0].enabled) && (t._onAudioMute && t._onAudioMute(), t.pc && (t.pc.isAudioMute = !0), t.stream.getAudioTracks()[0].enabled = !1, t.sid && a.b.audioSendingStopped(t.sid, {
                            succ: !0,
                            reason: 'muteAudio'
                        }), !0);
                    }, t._unmuteVideo = function () {
                        return o.default.debug('['.concat(t.streamId, '] Unmuted video stream with id'), t.streamId), !(!t.initialized || void 0 === t.stream || !t.stream.getVideoTracks().length || !0 === t.stream.getVideoTracks()[0].enabled) && (t._onVideoUnmute && t._onVideoUnmute(), t.pc && (t.pc.isVideoMute = !1), t.stream.getVideoTracks()[0].enabled = !0, t.lowStream && t.lowStream._unmuteVideo(), !0);
                    }, t._muteVideo = function () {
                        return o.default.debug('['.concat(t.streamId, '] Muted video stream with id'), t.streamId), !!(t.initialized && void 0 !== t.stream && t.stream.getVideoTracks().length && t.stream.getVideoTracks()[0].enabled) && (t._onVideoMute && t._onVideoMute(), t.pc && (t.pc.isVideoMute = !0), t.stream.getVideoTracks()[0].enabled = !1, t.lowStream && t.lowStream._muteVideo(), t.sid && a.b.videoSendingStopped(t.sid, {
                            succ: !0,
                            reason: 'muteVideo'
                        }), !0);
                    }, t.addTrack = function (n) {
                        var i = a.b.reportApiInvoke(t.sid, {
                            name: 'Stream.addTrack',
                            options: arguments,
                            tag: 'tracer'
                        });
                        if (t.pc && t.pc.addTrack(n, t.stream), 'audio' == n.kind) {
                            var o = new MediaStream();
                            t.userMuteAudio && (n.enabled = !1), o.addTrack(n);
                            var r = t.stream.getVideoTracks()[0];
                            r && (o.addTrack(r), t.audio = !0, e.audio = !0), t.stream = o, t.audioLevelHelper = null, t.player && t.player.video && (t.player.video.srcObject = t.stream);
                        } else
                            t.userMuteVideo && (n.enabled = !1), t.stream.addTrack(n), t.video = !0, e.video = !0;
                        i();
                    }, t.removeTrack = function (n) {
                        var i = a.b.reportApiInvoke(t.sid, {
                            name: 'Stream.removeTrack',
                            options: arguments,
                            tag: 'tracer'
                        });
                        t.pc && t.pc.removeTrack(n, t.stream), t.stream.removeTrack(n), 'audio' === n.kind ? (t.audio = !1, e.audio = !1) : (t.video = !1, e.video = !1), t.audioLevelHelper = null, 'live' == n.readyState && (n.stop(), o.default.debug('['.concat(t.streamId, '] Track ').concat(n.kind, ' Stopped'))), i();
                    }, t.setAudioOutput = function (e, n, i) {
                        var r = a.b.reportApiInvoke(t.sid, {
                            callback: function (e, t) {
                                if (e)
                                    return i && i(e);
                                n && n(t);
                            },
                            name: 'Stream.setAudioOutput',
                            options: arguments,
                            tag: 'tracer'
                        });
                        return Z(e, 1, 255) ? (t.audioOutput = e, t.player ? void t.player.setAudioOutput(e, function () {
                            return r();
                        }, r) : r()) : (o.default.error('['.concat(t.streamId, '] setAudioOutput Invalid Parameter'), e), r(A.INVALID_PARAMETER));
                    }, t.play = function (e, n) {
                        var i = a.b.reportApiInvoke(t.sid, {
                            name: 'Stream.play',
                            options: arguments,
                            tag: 'tracer'
                        });
                        Q(e, 'elementID'), re(n) || (re(n.fit) || Y(n.fit, 'fit', [
                            'cover',
                            'contain'
                        ]), re(n.muted) || $(n.muted, 'muted')), t.elementID = e, t.playOptions = n, t.isPlaying() ? o.default.error('['.concat(t.streamId, '] Stream.play(): Stream is already playing')) : !t.local || t.video || t.screen ? void 0 !== e && (t.player = new T({
                            id: t.getId(),
                            stream: t,
                            elementID: e,
                            options: n
                        })) : t.hasAudio() && (t.player = new T({
                            id: t.getId(),
                            stream: t,
                            elementID: e,
                            options: n
                        })), t.audioOutput && t.player.setAudioOutput(t.audioOutput), void 0 !== t.audioLevel && t.player.setAudioVolume(t.audioLevel), t._flushAudioMixingMuteStatus(!1), i();
                    }, t.stop = function () {
                        var e = a.b.reportApiInvoke(t.sid, {
                            name: 'Stream.stop',
                            options: arguments,
                            tag: 'tracer'
                        });
                        o.default.debug('['.concat(t.streamId, '] Stop stream player with id '), t.streamId), t.player ? (t.player.destroy(), delete t.player) : o.default.error('['.concat(t.streamId, '] Stream.stop(): Stream is not playing')), t._flushAudioMixingMuteStatus(!0), e();
                    }, t.isPlaying = function () {
                        return !!t.player;
                    }, t.isPaused = function () {
                        return !!t.player && (!(!t.player.video || !t.player.video.paused) || !(!t.player.audio || !t.player.audio.paused));
                    }, t.resume = function () {
                        var e = !1;
                        return t.player && (t.player.video && t.player.video.play && (t.player.video.play(), e = !0), t.player.audio && t.player.audio.play && (t.player.audio.play(), e = !0)), e;
                    }, t.getVideoTrack = function () {
                        var e = a.b.reportApiInvoke(t.sid, {
                            name: 'Stream.getVideoTrack',
                            options: arguments,
                            tag: 'tracer'
                        });
                        if (t.stream && t.stream.getVideoTracks) {
                            var n = t.stream.getVideoTracks()[0];
                            if (n)
                                return o.default.info('['.concat(t.streamId, '] getVideoTrack'), n), e(), n;
                        }
                        o.default.info('['.concat(t.streamId, '] getVideoTrack None')), e(null, 'getVideoTrack None');
                    }, t.getAudioTrack = function () {
                        var e = a.b.reportApiInvoke(t.sid, {
                            name: 'Stream.getAudioTrack',
                            options: arguments,
                            tag: 'tracer'
                        });
                        if (t.stream && t.stream.getAudioTracks) {
                            var n = t.stream.getAudioTracks()[0];
                            if (n)
                                return o.default.info('['.concat(t.streamId, '] getAudioTracks'), n), e(), n;
                        }
                        o.default.info('['.concat(t.streamId, '] getAudioTracks None')), e(null, 'getAudioTracks None');
                    }, t._replaceMediaStreamTrack = function (e, n, i) {
                        if (t.stream) {
                            if ('video' == e.kind) {
                                if (r = t.stream.getVideoTracks()[0])
                                    return t.userMuteVideo && (e.enabled = !1), t.stream.removeTrack(r), t.stream.addTrack(e), o.default.debug('['.concat(t.streamId, '] _replaceMediaStreamTrack ').concat(e.kind, ' SUCCESS')), 'live' == r.readyState && (r.stop(), o.default.debug('['.concat(t.streamId, '] Track ').concat(r.kind, ' Stopped'))), n && n();
                                var a = 'MEDIASTREAM_TRACK_NOT_FOUND';
                                return o.default.error('['.concat(t.streamId, '] MEDIASTREAM_TRACK_NOT_FOUND ').concat(e.kind)), i(a);
                            }
                            if ('audio' == e.kind) {
                                var r;
                                if (r = t.stream.getAudioTracks()[0]) {
                                    t.userMuteAudio && (e.enabled = !1);
                                    var s = new MediaStream();
                                    s.addTrack(e);
                                    var d = t.stream && t.stream.getVideoTracks()[0];
                                    return d && s.addTrack(d), t.stream = s, t.audioLevelHelper = null, t.player && t.player.video && (t.player.video.srcObject = t.stream), o.default.debug('['.concat(t.streamId, '] _replaceMediaStreamTrack SUCCESS')), 'live' == r.readyState && (r.stop(), o.default.debug('['.concat(t.streamId, '] Track ').concat(r.kind, ' Stopped'))), n && n();
                                }
                                a = 'MEDIASTREAM_TRACK_NOT_FOUND';
                                return o.default.error('['.concat(t.streamId, '] MEDIASTREAM_TRACK_NOT_FOUND ').concat(e.kind)), i(a);
                            }
                            a = 'INVALID_TRACK_TYPE';
                            return o.default.error('['.concat(t.streamId, '] _replaceMediaStreamTrack ').concat(a, ' ').concat(e.kind)), i && i(a);
                        }
                        a = 'NO_STREAM_FOUND';
                        return o.default.error('['.concat(t.streamId, '] _replaceMediaStreamTrack ').concat(a)), i && i(a);
                    }, t.replaceTrack = function (e, n, i) {
                        var r = a.b.reportApiInvoke(t.sid, {
                            callback: function (e, t) {
                                if (e)
                                    return i && i(e);
                                n && n(t);
                            },
                            name: 'Stream.replaceTrack',
                            options: arguments,
                            tag: 'tracer'
                        });
                        return e && e.kind ? t.pc && t.pc.hasSender && t.pc.hasSender(e.kind) ? void t.pc.replaceTrack(e, function () {
                            return o.default.debug('['.concat(t.streamId, '] PeerConnection.replaceTrack ').concat(e.kind, ' SUCCESS')), t._replaceMediaStreamTrack(e, function (e) {
                                return r(null, e);
                            }, r);
                        }, function (n) {
                            return o.default.error('['.concat(t.streamId, '] PeerConnection.replaceTrack ').concat(e.kind, ' Failed ').concat(n)), r(n);
                        }) : t._replaceMediaStreamTrack(e, function (e) {
                            return r(null, e);
                        }, r) : r('INVALID_TRACK');
                    }, t.setAudioVolume = function (e) {
                        var n = a.b.reportApiInvoke(t.sid, {
                            name: 'Stream.setAudioVolume',
                            options: arguments,
                            tag: 'tracer'
                        });
                        X(e, 'level', 0, 100), t.audioLevel = e, t.player && t.player.setAudioVolume(e), n();
                    }, t.getStats = function (e, n) {
                        var i = {
                            type: 'collectStats',
                            promises: []
                        };
                        t.dispatchEvent(i), Promise.all(i.promises).then(function (n) {
                            for (var i = {}, o = n.length - 1; o >= 0; o--) {
                                var a = n[o];
                                I()(i, a);
                            }
                            e && setTimeout(e.bind(t, i), 0);
                        }).catch(function (e) {
                            n && setTimeout(n.bind(t, e), 0);
                        });
                    }, t._getPCStats = function () {
                        return new Promise(function (e, n) {
                            if (!t.pc || 'established' !== t.pc.state || !t.pc.getStats) {
                                return n('PEER_CONNECTION_NOT_ESTABLISHED');
                            }
                            t.pc.getStats(function (i) {
                                if (!t.pc || 'established' !== t.pc.state || !t.pc.getStats) {
                                    return n('PEER_CONNECTION_STATE_CHANGE');
                                }
                                var o = t.pc.isSubscriber ? function (e) {
                                    var t = {};
                                    return e.forEach(function (e) {
                                        e.id && (-1 === e.id.indexOf('recv') && -1 === e.id.indexOf('inbound_rtp') && -1 === e.id.indexOf('inbound-rtp') && -1 === e.id.indexOf('InboundRTP') || ('audio' === e.mediaType ? (J(t, 'audioReceiveBytes', e.bytesReceived), J(t, 'audioReceivePackets', e.packetsReceived), J(t, 'audioReceivePacketsLost', e.packetsLost)) : (J(t, 'videoReceiveBytes', e.bytesReceived), J(t, 'videoReceivePacketsLost', e.packetsLost), J(t, 'videoReceivePackets', e.packetsReceived), J(t, 'videoReceiveFrameRate', e.googFrameRateReceived), J(t, 'videoReceiveDecodeFrameRate', e.googFrameRateDecoded), J(t, 'videoReceiveResolutionWidth', e.googFrameWidthReceived), J(t, 'videoReceiveResolutionHeight', e.googFrameHeightReceived))));
                                    }), t;
                                }(i) : function (e) {
                                    var t = {};
                                    return e.forEach(function (e) {
                                        e.id && (-1 === e.id.indexOf('send') && -1 === e.id.indexOf('outbound_rtp') && -1 === e.id.indexOf('OutboundRTP') || ('audio' === e.mediaType ? (J(t, 'audioSendBytes', e.bytesSent), J(t, 'audioSendPackets', e.packetsSent), J(t, 'audioSendPacketsLost', e.packetsLost)) : (J(t, 'videoSendBytes', e.bytesSent), J(t, 'videoSendPackets', e.packetsSent), J(t, 'videoSendPacketsLost', e.packetsLost), J(t, 'videoSendFrameRate', e.googFrameRateSent), J(t, 'videoSendResolutionWidth', e.googFrameWidthSent), J(t, 'videoSendResolutionHeight', e.googFrameHeightSent))));
                                    }), t;
                                }(i);
                                return e(o);
                            });
                        }).then(function (e) {
                            return t.pc.isSubscriber ? (Object(p.isFireFox)() || Object(p.isSafari)()) && (J(e, 'videoReceiveResolutionHeight', t.videoHeight), J(e, 'videoReceiveResolutionWidth', t.videoWidth)) : ((Object(p.isSafari)() || Object(p.isFireFox)()) && (J(e, 'videoSendResolutionHeight', t.videoHeight), J(e, 'videoSendResolutionWidth', t.videoWidth)), (Object(p.isSafari)() || Object(p.isFireFox)()) && t.uplinkStats && J(e, 'videoSendPacketsLost', t.uplinkStats.uplink_cumulative_lost)), Promise.resolve(e);
                        });
                    }, t.getAudioLevel = function () {
                        return t.audioLevelHelper ? t.audioLevelHelper.getAudioLevel() : t.stream ? 0 !== t.stream.getAudioTracks().length ? (t.audioLevelHelper = new G.a(t.stream), t.audioLevelHelper.getAudioLevel()) : void o.default.warning('['.concat(t.streamId, '] can\'t get audioLevel beacuse no audio trace in stream')) : (o.default.warning('['.concat(t.streamId, '] can\'t get audioLevel beacuse no stream exist')), 0);
                    }, t.setVideoProfile('480P'), t._switchVideoDevice = function (e, n, i) {
                        if (e === t.cameraId)
                            return n && n();
                        t.constraints.video.deviceId = { exact: e };
                        var a = I()({}, t.constraints);
                        a.audio = !1, o.default.debug('['.concat(t.streamId, '] ').concat(a)), H(a, function (o) {
                            try {
                                Object(p.isSafari)() ? t.replaceTrack(o.getVideoTracks()[0], function () {
                                    t.userMuteVideo && (t.stream.getVideoTracks()[0].enabled = !1), n && n();
                                }, i) : (t.removeTrack(t.stream.getVideoTracks()[0]), t.addTrack(o.getVideoTracks()[0]), t.isPlaying() && (t.stop(), t.elementID && t.play(t.elementID)), t.cameraId = e, t.userMuteVideo && (t.stream.getVideoTracks()[0].enabled = !1), n && n());
                            } catch (e) {
                                return i && i(e);
                            }
                        }, function (e) {
                            return i && i(e);
                        });
                    }, t._switchAudioDevice = function (e, n, i) {
                        if (e === t.microphoneId)
                            return n && n();
                        !0 === t.constraints.audio ? t.constraints.audio = { deviceId: { exact: e } } : t.constraints.audio.deviceId = { exact: e };
                        var a = I()({}, t.constraints);
                        a.video = !1, o.default.debug('['.concat(t.streamId, '] '), a), H(a, function (o) {
                            try {
                                Object(p.isSafari)() ? t.replaceTrack(o.getAudioTracks()[0], n, i) : (t.removeTrack(t.stream.getAudioTracks()[0]), t.addTrack(o.getAudioTracks()[0]), t.audioMixing.audioContextInited && (t.audioMixing.ctx.close(), t.audioMixing.audioContextInited = !1), t.userMuteAudio && (t.stream.getAudioTracks()[0].enabled = !1), t.isPlaying() && (t.stop(), t.elementID && t.play(t.elementID)), t.microphoneId = e, n && n());
                            } catch (e) {
                                return i && i(e);
                            }
                        }, function (e) {
                            return i && i(e);
                        });
                    }, t.switchDevice = function (e, n, i, r) {
                        var s = a.b.reportApiInvoke(t.sid, {
                            callback: function (e, t) {
                                if (e)
                                    return r && r(e);
                                i && i(t);
                            },
                            name: 'Stream.switchDevice',
                            options: arguments,
                            tag: 'tracer'
                        });
                        Q(n, 'deviceId');
                        var d = function () {
                                return t.inSwitchDevice = !1, s();
                            }, c = function (e) {
                                t.inSwitchDevice = !1, o.default.error('['.concat(t.streamId, '] '), e), s(e);
                            };
                        if (t.inSwitchDevice)
                            return s('Device switch is in process.');
                        if (t.inSwitchDevice = !0, !t.local)
                            return c('Only the local stream can switch the device.');
                        if (t.screen && 'video' === e)
                            return c('The device cannot be switched during screen-sharing.');
                        if (t.videoSource || t.audioSource)
                            return c('The device cannot be switched when using videoSource or audioSource.');
                        if (t.lowStream)
                            return c('The device cannot be switched when using lowstream.');
                        var u = !1;
                        for (var l in t.audioMixing.sounds) {
                            if (t.audioMixing.sounds[l].state !== t.audioMixing.states.IDLE) {
                                u = !0;
                                break;
                            }
                        }
                        if (t.audioMixing.audioContextInited && u)
                            return c('The device cannot be switched when using audio Mixing.');
                        K.getDeviceById(n, function () {
                            if ('video' === e)
                                t._switchVideoDevice(n, d, c);
                            else {
                                if ('audio' !== e)
                                    return c('Invalid type.');
                                t._switchAudioDevice(n, d, c);
                            }
                        }, function () {
                            return c('The device does not exist.');
                        });
                    }, t;
                }, de = n(12), ce = [
                    'live',
                    'rtc',
                    'web',
                    'interop',
                    'h264_interop',
                    'web-only'
                ], ue = [
                    'vp8',
                    'h264'
                ], le = [
                    'aes-128-xts',
                    'aes-256-xts',
                    'aes-128-ecb'
                ], pe = function (e) {
                    e && e.apply(this, [].slice.call(arguments, 1));
                }, fe = n(5), me = function (e) {
                    var t = r();
                    return t.needReconnect = !0, t.isTimeout = !1, t.isInit = !0, t.sendbytes = 0, t.recvbytes = 0, t.startTime = Date.now(), t.clientId = e.clientId, t.hostIndex = 0, t.requestID = 0, e.host instanceof Array ? t.host = e.host : t.host = [e.host], t.getSendBytes = function () {
                        return t.sendbytes;
                    }, t.getRecvBytes = function () {
                        return t.recvbytes;
                    }, t.getDuration = function () {
                        return Math.ceil((Date.now() - t.startTime) / 1000);
                    }, t.getURL = function () {
                        return t.connection.url;
                    }, t.reconnect = function () {
                        t.isInit = !0, t.creatConnection();
                    }, t.connectNext = function () {
                        t.isInit = !0, ++t.hostIndex, o.default.debug('[' + t.clientId + '] Gateway length:' + t.host.length + ' current index:' + t.hostIndex), t.hostIndex >= t.host.length ? t.dispatchEvent(u({ type: 'recover' })) : t.creatConnection();
                    }, t.replaceHost = function (e) {
                        t.host = e || t.host, t.hostIndex = 0, t.creatConnection();
                    }, t.creatConnection = function () {
                        o.default.debug('[' + t.clientId + '] start connect:' + t.host[t.hostIndex]), t.lts = new Date().getTime(), t.connection = new WebSocket('wss://' + t.host[t.hostIndex]), t.connection.onopen = function (e) {
                            o.default.debug('[' + t.clientId + '] websockect opened: ' + t.host[t.hostIndex]), t.needReconnect = !0, t.isTimeout = !1, t.isInit = !1, t.sendbytes = 0, t.recvbytes = 0, t.startTime = Date.now(), Object(fe.d)(), clearTimeout(t.timeoutCheck), t.dispatchEvent(u({
                                type: 'onopen',
                                event: e,
                                socket: t
                            }));
                        }, t.connection.onmessage = function (e) {
                            t.recvbytes += Object(G.e)(e.data);
                            var n = JSON.parse(e.data);
                            n.hasOwnProperty('_id') ? t.dispatchEvent(u({
                                type: n._id,
                                msg: n
                            })) : n.hasOwnProperty('_type') && t.dispatchSocketEvent(u({
                                type: n._type,
                                msg: n.message
                            }));
                        }, t.connection.onclose = function (n) {
                            t.needReconnect ? t.isTimeout || t.isInit ? (o.default.debug('[' + t.clientId + '] websockect connect timeout'), a.b.joinGateway(e.sid, {
                                lts: t.lts,
                                succ: !1,
                                ec: 'timeout',
                                addr: t.connection.url
                            }), t.connectNext()) : t.dispatchEvent(u({
                                type: 'disconnect',
                                event: n
                            })) : (o.default.debug('[' + t.clientId + '] websockect closeed'), pe(e.onFailure, n), clearTimeout(t.timeoutCheck), t.dispatchEvent(u({
                                type: 'close',
                                event: n
                            })), t.connection.onopen = void 0, t.connection.onclose = void 0, t.connection.onerror = void 0, t.connection.onmessage = void 0, t.connection = void 0);
                        }, t.connection.onerror = function (e) {
                        }, setTimeout(function () {
                            t.connection && t.connection.readyState != WebSocket.OPEN && (t.isTimeout = !0, t.connection.close());
                        }, 5000);
                    }, t.creatConnection(), t.sendMessage = function (e, n) {
                        if (t.connection && t.connection.readyState == WebSocket.OPEN) {
                            var i = JSON.stringify(e);
                            t.sendbytes += Object(G.e)(i), t.connection.send(i);
                        } else
                            n({ error: 'Gateway not connected' });
                    }, t.disconnect = function () {
                        t.needReconnect = !0, t.connection.close();
                    }, t.close = function () {
                        t.needReconnect = !1, t.connection.onclose = void 0, t.connection.close();
                    }, t.sendSignalCommand = function (e, n) {
                        e._id = '_request_' + t.requestID, t.requestID += 1, 'publish_stats' !== e._type && 'subscribe_stats' !== e._type && 'publish_stats_low' !== e._type && t.on(e._id, function (i) {
                            i.msg && n && n(i.msg._result, i.msg.message), delete t.dispatcher.eventListeners[e._id];
                        }), t.sendMessage(e, function (e) {
                            e.reason = 'NOT_CONNECTED', n && n(e.reason, e);
                        });
                    }, t;
                }, ge = function (e, t) {
                    var n = {
                        connect: function () {
                            t.host = e, n.signal = me(t), n.on = n.signal.on, n.dispatchEvent = n.signal.dispatchEvent, n.signal.on('onopen', function (e) {
                                n.signal.onEvent = function (e) {
                                    n.dispatchEvent(u({
                                        type: e.event,
                                        msg: e
                                    }));
                                }, n.dispatchEvent(u({
                                    type: 'connect',
                                    msg: e
                                }));
                            }), n.signal.on('onError', function (e) {
                                var t = e.msg;
                                onError(t.code, 'error');
                            });
                        },
                        getSendBytes: function () {
                            return n.signal.getSendBytes();
                        },
                        getRecvBytes: function () {
                            return n.signal.getRecvBytes();
                        },
                        getDuration: function () {
                            return n.signal.getDuration();
                        },
                        disconnect: function () {
                            n.signal.disconnect();
                        },
                        close: function () {
                            n.signal.close();
                        },
                        getURL: function () {
                            return n.signal.getURL();
                        },
                        reconnect: function () {
                            n.signal.reconnect();
                        },
                        connectNext: function () {
                            n.signal.connectNext();
                        },
                        replaceHost: function (e) {
                            n.signal.replaceHost(e);
                        },
                        emitSimpleMessage: function (e, t) {
                            n.signal.sendSignalCommand(e, t);
                        }
                    };
                    return n.connect(), n;
                }, ve = function (e, t) {
                    var n = !1, r = 0, s = {
                            command: 'convergeAllocateEdge',
                            sid: e.sid,
                            appId: e.appId,
                            token: e.token,
                            uid: e.uid,
                            cname: e.cname,
                            ts: Math.floor(Date.now() / 1000),
                            version: i.VERSION,
                            seq: 0,
                            requestId: 1
                        };
                    Object(i.getParameter)('PROXY_CS').map(function (d) {
                        var c = new Date().getTime();
                        Se('https://' + d + '/api/v1', s, function (s, u) {
                            if (s)
                                return o.default.debug('[' + e.clientId + '] Request proxy server failed: ', s), r++, a.b.requestProxyAppCenter(e.sid, {
                                    lts: c,
                                    succ: !1,
                                    APAddr: d,
                                    workerManagerList: null,
                                    ec: JSON.stringify(s),
                                    response: JSON.stringify({
                                        err: s,
                                        res: u
                                    })
                                }), void (r >= Object(i.getParameter)('PROXY_CS').length && t && t('Get proxy server failed: request all failed'));
                            if (!n)
                                if ((u = JSON.parse(u)).json_body) {
                                    var l = JSON.parse(u.json_body);
                                    if (o.default.debug('[' + e.clientId + '] App return:', l.servers), 200 !== l.code) {
                                        s = 'Get proxy server failed: response code [' + l.code + '], reason [ ' + l.reason + ']';
                                        o.default.debug('[' + e.clientId + '] ' + s), a.b.requestProxyAppCenter(e.sid, {
                                            lts: c,
                                            succ: !1,
                                            APAddr: d,
                                            workerManagerList: null,
                                            ec: s,
                                            response: JSON.stringify({
                                                err: s,
                                                res: u
                                            })
                                        });
                                    } else {
                                        n = !0;
                                        var p = _e(l.servers);
                                        a.b.requestProxyAppCenter(e.sid, {
                                            lts: c,
                                            succ: !0,
                                            APAddr: d,
                                            workerManagerList: JSON.stringify(p),
                                            ec: null,
                                            response: JSON.stringify({ res: u })
                                        }), t && t(null, p);
                                    }
                                } else
                                    o.default.debug('[' + e.clientId + '] Get proxy server failed: no json_body'), a.b.requestProxyAppCenter(e.sid, {
                                        lts: c,
                                        succ: !1,
                                        APAddr: d,
                                        workerManagerList: null,
                                        ec: 'Get proxy server failed: no json_body',
                                        response: JSON.stringify({ res: u })
                                    });
                        });
                    });
                }, Se = function (e, t, n) {
                    var i = {
                        service_name: 'webrtc_proxy',
                        json_body: JSON.stringify(t)
                    };
                    Object(fe.c)(e, i, function (e) {
                        n && n(null, e);
                    }, function (e) {
                        n && n(e);
                    }, {
                        'X-Packet-Service-Type': 0,
                        'X-Packet-URI': 61
                    });
                }, Ie = function (e, t, n) {
                    var i = !1, r = 0, s = {
                            command: 'request',
                            gatewayType: 'http',
                            appId: e.appId,
                            cname: e.cname,
                            uid: e.uid + '',
                            sdkVersion: '2.3.1',
                            sid: e.sid,
                            seq: 1,
                            ts: +new Date(),
                            requestId: 3,
                            clientRequest: {
                                appId: e.appId,
                                cname: e.cname,
                                uid: e.uid + '',
                                sid: e.sid
                            }
                        };
                    t.map(function (d) {
                        var c = new Date().getTime();
                        !function (e, t, n) {
                            Object(fe.c)(e, t, function (e) {
                                n && n(null, e);
                            }, function (e) {
                                n && n(e);
                            });
                        }('https://' + d + ':4000/v2/machine', s, function (s, u) {
                            if (s)
                                return o.default.debug('[' + e.clientId + '] Request worker manager failed: ', s), r++, a.b.requestProxyWorkerManager(e.sid, {
                                    lts: c,
                                    succ: !1,
                                    workerManagerAddr: d,
                                    ec: JSON.stringify(s),
                                    response: JSON.stringify({ res: u })
                                }), void (r >= t.length && n && n('requeet worker manager server failed: request failed'));
                            if (!i) {
                                if (!(u = JSON.parse(u)).serverResponse)
                                    return n && n('requeet worker manager server failed: serverResponse is undefined');
                                i = !0, a.b.requestProxyWorkerManager(e.sid, {
                                    lts: c,
                                    succ: !0,
                                    workerManagerAddr: d,
                                    ec: JSON.stringify(s),
                                    response: JSON.stringify({ res: u })
                                }), n && n(null, {
                                    address: d,
                                    serverResponse: u.serverResponse
                                });
                            }
                        });
                    });
                }, _e = function (e) {
                    if (!e || [] instanceof Array == !1)
                        return [];
                    var t = [];
                    return e.forEach(function (e) {
                        var n;
                        e.address && e.tcp ? (e.address.match(/^[\.\:\d]+$/) ? n = ''.concat(e.address.replace(/[^\d]/g, '-'), '.edge.agora.io') : (o.default.info('[' + joinInfo.clientId + '] ' + 'Cannot recognized as IP address '.concat(e.address, '. Used As Host instead')), n = ''.concat(e.address, ':').concat(e.tcp)), t.push(n)) : o.default.error('[' + joinInfo.clientId + '] Invalid address format ', e);
                    }), t;
                }, he = function (e, t) {
                    var n = I()({}, e), o = Object(i.getParameter)('WEBCS_DOMAIN').concat(Object(i.getParameter)('WEBCS_DOMAIN_BACKUP_LIST')), a = [], r = !1;
                    (o = o.map(function (e) {
                        return n.proxyServer ? 'https://'.concat(n.proxyServer, '/ap/?url=').concat(e + '/api/v1') : 'https://'.concat(e, '/api/v1');
                    })).map(function (e) {
                        !function (e, t, n) {
                            var i = {
                                flag: 64,
                                cipher_method: 0,
                                timeout: 1000,
                                features: t
                            };
                            Object(fe.c)(e, i, function (e) {
                                try {
                                    var t = JSON.parse(e);
                                    n && n(null, t);
                                } catch (e) {
                                    n && n(e);
                                }
                                n && n(null, e);
                            }, function (e) {
                                n && n(e);
                            }, {
                                'X-Packet-Service-Type': 0,
                                'X-Packet-URI': 54
                            });
                        }(e, n, function (e, n) {
                            r || (e ? (a.push(e), a.length >= o.length && t && t('ALL_REQUEST_FAILED')) : (r = !0, t && t(null, n)));
                        });
                    });
                }, ye = function (e, t, n, i) {
                    var r = new Date().getTime(), s = '';
                    t.multiIP && t.multiIP.gateway_ip && (s = {
                        vocs_ip: [t.multiIP.uni_lbs_ip],
                        vos_ip: [t.multiIP.gateway_ip]
                    });
                    var d = {
                        flag: 4,
                        ts: +new Date(),
                        key: t.appId,
                        cname: t.cname,
                        detail: {},
                        uid: t.uid || 0
                    };
                    s && (d.detail[5] = JSON.stringify(s)), Object(fe.c)(e, d, function (s) {
                        try {
                            var d = JSON.parse(s).res, c = d.code;
                        } catch (e) {
                            var u = 'requestChooseServer failed with unexpected body ' + s;
                            return o.default.error('[' + joinInfo.clientId + ']', u), i(u);
                        }
                        if (c) {
                            var l = y[d.code] || c;
                            return a.b.joinChooseServer(t.sid, {
                                lts: r,
                                succ: !1,
                                csAddr: e,
                                serverList: null,
                                ec: l
                            }), i('Get server node failed [' + l + ']', e, l);
                        }
                        var p = [], f = [
                                '.agora.io',
                                '.agoraio.cn'
                            ], m = 0;
                        if (e.indexOf(f[1]) > -1 && (m = 1), d.addresses.forEach(function (e) {
                                var t;
                                e.ip && e.port ? (e.ip.match(/^[\.\:\d]+$/) ? t = 'webrtc-'.concat(e.ip.replace(/[^\d]/g, '-')).concat(f[m++ % f.length], ':').concat(e.port) : (o.default.info('[' + joinInfo.clientId + '] ' + 'Cannot recognized as IP address '.concat(e.ip, '. Used As Host instead')), t = ''.concat(e.ip, ':').concat(e.port)), p.push(t)) : o.default.error('[' + joinInfo.clientId + '] Invalid address format ', e);
                            }), !p.length) {
                            o.default.error('[' + joinInfo.clientId + '] Empty Address response', d);
                            l = 'EMPTY_ADDRESS_RESPONSE';
                            return a.b.joinChooseServer(t.sid, {
                                lts: r,
                                succ: !1,
                                csAddr: e,
                                serverList: null,
                                ec: l
                            }), i('Get server node failed [' + l + ']', e, l);
                        }
                        var g = {
                            gateway_addr: p,
                            uid: d.uid,
                            cid: d.cid,
                            uni_lbs_ip: d.detail
                        };
                        return n(g, e);
                    }, function (e, n) {
                        'timeout' === e.type ? (a.b.joinChooseServer(t.sid, {
                            lts: r,
                            succ: !1,
                            csAddr: n,
                            serverList: null,
                            ec: 'timeout'
                        }), i('Connect choose server timeout', n)) : a.b.joinChooseServer(t.sid, {
                            lts: r,
                            succ: !1,
                            csAddr: n,
                            serverList: null,
                            ec: 'server_wrong'
                        });
                    }, {
                        'X-Packet-Service-Type': 0,
                        'X-Packet-URI': 44
                    });
                }, be = function (e, t, n) {
                    var r = !1, s = null, d = 1, c = 1, u = null, l = function t(n, c) {
                            if (!r) {
                                var l = !1, f = !1, m = [], g = p.getBrowserInfo() || {};
                                he({
                                    device: g.name,
                                    system: g.os,
                                    vendor: e.appId,
                                    version: i.VERSION,
                                    cname: e.cname,
                                    sid: e.sid,
                                    session_id: Object(a.a)(),
                                    detail: '',
                                    proxyServer: n
                                }, function (t, n) {
                                    f = !0;
                                    try {
                                        var i = Object.keys(n.test_tags)[0], o = JSON.parse(n.test_tags[i]);
                                        u = o[1];
                                    } catch (e) {
                                        u = null;
                                    }
                                    a.b.reportApiInvoke(e.sid, {
                                        name: '_config-distribute-request',
                                        options: {
                                            err: t,
                                            res: n
                                        }
                                    })(), l && c && c(m, u);
                                }), function (e, t, n) {
                                    for (var r = new Date().getTime(), s = !1, d = !0, c = function (n, i) {
                                                if (s)
                                                    a.b.joinChooseServer(e.sid, {
                                                        lts: r,
                                                        succ: !0,
                                                        csAddr: i,
                                                        serverList: n.gateway_addr,
                                                        cid: n.cid + '',
                                                        uid: n.uid + '',
                                                        ec: null
                                                    }, !1);
                                                else {
                                                    if (clearTimeout(g), s = !0, o.default.debug('[' + e.clientId + '] Get gateway address:', n.gateway_addr), e.proxyServer) {
                                                        for (var d = n.gateway_addr, c = 0; c < d.length; c++) {
                                                            var u = d[c].split(':');
                                                            n.gateway_addr[c] = e.proxyServer + '/ws/?h=' + u[0] + '&p=' + u[1];
                                                        }
                                                        o.default.debug('[' + e.clientId + '] Get gateway address:', n.gateway_addr);
                                                    }
                                                    t(n), a.b.joinChooseServer(e.sid, {
                                                        lts: r,
                                                        succ: !0,
                                                        csAddr: i,
                                                        serverList: n.gateway_addr,
                                                        cid: n.cid + '',
                                                        uid: n.uid + '',
                                                        ec: null
                                                    }, !0);
                                                }
                                            }, u = function (t, i, a) {
                                                d && (o.default.error('[' + e.clientId + ']', t, i, a), a && !E.includes(a) && (d = !1, n(a)));
                                            }, l = Object(i.getParameter)('WEBCS_DOMAIN'), p = 0; p < l.length; ++p) {
                                        var f;
                                        if ('string' == typeof l[p]) {
                                            var m = l[p];
                                            f = e.proxyServer ? 'https://'.concat(e.proxyServer, '/ap/?url=').concat(m + '/api/v1') : 'https://'.concat(m, '/api/v1'), o.default.debug('[' + e.clientId + '] ' + 'Connect to choose_server: '.concat(f)), ye(f, e, c, u);
                                        } else
                                            o.default.error('[' + e.clientId + '] Invalid Host', l[p]);
                                    }
                                    var g = setTimeout(function () {
                                        if (!s)
                                            for (var t = Object(i.getParameter)('WEBCS_DOMAIN_BACKUP_LIST'), n = 0; n < t.length; ++n)
                                                if ('string' == typeof t[n]) {
                                                    var a = t[n];
                                                    f = e.proxyServer ? 'https://'.concat(e.proxyServer, '/ap/?url=').concat(a + '/api/v1') : 'https://'.concat(a, '/api/v1'), o.default.debug('[' + e.clientId + '] ' + 'Connect to backup_choose_server: '.concat(f)), ye(f, e, c, u);
                                                } else
                                                    o.default.error('[' + e.clientId + '] Invalid Host', t[n]);
                                    }, 1000);
                                    setTimeout(function () {
                                        !s && d && n();
                                    }, Object(i.getParameter)('WEBCS_BACKUP_CONNECT_TIMEOUT'));
                                }(e, function (e) {
                                    r = !0, l = !0, m = e, clearTimeout(s), f && c && c(m, u);
                                }, function (i) {
                                    i ? o.default.info('[' + e.clientId + '] Join failed: ' + i) : (o.default.debug('[' + e.clientId + '] Request gateway list will be restart in ' + d + 's'), s = setTimeout(function () {
                                        t(n, c);
                                    }, 1000 * d), d = d >= 3600 ? 3600 : 2 * d);
                                });
                            }
                        };
                    e.useProxyServer ? function n() {
                        !function (e, t) {
                            ve(e, function (n, i) {
                                if (n)
                                    return t && t(n);
                                o.default.debug('[' + e.clientId + '] getProxyServerList: ', i), Ie(e, i, t);
                            });
                        }(e, function (i, r) {
                            if (i)
                                return o.default.debug('[' + e.clientId + ']', i), o.default.debug('[' + e.clientId + '] Request proxy will be restart in ' + c + 's'), s = setTimeout(function () {
                                    n();
                                }, 1000 * c), void (c = c >= 3600 ? 3600 : 2 * c);
                            clearTimeout(s);
                            var d = r.address;
                            e.proxyServer = d, e.turnServer = {
                                url: r.address,
                                tcpport: r.serverResponse.tcpport || '3433',
                                udpport: r.serverResponse.udpport || '3478',
                                username: r.serverResponse.username || 'test',
                                credential: r.serverResponse.password || '111111',
                                forceturn: !0
                            }, e.turnServer.tcpport += '', e.turnServer.udpport += '', a.b.setProxyServer(d), o.default.setProxyServer(d), l(d, t);
                        });
                    }() : l(null, t);
                }, Ee = {
                    ERR_NO_VOCS_AVAILABLE: 'tryNext',
                    ERR_NO_VOS_AVAILABLE: 'tryNext',
                    ERR_JOIN_CHANNEL_TIMEOUT: 'tryNext',
                    WARN_REPEAT_JOIN: 'quit',
                    ERR_JOIN_BY_MULTI_IP: 'recover',
                    WARN_LOOKUP_CHANNEL_TIMEOUT: 'tryNext',
                    WARN_OPEN_CHANNEL_TIMEOUT: 'tryNext',
                    ERR_VOM_SERVICE_UNAVAILABLE: 'tryNext',
                    ERR_TOO_MANY_USERS: 'tryNext',
                    ERR_MASTER_VOCS_UNAVAILABLE: 'tryNext',
                    ERR_INTERNAL_ERROR: 'tryNext',
                    notification_test_recover: 'recover',
                    notification_test_tryNext: 'tryNext',
                    notification_test_retry: 'retry'
                }, Re = {
                    googResidualEchoLikelihood: 'A_rel',
                    googResidualEchoLikelihoodRecentMax: 'A_rem',
                    googTypingNoiseState: 'A_tns',
                    totalSamplesDuration: 'A_sd',
                    googAdaptationChanges: 'A_ac',
                    googBandwidthLimitedResolution: 'A_blr',
                    googCpuLimitedResolution: 'A_clr',
                    googEncodeUsagePercent: 'A_eup',
                    googHasEnteredLowResolution: 'A_helr',
                    googActualEncBitrate: 'A_aeb',
                    googAvailableReceiveBandwidth: 'A_arb',
                    googAvailableSendBandwidth: 'A_asb',
                    googRetransmitBitrate: 'A_rb',
                    googTargetEncBitrate: 'A_teb',
                    googCaptureStartNtpTimeMs: 'A_csnt',
                    googPreemptiveExpandRate: 'A_per',
                    googPreferredJitterBufferMs: 'A_pjbm',
                    googSecondaryDecodedRate: 'A_sder',
                    googSecondaryDiscardedRate: 'A_sdir',
                    googSpeechExpandRate: 'A_ser',
                    googFrameHeightReceived: 'A_fhr',
                    googInterframeDelayMax: 'A_ifdm',
                    googMinPlayoutDelayMs: 'A_mpdm',
                    aecDivergentFilterFraction: 'A_dff',
                    codecImplementationName: 'A_cin',
                    googEchoCancellationReturnLoss: 'A_ecl',
                    googEchoCancellationReturnLossEnhancement: 'A_ece'
                }, Ae = {};
            for (var Te in Re) {
                var Oe = Re[Te];
                Re[Oe] && console.error('Key Conflict: '.concat(Te)), Ae[Oe] = Te;
            }
            var Ce = function (e) {
                    return Re[e] || e;
                }, Ne = function e(t) {
                    var n = !1, s = function (e) {
                            return {
                                _type: 'control',
                                message: e
                            };
                        }, u = function (e) {
                            var t = {};
                            return Object.keys(e).forEach(function (n) {
                                t[Ce(n)] = e[n];
                            }), {
                                _type: 'subscribe_related_stats',
                                options: t
                            };
                        }, f = function (e, t, n) {
                            return {
                                _type: 'publish',
                                options: e,
                                sdp: t,
                                p2pid: n
                            };
                        }, m = e.DISCONNECTED, g = e.CONNECTING, S = e.CONNECTED, _ = e.DISCONNECTING, h = m, y = r();
                    Object.defineProperty(y, 'state', {
                        set: function (t) {
                            var n = h;
                            h = t, n !== t && y.dispatchEvent({
                                type: 'connection-state-change',
                                prevState: e.connetionStateMap[n],
                                curState: e.connetionStateMap[t]
                            });
                        },
                        get: function () {
                            return h;
                        }
                    }), y.socket = void 0, y.state = m, y.mode = t.mode, y.role = t.role, y.codec = t.codec, y.config = {}, y.timers = {}, y.timer_counter = {}, y.localStreams = {}, y.remoteStreams = {}, y.attemps = 1, y.p2p_attemps = 1, y.audioLevel = {}, y.activeSpeaker = void 0, y.reconnectMode = 'retry', y.rejoinAttempt = 0, y.hasChangeBGPAddress = !1, y.traffic_stats = {}, y.clientId = t.clientId, y.p2ps = new Map(), y.firstFrameTimer = new Map(), y.firstAudioDecodeTimer = new Map(), y.liveStreams = new Map(), y.injectLiveStreams = new Map(), y.remoteStreamsInChannel = new Set(), y.inChannelInfo = {
                        joinAt: null,
                        duration: 0
                    };
                    var E = pe;
                    y.p2pCounter = Object(G.g)(100000), y.generateP2PId = function () {
                        return ++y.p2pCounter;
                    }, y.audioVolumeIndication = {
                        enabled: !1,
                        sortedAudioVolumes: [],
                        smooth: 3,
                        interval: 2000
                    }, y.remoteVideoStreamTypes = {
                        REMOTE_VIDEO_STREAM_HIGH: 0,
                        REMOTE_VIDEO_STREAM_LOW: 1,
                        REMOTE_VIDEO_STREAM_MEDIUM: 2
                    }, y.streamFallbackTypes = {
                        STREAM_FALLBACK_OPTION_DISABLED: 0,
                        STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW: 1,
                        STREAM_FALLBACK_OPTION_AUDIO_ONLY: 2
                    }, y.configPublisher = function (e) {
                        y.config = e;
                    }, y.getGatewayInfo = function (e, t) {
                        N({ _type: 'gateway_info' }, e, t);
                    }, y.setClientRole = function (e, t) {
                        o.default.debug('['.concat(y.clientId, '] setClientRole to ').concat(e));
                        var n = a.b.reportApiInvoke(y.joinInfo.sid, {
                            name: '_setClientRole',
                            callback: t
                        });
                        N(function (e) {
                            return {
                                _type: 'set_client_role',
                                message: e
                            };
                        }(e), function () {
                            y.role = e, y.dispatchEvent({
                                type: 'client-role-changed',
                                role: e
                            }), n && n(null, { role: e });
                        }, function (t) {
                            var i = t && t.code ? t.code : 0, a = R[i];
                            if ('ERR_ALREADY_IN_USE' === a)
                                return n && n(null);
                            a || (a = 'UNKNOW_ERROR_'.concat(i)), o.default.error('set Client role error to ' + e + ': ' + a), n && n(a);
                        });
                    }, y.join = function (e, n, r, s) {
                        e.useProxyServer && (y.hasChangeBGPAddress = !0);
                        var d = new Date().getTime(), c = e.uid;
                        if (y.inChannelInfo.joinAt && (y.inChannelInfo.duration += d - y.inChannelInfo.joinAt), y.inChannelInfo.joinAt = d, y.state !== g)
                            return o.default.error('['.concat(y.clientId, '] GatewayClient.join Failed: state '), y.state), s && s(A.INVALID_OPERATION), void a.b.joinGateway(e.sid, {
                                lts: d,
                                succ: !1,
                                ec: A.INVALID_OPERATION,
                                addr: null
                            });
                        if (null != c && parseInt(c) !== c)
                            return o.default.error('['.concat(y.clientId, '] Input uid is invalid')), y.state = m, s && s(A.INVALID_PARAMETER), void a.b.joinGateway(e.sid, {
                                lts: d,
                                succ: !1,
                                ec: A.INVALID_PARAMETER,
                                addr: null
                            });
                        var u = we.register(y, {
                            uid: c,
                            cname: e && e.cname
                        });
                        if (u)
                            return y.state = m, s && s(u), void a.b.joinGateway(e.sid, {
                                lts: d,
                                succ: !1,
                                ec: u,
                                addr: null
                            });
                        y.joinInfo = I()({}, e), y.uid = c, y.key = n, C(e, function (n) {
                            var c, u, l;
                            y.state = S, o.default.debug('['.concat(y.clientId, '] Connected to gateway server')), y.pingTimer = setInterval(function () {
                                var e = Date.now();
                                N({ _type: 'ping' }, function () {
                                    var t = Date.now() - e;
                                    N({
                                        _type: 'signal_stats',
                                        message: { pingpongElapse: t }
                                    }, function () {
                                    }, function (e) {
                                    });
                                }, function (e) {
                                });
                            }, 3000), N((c = { role: y.role }, u = c.role, l = {
                                appId: t.appId,
                                key: y.key,
                                channel: y.joinInfo.cname,
                                uid: y.uid,
                                version: i.VERSION,
                                browser: navigator.userAgent,
                                mode: y.mode,
                                codec: y.codec,
                                role: u,
                                config: y.config,
                                processId: Object(a.a)()
                            }, y.joinInfo.hasOwnProperty('stringUid') && (l.stringUid = y.joinInfo.stringUid), {
                                _type: 'join1',
                                message: l
                            }), function (t) {
                                if (a.b.joinGateway(e.sid, {
                                        lts: d,
                                        succ: !0,
                                        ec: null,
                                        vid: t.vid,
                                        addr: y.socket.getURL()
                                    }), y.rejoinAttempt = 0, r && r(t.uid), y.dispatchEvent({ type: 'join' }), y.leaveOnConnected) {
                                    o.default.info('['.concat(y.clientId, '] Calling Leave() once joined'));
                                    var n = y.leaveOnConnected;
                                    y.leaveOnConnected = null, y.leave(n.onSuccess, n.onFailure);
                                }
                            }, function (t) {
                                if (o.default.error('['.concat(y.clientId, '] User join failed [').concat(t, ']')), Ee[t] && y.rejoinAttempt < 4) {
                                    if (y._doWithAction(Ee[t], r, s), y.leaveOnConnected) {
                                        o.default.error('['.concat(y.clientId, '] Calling Leave() once joined: Join Failed'));
                                        var n = y.leaveOnConnected;
                                        y.leaveOnConnected = null, n.onFailure(A.JOIN_CHANNEL_FAILED);
                                    }
                                } else
                                    s && s(t);
                                a.b.joinGateway(e.sid, {
                                    lts: d,
                                    succ: !1,
                                    ec: t,
                                    addr: y.socket.getURL()
                                });
                            });
                        }, function (t) {
                            o.default.error('['.concat(y.clientId, '] User join failed [').concat(t, ']')), s && s(t), a.b.joinGateway(e.sid, {
                                lts: d,
                                succ: !1,
                                ec: t,
                                addr: y.socket.getURL()
                            });
                        }), clearInterval(y.timers.trafficStats), y.timers.trafficStats = setInterval(function () {
                            N({ _type: 'traffic_stats' }, function (e) {
                                y.traffic_stats = e;
                                var t = y.joinInfo.stringUid, n = y.localStreams[c] || y.localStreams[t];
                                n && (n.traffic_stats = { access_delay: e.access_delay }), e.peer_delay && e.peer_delay.forEach(function (t) {
                                    var n = y.remoteStreams[t.peer_uid];
                                    n && (n.traffic_stats = {
                                        access_delay: e.access_delay,
                                        e2e_delay: t.e2e_delay,
                                        audio_delay: t.audio_delay,
                                        video_delay: t.video_delay
                                    });
                                });
                            });
                        }, 3000), y.resetAudioVolumeIndication();
                    }, y.leave = function (e, t) {
                        switch (y.state) {
                        case m:
                            return o.default.debug('['.concat(y.clientId, '] Client Already in DISCONNECTED status')), void E(e);
                        case _:
                            return o.default.error('['.concat(y.clientId, '] Client Already in DISCONNECTING status')), void E(t, A.INVALID_OPERATION);
                        case g:
                            return y.leaveOnConnected ? (o.default.error('['.concat(y.clientId, '] Client.leave() already called')), void E(t, A.INVALID_OPERATION)) : (o.default.debug('['.concat(y.clientId, '] Client connecting. Waiting for Client Fully Connected(And leave)')), void (y.leaveOnConnected = {
                                onSuccess: e,
                                onFailure: t
                            }));
                        }
                        var n = we.unregister(y);
                        if (n)
                            o.default.error('['.concat(y.clientId, '] '), n);
                        else {
                            for (var i in (y.state = _, clearInterval(y.pingTimer), y.timers))
                                y.timers.hasOwnProperty(i) && clearInterval(y.timers[i]);
                            for (var i in (y.inChannelInfo.joinAt && (y.inChannelInfo.duration += Date.now() - y.inChannelInfo.joinAt, y.inChannelInfo.joinAt = null), N({ _type: 'leave' }, function (t) {
                                    y.socket.close(), y.socket = void 0, o.default.info('['.concat(y.clientId, '] Leave channel success')), y.state = m, e && e(t);
                                }, function (e) {
                                    o.default.error('['.concat(y.clientId, '] Leave Channel Failed'), e), y.state = S, t && t(e);
                                }), y.localStreams))
                                if (y.localStreams.hasOwnProperty(i)) {
                                    var a = y.localStreams[i];
                                    delete y.localStreams[i], void 0 !== a.pc && (a.pc.close(), a.pc = void 0);
                                }
                            k();
                        }
                    }, y.publish = function (e, t, n, i) {
                        var r = new Date().getTime(), d = !1;
                        if (e.publishLTS = r, 'object' !== v()(e) || null === e)
                            return o.default.error('['.concat(y.clientId, '] Invalid local stream')), i && i(A.INVALID_LOCAL_STREAM), void a.b.publish(y.joinInfo.sid, {
                                lts: r,
                                succ: !1,
                                audioName: e.hasAudio() && e.audioName,
                                videoName: e.hasVideo() && e.videoName,
                                screenName: e.hasScreen() && e.screenName,
                                ec: A.INVALID_LOCAL_STREAM
                            });
                        if (null === e.stream && void 0 === e.url)
                            return o.default.error('['.concat(y.clientId, '] Invalid local media stream')), i && i(A.INVALID_LOCAL_STREAM), void a.b.publish(y.joinInfo.sid, {
                                lts: r,
                                succ: !1,
                                audioName: e.hasAudio() && e.audioName,
                                videoName: e.hasVideo() && e.videoName,
                                screenName: e.hasScreen() && e.screenName,
                                ec: A.INVALID_LOCAL_STREAM
                            });
                        if (y.state !== S)
                            return o.default.error('['.concat(y.clientId, '] User is not in the session')), i && i(A.INVALID_OPERATION), void a.b.publish(y.joinInfo.sid, {
                                lts: r,
                                succ: !1,
                                audioName: e.hasAudio() && e.audioName,
                                videoName: e.hasVideo() && e.videoName,
                                screenName: e.hasScreen() && e.screenName,
                                ec: A.INVALID_OPERATION
                            });
                        var u = e.getAttributes() || {};
                        if (e.local && void 0 === y.localStreams[e.getId()] && (e.hasAudio() || e.hasVideo() || e.hasScreen())) {
                            var l = y.generateP2PId();
                            if (y.p2ps.set(l, e), e.p2pId = l, void 0 !== e.url)
                                w(f({
                                    state: 'url',
                                    audio: e.hasAudio(),
                                    video: e.hasVideo(),
                                    attributes: e.getAttributes(),
                                    mode: y.mode
                                }, e.url), function (t, n) {
                                    'success' === t ? (e.getUserId() !== n && e.setUserId(n), y.localStreams[n] = e, e.onClose = function () {
                                        y.unpublish(e);
                                    }) : o.default.error('['.concat(y.clientId, '] Publish local stream failed'), t);
                                });
                            else {
                                y.localStreams[e.getId()] = e, e.connectionSpec = {
                                    callback: function (u) {
                                        o.default.debug('['.concat(y.clientId, '] SDP exchange in publish : send offer --  '), JSON.parse(u)), w(f({
                                            state: 'offer',
                                            id: e.getId(),
                                            audio: e.hasAudio(),
                                            video: e.hasVideo() || e.hasScreen(),
                                            attributes: e.getAttributes(),
                                            streamType: t.streamType,
                                            dtx: e.DTX,
                                            hq: e.highQuality,
                                            lq: e.lowQuality,
                                            stereo: e.stereo,
                                            speech: e.speech,
                                            mode: y.mode,
                                            codec: y.codec,
                                            p2pid: l,
                                            turnip: y.joinInfo.turnServer.url,
                                            turnport: Number(y.joinInfo.turnServer.udpport),
                                            turnusername: y.joinInfo.turnServer.username,
                                            turnpassword: y.joinInfo.turnServer.credential
                                        }, u), function (p, m) {
                                            if ('error' === p)
                                                return o.default.error('['.concat(y.clientId, '] Publish local stream failed')), i && i(A.PUBLISH_STREAM_FAILED), void a.b.publish(y.joinInfo.sid, {
                                                    lts: r,
                                                    succ: !1,
                                                    audioName: e.hasAudio() && e.audioName,
                                                    videoName: e.hasVideo() && e.videoName,
                                                    screenName: e.hasScreen() && e.screenName,
                                                    localSDP: u,
                                                    ec: A.PUBLISH_STREAM_FAILED
                                                });
                                            e.pc.onsignalingmessage = function (n) {
                                                e.pc.onsignalingmessage = function () {
                                                }, w(f({
                                                    state: 'ok',
                                                    id: e.getId(),
                                                    audio: e.hasAudio(),
                                                    video: e.hasVideo(),
                                                    screen: e.hasScreen(),
                                                    streamType: t.streamType,
                                                    attributes: e.getAttributes(),
                                                    mode: y.mode
                                                }, n)), e.getUserId() !== m.id && e.setUserId(m.id), o.default.info('['.concat(y.clientId, '] Local stream published with uid'), m.id), e.onClose = function () {
                                                    y.unpublish(e);
                                                }, e._onAudioUnmute = function () {
                                                    N(s({
                                                        action: 'audio-out-on',
                                                        streamId: e.getId()
                                                    }), function () {
                                                    }, function () {
                                                    });
                                                }, e._onVideoUnmute = function () {
                                                    N(s({
                                                        action: 'video-out-on',
                                                        streamId: e.getId()
                                                    }), function () {
                                                    }, function () {
                                                    });
                                                }, e._onAudioMute = function () {
                                                    N(s({
                                                        action: 'audio-out-off',
                                                        streamId: e.getId()
                                                    }), function () {
                                                    }, function () {
                                                    });
                                                }, e._onVideoMute = function () {
                                                    N(s({
                                                        action: 'video-out-off',
                                                        streamId: e.getId()
                                                    }), function () {
                                                    }, function () {
                                                    });
                                                }, e.getId() === e.getUserId() && (e.isAudioOn() || e.hasAudio() && (o.default.debug('['.concat(y.clientId, '] local stream audio mute')), e._onAudioMute()), e.isVideoOn() || (e.hasVideo() || e.hasScreen()) && (o.default.debug('['.concat(y.clientId, '] local stream video mute')), e._onVideoMute()));
                                            }, e.pc.oniceconnectionstatechange = function (t) {
                                                if ('failed' === t) {
                                                    if (null != y.timers[e.getId()] && (clearInterval(y.timers[e.getId()]), clearInterval(y.timers[e.getId()] + '_RelatedStats')), o.default.error('['.concat(y.clientId, '] Publisher connection is lost -- streamId: ').concat(e.getId(), ', p2pId: ').concat(l)), y.p2ps.delete(l), o.default.debug('['.concat(y.clientId, '] publish p2p failed: '), y.p2ps), !d)
                                                        return d = !0, a.b.publish(y.joinInfo.sid, {
                                                            lts: r,
                                                            succ: !1,
                                                            audioName: e.hasAudio() && e.audioName,
                                                            videoName: e.hasVideo() && e.videoName,
                                                            screenName: e.hasScreen() && e.screenName,
                                                            ec: A.PEERCONNECTION_FAILED
                                                        }), y.dispatchEvent(c({
                                                            type: 'pubP2PLost',
                                                            stream: e
                                                        })), i && i(A.PEERCONNECTION_FAILED);
                                                    y.dispatchEvent(c({
                                                        type: 'pubP2PLost',
                                                        stream: e
                                                    }));
                                                } else if ('connected' === t && (o.default.debug('['.concat(y.clientId, '] publish p2p connected: '), y.p2ps), !d))
                                                    return d = !0, a.b.publish(y.joinInfo.sid, {
                                                        lts: r,
                                                        succ: !0,
                                                        audioName: e.hasAudio() && e.audioName,
                                                        videoName: e.hasVideo() && e.videoName,
                                                        screenName: e.hasScreen() && e.screenName,
                                                        ec: null
                                                    }), n && n();
                                            }, o.default.debug('['.concat(y.clientId, '] SDP exchange in publish : receive answer --  '), JSON.parse(p)), e.pc.processSignalingMessage(p);
                                        });
                                    },
                                    audio: e.hasAudio(),
                                    video: e.hasVideo(),
                                    screen: e.hasScreen(),
                                    isSubscriber: !1,
                                    stunServerUrl: y.stunServerUrl,
                                    turnServer: y.joinInfo.turnServer,
                                    maxAudioBW: u.maxAudioBW,
                                    minVideoBW: u.minVideoBW,
                                    maxVideoBW: u.maxVideoBW,
                                    mode: y.mode,
                                    codec: y.codec,
                                    isVideoMute: e.userMuteVideo || e.peerMuteVideo,
                                    isAudioMute: e.userMuteAudio || e.peerMuteAudio,
                                    maxFrameRate: e.attributes.maxFrameRate,
                                    clientId: y.clientId
                                }, e.pc = W(e.connectionSpec), e.pc.addStream(e.stream), o.default.debug('['.concat(y.clientId, '] PeerConnection add stream :'), e.stream), e.pc.onnegotiationneeded = function (t) {
                                    w(f({
                                        state: 'negotiation',
                                        p2pid: l
                                    }, t), function (t, n) {
                                        e.pc.processSignalingMessage(t);
                                    });
                                }, y.timers[e.getId()] = setInterval(function () {
                                    var t = 0;
                                    e && e.pc && e.pc.getStats && e.pc.getStatsRate(function (n) {
                                        n.forEach(function (n) {
                                            if (n && n.id && !/_recv$/.test(n.id) && !/^time$/.test(n.id) && e.getUserId())
                                                if (-1 === n.id.indexOf('outbound_rtp') && -1 === n.id.indexOf('OutboundRTP') || 'video' !== n.mediaType || (n.googFrameWidthSent = e.videoWidth + '', n.googFrameHeightSent = e.videoHeight + ''), e.getId() == e.getUserId()) {
                                                    var i = 200 * t;
                                                    t++, setTimeout(function () {
                                                        var e, t;
                                                        N((e = n, t = {}, Object.keys(e).forEach(function (n) {
                                                            t[Ce(n)] = e[n];
                                                        }), {
                                                            _type: 'publish_stats',
                                                            options: { stats: t },
                                                            sdp: null
                                                        }), null, null);
                                                    }, i);
                                                } else {
                                                    i = 200 * t;
                                                    t++, setTimeout(function () {
                                                        var e, t;
                                                        N((e = n, t = {}, Object.keys(e).forEach(function (n) {
                                                            t[Ce(n)] = e[n];
                                                        }), {
                                                            _type: 'publish_stats_low',
                                                            options: { stats: t },
                                                            sdp: null
                                                        }), null, null);
                                                    }, i);
                                                }
                                        });
                                    });
                                }, 3000);
                                var p = function () {
                                    e && e.pc && e.pc.getVideoRelatedStats && e.pc.getVideoRelatedStats(function (t) {
                                        var n, i;
                                        e.getId() === e.getUserId() ? N((n = t, i = {}, Object.keys(n).forEach(function (e) {
                                            i[Ce(e)] = n[e];
                                        }), {
                                            _type: 'publish_related_stats',
                                            options: i
                                        }), null, null) : N(function (e) {
                                            var t = {};
                                            return Object.keys(e).forEach(function (n) {
                                                t[Ce(n)] = e[n];
                                            }), {
                                                _type: 'publish_related_stats_low',
                                                options: t
                                            };
                                        }(t), null, null);
                                    });
                                };
                                p(), y.timers[e.getId() + '_RelatedStats'] = setInterval(p, 1000);
                            }
                        }
                    }, y.unpublish = function (e, t, n, i) {
                        return 'object' !== v()(e) || null === e ? (o.default.error('['.concat(y.clientId, '] Invalid local stream')), void E(i, A.INVALID_LOCAL_STREAM)) : y.state !== S ? (o.default.error('['.concat(y.clientId, '] User not in the session')), void E(i, A.INVALID_OPERATION)) : (null != y.timers[e.getId()] && (clearInterval(y.timers[e.getId()]), clearInterval(y.timers[e.getId() + '_RelatedStats'])), void (void 0 !== y.socket ? e.local && void 0 !== y.localStreams[e.getId()] ? (delete y.localStreams[e.getId()], N((a = e.getUserId(), r = t.streamType, {
                            _type: 'unpublish',
                            message: a,
                            streamType: r
                        })), (e.hasAudio() || e.hasVideo() || e.hasScreen()) && void 0 === e.url && void 0 !== e.pc && (e.pc.close(), e.pc = void 0), e.onClose = void 0, e._onAudioMute = void 0, e._onAudioUnute = void 0, e._onVideoMute = void 0, e._onVideoUnmute = void 0, y.p2ps.delete(e.p2pId), n && n()) : (o.default.error('['.concat(y.clientId, '] Invalid local stream')), E(i, A.INVALID_LOCAL_STREAM)) : (o.default.error('['.concat(y.clientId, '] User not in the session')), E(i, A.INVALID_OPERATION))));
                        var a, r;
                    }, y.subscribe = function (e, t, n) {
                        var i = new Date().getTime();
                        e.subscribeLTS = i;
                        var r = !1;
                        if (o.default.info('['.concat(y.clientId, '] Gatewayclient ').concat(y.uid, ' Subscribe ').concat(e.getId(), ': ').concat(JSON.stringify(e.subscribeOptions))), 'object' !== v()(e) || null === e)
                            return o.default.error('['.concat(y.clientId, '] Invalid remote stream')), n && n(A.INVALID_REMOTE_STREAM), void a.b.subscribe(y.joinInfo.sid, {
                                lts: i,
                                succ: !1,
                                video: e.subscribeOptions && e.subscribeOptions.video,
                                audio: e.subscribeOptions && e.subscribeOptions.audio,
                                peerid: e.getId(),
                                ec: A.INVALID_REMOTE_STREAM
                            });
                        if (y.state !== S && (o.default.error('['.concat(y.clientId, '] User is not in the session')), !r))
                            return r = !0, a.b.subscribe(y.joinInfo.sid, {
                                lts: i,
                                succ: !1,
                                video: e.subscribeOptions && e.subscribeOptions.video,
                                audio: e.subscribeOptions && e.subscribeOptions.audio,
                                peerid: e.getId(),
                                ec: A.INVALID_OPERATION
                            }), n && n(A.INVALID_OPERATION);
                        if (!e.local && y.remoteStreams.hasOwnProperty(e.getId()))
                            if (e.hasAudio() || e.hasVideo() || e.hasScreen()) {
                                var l = y.generateP2PId();
                                y.p2ps.set(l, e), e.p2pId = l, e.pc = W({
                                    callback: function (t) {
                                        o.default.debug('['.concat(y.clientId, '] SDP exchange in subscribe : send offer --  '), JSON.parse(t));
                                        var r, s = I()({
                                                streamId: e.getId(),
                                                video: !0,
                                                audio: !0,
                                                mode: y.mode,
                                                codec: y.codec,
                                                p2pid: l,
                                                turnip: y.joinInfo.turnServer.url,
                                                turnport: Number(y.joinInfo.turnServer.udpport),
                                                turnusername: y.joinInfo.turnServer.username,
                                                turnpassword: y.joinInfo.turnServer.credential
                                            }, e.subscribeOptions);
                                        w({
                                            _type: 'subscribe',
                                            options: s,
                                            sdp: t,
                                            p2pid: r
                                        }, function (t) {
                                            if ('error' === t)
                                                return o.default.error('['.concat(y.clientId, '] Subscribe remote stream failed, closing stream '), e.getId()), e.close(), n && n(A.SUBSCRIBE_STREAM_FAILED), void a.b.subscribe(y.joinInfo.sid, {
                                                    lts: i,
                                                    succ: !1,
                                                    video: e.subscribeOptions && e.subscribeOptions.video,
                                                    audio: e.subscribeOptions && e.subscribeOptions.audio,
                                                    peerid: e.getId(),
                                                    ec: A.SUBSCRIBE_STREAM_FAILED
                                                });
                                            o.default.debug('['.concat(y.clientId, '] SDP exchange in subscribe : receive answer --  '), JSON.parse(t)), e.pc.processSignalingMessage(t);
                                        });
                                    },
                                    nop2p: !0,
                                    audio: !0,
                                    video: !0,
                                    screen: e.hasScreen(),
                                    isSubscriber: !0,
                                    stunServerUrl: y.stunServerUrl,
                                    turnServer: y.joinInfo.turnServer,
                                    isVideoMute: e.userMuteVideo,
                                    isAudioMute: e.userMuteAudio,
                                    uid: e.getId(),
                                    clientId: y.clientId
                                }), e.pc.onaddstream = function (t, n) {
                                    if (e._onAudioUnmute = function () {
                                            N(s({
                                                action: 'audio-in-on',
                                                streamId: e.getId()
                                            }), function () {
                                            }, function () {
                                            });
                                        }, e._onAudioMute = function () {
                                            N(s({
                                                action: 'audio-in-off',
                                                streamId: e.getId()
                                            }), function () {
                                            }, function () {
                                            });
                                        }, e._onVideoUnmute = function () {
                                            N(s({
                                                action: 'video-in-on',
                                                streamId: e.getId()
                                            }), function () {
                                            }, function () {
                                            });
                                        }, e._onVideoMute = function () {
                                            N(s({
                                                action: 'video-in-off',
                                                streamId: e.getId()
                                            }), function () {
                                            }, function () {
                                            });
                                        }, 'ontrack' === n && 'video' === t.track.kind || 'onaddstream' === n) {
                                        o.default.info('['.concat(y.clientId, '] Remote stream subscribed with uid '), e.getId());
                                        var i = y.remoteStreams[e.getId()];
                                        if (y.remoteStreams[e.getId()].stream = 'onaddstream' === n ? t.stream : t.streams[0], y.remoteStreams[e.getId()].hasVideo()) {
                                            if (Object(p.isFireFox)() || Object(p.isSafari)()) {
                                                var a = y.remoteStreams[e.getId()].stream;
                                                Object(G.h)(a, function (t, n) {
                                                    e.videoWidth = t, e.videoHeight = n;
                                                }, function (e) {
                                                    return o.default.warning('['.concat(y.clientId, '] vsResHack failed: ') + e);
                                                });
                                            }
                                        } else {
                                            var r = y.remoteStreams[e.getId()];
                                            r.peerMuteVideo = !0, y._adjustPCMuteStatus(r);
                                        }
                                        i && i.isPlaying() && i.elementID && (o.default.debug('['.concat(y.clientId, '] Reload Player ').concat(i.elementID, ' StreamId ').concat(i.getId())), e.audioOutput = i.audioOutput, i.stop(), e.play(i.elementID, i.playOptions));
                                        var c = d({
                                            type: 'stream-subscribed',
                                            stream: y.remoteStreams[e.getId()]
                                        });
                                        y.dispatchEvent(c);
                                    }
                                }, y.timers[e.getId()] = setInterval(function () {
                                    var t = 0;
                                    e && e.pc && e.pc.getStats && e.pc.getStatsRate(function (n) {
                                        n.forEach(function (n) {
                                            if (n && n.id) {
                                                if (/_send$/.test(n.id) || /^time$/.test(n.id) || /^bweforvideo$/.test(n.id))
                                                    return;
                                                -1 === n.id.indexOf('inbound_rtp') && -1 === n.id.indexOf('inbound-rtp') || 'video' !== n.mediaType || (n.googFrameWidthReceived = e.videoWidth + '', n.googFrameHeightReceived = e.videoHeight + '');
                                                var i = 200 * t;
                                                t++;
                                                var o = e.getId();
                                                setTimeout(function () {
                                                    var e, t, i;
                                                    w((e = o, t = n, i = {}, Object.keys(t).forEach(function (e) {
                                                        i[Ce(e)] = t[e];
                                                    }), {
                                                        _type: 'subscribe_stats',
                                                        options: {
                                                            id: e,
                                                            stats: i
                                                        },
                                                        sdp: null
                                                    }), null, null);
                                                }, i);
                                            } else ;
                                        });
                                    });
                                }, 3000), y.timers[e.getId() + '_RelatedStats'] = setInterval(function () {
                                    e && e.pc && (e.pc.getVideoRelatedStats && e.pc.getVideoRelatedStats(function (e) {
                                        N(u(e), null, null);
                                    }), e.pc.getAudioRelatedStats && e.pc.getAudioRelatedStats(function (e) {
                                        N(u(e), null, null);
                                    }));
                                }, 1000), y.audioLevel[e.getId()] = 0, y.timers[e.getId() + 'audio'] = setInterval(function () {
                                    y.hasListeners('active-speaker') && e && e.pc && 'established' === e.pc.state && e.pc.getStats && e.pc.getStats(function (t) {
                                        t.forEach(function (t) {
                                            if ('audio' === t.mediaType) {
                                                if (t.audioOutputLevel > 5000)
                                                    for (var n in (y.audioLevel[e.getId()] < 20 && (y.audioLevel[e.getId()] += 1), y.audioLevel))
                                                        n !== '' + e.getId() && y.audioLevel[n] > 0 && (y.audioLevel[n] -= 1);
                                                var i = Object.keys(y.audioLevel).sort(function (e, t) {
                                                    return y.audioLevel[t] - y.audioLevel[e];
                                                });
                                                if (y.activeSpeaker !== i[0]) {
                                                    var a = c({
                                                        type: 'active-speaker',
                                                        uid: i[0]
                                                    });
                                                    y.dispatchEvent(a), y.activeSpeaker = i[0], o.default.debug('['.concat(y.clientId, '] Update active speaker: ').concat(y.activeSpeaker));
                                                }
                                            }
                                        });
                                    });
                                }, 50), e.pc.oniceconnectionstatechange = function (s) {
                                    if ('failed' === s)
                                        null != y.timers[e.getId()] && (clearInterval(y.timers[e.getId()]), clearInterval(y.timers[e.getId()] + 'audio')), o.default.error('['.concat(y.clientId, '] Subscriber connection is lost -- streamId: ').concat(e.getId(), ', p2pId: ').concat(l)), o.default.debug('['.concat(y.clientId, '] subscribe p2p failed: '), y.p2ps), r || (r = !0, n && n(A.PEERCONNECTION_FAILED), a.b.subscribe(y.joinInfo.sid, {
                                            lts: i,
                                            succ: !1,
                                            video: e.subscribeOptions && e.subscribeOptions.video,
                                            audio: e.subscribeOptions && e.subscribeOptions.audio,
                                            peerid: e.getId(),
                                            ec: A.PEERCONNECTION_FAILED
                                        })), y.remoteStreams[e.getId()] && y.p2ps.has(l) && (y.p2ps.delete(l), y.dispatchEvent(c({
                                            type: 'subP2PLost',
                                            stream: e
                                        })));
                                    else if ('connected' === s && (o.default.debug('['.concat(y.clientId, '] subscribe p2p connected: '), y.p2ps), !r))
                                        return r = !0, a.b.subscribe(y.joinInfo.sid, {
                                            lts: i,
                                            succ: !0,
                                            video: e.subscribeOptions && e.subscribeOptions.video,
                                            audio: e.subscribeOptions && e.subscribeOptions.audio,
                                            peerid: e.getId(),
                                            ec: null
                                        }), y._adjustPCMuteStatus(e), y.firstAudioDecodeTimer.set(e.getId(), setInterval(function () {
                                            e.pc ? e.pc.getStats(function (t) {
                                                t.forEach(function (t) {
                                                    -1 !== t.id.indexOf('recv') && 'audio' === t.mediaType && parseInt(t.googDecodingNormal) > 0 && (clearInterval(y.firstAudioDecodeTimer.get(e.getId())), y.firstAudioDecodeTimer.delete(e.getId()), a.b.reportApiInvoke(y.joinInfo.sid, { name: 'firstAudioDecode' })(null, { elapse: Date.now() - e.subscribeLTS }));
                                                });
                                            }) : (clearInterval(y.firstAudioDecodeTimer.get(e.getId())), y.firstAudioDecodeTimer.delete(e.getId()));
                                        }, 100)), y.firstFrameTimer.set(e.getId(), setInterval(function () {
                                            e.pc ? e.pc.getStats(function (t) {
                                                t.forEach(function (t) {
                                                    -1 === t.id.indexOf('recv') && -1 === t.id.indexOf('inbound_rtp') && -1 === t.id.indexOf('inbound-rtp') && -1 === t.id.indexOf('InboundRTP') || 'video' === t.mediaType && (t.framesDecoded > 0 || t.googFramesDecoded > 0) && (clearInterval(y.firstFrameTimer.get(e.getId())), y.firstFrameTimer.delete(e.getId()), e.firstFrameTime = new Date().getTime() - e.subscribeLTS, a.b.firstRemoteFrame(y.joinInfo.sid, {
                                                        lts: new Date().getTime(),
                                                        peerid: e.getId(),
                                                        succ: !0,
                                                        width: +t.googFrameWidthReceived,
                                                        height: +t.googFrameHeightReceived
                                                    }));
                                                });
                                            }) : (clearInterval(y.firstFrameTimer.get(e.getId())), y.firstFrameTimer.delete(e.getId()));
                                        }, 100)), e.sid = y.joinInfo.sid, t && t();
                                };
                            } else
                                o.default.error('['.concat(y.clientId, '] Invalid remote stream')), r || (r = !0, n && n(A.INVALID_REMOTE_STREAM), a.b.subscribe(y.joinInfo.sid, {
                                    lts: i,
                                    succ: !1,
                                    video: e.subscribeOptions && e.subscribeOptions.video,
                                    audio: e.subscribeOptions && e.subscribeOptions.audio,
                                    peerid: e.getId(),
                                    ec: A.INVALID_REMOTE_STREAM
                                }));
                        else
                            o.default.error('['.concat(y.clientId, '] No such remote stream')), r || (r = !0, n && n(A.NO_SUCH_REMOTE_STREAM), a.b.subscribe(y.joinInfo.sid, {
                                lts: i,
                                succ: !1,
                                video: e.subscribeOptions && e.subscribeOptions.video,
                                audio: e.subscribeOptions && e.subscribeOptions.audio,
                                peerid: e.getId(),
                                ec: A.NO_SUCH_REMOTE_STREAM
                            }));
                    }, y.subscribeChange = function (e, t, n) {
                        var i, r, s = Date.now();
                        o.default.info('['.concat(y.clientId, '] Gatewayclient ').concat(y.uid, ' SubscribeChange ').concat(e.getId(), ': ').concat(JSON.stringify(e.subscribeOptions))), y._adjustPCMuteStatus(e), N((i = e.getId(), r = e.subscribeOptions, {
                            _type: 'subscribe_change',
                            options: I()({ streamId: i }, r)
                        }), function (i) {
                            if ('error' === i)
                                return o.default.error('['.concat(y.clientId, '] Subscribe Change Failed ').concat(e.getId())), void E(n, 'SUBSCRIBE_CHANGE_FAILED');
                            var r = d({
                                type: 'stream-subscribe-changed',
                                stream: y.remoteStreams[e.getId()]
                            });
                            a.b.subscribe(y.joinInfo.sid, {
                                lts: s,
                                succ: !0,
                                video: e.subscribeOptions && e.subscribeOptions.video,
                                audio: e.subscribeOptions && e.subscribeOptions.audio,
                                peerid: e.getId(),
                                ec: null
                            }), y.dispatchEvent(r), t && t();
                        }, n);
                    }, y._adjustPCMuteStatus = function (e) {
                        !e.local && e.pc && e.pc.peerConnection.getReceivers && e.pc.peerConnection.getReceivers().forEach(function (t) {
                            if (t && t.track && 'audio' === t.track.kind) {
                                var n = !e.userMuteAudio && !e.peerMuteAudio;
                                e.subscribeOptions && !e.subscribeOptions.audio && (n = !1), t.track.enabled = !!n;
                            } else if (t && t.track && 'video' === t.track.kind) {
                                var i = !e.userMuteVideo && !e.peerMuteVideo;
                                e.subscribeOptions && !e.subscribeOptions.video && (i = !1), t.track.enabled = !!i;
                            }
                        });
                    }, y.unsubscribe = function (e, t, n) {
                        if ('object' !== v()(e) || null === e)
                            return o.default.error('['.concat(y.clientId, '] Invalid remote stream')), void E(n, A.INVALID_REMOTE_STREAM);
                        if (y.state !== S)
                            return o.default.error('['.concat(y.clientId, '] User is not in the session')), void E(n, A.INVALID_OPERATION);
                        if (null != y.timers[e.getId()] && (clearInterval(y.timers[e.getId()]), clearInterval(y.timers[e.getId()] + 'audio')), null != y.audioLevel[e.getId()] && delete y.audioLevel[e.getId()], null != y.timer_counter[e.getId()] && delete y.timer_counter[e.getId()], y.remoteStreams.hasOwnProperty(e.getId())) {
                            if (!y.socket)
                                return o.default.error('['.concat(y.clientId, '] User is not in the session')), void E(n, A.INVALID_OPERATION);
                            if (e.local)
                                return o.default.error('['.concat(y.clientId, '] Invalid remote stream')), void E(n, A.INVALID_REMOTE_STREAM);
                            e.close(), N({
                                _type: 'unsubscribe',
                                message: e.getId()
                            }, function (i) {
                                if ('error' === i)
                                    return o.default.error('['.concat(y.clientId, '] Unsubscribe remote stream failed ').concat(e.getId())), void E(n, A.UNSUBSCRIBE_STREAM_FAILED);
                                void 0 !== e.pc && (e.pc.close(), e.pc = void 0), e.onClose = void 0, e._onAudioMute = void 0, e._onAudioUnute = void 0, e._onVideoMute = void 0, e._onVideoUnmute = void 0, delete e.subscribeOptions, y.p2ps.delete(e.p2pId), o.default.info('['.concat(y.clientId, '] Unsubscribe stream success')), t && t();
                            }, n);
                        } else
                            E(n, A.NO_SUCH_REMOTE_STREAM);
                    }, y.setRemoteVideoStreamType = function (e, t) {
                        if (o.default.debug('['.concat(y.clientId, '] Switching remote video stream ').concat(e.getId(), ' to ').concat(t)), 'object' === v()(e) && null !== e)
                            if (y.state === S) {
                                if (!e.local) {
                                    switch (t) {
                                    case y.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_HIGH:
                                    case y.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_LOW:
                                    case y.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_MEDIUM:
                                        break;
                                    default:
                                        return;
                                    }
                                    N(function (e, t) {
                                        return {
                                            _type: 'switchVideoStream',
                                            message: {
                                                id: e,
                                                type: t
                                            }
                                        };
                                    }(e.getId(), t), null, null);
                                }
                            } else
                                o.default.error('['.concat(y.clientId, '] User is not in the session'));
                        else
                            o.default.error('['.concat(y.clientId, '] Invalid remote stream'));
                    }, y.renewToken = function (e, t, n) {
                        e ? y.key ? y.state !== S ? (o.default.debug('['.concat(y.clientId, '] Client is not connected. Trying to rejoin')), y.key = e, y.rejoin(), t && t()) : (o.default.debug('['.concat(y.clientId, '] renewToken from ').concat(y.key, ' to ').concat(e)), N(function (e) {
                            return {
                                _type: 'renew_token',
                                message: { token: e }
                            };
                        }(e), t, n)) : (o.default.error('['.concat(y.clientId, '] Client is previously joined without token')), n && n(A.INVALID_PARAMETER)) : (o.default.error('['.concat(y.clientId, '] Invalid Token ').concat(e)), n && n(A.INVALID_PARAMETER));
                    }, y.setStreamFallbackOption = function (e, t) {
                        if (o.default.debug('['.concat(y.clientId, '] Set stream fallback option ').concat(e.getId(), ' to ').concat(t)), 'object' === v()(e) && null !== e)
                            if (y.state === S) {
                                if (!e.local) {
                                    switch (t) {
                                    case y.streamFallbackTypes.STREAM_FALLBACK_OPTION_DISABLED:
                                    case y.streamFallbackTypes.STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW:
                                    case y.streamFallbackTypes.STREAM_FALLBACK_OPTION_AUDIO_ONLY:
                                        break;
                                    default:
                                        return;
                                    }
                                    N(function (e, t) {
                                        return {
                                            _type: 'setFallbackOption',
                                            message: {
                                                id: e,
                                                type: t
                                            }
                                        };
                                    }(e.getId(), t), null, null);
                                }
                            } else
                                o.default.error('['.concat(y.clientId, '] User is not in the session'));
                        else
                            o.default.error('['.concat(y.clientId, '] Invalid remote stream'));
                    }, y.startLiveStreaming = function (e, t) {
                        y.liveStreams.set(e, t), o.default.debug('['.concat(y.clientId, '] Start live streaming ').concat(e, ' ').concat(t, ' ').concat(t)), y.state === S ? N(function (e, t) {
                            return {
                                _type: 'start_live_streaming',
                                message: {
                                    url: e,
                                    transcodingEnabled: t
                                }
                            };
                        }(e, t), null, null) : o.default.error('['.concat(y.clientId, '] User is not in the session'));
                    }, y.stopLiveStreaming = function (e) {
                        o.default.debug('['.concat(y.clientId, '] Stop live streaming ').concat(e)), y.state === S ? (y.liveStreams.delete(e), N(function (e) {
                            return {
                                _type: 'stop_live_streaming',
                                message: { url: e }
                            };
                        }(e), null, null)) : o.default.error('['.concat(y.clientId, '] User is not in the session'));
                    }, y.setLiveTranscoding = function (e) {
                        Object(G.d)(e) && (y.transcoding = e, o.default.debug('['.concat(y.clientId, '] Set live transcoding '), e), y.state === S ? N(function (e) {
                            return {
                                _type: 'set_live_transcoding',
                                message: { transcoding: e }
                            };
                        }(e), null, null) : o.default.error('['.concat(y.clientId, '] User is not in the session')));
                    }, y.addInjectStreamUrl = function (e, t) {
                        y.injectLiveStreams.set(e, t), o.default.debug('['.concat(y.clientId, '] Add inject stream url ').concat(e, ' config '), t), y.state === S ? N(function (e, t) {
                            return {
                                _type: 'add_inject_stream_url',
                                message: {
                                    url: e,
                                    config: t
                                }
                            };
                        }(e, t), null, null) : o.default.error('['.concat(y.clientId, '] User is not in the session'));
                    }, y.removeInjectStreamUrl = function (e) {
                        o.default.debug('['.concat(y.clientId, '] Remove inject stream url ').concat(e)), y.state === S ? (y.injectLiveStreams.delete(e), N(function (e) {
                            return {
                                _type: 'remove_inject_stream_url',
                                message: { url: e }
                            };
                        }(e), null, null)) : o.default.error('['.concat(y.clientId, '] User is not in the session'));
                    }, y.enableAudioVolumeIndicator = function (e, t) {
                        y.audioVolumeIndication.enabled = !0, y.audioVolumeIndication.interval = e, y.audioVolumeIndication.smooth = t, y.resetAudioVolumeIndication();
                    }, y.resetAudioVolumeIndication = function () {
                        if (clearInterval(y.timers.audioVolumeIndication), clearInterval(y.timers.audioVolumeSampling), y.audioVolumeIndication.enabled && y.audioVolumeIndication.interval) {
                            var e = Math.floor(1000 * y.audioVolumeIndication.smooth / 100);
                            y.timers.audioVolumeSampling = setInterval(function () {
                                y.audioVolumeSampling || (y.audioVolumeSampling = {});
                                var t = {};
                                for (var n in y.remoteStreams) {
                                    var i = y.remoteStreams[n];
                                    if (i.stream && i.hasAudio()) {
                                        var o = i.getAudioLevel();
                                        o > 0 && o < 1 && (o *= 100);
                                        var a = y.audioVolumeSampling[n] || [];
                                        for (a.push(o); a.length > e;)
                                            a.shift();
                                        t[n] = a;
                                    }
                                }
                                y.audioVolumeSampling = t;
                            }, 100), y.timers.audioVolumeIndication = setInterval(function () {
                                var e = [];
                                for (var t in y.remoteStreams)
                                    if (y.audioVolumeSampling && y.audioVolumeSampling[t]) {
                                        var n = y.audioVolumeSampling[t], i = 0;
                                        n.forEach(function (e) {
                                            i += e;
                                        });
                                        var a = {
                                            uid: t,
                                            level: Math.floor(i / n.length)
                                        };
                                        a.level && e.push(a);
                                    }
                                var r = e.sort(function (e, t) {
                                    return e.level - t.level;
                                });
                                o.default.debug('['.concat(y.clientId, '] volume-indicator '), JSON.stringify(r)), y.audioVolumeIndication.sortedAudioVolumes = r;
                                var s = c({
                                    type: 'volume-indicator',
                                    attr: r
                                });
                                y.dispatchEvent(s);
                            }, y.audioVolumeIndication.interval);
                        }
                    }, y.closeGateway = function () {
                        o.default.debug('['.concat(y.clientId, '] close gateway')), y.state = m, y.socket.close(), T();
                    };
                    var T = function () {
                        for (var e in y.timers)
                            y.timers.hasOwnProperty(e) && clearInterval(y.timers[e]);
                        for (var e in y.remoteStreams)
                            if (y.remoteStreams.hasOwnProperty(e)) {
                                var t = y.remoteStreams[e], n = c({
                                        type: 'stream-removed',
                                        uid: t.getId(),
                                        stream: t
                                    });
                                y.dispatchEvent(n);
                            }
                        y.p2ps.clear(), k(), D(), clearInterval(y.pingTimer);
                    };
                    y.rejoin = function () {
                        y.socket && (clearInterval(y.pingTimer), y.socket.close(), y.socket = void 0), y.state = g, O();
                    };
                    var O = function (e, t) {
                            y.dispatchEvent(c({ type: 'rejoin-start' })), e = e || function (e) {
                                o.default.info('['.concat(y.clientId, '] User ').concat(e, ' is re-joined to ').concat(y.joinInfo.cname)), y.dispatchEvent(c({ type: 'rejoin' })), y.liveStreams && y.liveStreams.size && y.liveStreams.forEach(function (e, t) {
                                    e && y.setLiveTranscoding(y.transcoding), y.startLiveStreaming(t, e);
                                }), y.injectLiveStreams && y.injectLiveStreams.size && y.injectLiveStreams.forEach(function (e, t) {
                                    y.addInjectStreamUrl(t, e);
                                });
                            }, t = t || function (e) {
                                o.default.error('['.concat(y.clientId, '] Re-join to channel failed '), e), y.dispatchEvent(d({
                                    type: 'error',
                                    reason: e
                                }));
                            }, y.key ? (++y.rejoinAttempt, y.join(y.joinInfo, y.key, e, t)) : o.default.error('['.concat(y.clientId, '] Connection recover failed [Invalid channel key]'));
                        }, C = function (e, t, i) {
                            var r;
                            y.onConnect = t, void 0 !== y.socket ? (y.dispatchEvent({ type: 'reconnect' }), 'retry' === y.reconnectMode ? (o.default.debug('['.concat(y.clientId, '] Retry current gateway')), y.socket.reconnect()) : 'tryNext' === y.reconnectMode ? (o.default.debug('['.concat(y.clientId, '] Try next gateway')), y.socket.connectNext()) : 'recover' === y.reconnectMode && (o.default.debug('['.concat(y.clientId, '] Recover gateway')), o.default.debug('['.concat(y.clientId, '] Try to reconnect choose server and get gateway list again ')), be(y.joinInfo, function (e) {
                                y.socket.replaceHost(e.gateway_addr);
                            }))) : (r = e.gatewayAddr, y.socket = ge(r, {
                                sid: y.joinInfo.sid,
                                clientId: y.clientId
                            }), y.socket.on('onUplinkStats', function (e) {
                                y.OutgoingAvailableBandwidth = e.uplink_available_bandwidth, y.localStreams[y.uid] && (y.localStreams[y.uid].uplinkStats = e);
                            }), y.socket.on('connect', function () {
                                y.dispatchEvent({ type: 'connected' }), y.attemps = 1, N(function (e) {
                                    var t = e;
                                    return e.uni_lbs_ip && (t = I()(e, {
                                        wanip: e.uni_lbs_ip,
                                        hasChange: y.hasChangeBGPAddress
                                    })), {
                                        _type: 'token',
                                        message: t
                                    };
                                }(e), y.onConnect, i);
                            }), y.socket.on('recover', function () {
                                y.state = g, o.default.debug('['.concat(y.clientId, '] Try to reconnect choose server and get gateway list again ')), be(y.joinInfo, function (e) {
                                    y.socket.replaceHost(e.gateway_addr);
                                });
                            }), y.socket.on('disconnect', function (e) {
                                if (y.state !== m) {
                                    y.state = m;
                                    var t = d({
                                        type: 'error',
                                        reason: A.SOCKET_DISCONNECTED
                                    });
                                    if (y.dispatchEvent(t), 0 === y.p2ps.size ? y.reconnectMode = 'tryNext' : y.reconnectMode = 'retry', T(), 1 != n) {
                                        var i, a = (i = y.attemps, 1000 * Math.min(30, Math.pow(2, i) - 1));
                                        o.default.error('['.concat(y.clientId, '] Disconnect from server [').concat(e, '], attempt to recover [#').concat(y.attemps, '] after ').concat(a / 1000, ' seconds'));
                                        setTimeout(function () {
                                            y.attemps++, y.state = g, O();
                                        }, a);
                                    }
                                }
                            }), y.socket.on('onAddAudioStream', function (e) {
                                if (o.default.info('['.concat(y.clientId, '] Newly added audio stream with uid ').concat(e.id)), y.remoteStreamsInChannel.has(e.id) || y.remoteStreamsInChannel.add(e.id), void 0 === y.remoteStreams[e.id]) {
                                    var t = se({
                                        streamID: e.id,
                                        local: !1,
                                        audio: e.audio,
                                        video: e.video,
                                        screen: e.screen,
                                        attributes: e.attributes
                                    });
                                    y.remoteStreams[e.id] = t;
                                    var n = d({
                                        type: 'stream-added',
                                        stream: t
                                    });
                                    y.dispatchEvent(n);
                                }
                            }), y.socket.on('onUpdateStream', function (e) {
                                var t = y.remoteStreams[e.id];
                                if (t) {
                                    delete e.id, t.audio = e.audio, t.video = e.video, t.screen = e.screen, t.pc && y._adjustPCMuteStatus(t);
                                    var n = d({
                                        type: 'stream-updated',
                                        stream: t
                                    });
                                    y.dispatchEvent(n);
                                } else
                                    o.default.debug('['.concat(y.clientId, '] Ignoring onUpdateStream event before onAddStream for uid ').concat(e.id));
                            }), y.socket.on('onAddVideoStream', function (e) {
                                if (o.default.info('['.concat(y.clientId, '] Newly added remote stream with uid ').concat(e.id, '.')), y.remoteStreamsInChannel.has(e.id) || y.remoteStreamsInChannel.add(e.id), void 0 === y.remoteStreams[e.id]) {
                                    var t = se({
                                        streamID: e.id,
                                        local: !1,
                                        audio: e.audio,
                                        video: e.video,
                                        screen: e.screen,
                                        attributes: e.attributes
                                    });
                                    y.remoteStreams[e.id] = t;
                                    var n = d({
                                        type: 'stream-added',
                                        stream: t
                                    });
                                    y.dispatchEvent(n);
                                } else {
                                    var i = y.remoteStreams[e.id];
                                    if (void 0 !== i.stream) {
                                        if ((t = y.remoteStreams[e.id]).video = !0, t._unmuteVideo(), o.default.info('['.concat(y.clientId, '] Stream changed: enable video ').concat(e.id)), t.isPlaying()) {
                                            var a = t.player.elementID;
                                            t.stop(), t.play(a);
                                        }
                                    } else if (i.p2pId)
                                        y.remoteStreams[e.id].video = !0;
                                    else {
                                        t = se({
                                            streamID: e.id,
                                            local: !1,
                                            audio: !0,
                                            video: !0,
                                            screen: !1,
                                            attributes: e.attributes
                                        });
                                        y.remoteStreams[e.id] = t, o.default.info('['.concat(y.clientId, '] Stream changed: modify video ').concat(e.id));
                                    }
                                }
                            }), y.socket.on('onRemoveStream', function (e) {
                                y.remoteStreamsInChannel.has(e.id) && y.remoteStreamsInChannel.delete(e.id);
                                var t = y.remoteStreams[e.id];
                                if (t) {
                                    delete y.remoteStreams[e.id];
                                    var n = d({
                                        type: 'stream-removed',
                                        stream: t
                                    });
                                    y.dispatchEvent(n), t.close(), void 0 !== t.pc && (t.pc.close(), t.pc = void 0, y.p2ps.delete(t.p2pId));
                                } else
                                    console.log('ERROR stream ', e.id, ' not found onRemoveStream ', e);
                            }), y.socket.on('onPublishStream', function (e) {
                                var t = y.localStreams[e.id], n = d({
                                        type: 'streamPublished',
                                        stream: t
                                    });
                                y.dispatchEvent(n);
                            }), y.socket.on('mute_audio', function (e) {
                                o.default.info('['.concat(y.clientId, '] rcv peer mute audio: ').concat(e.peerid));
                                var t = c({
                                        type: 'mute-audio',
                                        uid: e.peerid
                                    }), n = y.remoteStreams[e.peerid];
                                n && (n.peerMuteAudio = !0), n.pc && y._adjustPCMuteStatus(n), y.dispatchEvent(t);
                            }), y.socket.on('unmute_audio', function (e) {
                                o.default.info('['.concat(y.clientId, '] rcv peer unmute audio: ').concat(e.peerid));
                                var t = c({
                                        type: 'unmute-audio',
                                        uid: e.peerid
                                    }), n = y.remoteStreams[e.peerid];
                                n && (n.peerMuteAudio = !1), n.pc && y._adjustPCMuteStatus(n), y.dispatchEvent(t);
                            }), y.socket.on('mute_video', function (e) {
                                o.default.info('['.concat(y.clientId, '] rcv peer mute video: ').concat(e.peerid));
                                var t = c({
                                        type: 'mute-video',
                                        uid: e.peerid
                                    }), n = y.remoteStreams[e.peerid];
                                n && (n.peerMuteVideo = !0), n.pc && y._adjustPCMuteStatus(n), y.dispatchEvent(t);
                            }), y.socket.on('unmute_video', function (e) {
                                o.default.info('['.concat(y.clientId, '] rcv peer unmute video: ').concat(e.peerid));
                                var t = c({
                                        type: 'unmute-video',
                                        uid: e.peerid
                                    }), n = y.remoteStreams[e.peerid];
                                n && (n.peerMuteVideo = !1), n.pc && y._adjustPCMuteStatus(n), y.dispatchEvent(t);
                            }), y.socket.on('user_banned', function (e) {
                                o.default.info('['.concat(y.clientId, '] user banned uid: ').concat(e.id, ' error: ').concat(e.errcode));
                                var t = c({
                                    type: 'client-banned',
                                    uid: e.id,
                                    attr: e.errcode
                                });
                                y.dispatchEvent(t), n = !0, leave();
                            }), y.socket.on('stream_fallback', function (e) {
                                o.default.info('['.concat(y.clientId, '] stream fallback uid: ').concat(e.id, ' peerId: ').concat(e.peerid, ' type: ').concat(e.type));
                                var t = c({
                                    type: 'stream-fallback',
                                    uid: e.id,
                                    stream: e.peerid,
                                    attr: e.type
                                });
                                y.dispatchEvent(t);
                            }), y.socket.on('stream_recover', function (e) {
                                o.default.info('['.concat(y.clientId, '] stream recover uid: ').concat(e.id, ' peerId: ').concat(e.peerid, ' type: ').concat(e.type));
                                var t = c({
                                    type: 'stream-recover',
                                    uid: e.id,
                                    stream: e.peerid,
                                    attr: e.type
                                });
                                y.dispatchEvent(t);
                            }), y.socket.on('onP2PLost', function (e) {
                                if (o.default.debug('['.concat(y.clientId, '] p2plost: '), e, 'p2ps:', y.p2ps), 'publish' === e.event) {
                                    var t = y.localStreams[e.uid];
                                    t && a.b.publish(y.joinInfo.sid, {
                                        lts: t.publishLTS,
                                        succ: !1,
                                        audioName: t.hasAudio() && t.audioName,
                                        videoName: t.hasVideo() && t.videoName,
                                        screenName: t.hasScreen() && t.screenName,
                                        ec: 'DTLS failed'
                                    });
                                }
                                if ('subscribe' === e.event) {
                                    var n = y.remoteStreams[e.uid];
                                    n && a.b.subscribe(y.joinInfo.sid, {
                                        lts: n.subscribeLTS,
                                        succ: !1,
                                        video: n.subscribeOptions && n.subscribeOptions.video,
                                        audio: n.subscribeOptions && n.subscribeOptions.audio,
                                        peerid: e.uid + '',
                                        ec: 'DTLS failed'
                                    });
                                }
                                o.default.debug('['.concat(y.clientId, '] p2plost:'), e.p2pid);
                                var i = y.p2ps.get(e.p2pid);
                                i && (y.p2ps.delete(e.p2pid), i.local ? y.dispatchEvent(c({
                                    type: 'pubP2PLost',
                                    stream: i
                                })) : y.remoteStreams[i.getId()] && y.dispatchEvent(c({
                                    type: 'subP2PLost',
                                    stream: i
                                })));
                            }), y.socket.on('onTokenPrivilegeWillExpire', function (e) {
                                o.default.debug('['.concat(y.clientId, '] Received Message onTokenPrivilegeWillExpire')), y.dispatchEvent(c({ type: 'onTokenPrivilegeWillExpire' }));
                            }), y.socket.on('onTokenPrivilegeDidExpire', function () {
                                o.default.warning('['.concat(y.clientId, '] Received Message onTokenPrivilegeDidExpire, please get new token and join again')), y.closeGateway(), y.dispatchEvent(c({ type: 'onTokenPrivilegeDidExpire' }));
                            }), y._doWithAction = function (e, t, n) {
                                'tryNext' === e ? function (e, t) {
                                    o.default.debug('['.concat(y.clientId, '] Connect next gateway')), y.state = m, y.socket.close(), T(), y.reconnectMode = 'tryNext', O(e, t);
                                }(t, n) : 'retry' === e ? function (e, t) {
                                    o.default.debug('['.concat(y.clientId, '] Reconnect gateway')), y.state = m, y.socket.close(), T(), y.reconnectMode = 'retry', O(e, t);
                                }(t, n) : 'quit' === e ? (o.default.debug('['.concat(y.clientId, '] quit gateway')), y.state = m, y.socket.close(), T()) : 'recover' === e && (o.default.debug('['.concat(y.clientId, '] Reconnect gateway')), y.state = m, y.socket.close(), T(), y.reconnectMode = 'recover', O());
                            }, y.socket.on('notification', function (e) {
                                if (o.default.debug('['.concat(y.clientId, '] Receive notification: '), e), 'ERR_JOIN_BY_MULTI_IP' === b[e.code])
                                    return y.dispatchEvent({
                                        type: 'onMultiIP',
                                        arg: e
                                    });
                                e.detail ? y._doWithAction(Ee[b[e.code]]) : e.action && y._doWithAction(e.action);
                            }), y.socket.on('onPeerLeave', function (e) {
                                var t = c({
                                    type: 'peer-leave',
                                    uid: e.id
                                });
                                if (y.remoteStreamsInChannel.has(e.id) && y.remoteStreamsInChannel.delete(e.id), y.remoteStreams.hasOwnProperty(e.id) && (t.stream = y.remoteStreams[e.id]), y.dispatchEvent(t), y.remoteStreams.hasOwnProperty(e.id)) {
                                    o.default.info('['.concat(y.clientId, '] closing stream on peer leave'), e.id);
                                    var n = y.remoteStreams[e.id];
                                    n.close(), delete y.remoteStreams[e.id], void 0 !== n.pc && (n.pc.close(), n.pc = void 0, y.p2ps.delete(n.p2pId));
                                }
                                y.timers.hasOwnProperty(e.id) && (clearInterval(y.timers[e.id]), clearInterval(y.timers[e.id] + '_RelatedStats'), delete y.timers[e.id]), null != y.audioLevel[e.id] && delete y.audioLevel[e.id], null != y.timer_counter[e.id] && delete y.timer_counter[e.id];
                            }), y.socket.on('onUplinkStats', function (e) {
                            }), y.socket.on('liveStreamingStarted', function (e) {
                                var t = l({
                                    type: 'liveStreamingStarted',
                                    url: e.url
                                });
                                y.dispatchEvent(t);
                            }), y.socket.on('liveStreamingFailed', function (e) {
                                var t = l({
                                    type: 'liveStreamingFailed',
                                    url: e.url
                                });
                                y.dispatchEvent(t);
                            }), y.socket.on('liveStreamingStopped', function (e) {
                                var t = l({
                                    type: 'liveStreamingStopped',
                                    url: e.url
                                });
                                y.dispatchEvent(t);
                            }), y.socket.on('liveTranscodingUpdated', function (e) {
                                var t = l({
                                    type: 'liveTranscodingUpdated',
                                    reason: e.reason
                                });
                                y.dispatchEvent(t);
                            }), y.socket.on('streamInjectedStatus', function (e) {
                                var t = l({
                                    type: 'streamInjectedStatus',
                                    url: e.url,
                                    uid: e.uid,
                                    status: e.status
                                });
                                y.dispatchEvent(t);
                            }), y.socket.on('onUserOnline', function (e) {
                                y.dispatchEvent({
                                    type: 'peer-online',
                                    uid: e.id
                                });
                            }));
                        }, N = function (e, t, n) {
                            if (void 0 === y.socket)
                                return o.default.error('['.concat(y.clientId, '] No socket available')), void E(n, A.INVALID_OPERATION);
                            try {
                                y.socket.emitSimpleMessage(e, function (e, i) {
                                    'success' === e ? 'function' == typeof t && t(i) : 'function' == typeof n && n(b[i] || i);
                                });
                            } catch (t) {
                                o.default.error('['.concat(y.clientId, '] Socket emit message failed ').concat(JSON.stringify(e))), o.default.error('['.concat(y.clientId, '] '), t), E(n, A.SOCKET_ERROR);
                            }
                        }, w = function (e, t) {
                            if (void 0 !== y.socket)
                                try {
                                    y.socket.emitSimpleMessage(e, function (e, n) {
                                        t && t(e, n);
                                    });
                                } catch (e) {
                                    o.default.error('['.concat(y.clientId, '] Error in sendSimpleSdp [').concat(e, ']'));
                                }
                            else
                                o.default.error('['.concat(y.clientId, '] Error in sendSimpleSdp [socket not ready]'));
                        }, D = function () {
                            for (var e in y.localStreams)
                                if (void 0 !== y.localStreams[e]) {
                                    var t = y.localStreams[e];
                                    delete y.localStreams[e], void 0 !== t.pc && (t.pc.close(), t.pc = void 0);
                                }
                        }, k = function () {
                            for (var e in (y.remoteStreamsInChannel.clear(), y.remoteStreams))
                                if (y.remoteStreams.hasOwnProperty(e)) {
                                    var t = y.remoteStreams[e];
                                    t.isPlaying() && t.stop(), t.close(), delete y.remoteStreams[e], void 0 !== t.pc && (t.pc.close(), t.pc = void 0);
                                }
                        };
                    return y;
                }, we = {
                    _gatewayClients: {},
                    register: function (e, t) {
                        if (!t.uid) {
                            var n = 'NO_UID_PROVIDED';
                            return o.default.error('['.concat(e.clientId, '] '), n, t), n;
                        }
                        if (t.cname) {
                            if (this._gatewayClients[t.cname] && this._gatewayClients[t.cname][t.uid] && this._gatewayClients[t.cname][t.uid] !== e) {
                                n = 'UID_CONFLICT';
                                return o.default.error('['.concat(e.clientId, '] '), n, t), n;
                            }
                            return o.default.debug('['.concat(e.clientId, '] register client Channel'), t.cname, 'Uid', t.uid), this._gatewayClients[t.cname] || (this._gatewayClients[t.cname] = {}), this._gatewayClients[t.cname][t.uid] = e, null;
                        }
                        var n = 'NO_CHANNEL_PROVIDED';
                        return o.default.error('['.concat(e.clientId, '] '), n, t), n;
                    },
                    unregister: function (e) {
                        var t = e && e.uid, n = e.joinInfo && e.joinInfo.cname;
                        if (!t || !n) {
                            var i = 'INVALID_GATEWAYCLIENT';
                            return o.default.error('['.concat(e.clientId, '] '), i), i;
                        }
                        if (this._gatewayClients[n] && this._gatewayClients[n][t]) {
                            if (this._gatewayClients[n][t] !== e) {
                                i = 'GATEWAYCLIENT_UID_CONFLICT';
                                return o.default.error('['.concat(e.clientId, '] '), i), i;
                            }
                            return o.default.debug('['.concat(e.clientId, '] unregister client '), e.uid), delete this._gatewayClients[n][t], null;
                        }
                        var i = 'GATEWEAY_CLIENT_UNREGISTERED';
                        o.default.error('['.concat(e.clientId, '] '), i);
                    }
                };
            Ne.DISCONNECTED = 0, Ne.CONNECTING = 1, Ne.CONNECTED = 2, Ne.DISCONNECTING = 3, Ne.connetionStateMap = {
                0: 'DISCONNECTED',
                1: 'CONNECTING',
                2: 'CONNECTED',
                3: 'DISCONNECTING'
            };
            var De = Ne, ke = function (e) {
                    var t;
                    switch (e) {
                    case '120p':
                    case '120p_1':
                        t = [
                            '120p_1',
                            '120p_1',
                            '120p_1'
                        ];
                        break;
                    case '120p_3':
                        t = [
                            '120p_3',
                            '120p_3',
                            '120p_3'
                        ];
                        break;
                    case '180p':
                    case '180p_1':
                        t = [
                            '90p_1',
                            '90p_1',
                            '180p_1'
                        ];
                        break;
                    case '180p_3':
                        t = [
                            '120p_3',
                            '120p_3',
                            '180p_3'
                        ];
                        break;
                    case '180p_4':
                        t = [
                            '120p_1',
                            '120p_1',
                            '180p_4'
                        ];
                        break;
                    case '240p':
                    case '240p_1':
                        t = [
                            '120p_1',
                            '120p_1',
                            '240p_1'
                        ];
                        break;
                    case '240p_3':
                        t = [
                            '120p_3',
                            '120p_3',
                            '240p_3'
                        ];
                        break;
                    case '240p_4':
                        t = [
                            '120p_4',
                            '120p_4',
                            '240p_4'
                        ];
                        break;
                    case '360p':
                    case '360p_1':
                    case '360p_4':
                    case '360p_9':
                    case '360p_10':
                    case '360p_11':
                        t = [
                            '90p_1',
                            '90p_1',
                            '360p_1'
                        ];
                        break;
                    case '360p_3':
                    case '360p_6':
                        t = [
                            '120p_3',
                            '120p_3',
                            '360p_3'
                        ];
                        break;
                    case '360p_7':
                    case '360p_8':
                        t = [
                            '120p_1',
                            '120p_1',
                            '360p_7'
                        ];
                        break;
                    case '480p':
                    case '480p_1':
                    case '480p_2':
                    case '480p_4':
                    case '480p_10':
                        t = [
                            '120p_1',
                            '120p_1',
                            '480p_1'
                        ];
                        break;
                    case '480p_3':
                    case '480p_6':
                        t = [
                            '120p_3',
                            '120p_3',
                            '480p_3'
                        ];
                        break;
                    case '480p_8':
                    case '480p_9':
                        t = [
                            '120p_4',
                            '120p_4',
                            '480p_8'
                        ];
                        break;
                    case '720p':
                    case '720p_1':
                    case '720p_2':
                    case '720p_3':
                        t = [
                            '90p_1',
                            '90p_1',
                            '720p_1'
                        ];
                        break;
                    case '720p_5':
                    case '720p_6':
                        t = [
                            '120p_1',
                            '120p_1',
                            '720p_5'
                        ];
                        break;
                    case '1080p':
                    case '1080p_1':
                    case '1080p_2':
                    case '1080p_3':
                    case '1080p_5':
                        t = [
                            '90p_1',
                            '90p_1',
                            '1080p_1'
                        ];
                        break;
                    case '1440p':
                    case '1440p_1':
                    case '1440p_2':
                        t = [
                            '90p_1',
                            '90p_1',
                            '1440p_1'
                        ];
                        break;
                    case '4k':
                    case '4k_1':
                    case '4k_3':
                        t = [
                            '90p_1',
                            '90p_1',
                            '4k_1'
                        ];
                        break;
                    default:
                        t = [
                            '120p_1',
                            '120p_1',
                            '360p_7'
                        ];
                    }
                    return Object(p.isOpera)() ? [
                        e,
                        15,
                        50
                    ] : Object(p.isFireFox)() ? [
                        t[1],
                        15,
                        100
                    ] : Object(p.isSafari)() ? [
                        t[2],
                        15,
                        50
                    ] : [
                        t[0],
                        15,
                        50
                    ];
                }, Me = {
                    1001: 'FRAMERATE_INPUT_TOO_LOW',
                    1002: 'FRAMERATE_SENT_TOO_LOW',
                    1003: 'SEND_VIDEO_BITRATE_TOO_LOW',
                    1005: 'RECV_VIDEO_DECODE_FAILED',
                    2001: 'AUDIO_INPUT_LEVEL_TOO_LOW',
                    2002: 'AUDIO_OUTPUT_LEVEL_TOO_LOW',
                    2003: 'SEND_AUDIO_BITRATE_TOO_LOW',
                    2005: 'RECV_AUDIO_DECODE_FAILED',
                    3001: 'FRAMERATE_INPUT_TOO_LOW_RECOVER',
                    3002: 'FRAMERATE_SENT_TOO_LOW_RECOVER',
                    3003: 'SEND_VIDEO_BITRATE_TOO_LOW_RECOVER',
                    3005: 'RECV_VIDEO_DECODE_FAILED_RECOVER',
                    4001: 'AUDIO_INPUT_LEVEL_TOO_LOW_RECOVER',
                    4002: 'AUDIO_OUTPUT_LEVEL_TOO_LOW_RECOVER',
                    4003: 'SEND_AUDIO_BITRATE_TOO_LOW_RECOVER',
                    4005: 'RECV_AUDIO_DECODE_FAILED_RECOVER'
                }, Pe = {
                    FramerateInput: 1001,
                    FramerateSent: 1002,
                    SendVideoBitrate: 1003,
                    VideoDecode: 1005,
                    AudioIntputLevel: 2001,
                    AudioOutputLevel: 2002,
                    SendAudioBitrate: 2003,
                    AudioDecode: 2005
                }, Le = function (e) {
                    var t = {
                        remoteStreamStorage: {},
                        localStreamStorage: {}
                    };
                    return t.gatewayClient = e, t.checkAudioOutputLevel = function (e) {
                        return !(e && parseInt(e.audioRecvBytesDelta) > 0 && parseInt(e.audioDecodingNormalDelta) > 0 && 0 === parseInt(e.audioOutputLevel));
                    }, t.checkAudioIntputLevel = function (e) {
                        return !e || 0 !== parseInt(e.audioInputLevel);
                    }, t.checkFramerateInput = function (e, t) {
                        if (!e || !t.attributes)
                            return !0;
                        var n = parseInt(t.attributes.maxFrameRate), i = parseInt(e.googFrameRateInput);
                        return !n || !i || !(n > 10 && i < 5 || n < 10 && n >= 5 && i <= 1);
                    }, t.checkFramerateSent = function (e) {
                        return !(e && parseInt(e.googFrameRateInput) > 5 && parseInt(e.googFrameRateSent) <= 1);
                    }, t.checkSendVideoBitrate = function (e) {
                        return !e || 0 !== parseInt(e.videoSendBytesDelta);
                    }, t.checkSendAudioBitrate = function (e) {
                        return !e || 0 !== parseInt(e.audioSendBytesDelta);
                    }, t.checkVideoDecode = function (e) {
                        return !e || 0 === parseInt(e.videoRecvBytesDelta) || 0 !== parseInt(e.googFrameRateDecoded);
                    }, t.checkAudioDecode = function (e) {
                        return !e || 0 === parseInt(e.audioRecvBytesDelta) || 0 !== parseInt(e.audioDecodingNormalDelta);
                    }, t.record = function (e, n, i, o, a) {
                        i[e] || (i[e] = {
                            isPrevNormal: !0,
                            record: []
                        });
                        var r = i[e], s = t['check' + e](n, a);
                        if (r.record.push(s), r.record.length >= 5) {
                            r.isCurNormal = r.record.includes(!0);
                            var d = Pe[e];
                            r.isPrevNormal && !r.isCurNormal && t.gatewayClient.dispatchEvent({
                                type: 'exception',
                                code: d,
                                msg: Me[d],
                                uid: o
                            }), !r.isPrevNormal && r.isCurNormal && t.gatewayClient.dispatchEvent({
                                type: 'exception',
                                code: d + 2000,
                                msg: Me[d + 2000],
                                uid: o
                            }), r.isPrevNormal = r.isCurNormal, r.record = [];
                        }
                    }, t.setLocalStats = function (e) {
                        var n = {};
                        Object.keys(e).map(function (i) {
                            var o = e[i], a = t.gatewayClient.localStreams[parseInt(i)], r = t.localStreamStorage[i] || {};
                            a && a.hasVideo() && (t.record('SendVideoBitrate', o.videoStats, r, i), t.record('FramerateInput', o.videoStats, r, i, a), t.record('FramerateSent', o.videoStats, r, i)), a && a.hasAudio() && (t.record('AudioIntputLevel', o.audioStats, r, i), t.record('SendAudioBitrate', o.audioStats, r, i)), n[i] = r;
                        }), t.localStreamStorage = n;
                    }, t.setRemoteStats = function (n) {
                        var i = {};
                        Object.keys(n).map(function (o) {
                            var a = n[o], r = e.remoteStreams[o], s = t.remoteStreamStorage[o] || {};
                            r && r.hasVideo() && r.isPlaying() && t.record('VideoDecode', a.videoStats, s, o), r && r.hasAudio() && r.isPlaying() && (t.record('AudioOutputLevel', a.audioStats, s, o), t.record('AudioDecode', a.audioStats, s, o)), i[o] = s;
                        }), t.remoteStreamStorage = i;
                    }, t;
                }, xe = new function () {
                    var e = r();
                    return e.states = {
                        UNINIT: 'UNINIT',
                        INITING: 'INITING',
                        INITED: 'INITED'
                    }, e.state = e.states.UNINIT, e.type = null, e.lastConnectedAt = null, e.lastDisconnectedAt = null, e.lastTypeChangedAt = null, e.networkChangeTimer = null, e._init = function (t, n) {
                        if (e.state = e.states.INITING, navigator.connection && navigator.connection.addEventListener) {
                            var i = e._getNetworkInfo();
                            e.type = i && i.type, e.state = e.states.INITED, t && t();
                        } else
                            e.state = e.states.UNINIT, n && n('DO_NOT_SUPPORT');
                    }, e._getNetworkInfo = function () {
                        return navigator.connection;
                    }, e._reloadNetworkInfo = function () {
                        var t = e._getNetworkInfo(), n = t && t.type || 'UNSUPPORTED', i = Date.now();
                        if (n !== e.type) {
                            e.lastTypeChangedAt = i, 'none' == n ? e.lastDisconnectedAt = i : 'none' == e.type && (e.lastConnectedAt = i), e.type = n;
                            var o = {
                                type: 'networkTypeChanged',
                                networkType: n
                            };
                            e.dispatchEvent(o);
                        }
                    }, e.getStats = function (t, n) {
                        var i = {}, o = e._getNetworkInfo();
                        o && (i.NetworkType = o.type || 'UNSUPPORTED'), setTimeout(function () {
                            t(i);
                        }, 0);
                    }, e._init(function () {
                        navigator.connection.addEventListener('change', function () {
                            e._reloadNetworkInfo();
                        }), e.networkChangeTimer = setInterval(function () {
                            e._reloadNetworkInfo();
                        }, 5000);
                    }, function (e) {
                    }), e;
                }(), Ve = function (e) {
                    var t = {
                        key: void 0,
                        highStream: null,
                        lowStream: null,
                        lowStreamParameter: null,
                        isDualStream: !1,
                        highStreamState: 2,
                        lowStreamState: 2,
                        proxyServer: null,
                        turnServer: {},
                        useProxyServer: !1
                    };
                    t.mode = e.mode, t.clientId = Object(G.b)().slice(0, 5);
                    e = I()({}, e);
                    return t.aespassword = null, t.aesmode = 'none', t.hasPublished = !1, t.getConnectionState = function () {
                        var n = a.b.reportApiInvoke(e.sessionId, {
                                name: 'Client.getConnectionState',
                                options: arguments,
                                tag: 'tracer'
                            }), i = De.connetionStateMap[t.gatewayClient.state];
                        return n(), i;
                    }, t.setClientRole = function (n, i) {
                        var r = a.b.reportApiInvoke(e.sessionId, {
                            callback: i,
                            name: 'Client.setClientRole',
                            options: arguments,
                            tag: 'tracer'
                        });
                        if (Y(n, 'setClientRole', [
                                'host',
                                'audience'
                            ]), 'rtc' === t.mode) {
                            var s = 'RTC mode can not use setClientRole';
                            return o.default.warning('['.concat(t.clientId, '] ').concat(s)), r && r(s);
                        }
                        t.gatewayClient && t.gatewayClient.state === De.CONNECTED ? ('audience' === n && (0 === this.highStreamState ? this._unpublish(this.highStream, function () {
                            r && r(null, { role: n });
                        }, function (e) {
                            r && r(e);
                        }) : t.gatewayClient.setClientRole('audience', r)), 'host' === n && t.gatewayClient.setClientRole('host', r)) : (t.gatewayClient.role = n, r && r(null, { role: n }));
                    }, t.getGatewayInfo = function (e) {
                        if (t.gatewayClient.state !== De.CONNECTED) {
                            var n = 'Client is not in connected state';
                            return o.default.error('['.concat(t.clientId, '] ').concat(n)), void e(n);
                        }
                        t.gatewayClient.getGatewayInfo(function (t) {
                            e(null, t);
                        }, e);
                    }, t.renewToken = function (n, i, r) {
                        var s = a.b.reportApiInvoke(e.sessionId, {
                            callback: function (e, t) {
                                if (e)
                                    return r && r(e);
                                i && i(t);
                            },
                            name: 'Client.renewToken',
                            options: arguments,
                            tag: 'tracer'
                        });
                        if (!ne(n))
                            throw new Error('Invalid token: Token is of the string type .Length of the string: [1,255]. ASCII characters only.');
                        t.gatewayClient || (o.default.error('['.concat(t.clientId, '] renewToken Failed. GatewayClient not Exist')), s(A.INVALID_OPERATION)), t.key ? (t.key = n, t.gatewayClient.renewToken(n, function (e) {
                            return s(null, e);
                        }, s)) : (o.default.error('['.concat(t.clientId, '] renewToken should not be called before user join')), s(A.INVALID_OPERATION));
                    }, t.setLowStreamParameter = function (n) {
                        var i = a.b.reportApiInvoke(e.sessionId, {
                            name: 'Client.setLowStreamParameter',
                            options: arguments,
                            tag: 'tracer'
                        });
                        q(n, 'param');
                        var r = n.width, s = n.height, d = n.framerate, c = n.bitrate;
                        re(r) || X(r, 'width'), re(s) || X(s, 'height'), re(d) || X(d, 'framerate'), re(c) || X(c, 'bitrate', 1, 10000000), (!r && s || r && !s) && o.default.warning('['.concat(t.clientId, '] The width and height parameters take effect only when both are set')), t.lowStreamParameter = n, i();
                    }, t.init = function (n, i, r) {
                        var s = a.b.reportApiInvoke(e.sessionId, {
                            callback: function (e, t) {
                                if (e)
                                    return r && r(e);
                                i && i(t);
                            },
                            name: 'Client.init',
                            options: arguments,
                            tag: 'tracer'
                        });
                        Q(n), Object(p.isChromeKernel)() && Object(p.getChromeKernelVersion)() <= 48 ? r ? s(A.BAD_ENVIRONMENT) : Object(G.f)() : (o.default.info('['.concat(t.clientId, '] Initializing AgoraRTC client, appId: ').concat(n, '.')), e.appId = n, e.sessionId = Object(G.b)(), s());
                    }, t.setTurnServer = function (n) {
                        var i = a.b.reportApiInvoke(e.sessionId, {
                            name: 'Client.setTurnServer',
                            options: arguments,
                            tag: 'tracer'
                        });
                        if (t.gatewayClient && t.gatewayClient.state !== De.DISCONNECTED)
                            throw new Error('Set turn server before join channel');
                        if (t.useProxyServer)
                            throw new Error('You have already set the proxy');
                        q(n, 'turnServer');
                        var r = n.turnServerURL, s = n.username, d = n.password, c = n.udpport, u = n.forceturn, l = n.tcpport;
                        Q(r, 'turnServerURL'), Q(s, 'username'), Q(d, 'password'), Q(c, 'udpport'), re(u) || $(u, 'forceturn'), t.turnServer.url = r, t.turnServer.udpport = c, t.turnServer.username = s, t.turnServer.credential = d, t.turnServer.forceturn = u || !1, re(l) || (Q(l, 'tcpport'), t.turnServer.tcpport = l, o.default.info('['.concat(t.clientId, '] Set turnserver tcpurl. ').concat(t.turnServer.url, ':').concat(t.turnServer.tcpport))), o.default.info('['.concat(t.clientId, '] Set turnserver udpurl. ').concat(t.turnServer.url, ':').concat(t.turnServer.udpport, ',username: ').concat(t.turnServer.uername, ',password: ').concat(t.turnServer.credential)), i();
                    }, t.setProxyServer = function (n) {
                        var i = a.b.reportApiInvoke(e.sessionId, {
                            name: 'Client.setProxyServer',
                            options: arguments,
                            tag: 'tracer'
                        });
                        if (t.gatewayClient && t.gatewayClient.state !== De.DISCONNECTED)
                            throw new Error('Set proxy server before join channel');
                        if (!n)
                            throw new Error('Do not set the proxyServer parameter as empty');
                        if (t.useProxyServer)
                            throw new Error('You have already set the proxy');
                        Q(n, 'proxyServer'), t.proxyServer = n, a.b.setProxyServer(n), o.default.setProxyServer(n), i();
                    }, t.startProxyServer = function () {
                        var n = a.b.reportApiInvoke(e.sessionId, {
                            name: 'Client.startProxyServer',
                            options: arguments,
                            tag: 'tracer'
                        });
                        if (t.gatewayClient && t.gatewayClient.state !== De.DISCONNECTED)
                            throw new Error('Start proxy server before join channel');
                        if (t.proxyServer || t.turnServer.url)
                            throw new Error('You have already set the proxy');
                        t.useProxyServer = !0, n();
                    }, t.stopProxyServer = function () {
                        var n = a.b.reportApiInvoke(e.sessionId, {
                            name: 'Client.stopProxyServer',
                            options: arguments,
                            tag: 'tracer'
                        });
                        if (t.gatewayClient && t.gatewayClient.state !== De.DISCONNECTED)
                            throw new Error('Stop proxy server after leave channel');
                        a.b.setProxyServer(), o.default.setProxyServer(), t.turnServer = {}, t.proxyServer = null, t.useProxyServer = !1, n();
                    }, t.setEncryptionSecret = function (n) {
                        var i = a.b.reportApiInvoke(e.sessionId, {
                            name: 'Client.setEncryptionSecret',
                            options: arguments,
                            tag: 'tracer'
                        });
                        Q(n, 'password'), t.aespassword = n, i();
                    }, t.setEncryptionMode = function (n) {
                        var i = a.b.reportApiInvoke(e.sessionId, {
                            name: 'Client.setEncryptionMode',
                            options: arguments,
                            tag: 'tracer'
                        });
                        if (Q(n, 'encryptionMode'), !le.includes(n))
                            throw new Error('Invalid encryptionMode: encryptionMode should be "aes-128-xts" | "aes-256-xts" | "aes-128-ecb"');
                        t.aesmode = n, i();
                    }, t.configPublisher = function (n) {
                        var i = a.b.reportApiInvoke(e.sessionId, {
                            name: 'Client.configPublisher',
                            options: arguments,
                            tag: 'tracer'
                        });
                        q(n, 'config');
                        var o = n.width, r = n.height, s = n.framerate, d = n.bitrate, c = n.publisherUrl;
                        X(o, 'width'), X(r, 'height'), X(s, 'framerate'), X(d, 'bitrate', 1, 10000000), c && Q(c, 'publisherUrl'), t.gatewayClient.configPublisher(n), i();
                    }, t.enableDualStream = function (n, i) {
                        var r = a.b.reportApiInvoke(e.sessionId, {
                            callback: function (e, t) {
                                if (e)
                                    return i && i(e);
                                n && n(t);
                            },
                            name: 'Client.enableDualStream',
                            options: arguments,
                            tag: 'tracer'
                        });
                        return 'iOS' === Object(p.getBrowserOS)() ? (a.b.streamSwitch(e.sessionId, {
                            lts: new Date().getTime(),
                            isdual: !0,
                            succ: !1
                        }), r(A.IOS_NOT_SUPPORT)) : Object(p.isWeChatBrowser)() ? (a.b.streamSwitch(e.sessionId, {
                            lts: new Date().getTime(),
                            isdual: !0,
                            succ: !1
                        }), r(A.WECHAT_NOT_SUPPORT)) : (a.b.streamSwitch(e.sessionId, {
                            lts: new Date().getTime(),
                            isdual: !0,
                            succ: !0
                        }), t.isDualStream = !0, void (0 === t.highStreamState ? t._publishLowStream(function (e) {
                            return r(null, e);
                        }, function (e) {
                            o.default.warning('['.concat(t.clientId, ']'), e), r(A.ENABLE_DUALSTREAM_FAILED);
                        }) : 1 === t.highStreamState ? r(A.STILL_ON_PUBLISHING) : r(null)));
                    }, t.disableDualStream = function (n, i) {
                        var r = a.b.reportApiInvoke(e.sessionId, {
                            callback: function (e, t) {
                                if (e)
                                    return i && i(e);
                                n && n(t);
                            },
                            name: 'Client.disableDualStream',
                            options: arguments,
                            tag: 'tracer'
                        });
                        a.b.streamSwitch(e.sessionId, {
                            lts: new Date().getTime(),
                            isdual: !1,
                            succ: !0
                        }), t.isDualStream = !1, 0 === t.highStreamState ? t._unpublishLowStream(function () {
                            t.highStream.lowStream = null, r();
                        }, function (e) {
                            o.default.warning('['.concat(t.clientId, ']'), e), r(A.DISABLE_DUALSTREAM_FAILED);
                        }) : 1 === t.highStreamState ? r(A.STILL_ON_PUBLISHING) : r();
                    }, t._createLowStream = function (e, n) {
                        if (t.highStream && t.highStream.stream) {
                            var a = I()({}, t.highStream.params);
                            if (a.streamID += 1, a.audio = !1, a.video) {
                                var r = t.highStream.stream.getVideoTracks()[0];
                                r ? K.getVideoCameraIdByLabel(r.label, function (r) {
                                    a.cameraId = r;
                                    var s = new se(a);
                                    if (s.streamId = t.highStream.getId() + 1, t.lowStreamParameter) {
                                        var d = I()({}, t.lowStreamParameter);
                                        if (!d.width || !d.height) {
                                            var c = ke(t.highStream.profile), u = i.SUPPORT_RESOLUTION_LIST[c[0]];
                                            d.width = u[0], d.height = u[1];
                                        }
                                        if (d.framerate = d.framerate || 5, d.bitrate = d.bitrate || 50, Object(p.isSafari)() || Object(p.isOpera)()) {
                                            o.default.debug('['.concat(t.clientId, '] Shimming lowStreamParameter'));
                                            u = i.SUPPORT_RESOLUTION_LIST[t.highStream.profile];
                                            d.width = u[0], d.height = u[1];
                                        }
                                        s.setVideoProfileCustomPlus(d);
                                    } else
                                        s.setVideoProfileCustom(ke(t.highStream.profile));
                                    s.init(function () {
                                        t.highStream.lowStream = s, t.highStream.userMuteVideo && s.muteVideo(), e && e(s);
                                    }, n);
                                }, n) : n && n(A.HIGH_STREAM_NOT_VIDEO_TRACE);
                            } else
                                n && n(A.HIGH_STREAM_NOT_VIDEO_TRACE);
                        } else
                            n && n(A.HIGH_STREAM_NOT_VIDEO_TRACE);
                    }, t._getLowStream = function (e, n) {
                        t.lowStream ? e(t.lowStream) : t._createLowStream(function (n) {
                            t.lowStream = n, e(t.lowStream);
                        }, n);
                    }, t._publishLowStream = function (e, n) {
                        return 2 !== t.lowStreamState ? n && n(A.LOW_STREAM_ALREADY_PUBLISHED) : t.highStream && t.highStream.hasScreen() ? n && n(A.SHARING_SCREEN_NOT_SUPPORT) : void t._getLowStream(function (i) {
                            t.lowStreamState = 1, t.gatewayClient.publish(i, { streamType: 1 }, function () {
                                t.lowStreamState = 0, e && e();
                            }, function (e) {
                                o.default.debug('['.concat(t.clientId, '] publish low stream failed')), n && n(e);
                            });
                        }, n);
                    }, t._unpublishLowStream = function (e, n) {
                        if (0 !== t.lowStreamState)
                            return n && n(A.LOW_STREAM_NOT_YET_PUBLISHED);
                        t.lowStream && (t.gatewayClient.unpublish(t.lowStream, { streamType: 1 }, function () {
                        }, function (e) {
                            o.default.debug('['.concat(t.clientId, '] unpublish low stream failed')), n && n(e);
                        }), t.lowStream.close(), t.lowStream = null, t.lowStreamState = 2, e && e());
                    }, t.join = function (n, i, r, s, d) {
                        var c, u = a.b.reportApiInvoke(e.sessionId, {
                                callback: function (e, t) {
                                    if (e)
                                        return d && d(e);
                                    s && s(t);
                                },
                                name: 'Client.join',
                                options: arguments,
                                tag: 'tracer'
                            });
                        if (n && !ne(n))
                            return o.default.warning('['.concat(t.clientId, '] Param channelKey should be string')), u(A.INVALID_PARAMETER);
                        if (!ae(c = i) || !/^[a-zA-Z0-9!#$%&()+-:;<=.>?@[\]^_{}|~,\s]{1,64}$/.test(c))
                            return o.default.warning('['.concat(t.clientId, '] The length must be within 64 bytes. The supported characters: a-z,A-Z,0-9,space,!, #, $, %, &, (, ), +, -, :, ;, <, =, ., >, ?, @, [, ], ^, _,  {, }, |, ~, ,')), u(A.INVALID_PARAMETER);
                        if ('string' == typeof i && '' === i)
                            return o.default.warning('['.concat(t.clientId, '] Param channel should not be empty')), u(A.INVALID_PARAMETER);
                        if (r && !Object(G.c)(r) && !Z(r, 1, 255))
                            return o.default.warning('['.concat(t.clientId, '] [String uid] Length of the string: [1,255]. ASCII characters only. [Number uid] The value range is [0,10000]')), u(A.INVALID_PARAMETER);
                        if ('string' == typeof r && 0 == r.length)
                            return o.default.warning('['.concat(t.clientId, '] String uid should not be empty')), u(A.INVALID_PARAMETER);
                        if ('string' == typeof r && r.length > 256)
                            return o.default.warning('['.concat(t.clientId, '] Length of string uid should be less than 255')), u(A.INVALID_PARAMETER);
                        t.highStream = null, t.lowStream = null, t.lowStreamParameter = null, t.isDualStream = !1, t.highStreamState = 2, t.lowStreamState = 2;
                        var l = {
                            clientId: t.clientId,
                            appId: e.appId,
                            sid: e.sessionId,
                            cname: i,
                            uid: r,
                            turnServer: t.turnServer,
                            proxyServer: t.proxyServer,
                            token: n || e.appId,
                            useProxyServer: t.useProxyServer
                        };
                        if ('string' == typeof r && (l.stringUid = r, l.uid = 0), t.aespassword && 'none' !== t.aesmode && I()(l, {
                                aespassword: t.aespassword,
                                aesmode: t.aesmode
                            }), a.b.sessionInit(e.sessionId, {
                                lts: new Date().getTime(),
                                cname: i,
                                appid: e.appId,
                                mode: e.mode,
                                succ: !0
                            }), t.onSuccess = function (e) {
                                return u(null, e);
                            }, t.onFailure = function (e) {
                                return u(e);
                            }, t.channel = i, t.gatewayClient.state !== De.DISCONNECTED)
                            return o.default.error('['.concat(t.clientId, '] Client already in connecting/connected state')), u(A.INVALID_OPERATION), void a.b.joinGateway(e.sessionId, {
                                lts: Date.now(),
                                succ: !1,
                                ec: A.INVALID_OPERATION,
                                addr: null
                            });
                        t.gatewayClient.state = De.CONNECTING, be(l, function (a, r) {
                            o.default.info('['.concat(t.clientId, '] Joining channel: ').concat(i)), t.gatewayClient.dispatchEvent({
                                type: 'config-distribute',
                                config: r,
                                joinInfo: l
                            }), t.key = n || e.appId, l.cid = a.cid, l.uid = a.uid, a.uni_lbs_ip && a.uni_lbs_ip[1] && (l.uni_lbs_ip = a.uni_lbs_ip[1]), l.gatewayAddr = a.gateway_addr, t.joinInfo = l, t.gatewayClient.join(l, t.key, function (e) {
                                o.default.info('['.concat(t.clientId, '] Join channel ').concat(i, ' success, join with uid: ').concat(e, '.')), t.onSuccess = null, u(null, e);
                            }, function (e) {
                                return u(e);
                            });
                        });
                    }, t.renewChannelKey = function (n, i, r) {
                        var s = a.b.reportApiInvoke(e.sessionId, {
                            callback: function (e, t) {
                                if (e)
                                    return r && r(e);
                                i && i(t);
                            },
                            name: 'Client.renewChannelKey',
                            options: arguments,
                            tag: 'tracer'
                        });
                        Q(n, 'key', 1, 2047), void 0 === t.key ? (o.default.error('['.concat(t.clientId, '] renewChannelKey should not be called before user join')), s(A.INVALID_OPERATION)) : (t.key = n, t.gatewayClient.key = n, t.gatewayClient.rejoin(), s());
                    }, t.leave = function (n, i) {
                        var r = a.b.reportApiInvoke(e.sessionId, {
                            callback: function (e, t) {
                                if (e)
                                    return i && i(e);
                                n && n(t);
                            },
                            name: 'Client.leave',
                            options: arguments,
                            tag: 'tracer'
                        });
                        o.default.info('['.concat(t.clientId, '] Leaving channel')), t._renewSession(), t.gatewayClient.leave(function (e) {
                            return r(e);
                        }, r);
                    }, t._renewSession = function () {
                        var n = Object(G.b)();
                        if (o.default.debug('renewSession '.concat(e.sessionId, ' => ').concat(n)), e.sessionId = n, t.joinInfo && (t.joinInfo.sid = n), t.gatewayClient && (t.gatewayClient.joinInfo && (t.gatewayClient.joinInfo.sid = n), t.gatewayClient.localStreams))
                            for (var i in t.gatewayClient.localStreams) {
                                var a = t.gatewayClient.localStreams[i];
                                a && (a.sid = n);
                            }
                    }, t._publish = function (n, i, a) {
                        if (2 !== t.highStreamState)
                            return o.default.warning('['.concat(t.clientId, '] Can\'t publish stream when stream already publish ').concat(n.getId())), a && a(A.STREAM_ALREADY_PUBLISHED);
                        o.default.info('['.concat(t.clientId, '] Publishing stream, uid ').concat(n.getId())), t.highStream = n, t.highStreamState = 1, t.highStream.streamId = t.joinInfo.stringUid || t.joinInfo.uid, t.hasPublished = !1;
                        var r = function (n, i, a) {
                            t.gatewayClient.publish(n, { streamType: 0 }, function () {
                                n.sid = e.sessionId, t.highStreamState = 0, o.default.info('['.concat(t.clientId, '] Publish success, uid: ').concat(n.getId())), t.isDualStream ? t._publishLowStream(function () {
                                    i && i();
                                }, function (e) {
                                    o.default.warning('['.concat(t.clientId, '] '), e), i && i();
                                }) : i && i();
                            }, a);
                        };
                        'audience' === t.gatewayClient.role && 'live' === t.mode ? t.gatewayClient.setClientRole('host', function (e) {
                            if (e)
                                return a && a(e);
                            r(n, i, a);
                        }) : r(n, i, a);
                    }, t._unpublish = function (e, n, i) {
                        if (0 !== t.highStreamState)
                            return o.default.warning('['.concat(t.clientId, '] Can\'t unpublish stream when stream not publish')), i && i(A.STREAM_NOT_YET_PUBLISHED);
                        o.default.info('['.concat(t.clientId, '] Unpublish stream, uid ').concat(e.getId()));
                        var a = function (e, n, i) {
                            t.isDualStream && t.lowStream ? (t._unpublishLowStream(null, i), t.gatewayClient.unpublish(e, { streamType: 0 }, null, i), t.highStreamState = 2, o.default.info('['.concat(t.clientId, '] Unpublish stream success, uid: ').concat(e.getId()))) : (t.gatewayClient.unpublish(e, { streamType: 0 }, null, i), t.highStreamState = 2, o.default.info('['.concat(t.clientId, '] Unpublish stream success, uid: ').concat(e.getId()))), n && n();
                        };
                        'host' === t.gatewayClient.role && 'live' === t.mode ? t.gatewayClient.setClientRole('audience', function (t) {
                            if (t)
                                return i && i(t);
                            a(e, n, i);
                        }) : a(e, n, i);
                    }, t.publish = function (n, i) {
                        var o = a.b.reportApiInvoke(e.sessionId, {
                            callback: function (e, t) {
                                if (e)
                                    return i && i(e);
                            },
                            name: 'Client.publish',
                            tag: 'tracer',
                            options: {
                                stream: 'too long to show',
                                onFailure: !!i
                            }
                        });
                        2 === t.highStreamState ? t._publish(n, function (e) {
                            return o(null, e);
                        }, function (e) {
                            return o(e);
                        }) : o(A.STREAM_ALREADY_PUBLISHED);
                    }, t.unpublish = function (n, i) {
                        var o = a.b.reportApiInvoke(e.sessionId, {
                            callback: function (e, t) {
                                if (e)
                                    return i && i(e);
                            },
                            name: 'Client.unpublish',
                            tag: 'tracer',
                            options: {
                                stream: 'too long to show',
                                onFailure: !!i
                            }
                        });
                        0 === t.highStreamState ? t._unpublish(n, function (e) {
                            return o(null, e);
                        }, function (e) {
                            return o(e);
                        }) : o(A.STREAM_NOT_YET_PUBLISHED);
                    }, t.subscribe = function (n, i, r) {
                        var s = a.b.reportApiInvoke(e.sessionId, {
                            callback: function (e, t) {
                                if (e)
                                    return r && r(e);
                            },
                            name: 'Client.subscribe',
                            tag: 'tracer',
                            options: {
                                stream: 'too long to show',
                                options: i,
                                onFailure: !!r
                            }
                        });
                        'function' == typeof i && (r = i, i = null), q(n, 'stream'), re(i) || (q(i, 'options'), re(i.video) || $(i.video, 'options.video'), re(i.audio) || $(i.audio, 'options.audio'));
                        var d = {
                            video: !0,
                            audio: !0
                        };
                        if (!re(i)) {
                            if (Object(p.isSafari)() && (!i.video || !i.audio)) {
                                var c = 'SAFARI_NOT_SUPPORTED_FOR_TRACK_SUBSCRIPTION';
                                return o.default.error('['.concat(t.clientId, '] '), c), void s(c);
                            }
                            if (!re(i.video) && !te(i.video) || !re(i.audio) && !te(i.audio) || !1 === i.audio && !1 === i.video) {
                                c = 'INVALID_PARAMETER '.concat(JSON.stringify(i));
                                return o.default.error('['.concat(t.clientId, '] '), c), void s(c);
                            }
                        }
                        n.subscribeOptions ? (I()(n.subscribeOptions, d, i), t.gatewayClient.subscribeChange(n, function (e) {
                            return s(null, e);
                        }, s)) : (n.subscribeOptions = I()({}, d, i), t.gatewayClient.subscribe(n, function (e) {
                            return s(null, e);
                        }, s));
                    }, t.unsubscribe = function (n, i) {
                        var r = a.b.reportApiInvoke(e.sessionId, {
                            callback: function (e, t) {
                                if (e)
                                    return i && i(e);
                            },
                            name: 'Client.unsubscribe',
                            tag: 'tracer',
                            options: {
                                stream: 'too long to show',
                                onFailure: !!i
                            }
                        });
                        o.default.info('['.concat(t.clientId, '] Unsubscribe stream, uid: ').concat(n.getId())), t.gatewayClient.unsubscribe(n, function (e) {
                            return r(null, e);
                        }, r);
                    }, t.setRemoteVideoStreamType = function (n, i) {
                        var o = a.b.reportApiInvoke(e.sessionId, {
                            name: 'Client.setRemoteVideoStreamType',
                            tag: 'tracer',
                            options: {
                                stream: 'too long to show',
                                streamType: i
                            }
                        });
                        Y(i, 'streamType', [
                            0,
                            1
                        ]), t.gatewayClient.setRemoteVideoStreamType(n, i), o();
                    }, t.setStreamFallbackOption = function (n, i) {
                        var o = a.b.reportApiInvoke(e.sessionId, {
                            name: 'Client.setStreamFallbackOption',
                            tag: 'tracer',
                            options: {
                                stream: 'too long to show',
                                fallbackType: i
                            }
                        });
                        Y(i, 'fallbackType', [
                            0,
                            1,
                            2
                        ]), t.gatewayClient.setStreamFallbackOption(n, i), o();
                    }, t.startLiveStreaming = function (n, i) {
                        var o = a.b.reportApiInvoke(e.sessionId, {
                            name: 'Client.startLiveStreaming',
                            options: arguments,
                            tag: 'tracer'
                        });
                        Q(n, 'url'), re(i) || $(i, 'transcodingEnabled'), t.gatewayClient.startLiveStreaming(n, i), o();
                    }, t.stopLiveStreaming = function (n) {
                        var i = a.b.reportApiInvoke(e.sessionId, {
                            name: 'Client.stopLiveStreaming',
                            options: arguments,
                            tag: 'tracer'
                        });
                        Q(n, 'url'), t.gatewayClient.stopLiveStreaming(n), i();
                    }, t.setLiveTranscoding = function (n) {
                        var i = a.b.reportApiInvoke(e.sessionId, {
                            name: 'Client.setLiveTranscoding',
                            options: arguments,
                            tag: 'tracer'
                        });
                        q(n, 'transcoding');
                        var o = n.width, r = n.height, s = n.videoBitrate, d = n.videoFramerate, c = n.lowLatency, u = n.audioSampleRate, l = n.audioBitrate, p = n.audioChannels, f = n.videoGop, m = n.videoCodecProfile, g = n.userCount, v = n.backgroundColor, S = n.transcodingUsers;
                        if (re(o) || X(o, 'width'), re(r) || X(r, 'height'), re(s) || X(s, 'videoBitrate', 1, 1000000), re(d) || X(d, 'videoFramerate'), re(c) || $(c, 'lowLatency'), re(u) || Y(u, 'audioSampleRate', [
                                32000,
                                44100,
                                48000
                            ]), re(l) || X(l, 'audioBitrate', 1, 128), re(p) || Y(p, 'audioChannels', [
                                1,
                                2,
                                3,
                                4,
                                5
                            ]), re(f) || X(f, 'videoGop'), re(m) || Y(m, 'videoCodecProfile', [
                                66,
                                77,
                                100
                            ]), re(g) || X(g, 'userCount', 0, 17), re(v) || X(v, 'backgroundColor', 0, 16777215), !re(S)) {
                            if (!(S instanceof Array))
                                throw new Error('[transcodingUsers]: transcodingUsers should be Array');
                            if (S.length > 17)
                                throw new Error('The length of transcodingUsers cannot greater than 17');
                            S.map(function (e, t) {
                                if (!re(e.uid) && !Object(G.c)(e.uid) && !Z(e.uid, 1, 255))
                                    throw new Error('[String uid] Length of the string: [1,255]. ASCII characters only. [Number uid] The value range is [0,10000]');
                                if (re(e.x) || X(e.x, 'transcodingUser['.concat(t, '].x'), 0, 10000), re(e.y) || X(e.y, 'transcodingUser['.concat(t, '].y'), 0, 10000), re(e.width) || X(e.width, 'transcodingUser['.concat(t, '].width'), 0, 10000), re(e.height) || X(e.height, 'transcodingUser['.concat(t, '].height'), 0, 10000), re(e.zOrder) || X(e.zOrder, 'transcodingUser['.concat(t, '].zOrder'), 0, 100), !(re(e.alpha) || 'number' == typeof e.alpha && e.alpha <= 1 && e.alpha >= 0))
                                    throw new Error('transcodingUser[${index}].alpha: The value range is [0, 1]');
                            });
                        }
                        I()(Fe, n), t.gatewayClient.setLiveTranscoding(Fe), i();
                    }, t.addInjectStreamUrl = function (n, i) {
                        var o = a.b.reportApiInvoke(e.sessionId, {
                            name: 'Client.addInjectStreamUrl',
                            options: arguments,
                            tag: 'tracer'
                        });
                        Q(n, 'url', 1, 255), q(i, 'config'), !re(i && i.width) && X(i.width, 'config.width', 0, 10000), !re(i && i.height) && X(i.height, 'config.height', 0, 10000), !re(i && i.videoGop) && X(i.videoGop, 'config.videoGop', 1, 10000), !re(i && i.videoFramerate) && X(i.videoFramerate, 'config.videoFramerate', 1, 10000), !re(i && i.videoBitrate) && X(i.videoBitrate, 'config.videoBitrate', 1, 10000), !re(i && i.audioSampleRate) && Y(i.audioSampleRate, 'config.audioSampleRate', [
                            32000,
                            44100,
                            48000
                        ]), !re(i && i.audioBitrate) && X(i.audioBitrate, 'config.audioBitrate', 1, 10000), !re(i && i.audioChannels) && X(i.audioChannels, 'config.audioChannels', 1, 2), I()(Be, i), t.gatewayClient.addInjectStreamUrl(n, Be), o();
                    }, t.removeInjectStreamUrl = function (n) {
                        var i = a.b.reportApiInvoke(e.sessionId, {
                            name: 'Client.removeInjectStreamUrl',
                            options: arguments,
                            tag: 'tracer'
                        });
                        Q(n, 'url', 1, 255), t.gatewayClient.removeInjectStreamUrl(n), i();
                    }, t.enableAudioVolumeIndicator = function (n, i) {
                        var r = a.b.reportApiInvoke(e.sessionId, {
                            name: 'Client.enableAudioVolumeIndicator',
                            options: arguments,
                            tag: 'tracer'
                        });
                        n = n || 2000, X(i = i || 3, 'smooth', 1, 100), X(n, 'interval', 50, 100000), t.audioVolumeIndication = t.audioVolumeIndication || { enabled: !0 }, t.audioVolumeIndication.interval = n, t.audioVolumeIndication.smooth = i, t.audioVolumeIndication = {
                            interval: n,
                            smooth: i
                        }, o.default.info('['.concat(t.clientId, '] enableAudioVolumeIndicator interval ').concat(n, ' smooth ').concat(i)), t.gatewayClient.enableAudioVolumeIndicator(n, i), r();
                    }, t.getNetworkStats = function (e, n) {
                        return o.default.deprecate('['.concat(t.clientId, '] client.getNetworkStats is deprecated. Use client.getTransportStats instead.')), xe.getStats(e, n);
                    }, t.getSystemStats = function (e, t) {
                        return m.getStats(e, t);
                    }, t.getRecordingDevices = function (e, t) {
                        return K.getRecordingDevices(e, t);
                    }, t.getPlayoutDevices = function (e, t) {
                        return K.getPlayoutDevices(e, t);
                    }, t.getCameras = function (e, t) {
                        return K.getCameras(e, t);
                    }, t.getRemoteAudioStats = function (e, n) {
                        return t.rtcStatsCollector.getRemoteAudioStats(e, n);
                    }, t.getLocalAudioStats = function (e, n) {
                        return t.rtcStatsCollector.getLocalAudioStats(e, n);
                    }, t.getRemoteVideoStats = function (e, n) {
                        return t.rtcStatsCollector.getRemoteVideoStats(e, n);
                    }, t.getLocalVideoStats = function (e, n) {
                        return t.rtcStatsCollector.getLocalVideoStats(e, n);
                    }, t._getRemoteVideoQualityStats = function (e, n) {
                        return t.rtcStatsCollector.getRemoteVideoQualityStats(e, n);
                    }, t._getRemoteAudioQualityStats = function (e, n) {
                        return t.rtcStatsCollector.getRemoteAudioQualityStats(e, n);
                    }, t.getTransportStats = function (e, n) {
                        return t.rtcStatsCollector.getTransportStats(function (t) {
                            return xe.getStats(function (n) {
                                var i = I()({}, t, n);
                                e && e(i);
                            }, n);
                        }, n);
                    }, t.getSessionStats = function (e, n) {
                        return t.rtcStatsCollector.getSessionStats(e, n);
                    }, t.onNetworkQuality = function () {
                        return t.rtcStatsCollector.onNetworkQuality(onSuccess, onFailure);
                    }, e.clientId = t.clientId, t.gatewayClient = De(e), t.on = t.gatewayClient.on, t.rtcStatsCollector = function (e) {
                        var t = r();
                        return t.gatewayClient = e, t.exceptionMonitor = new Le(e), t.localStats = {}, t.remoteStats = {}, t.session = {
                            sendBytes: 0,
                            recvBytes: 0,
                            WSSendBytes: 0,
                            WSSendBytesDelta: 0,
                            WSRecvBytes: 0,
                            WSRecvBytesDelta: 0,
                            HTTPSendBytes: 0,
                            HTTPSendBytesDelta: 0,
                            HTTPRecvBytes: 0,
                            HTTPRecvBytesDelta: 0
                        }, t.getRemoteAudioStats = function (e) {
                            var n = {};
                            for (var i in t.remoteStats) {
                                var o = {}, a = t.remoteStats[i];
                                J(o, 'End2EndDelay', a.peer_delay && a.peer_delay.audio_delay), J(o, 'TransportDelay', a.peer_delay && a.peer_delay.e2e_delay), J(o, 'PacketLossRate', a.peer_delay && a.peer_delay.e2e_audio_lost_ratio_400ms), J(o, 'RecvLevel', a.audioStats && a.audioStats.audioOutputLevel), J(o, 'RecvBitrate', a.audioRecvBitrate), J(o, 'CodecType', a.audioStats && a.audioStats.googCodecName), J(o, 'MuteState', a.audioDisabled), J(o, 'TotalFreezeTime', a.audioStats && a.audioStats.audioTotalFreezeTime), J(o, 'TotalPlayDuration', a.audioStats && a.audioStats.audioTotalPlayDuration), n[i] = o;
                            }
                            e && e(n);
                        }, t.getLocalAudioStats = function (e) {
                            var n = {};
                            for (var i in t.localStats) {
                                var o = {}, a = t.localStats[i];
                                J(o, 'RecordingLevel', a.audioStats && a.audioStats.audioInputLevel), J(o, 'SendLevel', a.audioStats && a.audioStats.totalAudioEnergy), J(o, 'SamplingRate', a.audioStats && a.audioStats.totalSamplesDuration), J(o, 'SendBitrate', a.audioSendBitrate), J(o, 'CodecType', a.audioStats && a.audioStats.googCodecName), J(o, 'MuteState', a.audioDisabled);
                                var r = t.gatewayClient.localStreams[i];
                                r && r.isPlaying() && J(o, 'MuteState', r.userMuteAudio ? '1' : '0'), n[i] = o;
                            }
                            e && e(n);
                        }, t.getRemoteVideoStats = function (e) {
                            var n = {};
                            for (var i in t.remoteStats) {
                                var o = {}, a = t.remoteStats[i];
                                J(o, 'End2EndDelay', a.peer_delay && a.peer_delay.video_delay), J(o, 'TransportDelay', a.peer_delay && a.peer_delay.e2e_delay), J(o, 'PacketLossRate', a.peer_delay && a.peer_delay.e2e_video_lost_ratio_400ms), J(o, 'RecvBitrate', a.videoRecvBitrate), J(o, 'RecvResolutionWidth', a.videoStats && a.videoStats.googFrameWidthReceived), J(o, 'RecvResolutionHeight', a.videoStats && a.videoStats.googFrameHeightReceived), J(o, 'RenderResolutionWidth', a.videoStats && a.videoStats.renderRemoteWidth), J(o, 'RenderResolutionHeight', a.videoStats && a.videoStats.renderRemoteHeight), J(o, 'RenderFrameRate', a.videoStats && a.videoStats.googFrameRateOutput), J(o, 'MuteState', a.videoDisabled), J(o, 'TotalFreezeTime', a.videoStats && a.videoStats.videoTotalFreezeTime), J(o, 'TotalPlayDuration', a.videoStats && a.videoStats.videoTotalPlayDuration), n[i] = o;
                            }
                            e && e(n);
                        }, t.getLocalVideoStats = function (e) {
                            var n = {};
                            for (var i in t.localStats) {
                                var o = {}, a = t.localStats[i];
                                J(o, 'TargetSendBitrate', a.videoTargetSendBitrate), J(o, 'SendFrameRate', a.videoStats && a.videoStats.googFrameRateSent), J(o, 'SendBitrate', a.videoSendBitrate), J(o, 'SendResolutionWidth', a.videoStats && a.videoStats.googFrameWidthSent), J(o, 'SendResolutionHeight', a.videoStats && a.videoStats.googFrameHeightSent), J(o, 'CaptureResolutionWidth', a.videoStats && a.videoStats.renderLocalWidth), J(o, 'CaptureResolutionHeight', a.videoStats && a.videoStats.renderLocalHeight), J(o, 'EncodeDelay', a.videoStats && a.videoStats.googAvgEncodeMs), J(o, 'MuteState', a.videoDisabled), J(o, 'TotalFreezeTime', a.videoStats && a.videoStats.videoTotalFreezeTime), J(o, 'TotalDuration', a.videoStats && a.videoStats.videoTotalPlayDuration), J(o, 'CaptureFrameRate', a.videoStats && a.videoStats.googFrameRateSent), n[i] = o, e && e(n);
                            }
                        }, t.getRemoteVideoQualityStats = function (e) {
                            var n = {};
                            for (var i in t.remoteStats) {
                                var o = {}, a = t.remoteStats[i];
                                J(o, 'videoReceiveDelay', a.videoStats && a.videoStats.googCurrentDelayMs), J(o, 'VideoFreezeRate', a.videoStats && a.videoStats.videoFreezeRate), J(o, 'FirstFrameTime', a.firstFrameTime), n[i] = o;
                            }
                            e && e(n);
                        }, t.getRemoteAudioQualityStats = function (e) {
                            var n = {};
                            for (var i in t.remoteStats) {
                                var o = {}, a = t.remoteStats[i];
                                J(o, 'audioReceiveDelay', a.audioStats && a.audioStats.googCurrentDelayMs), J(o, 'AudioFreezeRate', a.videoStats && a.videoStats.videoFreezeRate), n[i] = o;
                            }
                            e && e(n);
                        }, t.getTransportStats = function (e) {
                            var n = {}, i = {}, o = t.gatewayClient.traffic_stats, a = o.peer_delay;
                            if (J(n, 'OutgoingAvailableBandwidth', t.gatewayClient.OutgoingAvailableBandwidth / 1000), J(n, 'RTT', o && o.access_delay), a) {
                                var r = !0, s = !1, d = void 0;
                                try {
                                    for (var c, u = a[Symbol.iterator](); !(r = (c = u.next()).done); r = !0) {
                                        var l = c.value;
                                        l.downlink_estimate_bandwidth && (i[l.peer_uid] = l.downlink_estimate_bandwidth / 1000 + '');
                                    }
                                } catch (e) {
                                    s = !0, d = e;
                                } finally {
                                    try {
                                        r || null == u.return || u.return();
                                    } finally {
                                        if (s)
                                            throw d;
                                    }
                                }
                            }
                            n.IncomingAvailableBandwidth = i, e && e(n);
                        }, t.getSessionStats = function (e) {
                            var n = {}, i = t.gatewayClient.traffic_stats, o = t.gatewayClient.socket, a = 0, r = 0;
                            for (var s in t.remoteStats)
                                (d = t.remoteStats[s]) && d.videoStats && d.videoStats.videoRecvBytesDelta && (r += parseInt(d.videoStats.videoRecvBytesDelta)), d && d.audioStats && d.audioStats.audioRecvBytesDelta && (r += parseInt(d.audioStats.audioRecvBytesDelta));
                            for (var s in t.localStats) {
                                var d;
                                (d = t.localStats[s]) && d.videoStats && d.videoStats.videoSendBytesDelta && (a += parseInt(d.videoStats.videoSendBytesDelta)), d && d.audioStats && d.audioStats.audioSendBytesDelta && (a += parseInt(d.audioStats.audioSendBytesDelta));
                            }
                            var c = a + t.session.WSSendBytesDelta + t.session.HTTPSendBytesDelta, u = r + t.session.WSRecvBytesDelta + t.session.HTTPRecvBytesDelta, l = t.session.sendBytes + Object(fe.b)(), p = t.session.recvBytes + Object(fe.a)();
                            t.gatewayClient.socket && t.gatewayClient.socket.state === t.gatewayClient.CONNECTED && (l += o.getSendBytes(), p += o.getRecvBytes());
                            var f = 1;
                            i.peer_delay && (f = i.peer_delay.length, f += 1), J(n, 'Duration', o.getDuration()), J(n, 'UserCount', f), J(n, 'SendBytes', l), J(n, 'RecvBytes', p), J(n, 'SendBitrate', 8 * c / 1000), J(n, 'RecvBitrate', 8 * u / 1000), e && e(n);
                        }, t.isLocalVideoFreeze = function (e, t) {
                            var n = 0, i = 0;
                            if (!e || !t)
                                return !1;
                            if (Object(p.isChrome)() || Object(p.isOpera)())
                                n = e.googFrameRateInput, i = e.googFrameRateSent;
                            else if (Object(p.isSafari)())
                                n = parseInt(e.framerateMean), i = parseInt(e.framesEncoded) - parseInt(t.framesEncoded);
                            else {
                                if (!Object(p.isFireFox)())
                                    return !1;
                                n = parseInt(e.framerateMean), i = parseInt(e.framesEncoded) - parseInt(t.framesEncoded);
                            }
                            return n > 5 && i < 3;
                        }, t.isRemoteVideoFreeze = function (e, t) {
                            var n = 0, i = 0;
                            if (!e || !t)
                                return !1;
                            if (Object(p.isChrome)() || Object(p.isOpera)())
                                n = e.googFrameRateReceived, i = e.googFrameRateDecoded;
                            else if (Object(p.isSafari)())
                                n = e.framerateMean, i = parseInt(e.framesDecoded) - parseInt(t.framesDecoded);
                            else {
                                if (!Object(p.isFireFox)())
                                    return !1;
                                n = parseInt(e.framesReceived) - parseInt(t.framesReceived), i = parseInt(e.framesDecoded) - parseInt(t.framesDecoded);
                            }
                            return n > 5 && n < 10 && i < 3 || n > 10 && n < 20 && i < 4 || n > 20 && i < 5;
                        }, t.isAudioFreeze = function (e) {
                            if (Object(p.isChrome)() && e) {
                                if (e.googDecodingPLC && e.googDecodingPLCCNG && e.googDecodingCTN)
                                    return (parseInt(e.googDecodingPLC) + parseInt(e.googDecodingPLCCNG)) / parseInt(e.googDecodingCTN) > 0.2;
                            } else if ((Object(p.isSafari)() || Object(p.isFireFox)()) && e.packetsLost && e.packetsReceived)
                                return parseInt(e.packetsLost) / (parseInt(e.packetsLost) + parseInt(e.packetsReceived)) > 0.2;
                            return !1;
                        }, t.isAudioDecodeFailed = function (e) {
                            return !!((Object(p.isChrome)() || Object(p.isOpera)()) && e && parseInt(e.bytesReceived) > 0 && 0 === parseInt(e.googDecodingNormal));
                        }, t.networkQualityTimer = setInterval(function () {
                            var e = t.gatewayClient.traffic_stats;
                            t.gatewayClient.dispatchEvent({
                                type: 'network-quality',
                                uplinkNetworkQuality: t.networkQualityTrans(e.uplink_network_quality),
                                downlinkNetworkQuality: t.networkQualityTrans(e.downlink_network_quality)
                            });
                        }, 2000), t.networkQualityTrans = function (e) {
                            return e >= 0 && e < 0.17 ? 1 : e >= 0.17 && e < 0.36 ? 2 : e >= 0.36 && e < 0.59 ? 3 : e >= 0.59 && e <= 1 ? 4 : e > 1 ? 5 : 0;
                        }, t.getStatsTimer = setInterval(function () {
                            var e = t.gatewayClient.traffic_stats, n = Date.now();
                            t.gatewayClient.dispatchEvent({ type: '_testException' }), Object.keys(t.localStats).length && t.exceptionMonitor.setLocalStats(t.localStats), Object.keys(t.remoteStats).length && t.exceptionMonitor.setRemoteStats(t.remoteStats);
                            var i = {};
                            Object.keys(t.gatewayClient.remoteStreams).forEach(function (o) {
                                var a = t.gatewayClient.remoteStreams[o], r = t.remoteStats[o], s = {
                                        id: o,
                                        updatedAt: n
                                    };
                                i[o] = s, s.firstFrameTime = a.firstFrameTime, r ? (s.audioTotalPlayDuration = r.audioTotalPlayDuration + 1, s.audioTotalFreezeTime = r.audioTotalFreezeTime, s.isAudioFreeze = !1, s.isAudioDecodeFailed = !1, s.videoTotalPlayDuration = r.videoTotalPlayDuration + 1, s.videoTotalFreezeTime = r.videoTotalFreezeTime, s.isVideoFreeze = !1) : (s.audioTotalPlayDuration = 1, s.audioTotalFreezeTime = 0, s.videoTotalPlayDuration = 1, s.videoTotalFreezeTime = 0);
                                var d = e && e.peer_delay && e.peer_delay.find(function (e) {
                                    return e.peer_uid == o;
                                });
                                d && (s.peer_delay = d), a && (a.isPlaying() && (s.audioDisabled = a.userMuteAudio ? '1' : '0', s.videoDisabled = a.userMuteVideo ? '1' : '0'), r && r.peer_delay && d && r.peer_delay.stream_type !== d.stream_type && t.gatewayClient.dispatchEvent({
                                    type: 'streamTypeChange',
                                    uid: o,
                                    streamType: d.stream_type
                                }), a.pc && 'established' == a.pc.state && a.pc.getStats(function (e) {
                                    if (s.pcStats = e, s.audioStats = e.find(function (e) {
                                            return 'audio' == e.mediaType && (e.id.indexOf('_recv') > -1 || e.id.toLowerCase().indexOf('inbound') > -1);
                                        }), s.videoStats = e.find(function (e) {
                                            return 'video' == e.mediaType && (e.id.indexOf('_recv') > -1 || e.id.toLowerCase().indexOf('inbound') > -1);
                                        }), r && r.audioStats && s.audioStats) {
                                        var n = parseInt(s.audioStats.bytesReceived) - parseInt(r.audioStats.bytesReceived), i = parseInt(s.audioStats.googDecodingNormal) - parseInt(r.audioStats.googDecodingNormal);
                                        if (s.audioStats.audioRecvBytesDelta = n, s.audioStats.audioDecodingNormalDelta = i, t.session.recvBytes += n, isFinite(n) && s.audioStats.timestamp) {
                                            var o = s.audioStats.timestamp.getTime() - r.audioStats.timestamp.getTime();
                                            s.audioRecvBitrate = Math.floor(8 * n / o);
                                        }
                                        t.isAudioFreeze(s.audioStats) && s.audioTotalPlayDuration > 10 && (s.audioTotalFreezeTime++, s.isAudioFreeze = !0), t.isAudioDecodeFailed(s.audioStats) && s.audioTotalPlayDuration > 10 && (s.isAudioDecodeFailed = !0), s.audioStats.audioTotalFreezeTime = s.audioTotalFreezeTime, s.audioStats.audioTotalPlayDuration = s.audioTotalPlayDuration, s.audioStats.audioFreezeRate = Math.ceil(100 * s.audioTotalFreezeTime / s.audioTotalPlayDuration);
                                    }
                                    if (r && r.videoStats && s.videoStats) {
                                        var d = parseInt(s.videoStats.bytesReceived) - parseInt(r.videoStats.bytesReceived);
                                        s.videoStats.videoRecvBytesDelta = d, t.session.recvBytes += d, isFinite(d) && s.videoStats.timestamp && (o = s.videoStats.timestamp.getTime() - r.videoStats.timestamp.getTime(), s.videoRecvBitrate = Math.floor(8 * d / o)), t.isRemoteVideoFreeze(s.videoStats, r.videoStats) && (s.videoTotalFreezeTime++, s.isVideoFreeze = !0), s.videoStats.videoTotalFreezeTime = s.videoTotalFreezeTime, s.videoStats.videoTotalPlayDuration = s.videoTotalPlayDuration, s.videoStats.videoFreezeRate = Math.ceil(100 * s.videoTotalFreezeTime / s.videoTotalPlayDuration), s.videoStats.renderRemoteWidth = a.videoWidth || s.videoStats.googFrameWidthReceived, s.videoStats.renderRemoteHeight = a.videoHeight || s.videoStats.googFrameHeightReceived;
                                    }
                                }));
                            }), t.remoteStats = i;
                            var o = {};
                            if (Object.keys(t.gatewayClient.localStreams).forEach(function (e) {
                                    var i = t.gatewayClient.localStreams[e], a = t.localStats[e], r = {
                                            id: e,
                                            updatedAt: n
                                        };
                                    o[e] = r, a ? (r.videoTotalPlayDuration = a.videoTotalPlayDuration + 1, r.videoTotalFreezeTime = a.videoTotalFreezeTime, r.isVideoFreeze = !1) : (r.videoTotalPlayDuration = 1, r.videoTotalFreezeTime = 0), i && (i.isPlaying() && (r.audioDisabled = i.userMuteAudio ? '1' : '0', r.videoDisabled = i.userMuteVideo ? '1' : '0'), i.video && i.attributes.maxVideoBW ? r.videoTargetSendBitrate = i.attributes.maxVideoBW : i.video && i.screenAttributes && (r.videoTargetSendBitrate = i.screenAttributes.maxVideoBW), i.pc && 'established' == i.pc.state && i.pc.getStats(function (e) {
                                        if (r.pcStats = e.reverse(), r.audioStats = e.find(function (e) {
                                                return 'audio' == e.mediaType && (e.id.indexOf('_send') > -1 || e.id.toLowerCase().indexOf('outbound') > -1);
                                            }), r.videoStats = e.find(function (e) {
                                                return 'video' == e.mediaType && (e.id.indexOf('_send') > -1 || e.id.toLowerCase().indexOf('outbound') > -1);
                                            }), r.audioStats && a && a.audioStats) {
                                            var n = parseInt(r.audioStats.bytesSent) - parseInt(a.audioStats.bytesSent);
                                            if (r.audioStats.audioSendBytesDelta = n, t.session.sendBytes += n, isFinite(n) && r.audioStats.timestamp) {
                                                var o = r.audioStats.timestamp.getTime() - a.audioStats.timestamp.getTime();
                                                r.audioSendBitrate = Math.floor(8 * n / o);
                                            }
                                        }
                                        if (r.videoStats && a && a.videoStats) {
                                            var s = parseInt(r.videoStats.bytesSent) - parseInt(a.videoStats.bytesSent);
                                            r.videoStats.videoSendBytesDelta = s, t.session.sendBytes += s, isFinite(s) && r.videoStats.timestamp && (o = r.videoStats.timestamp.getTime() - a.videoStats.timestamp.getTime(), r.videoSendBitrate = Math.floor(8 * s / o)), t.isLocalVideoFreeze(r.videoStats, a.videoStats) && (r.videoTotalFreezeTime++, r.isVideoFreeze = !0), r.videoStats.videoTotalFreezeTime = r.videoTotalFreezeTime, r.videoStats.videoTotalPlayDuration = r.videoTotalPlayDuration, r.videoStats.videoFreezeRate = Math.ceil(100 * r.videoTotalFreezeTime / r.videoTotalPlayDuration), r.videoStats.renderLocalWidth = i.videoWidth || r.videoStats.googFrameWidthSent, r.videoStats.renderLocalHeight = i.videoHeight || r.videoStats.googFrameHeightSent;
                                        }
                                    }));
                                }), t.localStats = o, t.session.HTTPSendBytesDelta = Object(fe.b)() - t.session.HTTPSendBytes, t.session.HTTPSendBytes = Object(fe.b)(), t.session.HTTPRecvBytesDelta = Object(fe.a)() - t.session.HTTPRecvBytes, t.session.HTTPRecvBytes = Object(fe.a)(), t.gatewayClient.socket && t.gatewayClient.socket.state === t.gatewayClient.CONNECTED) {
                                var a = t.gatewayClient.socket;
                                t.session.WSSendBytesDelta = a.getSendBytes() - t.session.WSSendBytes, t.session.WSSendBytes = a.getSendBytes(), t.session.WSRecvBytesDelta = a.getRecvBytes() - t.session.WSRecvBytes, t.session.WSRecvBytes = a.getRecvBytes();
                            }
                        }, 1000), t.gatewayClient.on('join', function () {
                            t.session = {
                                sendBytes: 0,
                                recvBytes: 0,
                                WSSendBytes: 0,
                                WSSendBytesDelta: 0,
                                WSRecvBytes: 0,
                                WSRecvBytesDelta: 0,
                                HTTPSendBytes: 0,
                                HTTPSendBytesDelta: 0,
                                HTTPRecvBytes: 0,
                                HTTPRecvBytesDelta: 0
                            };
                        }), t;
                    }(t.gatewayClient), t.configDistributManager = function (e) {
                        var t = {};
                        return t.client = e, t.client.on('config-distribute', function (n) {
                            var o = n.joinInfo, r = n.config;
                            if (r) {
                                re(r.uploadLog) || (Object(i.setParameter)('UPLOAD_LOG', r.uploadLog), a.b.reportApiInvoke(o.sid, {
                                    name: '_configDistribute',
                                    options: {
                                        feature: 'uploadLog',
                                        value: r.uploadLog
                                    }
                                })()), re(r.dualStream) || (e.isDualStream = r.dualStream, a.b.reportApiInvoke(o.sid, {
                                    name: '_configDistribute',
                                    options: {
                                        feature: 'dualStream',
                                        value: r.dualStream
                                    }
                                })()), re(r.streamFallbackOption) || t.client.on('stream-subscribed', function (e) {
                                    var n = e.stream;
                                    n ? (t.client.gatewayClient.setStreamFallbackOption(n, r.streamFallbackOption), a.b.reportApiInvoke(o.sid, {
                                        name: '_configDistribute',
                                        options: {
                                            feature: 'streamFallbackOption',
                                            value: r.streamFallbackOption,
                                            streamId: n.getId()
                                        }
                                    })()) : a.b.reportApiInvoke(o.sid, {
                                        name: '_configDistribute',
                                        options: {
                                            feature: 'streamFallbackOption',
                                            value: r.streamFallbackOption,
                                            streamId: n.getId(),
                                            err: 'invalid stream'
                                        }
                                    })();
                                });
                                try {
                                    Object.keys(r).map(function (e) {
                                        return Object(i.setParameter)(e, r[e]);
                                    });
                                } catch (e) {
                                }
                            }
                        }), t;
                    }(t), re(e.turnServer) || t.setTurnServer(e.turnServer), re(e.proxyServer) || t.setProxyServer(e.proxyServer), 'live' === t.mode && (t.gatewayClient.role = 'audience'), 'rtc' === t.mode && (t.gatewayClient.role = 'host'), t.on('onMultiIP', function (e) {
                        t.gatewayClient.closeGateway(), t.gatewayClient.socket = void 0, t.gatewayClient.hasChangeBGPAddress = !0, t.joinInfo.multiIP = e.arg.option, t.gatewayClient.state = De.CONNECTING, be(t.joinInfo, function (e) {
                            o.default.info('['.concat(t.clientId, '] Joining channel: ').concat(t.channel)), t.joinInfo.cid = e.cid, t.joinInfo.uid = e.uid, t.joinInfo.uni_lbs_ip = e.uni_lbs_ip, t.joinInfo.gatewayAddr = e.gateway_addr, t.onSuccess ? t.gatewayClient.join(t.joinInfo, t.key, function (e) {
                                o.default.info('['.concat(t.clientId, '] Join channel ').concat(t.channel, ' success'));
                                var n = t.onSuccess;
                                t.onSuccess = null, t.onFailure = null, n(e);
                            }, t.onFailure) : (t.gatewayClient.joinInfo = I()({}, t.joinInfo), t.gatewayClient.rejoin());
                        }, t.onFailure);
                    }), t.on('rejoin-start', function () {
                        t._renewSession(), a.b.sessionInit(e.sessionId, {
                            lts: new Date().getTime(),
                            extend: { rejoin: !0 },
                            cname: t.channel,
                            appid: e.appId,
                            mode: e.mode,
                            succ: !0
                        });
                    }), t.on('recover', function () {
                        t._renewSession(), a.b.sessionInit(e.sessionId, {
                            lts: new Date().getTime(),
                            extend: { recover: !0 },
                            cname: t.channel,
                            appid: e.appId,
                            mode: e.mode,
                            succ: !0
                        });
                    }), t.on('rejoin', function () {
                        var e = 2 === t.highStreamState ? 2 : 0;
                        t.highStream && 0 === e && (o.default.info('['.concat(t.clientId, '] publish after rejoin')), t.highStreamState = 2, t.lowStreamState = 2, t.publish(t.highStream, function (e) {
                            e && o.default.info('['.concat(t.clientId, '] '), e);
                        }));
                    }), t.on('streamPublished', function (e) {
                        t.hasPublished || (t.hasPublished = !0, t.gatewayClient.dispatchEvent(d({
                            type: 'stream-published',
                            stream: e.stream
                        })));
                    }), t.on('pubP2PLost', function (e) {
                        o.default.debug('['.concat(t.clientId, '] Start reconnect local peerConnection: ').concat(t.highStream.getId())), t.gatewayClient.dispatchEvent({
                            type: 'stream-reconnect-start',
                            uid: t.highStream.getId()
                        }), 1 === t.highStreamState && (t.highStreamState = 0, t.lowStreamState = 0), t._unpublish(t.highStream, function () {
                            t._publish(t.highStream, function () {
                                o.default.debug('['.concat(t.clientId, '] Reconnect local peerConnection success: ').concat(t.highStream.getId())), t.gatewayClient.dispatchEvent({
                                    type: 'stream-reconnect-end',
                                    uid: t.highStream.getId(),
                                    success: !0,
                                    reason: ''
                                });
                            }, function (e) {
                                o.default.debug('['.concat(t.clientId, '] Reconnect local peerConnection failed: ').concat(e)), t.gatewayClient.dispatchEvent({
                                    type: 'stream-reconnect-end',
                                    uid: t.highStream.getId(),
                                    success: !1,
                                    reason: e
                                });
                            });
                        }, function (e) {
                            o.default.debug('['.concat(t.clientId, '] Reconnect local peerConnection failed: ').concat(e)), t.gatewayClient.dispatchEvent({
                                type: 'stream-reconnect-end',
                                uid: t.highStream.getId(),
                                success: !1,
                                reason: e
                            });
                        });
                    }), t.on('subP2PLost', function (e) {
                        o.default.debug('['.concat(t.clientId, '] Start reconnect remote peerConnection: ').concat(e.stream.getId())), t.gatewayClient.dispatchEvent({
                            type: 'stream-reconnect-start',
                            uid: e.stream.getId()
                        }), t.gatewayClient.unsubscribe(e.stream, function () {
                            t.gatewayClient.subscribe(e.stream, function () {
                                o.default.debug('['.concat(t.clientId, '] Reconnect remote peerConnection success: ').concat(e.stream.getId())), t.gatewayClient.dispatchEvent({
                                    type: 'stream-reconnect-end',
                                    uid: e.stream.getId(),
                                    success: !1,
                                    reason: ''
                                });
                            }, function (n) {
                                o.default.debug('['.concat(t.clientId, '] Reconnect remote peerConnection failed: '), n), t.gatewayClient.dispatchEvent({
                                    type: 'stream-reconnect-end',
                                    uid: e.stream.getId(),
                                    success: !1,
                                    reason: n
                                });
                            });
                        }, function (n) {
                            o.default.debug('['.concat(t.clientId, '] " + \'Reconnect remote peerConnection failed: '), n), t.gatewayClient.dispatchEvent({
                                type: 'stream-reconnect-end',
                                uid: e.stream.getId(),
                                success: !1,
                                reason: n
                            });
                        });
                    }), xe.on('networkTypeChanged', function (e) {
                        t.gatewayClient && t.gatewayClient.dispatchEvent(e);
                        var n = I()({}, e, { type: 'network-type-changed' });
                        t.gatewayClient.dispatchEvent(n);
                    }), K.on('recordingDeviceChanged', function (e) {
                        t.gatewayClient && t.gatewayClient.dispatchEvent(e);
                        var n = I()({}, e, { type: 'recording-device-changed' });
                        t.gatewayClient.dispatchEvent(n);
                    }), K.on('playoutDeviceChanged', function (e) {
                        t.gatewayClient && t.gatewayClient.dispatchEvent(e);
                        var n = I()({}, e, { type: 'playout-device-changed' });
                        t.gatewayClient.dispatchEvent(n);
                    }), K.on('cameraChanged', function (e) {
                        t.gatewayClient && t.gatewayClient.dispatchEvent(e);
                        var n = I()({}, e, { type: 'camera-changed' });
                        t.gatewayClient.dispatchEvent(n);
                    }), t.gatewayClient.on('streamTypeChange', function (n) {
                        var i = I()({}, n, { type: 'stream-type-changed' });
                        t.gatewayClient.dispatchEvent(i), a.b.reportApiInvoke(e.sessionId, { name: 'streamTypeChange' })(null, JSON.stringify(n));
                    }), t;
                }, Fe = {
                    width: 640,
                    height: 360,
                    videoBitrate: 400,
                    videoFramerate: 15,
                    lowLatency: !1,
                    audioSampleRate: 48000,
                    audioBitrate: 48,
                    audioChannels: 1,
                    videoGop: 30,
                    videoCodecProfile: 100,
                    userCount: 0,
                    userConfigExtraInfo: {},
                    backgroundColor: 0,
                    transcodingUsers: []
                }, Be = {
                    width: 0,
                    height: 0,
                    videoGop: 30,
                    videoFramerate: 15,
                    videoBitrate: 400,
                    audioSampleRate: 44100,
                    audioBitrate: 48,
                    audioChannels: 1
                }, Ue = K.getDevices, je = F;
            t.default = {
                TranscodingUser: {
                    uid: 0,
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                    zOrder: 0,
                    alpha: 1
                },
                LiveTranscoding: Fe,
                createClient: function (e) {
                    var t = a.b.reportApiInvoke(null, {
                        name: 'createClient',
                        options: arguments,
                        tag: 'tracer'
                    });
                    (e = I()({}, e || {})).codec || (e.codec = function (e) {
                        switch (e) {
                        case 'h264_interop':
                            return 'h264';
                        default:
                            return 'vp8';
                        }
                    }(e.mode));
                    var n = function (e) {
                        return ce.includes(e.mode) ? ue.includes(e.codec) ? 'h264_interop' == e.mode && 'h264' !== e.codec && A.CLIENT_MODE_CODEC_MISMATCH : A.INVALID_CLIENT_CODEC : A.INVALID_CLIENT_MODE;
                    }(e);
                    if (n)
                        throw o.default.error('Invalid parameter setting MODE: '.concat(e.mode, ' CODEC: ').concat(e.codec, ' ERROR ').concat(n)), t(n), new Error(n);
                    return o.default.info('Creating client, MODE: '.concat(e.mode, ' CODEC: ').concat(e.codec)), function (e) {
                        switch (e.mode) {
                        case 'interop':
                        case 'h264_interop':
                            e.mode = 'live';
                            break;
                        case 'web-only':
                            e.mode = 'rtc';
                        }
                    }(e), t(null, e), Ve(e);
                },
                createStream: function (e) {
                    var t = a.b.reportApiInvoke(null, {
                        name: 'createStream',
                        options: arguments,
                        tag: 'tracer'
                    });
                    q(e, 'StreamSpec');
                    var n = e.streamID, i = e.audio, r = e.video, s = e.screen, d = (e.audioSource, e.videoSource, e.cameraId), c = e.microphoneId, u = e.mirror, l = e.extensionId, p = e.mediaSource, f = e.audioProcessing;
                    if (!re(n) && !Object(G.c)(n) && !Z(n, 1, 255))
                        throw new Error('[String streamID] Length of the string: [1,255]. ASCII characters only. [Number streamID] The value range is [0,10000]');
                    if ($(i, 'audio'), $(r, 'video'), re(s) || $(s, 'screen'), re(d) || Q(d, 'cameraId', 0, 255, !1), re(c) || Q(c, 'microphoneId', 0, 255, !1), re(l) || Q(l, 'extensionId'), re(p) || Y(p, 'mediaSource', [
                            'screen',
                            'application',
                            'window'
                        ]), re(u) || $(u, 'mirror'), !re(f)) {
                        var m = f.AGC, g = f.AEC, v = f.ANS;
                        re(m) || $(m, 'AGC'), re(g) || $(g, 'AEC'), re(v) || $(v, 'ANS');
                    }
                    o.default.debug('Create stream');
                    var S = se(e);
                    return t(), S;
                },
                Logger: o.default,
                getDevices: Ue,
                getScreenSources: je,
                getParameter: i.getParameter,
                setParameter: i.setParameter,
                checkSystemRequirements: function () {
                    var e = a.b.reportApiInvoke(null, {
                            name: 'checkSystemRequirements',
                            options: arguments,
                            tag: 'tracer'
                        }), t = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection, n = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia || navigator.mediaDevices && navigator.mediaDevices.getUserMedia, i = window.WebSocket, r = !!t && !!n && !!i, s = !1;
                    o.default.debug(p.getBrowserInfo(), 'isAPISupport:' + r), p.isChrome() && p.getBrowserVersion() >= 58 && 'iOS' !== p.getBrowserOS() && (s = !0), p.isFireFox() && p.getBrowserVersion() >= 56 && (s = !0), p.isOpera() && p.getBrowserVersion() >= 45 && (s = !0), p.isSafari() && p.getBrowserVersion() >= 11 && (s = !0), (p.isWeChatBrowser() || p.isQQBrowser()) && 'iOS' !== p.getBrowserOS() && (s = !0), p.isSupportedPC() || p.isSupportedMobile() || (s = !1);
                    var d = r && s;
                    return e(null, d), d;
                },
                getSupportedCodec: de.getSupportedCodec,
                VERSION: i.VERSION,
                BUILD: i.BUILD,
                AUDIO_SAMPLE_RATE_32000: 32000,
                AUDIO_SAMPLE_RATE_44100: 44100,
                AUDIO_SAMPLE_RATE_48000: 48000,
                VIDEO_CODEC_PROFILE_BASELINE: 66,
                VIDEO_CODEC_PROFILE_MAIN: 77,
                VIDEO_CODEC_PROFILE_HIGH: 100,
                REMOTE_VIDEO_STREAM_HIGH: 0,
                REMOTE_VIDEO_STREAM_LOW: 1,
                REMOTE_VIDEO_STREAM_MEDIUM: 2
            };
        }
    ]).default;
});
}
// fuse-box-css/index.js
$fsx.f[10] =
function(module,exports){
var __filename = "index.js";
var runningInBrowser = true || 'browser' === 'electron';
var cssHandler = function (__filename, contents) {
    if (runningInBrowser) {
        var styleId = __filename.replace(/[\.\/]+/g, '-');
        if (styleId.charAt(0) === '-')
            styleId = styleId.substring(1);
        var exists = document.getElementById(styleId);
        if (!exists) {
            var s = document.createElement(contents ? 'style' : 'link');
            s.id = styleId;
            s.type = 'text/css';
            if (contents) {
                s.innerHTML = contents;
            } else {
                s.rel = 'stylesheet';
                s.href = __filename;
            }
            document.getElementsByTagName('head')[0].appendChild(s);
        } else {
            if (contents) {
                exists.innerHTML = contents;
            }
        }
    }
};
if (typeof FuseBox !== 'undefined' && runningInBrowser) {
    FuseBox.on('async', function (name) {
        if (/\.css$/.test(name)) {
            cssHandler(name);
            return false;
        }
    });
}
module.exports = cssHandler;
}
$fsx.r(0)
})($fsx);

