const submeterFormulario = () => {
    const rangeInicial      = document.getElementById("rangeInicial").value;
    const rangeFinal        = document.getElementById("rangeFinal").value;
    const minhaAposta       = document.getElementById("minhaAposta").value;
    const repetirAteAcertar = document.getElementById("repetirAteAcertar").checked ? "S" : "N";

    realizarSorteio(+rangeInicial, +rangeFinal, +minhaAposta, repetirAteAcertar);
}

const realizarSorteio = (rangeInicial, rangeFinal, minhaAposta, repetirAteAcertar) => {

    if (!rangeInicial) {
        alert('Informe o range inicial!');
        return;
    }

    if (!rangeFinal) {
        alert('Informe o range final!');
        return;
    }

    if (rangeInicial > rangeFinal) {
        alert('O range INICIAL não pode ser maior que o FINAL!');
        return;
    }

    if ((minhaAposta > rangeFinal) || (minhaAposta < rangeInicial)) {
        alert('A aposta deve estar entre o range INICIAL e FINAL!');
        return;
    }

    let numeroSorteado;
    let quantidadeDeSorteios = 0;

    if (repetirAteAcertar !== "S") {
        numeroSorteado = novoSorteio(rangeInicial, rangeFinal);
    } else {
        while (numeroSorteado !== minhaAposta) {
            numeroSorteado = novoSorteio(rangeInicial, rangeFinal);
            quantidadeDeSorteios = quantidadeDeSorteios + 1;
        }
    }
 
    if (numeroSorteado === minhaAposta) {
        if (repetirAteAcertar !== "S") {
            alert(`PARABÉNS ! O número sorteado é o "${numeroSorteado}"!`);
            return;
        }
     
    alert(`Finalmente! Você acertou o número "${numeroSorteado}", depois de ${quantidadeDeSorteios} tentativas que fizemos automaticamente`);
    
    } else {
        alert(`Baaaa! Na próxima você consegue! ...Sem te passar a penas, mas o número sorteado foi: "${numeroSorteado}"`);
    }
}

const novoSorteio = (rangeInicial, rangeFinal) => {
    return (Math.floor(Math.random() * (rangeFinal - rangeInicial + 1)) + rangeInicial);
}
