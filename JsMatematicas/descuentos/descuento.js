const btn = document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const inputCupon = document.querySelector('#cupon');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularDescuento);

function calcularDescuento() {
    const price = inputPrice.value;
    const cupon = inputCupon.value;
    let discount;

    if (price === '' || discount === '') {
        pResult.innerText = 'Por favor, ingresa los datos solicitados';
        return;
    }

    if (price <= 0 || discount <= 0) {
        pResult.innerText = 'Por favor, ingresa valores mayores a 0';
        return;
    }
    
    switch (cupon) {
        case 'cupon1':
            discount = 15;
            break;
        case 'cupon2':
            discount = 25;
            break;
        case 'cupon3':
            discount = 35;
            break;
        default:
            pResult.innerText = 'Cupón no válido';
            return;
    }

    // if (cupon == 'cupon1') {
    //     discount = 15;
    // } else if (cupon == 'cupon2') {
    //     discount = 25;
    // } else if (cupon == 'cupon3') {
    //     discount = 35;
    // } else {
    //     pResult.innerText = 'Cupón no válido';
    //     return;
    // };

    const precioConDescuento = price * (100 - discount) / 100;

    pResult.innerText = `El precio con descuento es de: $${precioConDescuento}`;
    console.log(precioConDescuento);
};
