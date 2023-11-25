import s from './MyPosts.module.css';
import Post from './Post/Post';
import React, { useState } from 'react';

export default function MyPosts() {

  const [text, setText] = useState('');

  const addPost = () => {
    // Functionality to add a post
    console.log('Post added:', text);
  };

  const removeText = () => {
    // Functionality to remove text from textarea
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
        <Post message="Hi how are you" likes="7" />
        <Post message="Its my first post" likes="28" />
      </div>
    </div>
  )
}