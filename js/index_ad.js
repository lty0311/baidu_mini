// 动态添加js文件
function loadJavaScriptFile(path) {
  var script = document.createElement("script");
  script.src = path;
  document.body.appendChild(script);
}


// 创建 script 元素
var script = document.createElement('script');
// 设置 script 的 src 属性
script.src = '/js/index_ad_right.js';
// 可选：设置其他属性，例如 type
script.type = 'text/javascript';
// 将 script 插入到 #right_ad 元素内
document.querySelector('#right_ad').appendChild(script);

window.onload = function () {
  setTimeout(() => {
    loadJavaScriptFile('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
  }, 1);
};