const data = [
  {
    img: '../img/1796003421.jpg',
    name: 'SAMPLE. White chair',
    price: '429.000',
    size: '120x240',
  },
  {
    img: '../img/1796029423.jpg',
    name: 'SAMPLE. White chair',
    price: '429.000',
    size: '120x240',
  },
  {
    img: '../img/1796029583.jpg',
    name: 'SAMPLE. White chair',
    price: '429.000',
    size: '120x240',
  },
  {
    img: '../img/1796058676.jpg',
    name: 'SAMPLE. White chair',
    price: '429.000',
    size: '120x240',
  },
  {
    img: '../img/1796062456.jpg',
    name: 'SAMPLE. White chair',
    price: '429.000',
    size: '120x240',
  },
  {
    img: '../img/1796066689.jpg',
    name: 'SAMPLE. White chair',
    price: '429.000',
    size: '120x240',
  },
  {
    img: '../img/1796070362.jpg',
    name: 'SAMPLE. White chair',
    price: '429.000',
    size: '120x240',
  },
  {
    img: '../img/1796082475.jpg',
    name: 'SAMPLE. White chair',
    price: '429.000',
    size: '120x240',
  },
  {
    img: '../img/1796066765.jpg',
    name: 'SAMPLE. White chair',
    price: '429.000',
    size: '120x240',
  },
  
];

const loginBtn = document.querySelector(".header__navbar__item button");
const modalLogin = document.querySelector(".modal-login");
const modalLoginInner = document.querySelector(".modal-login__inner");
const modalRegister = document.querySelector(".modal-register");
const modalRegisterInner = document.querySelector(".modal-register__inner");
const formLogin = document.querySelector('.modal-login__form')
const formRegister = document.querySelector('.modal-register__form')
const usernameLoign = document.querySelector('#username-login')
const passwordLoign = document.querySelector('#password-login')
const usernameRegister = document.querySelector('#username-register')
const passwordRegister = document.querySelector('#password-register')
const confirmPasswordRegister = document.querySelector('#confirm-password-register')


const modalLoginFormControlNavigateText = document.querySelector(
  ".modal-login__form-control__navigate-text"
);
const modalRegisterFormControlNavigateText = document.querySelector(
  ".modal-register__form-control__navigate-text"
);

loginBtn.addEventListener("click", () => {
  modalLogin.classList.toggle("hide");
});

modalLoginInner.addEventListener("click", () => {
  modalLogin.classList.toggle("hide");
});

modalLoginFormControlNavigateText.addEventListener("click", () => {
  modalLogin.classList.toggle("hide");
  modalRegister.classList.toggle("hide");
});

modalRegisterInner.addEventListener("click", () => {
  modalRegister.classList.toggle("hide");
});

modalRegisterFormControlNavigateText.addEventListener("click", () => {
  modalLogin.classList.toggle("hide");
  modalRegister.classList.toggle("hide");
});

function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  small.innerText = "";
}

function checkEmptyError(listInput) {
  let isEmptyError = false;
  listInput.forEach((input) => {
    input.value = input.value.trim();
    if (!input.value) {
      showError(input, "Không được để trống");
    } else {
      showSuccess(input);
    }
  });

  return isEmptyError;
}

function checkLengthError(input, min, max) {
  input.value = input.value.trim();
  if (input.value.length < min) {
    showError(input, `Phải có ít nhất ${min} ký tự`);
    return true;
  }
  if (input.value.length > max) {
    showError(input, `Số ký tự không được vượt quá ${max} ký tự`);
    return false;
  } else {
    showSuccess(input);
    return false;
  }
}

function checkMatchPassword(passwordInput, confirmPasswordInput) {
  if (passwordInput.value !== confirmPasswordInput.value) {
    showError(confirmPasswordInput, "Mật khẩu không trùng khớp");
    return true;
  }
  return false;
}

formLogin.addEventListener("submit", function (event) {
  event.preventDefault();
  let isEmptyError = checkEmptyError([usernameLoign, passwordLoign]);
  let isUsernameError = checkLengthError(usernameLoign, 3, 10);
  let isPasswordError = checkLengthError(passwordLoign, 3, 10);
});

formRegister.addEventListener("submit", function (event) {
  event.preventDefault();
  let isEmptyError = checkEmptyError([
    usernameRegister,
    passwordRegister,
    confirmPasswordRegister,
  ]);
  let isUsernameError = checkLengthError(usernameRegister, 3, 10);
  let isPasswordError = checkLengthError(passwordRegister, 3, 10);
  let ischeckMatchPasswordError = checkMatchPassword(
    passwordRegister,
    confirmPasswordRegister
  );
});

const contentListProduct = document.querySelector('.content__list-product')

for(let i = 0; i < data.length; i++) {
  const html = 
  `
  <div class="content__list-product__item__img">
      <img src="${data[i].img}" alt="">
  </div>
  <a href="./detail-product.html"class="content__list-product__item__name-price">
      <h5>${data[i].name}</h5>
      <p>${data[i].price}</p>
  </a>
  
  `
  const item = document.createElement('div')
  item.className = 'content__list-product__item'
  item.innerHTML = html
  contentListProduct.appendChild(item)
}

console.log(contentListProduct);