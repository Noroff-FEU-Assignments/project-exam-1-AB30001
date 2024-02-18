import { getArticles } from './posts.js';

// This function fetches articles and then renders them in the slider.
async function loadAndRenderArticlesForSlider() {
    try {
        const articles = await getArticles();
        renderArticlesForSlider(articles);
    } catch (error) {
        console.error("Error loading and rendering articles for slider:", error);
    }
}

function renderArticlesForSlider(posts) {
    const sliderContainer = document.querySelector('.product-container'); // Adjust this selector to your slider's container

    //HTML slider
    sliderContainer.innerHTML = '';

    posts.forEach(post => {
        const slideElement = document.createElement('div');
        slideElement.className = 'slide'; // Assuming your slider uses 'slide' class for its items

        //extracting the featured image URL
        const featuredImageUrl = post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0] && post._embedded['wp:featuredmedia'][0].source_url
            ? post._embedded['wp:featuredmedia'][0].source_url
            : 'placeholder-image.jpg';

        // Formatting the date
        const date = new Date(post.date).toLocaleDateString("en-US", {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // inner HTML similar to `renderArticles` but adapted for slider layout
        slideElement.innerHTML = `
            <a href="post.html?id=${post.id}">
                <img src="${featuredImageUrl}" alt="${post.title.rendered}" class="featured-image">
                <div>
                    <h3>${post.title.rendered}</h3>
                    <p class="post-date">${date}</p>
                </div>
            </a>
        `;

        // Append to the slider container
        sliderContainer.appendChild(slideElement);
    });

    
}

// Call the function to load and render articles when the document is ready
document.addEventListener('DOMContentLoaded', loadAndRenderArticlesForSlider);


document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.product-container');
    const nextButton = document.querySelector('.nxt-btn');
    const prevButton = document.querySelector('.pre-btn');

    nextButton.addEventListener('click', function() {
        // Scroll to the next section of the slider
        slider.scrollBy({ left: 250, behavior: 'smooth' });
    });

    prevButton.addEventListener('click', function() {
        // Scroll to the previous section of the slider
        slider.scrollBy({ left: -250, behavior: 'smooth' });
    });
});