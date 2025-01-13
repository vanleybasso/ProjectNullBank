document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // impede o envio do formulário

    // limpeza de mensagens de erro anteriores
    let errors = [];

    // validação do nome
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    if (!firstName.trim()) errors.push("O nome é obrigatório.");
    if (!lastName.trim()) errors.push("O sobrenome é obrigatório.");

    // validação do e-mail
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) errors.push("O e-mail é obrigatório.");
    else if (!emailRegex.test(email)) errors.push("O e-mail informado não é válido.");

    // validação da mensagem
    const message = document.getElementById('message').value;
    if (!message.trim()) errors.push("A mensagem não pode ser vazia.");

    // se tiver erros, mostra os mesmos e impede o envio do formulário
    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        // salvar dados no local storage
        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            message: message
        };
        localStorage.setItem('contactFormData', JSON.stringify(formData));

        alert("Formulário enviado com sucesso!");
        
        // limpeza dos campos após envio
        document.getElementById('first-name').value = '';
        document.getElementById('last-name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }
});
