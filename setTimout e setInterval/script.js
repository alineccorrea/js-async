function alerta()
{
    console.log("Alerta");
}

setTimeout(alerta,3000);

/* ou dessa forma sem precisar declarar a função alerta() antes
setTimout(()=>{código},3000);

setTimout(() => {
    console.log("Alerta");
}, 3000);

*/

setInterval(() => {
    console.log("Alerta setInterval");
}, 3000);