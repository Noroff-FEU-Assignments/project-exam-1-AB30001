import { articlesPage } from "./articles.js";
import { articlePage } from "./article.js"; 



document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const loading = document.querySelector(".loader");

    
    if (path.endsWith("index.html") || path.endsWith("read-more.html") || path === '/' || path.endsWith('/') || path.endsWith("/read-more")) {
        articlesPage();
    }
    

    
    if (path.endsWith("post.html")) {
        articlePage();
    }

    
    setTimeout(function() {
        if (loading) {
            loading.innerHTML = "Done loading!";
            setTimeout(function() {
                loading.style.display = "none";
            }, 1000);
        }
    }, 2000);
});
