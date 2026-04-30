// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./firebase.js";

const courses = [
  {
    id: 1,
    title: "Front End Development",
    description: "Learn HTML, CSS, JavaScript and build real-world projects.",
    points: [
      "Build responsive layouts with HTML & CSS",
      "Master JavaScript for dynamic interactions",
      "Work with APIs and real-world data",
      "Create portfolio-ready projects",
    ],
    duration: "12 Weeks",
    level: "Beginner",
    price: "$299",
    image: "/img/Full Stack Development.png",
    categories: "web Development",
    link: "https://www.mygreatlearning.com/academy/premium/frontend-web-development-essentials",
  },
  {
    id: 2,
    title: "Back End Development",
    description: "Master server-side programming with Node.js and databases.",
    points: [
        "Build RESTful APIs with Node.js",
        "Work with databases like MongoDB",
        "Handle authentication and security",
        "Structure scalable backend systems"
      ],
    duration: "12 Weeks",
    level: "Intermediate",
    price: "$399",
    image: "/img/backend.jpg",
    categories: "web Development",
  },
  {
    id: 3,
    title: "Full Stack Development",
    description: "Become a versatile developer with both front-end and back-end skills.",
    points: [
        "Connect frontend with backend systems",
        "Build full-stack applications from scratch",
        "Manage databases and APIs effectively",
        "Deploy real-world projects"
      ],
    duration: "24 Weeks",
    level: "Advanced",
    price: "$99",
    image: "/img/fullstack.jpg",
    categories: "web Development",
    link: "https://www.mygreatlearning.com/academy/premium/full-stack-web-development-with-mern-stack"
  },
  {
    id: 4,
    title: "Data Science",
    description:
      "Learn data analysis, visualization, and machine learning with Python.",
      points: [
        "Analyze and visualize datasets",
        "Use Python, Pandas, and NumPy",
        "Build machine learning models",
        "Clean and preprocess data"
      ],
    duration: "16 Weeks",
    level: "Intermediate",
    price: "$499",
    image: "/img/Data Science.png",
    categories: "Data",
    link: "https://www.mygreatlearning.com/academy/learn-for-free/courses/data-science-foundations"
  },
  {
    id: 5,
    title: "Mobile App Development",
    description: "Build cross-platform mobile apps using React Native.",
    points: [
        "Build cross-platform apps with React Native",
        "Design responsive mobile interfaces",
        "Integrate APIs into mobile apps",
        "Deploy apps to app stores"
      ],
    duration: "16 Weeks",
    level: "Intermediate",
    price: "$449",
    image: "/img/Mobile Development.png",
    categories: "Mobile Development",
    link: ""
  },
  {
    id: 6,
    title: "Cybersecurity",
    description: "Learn how to protect systems and data from cyber threats.",
    points: [
        "Understand common cyber threats",
        "Learn ethical hacking fundamentals",
        "Secure networks and applications",
        "Implement data protection strategies"
      ],
    duration: "12 Weeks",
    level: "Advanced",
    price: "$399",
    image: "/img/Data-Science.jpg",
    categories: "Cloud & Infrastructure",
    link: "https://www.mygreatlearning.com/academy/premium/cybersecurity-foundations-digital-security-essentials"
  },
  {
    id: 7,
    title: "Cloud Computing",
    description: "Master cloud platforms like AWS, Azure, and Google Cloud.",
    points: [
        "Work with AWS, Azure, and GCP",
        "Deploy applications to the cloud",
        "Understand cloud architecture",
        "Manage storage and servers"
      ],
    duration: "12 Weeks",
    level: "Advanced",
    price: "$499",
    image: "/img/cloud.jpg",
    categories: "Cloud & Infrastructure",
  },
  {
    id: 8,
    title: "Artificial Intelligence",
    description: "Explore AI concepts, algorithms, and applications.",
    points: [
        "Understand AI fundamentals",
        "Work with machine learning models",
        "Explore neural networks",
        "Build AI-powered applications"
      ],
    duration: "16 Weeks",
    level: "Advanced",
    price: "$599",
    image: "/img/Data-Science.jpg",
    categories: "Cloud & Infrastructure",
    link: "https://www.mygreatlearning.com/academy/premium/master-artificial-intelligence",
  },
  {
    id: 9,
    title: "UX/UI Design",
    description:
      "Learn the principles of user experience and interface design.",
      points: [
        "Understand UX design principles",
        "Design interfaces using Figma",
        "Create wireframes and prototypes",
        "Improve usability and accessibility"
      ],
      duration: "12 Weeks",
    level: "Beginner",
    price: "$299",
    image: "/img/Data-Science.jpg",
    categories: "Design",
  },
  {
    id: 10,
    title: "DevOps",
    description:
      "Master the tools and practices for continuous integration and deployment.",
      points: [
        "Understand CI/CD pipelines",
        "Use tools like Docker and Git",
        "Automate deployment processes",
        "Monitor application performance"
      ],
      duration: "12 Weeks",
    level: "Advanced",
    price: "$399",
    image: "/img/Data-Science.jpg",
    categories: "Cloud & Infrastructure",
  },
  {
    id: 11,
    title: "Game Development",
    description: "Learn to create engaging games using Unity and C#.",
    points: [
        "Build games using Unity",
        "Write game logic with C#",
        "Design engaging game mechanics",
        "Publish playable games"
      ],
    duration: "16 Weeks",
    level: "Intermediate",
    price: "$449",
    image: "/img/Data-Science.jpg",
    categories: "Web",
  },
  {
    id: 12,
    title: "Blockchain Development",
    description:
      "Understand blockchain technology and build decentralized applications.",
      points: [
        "Understand blockchain fundamentals",
        "Build smart contracts",
        "Work with Web3 technologies",
        "Develop decentralized applications"
      ],
      duration: "12 Weeks",
    level: "Basic",
    price: "Free",
    image: "/img/Data-Science.jpg",
    categories: "web development",
    link: "https://www.mygreatlearning.com/academy/learn-for-free/courses/blockchain-basics"
  },
  {
    id: 13,
    title: "Digital Marketing",
    description:
      "Learn SEO, social media marketing, and online advertising strategies.",
      points: [
        "Learn SEO fundamentals",
        "Run social media campaigns",
        "Understand paid advertising",
        "Analyze marketing performance"
      ],
      duration: "12 Weeks",
    level: "Beginner",
    price: "Free",
    image: "/img/Data-Science.jpg",
    categories: "Data",
    lik: "https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-digital-marketing"
  },
  {
    id: 14,
    title: "Project Management",
    description: "Master project management methodologies and tools.",
    points: [
        "Understand Agile and Scrum methodologies",
        "Manage project timelines effectively",
        "Use tools like Jira and Trello",
        "Lead teams and manage workflows"
      ],
    duration: "12 Weeks",
    level: "Intermediate",
    price: "$399",
    image: "/img/Data-Science.jpg",
    categories: "Data",
    link: "https://www.mygreatlearning.com/academy/learn-for-free/courses/project-management"
  },
  {
    id: 15,
    title: "Another Intelligence",
    description: "Explore AI concepts, algorithms, and applications.",
    points: [
        "Explore advanced AI techniques",
        "Understand deep learning concepts",
        "Work with large datasets",
        "Build intelligent systems"
      ],
    duration: "16 Weeks",
    level: "Advanced",
    price: "$599",
    image: "/img/Data-Science.jpg",
    categories: "Cloud & Infrastructure",
    link: "https://www.mygreatlearning.com/academy/premium/master-generative-ai"
  },
];

