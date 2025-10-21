/*
[rewrite_local]

https:\/\/\S+\.m3u8\?token=[^&]+&c=https:\/\/\S+ url script-request-header https://raw.githubusercontent.com/daboluohuozhe/DABOLUO/main/91wo.js

[mitm]
hostname = *.cloudfront.net, *.ninghaixin.club, *.wbwxe.com, wbapi.wbwxe.com, d13dw8kzjnavm.cloudfront.net, hxnd.*.vip, %APPEND% *play.*.cn,long.*.cn
*/
[MITM]
hostname =  %APPEND% *play.*.cn,long.*.cn,*.zhuoxianyx.xyz,tt2340sdf.com,*.cloudfront.net, *.ninghaixin.club, *.wbwxe.com, wbapi.wbwxe.com, d13dw8kzjnavm.cloudfront.net, hxnd.*.vip,*.tuplrf.cn
[Script]
瑟瑟视频 = type=http-request,pattern=^https:\/\/.+\/[^\/]+\.m3u8(?:\?.*)?$,requires-body=0,script-path=https://raw.githubusercontent.com/daboluohuozhe/DABOLUO/main/TONGSHA2.js,script-update-interval=0
