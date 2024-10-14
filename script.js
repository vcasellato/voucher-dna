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

    // Tornando o canvas visível
    canvas.style.display = "block";

    // Gerando o link para download
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.href = canvas.toDataURL();
    document.querySelector('.download-section').style.display = 'block';
});
