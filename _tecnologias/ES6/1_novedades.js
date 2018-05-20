let aDatos = [{precio : 22}, {precio : 34}, {precio : 57} ]
calcularPrecios(12)
// calcularPrecios()

function calcularPrecios (pIva= 22) {
    {
        let nIva = 1 + (pIva/100)
        let precioFinal
            aDatos.forEach(  elem => {
                precioFinal = elem.precio * nIva
                mostrarPrecio ( precioFinal)
            })
        console.log('El IVA aplicado ha sido ',nIva)
    }
    // console.log(nIva)
}

function mostrarPrecio (precioFinal) {
    console.log(
        `
        El precio final es:
        ${precioFinal.toFixed(2)}`
    )
}


