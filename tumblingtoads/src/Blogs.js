import { useNavigate } from "react-router-dom";

function Blogs(props) {
    const navigate = useNavigate();
    const blogs = props.posts.map((post) => {
        return (
            <div>
                <div className="blog-preview-container" onClick={() => {
                            props.notifyParent(post);
                            navigate('blog');
                        }
                    } key={post.name}>
                    <div className="blog-preview-metadata">
                        <div className="blog-preview-metadata-date">
                            {post.year}
                        </div>
                        <div className="blog-preview-metadata-title">
                            {post.name}
                        </div>
                        <div className="blog-preview-metadata-desc">
                            {post.description}
                        </div>
                    </div>
                    <img  className="blog-preview-thumbnail" src={post.thumbnail}></img>
                </div>
            </div>
        )
    });
    return (
        <div className="blog-content">
           {blogs}
        </div>
    );
}

export default Blogs;