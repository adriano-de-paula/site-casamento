//Scroll suave ao clicar nos links do menu 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Button 'Enviar' form-confirmacao 
document.getElementById("form-confirmacao").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Confirmação feita com sucesso!");
});

//Seção Lista de Presentes

document.querySelectorAll('.presentes li').forEach(item => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', function() {
        item.classList.toggle('checked', this.checked);
    });
});

document.getElementById("botao-presentes").addEventListener("click", function() {
    const selectedItems = [];
    
    document.querySelectorAll('.presentes input[type="checkbox"]').forEach(checkbox => {
        if (checkbox.checked) {
            selectedItems.push(checkbox.nextElementSibling.textContent.trim());
        }
    });

    // Aqui você pode enviar os dados para o banco de dados (ainda simulando)
    // Por exemplo, exibindo-os no console
    console.log("Itens selecionados:", selectedItems);
});

