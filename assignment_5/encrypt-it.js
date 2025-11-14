/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    console.log("Window loaded!");
    
    document.getElementById("encrypt-it").addEventListener("click", handleClick);
    document.getElementById("reset").addEventListener("click", handleReset);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  function handleClick() {
    console.log("Button clicked!");
    
    // Get the text from the textarea
    let inputText = document.getElementById("input-text").value;
    
    // Encrypt the text using shift cipher
    let encryptedText = shiftCipher(inputText);
    
    // Display the encrypted text in the output paragraph
    document.getElementById("result").textContent = encryptedText;
  }

  function handleReset() {
    document.getElementById("input-text").value = "";
    document.getElementById("result").textContent = "";
  }

  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        // Not a letter, keep it as is
        result += text[i];
      } else if (text[i] === 'z') {
        // 'z' wraps around to 'a'
        result += 'a';
      } else {
        // Letter is between 'a' and 'y'
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    
    return result;
  }

})();
