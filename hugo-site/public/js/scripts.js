document.addEventListener("DOMContentLoaded", function () {
    // Load the external header
    fetch("../header.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("header").innerHTML = data;

            // After loading the header, set the dynamic page title
            const pageTitle = document.querySelector('.page-title');
            if (pageTitle) {
                // You can define the page title dynamically here
                const titleMap = {
                    "projects.html": "Projects",
                    "tableau.html": "Projects",
                    "django.html": "Projects",
                    "report.html": "Projects",
                    "homelab.html": "Projects",
                    "skills.html": "Skills",
                    "professional.html": "Professional",
                    "contact.html": "Contact",
                    "index.html": "Spencer K. Lay"
                };
                const currentPage = window.location.pathname.split("/").filter(Boolean).pop();
                pageTitle.textContent = titleMap[currentPage] || "Spencer K. Lay"; // Default title if not mapped
                document.title = titleMap[currentPage];  // Changes the <title> tag of the page dynamically
            }

        
            // ---- Now that the header is loaded, interact with its elements. ---- //
            // Get the theme toggle element now that it's loaded.
            const themeToggle = document.getElementById('theme-toggle');
            const body = document.body;
        
            // Get the drop-open menu elements.
            const headerTitle = document.querySelector('.page-title'); // Using querySelector
            const dropdownTree = document.getElementById('dropdown-tree');
        
            // Set up the dropdown toggle on header title click
            headerTitle.addEventListener('click', function () {
                dropdownTree.classList.toggle('visible');
            });

            // Optional: Hide dropdown if clicked outside
            document.addEventListener('click', function (event) {
                if (!headerTitle.contains(event.target) && !dropdownTree.contains(event.target)) {
                    dropdownTree.classList.remove('visible');
                }
            });
            
            // Set the saved theme on load
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                body.classList.add('dark');
            }

            // Toggle theme and save preference
            themeToggle.addEventListener('click', function () {
                body.classList.toggle('dark');
                if (body.classList.contains('dark')) {
                    localStorage.setItem('theme', 'dark');
                } else {
                    localStorage.removeItem('theme');
                }
            });

            // Fade out current page on link click (after the header is loaded)
            const links = document.querySelectorAll('a'); 
            links.forEach(link => {
                link.addEventListener('click', function(event) {
                    event.preventDefault();  
                    const url = this.getAttribute('href');
                    
                    body.classList.remove('fade-in');
                    body.classList.add('fade'); 

                    setTimeout(function() {
                        window.location.href = url;
                    }, 500);  
                });
            });

            // Fade in page on load
            body.classList.add('fade-in');
        });
});
