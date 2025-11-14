
function makeBigger() {
    alert("Hello, world!");
    document.getElementById("textArea").style.fontSize = "24pt";
}

function applyFancy() {
    document.getElementById("textArea").style.fontWeight = "bold";
    document.getElementById("textArea").style.color = "blue";
    document.getElementById("textArea").style.textDecoration = "underline";
}

function removeFancy() {
    document.getElementById("textArea").style.fontWeight = "normal";
    document.getElementById("textArea").style.color = "black";
    document.getElementById("textArea").style.textDecoration = "none";
}

function addMoo() {
    var textArea = document.getElementById("textArea");
    var text = textArea.value;
    
    var sentences = text.split(".");
    var result = [];
    
    for (var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i].trim();
        if (sentence.length > 0) {
            var words = sentence.split(" ");
            if (words.length > 0) {
                words[words.length - 1] = words[words.length - 1] + "-Moo";
            }
            result.push(words.join(" "));
        }
    }
    
    textArea.value = result.join(". ");
    
    textArea.value = textArea.value.toUpperCase();
}