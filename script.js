document.getElementById('voucherImage').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;

    // Criar um PDF com jsPDF
    const doc = new jsPDF();
    
    // Adicionar conteúdo no PDF (você pode personalizar este conteúdo)
    doc.setFontSize(20);
    doc.text("Voucher de Desconto", 60, 20);
    doc.setFontSize(16);
    doc.text("Nome: João Silva", 20, 40);
    doc.text("Telefone: +351 123 456 789", 20, 60);
    doc.text("Desconto: 20%", 20, 80);

    // Gerar o PDF como um Data URL
    const pdfUrl = doc.output('bloburl');

    // Exibir o botão de link para o PDF gerado
    const pdfButton = document.getElementById('pdfButton');
    pdfButton.href = pdfUrl; // Definir o link temporário do PDF
    pdfButton.style.display = 'block'; // Mostrar o botão
});
