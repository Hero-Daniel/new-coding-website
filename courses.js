// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./firebase.js";

const user = auth.currentUser;

console.log(user)

console.log("tea")



const courses = [
    {
        id: 1,
        title: "Front End Development",
        description: "Learn HTML, CSS, JavaScript and build real-world projects.",
        duration: "12 Weeks",
        level: "Beginner",
        price: "$299",
        image: "/img/Full Stack Development.png",
        categories: "web Development"
    },
    {
        id: 2,
        title: "Back End Development",
        description: "Master server-side programming with Node.js and databases.",
        duration: "12 Weeks",
        level: "Intermediate",
        price: "$399",
        image: "/img/backend.jpg",
        categories: "web Development"
    },
    {
        id: 3,
        title: "Full Stack Development",
        description: "Become a versatile developer with both front-end and back-end skills.",
        duration: "24 Weeks",
        level: "Advanced",
        price: "$599",
        image: "/img/fullstack.jpg",
        categories: "web Development"
    },
    {
        id: 4,
        title: "Data Science",
        description: "Learn data analysis, visualization, and machine learning with Python.",
        level: "Intermediate",
        price: "$499",
        image: "/img/Data-Science.jpg",
        categories: "Data"
    },
    {
        id: 5,
        title: "Mobile App Development",
        description: "Build cross-platform mobile apps using React Native.",
        duration: "16 Weeks",
        level: "Intermediate",
        price: "$449",
        image: "/img/Mobile Development.png",
        categories: "Mobile Development"
    },
    {
        id: 6,
        title: "Cybersecurity",
        description: "Learn how to protect systems and data from cyber threats.",
        duration: "12 Weeks",
        level: "Advanced",
        price: "$399",
        image: "/img/Data-Science.jpg",
        categories: "Cloud & Infrastructure"
    },
    {
        id: 7,
        title: "Cloud Computing",
        description: "Master cloud platforms like AWS, Azure, and Google Cloud.",
        duration: "12 Weeks",
        level: "Advanced",
        price: "$499",
        image: "/img/Data-Science.jpg",
        categories: "Cloud & Infrastructure"
    },
    {
        id: 8,
        title: "Artificial Intelligence",
        description: "Explore AI concepts, algorithms, and applications.",
        duration: "16 Weeks",
        level: "Advanced",
        price: "$599",
        image: "/img/Data-Science.jpg",
        categories: "Cloud & Infrastructure"
    },
    {
        id: 9,
        title: "UX/UI Design",
        description: "Learn the principles of user experience and interface design.",
        duration: "12 Weeks",
        level: "Beginner",
        price: "$299",
        image: "/img/Data-Science.jpg",
        categories: "Design"
    },
    {
        id: 10,
        title: "DevOps",
        description: "Master the tools and practices for continuous integration and deployment.",
        duration: "12 Weeks",
        level: "Advanced",
        price: "$399",
        image: "/img/Data-Science.jpg",
        categories: "Cloud & Infrastructure"
    },
    {
        id: 11,
        title: "Game Development",
        description: "Learn to create engaging games using Unity and C#.",
        duration: "16 Weeks",
        level: "Intermediate",
        price: "$449",
        image: "/img/Data-Science.jpg",
        categories: "Web"
    },
    {
        id: 12,
        title: "Blockchain Development",
        description: "Understand blockchain technology and build decentralized applications.",
        duration: "12 Weeks",
        level: "Advanced",
        price: "$499",
        image: "/img/Data-Science.jpg",
        categories: "web development"
    },
    {
        id: 13,
        title: "Digital Marketing",
        description: "Learn SEO, social media marketing, and online advertising strategies.",
        duration: "12 Weeks",
        level: "Beginner",
        price: "$299",
        image: "/img/Data-Science.jpg",
        categories: "Data"
    },
    {
        id: 14,
        title: "Project Management",
        description: "Master project management methodologies and tools.",
        duration: "12 Weeks",
        level: "Intermediate",
        price: "$399",
        image: "/img/Data-Science.jpg",
        categories: "Data"
    },
    {
        id: 15,
        title: "Another Intelligence",
        description: "Explore AI concepts, algorithms, and applications.",
        duration: "16 Weeks",
        level: "Advanced",
        price: "$599",
        image: "/img/Data-Science.jpg",
        categories: "Cloud & Infrastructure"
    },

];

const container = document.getElementById("course-container");

