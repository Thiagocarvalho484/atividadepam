document.addEventListener('DOMContentLoaded', function() {
    // 1. Seleciona os elementos do formulário e feedback
    const form = document.querySelector('.login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    // 2. Adiciona um "listener" para o evento de submissão do formulário
    form.addEventListener('submit', function(event) {
        // Previne o comportamento padrão de envio do formulário (recarregar a página)
        event.preventDefault(); 
        
        // Remove quaisquer mensagens de erro anteriores
        errorMessage.style.display = 'none';
        
        // Remove as classes de erro visuais
        removeErrorClasses();

        // 3. Executa a validação
        if (validateForm()) {
            // Se a validação passar, simula o envio de dados
            alert('Login realizado com sucesso! (Simulação de envio)');
            
            // Aqui você faria a chamada real para o servidor (e.g., fetch/AJAX)
            // Exemplo: sendLoginData(emailInput.value, passwordInput.value);
            
            // Opcional: Limpar os campos após o sucesso
            form.reset();
        } else {
            // Se a validação falhar, exibe a mensagem de erro
            errorMessage.style.display = 'block';
        }
    });

    // 4. Função de Validação (Verifica se os campos estão vazios)
    function validateForm() {
        let isValid = true;

        if (emailInput.value.trim() === '') {
            displayError(emailInput, 'O e-mail é obrigatório.');
            isValid = false;
        }

        if (passwordInput.value.trim() === '') {
            displayError(passwordInput, 'A senha é obrigatória.');
            isValid = false;
        }
        
        return isValid;
    }
    
    // 5. Funções de Manipulação de Erro (Visual e Feedback)
    
    function displayError(inputElement, message) {
        // Adiciona uma classe para destacar o campo com erro (você precisará adicionar o CSS para isso)
        inputElement.classList.add('input-error');
        // Você poderia adicionar um elemento de span com a mensagem específica abaixo do input
        console.error(message); 
    }
    
    function removeErrorClasses() {
        emailInput.classList.remove('input-error');
        passwordInput.classList.remove('input-error');
    }
    
    // Opcional: Validação enquanto o usuário digita
    emailInput.addEventListener('input', removeErrorClasses);
    passwordInput.addEventListener('input', removeErrorClasses);
});