const container = document.getElementById("course-container");

function displayCourses(courseArray) {
  container.innerHTML = "";

  courseArray.forEach((course) => {
    const card = document.createElement("div");

    card.className =
      "card bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col justify-between h-full";

    card.innerHTML = ` 
        <img src ="${course.image}"
        alt = "${course.title}"
        class="w-full h-48 object-cover">
        
        <div class="p-6 space-y-4">
        <h2 class="text-2xl font-bold text-gray-800">${course.title}</h2>
        <p class="text-gray-400 text-lg">${course.description}</p>

         <p class="text-sm text-gray-500">
          <span class="font-semibold">Level:</span> ${course.level}
        </p>

        <p class="text-lg font-bold text-indigo-600">
          ${course.price}
        </p>

         <button class="enroll-btn w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition cursor-pointer"
         data-id="${course.id}">
          Enroll Now
        </button>
        </div>
        `;
    container.appendChild(card);
  });
}
displayCourses(courses);

const input = document.getElementById("inputCourse");

function handleSearch() {
  const query = input.value.toLowerCase().trim();
  if (query === "") {
    displayCourses(courses);
    return;
  }
  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query) ||
      course.categories.toLowerCase().includes(query)
  );
  if (filteredCourses.length === 0) {
    container.innerHTML =
      "<p class='text-gray-600 text-center'>No courses found matching your search.</p>";
  } else {
    displayCourses(filteredCourses);
  }
}

