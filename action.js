//when i click on my button

function printTags() {
    // Get all HTML form elements on the page
    const forms = document.querySelectorAll("form");

    // Loop through the forms and get all HTML tags
    let tags = "";
    forms.forEach((form) => {
      const formTags = form.outerHTML;
      tags += formTags;
    });

    // Create a new element to display the HTML tags
    const div = document.createElement("div");
    div.innerHTML = tags;

    // Add the new element to the page
    document.body.appendChild(div);
  }

document.getElementById('fillForm').addEventListener('click', function(){
    //grab the text filed value from my tool

    printTags();

      // Run the printTags function when the page has loaded
    //   window.addEventListener("load", printTags);


    var formRead = document.getElementsByTagName("form");

    // Print "form readed" on the page
        document.write("form readed");
        document.write(formRead.innerHTML);
        alert("here");






    // var intValue = document.getElementById('apivalue').value;

    // chrome.tabs.executeScript({
    //     //send the value to be used by our script
    //     code: `var value = ${intValue};`
    // }, function() {
    //     //run the script in the file injector.js
    //     chrome.tabs.executeScript({
    //         file: 'injector.js'
    //     });
    // });
  });