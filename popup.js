document.getElementById('popup-send').onclick = function() {
  const msg = document.getElementById('popup-message').value;
  document.getElementById('zrom-popup-result').innerText = 'AI処理中...';
  setTimeout(()=>{
    document.getElementById('zrom-popup-result').innerText = '（例）AI提案・要約・自動ToDoなど: ' + msg;
  }, 900);
};
