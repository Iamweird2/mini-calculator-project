const outputDisplay = document.querySelector(".output");
let buffer = "0";
let previousOperator = null;
let runningTotal = 0;


document
    .querySelector(".calculator-body")
    .addEventListener("click", function(event){
        buttonClick(event.target.innerText);
    })
    function buttonClick(innerText){
        if(isNaN(parseInt(innerText))){
            handleSymbol(innerText);
        }else{
            handleNumber(innerText);
        }
        refractor();
    }

    function handleNumber(innerText){
        if(buffer === "0"){
            buffer = innerText;
        }
        else{
            buffer += innerText; 
        }
    }

    function handleSymbol(innerText){
        switch (innerText){
            case "C":
                buffer = "0";
                runningTotal = 0;
                previousOperator = null;
                break;
            case "←":
                if (buffer.length ===  1){
                    buffer = "0";
                }
                else{
                buffer = outputDisplay.innerText.slice(0, -1);

                }
                break;
            case "=":
                if (previousOperator === null){
                    return; 
              }
              flushOperation(parseInt(buffer));
              previousOperator = null;
              buffer = "" + runningTotal;
              runningTotal = 0;
              break;
        default: handleMath(innerText);
              break 
        }
    }

    function flushOperation(intBuffer){
        if (previousOperator === "+"){
            runningTotal += intBuffer;
        }else if (previousOperator === "-"){
            runningTotal -= intBuffer;
        }else if (previousOperator === "×"){
            runningTotal *= intBuffer;
        }else{
            runningTotal /= intBuffer;
        }
    }

    function handleMath(innerText){
        const intBuffer = parseInt(buffer);
        if (runningTotal === 0){
            runningTotal = intBuffer;
        }
        else{
            flushOperation(intBuffer);
        }
        previousOperator = innerText;
        buffer = "0";
    }
function refractor(){
    outputDisplay.innerText = buffer;
    if (outputDisplay.innerText.length > 12){
        outputDisplay.innerText.slice(0, -1);
    }
}




                    // OR


