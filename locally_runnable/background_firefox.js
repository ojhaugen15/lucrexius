browser.action.onClicked.addListener(function (tab) {
 browser.scripting.executeScript({
  target: { tabId: tab.id },
  files: ["content-script.js"]
 })
})
