var websock_list = [];
// var websock = null;
// var global_callback = null;
var serverPort = '8866';	//webSocket连接端口


function uri2IP(uri) {
    //var curIP = window.location.hostname;
    var curIP = uri.split(/@|:/)[1];
    return curIP;
}

function initWebSocket(uri, onmessage_fun) { //初始化weosocket, 参数为连接的uri
    let IP = uri2IP(uri);
    //ws地址
    var wsuri = "ws://" + IP + ":" + serverPort;
    // websock = new WebSocket(wsuri);
    if (websock_list[IP] == null){                  //当没有该IP的websocket时,建立连接,否则忽略
        websock_list[IP] = {};
        websock_list[IP].websock = new WebSocket(wsuri);
        websock_list[IP].websock.onmessage = function (e) {
            websocketonmessage(e, onmessage_fun);
        }
        websock_list[IP].websock.onclose = function (e) {
            websocketclose(e);
        }
        websock_list[IP].websock.onopen = function () {
            websocketOpen();
        }
        //连接发生错误的回调方法
        websock_list[IP].websock.onerror = function () {
            console.log("WebSocket连接发生错误");
        }
        //加入到websock_list中
        console.log(websock_list);
        // websock_list.push(socket_info);
    } else {
        console.log("websock已存在,不重复连接");
    }
}

// 实际调用的方法
function sendSock(uri, agentData, callback) {
    let IP = uri2IP(uri);
    // global_callback = callback;
    let websock = websock_list[IP].websock;
    if (websock.readyState === websock.OPEN) {
        //若是ws开启状态
        websocketsend(IP, agentData)
    } else if (websock.readyState === websock.CONNECTING) {
        // 若是 正在开启状态，则等待1s后重新调用
        setTimeout(function () {
            sendSock(uri, agentData, callback);
        }, 1000);
    } else {
        // 若未开启 ，则等待1s后重新调用
        setTimeout(function () {
            sendSock(uri, agentData, callback);
        }, 1000);
    }
}

//数据接收
function websocketonmessage(e, onmessage_fun) {
    onmessage_fun(JSON.parse(e.data));
}

//数据发送
function websocketsend(IP, agentData) {
    let websock = websock_list[IP].websock;
    websock.send(JSON.stringify(agentData));
}

//关闭
function websocketclose(e) {
    console.log("connection closed (" + e.code + ")");
}

function websocketOpen(e) {
    console.log("连接成功");
}

export { initWebSocket, sendSock }
