export function limitPosts() {
    const maxPosts = 12; // Maximum number of posts to display
    const container = document.getElementById('index-articles');
    const posts = container.querySelectorAll('.article-item');

    if (posts.length > maxPosts) {
        // Hide excess posts beyond the maximum limit
        for (let i = maxPosts; i < posts.length; i++) {
            posts[i].style.display = 'none';
        }
    }
}
