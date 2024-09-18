import { useEffect, useState } from "react";

export default function Post({ id }: { id: number }) {
  const [post, setPost] = useState<{ title: string; body: string }>();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => response.json())
      .then((data) => setPost(data as { title: string; body: string }));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p data-testid="post-body">{post.body}</p>
    </div>
  );
}
