const textArea = document.getElementById("textArea");
const resetBtn = document.getElementById("reset");
const buttons = document.getElementById("btns");
const boldBtn = document.getElementById("bold");
const italBtn = document.getElementById("ital");
const underBtn = document.getElementById("under");
const strikeBtn = document.getElementById("strike");
const spoilBtn = document.getElementById("spoil");
const quoteBtn = document.getElementById("quote");
const lineBtn = document.getElementById("line");
const blockBtn = document.getElementById("block");
let boldOn, italOn, underOn, strikeOn, spoilOn, quoteOn, lineOn, blockOn;
boldOn = italOn = underOn = strikeOn = spoilOn = quoteOn = lineOn = blockOn = false;
function resetFn() {
    boldBtn.style.cursor = italBtn.style.cursor = underBtn.style.cursor = strikeBtn.style.cursor = spoilBtn.style.cursor = quoteBtn.style.cursor = lineBtn.style.cursor = blockBtn.style.cursor = "pointer";
    boldBtn.style.color = italBtn.style.color = underBtn.style.color = strikeBtn.style.color = spoilBtn.style.color = quoteBtn.style.color = lineBtn.style.color = blockBtn.style.color = "white";
    textArea.readOnly = false;
    textArea.value = "";
    textArea.style.fontWeight = "normal";
    textArea.style.fontStyle = "";
    textArea.style.textDecoration = "none";
    textArea.style.color = "white";
    textArea.style.fontFamily = "JetBrains Mono";
    boldOn = italOn = underOn = strikeOn = spoilOn = quoteOn = lineOn = blockOn = false;
}
function boldFn(text) {
    if (boldOn === false) {
        text = "**" + text.concat("**");
        textArea.style.fontWeight = "bold";
        boldBtn.style.cursor = "default";
        boldBtn.style.color = 'gray';
        textArea.value = text;
        textArea.readOnly = true;
        boldOn = true;
    }
}
function italFn(text) {
    if (italOn === false) {
        text = "*" + text.concat("*");
        textArea.style.fontStyle = "italic";
        italBtn.style.cursor = "default";
        italBtn.style.color = 'gray';
        textArea.value = text;
        textArea.readOnly = true;
        italOn = true;
    }
}
function underFn(text) {
    if (underOn === false) {
        text = "__" + text.concat("__");
        textArea.style.textDecoration = "underline";
        underBtn.style.cursor = "default";
        underBtn.style.color = 'gray';
        textArea.value = text;
        textArea.readOnly = true;
        underOn = true;
    }
}
function strikeFn(text) {
    if (strikeOn === false) {
        text = "~~" + text.concat("~~");
        textArea.style.textDecoration = "line-through";
        strikeBtn.style.cursor = "default";
        strikeBtn.style.color = 'gray';
        textArea.value = text;
        textArea.readOnly = true;
        strikeOn = true;
    }
}
function spoilFn(text) {
    if (spoilOn === false) {
        text = "||" + text.concat("||");
        textArea.style.color = "#999999";
        spoilBtn.style.cursor = "default";
        spoilBtn.style.color = 'gray';
        textArea.value = text;
        textArea.readOnly = true;
        spoilOn = true;
    }
}
function quoteFn(text) {
    if (quoteOn === false) {
        text = "> " + text;
        quoteBtn.style.cursor = "default";
        quoteBtn.style.color = 'gray';
        textArea.value = text;
        textArea.readOnly = true;
        quoteOn = true;
    }
}
function lineFn(text) {
    if (lineOn === false) {
        text = "`" + text.concat("`");
        textArea.style.fontFamily = "monospace";
        lineBtn.style.cursor = "default";
        lineBtn.style.color = 'gray';
        textArea.value = text;
        textArea.readOnly = true;
        lineOn = true;
    }
}
function blockFn(text) {
    if (blockOn === false) {
        text = "```" + text.concat("```");
        textArea.style.fontFamily = "monospace";
        blockBtn.style.cursor = "default";
        blockBtn.style.color = 'gray';
        textArea.value = text;
        textArea.readOnly = true;
        blockOn = true;
    }
}
