import Post from "./Post";
import withLogger from "./withLogger";

interface PostObject {
  id: number;
  title: string;
  author: string;
  preview: string;
  date: string;
}

const samplePosts: PostObject[] = [
  {
    id: 1,
    title: "Learn React",
    author: "Alex Banks",
    preview:
      "If you want to learn how to build efficient user interfaces with React, this is your book. It will show you how to create",
    date: "June 2020",
  },

  {
    id: 2,
    title: "Modern CSS Features: A Complete Guide to CSS in 2026",
    author: "Yash Thakker",
    preview:
      "This comprehensive guide covers the modern CSS landscape based on 2026 production patterns, with practical examples and adoption insights.",
    date: "Apr 24, 2026",
  },
];

function PostList() {
  return (
    <div style={{padding: "20px"}}>
      <h1>Posts</h1>
      <div style={{width:'100%',display:'grid'}}>
        {samplePosts.map((post) => (
          <Post key={post.id} post={post} highlight={post.author === "Alex Banks"}/>))}
      </div>
    </div>
  );
}
export default withLogger(PostList,'PostList');
