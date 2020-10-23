const MIN_KIDS_VALUE = 0;
const MAX_KIDS_VALUE = 20;
const MIN_ADULTS_VALUE = 1;
const MAX_ADULTS_VALUE = 20;

const bookingButton = document.querySelector(".booking-button");
const modal = document.querySelector(".modal ");
const dateArrival = modal.querySelector("[name='arrival-date']");
const dateDeparture = modal.querySelector("[name='departure-date']");
const adultsValue = modal.querySelector("[name='adults']");
const kidsValue = modal.querySelector("[name='kids']");
const modalSubmit = modal.querySelector(".button-link");


/* Modal */
modal.classList.add("modal-hidden");

bookingButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.toggle("modal-hidden");
});


/* Modal Inputs */
initializingButtons(adultsValue, MIN_ADULTS_VALUE, MAX_ADULTS_VALUE);
initializingButtons(kidsValue, MIN_KIDS_VALUE, MAX_KIDS_VALUE);

function initializingButtons (input, min, max) {
  input.previousElementSibling.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (input.value > min) {
      input.value = String(+input.value - 1);
    }
  });
  input.nextElementSibling.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (input.value < max) {
      input.value = String(+input.value + 1);
    }
  });
}


/* Validation */
modalSubmit.addEventListener("click", function (evt){
  evt.preventDefault();
  checkInput(dateArrival);
  checkInput(dateDeparture);
});

function checkInput (input) {
  if (!input.value) {
    input.classList.add("input-error");
    return false;
  }
  input.classList.remove("input-error");
  return true;
}
