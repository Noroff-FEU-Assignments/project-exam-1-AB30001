import { getArticle } from "./posts.js";

export async function articlePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
  
    console.log('Article ID:', id); // Debugging line
  
    if (id) {
        const article = await getArticle(id);
        console.log('Fetched Article:', article); // Debugging line
        renderArticle(article);
    } else {
        console.error('Article ID is missing in the URL');
    }
}

function renderArticle(articleData) {
    const articleDetailsContainer = document.querySelector('.article-details');
    if (!articleDetailsContainer) {
        console.error('Article details container not found');
        return;
    }
  
    console.log('Rendering Article:', articleData); // Debugging line
  
    
    const imageUrl = articleData.featured_media_src_url ? articleData.featured_media_src_url : 'placeholder-image-url.jpg'; 
  
    articleDetailsContainer.innerHTML = `
        <h2>${articleData.title.rendered}</h2>
        <p class="author-name">Author: ${articleData._embedded.author[0].name}</p>

        <div>${articleData.content.rendered}</div>
        <p>Published on: ${new Date(articleData.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        

    `;
}