const TesteImparpar = (n) => {
    let calculoTeste = n % 2

    if (calculoTeste == 1) {
        return "Número Impar"

    } else {
        return "Número Par"
    }
}

console.log(TesteImparpar(17))
console.log(TesteImparpar(64))
console.log(TesteImparpar(1500))


