const submeterFormulario = () => {
    const rangeInicial      = document.getElementById("rangeInicial").value;
    const rangeFinal        = document.getElementById("rangeFinal").value;
    const minhaAposta       = document.getElementById("minhaAposta").value;
    const repetirAteAcertar = document.getElementById("repetirAteAcertar").value;

    realizarSorteio(+rangeInicial, +rangeFinal, +minhaAposta, repetirAteAcertar);
}

const realizarSorteio = (rangeInicial, rangeFinal, minhaAposta, repetirAteAcertar) => {

    if(!rangeInicial) {
        alert('Mano pra isso bufar informa o range inicial! 🤪');
        return;
    }

    if(!rangeFinal) { 
        alert('Mano isso bufar informa o range final! 🤪');
        return;
    }

    if(rangeInicial > rangeFinal) {
        alert('Mano...o range INICIAL não pode ser maior que o FINAL! Isso não tem lógica...vlw flws 🥴');
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
            alert(`Uauuuu PARABÉNS Merencio! Você é diferenciado...E é mesmo o "${numeroSorteado}", Acertou! 👏👏👏👏👏👏👏👏`);
            return;
        }
     
    alert(`ALELUIA Merencio! Finalmente você acertou o número "${numeroSorteado}", depois de ${quantidadeDeSorteios} tentativas que fizemos por você 🤯`);
    
    } else {
        alert(`Baaaa Merencio! Na próxima você consegue! 😬😬 ...Sem te passar a penas, mas o número sorteado foi: "${numeroSorteado}"`);
    }
}

const novoSorteio = (rangeInicial, rangeFinal) => {
    return (Math.floor(Math.random() * rangeFinal) + rangeInicial);
}
