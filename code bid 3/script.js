document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const destinations = document.querySelectorAll(".destination");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            const category = this.innerText.toLowerCase(); // Get the tab name

            tabs.forEach(t => t.classList.remove("active")); // Remove active class from all tabs
            this.classList.add("active"); // Add active class to the clicked tab

            destinations.forEach(destination => {
                if (category === "popular" && destination.dataset.category === "popular") {
                    destination.style.display = "block";
                } else if (category === "trending" && destination.dataset.category === "trending") {
                    destination.style.display = "block";
                } else {
                    destination.style.display = "none";
                }
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const destinations = document.querySelectorAll(".destination");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const selected = tab.textContent.toLowerCase(); // 'popular' or 'trending'

            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            destinations.forEach(dest => {
                const category = dest.getAttribute("data-category");
                if (category === selected) {
                    dest.style.display = "block";
                } else {
                    dest.style.display = "none";
                }
            });
        });
    });
});
function toggleFilters() {
  const menu = document.getElementById('filterMenu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
function performSearch(inputId) {
  const query = document.getElementById(inputId).value.toLowerCase().trim();

  const pageMap = {
    london: "london.html",
    paris: "paris.html",
    newyork: "newyork.html",
    tokyo: "tokyo.html",
    delhi: "delhi.html",
    dubai: "dubai.html",
    rome: "rome.html",
    bali: "bali.html",
    sydney: "sydney.html",
    singapore: "singapore.html"
  };

  if (pageMap[query]) {
    window.location.href = pageMap[query];
  } else {
    alert("Destination not found!");
  }
}
