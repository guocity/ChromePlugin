function executeCode() {
    const code = document.getElementById('code').value;
    eval(code);
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    button.innerText = 'Run Code';
    button.addEventListener('click', executeCode);
  
    const textarea = document.createElement('textarea');
    textarea.id = 'code';
  
    const container = document.createElement('div');
    container.appendChild(textarea);
    container.appendChild(button);
  
    document.body.appendChild(container);
  });
  