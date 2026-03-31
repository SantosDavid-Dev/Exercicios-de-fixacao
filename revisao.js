/*Equipe: David Santos 
Gabriel Ramos Felipe
Karla Santos 
Railson Uchoa*/

let CaboConectado = false;
let PlugadoTomada = true;

//AND (&&)
if (CaboConectado && PlugadoTomada){
    console.log("O celular está carregando.");
} else {
    console.log("O celular não está carregando.");
}
//OR (||)
if (CaboConectado || PlugadoTomada){
    console.log("O celular está carregando.");
} else {
    console.log("O celular não está carregando.");
}
//NOT (!)
if (!CaboConectado || PlugadoTomada){
    console.log("O celular não está conectado.");
} else {
    console.log("O celular está conectado.");
}
