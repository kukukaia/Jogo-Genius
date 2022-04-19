let order = [];
let clickedOrder = [];
let score = 0;

//0 = verde
//1 = vermelho
//2 = amarelo
//3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

/*sortear numeros de 0 a 80 */

//cria ordens aleatórias
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.randon() = 4);
    order(order.length) = colorOrder;
    clickedOrder = [];

    /*acender a cor que corresponde a um número sorteado */
    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}
//função que vai acender a cor
let lightColor = (element, number) => {
    time = time *500;
    setTimeout(() => {
        element.classList.add('selected');
    }, tempo - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}
//checa se os botões clicados são os acessos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[1] != order[1]) {
            lose();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: $(score)\nVocê acertou! Iniciando próximo nível`);
        nextLevel();
    }
}
//Funcão para o clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
    })
    checkOrder();
}