document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('btn').addEventListener('click', function() {
    var result = document.getElementById('result');
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4){
        if(xhr.status == 200){
          obj = JSON.parse(xhr.responseText);
          var resultText = "パッケージ名: " + obj.info.name + "<br>" + "バージョン: " +  obj.info.version + "<br>" 
                           + "公式URL: " + "<a href=\"" + obj.info.home_page +  "\">"+  obj.info.home_page + "</a>" + "<br>" 
                           + "パッケージURL: " + "<a href=\"" + obj.info.package_url + "\">" + obj.info.package_url + "</a>" + "<br>" 
                           + "ライセンス: " + obj.info.license;
          result.innerHTML = resultText;
        } else {
         result.innerHTML = "サーバーエラー";
        }
    } else {
      result.innerHTML = "通信中";
    }
  };
  xhr.open('GET', 'https://pypi.org/pypi/' + document.getElementById('name').value + '/json', true);
  xhr.send(null);
 }, false);
}, false);
