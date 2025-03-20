function setBlogDataAttributes() {
    alert('entering setBlogDataAttributes');
    return new Promise((resolve) => {
        const posts = document.querySelectorAll('.blog-post');
        alert(`Found ${posts.length} blog posts`);
        posts.forEach(post => {
            const number = post.querySelector('.post-number').textContent.replace('#', '');
            const title = post.querySelector('.post-title').textContent;
            const date = post.querySelector('.post-date').textContent;
            post.dataset.number = number;
            post.dataset.title = title;
            post.dataset.date = date;
            alert(`Post data: ${number}, ${title}, ${date}`);
        });
        alert('exiting setBlogDataAttributes');
        resolve();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    setBlogDataAttributes().then(() => {
        alert('setBlogDataAttributes resolved');
    });
});