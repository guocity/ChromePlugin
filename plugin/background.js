chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if (msg.command && (msg.command == "runCode")) {
      eval(msg.code);
    }
  });