const textArea = (document.getElementById("textArea") as HTMLInputElement)
const dateArea = (document.getElementById("datepicker") as HTMLInputElement)
const resetBtn = (document.getElementById("reset") as HTMLInputElement)
const copyBtn = (document.getElementById("copy") as HTMLInputElement)

const textDiv = (document.getElementById("textdiv") as HTMLInputElement)
const colorDiv = (document.getElementById("colordiv") as HTMLInputElement)
const timeDiv = (document.getElementById("timediv") as HTMLInputElement)
const dropdownVar = (document.getElementById("dropdown") as HTMLInputElement)

function dropdown(): void{
    if (dropdownVar.value === "text"){
        rmFn()
        textArea.style.display = "inline-block"
        dateArea.style.display = "none"
        colorDiv.style.display = "none"
        timeDiv.style.display = "none"
        textDiv.style.display = "block"
        copyBtn.style.display = "inline-block"
        resetBtn.style.display = "inline-block"
    } else if (dropdownVar.value === "color"){
        rmFn()
        textArea.style.display = "inline-block"
        dateArea.style.display = "none"
        colorDiv.style.display = "block"
        timeDiv.style.display = "none"
        textDiv.style.display = "none"
        copyBtn.style.display = "inline-block"
        resetBtn.style.display = "inline-block"
    } else if (dropdownVar.value === "time"){
        rmFn()
        textArea.style.display = "none"
        dateArea.style.display = "inline-block"
        colorDiv.style.display = "none"
        timeDiv.style.display = "inline-block"
        textDiv.style.display = "none"
        copyBtn.style.display = "none"
        resetBtn.style.display = "none"
    }
}

function resetFn(): void{
    boldBtn.style.color = italBtn.style.color = underBtn.style.color = strikeBtn.style.color = spoilBtn.style.color = quoteBtn.style.color = lineBtn.style.color = blockBtn.style.color = slashBtn.style.color = "white"
    textArea.value = ""
    textArea.style.fontWeight = "normal"
    textArea.style.fontStyle = ""
    textArea.style.textDecoration = "none"
    textArea.style.color = "white"
    textArea.style.fontFamily = "JetBrains Mono"
    boldOn = italOn = underOn = strikeOn = spoilOn = quoteOn = lineOn = blockOn = slashOn = false
    redBtn.style.display = orangeBtn.style.display = yellowBtn.style.display = greenBtn.style.display = turqBtn.style.display = blueBtn.style.display = grayBtn.style.display = "inline-block" 

}
function copyFn(): void{
    const btn = (document.getElementById("copy") as HTMLInputElement)

    textArea.select();
    textArea.setSelectionRange(0, 8000);

    navigator.clipboard.writeText(textArea.value);

    btn.innerHTML = "Copied!" 
    setTimeout(() => {  btn.innerHTML = "Copy"  }, 1000);

}
function rmFn(): void{
    let newStr = textArea.value.replaceAll(/[*`]|> |~~|__|\|\||diff\n- |css\n\[|]\n|fix\n|\n|diff\n\+ |bash\n\"|\"\n|ini\n\[|bf\n|/g, '')
    textArea.value = newStr
    redBtn.style.display = orangeBtn.style.display = yellowBtn.style.display = greenBtn.style.display = turqBtn.style.display = blueBtn.style.display = grayBtn.style.display = "inline-block" 
    boldBtn.style.color = italBtn.style.color = underBtn.style.color = strikeBtn.style.color = spoilBtn.style.color = quoteBtn.style.color = lineBtn.style.color = blockBtn.style.color = slashBtn.style.color = "white"
    textArea.style.fontWeight = "normal"
    textArea.style.fontStyle = ""
    textArea.style.textDecoration = "none"
    textArea.style.color = "white"
    textArea.style.fontFamily = "JetBrains Mono"
    boldOn = italOn = underOn = strikeOn = spoilOn = quoteOn = lineOn = blockOn = slashOn = false
    redBtn.style.color = '#D5322F';
    orangeBtn.style.color = '#B7471B';
    yellowBtn.style.color = '#B18602';
    greenBtn.style.color = '#839701';
    turqBtn.style.color = '#2B918A';
    blueBtn.style.color = '#287AB5';
    grayBtn.style.color = '#576D74';
}