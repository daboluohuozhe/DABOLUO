[rewrite_local]
# 拦截所有m3u8链接并发送通知
^https?:\/\/[^\/]+\.m3u8.*$ url script-response-body https://raw.githubusercontent.com/daboluohuozhe/DABOLUO/refs/heads/main/TONGSHA2.js