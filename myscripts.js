function loadNavbar() {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;

            // highlight active page
            const currentPage = window.location.pathname.split("/").pop();
            document.querySelectorAll(".navbar a").forEach(link => {
                if (link.getAttribute("href") === currentPage) {
                    link.classList.add("active");
                }
            });
        });
}

function loadFooter() {
    fetch("footer.html")
        .then(response => {
            if (!response.ok) throw new Error("Footer file not found");
            return response.text();
        })
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        })
        .catch(err => console.error("Failed to load footer:", err));
}

