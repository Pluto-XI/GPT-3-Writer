const generateCompletionAction = async (info) => {};

chrome.contextMenus.create({
  id: "context-run",
  title: "Generate blog post",
  contexts: ["selection"],
});

// Add listener
chrome.contextMenus.onClicked.addListener(generateCompletionAction);
