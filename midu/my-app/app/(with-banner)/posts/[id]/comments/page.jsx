import Image from "next/image";

const fetchComments = async (id) => {
  try{
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    cache: "no-store",
  }).then((response) => response.json());
  } catch (error) {
    throw new Error(error);
}
};

export default async function Comments({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <div>
      <ul className="bg-slate-900 px-4 rounded-lg">
        {comments.map((comment) => (
          <li key={comment.id}>
            <Image src={`https://api.dicebear.com/5.x/adventurer/svg?seed=${comment.email}.svg`} width={60} height={60} alt="avatar" />
            <h4 className="font-extrabold">➖{comment.name}</h4>
            <small className="font-extralight">{comment.body}</small> <br/>
            <small className="font-thin text-gray-400">{comment.email}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
