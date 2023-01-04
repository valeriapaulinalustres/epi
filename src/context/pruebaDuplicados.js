//FUNCIONA!!!

const pacientes = [
    { nombre: "Julio", DNI: 123, evento: "a" },
    { nombre: "Juana", DNI: 345, evento: "a" },
    { nombre: "Juana", DNI: 999, evento: "a" },
    { nombre: "Julio", DNI: 123, evento: "b" },
    { nombre: "Pedro", DNI: 888, },
    { nombre: "Pedro", DNI: 888, evento: "r" }
]

function quitarDuplicados(arr) {
    let sinDuplicados = []
    //console.log(sinDuplicados.length);
    for (let i = 0; i < arr.length; i++) {
        const el1 = arr[i];
        //console.log(el1.DNI);
        let filtrado = sinDuplicados.filter(el => el.DNI === el1.DNI)

        if (filtrado.length == 0) { sinDuplicados.push(el1) }

    }
    console.log(sinDuplicados);
}

