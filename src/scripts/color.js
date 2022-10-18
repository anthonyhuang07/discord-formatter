const redBtn = document.getElementById("red");
const orangeBtn = document.getElementById("orange");
const yellowBtn = document.getElementById("yellow");
const greenBtn = document.getElementById("green");
const turqBtn = document.getElementById("turq");
const blueBtn = document.getElementById("blue");
const grayBtn = document.getElementById("gray");
let redOn, orangeOn, yellowOn, greenOn, turqOn, blueOn, grayOn;
redOn = orangeOn = yellowOn = greenOn = turqOn = blueOn = grayOn = false;
function redFn(text) {
    if (redOn === false) {
        text = "```diff\n- " + text.concat("\n```");
        redBtn.style.color = 'gray';
        textArea.style.color = '#D5322F';
        textArea.value = text;
        orangeBtn.style.display = yellowBtn.style.display = greenBtn.style.display = turqBtn.style.display = blueBtn.style.display = grayBtn.style.display = "none";
        redOn = true;
    }
    else if (redOn === true) {
        text = text.replace(/```diff\n- |\n```/g, "");
        redBtn.style.color = '#D5322F';
        textArea.style.color = 'white';
        textArea.value = text;
        orangeBtn.style.display = yellowBtn.style.display = greenBtn.style.display = turqBtn.style.display = blueBtn.style.display = grayBtn.style.display = "inline-block";
        redOn = false;
    }
}
function orangeFn(text) {
    if (orangeOn === false) {
        text = "```css\n[" + text.concat("]\n```");
        orangeBtn.style.color = 'gray';
        textArea.style.color = '#B7471B';
        textArea.value = text;
        redBtn.style.display = yellowBtn.style.display = greenBtn.style.display = turqBtn.style.display = blueBtn.style.display = grayBtn.style.display = "none";
        orangeOn = true;
    }
    else if (orangeOn === true) {
        text = text.replace(/```css\n\[|]\n```/g, "");
        orangeBtn.style.color = '#B7471B';
        textArea.style.color = 'white';
        textArea.value = text;
        redBtn.style.display = yellowBtn.style.display = greenBtn.style.display = turqBtn.style.display = blueBtn.style.display = grayBtn.style.display = "inline-block";
        orangeOn = false;
    }
}
function yellowFn(text) {
    if (yellowOn === false) {
        text = "```fix\n" + text.concat("\n```");
        yellowBtn.style.color = 'gray';
        textArea.style.color = '#B18602';
        textArea.value = text;
        redBtn.style.display = orangeBtn.style.display = greenBtn.style.display = turqBtn.style.display = blueBtn.style.display = grayBtn.style.display = "none";
        yellowOn = true;
    }
    else if (yellowOn === true) {
        text = text.replace(/```fix\n|\n```/g, "");
        yellowBtn.style.color = '#B18602';
        textArea.style.color = 'white';
        textArea.value = text;
        redBtn.style.display = orangeBtn.style.display = greenBtn.style.display = turqBtn.style.display = blueBtn.style.display = grayBtn.style.display = "inline-block";
        yellowOn = false;
    }
}
function greenFn(text) {
    if (greenOn === false) {
        text = "```diff\n+ " + text.concat("\n```");
        greenBtn.style.color = 'gray';
        textArea.style.color = '#839701';
        textArea.value = text;
        redBtn.style.display = orangeBtn.style.display = yellowBtn.style.display = turqBtn.style.display = blueBtn.style.display = grayBtn.style.display = "none";
        greenOn = true;
    }
    else if (greenOn === true) {
        text = text.replace(/```diff\n\+ |\n```/g, "");
        greenBtn.style.color = '#839701';
        textArea.style.color = 'white';
        textArea.value = text;
        redBtn.style.display = orangeBtn.style.display = yellowBtn.style.display = turqBtn.style.display = blueBtn.style.display = grayBtn.style.display = "inline-block";
        greenOn = false;
    }
}
function turqFn(text) {
    if (turqOn === false) {
        text = "```bash\n\"" + text.concat("\"\n```");
        turqBtn.style.color = 'gray';
        textArea.style.color = '#2B918A';
        textArea.value = text;
        redBtn.style.display = orangeBtn.style.display = yellowBtn.style.display = greenBtn.style.display = blueBtn.style.display = grayBtn.style.display = "none";
        turqOn = true;
    }
    else if (turqOn === true) {
        text = text.replace(/```bash\n\"|\"\n```/g, "");
        turqBtn.style.color = '#2B918A';
        textArea.style.color = 'white';
        textArea.value = text;
        redBtn.style.display = orangeBtn.style.display = yellowBtn.style.display = greenBtn.style.display = blueBtn.style.display = grayBtn.style.display = "inline-block";
        turqOn = false;
    }
}
function blueFn(text) {
    if (blueOn === false) {
        text = "```ini\n[" + text.concat("]\n```");
        blueBtn.style.color = 'gray';
        textArea.style.color = '#287AB5';
        textArea.value = text;
        redBtn.style.display = orangeBtn.style.display = yellowBtn.style.display = greenBtn.style.display = turqBtn.style.display = grayBtn.style.display = "none";
        blueOn = true;
    }
    else if (blueOn === true) {
        text = text.replace(/```ini\n\[|]\n```/g, "");
        blueBtn.style.color = '#287AB5';
        textArea.style.color = 'white';
        textArea.value = text;
        redBtn.style.display = orangeBtn.style.display = yellowBtn.style.display = greenBtn.style.display = turqBtn.style.display = grayBtn.style.display = "inline-block";
        blueOn = false;
    }
}
function grayFn(text) {
    if (grayOn === false) {
        text = "```bf\n" + text.concat("\n```");
        grayBtn.style.color = 'gray';
        textArea.style.color = '#576D74';
        textArea.value = text;
        redBtn.style.display = orangeBtn.style.display = yellowBtn.style.display = greenBtn.style.display = turqBtn.style.display = blueBtn.style.display = "none";
        grayOn = true;
    }
    else if (grayOn === true) {
        text = text.replace(/```bf\n|\n```/g, "");
        grayBtn.style.color = '#576D74';
        textArea.style.color = 'white';
        textArea.value = text;
        redBtn.style.display = orangeBtn.style.display = yellowBtn.style.display = greenBtn.style.display = turqBtn.style.display = blueBtn.style.display = "inline-block";
        grayOn = false;
    }
}
