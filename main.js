"use strict";

const errorMessage = document.querySelector(".home__error-message");
const errorIcon = document.querySelector(".hm__error-icon");
const emailInput = document.getElementById("email-input");
const submitBtn = document.querySelector(".hm__submit-button");
const form = document.querySelector(".home__form");
const hidden = document.querySelectorAll(".hidden");
const re =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", function (e) {
  const email = emailInput.value;
  e.preventDefault();
  if (email.match(re)) {
    form.submit();
  } else {
    errorIcon.classList.remove("hidden");
    errorMessage.classList.remove("hidden");
  }
});
