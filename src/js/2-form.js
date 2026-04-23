const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const formData = { email: '', message: '' };

// Завантаження збережених даних при старті
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  const parsed = JSON.parse(savedData);
  formData.email = parsed.email ?? '';
  formData.message = parsed.message ?? '';
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// Слухач input — делегування на формі
form.addEventListener('input', e => {
  const { name, value } = e.target;
  if (name === 'email' || name === 'message') {
    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});

// Слухач submit
form.addEventListener('submit', e => {
  e.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
});
