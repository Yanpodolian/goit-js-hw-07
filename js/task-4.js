
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Зупиняє перезавантаження сторінки

        const email = loginForm.elements.email.value.trim();
        const password = loginForm.elements.password.value.trim();

        if (email === '' || password === '') {
            alert('All form fields must be filled in');
        } else {
            const formData = {
                email: email,
                password: password
            };
            console.log(formData);
            loginForm.reset(); // Очищення форми
        }
    });
});
