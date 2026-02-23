const formData = { email: "", message: "" };

const form = document.querySelector('.feedback-form');

const savedData = localStorage.getItem("feedback-form-state");

// 1️⃣ Якщо є дані — відновлюємо
if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData.email = parsedData.email || "";
  formData.message = parsedData.message || "";

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}


form.addEventListener('input', (event) => {
    formData.email = event.currentTarget.elements.email.value;
    formData.message = event.currentTarget.elements.message.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

form.addEventListener('submit', event => {
    event.preventDefault();
    if (formData.email.trim() === '' || formData.message.trim() === '') {
        alert('Fill please all fields');
        return;
    } 
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
   
    
    form.reset();

    formData.email = '';
    formData.message = '';
})
