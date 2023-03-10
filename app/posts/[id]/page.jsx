import Image from 'next/image';
import ListOfPosts from "../ListOfPosts";
import PostPage from "../page";

const fetchSingPost = (id) => {
    
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
}

export default async function Post ({params}) {
    const {id} = params
    const post = await fetchSingPost(id)
    return ( <>
        {/* <h1> {id}</h1> */}
        <br />
        <article>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <br />
            <img src={`https://unavatar.io/${id}`}  width={200} height={200}/>
        </article>
        </>
    )
}