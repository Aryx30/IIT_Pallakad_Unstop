
document.addEventListener("DOMContentLoaded", () => {
    
    fetch("https://webmosaic.petrichor.events/posts")
        .then(response => response.json())
        .then(posts => {
            const postsContainer = document.getElementById("posts");
            postsContainer.innerHTML = "<h2>All Posts</h2>";
            posts.forEach(post => {
                postsContainer.innerHTML += `<p>Title: ${post.title}</p>`;
                
            });
        })
        .catch(error => {
            console.error("Error fetching posts:", error);
        });

    /
    fetch("/post?id=123")
        .then(response => response.json())
        .then(post => {
            const postDetailsContainer = document.getElementById("postDetails");
            postDetailsContainer.innerHTML = "<h2>Post Details</h2>";
            postDetailsContainer.innerHTML += `<p>Title: ${post.title}</p>`;
            postDetailsContainer.innerHTML += `<p>Content: ${post.content}</p>`;
            
        })
        .catch(error => {
            console.error("Error fetching post details:", error);
        });

    
});

