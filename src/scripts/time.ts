const datePicker = (document.getElementById("datepicker") as HTMLInputElement)

const datet = (document.getElementById("datet") as HTMLInputElement)
const dateT = (document.getElementById("dateT") as HTMLInputElement)
const dated = (document.getElementById("dated") as HTMLInputElement)
const dateD = (document.getElementById("dateD") as HTMLInputElement)
const datef = (document.getElementById("datef") as HTMLInputElement)
const dateF = (document.getElementById("dateF") as HTMLInputElement)
const dateR = (document.getElementById("dateR") as HTMLInputElement)

let date: Date;

function main(){
    date = new Date(datePicker.value)
    const newDate: number = Math.floor(date.getTime() / 1000)
    console.log(newDate)
    function dateFn(){
        datet.innerHTML = "<code id=\"datet\">" + "&ltt:" + newDate + ":t&gt" + "</code>"
        dateT.innerHTML = "<code id=\"dateT\">" + "&ltt:" + newDate + ":T&gt" + "</code>"
        dated.innerHTML = "<code id=\"dated\">" + "&ltt:" + newDate + ":d&gt" + "</code>"
        dateD.innerHTML = "<code id=\"dateD\">" + "&ltt:" + newDate + ":D&gt" + "</code>"
        datef.innerHTML = "<code id=\"datef\">" + "&ltt:" + newDate + ":f&gt" + "</code>"
        dateF.innerHTML = "<code id=\"dateF\">" + "&ltt:" + newDate + ":F&gt" + "</code>"
        dateR.innerHTML = "<code id=\"dateR\">" + "&ltt:" + newDate + ":R&gt" + "</code>"
        console.log(datet.innerHTML)
    }
    dateFn()
}
