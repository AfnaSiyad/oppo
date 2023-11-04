let items = document.querySelectorAll('#recipeCarousel .carousel-item')

		items.forEach((el) => {
			const minPerSlide = 3;
			let next = el.nextElementSibling;

			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
});

let items1 = document.querySelectorAll('#oppoEvents .carousel-item')

		items1.forEach((el) => {
			const minPerSlide = 3;
			let next = el.nextElementSibling;

			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = items1[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
});

let items2 = document.querySelectorAll('#exploreOppo .carousel-item')

		items2.forEach((el) => {
			const minPerSlide = 3;
			let next = el.nextElementSibling;

			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = items2[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
});

const carouselItems = document.querySelectorAll('.carousel-item');

carouselItems.forEach((container, index)=>{
    const carouselImage = container.querySelector('.overflow-hidden');
    console.log(carouselImage + "Image");

    container.addEventListener('mouseenter',()=>{
        carouselImage.style.transform = "scale(1.1)";
    });

    container.addEventListener('mouseleave',()=>{
        carouselImage.style.transform = "scale(1)";
    });

});


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
