// 动态添加js文件
function loadJavaScriptFile(path) {
  var script = document.createElement("script");
  script.src = path;
  document.body.appendChild(script);
}




window.onload = function () {
  setTimeout(() => {
    loadJavaScriptFile('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9761395598322566');
  }, 1);
};