const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener("input", () => {
    const formData = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData){
        const {email, message} = JSON.parse(savedData);
        form.elements.email.value = email || '';
        form.elements.message.value = message || '';
    }
});

form.addEventListener('submit', evt => {
    evt.preventDefault();

    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if(!email || !message) {
        alert("Fill please all fields!");
        return;
    }

    console.log({email, message});

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
});