
window.onload=function(){
 
console.log("load");
}

var el = document.getElementById('run');
console.log(el);
if(el){
   el.addEventListener("click", () => {
        // Add your code here
        var code = document.getElementById("code").value;

        chrome.tabs.executeScript(null,{code:"document.body.style.backgroundColor='red'"});



        chrome.tabs.executeScript({
            code: code
          });
    
        console.log("click");


        chrome.browserAction.onClicked.addListener(function(tab) {
            console.log("browser click");
            chrome.tabs.executeScript({
                code: 'var code = document.getElementById("code").value; eval(code);'
            });
        });
    });

}

