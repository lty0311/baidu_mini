// 动态添加js文件
function loadJavaScriptFile(path) {
  var script = document.createElement("script");
  script.src = path;
  document.body.appendChild(script);
}


var targetDiv = document.querySelector('#right_ad');
targetDiv.appendChild('<ins class="adsbygoogle"\n' +
  '     style="display:block"\n' +
  '     data-ad-format="autorelaxed"\n' +
  '     data-ad-client="ca-pub-9761395598322566"\n' +
  '     data-ad-slot="6980949150"></ins>');
// 创建 script 元素
var script_adsbygoogle = document.createElement('script');
script_adsbygoogle.textContent = `(adsbygoogle = window.adsbygoogle || []).push({});`;
targetDiv.appendChild(script_adsbygoogle);

window.onload = function () {
  setTimeout(() => {
    loadJavaScriptFile('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
  }, 1);
};