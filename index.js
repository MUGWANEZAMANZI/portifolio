document.addEventListener("DOMContentLoaded", function() {
    const divs = document.querySelectorAll(".content");
    const links = document.querySelectorAll("header a, span a");
    //const links = document.querySelectorAll("span a")

    function showDiv(id) {
        divs.forEach(div => {
            if (div.id === id) {
                div.classList.add("active");
            } else {
                div.classList.remove("active");
            }
        });
    }

    // Add event listeners to the header links
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent the default anchor behavior
            const targetId = link.getAttribute("data-target");
            showDiv(targetId);
        });
    });

    // Optionally, show the first division initially
    //showDiv('home');
    //showDiv('about');
});
