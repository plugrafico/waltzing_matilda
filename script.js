document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        "💸Sua economia está deteriorando e há insatisfação popular. Consiga +2 pontos de poder nesta rodada ou perca -3 na próxima devido à crescente instabilidade doméstica💸",
        "Fontes da sua inteligência sugerem que algum jogador com nível de poder próximo ao seu irá atacar na próxima rodada",
        "Você tem um programa armamentista secreto. Você tem +2 pontos de poder a mais do que o revelado no seu cartão. Esse segredo só é revelado no caso de ataque (para todos) ou se você entrar em aliança (apenas para o aliado)",
        "Desastre natural! Apague seu contador de poder atual e subtraia 2 pontos", "Descoberta de petróleo! Apague seu contador de poder atual e adicione 1 ponto extra",
        "Fontes da sua inteligência sugerem que seus vizinhos querem infiltrar-se para subverter seu país. Se você aceitar uma aliança nessa rodada, perderá -1 ponto de poder na próxima", "Free-riding: se você entrar em aliança nessa rodada com alguém 2 pontos mais fraco que você, perderá 1 ponto de poder para cada rodada em que continuar a aliança",
        "Desfile militar: o poder no seu cartão é de fachada. Na verdade você tem -1 ponto do que o número escrito (segredo, manifeste apenas para calcular resultado de ataques)",
        "Nenhum evento especial",
        "Nenhum evento especial",
        "Nenhum evento especial", 
        "Nenhum evento especial", 
        "Nenhum evento especial", 
        "Nenhum evento especial"
    ];

    const sequences = [
        [9, 2, 2, 3],
        [4, 4, 4, 4],
        [5, 5, 3, 3],
        [5, 5, 5, 1],
        [7, 6, 1, 2]
    ];

    const messageButton = document.getElementById('messageButton');
    const sequenceButton = document.getElementById('sequenceButton');
    const messageDisplay = document.getElementById('messageDisplay');
    const sequenceDisplay = document.getElementById('sequenceDisplay');

    messageButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        messageDisplay.textContent = messages[randomIndex];
    });

    sequenceButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * sequences.length);
        const selectedSequence = sequences[randomIndex];
        sequenceDisplay.textContent = selectedSequence.join(', ');
    });
});
