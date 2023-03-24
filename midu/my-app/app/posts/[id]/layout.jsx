import Link from "next/link";

const fetchSinglePost = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });
  return await response.json();
};

export default async function Post({ children, params }) {
  const { id } = params;
  const post = await fetchSinglePost(id);

  return (
    <div>
      <article>
        <h1 className="font-bold text-xl text-blue-500">{post.title}</h1>
        <p className="font-thin text-sm">{post.body}</p>
        <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
        {children}
      </article>
    </div>
  );
}
