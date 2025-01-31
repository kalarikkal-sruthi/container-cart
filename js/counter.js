document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".count");
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = counter.getAttribute("data-target");
            const isPlusSign = target.startsWith("+");
            const finalValue = parseInt(target.replace("+", ""));
            let count = 0;
            const increment = Math.ceil(finalValue / 100);

            const animate = () => {
                count += increment;
                if (count >= finalValue) {
                    counter.innerText = isPlusSign ? `+${finalValue}` : finalValue;
                } else {
                    counter.innerText = isPlusSign ? `+${count}` : count;
                    requestAnimationFrame(animate);
                }
            };

            animate();
        };
        updateCount();
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".full-link_item");
    const hoverImage = document.getElementById("hover-image");

    // Display the first child image on page load
    if (items.length > 0) {
        const firstImageUrl = items[0].getAttribute("data-image");
        hoverImage.src = firstImageUrl;
        hoverImage.style.display = "block";
    }

    // Event listeners for hover effect
    items.forEach(item => {
        item.addEventListener("mouseenter", () => {
            const imageUrl = item.getAttribute("data-image");
            hoverImage.src = imageUrl;
            hoverImage.style.display = "block";
        });

        item.addEventListener("mouseleave", () => {
            hoverImage.style.display = "block"; // Keep the image visible even when the mouse leaves
        });
    });
});




