import { apiUrl as apiUrlSingle } from "./constantsSingle.js";
import { apiUrlWithEmbed } from "./constants.js";
// Importing for fetching a single article


// Fetch all articles with embedded content
export async function getArticles() {
    try {
        console.log(`Fetching articles from: ${apiUrlWithEmbed}`); // Debugging line
        const response = await fetch(apiUrlWithEmbed);
        if (!response.ok) throw new Error('Network response was not ok.');
        const articles = await response.json();
        return articles;
    } catch (error) {
        console.error("Failed to fetch articles:", error);
    }
}

// Fetch a single article with embedded content
export async function getArticle(id) {
    try {
        const url = `${apiUrlSingle}${id}?_embed`;
        console.log(`Fetching single article from: ${url}`); // Debugging line
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok.');
        const article = await response.json();
        return article;
    } catch (error) {
        console.error(`Failed to fetch article ${id}:`, error);
    }
}














