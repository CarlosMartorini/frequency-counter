document.getElementById("countButton").onclick = function() {  

    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase(); 
    typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
    words = typedText.split(/\s/);

    const letterCounts = {};
    const wordCounters = {};

    for (let i = 0; i < typedText.length; i++) {
        
        currentLetter = typedText[i];

        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1; 
        } else { 
            letterCounts[currentLetter]++; 
        }

     }

     for (let i = 0; i < typedText.length; i++) {
        
        currentWord = words[i];

        if (wordCounters[currentWord] === undefined) {
            wordCounters[currentWord] = 1; 
        } else { 
            wordCounters[currentWord]++; 
        }

     }

     for (let letter in letterCounts) { 
        const span = document.createElement("span"); 
        const textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", "); 
        span.appendChild(textContent); 
        document.getElementById("lettersDiv").appendChild(span); 
        span.classList.add('letters');
     }

     for (let word in wordCounters) { 
        const span = document.createElement("span"); 
        const textContent = document.createTextNode('"' + word + "\": " + wordCounters[word] + ", "); 
        span.appendChild(textContent); 
        document.getElementById("wordsDiv").appendChild(span); 
        span.classList.add('words');
     }

 }