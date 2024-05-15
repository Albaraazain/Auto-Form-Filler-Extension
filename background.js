// basic script that logs a message when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
  });
  
//   The background script handles events and manages the overall behavior of the extension.