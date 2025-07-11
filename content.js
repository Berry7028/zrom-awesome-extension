function showZromHelper() {
  let el = document.getElementById('zrom-helper');
  if (el) return;
  el = document.createElement('div');
  el.id = 'zrom-helper';
  el.style.position = 'fixed';
  el.style.bottom = '20px';
  el.style.right = '20px';
  el.style.width = '320px';
  el.style.height = '440px';
  el.style.zIndex = '99999';
  el.style.background = '#fff';
  el.style.boxShadow = '0 4px 16px rgba(0,0,0,0.16)';
  el.style.borderRadius = '12px';
  el.style.padding = '18px';
  el.innerHTML = '<b>ZROM AIアシスタント</b><div style="margin:12px 0;">どんな質問もどうぞ！</div><textarea id="zrom-input" style="width:100%;height:80px;"></textarea><button style="width:100%;margin-top:8px;" id="zrom-send">送信</button><div id="zrom-result" style="margin:12px 0;min-height:60px;"></div>';
  document.body.appendChild(el);

  document.getElementById('zrom-send').onclick = function() {
    const text = document.getElementById('zrom-input').value;
    document.getElementById('zrom-result').innerHTML = 'AI処理中...';
    setTimeout(()=> {
      document.getElementById('zrom-result').innerHTML = '（例）要約・ToDo・Web自動操作案など: ' + text;
    }, 900);
  };
}

showZromHelper();
