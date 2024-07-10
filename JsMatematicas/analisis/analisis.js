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

    console.log(porcentajesCrecimiento, medianaPorcentajesCrecimiento);

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const nuevoSalario = trabajos[trabajos.length - 1].salario * (1 + medianaPorcentajesCrecimiento);

    console.log(ultimoSalario, nuevoSalario);
}