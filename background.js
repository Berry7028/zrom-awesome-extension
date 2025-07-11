chrome.runtime.onInstalled.addListener(() => {
  console.log('ZROM 拡張機能: インストールされました');
});

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content.js']
  });
});
