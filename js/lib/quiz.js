document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const form = document.querySelector(".quiz__form");
  const formItems = form.querySelectorAll("fieldset");
  const btnsNext = form.querySelectorAll(".form__btn-next");
  const btnsPrev = form.querySelectorAll(".form__btn-prev");
  const steps = document.querySelectorAll(".steps__item");
  const lines = document.querySelectorAll(".progress__line");
  const btnSubmit = form.querySelector(".form__btn-submit");
  const lastSlide = form.querySelector(".form__send-block");

  btnSubmit.disabled = true;

  // Кнопка "Далее"
  btnsNext.forEach((btn, btnIndex) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      formItems[btnIndex].classList.add("hidden");
      setTimeout(nextSlide, 200);
      function nextSlide() {
        formItems[btnIndex].style.display = "none";
        formItems[btnIndex + 1].style.display = "flex";
        steps[btnIndex].classList.remove("active");
        steps[btnIndex + 1].classList.add("active");
        lines[btnIndex + 1].classList.add("active");
      }
    });

    btn.disabled = true;
  });

  // Кнопка "Назад"
  for (let i = 0; i < btnsPrev.length; i++) {
    btnsPrev[i].addEventListener("click", (event) => {
      event.preventDefault();
      formItems[i].classList.remove("hidden");
      formItems[i + 1].style.display = "none";
      formItems[i].style.display = "flex";
      steps[i + 1].classList.remove("active");
      steps[i].classList.add("active");
      lines[i + 1].classList.remove("active");
      lines[i].classList.add("active");
      form.classList.remove('error');
    });
  }

  formItems.forEach((formItem, formItemIndex) => {
    if (formItemIndex === 0) {
      formItem.style.display = "flex";
    } else {
      formItem.style.display = "none";
    }
    if (formItemIndex !== formItems.length - 1) {
      const inputs = formItem.querySelectorAll("input");
      inputs.forEach((input) => {
        const parent = input.parentNode;
        input.checked = false;
        parent.classList.remove("active-radio");
        parent.classList.remove("active-checkbox");
      });
    }

    //Проверка заполнения даты

    const valueDate = formItem.querySelectorAll(".form__date");

    if (formItemIndex > 1) {
      valueDate.forEach((date) => {
        date.addEventListener("change", (event) => {
          if (!(valueDate[0].value == "" || valueDate[1].value == "")) {
            btnsNext[formItemIndex].disabled = false;
            form.classList.remove('error');
          } else {
            btnsNext[formItemIndex].disabled = true;
          }
        });
      });
    }

    //Проверка текстовых блоков города

    const countryText = formItem.querySelectorAll(".form__city-qq .form__text");
    if (formItemIndex > 2) {
      countryText.forEach((country) => {
        country.addEventListener("change", (event) => {
          if (
            !(
              countryText[0].value == "" ||
              countryText[1].value == "" ||
              countryText[2].value == "" ||
              countryText[3].value == ""
            )
          ) {
            //разблокировать кнопку именно эту
            btnsNext[formItemIndex].disabled = false;
            form.classList.remove('error');
          } else {
            //заблокировать кнопку
            btnsNext[formItemIndex].disabled = true;
          }
        });
      });
    }

    //Появление ошибки при незаполненных полях

    const errorBtns = formItem.querySelectorAll(".btn-next__disabled");

    errorBtns.forEach((errorBtn) => {
      errorBtn.addEventListener("click", () => {
        errorBtn.parentElement.parentElement.parentElement.parentElement.classList.add('error');
      });
    });



    //Проверка радио

    formItem.addEventListener("change", (event) => {
      const target = event.target;
      const inputsChecked = formItem.querySelectorAll("input:checked");

      if (formItemIndex < 2) {
        if (inputsChecked.length > 0) {
          //разблокировать кнопку именно эту
          btnsNext[formItemIndex].disabled = false;
          form.classList.remove('error');

        } else {
          //заблокировать кнопку
          btnsNext[formItemIndex].disabled = true;
        }
      }

      if (formItemIndex !== formItems.length) {
        if (target.classList.contains("form__radio")) {
          const radios = formItem.querySelectorAll(".form__radio");

          radios.forEach((input) => {
            if (input === target) {
              input.parentNode.classList.add("active-radio");
              formItems[formItemIndex].classList.add("hidden");
              setTimeout(nextSlide, 300);

              function nextSlide() {
                formItems[formItemIndex].style.display = "none";
                formItems[formItemIndex + 1].style.display = "flex";
                steps[formItemIndex].classList.remove("active");
                steps[formItemIndex + 1].classList.add("active");
                lines[formItemIndex + 1].classList.add("active");
              }
            } else {
              input.parentNode.classList.remove("active-radio");
            }
          });
        } else if (target.classList.contains("form__input")) {
          target.parentNode.classList.toggle("active-checkbox");
        } else {
          return;
        }
      }
    });
  });


  let textInputs = document.querySelectorAll('.js__text');

  textInputs.forEach((input)=> {
    input.addEventListener('input', (e) => {
      input.value = input.value.replace(/[^a-zа-яё\s]/gi, '');
    })
  })


  //Проверка текстовых блоков имя+почта
  const registrText = form.querySelectorAll(".form__reg .form__text");
  registrText.forEach((field) => {
    field.addEventListener("input", () => {
      if (!(registrText[0].value == "" || registrText[1].value == "")) {
        //разблокировать кнопку
        const name = document.querySelector(".name-block");
        const mail = document.querySelector(".mail-block");
        name.innerHTML = registrText[0].value;
        mail.innerHTML = registrText[1].value;
        btnSubmit.disabled = false;
        document.querySelector('.quiz__body').classList.remove('error');
      } else {
        //заблокировать кнопку
        btnSubmit.disabled = true;
      }
    });
  });

//Кнопка отправки
  btnSubmit.addEventListener("click", (event) => {
    setTimeout(watchlastSlide, 200);
    function watchlastSlide() {
      form.querySelector(".form__reg").style.display = "none";
      document.querySelector(".quiz__header").style.display = "none";
      document.querySelector(".quiz__footer").style.display = "none";
      lastSlide.style.display = "flex";
    }
  });
});
