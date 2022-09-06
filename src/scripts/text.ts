const textArea = (document.getElementById("textArea") as HTMLInputElement)

const boldBtn = (document.getElementById("bold") as HTMLInputElement)
const italBtn = (document.getElementById("ital") as HTMLInputElement)
const underBtn = (document.getElementById("under") as HTMLInputElement)
const strikeBtn = (document.getElementById("strike") as HTMLInputElement)
const spoilBtn = (document.getElementById("spoil") as HTMLInputElement)
const quoteBtn = (document.getElementById("quote") as HTMLInputElement)
const lineBtn = (document.getElementById("line") as HTMLInputElement)
const blockBtn = (document.getElementById("block") as HTMLInputElement)
let boldOn: boolean, italOn: boolean, underOn: boolean, strikeOn: boolean, spoilOn: boolean, quoteOn: boolean, lineOn: boolean, blockOn: boolean;
boldOn = italOn = underOn = strikeOn = spoilOn = quoteOn = lineOn = blockOn = false

function resetFn(): void{
    boldBtn.style.cursor = italBtn.style.cursor = underBtn.style.cursor = strikeBtn.style.cursor = spoilBtn.style.cursor = quoteBtn.style.cursor = lineBtn.style.cursor = blockBtn.style.cursor =  "pointer"
    boldBtn.style.color = italBtn.style.color = underBtn.style.color = strikeBtn.style.color = spoilBtn.style.color = quoteBtn.style.color = lineBtn.style.color = blockBtn.style.color =  "white"
    textArea.value = ""
    textArea.style.fontWeight = "normal"
    textArea.style.fontStyle = ""
    textArea.style.textDecoration = "none"
    textArea.style.color = "white"
    textArea.style.fontFamily = "JetBrains Mono"
    boldOn = italOn = underOn = strikeOn = spoilOn = quoteOn = lineOn = blockOn = false
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
    let newStr = textArea.value.replaceAll(/[*~_|`]|> /g, '')
    textArea.value = newStr
    boldBtn.style.cursor = italBtn.style.cursor = underBtn.style.cursor = strikeBtn.style.cursor = spoilBtn.style.cursor = quoteBtn.style.cursor = lineBtn.style.cursor = blockBtn.style.cursor =  "pointer"
    boldBtn.style.color = italBtn.style.color = underBtn.style.color = strikeBtn.style.color = spoilBtn.style.color = quoteBtn.style.color = lineBtn.style.color = blockBtn.style.color =  "white"
    textArea.style.fontWeight = "normal"
    textArea.style.fontStyle = ""
    textArea.style.textDecoration = "none"
    textArea.style.color = "white"
    textArea.style.fontFamily = "JetBrains Mono"
    boldOn = italOn = underOn = strikeOn = spoilOn = quoteOn = lineOn = blockOn = false
}

function boldFn(text: string): void {
    if (boldOn === false) {
        text = "**" + text.concat("**")
        textArea.style.fontWeight = "bold"
        boldBtn.style.cursor = "default"
        boldBtn.style.color = 'gray';
        textArea.value = text
        boldOn = true
    }
}
function italFn(text: string): void {
    if (italOn === false) {
        text = "*" + text.concat("*")
        textArea.style.fontStyle = "italic"
        italBtn.style.cursor = "default"
        italBtn.style.color = 'gray';
        textArea.value = text
        
        italOn = true
    }
}
function underFn(text: string): void {
    if (underOn === false) {
        text = "__" + text.concat("__")
        textArea.style.textDecoration = "underline"
        underBtn.style.cursor = "default"
        underBtn.style.color = 'gray';
        textArea.value = text
        
        underOn = true
    }
}
function strikeFn(text: string): void {
    if (strikeOn === false) {
        text = "~~" + text.concat("~~")
        textArea.style.textDecoration = "line-through"
        strikeBtn.style.cursor = "default"
        strikeBtn.style.color = 'gray';
        textArea.value = text
        
        strikeOn = true
    }
}
function spoilFn(text: string): void {
    if (spoilOn === false) {
        text = "||" + text.concat("||")
        textArea.style.color = "#999999"
        spoilBtn.style.cursor = "default"
        spoilBtn.style.color = 'gray';
        textArea.value = text
        
        spoilOn = true
    }
}
function quoteFn(text: string): void {
    if (quoteOn === false) {
        text = "> " + text
        quoteBtn.style.cursor = "default" 
        quoteBtn.style.color = 'gray';
        textArea.value = text
        
        quoteOn = true
    }
}
function lineFn(text: string): void {
    if (lineOn === false) {
        text = "`" + text.concat("`")
        textArea.style.fontFamily = "monospace"
        lineBtn.style.cursor = "default"
        lineBtn.style.color = 'gray';
        textArea.value = text
        lineOn = true
    }
}
function blockFn(text: string): void {
    if (blockOn === false) {
        text = "```" + text.concat("```")
        textArea.style.fontFamily = "monospace"
        blockBtn.style.cursor = "default"
        blockBtn.style.color = 'gray';
        textArea.value = text
        blockOn = true
    }
}