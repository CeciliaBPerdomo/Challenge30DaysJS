// 1. Cree un formato de hora legible por humanos usando el objeto Date. 
// La hora y el minuto deben ser siempre dos dígitos (7 horas deben ser 07 y 5 minutos deben ser 05)
// YYY-MM-DD HH:mm eg. 2012-01-02 07:05

const now = new Date();
const year = now.getFullYear(); 
let month = now.getMonth() + 1; 
let date = now.getDate(); 
const hours = now.getHours(); 
const minutes = now.getMinutes(); 

if (month < 10) {
    month = "0" + month
}

if (date < 10) {
    date = "0" + date
}

if (hours < 10) {
    hours = "0" + hours
}

if (minutes < 10) {
    minutes = "0" + minutes
}

console.log(`${year}-${month}-${date} ${hours}:${minutes}`);
