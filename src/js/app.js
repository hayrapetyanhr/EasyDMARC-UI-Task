let button = document.querySelector(".sidebar-toggle");
let sidebar = document.querySelector(".sidebar");

button.addEventListener('click', function () {
    if (sidebar.classList.contains("show")) {
        sidebar.classList.remove("show");
    } else {
        sidebar.classList.add("show");
    }
});