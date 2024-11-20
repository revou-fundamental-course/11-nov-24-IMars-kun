// Auto-Slide Banner
const slider = document.querySelector('.slider');
let index = 0;

setInterval(() => {
  index = (index + 1) % slider.children.length;
  slider.style.transform = `translateX(-${index * 100}%)`;
}, 4000);

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    e.preventDefault();
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    alert('Please enter a valid email address.');
    e.preventDefault();
  }
});
