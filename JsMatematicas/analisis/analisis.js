console.log(salarios);

//analisis personal de Juanita
// .find es un metodo de los arrays que permite encontrar un objeto dentro de un array

// const personaEnBusqueda = 'Juanita';
// const persona = salarios.find((persona) => {
//     return persona.name === personaEnBusqueda;
// });

// codigo mas corto
function encontrarPersona(personaEnBusqueda){
    return salarios.find((persona) => persona.name == personaEnBusqueda);
}

function medianaPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    
    const salarios = trabajos.map(function (elemento){
        return elemento.salario;
    });

    const medianaSalarios = PlatziMath.calcularMediana(salarios);

    console.log(medianaSalarios);
    return medianaSalarios;
}

function proyeccionPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    
    let porcentajesCrecimiento = [];

    for (let i = 1; i < trabajos.length; i++){
        const salarioActual = trabajos[i].salario;
        const salarioAnterior = trabajos[i - 1].salario;
        const porcentajeCrecimiento = ((salarioActual - salarioAnterior) / salarioAnterior);
        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }
    
    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

    //console.log(porcentajesCrecimiento, medianaPorcentajesCrecimiento);

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const nuevoSalario = trabajos[trabajos.length - 1].salario * (1 + medianaPorcentajesCrecimiento);

    //console.log(ultimoSalario, nuevoSalario);
}

// Analisis empresarial
const empresa = {};
for (persona of salarios){
    for (trabajo of persona.trabajos){
        if (!empresa[trabajo.empresa]){
            empresa[trabajo.empresa] = {};
        }

        if (!empresa[trabajo.empresa][trabajo.year]){
            empresa[trabajo.empresa][trabajo.year] = [];
        }

        empresa[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}
console.log(empresa);

function medianaEmpresaYear(nombre, year){
    if (!empresa[nombre]) {
        console.warm('No existe la empresa');
    }else if (!empresa[nombre][year]){
        console.warm('No existe el año');
    } else {
        return PlatziMath.calcularMediana(empresa[nombre][year]);
    }
}

function proyeccionPorEmpresa(nombre){
    if (!empresa[nombre]){
        console.warm('No existe la empresa');
    }else{
        const empresaYears = Object.keys(empresa[nombre]);
        const listaMedianaYears = empresaYears.map((year) => {
            return medianaEmpresaYear(nombre, year);
        });
        
        let porcentajesCrecimiento = [];

        for (let i = 1; i < listaMedianaYears.length; i++){
            const salarioActual = listaMedianaYears[i];
            const salarioAnterior = listaMedianaYears[i - 1];
            const porcentajeCrecimiento = ((salarioActual - salarioAnterior) / salarioAnterior);
            porcentajesCrecimiento.push(porcentajeCrecimiento);
        }

        const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

        const ultimoMediana = listaMedianaYears[listaMedianaYears.length - 1];
        const nuevoMediana = listaMedianaYears[listaMedianaYears.length - 1] * (1 + medianaPorcentajesCrecimiento );

        return nuevoMediana;

    }
}

function medianaGeneral(){
    const listaMedianas = salarios.map(
        (persona) => medianaPorPersona(persona.name)
    );

    const mediana = PlatziMath.calcularMediana(listaMedianas);

    return mediana;
}

function medianaTop10() {
    const listaMedianas = salarios.map(
        (persona) => medianaPorPersona(persona.name)
    );
    
    const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas);

    const cantidad = listaMedianas.length /10;
    const limite = listaMedianas.length - cantidad;

    const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length);

    const medianaTop10 = PlatziMath.calcularMediana(top10);

    console.log({medianaTop10});
}
