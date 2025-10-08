const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const formData = { 
    email: "", 
    message: ""
};
document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if(savedData) {
        Object.assign(formData, JSON.parse(savedData));
        form.elements.email.value = formData.email || '';
        form.elements.message.value = formData.message || '';
    }
});

form.addEventListener("input",() => {
    formData.email = form.elements.email.value.trim(),
    formData.message = form.elements.message.value.trim(),

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if(!formData.email || !formData.message){
        alert('Please fill in all fields!');
        return;
    }

    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData.email = '';
    formData.message = '';
});