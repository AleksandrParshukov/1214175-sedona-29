const bookingButton = document.querySelector(" .booking-button ");
const modal = document.querySelector(" .modal ");
const guests = modal.querySelectorAll(" .modal-columns ");

bookingButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.toggle("modal-visible");
});

for (let i = 0; i < guests.length; i++) {
  const minusBtn = guests[i].querySelector(" .modal-minus ");
  const plusBtn = guests[i].querySelector(" .modal-plus ");
  let input = guests[i].querySelector(" .modal-input-number ");

  minusBtn.addEventListener("click", function () {
    if (input.value > 0) {
      input.value = String(+input.value - 1);
    }
  });
  plusBtn.addEventListener("click", function () {
    if (input.value < 10) {
      input.value = String(+input.value + 1);
    }
  });
}

