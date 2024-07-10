const PlatziMath = {};

PlatziMath.esPar = function esPar(lista){
    return !(lista.length % 2);
}
PlatziMath.esImpar = function esImpar(lista){
    return lista.length % 2;
}

PlatziMath.calcularModa = function calcularModa(lista){
    const listaCount = {};

    for (let i = 0; i < lista.length; i++){
        const elemento = lista[i];
        
        if (listaCount[elemento]){
            listaCount[elemento] += 1;
        }else{
            listaCount[elemento] = 1;
        }
    }
    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidimensional(listaArray, 1);
    const listaOrdenadaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
    // console.log({listaCount, listaArray, listaOrdenada, listaOrdenadaMaxNumber});
    // console.log('la moda es: '+listaOrdenadaMaxNumber[0]);
    const moda = listaOrdenadaMaxNumber[0];
    return moda;
}

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada){
    const lista = ordenarLista(listaDesordenada);
    const listaEsPar = esPar(lista);

    if(listaEsPar){
        const mitadLista1 = lista[lista.length / 2];
        const mitadLista2 = lista[(lista.length / 2) - 1];
        const listaMitades = [mitadLista1, mitadLista2];
        const medianaListaPar = calcularPromedio(listaMitades);
        return medianaListaPar;
    }else{
        const indexMitadListaImpar = Math.ceil(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar -1];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return lista[indexMitadListaImpar - 1];
    }    
}    

PlatziMath.calcularPromedio = function calcularPromedio(lista){
    // let sumaLista = 0;
    // for(let i = 0; i < lista.length; i++){
    //     sumaLista += lista[i];
    // }

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );


    const promedio = sumaLista / lista.length;
    //console.log(promedio);
    return promedio;
    
}

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada){
function ordenarListaSort(valorAcumulado, nuevoValor){
    return valorAcumulado - nuevoValor;
}

    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}

PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada){
    function ordenarListaSort(valorAcumulado, nuevoValor){
        return valorAcumulado[1] - nuevoValor[1];
    }
    
        const lista = listaDesordenada.sort(ordenarListaSort);
        return lista;
    }
    
