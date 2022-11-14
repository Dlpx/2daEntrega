//DECLARACION DE VARIABLES Y CONSTANTES
const listaInvitados = [];
const listaParcialInvitados = [];
let menu;

//DECLARACION DE FUNCIONES
function mostrarMenu(){
    menu = parseInt(prompt(`${nombreUsuario} indica el numero de donde deseas ir:
    1- Agregar invitados
    2- Verificar invitado
    3- Ver lista de invitados
    4- Eliminar invitado
    5- Checkear gasto global
    6- Salir`));
}

class Persona{
    constructor(id, nombre, trae, gasto){
        this.id = id;
        this.nombre = nombre;
        this.trae = trae;
        this.gasto = gasto;
    }
}

function agregar(){

}

//Bienvenida y menu
let nombreUsuario = prompt("¿Cual es su nombre?");
alert(`Bienvenido ${nombreUsuario}`);
mostrarMenu();

//MENU
while (menu != 6){
    //AGREGAR INVITADOS
    while(menu === 1){
        let cuantosInvitados = parseInt(prompt("¿Cuantos invitados agregamos?"));
        for(let i = 0; i < cuantosInvitados; i++){
            let id = listaInvitados.length + 1;
            let nombre = prompt("Nombre invitado:").toUpperCase();
            let trae = prompt("¿Que va a llevar?");
            let gasto = Number(prompt("¿Cuanto ha gastado?"));
            
            let nuevoInvitado = new Persona(id, nombre, trae, gasto);
            listaInvitados.push(nuevoInvitado);
            listaParcialInvitados.push(nuevoInvitado);
            alert(`Invitados recientes: ${listaParcialInvitados.length}`);
        }
        let invitadosRecientes = listaParcialInvitados.map(invitado => invitado.nombre);
        alert(`Los invitados recientes fueron:
        ${invitadosRecientes.join(`
        `)}`);
        //ELIMINAR LA LISTA PARCIAL
        listaParcialInvitados.splice(0, listaParcialInvitados.length);

        mostrarMenu();
    }
    //VERIFICAR INVITADO
    while(menu === 2){
        let reBuscar = "no";
        do{
            let buscar = prompt("¿A quien buscamos?").toUpperCase();
            let encontrado = listaInvitados.some(invitado => invitado.nombre === buscar);
            if(encontrado){
                alert(`${buscar} esta invitado`);
                reBuscar = prompt("¿Buscar de nuevo? si / no").toLowerCase();
            }else{
                alert(`${buscar} no fue encontrado, o al menos no con ese nombre`);
                reBuscar = prompt("¿Buscar de nuevo? si / no").toLowerCase();
            }
        } while (reBuscar === "si");
            
        mostrarMenu();
    }
    //VER LISTA INVITADOS
    while(menu === 3){
        let invitadosActuales = listaInvitados.map(invitado => invitado.nombre);
        alert(`Los invitados hasta el momento son:
        ${invitadosActuales.join(`
        `)}`);
        
        mostrarMenu();
    }
    //ELIMINAR INVITADO
    while(menu === 4){
        //A quien borrar
        let aEliminar = prompt("¿A quien eliminamos?").toUpperCase();
        //Mapeamos solo nombres
        let soloNombres = listaInvitados.map(invitado => invitado.nombre);
        //Buscamos posicion del invitado
        let posicion = soloNombres.indexOf(aEliminar);
        //ELIMINAMOS DE LA LISTA
        listaInvitados.splice(posicion, 1);
        //VERIFICACION
        let invitadosActuales = listaInvitados.map(invitado => invitado.nombre);
        alert(`Los invitados que quedan son:
        ${invitadosActuales.join(`
        `)}`);
        
        mostrarMenu();
    }
    //CHECKEO DE GASTOS
    while(menu === 5){
        const totalGasto = listaInvitados.reduce((acum, item) => acum + item.gasto, 0);

        alert(`El gasto total fue de $${totalGasto}`);

        mostrarMenu();
    }

}
alert("Hasta pronto.. ¡buena fiesta!")
