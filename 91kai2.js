/*
[rewrite_local]

https:\/\/\S+\.m3u8\?token=[^&]+&c=https:\/\/\S+ url script-request-header https://raw.githubusercontent.com/daboluohuozhe/DABOLUO/main/91wo.js

[mitm]
hostname = *.cloudfront.net, *.ninghaixin.club, *.wbwxe.com, wbapi.wbwxe.com, d13dw8kzjnavm.cloudfront.net, hxnd.*.vip, %APPEND% *play.*.cn,long.*.cn
*/
[MITM]
hostname =  %APPEND% *play.*.cn,long.*.cn,*.zhuoxianyx.xyz,tt2340sdf.com,*.cloudfront.net, *.ninghaixin.club, *.wbwxe.com, wbapi.wbwxe.com, d13dw8kzjnavm.cloudfront.net, hxnd.*.vip,*.tuplrf.cn
[Script]
瑟瑟视频 = type=http-request,pattern=^https:\/\/[^\/]*\..*\.cn\/\w+\/[a-z0-9]{32}\/[a-z0-9]{32}\.m3u8(\?.*)?,requires-body=0,script-path=https://raw.githubusercontent.com/daboluohuozhe/DABOLUO/main/TONGSHA.js,script-update-interval=0
// 处理返回的 m3u8 地址，并跳转到 nPlayer 播放器
function handleM3U8Request(request) {
    let url = request.url;
    if (url.match(/\.m3u8/)) {
        // 构建nPlayer的URL Scheme
        let nPlayerURL = `nplayer://${url}`;
        // 返回nPlayer URL进行跳转
        $done({ url: nPlayerURL });
    }
}

// 监听 m3u8 请求并调用处理函数
if ($request.url.match(/^https:\/\/.*\.m3u8/)) {
    handleM3U8Request($request);
} else {
    $done({});
}
