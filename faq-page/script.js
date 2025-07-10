const acc = document.querySelectorAll(".accordion");
    acc.forEach(btn => {
      btn.addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    });
  </script>