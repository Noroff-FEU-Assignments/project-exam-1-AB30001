import { getArticles } from "./posts.js";
import { renderArticles } from "./renderposts.js";
import { limitPosts } from "./postLimit.js";

export async function articlesPage() {
    const articles = await getArticles();
    renderArticles(articles);
    limitPosts();
}







