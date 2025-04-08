function animateStats() {
    let stat1 = document.getElementById("num1");
    let stat2 = document.getElementById("num2");
    let stat3 = document.getElementById("num3");

    let current1 = 0;
    let current2 = 0;
    let current3 = 0;

    const maxCount = 100; // Maximum value before resetting

    function incrementStat(stat, current) {
      current++;
      if (current > maxCount) {
        current = 0; // Reset when max value is reached
      }
      stat.innerHTML = current; 
      return current;
    }

    // Loop the stats increment every 50ms (speed up the increment)
    setInterval(() => {
      current1 = incrementStat(stat1, current1);
      current2 = incrementStat(stat2, current2);
      current3 = incrementStat(stat3, current3);
    }, 50); // Increment every 50ms for a faster effect
  }

  window.onload = animateStats;


  

  // Select the navbar
const navbar = document.querySelector('nav');

// Function to add/remove scrolled class based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {  // Adjust the value as needed
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Optional: Toggle icon from bars to times (hamburger to X)
    const icon = toggleBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
});



// menu
const items = [
  { name: "Cappuccino", category: "Espresso", img: "pic5.jpg" },
  { name: "Americano", category: "Black", img: "pic5.jpg" },
  { name: "Espresso", category: "Espresso", img: "pic5.jpg" },
  { name: "Doppio Shot", category: "Doppio", img: "pic5.jpg" },
  { name: "Flat White", category: "Black", img: "pic5.jpg" },
  { name: "Latte", category: "Espresso", img: "pic5.jpg" },
  { name: "Macchiato", category: "Doppio", img: "pic5.jpg" },
  { name: "Long Black", category: "Black", img: "pic5.jpg" },
  { name: "Black Coffee", category: "Black", img: "pic5.jpg" },
];

const cardsContainer = document.querySelector(".cards");
const filterButtons = document.querySelectorAll(".filter span");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentCategory = "All";
let currentPage = 1;
const itemsPerPage = 4;

function renderCards() {
  cardsContainer.classList.add("fade-out");

  setTimeout(() => {
    cardsContainer.innerHTML = "";

    const filtered = currentCategory === "All" ? items : items.filter(i => i.category === currentCategory);
    const totalPages = Math.ceil(filtered.length / itemsPerPage);

    // Ensure currentPage doesn't exceed totalPages
    if (currentPage > totalPages) currentPage = totalPages || 1;

    const start = (currentPage - 1) * itemsPerPage;
    const paginated = filtered.slice(start, start + itemsPerPage);

    paginated.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${item.img}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <button>View More</button>
      `;
      cardsContainer.appendChild(card);
    });

    cardsContainer.classList.remove("fade-out");
    cardsContainer.classList.add("fade-in");

    setTimeout(() => cardsContainer.classList.remove("fade-in"), 300);

    // Disable pagination buttons when at the start or end
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
  }, 200);
}

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.textContent;
    currentPage = 1;  // Reset to first page when filter is changed
    renderCards();
  });
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderCards();
  }
});

nextBtn.addEventListener("click", () => {
  const filtered = currentCategory === "All" ? items : items.filter(i => i.category === currentCategory);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderCards();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  renderCards();
});

