// Get all elements with the class name "zoom-container"
const zoomContainers = document.querySelectorAll('.carousel-item');

    console.log(zoomContainers);

// Add event listeners to each container
zoomContainers.forEach(container => {
    const imageZoom = container.querySelector('.card-img-top');

    console.log(imageZoom);

    container.addEventListener('mouseenter', () => {
        imageZoom.style.transform = 'scale(1.2)'; // Zoom in
    });

    container.addEventListener('mouseleave', () => {
        imageZoom.style.transform = 'scale(1)'; // Zoom out when mouse leaves
    });
});