function displayCourses(courseArray) {
    container.innerHTML = "";

    courseArray.forEach(course => {
        const card = document.createElement("div");

        card.className = 
        "card bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col justify-between h-full";

        card.innerHTML = ` 
        <img src ="${course.image}"
        alt = "${course.title}"
        class = "w-full h-48 object-cover">
        
        <div class="p-6 space-y-4">
        <h2 class="text-2xl font-bold text-gray-800">${course.title}</h2>
        <p class="text-gray-400 text-lg">${course.description}</p>

         <p class="text-sm text-gray-500">
          <span class="font-semibold">Level:</span> ${course.level}
        </p>

        <p class="text-lg font-bold text-indigo-600">
          ${course.price}
        </p>

         <button class="enroll-btn w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition cursor-pointer">
          Enroll Now
        </button>
        </div>
        `;
        container.appendChild(card);
    });
};
displayCourses(courses);

const input = document.getElementById("inputCourse");

function handleSearch(){
    const query = input.value.toLowerCase().trim();
    if (query === "") {
        displayCourses(courses);
        return;
    }
    const filteredCourses = courses.filter(course => 
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.categories.toLowerCase().includes(query)
    );
    if (filteredCourses.length === 0) {
        container.innerHTML = "<p class='text-gray-600 text-center'>No courses found matching your search.</p>";
    } else {
    displayCourses(filteredCourses)
    }
};

function debounce(callback, delay) {
    let timeout;

    return function (...args) {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    };
};

input.addEventListener("input", debounce(handleSearch, 300));


const btnAll = document.getElementById("all");
const btnWeb = document.getElementById("web-dev");
const btnMobile = document.getElementById("mobile");
const btnData = document.getElementById("data");
const btnCloud = document.getElementById("cloud");
const btnDesign = document.getElementById("design");

 
btnAll.addEventListener("click", () => {
            displayCourses(courses);
});
btnWeb.addEventListener("click", () => {
        const webCourses = courses.filter(course => course.categories.toLowerCase() === "web development");
        displayCourses(webCourses);
});
btnMobile.addEventListener("click", () => {
    const mobileCourses = courses.filter(course => course.categories.toLowerCase() === "mobile development");
    displayCourses(mobileCourses);
});
btnData.addEventListener("click", () => {
    const webCourses = courses.filter(course => course.categories.toLowerCase() === "data");
    displayCourses(webCourses);
});
btnCloud.addEventListener("click", () => {
    const cloudCourses = courses.filter(course => course.categories.toLowerCase() === "cloud & infrastructure");
    displayCourses(cloudCourses);
});
btnDesign.addEventListener("click", () => {
    const designCourses = courses.filter(course => course.categories.toLowerCase() === "design");
    displayCourses(designCourses);
});
console.log(btnDesign);




const modal = document.getElementById("myModal");
const courseNameSpan = document.getElementById("courseName");
const cancelBtn = document.getElementById("cancelBtn");
const modalCloseBtn = document.getElementById("modalCloseBtn"); // The 'x' button inside the modal
const courseContainer = document.getElementById("course-container");

// Authentication related elements inside the modalf
const authEmailInput = document.getElementById("authEmailInput");
const authPasswordInput = document.getElementById("authPasswordInput");
const authErrorMessage = document.getElementById("authErrorMessage");
const modalSignInBtn = document.getElementById("modalSignInBtn");
const modalSignUpBtn = document.getElementById("modalSignUpBtn");
const loginBtn = document.querySelector(".log")

// --- Modal Control Functions ---
function openAuthModal(courseTitle) {
  courseNameSpan.innerText = courseTitle;
  modal.style.display = "flex"; // Use "flex" to center content with Tailwind's flex utilities
  
  authEmailInput.value = "";
  authPasswordInput.value = "";
  authErrorMessage.textContent = "";
}

function closeAuthModal() {
  modal.style.display = "none"; // Hide the modal
}



courseContainer.addEventListener("click", (e) => {
    const target = e.target;
  
    if (target.classList.contains("enroll-btn") && target.closest(".card")) {
      const cardElement = target.closest(".card");
      const courseTitle = cardElement.querySelector("h2").innerText;
  
      const user = auth.currentUser;
  
      if (user) {
        // already logged in
        window.location.href = `/course.html?id=${course.id}`;
      } else {
        // not logged in
        openAuthModal(courseTitle);
      }
    }
  });

cancelBtn.addEventListener("click", () => {
  closeAuthModal();
});
modalCloseBtn.addEventListener("click", () => {
  closeAuthModal();
});

modalSignInBtn.addEventListener("click", async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        authEmailInput.value,
        authPasswordInput.value
      );
      closeAuthModal();
    } catch (error) {
      authErrorMessage.textContent = error.message;
    }
  });
  
  modalSignUpBtn.addEventListener("click", async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        authEmailInput.value,
        authPasswordInput.value
      );
      closeAuthModal();
    } catch (error) {
      authErrorMessage.textContent = error.message;
    }
  });

  

//   const logoutBtn = document.getElementById("logoutBtn");

//   logoutBtn.addEventListener("click", async () => {
//     try {
//       await signOut(auth);
//       alert("Logged out successfully");
  
//       // redirect after logout (optional)
//       window.location.href = "/index.html";
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   });