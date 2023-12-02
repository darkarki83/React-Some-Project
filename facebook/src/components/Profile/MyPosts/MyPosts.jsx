import s from './MyPosts.module.css';
import Post from './Post/Post';
import React, { useState } from 'react';

export default function MyPosts(props) {
  
  let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likes} />);

  const [text, setText] = useState('');

  const addPost = () => {
    props.addPost(text);
    setText('');
  };

  const removeText = () => {
    setText('');
  };

  return (
    <div>
      My posts
      <div className={s.post_manager}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your post here..."
        ></textarea>
        <button onClick={addPost}>Add post</button>
        <button onClick={removeText}>Remove</button>
      </div>
      <div className='item'>
        {postsElements}
      </div>
    </div>
  )
}