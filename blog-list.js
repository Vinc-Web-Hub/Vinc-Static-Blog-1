const blogFiles = {
    main: 'blog.html',
    music: 'blog-music.html',
    science: 'blog-science.html'
};

// Function to fetch and parse blog data from HTML files
async function fetchBlogData(category, file) {
    const response = await fetch(file);
    const text = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    const posts = doc.querySelectorAll('.blog-post');
    const blogs = Array.from(posts).map(post => ({
        number: post.dataset.number,
        title: post.dataset.title,
        date: post.dataset.date,
        link: `${file}#${post.id}`
    }));
    return blogs;
}

// Function to generate blog list items
async function generateBlogList(category, containerId) {
    const container = document.getElementById(containerId);
    const blogs = await fetchBlogData(category, blogFiles[category]);
    
    // Clear existing content
    container.innerHTML = '';
    
    // Generate list items
    blogs.forEach(blog => {
        const listItem = document.createElement('li');
        listItem.className = 'blog-item';
        listItem.id = `${category}-${blog.number}`;
        
        listItem.innerHTML = `
            <a href="${blog.link}">
                <div class="blog-item-left">
                    <span class="blog-number">#${blog.number}</span>
                    <span class="blog-title">${blog.title}</span>
                </div>
                <span class="blog-date">${blog.date}</span>
            </a>
        `;
        
        container.appendChild(listItem);
    });
}

// Generate all blog lists when the page loads
document.addEventListener('DOMContentLoaded', function() {
    generateBlogList('main', 'main-blog-list');
    generateBlogList('music', 'music-blog-list');
    generateBlogList('science', 'science-blog-list');
});
