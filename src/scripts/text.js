const boldBtn = document.getElementById("bold");
const italBtn = document.getElementById("ital");
const underBtn = document.getElementById("under");
const strikeBtn = document.getElementById("strike");
const spoilBtn = document.getElementById("spoil");
const quoteBtn = document.getElementById("quote");
const lineBtn = document.getElementById("line");
const blockBtn = document.getElementById("block");
const slashBtn = document.getElementById("slash");
let slashText;
let boldOn, italOn, underOn, strikeOn, spoilOn, quoteOn, lineOn, blockOn, slashOn;
boldOn = italOn = underOn = strikeOn = spoilOn = quoteOn = lineOn = blockOn = slashOn = false;
function boldFn(text) {
    if (boldOn === false) {
        text = "**" + text.concat("**");
        textArea.style.fontWeight = "bold";
        boldBtn.style.color = 'gray';
        textArea.value = text;
        boldOn = true;
    }
    else if (boldOn === true) {
        text = text.replace(/\*\*/g, "");
        textArea.style.fontWeight = "normal";
        boldBtn.style.color = 'white';
        textArea.value = text;
        boldOn = false;
    }
}
function italFn(text) {
    if (italOn === false) {
        text = "*" + text.concat("*");
        textArea.style.fontStyle = "italic";
        italBtn.style.color = 'gray';
        textArea.value = text;
        italOn = true;
    }
    else if (italOn === true) {
        text = text.replace(/\*/g, "");
        textArea.style.fontStyle = "normal";
        italBtn.style.color = 'white';
        textArea.value = text;
        italOn = false;
    }
}
function underFn(text) {
    if (underOn === false) {
        text = "__" + text.concat("__");
        textArea.style.textDecoration = "underline";
        underBtn.style.color = 'gray';
        textArea.value = text;
        underOn = true;
    }
    else if (underOn === true) {
        text = text.replace(/__/g, "");
        textArea.style.textDecoration = "none";
        underBtn.style.color = 'white';
        textArea.value = text;
        underOn = false;
    }
}
function strikeFn(text) {
    if (strikeOn === false) {
        text = "~~" + text.concat("~~");
        textArea.style.textDecoration = "line-through";
        strikeBtn.style.color = 'gray';
        textArea.value = text;
        strikeOn = true;
    }
    else if (strikeOn === true) {
        text = text.replace(/~~/g, "");
        textArea.style.textDecoration = "none";
        strikeBtn.style.color = 'white';
        textArea.value = text;
        strikeOn = false;
    }
}
function spoilFn(text) {
    if (spoilOn === false) {
        text = "||" + text.concat("||");
        textArea.style.color = "#999999";
        spoilBtn.style.color = 'gray';
        textArea.value = text;
        spoilOn = true;
    }
    else if (spoilOn === true) {
        text = text.replace(/\|\|/g, "");
        textArea.style.color = "white";
        spoilBtn.style.color = 'white';
        textArea.value = text;
        spoilOn = false;
    }
}
function quoteFn(text) {
    if (quoteOn === false) {
        text = "> " + text;
        quoteBtn.style.color = 'gray';
        textArea.value = text;
        quoteOn = true;
    }
    else if (quoteOn === true) {
        text = text.replace(/> /g, "");
        quoteBtn.style.color = 'white';
        textArea.value = text;
        quoteOn = false;
    }
}
function lineFn(text) {
    if (lineOn === false) {
        text = "`" + text.concat("`");
        textArea.style.fontFamily = "monospace";
        lineBtn.style.color = 'gray';
        textArea.value = text;
        lineOn = true;
    }
    else if (lineOn === true) {
        text = text.replace(/`/g, "");
        lineBtn.style.color = 'white';
        textArea.style.fontFamily = "JetBrains Mono";
        textArea.value = text;
        lineOn = false;
    }
}
function blockFn(text) {
    if (blockOn === false) {
        text = "```" + text.concat("```");
        textArea.style.fontFamily = "monospace";
        blockBtn.style.color = 'gray';
        textArea.value = text;
        blockOn = true;
    }
    else if (blockOn === true) {
        text = text.replace(/```/g, "");
        blockBtn.style.color = 'white';
        textArea.style.fontFamily = "JetBrains Mono";
        textArea.value = text;
        blockOn = false;
    }
}
function slashFn(text) {
    console.log(textArea.value.length);
    if (textArea.value.length > 32) {
        alert("Please enter a string that is less than 32 characters!");
    }
    else {
        if (slashOn === false) {
            slashText = text;
            text = "<" + "\/" + text.concat(":0>").replaceAll(' ', '');
            textArea.style.color = "#6D81D0";
            slashBtn.style.color = 'gray';
            textArea.value = text;
            slashOn = true;
        }
        else if (slashOn === true) {
            text = slashText;
            slashBtn.style.color = 'white';
            textArea.style.color = "white";
            textArea.value = text;
            slashOn = false;
        }
    }
}
