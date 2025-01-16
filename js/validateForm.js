document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // impede o envio do formulário

    // limpeza de mensagens de erro e sucesso anteriores
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());

    // limpa a mensagem de sucesso
    const successMessage = document.getElementById('success-message');
    if (successMessage) {
        successMessage.remove();
    }

    let errors = false;

    // vlidação do nome
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;

    if (!firstName.trim()) {
        errors = true;
        const error = document.createElement('div');
        error.classList.add('error-message');
        error.style.color = 'red';
        error.style.fontFamily = 'Poppins, sans-serif';
        error.style.fontSize = '14px';
        error.textContent = "O nome é obrigatório.";
        document.getElementById('first-name').insertAdjacentElement('afterend', error);
    }
    if (!lastName.trim()) {
        errors = true;
        const error = document.createElement('div');
        error.classList.add('error-message');
        error.style.color = 'red';
        error.style.fontFamily = 'Poppins, sans-serif';
        error.style.fontSize = '14px';
        error.textContent = "O sobrenome é obrigatório.";
        document.getElementById('last-name').insertAdjacentElement('afterend', error);
    }

    // validação do e-mail
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
        errors = true;
        const error = document.createElement('div');
        error.classList.add('error-message');
        error.style.color = 'red';
        error.style.fontFamily = 'Poppins, sans-serif';
        error.style.fontSize = '14px';
        error.textContent = "O e-mail é obrigatório.";
        document.getElementById('email').insertAdjacentElement('afterend', error);
    } else if (!emailRegex.test(email)) {
        errors = true;
        const error = document.createElement('div');
        error.classList.add('error-message');
        error.style.color = 'red';
        error.style.fontFamily = 'Poppins, sans-serif';
        error.style.fontSize = '14px';
        error.textContent = "O e-mail informado não é válido.";
        document.getElementById('email').insertAdjacentElement('afterend', error);
    }

    // validação da mensagem
    const message = document.getElementById('message').value;
    if (!message.trim()) {
        errors = true;
        const error = document.createElement('div');
        error.classList.add('error-message');
        error.style.color = 'red';
        error.style.fontFamily = 'Poppins, sans-serif';
        error.style.fontSize = '14px';
        error.textContent = "A mensagem não pode ser vazia.";
        document.getElementById('message').insertAdjacentElement('afterend', error);
    }

    // se não tiver erros, exibe a mensagem de sucesso
    if (!errors) {
        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            message: message
        };

        // salvar dados no localStorage
        localStorage.setItem('contactFormData', JSON.stringify(formData));

        // cria a mensagem de sucesso
        const successMessage = document.createElement('div');
        successMessage.id = 'success-message';
        successMessage.style.color = 'green';
        successMessage.style.fontFamily = 'Poppins, sans-serif';
        successMessage.style.fontSize = '14px';
        successMessage.style.marginTop = '10px';
        successMessage.textContent = 'Formulário enviado com sucesso!';

        // adiciona a mensagem de sucesso abaixo do botão de envio
        const submitButton = document.querySelector('.btn-end');
        submitButton.insertAdjacentElement('afterend', successMessage);

        // limpeza dos campos após envio
        document.getElementById('first-name').value = '';
        document.getElementById('last-name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }
});
