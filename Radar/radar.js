let velocidade = 50; //defina a velocidade do veículo aqui


let limite = 50;
let tolerancia = limite * 1.02;

if (velocidade <= tolerancia) {
    console.log("Dentro do limite");
}else {
    if (velocidade <= tolerancia * 1.20) {
        console.log("Fora do limite, multa de R$ 130,00");
    } else {
        if (velocidade <= tolerancia * 1.50) {
            console.log("Fora do limite, multa de R$ 195,23");
        }else {
            console.log("Fora do limite, multa de R$ 880,41");
        }
}
}