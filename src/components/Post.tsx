interface PostObject {
    id: number;
    title: string;
    author: string;
    preview: string;
    date: string;
}

interface BlogPost {
    post: PostObject;
    highlight: boolean;

}

function Post({ post, highlight }: BlogPost) {
    return (
        <div style={{border: '1px solid #ddd',borderRadius:'8px',padding:'16px', margin: '16px', backgroundColor: highlight ? '#fef3c7' : '#ffffff'}}>
            <h2 style={{fontWeight: 'bold'}}>{post.title}</h2>
            <p>By {post.author}</p>
            <p style={{fontStyle:'italic'}}>{post.preview}</p>
            <p>{post.date}</p>
        </div>
    )
}

export default Post