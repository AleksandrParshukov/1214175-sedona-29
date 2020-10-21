const MIN_KIDS_VALUE = 0;
const MAX_KIDS_VALUE = 20;
const MIN_ADULTS_VALUE = 1;
const MAX_ADULTS_VALUE = 20;

const bookingButton = document.querySelector(".booking-button");
const modal = document.querySelector(".modal ");
const guests = modal.querySelectorAll(".modal-columns");
const dateArrival = modal.querySelector("#modal-arrival-date");
const dateDeparture = modal.querySelector("#modal-departure-date");
const adultsValue = guests[0].querySelector(".modal-input-number");
const kidsValue = guests[1].querySelector(".modal-input-number");
const modalSubmit = modal.querySelector(".button-link");

let minusBtn = guests[0].querySelector(".modal-minus");
let plusBtn = guests[0].querySelector(".modal-plus");


/* Modal */
modal.classList.add("modal-hidden");

bookingButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.toggle("modal-hidden");
});


/* Modal Inputs */
minusBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (adultsValue.value > MIN_ADULTS_VALUE) {
    adultsValue.value = String(+adultsValue.value - 1);
  }
});

plusBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (adultsValue.value < MAX_ADULTS_VALUE) {
    adultsValue.value = String(+adultsValue.value + 1);
  }
});

minusBtn = guests[1].querySelector(".modal-minus");
plusBtn = guests[1].querySelector(".modal-plus");

minusBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (kidsValue.value > MIN_KIDS_VALUE) {
    kidsValue.value = String(+kidsValue.value - 1);
  }
});
plusBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (kidsValue.value < MAX_KIDS_VALUE) {
    kidsValue.value = String(+kidsValue.value + 1);
  }
});


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
