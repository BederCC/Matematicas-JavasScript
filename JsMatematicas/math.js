console.group("Cuadrados");
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
});

function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado
    }
}
console.groupEnd("Cuadrados");

console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const TrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + TrianguloBase;
const areaTriangulo = (TrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2
    }
}

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    TrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo
});
console.groupEnd("Triangulos");

console.group("Circulos");

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;

const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo * radioCirculo) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo
});

function calcularCirculo(radio) {
    return {
        diametro: radio * 2,
        circunferencia: radio * 2 * Math.PI,
        area: (radio * radio) * Math.PI
    }
}
console.groupEnd("Circulos");
