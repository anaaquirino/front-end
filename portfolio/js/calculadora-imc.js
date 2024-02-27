//capturar os eventos do formulário
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit' , function(e){ //a função aguarda o usuário clicar no
    e.preventDefault();

    const inputPeso = e.target.querySelector('#peso')
    const peso = Number(inputPeso.value)
    console.log(inputPeso)
    console.log(peso)

    const inputAltura = e.target.querySelector('#altura')
    const altura = Number(inputAltura.value)
    console.log(inputAltura)
    console.log(altura)

    const Peso = Number(inputPeso.value)
    const Altura = Number(inputAltura.valeu)

    const imc = calcularImc(peso, altura)

    console.log(imc)
})

//função para calcular o IMC e retornar o valor do imc com duas casas decimais
function calcularImc(peso, altura){
    let imc = (peso / altura ** 2); //fórmula do imc
    return imc.toFixed(2); //toFixed(2) foi usado para formatar o número em 2 casas decimais
}
