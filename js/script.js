document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const naam = form.querySelector('#naam').value.trim();
      const email = form.querySelector('#email').value.trim();
      const bericht = form.querySelector('#bericht').value.trim();

      if (naam === '' || email === '' || bericht === '') {
        alert('Vul alle velden in.');
        return;
      }

      alert('Bedankt voor je bericht, ' + naam + '! Ik neem zo snel mogelijk contact op.');
      form.reset();
    });
  }
});