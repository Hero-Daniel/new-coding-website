import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "./auth.js";

const menu = document.getElementById("menuIcon");
const navMenu = document.querySelector("navMenu");

menu.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");

  if (navMenu.classList.contains("hidden")) {
    navMenu.style.top = "-400px";
    navMenu.style.opacity = "0";
  } else {
    navMenu.style.top = "80px"; // Slide down to the right position
    navMenu.style.opacity = "1";
  }
});
console.log(menu);
const swiper = new Swiper(".swiper", {
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3, // 👈 shows 2 slides side-by-side
      spaceBetween: 20, // 👈 space between them
    },
  },
  //  pagination: {
  //    el: '.swiper-pagination',
  //    clickable: true,
  //  },

  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
console.log(swiper);

const loginBtn = document.getElementById("login");
const modal = document.getElementById("myModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");

let currentUser = null;

onAuthStateChanged(auth, (user) => { // i dont understand dis part
  currentUser = user; // redefining the currentUser, does da mean we can leta access both
  loginBtn.innerText = user ? "Logout" : "Login";
});

loginBtn.addEventListener("click", () => {
  if (currentUser) {
    signOut(auth);
  } else {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
});

const closeModal = () => {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
};
// will u call dis a call back function
modalCloseBtn.addEventListener("click", closeModal);

// explain event wellll
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});


let message = "";
let strongPasswordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// signIn button
const modalSignInBtn = document.querySelectorAll(".modalSignInBtn");

modalSignInBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("clicked")

  const signEmail = document.getElementById("signInEmail").value;
  const signPassword = document.getElementById("signInPassword").value;

  if (signEmail === "" || !emailRegex.test(signEmail)) { // explain dis line
    message = "Please enter a valid email address";
  } else if (signPassword === "") {
    message = "Password cannot be empty";
  } else {
    signIn(signEmail, signPassword);
    closeModal();
  }
  document.getElementById("authErrorMessage").textContent = message; 
  })
});

// from firebase
async function signIn(email, password) {
  const messageBox = document.getElementById("authErrorMessage");
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    messageBox.textContent = "Welcome Back"
    // console.log("User LoggedIn:", userCredential.user);

    document.getElementById("signInEmail").value = "";
    document.getElementById("signInPassword").value = "";

  } catch (error) {
    if (error.code === "auth/user-not-found") {
      messageBox.textContent = "No account found with this email.";
    } else if (error.code === "auth/wrong-password") {
      messageBox.textContent = "Incorrect password. Try again.";
    } else {
      messageBox.textContent = error.message;
    }
  }
};
// for password visibility
let signInPassword = document.getElementById("signInPassword");
let signEyeIcon = document.getElementById("signEyeIcon");

signEyeIcon.addEventListener("click", function() {
  if (signInPassword.type === "password") {
    signInPassword.type = "text";
    signEyeIcon.src = "/img/eyes.svg";
  } else {
    signInPassword.type = "password";
    signEyeIcon.src = "/img/eye.svg";
  }
});


// SignUp Modal
const modalSignUpBtn = document.getElementById("modalSignUpBtn");
const openNewModal = document.querySelectorAll(".openNewModal");
const modalSignup = document.getElementById("signupModal");
const xBtn = document.getElementById("xBtn");

openNewModal.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    modalSignup.classList.remove("hidden");
    modalSignup.classList.add("flex");
    modal.classList.add("hidden");
  });
});

const xModal = () => { // will u call dis a call back function
  modalSignup.classList.add("hidden");
  modalSignup.classList.remove("flex");
};
xBtn.addEventListener("click", xModal);

window.addEventListener("click", (event) => {
  if (event.target === modalSignup) {
    xModal();
  }
});

const backBtn = document.getElementById("backToLogin");
backBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  modalSignup.classList.add("hidden");
});

modalSignUpBtn.addEventListener("click", function () {
  const authEmailInput = document.getElementById("authEmailInput");
  const authPasswordInput = document.getElementById("authPasswordInput");
  const confirmedPasswordInput = document.getElementById("confirmedPassword");

  const email = authEmailInput.value.trim(); // y do i av to create variable email when i can just use authEmailInput.value in the if statement?
  const password = authPasswordInput.value.trim();  
  const confirmedPassword = confirmedPasswordInput.value.trim();

  if (email === "" || !emailRegex.test(email)) {
    message = "Please enter a valid email address";
  } else if (password === "") {
    message = "Password cannot be empty";
  } else if (!strongPasswordRegex.test(password)) {
    message =
      "Password must be at least 8 characters and include a letter, number, and special character";
  } else if (confirmedPassword === "") {
    message = "Please confirm your password";
  } else if (password !== confirmedPassword) {
    message = "Password do not match";
  } else {
    signUp(email, password);
    message = "Creating an Account";
    authEmailInput.value = "";
    authPasswordInput.value = "";
    confirmedPasswordInput.value = "";
  }
  document.getElementById("auth-message").textContent = message; 
});
async function signUp(email, password) {
  const messageBox = document.getElementById("auth-message");
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    messageBox.textContent = "Account created successfully 🎉"

    document.getElementById("authEmailInput").value = "";
    document.getElementById("authPasswordInput").value = "";
    document.getElementById("confirmedPassword").value = "";
    document.getElementById("auth-message").textContent = "";

  } catch (error) {
    messageBox.textContent = error.message;
  }
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    loginBtn.innerText = "Logout";
  } else {
    loginBtn.innerText = "Login";
  }
});

// for password visibility
let password = document.getElementById("authPasswordInput");
let eyeIcon = document.getElementById("eyeIcon");

eyeIcon.addEventListener("click", function() {
  if (password.type === "password") {
    password.type = "text";
    eyeIcon.src = "/img/eyes.svg";
  } else {
    password.type = "password";
    eyeIcon.src = "/img/eye.svg";
  }
});

let iconPassword = document.getElementById("confirmedPassword");
let eyeIcon2 = document.getElementById("eyeIcon2");

eyeIcon2.addEventListener("click", function() {
  if (iconPassword.type === "password") {
    iconPassword.type = "text";
    eyeIcon2.src = "/img/eyes.svg";
  } else {
    iconPassword.type = "password";
    eyeIcon2.src = "/img/eye.svg";
  }
});

// apply button

let applyBtn = document.getElementById("apply");

applyBtn.addEventListener("click", function() {
  if(currentUser) {
      window.location.href = "courses.html";
    } else {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
  }
});

//learn more button, explain dis session
document.addEventListener("click", function (e) {
  const button = e.target.closest(".learn-more-btn"); 
  if(!button) return;

    const modalId = button.dataset.modal; // get the value of the data-modal attribute from the clicked button? buh e.target is not targeting my fullStackModalBtn, aw will i understand dis line??
    const modal = document.getElementById(modalId);

    modal.classList.remove("hidden");
    modal.classList.add("flex");
});
document.addEventListener("click", function (e) {
if (e.target.classList.contains("closeBtn")) {
  const modal = e.target.closest(".modal");  
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

if (e.target.classList.contains("modal")) {
  e.target.classList.add("hidden");
  e.target.classList.remove("flex");
}
});