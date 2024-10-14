document.getElementById('voucherForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const { jsPDF } = window.jspdf;

    // Pegando os valores do formulário
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const desconto = document.getElementById('desconto').value;

    // Carregar a imagem de fundo do repositório
    const img = new Image();
    img.src = 'voucher-template.jpg';  // Coloque o caminho correto da imagem no seu repositório

    img.onload = function() {
        // Criar uma instância do jsPDF
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: [img.width, img.height]  // Define o tamanho do PDF com base no tamanho da imagem
        });

        // Carregar a fonte personalizada (Base64)
        doc.addFileToVFS("CustomFont.ttf", "base64string_of_the_font_here");
        doc.addFont("CustomFont.ttf", "CustomFont", "normal");

        // Usar a fonte personalizada
        doc.setFont("CustomFont");

        // Adicionar a imagem de fundo ao PDF
        doc.addImage(img, 'JPEG', 0, 0, img.width, img.height);

        // Adicionar o texto preenchido sobre a imagem com a fonte personalizada
        doc.setFontSize(20);
        doc.setTextColor(255, 255, 255);  // Definir cor do texto
        doc.text(`Nome: ${nome}`, 50, 200);  // Ajuste as coordenadas para posicionar o texto
        doc.text(`Telefone: ${telefone}`, 50, 240);
        doc.text(`Desconto: ${desconto}%`, 50, 280);

        // Gerar a URL temporária para o PDF
        const pdfUrl = doc.output('bloburl');

        // Mostrar o botão com o link do PDF
        const pdfButton = document.getElementById('pdfButton');
        pdfButton.href = pdfUrl;
        pdfButton.style.display = 'block';  // Exibir o botão para ver o PDF
    };
});
