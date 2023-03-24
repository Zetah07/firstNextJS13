import {LikeButton} from './LikeButton';
import Link from 'next/link';

const fetchPosts =  () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-store'}) // la importancia del feching de datos o con el next: ( y el tiempo de cacheo)
      .then((response) => response.json())
  }
  
  export default async function ListOfPosts() {
    const posts = await fetchPosts();
    return posts.map((post) => (
          <article key={post.id}>
            <Link href={`/posts/${post.id}`}>
            <h1 className="font-bold text-xl text-blue-500 pt-7">{post.title}</h1>
            <p className="font-thin text-sm">{post.body}</p>
            </Link>
            <LikeButton id={post.id} />
          </article>
        )
    );
  }
  