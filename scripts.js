// submissão do formulário c/ pop-up de sucesso
const form = document.querySelector('.contact_form form');
const successPopup = document.getElementById('successPopup');
const closePopup = document.getElementById('closePopup');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    successPopup.style.display = 'flex'; 
    form.reset();
});

closePopup.addEventListener('click', function() {
    successPopup.style.display = 'none'; 
});

window.addEventListener('click', function(event) {
    if (event.target === successPopup) {
        successPopup.style.display = 'none'; 
    }
});