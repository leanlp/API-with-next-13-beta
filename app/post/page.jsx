

const fetchPosts = () => {
    return  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
}


export default async function PostPage ({params}) {
 const posts = await fetchPosts()
   
 



    return (
        <section>
            {posts.slice(0,9).map(post => (
                <article key= {post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </article>
            ))}
        {/* <h1>este es el post {id}</h1> */}
        </section>
    )
}