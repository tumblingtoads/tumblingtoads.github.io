import Markdown from 'markdown-to-jsx';
import React, { useState, useEffect } from 'react';

function Content(props) {
    const file_name = props.post.content;
    const tags = props.post.tags;
    console.log(tags);
    const [post, setPost] = useState('');
    useEffect(() => {
        import(`./blog/${file_name}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    });

    var tagsElem = null;
    if (tags){
        tagsElem = tags.map((tag) => {
            return (
                <div className='blog-content-tags' key={tag}>{tag}</div>
            )
        });
    }

    return (
        <div className="blog-content">
            <div>{props.post.month}, {props.post.year}</div>
            <Markdown>
                {post}
            </Markdown>
            <div>
                {tagsElem}
            </div>
        </div>
    );
}

export default Content;