function debounce(callback, delay) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

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
  const webCourses = courses.filter(
    (course) => course.categories.toLowerCase() === "web development"
  );
  displayCourses(webCourses);
});
btnMobile.addEventListener("click", () => {
  const mobileCourses = courses.filter(
    (course) => course.categories.toLowerCase() === "mobile development"
  );
  displayCourses(mobileCourses);
});
btnData.addEventListener("click", () => {
  const webCourses = courses.filter(
    (course) => course.categories.toLowerCase() === "data"
  );
  displayCourses(webCourses);
});
btnCloud.addEventListener("click", () => {
  const cloudCourses = courses.filter(
    (course) => course.categories.toLowerCase() === "cloud & infrastructure"
  );
  displayCourses(cloudCourses);
});
btnDesign.addEventListener("click", () => {
  const designCourses = courses.filter(
    (course) => course.categories.toLowerCase() === "design"
  );
  displayCourses(designCourses);
});
// console.log(btnDesign);

const modal = document.getElementById("courseModal");
const cancelBtn = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalPoints = document.getElementById("modalPoints");
const modalLink = document.getElementById("modalLink");

container.addEventListener("click", (e) => {
  const btn = e.target.closest(".enroll-btn");

  if (!btn) return;
  const courseId = Number(btn.dataset.id);
  const selectedCourse = courses.find((course) => course.id === courseId);

  if (!selectedCourse) return;

  modalTitle.textContent = selectedCourse.title;
  modalDescription.textContent = selectedCourse.description;

  // Use optional chaining (?.) and nullish coalescing (??) explain dis part and y its necessary
  modalPoints.innerHTML = selectedCourse.points
    ? selectedCourse.points.map((p) => `<p>✔ ${p}</p>`).join("")
    : "<p>No details available</p>";

  modalLink.href = selectedCourse.link || "#";

  modal.classList.remove("hidden");
  modal.classList.add("flex");
});

document.getElementById("closeModal").addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  });
// // --- Modal Control Functions ---
// function openAuthModal(courseTitle) {
//   courseNameSpan.innerText = courseTitle;
//   modal.style.display = "flex"; // Use "flex" to center content with Tailwind's flex utilities

//   authEmailInput.value = "";
//   authPasswordInput.value = "";
//   authErrorMessage.textContent = "";
// }

// function closeAuthModal() {
//   modal.style.display = "none"; // Hide the modal
// }

// courseContainer.addEventListener("click", (e) => {
//     const target = e.target;

//     if (target.classList.contains("enroll-btn") && target.closest(".card")) {
//       const cardElement = target.closest(".card");
//       const courseTitle = cardElement.querySelector("h2").innerText;

//       const user = auth.currentUser;

//       if (user) {
//         // already logged in
//         window.location.href = `/course.html?id=${course.id}`;
//       } else {
//         // not logged in
//         openAuthModal(courseTitle);
//       }
//     }
//   });

// cancelBtn.addEventListener("click", () => {
//   closeAuthModal();
// });
// modalCloseBtn.addEventListener("click", () => {
//   closeAuthModal();
// });

// modalSignInBtn.addEventListener("click", async () => {
//     try {
//       await signInWithEmailAndPassword(
//         auth,
//         authEmailInput.value,
//         authPasswordInput.value
//       );
//       closeAuthModal();
//     } catch (error) {
//       authErrorMessage.textContent = error.message;
//     }
//   });

//   modalSignUpBtn.addEventListener("click", async () => {
//     try {
//       await createUserWithEmailAndPassword(
//         auth,
//         authEmailInput.value,
//         authPasswordInput.value
//       );
//       closeAuthModal();
//     } catch (error) {
//       authErrorMessage.textContent = error.message;
//     }
//   });

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

// 1. Open Modal when Navbar Login is clicked
// loginBtn.addEventListener('click', () => {
//   console.log("you clicked me")
//     modal.classList.remove('hidden');
//     modal.classList.add('flex');
// });

// 2. Handle the Firebase Sign-In
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

// my view courses on homepage
