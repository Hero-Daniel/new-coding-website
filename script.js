import { 
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged } from './auth.js';

const menu = document.getElementById("menuIcon");
const navMenu = document.querySelector("navMenu");
// // Import the tools from your cleaned-up firebase.js


// // Grab your UI elements


// const loginBtn = document.getElementById("login");
// const modal = document.getElementById("myModal");
// const authEmailInput = document.getElementById("authEmailInput");
// const authPasswordInput = document.getElementById("authPasswordInput");
// const modalSignInBtn = document.getElementById("modalSignInBtn");

// console.log(loginBtn);

// // 1. Open Modal when Navbar Login is clicked
//     loginBtn.addEventListener('click', () => {
//       console.log("you clicked me")
//         modal.classList.remove('hidden');
//         modal.classList.add('flex');
//     });

// // 2. Handle the Firebase Sign-In
// modalSignInBtn.addEventListener('click', async () => {
//     const email = authEmailInput.value;
//     const password = authPasswordInput.value;
    
//     try {
//         const userCredential = await signInWithEmailAndPassword(auth, email, password);
//         console.log("Logged in:", userCredential.user);
//         modal.classList.add('hidden'); // Close modal on success
//     } catch (error) {
//         document.getElementById("authErrorMessage").textContent = error.message;
//     }
// });

// // 3. The "Observer" - Watch for login state changes
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         console.log("User is authenticated:", user.email);
//         if (loginBtn) loginBtn.innerText = "Logout";
//     } else {
//         if (loginBtn) loginBtn.innerText = "Login";
//     }
// });

menu.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");

  if(navMenu.classList.contains("hidden")) {
    navMenu.style.top = "-400px";
    navMenu.style.opacity = "0";
  } else {
    navMenu.style.top = "80px";  // Slide down to the right position
    navMenu.style.opacity = "1";
  }
});
console.log(menu);
const swiper = new Swiper('.swiper', {
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
      slidesPerView: 3,      // 👈 shows 2 slides side-by-side
      spaceBetween: 20,      // 👈 space between them
    }
   },
  //  pagination: {
  //    el: '.swiper-pagination',
  //    clickable: true,
  //  },
 
   navigation: {
     nextEl: '.swiper-btn-next',
     prevEl: '.swiper-btn-prev',
   },
 
   scrollbar: {
     el: '.swiper-scrollbar',
   },
 });
 console.log(swiper);

const loginBtn = document.getElementById('login');
const modal = document.getElementById('myModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');

loginBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
  modal.classList.add('flex'); 
});


const closeModal = () => {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
};

modalCloseBtn.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

const authEmailInput = document.getElementById("authEmailInput");
const authPasswordInput = document.getElementById("authPasswordInput");
const authErrorMessage = document.getElementById("authErrorMessage");
const modalSignInBtn = document.getElementById("modalSignInBtn");
const modalSignUpBtn = document.getElementById("modalSignUpBtn");
const modalSignup = document.getElementById("modalSignup");


modalSignUpBtn.addEventListener('click', async () => {
  modalSignup.classList.remove('hidden');
  modalSignup.classList.add('flex'); 
  console.log("hello")
  const email = authEmailInput.value;
  const password = authPasswordInput.value;
  
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Account Created!");
    closeModal();
  } catch (error) {
    authErrorMessage.innerText = error.message;
  }
});
modalSignInBtn.addEventListener("click", async () => {
  const email = authEmailInput.value;
  const password = authPasswordInput.value;
  
  try {
    await signInWithEmailAndPassword(auth, email, password);
    closeModal();
  } catch (error) {
    authErrorMessage.innerText = "Invalid email or password.";
  }
});


