document.getElementById('run').addEventListener('click', () => {
    const code = document.getElementById('code').value;
    chrome.tabs.executeScript({code});
});



document.addEventListener('DOMContentLoaded', function() {
    var runButton = document.getElementById('run');
    var commandBox = document.getElementById('command');
  
    runButton.addEventListener('click', function() {
      var command = commandBox.value;
      chrome.tabs.executeScript({ code: command });
    });
  });



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("read-btn").addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript(
          {
            target: { tabId: tabs[0].id },
            function: function () {


              let allowedTags = ['INPUT', 'TEXTAREA', 'BUTTON', 'SELECT', 'OPTION', 'OPTGROUP', 'FIELDSET', 'LABEL'];
              let form = document.querySelector('form');
              if (form) {

                // Remove all scripts from the page
                let scripts = form.getElementsByTagName('script');
                for (let i = 0; i < scripts.length; i++) {
                    scripts[i].parentNode.removeChild(scripts[i]);
                }
                
                let elements = form.getElementsByTagName('*');

                let formElements = '';
    
                for (let i = 0; i < elements.length; i++) {
                    let tag = elements[i].tagName;
                    if (allowedTags.indexOf(tag) !== -1) {
                        formElements += elements[i].outerHTML;
                    } else if(form.lastChild === elements[i]) {
                        let text = elements[i].textContent.trim();
                        if (text !== '') {
                            formElements += text;
                        }
                    }
                }
    
                return formElements;
            }
            else {
                return null;
              }
            },
          },
          function (result) {
            document.getElementById("form-data").innerHTML = result[0].result;
          }
        );
      });
    });
  });
  