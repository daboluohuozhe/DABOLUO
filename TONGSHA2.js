const $ = new Env("M3U8拦截器");
let url = $request.url;

// yuheng基础上更改保留auth_key
url = url.replace(/\/\/(?!long)[^\.]+\./, '//long.').replace(/\.m3u8/, '.m3u8');

// 直接发送通知，不修改响应
$.msg("🎬 M3U8链接已复制", "链接已准备好，可直接粘贴", "", url);

$done({});