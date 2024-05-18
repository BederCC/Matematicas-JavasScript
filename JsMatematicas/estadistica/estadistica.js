function esPar(lista){
    return !(lista.length % 2);
}
function esImpar(lista){
    return lista.length % 2;
}

function calcularMediana(listaDesordenada){
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

function calcularPromedio(lista){
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

function ordenarLista(listaDesordenada){
function ordenarListaSort(valorAcumulado, nuevoValor){
    return valorAcumulado - nuevoValor;
}

    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}
    
