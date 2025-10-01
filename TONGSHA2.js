const $ = new Env("M3U8调试器");

console.log("🚀 脚本开始执行");
console.log("请求URL: " + $request.url);
console.log("请求方法: " + $request.method);
console.log("请求头: " + JSON.stringify($request.headers));

let url = $request.url;

// 检查是否是m3u8链接
if (url.includes('.m3u8')) {
    console.log("✅ 确认是M3U8链接");
    
    // 应用你的处理逻辑
    let originalUrl = url;
    url = url.replace(/\/\/(?!long)[^\.]+\./, '//long.').replace(/\.m3u8/, '.m3u8');
    
    console.log("原始URL: " + originalUrl);
    console.log("处理后URL: " + url);
    
    // 发送测试通知
    $.msg(
        "M3U8测试通知", 
        "如果能收到这个通知说明配置正确",
        "链接: " + url.substring(0, 50) + "...",
        {"url": url}
    );
    
    console.log("📢 测试通知已发送");
} else {
    console.log("❌ 不是M3U8链接，跳过");
    $.msg("调试", "脚本运行但未检测到M3U8", "URL: " + url);
}

$done({});
