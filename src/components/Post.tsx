interface PostObject {
    id: number;
    title: string;
    author: string;
    preview: string;
    date: string;
}

interface BlogPost {
    post: PostObject;

}

function Post({ post }: BlogPost) {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.author}</p>
            <p>{post.preview}</p>
            <p>{post.date}</p>
        </div>
    )
}

export default Post