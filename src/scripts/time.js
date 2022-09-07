const datePicker = document.getElementById("datepicker");
const datet = document.getElementById("datet");
const dateT = document.getElementById("dateT");
const dated = document.getElementById("dated");
const dateD = document.getElementById("dateD");
const datef = document.getElementById("datef");
const dateF = document.getElementById("dateF");
const dateR = document.getElementById("dateR");
let date;
function main() {
    date = new Date(datePicker.value);
    const newDate = Math.floor(date.getTime() / 1000);
    console.log(newDate);
    function dateFn() {
        datet.innerHTML = "<code id=\"datet\">" + "&ltt:" + newDate + ":t&gt" + "</code>";
        dateT.innerHTML = "<code id=\"dateT\">" + "&ltt:" + newDate + ":T&gt" + "</code>";
        dated.innerHTML = "<code id=\"dated\">" + "&ltt:" + newDate + ":d&gt" + "</code>";
        dateD.innerHTML = "<code id=\"dateD\">" + "&ltt:" + newDate + ":D&gt" + "</code>";
        datef.innerHTML = "<code id=\"datef\">" + "&ltt:" + newDate + ":f&gt" + "</code>";
        dateF.innerHTML = "<code id=\"dateF\">" + "&ltt:" + newDate + ":F&gt" + "</code>";
        dateR.innerHTML = "<code id=\"dateR\">" + "&ltt:" + newDate + ":R&gt" + "</code>";
        console.log(datet.innerHTML);
    }
    dateFn();
}
