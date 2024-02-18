export function renderArticles(posts) {
    const container = document.querySelector('.articles-list'); 

   

    container.innerHTML = '';
posts.forEach(post => {
    const postElement = document.createElement('div'); 
    postElement.className = 'article-item'; // Class for styling

    // Extracting the featured image URL from the embedded objects
    const featuredImageUrl = post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0] && post._embedded['wp:featuredmedia'][0].source_url
        ? post._embedded['wp:featuredmedia'][0].source_url
        : 'placeholder-image.jpg'; 

    // Formatting the date
    const date = new Date(post.date).toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Creating HTML structure with additional details
    postElement.innerHTML = `
        <a href="post.html?id=${post.id}">
            <img src="${featuredImageUrl}" alt="${post.title.rendered}" class="featured-image">
            <h3>${post.title.rendered}</h3>
            <p class="post-date">${date}</p>
        </a>
    `;

    container.appendChild(postElement);
});

}


