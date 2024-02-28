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

    const classificação = tabelaImc (imc) // estou chamando a função tabelaIMC
    console.log(classificação)
    mostrarResultado(classificação)
})

//função para calcular o IMC e retornar o valor do imc com duas casas decimais
function calcularImc(peso, altura){
    let imc = (peso / altura ** 2); //fórmula do imc
    return imc.toFixed(2); //toFixed(2) foi usado para formatar o número em 2 casas decimais
}

//função para retornar o valor a tela
function mostrarResultado(msg){
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = msg
}

//função para classificar em qual grau de imc a pessoa será
function tabelaImc(imc){
    const classificação = [ 'abaixo do peso' , 'peso normal' , 'sobrepeso' ,
                            'obesidade grau I' , 'obesidade grau II' , 'obesidade grau III'] 
if(imc >= 39.9) return classificação[5];
if(imc >= 34.9) return classificação[4];
if (imc >= 29.9) return classificação[3];
if (imc >= 24.9) return classificação[2];
if (imc >= 18.5) return classificação[1];
}