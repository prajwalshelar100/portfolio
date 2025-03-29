document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.querySelector(".dark-mode-toggle");
    const body = document.body;

    // Load the user's preference from localStorage
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
    }

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Save preference in localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const text = "Versatile Software Developer | MCA graduate with Strong Command in Java, Python, AI/ML and keen interest in low-level programming.";
    const speed = 35; // Typing speed (in ms)
    let index = 0;
    const typewriterElement = document.getElementById("typewriter");
    const enterBtn = document.getElementById("enter-btn");

	function typeWriter() {
	    if (index < text.length) {
	        typewriterElement.innerHTML = text.substring(0, index + 1) + '<span class="cursor">|</span>';
	        index++;
	        setTimeout(typeWriter, speed);
	    } else {
	        keepCursorBlinking();
	        enterBtn.style.display = "inline-block";  // Show button smoothly
	        enterBtn.style.opacity = "0"; 
	        setTimeout(() => {
	            enterBtn.style.opacity = "1"; 
	            enterBtn.style.transition = "opacity 0.5s ease-in-out";
	        }, 300);
	    }
	}


    function keepCursorBlinking() {
        typewriterElement.innerHTML = text + '<span class="cursor">|</span>'; // Keep cursor blinking
    }


    // Detect "Enter" key press after typing completes
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && enterBtn.style.display === "inline-block") {
            navigate();
        }
    });

    typeWriter();
});
function navigate() {
    window.location.href = "/about"; // Redirect to About page
}
