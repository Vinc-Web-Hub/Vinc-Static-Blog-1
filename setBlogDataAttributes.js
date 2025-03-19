function setBlogDataAttributes() {
    alert('entering setBlogDataAttributes');
    return new Promise((resolve) => {
        const posts = document.querySelectorAll('.blog-post');
        posts.forEach(post => {
            const number = post.querySelector('.post-number').textContent.replace('#', '');
            const title = post.querySelector('.post-title').textContent;
            const date = post.querySelector('.post-date').textContent;
            post.dataset.number = number;
            post.dataset.title = title;
            post.dataset.date = date;
        });
        resolve();
    });
}