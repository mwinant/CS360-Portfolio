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
