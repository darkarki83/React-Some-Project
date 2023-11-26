import s from './MyPosts.module.css';
import Post from './Post/Post';
import React, { useState } from 'react';

export default function MyPosts() {

  const posts = [
    { message: "Hi how are you", likes: "7", id: 1 },
    { message: "Its my first post", likes: "28", id: 2 },
    { message: "Beautiful day outside!", likes: "15", id: 3 },
    { message: "Learning React is fun", likes: "22", id: 4 },
    { message: "Just finished a great book", likes: "18", id: 5 },
    { message: "Working on a new project", likes: "30", id: 6 },
    { message: "Cooked a delicious meal today", likes: "25", id: 7 },
    { message: "Went for a long walk", likes: "12", id: 8 },
    { message: "Started learning a new language", likes: "20", id: 9 }
  ];

  let postsElements = posts.map(p => <Post message={p.message} likes={p.likes} />);

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
        {postsElements}
      </div>
    </div>
  )
}