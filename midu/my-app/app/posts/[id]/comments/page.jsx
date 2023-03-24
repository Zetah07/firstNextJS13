const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    cache: "no-store",
  }).then((response) => response.json());
};

export default async function Comments({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <div>
      <ul className="bg-slate-900 px-4">
        {comments.map((comment) => (
          <li key={comment.id}>
            <h4 className="font-extrabold">➖{comment.name}</h4>
            <small className="font-extralight">{comment.body}</small> <br/>
            <small className="font-thin text-gray-400">{comment.email}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
