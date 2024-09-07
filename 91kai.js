/*
[rewrite_local]

https:\/\/\S+\.m3u8\?token=[^&]+&c=https:\/\/\S+ url script-request-header https://raw.githubusercontent.com/daboluohuozhe/DABOLUO/main/91wo.js

[mitm]
hostname = *.cloudfront.net, *.ninghaixin.club, *.wbwxe.com, wbapi.wbwxe.com, d13dw8kzjnavm.cloudfront.net, hxnd.*.vip, %APPEND% *play.*.cn,long.*.cn
*/
[MITM]
hostname =  %APPEND% *play.*.cn,long.*.cn,*.cloudfront.net, *.ninghaixin.club, *.wbwxe.com, wbapi.wbwxe.com, d13dw8kzjnavm.cloudfront.net, hxnd.*.vip,
[Script]
瑟瑟视频 = type=http-request,pattern=^https:\/\/[^\/]*\..*\.cn\/\w+\/[a-z0-9]{32}\/[a-z0-9]{32}\.m3u8(\?.*)?,requires-body=0,script-path=https://raw.githubusercontent.com/daboluohuozhe/DABOLUO/main/TONGSHA.js,script-update-interval=0
