document.addEventListener("DOMContentLoaded", () => {
    // Modal Functionality
    const modal = document.getElementById("img-modal");
    if (modal) {
        const modalImg = document.getElementById("modal-img");
        const captionText = document.getElementById("caption");
        const closeBtn = document.querySelector(".close");
        const images = document.querySelectorAll(".clickable-img");

        images.forEach(img => {
            img.addEventListener("click", () => {
                modal.style.display = "block";
                modalImg.src = img.src;
                captionText.textContent = img.alt;
                document.body.style.overflow = "hidden";
            });
        });

        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }
        });
    }

    // Filtering Functionality (only for index.html)
    if (document.querySelector('.pricing-tabs')) {
        function filterTemplates(category) {
            // Update active tab
            document.querySelectorAll('.tab-button').forEach(button => {
                button.classList.remove('active');
                if (button.textContent.toLowerCase().includes(category)) {
                    button.classList.add('active');
                } else if (category === 'all') {
                    document.querySelector('.tab-button:first-child').classList.add('active');
                }
            });

            // Show/hide templates
            document.querySelectorAll('.template-card').forEach(card => {
                if (category === 'all') {
                    card.style.display = 'block';
                } else if (card.classList.contains(category)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }
        
        // Initialize
        filterTemplates('all');
    }

    // Set active nav link
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});