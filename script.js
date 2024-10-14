document.getElementById('voucherForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Pegando os valores do formulário
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const desconto = document.getElementById('desconto').value;

    // Pegando o canvas e o contexto de desenho
    const canvas = document.getElementById('voucherCanvas');
    const ctx = canvas.getContext('2d');

    // Limpando o canvas para nova renderização
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Definindo fundo do voucher
    ctx.fillStyle = "#f9f9f9";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Adicionando borda
    ctx.strokeStyle = "#ccc";
    ctx.lineWidth = 5;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // Texto do voucher
    ctx.fillStyle = "#000";
    ctx.font = "20px Arial";
    ctx.fillText("Voucher de Desconto", 120, 40);

    // Nome
    ctx.font = "16px Arial";
    ctx.fillText(`Nome: ${nome}`, 20, 100);

    // Telefone
    ctx.fillText(`Telefone: ${telefone}`, 20, 140);

    // Desconto
    ctx.fillText(`Desconto: ${desconto}%`, 20, 180);

    // Desenhando um botão visual (parte da imagem)
    ctx.fillStyle = "#28a745";
    ctx.fillRect(120, 220, 160, 50);
    ctx.fillStyle = "#fff";
    ctx.font = "18px Arial";
    ctx.fillText("Ver Voucher", 150, 250);

    // Gerar a imagem do canvas
    const voucherImage = document.getElementById('voucherImage');
    const imageURL = canvas.toDataURL(); // Gerar URL da imagem

    // Mostrar a imagem no link
    voucherImage.src = imageURL;

    // Definir o link que será clicado
    const voucherLink = document.getElementById('voucherLink');
    voucherLink.href = `https://meusite.com/voucher?nome=${nome}&telefone=${telefone}&desconto=${desconto}`;

    // Exibir a seção de download
    document.querySelector('.download-section').style.display = 'block';
    canvas.style.display = 'none'; // Esconder o canvas real (opcional)
});
