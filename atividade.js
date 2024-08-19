console.log("Vamos realizar o seu calculo do imc")

const peso = 81
const altura = 1.83

const imc = (peso / (altura * altura))

console.log(imc);

if (imc<16){
    console.log('Magreza leve')
}
else if (imc>=16 && 16.9) {
    console.log('Magreza moderada')
}
else if (imc>=17 && 18.5){
    console.log('Magreza Leve')
}
else if (imc>=18.6 && 24.9){
    console.log('Peso Ideal')
}
else if (imc>=25 && 29.9){
    console.log('Sobrepeso')
}
else if (imc>=30 && 34.9){
    console.log('Obesidade Grau 1')
}
