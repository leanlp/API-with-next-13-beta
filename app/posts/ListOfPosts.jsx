import Link from "next/link"
import { LikeButton } from "./LikeButton"
import Image from 'next/image';

const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {next: {revalidate: 60}})
        .then(res => res.json())
}


export async function ListOfPosts() {
    const posts = await fetchPosts()


    return (
         
        posts.slice(0, 19).map(post => (
            <article key={post.id}>
                <>
                <marquee style={{background: "#fff", color: "purple"}}> api next 13, beta test. </marquee>
                <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                <h2 style={{ color: '#09f' }}>{post.title}</h2>
                <p>{post.body}</p>
                <LikeButton id={post.id}/>
              
                </Link>
                
                </>
                
            <img src={`https://unavatar.io/${post.id}`} width={200} height={200} />
            
            </article>
        ))
       

    )
}